use std::panic::{AssertUnwindSafe, catch_unwind};
use std::slice;

use cirru_edn::{Edn, EdnListView};

const MAX_BUFFER_BYTES: usize = 256 * 1024 * 1024;
const STATUS_OK: i32 = 0;
const STATUS_INVALID_PAYLOAD: i32 = 8;
const STATUS_INTERNAL_ERROR: i32 = 9;

#[repr(C)]
#[derive(Clone, Copy)]
pub struct CalcitFfiBuffer {
  pub ptr: *mut u8,
  pub len: usize,
  pub cap: usize,
}

#[unsafe(no_mangle)]
pub extern "C" fn calcit_ffi_buffer_version() -> u32 {
  1
}

#[unsafe(no_mangle)]
pub unsafe extern "C" fn calcit_ffi_buffer_free(buffer: CalcitFfiBuffer) {
  if buffer.ptr.is_null() {
    return;
  }
  // SAFETY: Calcit returns exactly the metadata produced by `write_output`.
  drop(unsafe { Vec::from_raw_parts(buffer.ptr, buffer.len, buffer.cap) });
}

unsafe fn decode_request(request_ptr: *const u8, request_len: usize) -> Result<Vec<Edn>, String> {
  if request_len > MAX_BUFFER_BYTES {
    return Err(format!("FFI request exceeds {MAX_BUFFER_BYTES} bytes"));
  }
  if request_ptr.is_null() && request_len != 0 {
    return Err("FFI request pointer is null".to_owned());
  }
  let request = if request_len == 0 {
    &[]
  } else {
    // SAFETY: the host keeps request bytes readable for this call.
    unsafe { slice::from_raw_parts(request_ptr, request_len) }
  };
  let source = std::str::from_utf8(request).map_err(|error| format!("FFI request is not UTF-8: {error}"))?;
  let data = cirru_edn::parse(source).map_err(|error| format!("FFI request is not valid Cirru EDN: {error}"))?;
  let Edn::List(EdnListView(args)) = data else {
    return Err("FFI request must be a Cirru EDN list".to_owned());
  };
  Ok(args)
}

fn encode_edn(value: &Edn) -> Result<Vec<u8>, String> {
  cirru_edn::format(value, true)
    .map(String::into_bytes)
    .map_err(|error| format!("failed to encode Cirru EDN: {error}"))
}

unsafe fn write_output(output: *mut CalcitFfiBuffer, bytes: Vec<u8>) -> i32 {
  if output.is_null() {
    return STATUS_INVALID_PAYLOAD;
  }
  let mut bytes = std::mem::ManuallyDrop::new(bytes);
  // SAFETY: the caller supplied a writable output slot for this call.
  unsafe {
    output.write(CalcitFfiBuffer {
      ptr: bytes.as_mut_ptr(),
      len: bytes.len(),
      cap: bytes.capacity(),
    });
  }
  STATUS_OK
}

pub unsafe fn run_buffer_adapter(
  request_ptr: *const u8,
  request_len: usize,
  output: *mut CalcitFfiBuffer,
  method: fn(Vec<Edn>) -> Result<Edn, String>,
) -> i32 {
  if output.is_null() {
    return STATUS_INVALID_PAYLOAD;
  }
  match catch_unwind(AssertUnwindSafe(|| {
    // SAFETY: forwarded from the exported buffer ABI contract.
    let args = unsafe { decode_request(request_ptr, request_len) }?;
    method(args).and_then(|value| encode_edn(&value))
  })) {
    Ok(Ok(bytes)) => unsafe { write_output(output, bytes) },
    Ok(Err(error)) => {
      let _ = unsafe { write_output(output, error.into_bytes()) };
      1
    }
    Err(_) => {
      let _ = unsafe { write_output(output, b"calcit-regex buffer adapter panicked".to_vec()) };
      STATUS_INTERNAL_ERROR
    }
  }
}

#[cfg(test)]
mod tests {
  use std::ptr;

  use super::*;

  fn first_arg(args: Vec<Edn>) -> Result<Edn, String> {
    args.into_iter().next().ok_or_else(|| "missing argument".to_owned())
  }

  fn copy_buffer(buffer: CalcitFfiBuffer) -> Vec<u8> {
    if buffer.len == 0 {
      vec![]
    } else {
      // SAFETY: the adapter allocation remains live until the test frees it.
      unsafe { slice::from_raw_parts(buffer.ptr, buffer.len) }.to_vec()
    }
  }

  #[test]
  fn buffer_adapter_round_trips_and_rejects_invalid_boundaries() {
    let request = encode_edn(&Edn::List(EdnListView(vec![Edn::str("ok")]))).expect("request");
    assert_eq!(
      unsafe { run_buffer_adapter(request.as_ptr(), request.len(), ptr::null_mut(), first_arg) },
      STATUS_INVALID_PAYLOAD
    );

    let mut output = CalcitFfiBuffer {
      ptr: ptr::null_mut(),
      len: 0,
      cap: 0,
    };
    assert_eq!(
      unsafe { run_buffer_adapter(request.as_ptr(), request.len(), &mut output, first_arg) },
      STATUS_OK
    );
    let decoded = cirru_edn::parse(std::str::from_utf8(&copy_buffer(output)).expect("UTF-8")).expect("EDN");
    assert_eq!(decoded, Edn::str("ok"));
    unsafe { calcit_ffi_buffer_free(output) };
  }
}

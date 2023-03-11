const symbols = {
  DImGuiInputTextCallbackDataGetEventFlag: {
    parameters: ["pointer"],
    result: "i32",
  } as const satisfies Deno.ForeignFunction,
  DImGuiInputTextCallbackDataSetEventFlag: {
    parameters: ["pointer", "i32"],
    result: "void",
  } as const satisfies Deno.ForeignFunction,
  DImGuiInputTextCallbackDataGetFlags: {
    parameters: ["pointer"],
    result: "i32",
  } as const satisfies Deno.ForeignFunction,
  DImGuiInputTextCallbackDataSetFlags: {
    parameters: ["pointer", "i32"],
    result: "void",
  } as const satisfies Deno.ForeignFunction,
  DImGuiInputTextCallbackDataGetEventChar: {
    parameters: ["pointer"],
    result: "u16",
  } as const satisfies Deno.ForeignFunction,
  DImGuiInputTextCallbackDataSetEventChar: {
    parameters: ["pointer", "u16"],
    result: "void",
  } as const satisfies Deno.ForeignFunction,
  DImGuiInputTextCallbackDataGetEventKey: {
    parameters: ["pointer"],
    result: "i32",
  } as const satisfies Deno.ForeignFunction,
  DImGuiInputTextCallbackDataSetEventKey: {
    parameters: ["pointer", "i32"],
    result: "void",
  } as const satisfies Deno.ForeignFunction,
  DImGuiInputTextCallbackDataGetBuf: {
    parameters: ["pointer"],
    result: "buffer",
  } as const satisfies Deno.ForeignFunction,
  DImGuiInputTextCallbackDataSetBuf: {
    parameters: ["pointer", "buffer"],
    result: "void",
  } as const satisfies Deno.ForeignFunction,
  DImGuiInputTextCallbackDataGetBufTextLen: {
    parameters: ["pointer"],
    result: "i32",
  } as const satisfies Deno.ForeignFunction,
  DImGuiInputTextCallbackDataSetBufTextLen: {
    parameters: ["pointer", "i32"],
    result: "void",
  } as const satisfies Deno.ForeignFunction,
  DImGuiInputTextCallbackDataGetBufSize: {
    parameters: ["pointer"],
    result: "i32",
  } as const satisfies Deno.ForeignFunction,
  DImGuiInputTextCallbackDataSetBufSize: {
    parameters: ["pointer", "i32"],
    result: "void",
  } as const satisfies Deno.ForeignFunction,
  DImGuiInputTextCallbackDataGetBufDirty: {
    parameters: ["pointer"],
    result: "bool",
  } as const satisfies Deno.ForeignFunction,
  DImGuiInputTextCallbackDataSetBufDirty: {
    parameters: ["pointer", "bool"],
    result: "void",
  } as const satisfies Deno.ForeignFunction,
  DImGuiInputTextCallbackDataGetCursorPos: {
    parameters: ["pointer"],
    result: "i32",
  } as const satisfies Deno.ForeignFunction,
  DImGuiInputTextCallbackDataSetCursorPos: {
    parameters: ["pointer", "i32"],
    result: "void",
  } as const satisfies Deno.ForeignFunction,
  DImGuiInputTextCallbackDataGetSelectionStart: {
    parameters: ["pointer"],
    result: "i32",
  } as const satisfies Deno.ForeignFunction,
  DImGuiInputTextCallbackDataSetSelectionStart: {
    parameters: ["pointer", "i32"],
    result: "void",
  } as const satisfies Deno.ForeignFunction,
  DImGuiInputTextCallbackDataGetSelectionEnd: {
    parameters: ["pointer"],
    result: "i32",
  } as const satisfies Deno.ForeignFunction,
  DImGuiInputTextCallbackDataSetSelectionEnd: {
    parameters: ["pointer", "i32"],
    result: "void",
  } as const satisfies Deno.ForeignFunction,
} as const satisfies Deno.ForeignLibraryInterface;
export default symbols;

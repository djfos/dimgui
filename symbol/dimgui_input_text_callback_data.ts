// deno-fmt-ignore-file
// const ImVec2 = ["f32","f32"] as const;
const dimguiInputTextCallbackDataSymbols = {
    DImGuiGetEventFlag:{
        parameters: ["pointer"],
        result: "i32",
    } as const satisfies Deno.ForeignFunction,
    DImGuiSetEventFlag:{
        parameters: ["pointer","i32"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiGetFlags:{
        parameters: ["pointer"],
        result: "i32",
    } as const satisfies Deno.ForeignFunction,
    DImGuiSetFlags:{
        parameters: ["pointer","i32"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiGetEventChar:{
        parameters: ["pointer"],
        result: "u16",
    } as const satisfies Deno.ForeignFunction,
    DImGuiSetEventChar:{
        parameters: ["pointer","u16"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiGetEventKey:{
        parameters: ["pointer"],
        result: "i32",
    } as const satisfies Deno.ForeignFunction,
    DImGuiSetEventKey:{
        parameters: ["pointer","i32"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiGetBuf:{
        parameters: ["pointer"],
        result: "buffer",
    } as const satisfies Deno.ForeignFunction,
    DImGuiSetBuf:{
        parameters: ["pointer","buffer"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiGetBufTextLen:{
        parameters: ["pointer"],
        result: "i32",
    } as const satisfies Deno.ForeignFunction,
    DImGuiSetBufTextLen:{
        parameters: ["pointer","i32"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiGetBufSize:{
        parameters: ["pointer"],
        result: "i32",
    } as const satisfies Deno.ForeignFunction,
    DImGuiSetBufSize:{
        parameters: ["pointer","i32"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiGetBufDirty:{
        parameters: ["pointer"],
        result: "bool",
    } as const satisfies Deno.ForeignFunction,
    DImGuiSetBufDirty:{
        parameters: ["pointer","bool"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiGetCursorPos:{
        parameters: ["pointer"],
        result: "i32",
    } as const satisfies Deno.ForeignFunction,
    DImGuiSetCursorPos:{
        parameters: ["pointer","i32"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiGetSelectionStart:{
        parameters: ["pointer"],
        result: "i32",
    } as const satisfies Deno.ForeignFunction,
    DImGuiSetSelectionStart:{
        parameters: ["pointer","i32"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiGetSelectionEnd:{
        parameters: ["pointer"],
        result: "i32",
    } as const satisfies Deno.ForeignFunction,
    DImGuiSetSelectionEnd:{
        parameters: ["pointer","i32"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,

} as const satisfies Deno.ForeignLibraryInterface;
export default dimguiInputTextCallbackDataSymbols
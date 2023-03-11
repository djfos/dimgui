// deno-fmt-ignore-file
const symbols = {
    DImFontAtlasGetFlags:{
        parameters: ["pointer"],
        result: "i32",
    } as const satisfies Deno.ForeignFunction,
    DImFontAtlasSetFlags:{
        parameters: ["pointer","i32"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImFontAtlasGetTexID:{
        parameters: ["pointer"],
        result: "pointer",
    } as const satisfies Deno.ForeignFunction,
    DImFontAtlasSetTexID:{
        parameters: ["pointer","pointer"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImFontAtlasGetTexDesiredWidth:{
        parameters: ["pointer"],
        result: "i32",
    } as const satisfies Deno.ForeignFunction,
    DImFontAtlasSetTexDesiredWidth:{
        parameters: ["pointer","i32"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImFontAtlasGetTexGlyphPadding:{
        parameters: ["pointer"],
        result: "i32",
    } as const satisfies Deno.ForeignFunction,
    DImFontAtlasSetTexGlyphPadding:{
        parameters: ["pointer","i32"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImFontAtlasGetLocked:{
        parameters: ["pointer"],
        result: "bool",
    } as const satisfies Deno.ForeignFunction,
    DImFontAtlasSetLocked:{
        parameters: ["pointer","bool"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImFontAtlasGetUserData:{
        parameters: ["pointer"],
        result: "buffer",
    } as const satisfies Deno.ForeignFunction,
    DImFontAtlasSetUserData:{
        parameters: ["pointer","buffer"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,

} as const satisfies Deno.ForeignLibraryInterface;
export default symbols
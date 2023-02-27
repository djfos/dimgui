// deno-fmt-ignore-file
const ImVec2 = ["f32","f32"] as const;
const dimguiStyleSymbols = {
    DImGuiGetAlpha:{
        parameters: ["pointer"],
        result: "f32",
    } as const satisfies Deno.ForeignFunction,
    DImGuiSetAlpha:{
        parameters: ["pointer","f32"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiGetDisabledAlpha:{
        parameters: ["pointer"],
        result: "f32",
    } as const satisfies Deno.ForeignFunction,
    DImGuiSetDisabledAlpha:{
        parameters: ["pointer","f32"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiGetWindowPadding:{
        parameters: ["pointer"],
        result: {struct:ImVec2},
    } as const satisfies Deno.ForeignFunction,
    DImGuiSetWindowPadding:{
        parameters: ["pointer",{struct:ImVec2}],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiGetWindowRounding:{
        parameters: ["pointer"],
        result: "f32",
    } as const satisfies Deno.ForeignFunction,
    DImGuiSetWindowRounding:{
        parameters: ["pointer","f32"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiGetWindowBorderSize:{
        parameters: ["pointer"],
        result: "f32",
    } as const satisfies Deno.ForeignFunction,
    DImGuiSetWindowBorderSize:{
        parameters: ["pointer","f32"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiGetWindowMinSize:{
        parameters: ["pointer"],
        result: {struct:ImVec2},
    } as const satisfies Deno.ForeignFunction,
    DImGuiSetWindowMinSize:{
        parameters: ["pointer",{struct:ImVec2}],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiGetWindowTitleAlign:{
        parameters: ["pointer"],
        result: {struct:ImVec2},
    } as const satisfies Deno.ForeignFunction,
    DImGuiSetWindowTitleAlign:{
        parameters: ["pointer",{struct:ImVec2}],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiGetWindowMenuButtonPosition:{
        parameters: ["pointer"],
        result: "i32",
    } as const satisfies Deno.ForeignFunction,
    DImGuiSetWindowMenuButtonPosition:{
        parameters: ["pointer","i32"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiGetChildRounding:{
        parameters: ["pointer"],
        result: "f32",
    } as const satisfies Deno.ForeignFunction,
    DImGuiSetChildRounding:{
        parameters: ["pointer","f32"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiGetChildBorderSize:{
        parameters: ["pointer"],
        result: "f32",
    } as const satisfies Deno.ForeignFunction,
    DImGuiSetChildBorderSize:{
        parameters: ["pointer","f32"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiGetPopupRounding:{
        parameters: ["pointer"],
        result: "f32",
    } as const satisfies Deno.ForeignFunction,
    DImGuiSetPopupRounding:{
        parameters: ["pointer","f32"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiGetPopupBorderSize:{
        parameters: ["pointer"],
        result: "f32",
    } as const satisfies Deno.ForeignFunction,
    DImGuiSetPopupBorderSize:{
        parameters: ["pointer","f32"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiGetFramePadding:{
        parameters: ["pointer"],
        result: {struct:ImVec2},
    } as const satisfies Deno.ForeignFunction,
    DImGuiSetFramePadding:{
        parameters: ["pointer",{struct:ImVec2}],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiGetFrameRounding:{
        parameters: ["pointer"],
        result: "f32",
    } as const satisfies Deno.ForeignFunction,
    DImGuiSetFrameRounding:{
        parameters: ["pointer","f32"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiGetFrameBorderSize:{
        parameters: ["pointer"],
        result: "f32",
    } as const satisfies Deno.ForeignFunction,
    DImGuiSetFrameBorderSize:{
        parameters: ["pointer","f32"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiGetItemSpacing:{
        parameters: ["pointer"],
        result: {struct:ImVec2},
    } as const satisfies Deno.ForeignFunction,
    DImGuiSetItemSpacing:{
        parameters: ["pointer",{struct:ImVec2}],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiGetItemInnerSpacing:{
        parameters: ["pointer"],
        result: {struct:ImVec2},
    } as const satisfies Deno.ForeignFunction,
    DImGuiSetItemInnerSpacing:{
        parameters: ["pointer",{struct:ImVec2}],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiGetCellPadding:{
        parameters: ["pointer"],
        result: {struct:ImVec2},
    } as const satisfies Deno.ForeignFunction,
    DImGuiSetCellPadding:{
        parameters: ["pointer",{struct:ImVec2}],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiGetTouchExtraPadding:{
        parameters: ["pointer"],
        result: {struct:ImVec2},
    } as const satisfies Deno.ForeignFunction,
    DImGuiSetTouchExtraPadding:{
        parameters: ["pointer",{struct:ImVec2}],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiGetIndentSpacing:{
        parameters: ["pointer"],
        result: "f32",
    } as const satisfies Deno.ForeignFunction,
    DImGuiSetIndentSpacing:{
        parameters: ["pointer","f32"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiGetColumnsMinSpacing:{
        parameters: ["pointer"],
        result: "f32",
    } as const satisfies Deno.ForeignFunction,
    DImGuiSetColumnsMinSpacing:{
        parameters: ["pointer","f32"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiGetScrollbarSize:{
        parameters: ["pointer"],
        result: "f32",
    } as const satisfies Deno.ForeignFunction,
    DImGuiSetScrollbarSize:{
        parameters: ["pointer","f32"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiGetScrollbarRounding:{
        parameters: ["pointer"],
        result: "f32",
    } as const satisfies Deno.ForeignFunction,
    DImGuiSetScrollbarRounding:{
        parameters: ["pointer","f32"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiGetGrabMinSize:{
        parameters: ["pointer"],
        result: "f32",
    } as const satisfies Deno.ForeignFunction,
    DImGuiSetGrabMinSize:{
        parameters: ["pointer","f32"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiGetGrabRounding:{
        parameters: ["pointer"],
        result: "f32",
    } as const satisfies Deno.ForeignFunction,
    DImGuiSetGrabRounding:{
        parameters: ["pointer","f32"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiGetLogSliderDeadzone:{
        parameters: ["pointer"],
        result: "f32",
    } as const satisfies Deno.ForeignFunction,
    DImGuiSetLogSliderDeadzone:{
        parameters: ["pointer","f32"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiGetTabRounding:{
        parameters: ["pointer"],
        result: "f32",
    } as const satisfies Deno.ForeignFunction,
    DImGuiSetTabRounding:{
        parameters: ["pointer","f32"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiGetTabBorderSize:{
        parameters: ["pointer"],
        result: "f32",
    } as const satisfies Deno.ForeignFunction,
    DImGuiSetTabBorderSize:{
        parameters: ["pointer","f32"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiGetTabMinWidthForCloseButton:{
        parameters: ["pointer"],
        result: "f32",
    } as const satisfies Deno.ForeignFunction,
    DImGuiSetTabMinWidthForCloseButton:{
        parameters: ["pointer","f32"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiGetColorButtonPosition:{
        parameters: ["pointer"],
        result: "i32",
    } as const satisfies Deno.ForeignFunction,
    DImGuiSetColorButtonPosition:{
        parameters: ["pointer","i32"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiGetButtonTextAlign:{
        parameters: ["pointer"],
        result: {struct:ImVec2},
    } as const satisfies Deno.ForeignFunction,
    DImGuiSetButtonTextAlign:{
        parameters: ["pointer",{struct:ImVec2}],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiGetSelectableTextAlign:{
        parameters: ["pointer"],
        result: {struct:ImVec2},
    } as const satisfies Deno.ForeignFunction,
    DImGuiSetSelectableTextAlign:{
        parameters: ["pointer",{struct:ImVec2}],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiGetDisplayWindowPadding:{
        parameters: ["pointer"],
        result: {struct:ImVec2},
    } as const satisfies Deno.ForeignFunction,
    DImGuiSetDisplayWindowPadding:{
        parameters: ["pointer",{struct:ImVec2}],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiGetDisplaySafeAreaPadding:{
        parameters: ["pointer"],
        result: {struct:ImVec2},
    } as const satisfies Deno.ForeignFunction,
    DImGuiSetDisplaySafeAreaPadding:{
        parameters: ["pointer",{struct:ImVec2}],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiGetMouseCursorScale:{
        parameters: ["pointer"],
        result: "f32",
    } as const satisfies Deno.ForeignFunction,
    DImGuiSetMouseCursorScale:{
        parameters: ["pointer","f32"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiGetAntiAliasedLines:{
        parameters: ["pointer"],
        result: "bool",
    } as const satisfies Deno.ForeignFunction,
    DImGuiSetAntiAliasedLines:{
        parameters: ["pointer","bool"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiGetAntiAliasedLinesUseTex:{
        parameters: ["pointer"],
        result: "bool",
    } as const satisfies Deno.ForeignFunction,
    DImGuiSetAntiAliasedLinesUseTex:{
        parameters: ["pointer","bool"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiGetAntiAliasedFill:{
        parameters: ["pointer"],
        result: "bool",
    } as const satisfies Deno.ForeignFunction,
    DImGuiSetAntiAliasedFill:{
        parameters: ["pointer","bool"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiGetCurveTessellationTol:{
        parameters: ["pointer"],
        result: "f32",
    } as const satisfies Deno.ForeignFunction,
    DImGuiSetCurveTessellationTol:{
        parameters: ["pointer","f32"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiGetCircleTessellationMaxError:{
        parameters: ["pointer"],
        result: "f32",
    } as const satisfies Deno.ForeignFunction,
    DImGuiSetCircleTessellationMaxError:{
        parameters: ["pointer","f32"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,

} as const satisfies Deno.ForeignLibraryInterface;
export default dimguiStyleSymbols
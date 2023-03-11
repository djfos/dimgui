const ImVec2 = ["f32", "f32"] as const;
const symbols = {
  DImGuiStyleGetAlpha: {
    parameters: ["pointer"],
    result: "f32",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleSetAlpha: {
    parameters: ["pointer", "f32"],
    result: "void",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleGetDisabledAlpha: {
    parameters: ["pointer"],
    result: "f32",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleSetDisabledAlpha: {
    parameters: ["pointer", "f32"],
    result: "void",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleGetWindowPadding: {
    parameters: ["pointer"],
    result: { struct: ImVec2 },
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleSetWindowPadding: {
    parameters: ["pointer", { struct: ImVec2 }],
    result: "void",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleGetWindowRounding: {
    parameters: ["pointer"],
    result: "f32",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleSetWindowRounding: {
    parameters: ["pointer", "f32"],
    result: "void",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleGetWindowBorderSize: {
    parameters: ["pointer"],
    result: "f32",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleSetWindowBorderSize: {
    parameters: ["pointer", "f32"],
    result: "void",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleGetWindowMinSize: {
    parameters: ["pointer"],
    result: { struct: ImVec2 },
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleSetWindowMinSize: {
    parameters: ["pointer", { struct: ImVec2 }],
    result: "void",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleGetWindowTitleAlign: {
    parameters: ["pointer"],
    result: { struct: ImVec2 },
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleSetWindowTitleAlign: {
    parameters: ["pointer", { struct: ImVec2 }],
    result: "void",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleGetWindowMenuButtonPosition: {
    parameters: ["pointer"],
    result: "i32",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleSetWindowMenuButtonPosition: {
    parameters: ["pointer", "i32"],
    result: "void",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleGetChildRounding: {
    parameters: ["pointer"],
    result: "f32",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleSetChildRounding: {
    parameters: ["pointer", "f32"],
    result: "void",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleGetChildBorderSize: {
    parameters: ["pointer"],
    result: "f32",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleSetChildBorderSize: {
    parameters: ["pointer", "f32"],
    result: "void",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleGetPopupRounding: {
    parameters: ["pointer"],
    result: "f32",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleSetPopupRounding: {
    parameters: ["pointer", "f32"],
    result: "void",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleGetPopupBorderSize: {
    parameters: ["pointer"],
    result: "f32",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleSetPopupBorderSize: {
    parameters: ["pointer", "f32"],
    result: "void",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleGetFramePadding: {
    parameters: ["pointer"],
    result: { struct: ImVec2 },
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleSetFramePadding: {
    parameters: ["pointer", { struct: ImVec2 }],
    result: "void",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleGetFrameRounding: {
    parameters: ["pointer"],
    result: "f32",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleSetFrameRounding: {
    parameters: ["pointer", "f32"],
    result: "void",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleGetFrameBorderSize: {
    parameters: ["pointer"],
    result: "f32",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleSetFrameBorderSize: {
    parameters: ["pointer", "f32"],
    result: "void",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleGetItemSpacing: {
    parameters: ["pointer"],
    result: { struct: ImVec2 },
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleSetItemSpacing: {
    parameters: ["pointer", { struct: ImVec2 }],
    result: "void",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleGetItemInnerSpacing: {
    parameters: ["pointer"],
    result: { struct: ImVec2 },
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleSetItemInnerSpacing: {
    parameters: ["pointer", { struct: ImVec2 }],
    result: "void",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleGetCellPadding: {
    parameters: ["pointer"],
    result: { struct: ImVec2 },
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleSetCellPadding: {
    parameters: ["pointer", { struct: ImVec2 }],
    result: "void",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleGetTouchExtraPadding: {
    parameters: ["pointer"],
    result: { struct: ImVec2 },
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleSetTouchExtraPadding: {
    parameters: ["pointer", { struct: ImVec2 }],
    result: "void",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleGetIndentSpacing: {
    parameters: ["pointer"],
    result: "f32",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleSetIndentSpacing: {
    parameters: ["pointer", "f32"],
    result: "void",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleGetColumnsMinSpacing: {
    parameters: ["pointer"],
    result: "f32",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleSetColumnsMinSpacing: {
    parameters: ["pointer", "f32"],
    result: "void",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleGetScrollbarSize: {
    parameters: ["pointer"],
    result: "f32",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleSetScrollbarSize: {
    parameters: ["pointer", "f32"],
    result: "void",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleGetScrollbarRounding: {
    parameters: ["pointer"],
    result: "f32",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleSetScrollbarRounding: {
    parameters: ["pointer", "f32"],
    result: "void",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleGetGrabMinSize: {
    parameters: ["pointer"],
    result: "f32",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleSetGrabMinSize: {
    parameters: ["pointer", "f32"],
    result: "void",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleGetGrabRounding: {
    parameters: ["pointer"],
    result: "f32",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleSetGrabRounding: {
    parameters: ["pointer", "f32"],
    result: "void",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleGetLogSliderDeadzone: {
    parameters: ["pointer"],
    result: "f32",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleSetLogSliderDeadzone: {
    parameters: ["pointer", "f32"],
    result: "void",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleGetTabRounding: {
    parameters: ["pointer"],
    result: "f32",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleSetTabRounding: {
    parameters: ["pointer", "f32"],
    result: "void",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleGetTabBorderSize: {
    parameters: ["pointer"],
    result: "f32",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleSetTabBorderSize: {
    parameters: ["pointer", "f32"],
    result: "void",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleGetTabMinWidthForCloseButton: {
    parameters: ["pointer"],
    result: "f32",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleSetTabMinWidthForCloseButton: {
    parameters: ["pointer", "f32"],
    result: "void",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleGetColorButtonPosition: {
    parameters: ["pointer"],
    result: "i32",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleSetColorButtonPosition: {
    parameters: ["pointer", "i32"],
    result: "void",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleGetButtonTextAlign: {
    parameters: ["pointer"],
    result: { struct: ImVec2 },
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleSetButtonTextAlign: {
    parameters: ["pointer", { struct: ImVec2 }],
    result: "void",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleGetSelectableTextAlign: {
    parameters: ["pointer"],
    result: { struct: ImVec2 },
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleSetSelectableTextAlign: {
    parameters: ["pointer", { struct: ImVec2 }],
    result: "void",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleGetDisplayWindowPadding: {
    parameters: ["pointer"],
    result: { struct: ImVec2 },
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleSetDisplayWindowPadding: {
    parameters: ["pointer", { struct: ImVec2 }],
    result: "void",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleGetDisplaySafeAreaPadding: {
    parameters: ["pointer"],
    result: { struct: ImVec2 },
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleSetDisplaySafeAreaPadding: {
    parameters: ["pointer", { struct: ImVec2 }],
    result: "void",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleGetMouseCursorScale: {
    parameters: ["pointer"],
    result: "f32",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleSetMouseCursorScale: {
    parameters: ["pointer", "f32"],
    result: "void",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleGetAntiAliasedLines: {
    parameters: ["pointer"],
    result: "bool",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleSetAntiAliasedLines: {
    parameters: ["pointer", "bool"],
    result: "void",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleGetAntiAliasedLinesUseTex: {
    parameters: ["pointer"],
    result: "bool",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleSetAntiAliasedLinesUseTex: {
    parameters: ["pointer", "bool"],
    result: "void",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleGetAntiAliasedFill: {
    parameters: ["pointer"],
    result: "bool",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleSetAntiAliasedFill: {
    parameters: ["pointer", "bool"],
    result: "void",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleGetCurveTessellationTol: {
    parameters: ["pointer"],
    result: "f32",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleSetCurveTessellationTol: {
    parameters: ["pointer", "f32"],
    result: "void",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleGetCircleTessellationMaxError: {
    parameters: ["pointer"],
    result: "f32",
  } as const satisfies Deno.ForeignFunction,
  DImGuiStyleSetCircleTessellationMaxError: {
    parameters: ["pointer", "f32"],
    result: "void",
  } as const satisfies Deno.ForeignFunction,
} as const satisfies Deno.ForeignLibraryInterface;
export default symbols;

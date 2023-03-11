// deno-fmt-ignore-file
const ImVec2 = ["f32","f32"] as const;
const dimguiIOSymbols = {
    DImGuiIOGetConfigFlags:{
        parameters: ["pointer"],
        result: "i32",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOSetConfigFlags:{
        parameters: ["pointer","i32"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOGetBackendFlags:{
        parameters: ["pointer"],
        result: "i32",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOSetBackendFlags:{
        parameters: ["pointer","i32"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOGetDisplaySize:{
        parameters: ["pointer"],
        result: {struct:ImVec2},
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOSetDisplaySize:{
        parameters: ["pointer",{struct:ImVec2}],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOGetDeltaTime:{
        parameters: ["pointer"],
        result: "f32",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOSetDeltaTime:{
        parameters: ["pointer","f32"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOGetIniSavingRate:{
        parameters: ["pointer"],
        result: "f32",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOSetIniSavingRate:{
        parameters: ["pointer","f32"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOGetIniFilename:{
        parameters: ["pointer"],
        result: "buffer",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOSetIniFilename:{
        parameters: ["pointer","buffer"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOGetLogFilename:{
        parameters: ["pointer"],
        result: "buffer",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOSetLogFilename:{
        parameters: ["pointer","buffer"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOGetMouseDoubleClickTime:{
        parameters: ["pointer"],
        result: "f32",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOSetMouseDoubleClickTime:{
        parameters: ["pointer","f32"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOGetMouseDoubleClickMaxDist:{
        parameters: ["pointer"],
        result: "f32",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOSetMouseDoubleClickMaxDist:{
        parameters: ["pointer","f32"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOGetMouseDragThreshold:{
        parameters: ["pointer"],
        result: "f32",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOSetMouseDragThreshold:{
        parameters: ["pointer","f32"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOGetKeyRepeatDelay:{
        parameters: ["pointer"],
        result: "f32",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOSetKeyRepeatDelay:{
        parameters: ["pointer","f32"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOGetKeyRepeatRate:{
        parameters: ["pointer"],
        result: "f32",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOSetKeyRepeatRate:{
        parameters: ["pointer","f32"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOGetHoverDelayNormal:{
        parameters: ["pointer"],
        result: "f32",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOSetHoverDelayNormal:{
        parameters: ["pointer","f32"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOGetHoverDelayShort:{
        parameters: ["pointer"],
        result: "f32",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOSetHoverDelayShort:{
        parameters: ["pointer","f32"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOGetUserData:{
        parameters: ["pointer"],
        result: "buffer",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOSetUserData:{
        parameters: ["pointer","buffer"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOGetFonts:{
        parameters: ["pointer"],
        result: "pointer",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOSetFonts:{
        parameters: ["pointer","pointer"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOGetFontGlobalScale:{
        parameters: ["pointer"],
        result: "f32",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOSetFontGlobalScale:{
        parameters: ["pointer","f32"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOGetFontAllowUserScaling:{
        parameters: ["pointer"],
        result: "bool",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOSetFontAllowUserScaling:{
        parameters: ["pointer","bool"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOGetFontDefault:{
        parameters: ["pointer"],
        result: "pointer",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOSetFontDefault:{
        parameters: ["pointer","pointer"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOGetDisplayFramebufferScale:{
        parameters: ["pointer"],
        result: {struct:ImVec2},
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOSetDisplayFramebufferScale:{
        parameters: ["pointer",{struct:ImVec2}],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOGetConfigDockingNoSplit:{
        parameters: ["pointer"],
        result: "bool",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOSetConfigDockingNoSplit:{
        parameters: ["pointer","bool"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOGetConfigDockingWithShift:{
        parameters: ["pointer"],
        result: "bool",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOSetConfigDockingWithShift:{
        parameters: ["pointer","bool"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOGetConfigDockingAlwaysTabBar:{
        parameters: ["pointer"],
        result: "bool",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOSetConfigDockingAlwaysTabBar:{
        parameters: ["pointer","bool"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOGetConfigDockingTransparentPayload:{
        parameters: ["pointer"],
        result: "bool",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOSetConfigDockingTransparentPayload:{
        parameters: ["pointer","bool"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOGetConfigViewportsNoAutoMerge:{
        parameters: ["pointer"],
        result: "bool",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOSetConfigViewportsNoAutoMerge:{
        parameters: ["pointer","bool"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOGetConfigViewportsNoTaskBarIcon:{
        parameters: ["pointer"],
        result: "bool",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOSetConfigViewportsNoTaskBarIcon:{
        parameters: ["pointer","bool"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOGetConfigViewportsNoDecoration:{
        parameters: ["pointer"],
        result: "bool",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOSetConfigViewportsNoDecoration:{
        parameters: ["pointer","bool"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOGetConfigViewportsNoDefaultParent:{
        parameters: ["pointer"],
        result: "bool",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOSetConfigViewportsNoDefaultParent:{
        parameters: ["pointer","bool"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOGetMouseDrawCursor:{
        parameters: ["pointer"],
        result: "bool",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOSetMouseDrawCursor:{
        parameters: ["pointer","bool"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOGetConfigMacOSXBehaviors:{
        parameters: ["pointer"],
        result: "bool",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOSetConfigMacOSXBehaviors:{
        parameters: ["pointer","bool"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOGetConfigInputTrickleEventQueue:{
        parameters: ["pointer"],
        result: "bool",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOSetConfigInputTrickleEventQueue:{
        parameters: ["pointer","bool"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOGetConfigInputTextCursorBlink:{
        parameters: ["pointer"],
        result: "bool",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOSetConfigInputTextCursorBlink:{
        parameters: ["pointer","bool"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOGetConfigInputTextEnterKeepActive:{
        parameters: ["pointer"],
        result: "bool",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOSetConfigInputTextEnterKeepActive:{
        parameters: ["pointer","bool"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOGetConfigDragClickToInputText:{
        parameters: ["pointer"],
        result: "bool",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOSetConfigDragClickToInputText:{
        parameters: ["pointer","bool"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOGetConfigWindowsResizeFromEdges:{
        parameters: ["pointer"],
        result: "bool",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOSetConfigWindowsResizeFromEdges:{
        parameters: ["pointer","bool"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOGetConfigWindowsMoveFromTitleBarOnly:{
        parameters: ["pointer"],
        result: "bool",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOSetConfigWindowsMoveFromTitleBarOnly:{
        parameters: ["pointer","bool"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOGetConfigMemoryCompactTimer:{
        parameters: ["pointer"],
        result: "f32",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOSetConfigMemoryCompactTimer:{
        parameters: ["pointer","f32"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOGetWantCaptureMouse:{
        parameters: ["pointer"],
        result: "bool",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOSetWantCaptureMouse:{
        parameters: ["pointer","bool"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOGetWantCaptureKeyboard:{
        parameters: ["pointer"],
        result: "bool",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOSetWantCaptureKeyboard:{
        parameters: ["pointer","bool"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOGetWantTextInput:{
        parameters: ["pointer"],
        result: "bool",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOSetWantTextInput:{
        parameters: ["pointer","bool"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOGetWantSetMousePos:{
        parameters: ["pointer"],
        result: "bool",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOSetWantSetMousePos:{
        parameters: ["pointer","bool"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOGetWantSaveIniSettings:{
        parameters: ["pointer"],
        result: "bool",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOSetWantSaveIniSettings:{
        parameters: ["pointer","bool"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOGetNavActive:{
        parameters: ["pointer"],
        result: "bool",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOSetNavActive:{
        parameters: ["pointer","bool"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOGetNavVisible:{
        parameters: ["pointer"],
        result: "bool",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOSetNavVisible:{
        parameters: ["pointer","bool"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOGetFramerate:{
        parameters: ["pointer"],
        result: "f32",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOSetFramerate:{
        parameters: ["pointer","f32"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOGetMetricsRenderVertices:{
        parameters: ["pointer"],
        result: "i32",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOSetMetricsRenderVertices:{
        parameters: ["pointer","i32"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOGetMetricsRenderIndices:{
        parameters: ["pointer"],
        result: "i32",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOSetMetricsRenderIndices:{
        parameters: ["pointer","i32"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOGetMetricsRenderWindows:{
        parameters: ["pointer"],
        result: "i32",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOSetMetricsRenderWindows:{
        parameters: ["pointer","i32"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOGetMetricsActiveWindows:{
        parameters: ["pointer"],
        result: "i32",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOSetMetricsActiveWindows:{
        parameters: ["pointer","i32"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOGetMetricsActiveAllocations:{
        parameters: ["pointer"],
        result: "i32",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOSetMetricsActiveAllocations:{
        parameters: ["pointer","i32"],
        result: "void",
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOGetMouseDelta:{
        parameters: ["pointer"],
        result: {struct:ImVec2},
    } as const satisfies Deno.ForeignFunction,
    DImGuiIOSetMouseDelta:{
        parameters: ["pointer",{struct:ImVec2}],
        result: "void",
    } as const satisfies Deno.ForeignFunction,

} as const satisfies Deno.ForeignLibraryInterface;
export default dimguiIOSymbols
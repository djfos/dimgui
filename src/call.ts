// deno-lint-ignore-file no-inferrable-types
import { cString, ffi as imgui, jsString } from "./ffi.ts";
import {
  BUFFER,
  CBool,
  type ImDrawData,
  type ImDrawList,
  type ImDrawListSharedData,
  type ImFont,
  type ImGuiButtonFlags,
  type ImGuiColorEditFlags,
  type ImGuiContext,
  type ImGuiDockNodeFlags,
  type ImGuiDragDropFlags,
  type ImGuiFocusedFlags,
  type ImGuiHoveredFlags,
  type ImGuiID,
  type ImGuiInputTextCallback,
  type ImGuiInputTextFlags,
  type ImGuiIO,
  type ImGuiPayload,
  type ImGuiPopupFlags,
  type ImGuiSelectableFlags,
  type ImGuiSliderFlags,
  type ImGuiStorage,
  type ImGuiStyle,
  type ImGuiTabBarFlags,
  type ImGuiTabItemFlags,
  type ImGuiTableColumnFlags,
  type ImGuiTableFlags,
  type ImGuiTableRowFlags,
  type ImGuiTableSortSpecs,
  type ImGuiTreeNodeFlags,
  type ImGuiViewport,
  type ImGuiWindowClass,
  type ImGuiWindowFlags,
  type ImTextureID,
  ImU32,
  ImVec2,
  ImVec4,
} from "./type.ts";
import {
  ImGuiCol,
  ImGuiCond,
  ImGuiDataType,
  ImGuiDir,
  ImGuiKey,
  ImGuiMouseButton,
  ImGuiMouseCursor,
  ImGuiStyleVar,
  ImGuiTableBgTarget,
} from "./enum.ts";
import { assert } from "https://deno.land/std@0.177.0/testing/asserts.ts";

const Zero2 = new ImVec2(0, 0);

// not register error callback by defualt.
// there are some bug in imgui and only a few error could be reported by this.

// use to limit message repeat
// const errorMessageMap = new Map<string, number>();
// const errorMessageMaxRepeat = 10;
// const errorCallback = new Deno.UnsafeCallback(
//   {
//     parameters: ["pointer"],
//     result: "void",
//   } as const,
//   (messagePointer) => {
//     const message = Deno.UnsafePointerView.getCString(messagePointer);
//     const repeat = errorMessageMap.get(message) ?? 0;
//     if (repeat < errorMessageMaxRepeat) {
//       errorMessageMap.set(message, repeat + 1);
//       console.error("ImGuiError:", message);
//     }
//   },
// );
// imgui.dimguiSetErrorCallback(errorCallback.pointer);

//  // Context creation and access
//   // - Each context create its own ImFontAtlas by default. You may instance one yourself and pass it to CreateContext() to share a font atlas between contexts.
//   // - DLL users: heaps and globals are not shared across DLL boundaries! You will need to call SetCurrentContext() + SetAllocatorFunctions()
//   //   for each static/DLL boundary you are calling from. Read "Context and Memory Allocators" section of imgui.cpp for details.
//   IMGUI_API ImGuiContext* CreateContext(ImFontAtlas* shared_font_atlas = NULL);
//   IMGUI_API void          DestroyContext(ImGuiContext* ctx = NULL);   // NULL = destroy current context
//   IMGUI_API ImGuiContext* GetCurrentContext();
//   IMGUI_API void          SetCurrentContext(ImGuiContext* ctx);

export function createContext(): ImGuiContext {
  // !!!!! glfw must be init
  const result = imgui.glfwInit();
  if (!result) {
    throw new Error("imgui glfw init faild");
  }
  return imgui.igCreateContext(null);
}

export function destroyContext(context: ImGuiContext): void {
  imgui.igDestroyContext(context);
}

export function getCurrentContext(): ImGuiContext {
  return imgui.igGetCurrentContext();
}

export function setCurrentContext(context: ImGuiContext): void {
  imgui.igSetCurrentContext(context);
}

//   // Main
//   IMGUI_API ImGuiIO&      GetIO();                                    // access the IO structure (mouse/keyboard/gamepad inputs, time, various configuration options/flags)
//   IMGUI_API ImGuiStyle&   GetStyle();                                 // access the Style structure (colors, sizes). Always use PushStyleCol(), PushStyleVar() to modify style mid-frame!
//   IMGUI_API void          NewFrame();                                 // start a new Dear ImGui frame, you can submit any command from this point until Render()/EndFrame().
//   IMGUI_API void          EndFrame();                                 // ends the Dear ImGui frame. automatically called by Render(). If you don't need to render data (skipping rendering) you may call EndFrame() without Render()... but you'll have wasted CPU already! If you don't need to render, better to not create any windows and not call NewFrame() at all!
//   IMGUI_API void          Render();                                   // ends the Dear ImGui frame, finalize the draw data. You can then get call GetDrawData().
//   IMGUI_API ImDrawData*   GetDrawData();                              // valid after Render() and until the next call to NewFrame(). this is what you have to render.

/**
 * access the IO structure (mouse/keyboard/gamepad inputs, time,
 * various configuration options/flags)
 */
export function getIO(): ImGuiIO {
  return imgui.igGetIO();
}
/**
 * access the Style structure (colors, sizes).
 * Always use PushStyleCol(), PushStyleVar() to modify style mid-frame!
 */
export function getStyle(): ImGuiStyle {
  return imgui.igGetStyle();
}
/**
 * start a new Dear ImGui frame, you can submit any command
 * from this point until Render()/EndFrame().
 */
export function newFrame(): void {
  imgui.igNewFrame();
}
/**
 * ends the Dear ImGui frame. automatically called by Render().
 * If you don't need to render data (skipping rendering) you may
 * call EndFrame() without Render()... but you'll have wasted CPU already!
 * If you don't need to render, better to not create any windows
 * and not call NewFrame() at all!
 */
export function endFrame(): void {
  imgui.igEndFrame();
}
/**
 * ends the Dear ImGui frame, finalize the draw data.
 * You can then get call GetDrawData().
 */
export function render(): void {
  imgui.igRender();
}
/**
 * valid after Render() and until the next call to NewFrame().
 * this is what you have to render.
 */
export function getDrawData(): ImDrawData {
  return imgui.igGetDrawData();
}

//   // Demo, Debug, Information
//   IMGUI_API void          ShowDemoWindow(bool* p_open = NULL);        // create Demo window. demonstrate most ImGui features. call this to learn about the library! try to make it always available in your application!
//   IMGUI_API void          ShowMetricsWindow(bool* p_open = NULL);     // create Metrics/Debugger window. display Dear ImGui internals: windows, draw commands, various internal state, etc.
//   IMGUI_API void          ShowDebugLogWindow(bool* p_open = NULL);    // create Debug Log window. display a simplified log of important dear imgui events.
//   IMGUI_API void          ShowStackToolWindow(bool* p_open = NULL);   // create Stack Tool window. hover items with mouse to query information about the source of their unique ID.
//   IMGUI_API void          ShowAboutWindow(bool* p_open = NULL);       // create About window. display Dear ImGui version, credits and build/system information.
//   IMGUI_API void          ShowStyleEditor(ImGuiStyle* ref = NULL);    // add style editor block (not a window). you can pass in a reference ImGuiStyle structure to compare to, revert to and save to (else it uses the default style)
//   IMGUI_API bool          ShowStyleSelector(const char* label);       // add style selector block (not a window), essentially a combo listing the default styles.
//   IMGUI_API void          ShowFontSelector(const char* label);        // add font selector block (not a window), essentially a combo listing the loaded fonts.
//   IMGUI_API void          ShowUserGuide();                            // add basic help/info block (not a window): how to manipulate ImGui as an end-user (mouse/keyboard controls).
//   IMGUI_API const char*   GetVersion();                               // get the compiled version string e.g. "1.80 WIP" (essentially the value for IMGUI_VERSION from the compiled version of imgui.cpp)

/**
 * create Demo window. demonstrate most ImGui features.
 * call this to learn about the library! try to make it always
 * available in your application!
 */
export function showDemoWindow(open: CBool | null = null): void {
  imgui.igShowDemoWindow(open ? open[BUFFER] : null);
}
/**
 * create Metrics/Debugger window. display Dear ImGui internals: windows,
 * draw commands, various internal state, etc.
 */
export function showMetricsWindow(open: CBool | null = null): void {
  imgui.igShowMetricsWindow(open ? open[BUFFER] : null);
}
/**
 * create Debug Log window. display a simplified log of important dear imgui events.
 */
export function showDebugLogWindow(open: CBool | null = null): void {
  imgui.igShowDebugLogWindow(open ? open[BUFFER] : null);
}
/**
 * create Stack Tool window. hover items with mouse to query information
 * about the source of their unique ID.
 */
export function showStackToolWindow(open: CBool | null = null): void {
  imgui.igShowStackToolWindow(open ? open[BUFFER] : null);
}
/**
 * create About window. display Dear ImGui version,
 * credits and build/system information.
 */
export function showAboutWindow(open: CBool | null = null): void {
  imgui.igShowAboutWindow(open ? open[BUFFER] : null);
}
/**
 * add style editor block (not a window). you can pass in a reference
 * ImGuiStyle structure to compare to, revert to and save to
 * (else it uses the default style)
 */
export function showStyleEditor(ref: ImGuiStyle): void {
  imgui.igShowStyleEditor(ref);
}
/**
 * add style selector block (not a window),
 * essentially a combo listing the default styles.
 */
export function showStyleSelector(label: string): boolean {
  return imgui.igShowStyleSelector(cString(label));
}
/**
 * add font selector block (not a window),
 * essentially a combo listing the loaded fonts.
 */
export function showFontSelector(label: string): void {
  imgui.igShowFontSelector(cString(label));
}
/**
 * add basic help/info block (not a window): how to manipulate
 * ImGui as an end-user (mouse/keyboard controls).
 */
export function showUserGuide(): void {
  imgui.igShowUserGuide();
}
/**
 * get the compiled version string e.g. "1.80 WIP"
 * (essentially the value for IMGUI_VERSION from the compiled version of imgui.cpp)
 */
export function getVersion(): string {
  return jsString(imgui.igGetVersion());
}

//   // Styles
//   IMGUI_API void          StyleColorsDark(ImGuiStyle* dst = NULL);    // new, recommended style (default)
//   IMGUI_API void          StyleColorsLight(ImGuiStyle* dst = NULL);   // best used with borders and a custom, thicker font
//   IMGUI_API void          StyleColorsClassic(ImGuiStyle* dst = NULL); // classic imgui style

/**
 * new, recommended style (default)
 */
export function styleColorsDark(dst: ImGuiStyle): void {
  imgui.igStyleColorsDark(dst);
}
/**
 * best used with borders and a custom, thicker font
 */
export function styleColorsLight(dst: ImGuiStyle): void {
  imgui.igStyleColorsLight(dst);
}
/**
 * classic imgui style
 */
export function styleColorsClassic(dst: ImGuiStyle): void {
  imgui.igStyleColorsClassic(dst);
}

//   // Windows
//   // - Begin() = push window to the stack and start appending to it. End() = pop window from the stack.
//   // - Passing 'bool* p_open != NULL' shows a window-closing widget in the upper-right corner of the window,
//   //   which clicking will set the boolean to false when clicked.
//   // - You may append multiple times to the same window during the same frame by calling Begin()/End() pairs multiple times.
//   //   Some information such as 'flags' or 'p_open' will only be considered by the first call to Begin().
//   // - Begin() return false to indicate the window is collapsed or fully clipped, so you may early out and omit submitting
//   //   anything to the window. Always call a matching End() for each Begin() call, regardless of its return value!
//   //   [Important: due to legacy reason, this is inconsistent with most other functions such as BeginMenu/EndMenu,
//   //    BeginPopup/EndPopup, etc. where the EndXXX call should only be called if the corresponding BeginXXX function
//   //    returned true. Begin and BeginChild are the only odd ones out. Will be fixed in a future update.]
//   // - Note that the bottom of window stack always contains a window called "Debug".
//   IMGUI_API bool          Begin(const char* name, bool* p_open = NULL, ImGuiWindowFlags flags = 0);
//   IMGUI_API void          End();

export function begin(
  name: string,
  open: CBool | null = null,
  flags: ImGuiWindowFlags = 0,
): boolean {
  return imgui.igBegin(cString(name), open ? open[BUFFER] : null, flags);
}
export function end(): void {
  imgui.igEnd();
}

//   // Child Windows
//   // - Use child windows to begin into a self-contained independent scrolling/clipping regions within a host window. Child windows can embed their own child.
//   // - For each independent axis of 'size': ==0.0f: use remaining host window size / >0.0f: fixed size / <0.0f: use remaining window size minus abs(size) / Each axis can use a different mode, e.g. ImVec2(0,400).
//   // - BeginChild() returns false to indicate the window is collapsed or fully clipped, so you may early out and omit submitting anything to the window.
//   //   Always call a matching EndChild() for each BeginChild() call, regardless of its return value.
//   //   [Important: due to legacy reason, this is inconsistent with most other functions such as BeginMenu/EndMenu,
//   //    BeginPopup/EndPopup, etc. where the EndXXX call should only be called if the corresponding BeginXXX function
//   //    returned true. Begin and BeginChild are the only odd ones out. Will be fixed in a future update.]
//   IMGUI_API bool          BeginChild(const char* str_id, const ImVec2& size = ImVec2(0, 0), bool border = false, ImGuiWindowFlags flags = 0);
//   IMGUI_API bool          BeginChild(ImGuiID id, const ImVec2& size = ImVec2(0, 0), bool border = false, ImGuiWindowFlags flags = 0);
//   IMGUI_API void          EndChild();

export function beginChild(
  id: string | ImGuiID,
  size: ImVec2 = Zero2,
  border: boolean = false,
  flags: ImGuiWindowFlags = 0,
): boolean {
  if (typeof id == "string") {
    return imgui.igBeginChild_Str(cString(id), size[BUFFER], border, flags);
  } else {
    return imgui.igBeginChild_ID(id, size[BUFFER], border, flags);
  }
}

export function endChild(): void {
  imgui.igEndChild();
}

//   // Windows Utilities
//   // - 'current window' = the window we are appending into while inside a Begin()/End() block. 'next window' = next window we will Begin() into.
//   IMGUI_API bool          IsWindowAppearing();
//   IMGUI_API bool          IsWindowCollapsed();
//   IMGUI_API bool          IsWindowFocused(ImGuiFocusedFlags flags=0); // is current window focused? or its root/child, depending on flags. see flags for options.
//   IMGUI_API bool          IsWindowHovered(ImGuiHoveredFlags flags=0); // is current window hovered (and typically: not blocked by a popup/modal)? see flags for options. NB: If you are trying to check whether your mouse should be dispatched to imgui or to your app, you should use the 'io.WantCaptureMouse' boolean for that! Please read the FAQ!
//   IMGUI_API ImDrawList*   GetWindowDrawList();                        // get draw list associated to the current window, to append your own drawing primitives
//   IMGUI_API float         GetWindowDpiScale();                        // get DPI scale currently associated to the current window's viewport.
//   IMGUI_API ImVec2        GetWindowPos();                             // get current window position in screen space (useful if you want to do your own drawing via the DrawList API)
//   IMGUI_API ImVec2        GetWindowSize();                            // get current window size
//   IMGUI_API float         GetWindowWidth();                           // get current window width (shortcut for GetWindowSize().x)
//   IMGUI_API float         GetWindowHeight();                          // get current window height (shortcut for GetWindowSize().y)
//   IMGUI_API ImGuiViewport*GetWindowViewport();                        // get viewport currently associated to the current window.

export function isWindowAppearing(): boolean {
  return imgui.igIsWindowAppearing();
}

export function isWindowCollapsed(): boolean {
  return imgui.igIsWindowCollapsed();
}
/**
 * is current window focused? or its root/child, depending on flags. see flags for options.
 */
export function isWindowFocused(flags: ImGuiFocusedFlags = 0): boolean {
  return imgui.igIsWindowFocused(flags);
}
/**
 * is current window hovered (and typically: not blocked by a popup/modal)?
 * see flags for options.
 * NB: If you are trying to check whether your mouse should be dispatched to
 * imgui or to your app, you should use the 'io.WantCaptureMouse' boolean for that!
 * Please read the FAQ!
 */
export function isWindowHovered(flags: ImGuiHoveredFlags = 0): boolean {
  return imgui.igIsWindowHovered(flags);
}
/**
 * get draw list associated to the current window, to append your own drawing primitives
 */
export function getWindowDrawList(): ImDrawList {
  return imgui.igGetWindowDrawList();
}
/**
 * get DPI scale currently associated to the current window's viewport.
 */
export function getWindowDpiScale(): number {
  return imgui.igGetWindowDpiScale();
}
/**
 * get current window position in screen space
 * (useful if you want to do your own drawing via the DrawList API).
 */
export function getWindowPos(): ImVec2 {
  const vec2 = new ImVec2();
  imgui.igGetWindowPos(vec2[BUFFER]);
  return vec2;
}
/**
 * get current window size.
 */
export function getWindowSize(): ImVec2 {
  const vec2 = new ImVec2();
  imgui.igGetWindowSize(vec2[BUFFER]);
  return vec2;
}
/**
 * get current window width (shortcut for GetWindowSize().x)
 */
export function getWindowWidth(): number {
  return imgui.igGetWindowWidth();
}
/**
 * get current window height (shortcut for GetWindowSize().y)
 */
export function getWindowHeight(): number {
  return imgui.igGetWindowHeight();
}
/**
 * get viewport currently associated to the current window.
 */
export function getWindowViewport(): ImGuiViewport {
  return imgui.igGetWindowViewport();
}

//   // Window manipulation
//   // - Prefer using SetNextXXX functions (before Begin) rather that SetXXX functions (after Begin).
//   IMGUI_API void          SetNextWindowPos(const ImVec2& pos, ImGuiCond cond = 0, const ImVec2& pivot = ImVec2(0, 0)); // set next window position. call before Begin(). use pivot=(0.5f,0.5f) to center on given point, etc.
//   IMGUI_API void          SetNextWindowSize(const ImVec2& size, ImGuiCond cond = 0);                  // set next window size. set axis to 0.0f to force an auto-fit on this axis. call before Begin()
//   IMGUI_API void          SetNextWindowSizeConstraints(const ImVec2& size_min, const ImVec2& size_max, ImGuiSizeCallback custom_callback = NULL, void* custom_callback_data = NULL); // set next window size limits. use -1,-1 on either X/Y axis to preserve the current size. Sizes will be rounded down. Use callback to apply non-trivial programmatic constraints.
//   IMGUI_API void          SetNextWindowContentSize(const ImVec2& size);                               // set next window content size (~ scrollable client area, which enforce the range of scrollbars). Not including window decorations (title bar, menu bar, etc.) nor WindowPadding. set an axis to 0.0f to leave it automatic. call before Begin()
//   IMGUI_API void          SetNextWindowCollapsed(bool collapsed, ImGuiCond cond = 0);                 // set next window collapsed state. call before Begin()
//   IMGUI_API void          SetNextWindowFocus();                                                       // set next window to be focused / top-most. call before Begin()
//   IMGUI_API void          SetNextWindowScroll(const ImVec2& scroll);                                  // set next window scrolling value (use < 0.0f to not affect a given axis).
//   IMGUI_API void          SetNextWindowBgAlpha(float alpha);                                          // set next window background color alpha. helper to easily override the Alpha component of ImGuiCol_WindowBg/ChildBg/PopupBg. you may also use ImGuiWindowFlags_NoBackground.
//   IMGUI_API void          SetNextWindowViewport(ImGuiID viewport_id);                                 // set next window viewport
//   IMGUI_API void          SetWindowPos(const ImVec2& pos, ImGuiCond cond = 0);                        // (not recommended) set current window position - call within Begin()/End(). prefer using SetNextWindowPos(), as this may incur tearing and side-effects.
//   IMGUI_API void          SetWindowSize(const ImVec2& size, ImGuiCond cond = 0);                      // (not recommended) set current window size - call within Begin()/End(). set to ImVec2(0, 0) to force an auto-fit. prefer using SetNextWindowSize(), as this may incur tearing and minor side-effects.
//   IMGUI_API void          SetWindowCollapsed(bool collapsed, ImGuiCond cond = 0);                     // (not recommended) set current window collapsed state. prefer using SetNextWindowCollapsed().
//   IMGUI_API void          SetWindowFocus();                                                           // (not recommended) set current window to be focused / top-most. prefer using SetNextWindowFocus().
//   IMGUI_API void          SetWindowFontScale(float scale);                                            // [OBSOLETE] set font scale. Adjust IO.FontGlobalScale if you want to scale all windows. This is an old API! For correct scaling, prefer to reload font + rebuild ImFontAtlas + call style.ScaleAllSizes().
//   IMGUI_API void          SetWindowPos(const char* name, const ImVec2& pos, ImGuiCond cond = 0);      // set named window position.
//   IMGUI_API void          SetWindowSize(const char* name, const ImVec2& size, ImGuiCond cond = 0);    // set named window size. set axis to 0.0f to force an auto-fit on this axis.
//   IMGUI_API void          SetWindowCollapsed(const char* name, bool collapsed, ImGuiCond cond = 0);   // set named window collapsed state
//   IMGUI_API void          SetWindowFocus(const char* name);                                           // set named window to be focused / top-most. use NULL to remove focus.

/**
 * set next window position. call before Begin().
 * use pivot=(0.5f,0.5f) to center on given point, etc.
 */
export function setNextWindowPos(
  pos: ImVec2,
  cond: ImGuiCond = 0,
  pivot: ImVec2 = Zero2,
): void {
  imgui.igSetNextWindowPos(pos[BUFFER], cond, pivot[BUFFER]);
}

/**
 * set next window size. set axis to 0.0f to force an auto-fit on this axis.
 * call before Begin()
 */
export function setNextWindowSize(size: ImVec2, cond: ImGuiCond = 0): void {
  imgui.igSetNextWindowSize(size[BUFFER], cond);
}
/**
 * set next window size limits.
 * use -1,-1 on either X/Y axis to preserve the current size.
 * Sizes will be rounded down.
 * Use callback to apply non-trivial programmatic constraints.
 */
// export function setNextWindowSizeConstraints(
//   size_min: ImVec2,
//   size_max: ImVec2,
//   custom_callback: ImGuiSizeCallback, // TODO
//   custom_callback_data: Deno.PointerValue, // do we need this?
// ): void {
//   imgui.igSetNextWindowSizeConstraints(
//     size_min[BUFFER],
//     size_max[BUFFER],
//     custom_callback,
//     custom_callback_data,
//   );
// }

/**
 * set next window content size
 * (~ scrollable client area, which enforce the range of scrollbars).
 * Not including window decorations (title bar, menu bar, etc.) nor WindowPadding.
 * set an axis to 0.0f to leave it automatic. call before Begin()
 */
export function setNextWindowContentSize(size: ImVec2): void {
  imgui.igSetNextWindowContentSize(size[BUFFER]);
}
/**
 * set next window collapsed state. call before Begin()
 */
export function setNextWindowCollapsed(
  collapsed: boolean,
  cond: ImGuiCond = 0,
): void {
  imgui.igSetNextWindowCollapsed(collapsed, cond);
}
/**
 * set next window to be focused / top-most. call before Begin()
 */
export function setNextWindowFocus(): void {
  imgui.igSetNextWindowFocus();
}
/**
 * set next window scrolling value (use < 0.0f to not affect a given axis).
 */
export function setNextWindowScroll(scroll: ImVec2): void {
  imgui.igSetNextWindowScroll(scroll[BUFFER]);
}

/**
 * set next window background color alpha. helper to easily override the Alpha component of ImGuiCol_WindowBg/ChildBg/PopupBg. you may also use ImGuiWindowFlags_NoBackground.
 */
export function setNextWindowBgAlpha(alpha: number): void {
  imgui.igSetNextWindowBgAlpha(alpha);
}

/**
 * set next window viewport
 */
export function setNextWindowViewport(viewport_id: ImGuiID): void {
  imgui.igSetNextWindowViewport(viewport_id);
}

/**
 * set named window position.
 */
export function setWindowPos(
  name: string,
  pos: ImVec2,
  cond: ImGuiCond = 0,
): void {
  imgui.igSetWindowPos_Str(cString(name), pos[BUFFER], cond);
}

/**
 * set named window size. set axis to 0.0f to force an auto-fit on this axis.
 */
export function setWindowSize(
  name: string,
  size: ImVec2,
  cond: ImGuiCond = 0,
): void {
  imgui.igSetWindowSize_Str(cString(name), size[BUFFER], cond);
}

/**
 * set named window collapsed state
 */
export function setWindowCollapsed(
  name: string,
  collapsed: boolean,
  cond: ImGuiCond = 0,
): void {
  imgui.igSetWindowCollapsed_Str(cString(name), collapsed, cond);
}

/**
 * set named window to be focused / top-most.
 * pass `undefined` or empty string to remove focus.
 */
export function setWindowFocus(name?: string): void {
  if (name === undefined || name == "") {
    imgui.igSetWindowFocus_Str(null);
  } else {
    imgui.igSetWindowFocus_Str(cString(name));
  }
}

//   // Content region
//   // - Retrieve available space from a given point. GetContentRegionAvail() is frequently useful.
//   // - Those functions are bound to be redesigned (they are confusing, incomplete and the Min/Max return values are in local window coordinates which increases confusion)
//   IMGUI_API ImVec2        GetContentRegionAvail();                                        // == GetContentRegionMax() - GetCursorPos()
//   IMGUI_API ImVec2        GetContentRegionMax();                                          // current content boundaries (typically window boundaries including scrolling, or current column boundaries), in windows coordinates
//   IMGUI_API ImVec2        GetWindowContentRegionMin();                                    // content boundaries min for the full window (roughly (0,0)-Scroll), in window coordinates
//   IMGUI_API ImVec2        GetWindowContentRegionMax();                                    // content boundaries max for the full window (roughly (0,0)+Size-Scroll) where Size can be overridden with SetNextWindowContentSize(), in window coordinates

/**
 * == GetContentRegionMax() - GetCursorPos().
 */
export function getContentRegionAvail(): ImVec2 {
  const vec2 = new ImVec2();
  imgui.igGetContentRegionAvail(vec2[BUFFER]);
  return vec2;
}
/**
 * current content boundaries (typically window boundaries
 * including scrolling, or current column boundaries), in windows coordinates.
 */
export function getContentRegionMax(): ImVec2 {
  const vec2 = new ImVec2();
  imgui.igGetContentRegionMax(vec2[BUFFER]);
  return vec2;
}
/**
 * content boundaries min for the full window (roughly (0,0)-Scroll), in window coordinates.
 */
export function getWindowContentRegionMin(): ImVec2 {
  const vec2 = new ImVec2();
  imgui.igGetWindowContentRegionMin(vec2[BUFFER]);
  return vec2;
}
/**
 * content boundaries max for the full window (roughly (0,0)+Size-Scroll)
 * where Size can be overridden with SetNextWindowContentSize(), in window coordinates.
 */
export function getWindowContentRegionMax(): ImVec2 {
  const vec2 = new ImVec2();
  imgui.igGetWindowContentRegionMax(vec2[BUFFER]);
  return vec2;
}

//   // Windows Scrolling
//   // - Any change of Scroll will be applied at the beginning of next frame in the first call to Begin().
//   // - You may instead use SetNextWindowScroll() prior to calling Begin() to avoid this delay, as an alternative to using SetScrollX()/SetScrollY().
//   IMGUI_API float         GetScrollX();                                                   // get scrolling amount [0 .. GetScrollMaxX()]
//   IMGUI_API float         GetScrollY();                                                   // get scrolling amount [0 .. GetScrollMaxY()]
//   IMGUI_API void          SetScrollX(float scroll_x);                                     // set scrolling amount [0 .. GetScrollMaxX()]
//   IMGUI_API void          SetScrollY(float scroll_y);                                     // set scrolling amount [0 .. GetScrollMaxY()]
//   IMGUI_API float         GetScrollMaxX();                                                // get maximum scrolling amount ~~ ContentSize.x - WindowSize.x - DecorationsSize.x
//   IMGUI_API float         GetScrollMaxY();                                                // get maximum scrolling amount ~~ ContentSize.y - WindowSize.y - DecorationsSize.y
//   IMGUI_API void          SetScrollHereX(float center_x_ratio = 0.5f);                    // adjust scrolling amount to make current cursor position visible. center_x_ratio=0.0: left, 0.5: center, 1.0: right. When using to make a "default/current item" visible, consider using SetItemDefaultFocus() instead.
//   IMGUI_API void          SetScrollHereY(float center_y_ratio = 0.5f);                    // adjust scrolling amount to make current cursor position visible. center_y_ratio=0.0: top, 0.5: center, 1.0: bottom. When using to make a "default/current item" visible, consider using SetItemDefaultFocus() instead.
//   IMGUI_API void          SetScrollFromPosX(float local_x, float center_x_ratio = 0.5f);  // adjust scrolling amount to make given position visible. Generally GetCursorStartPos() + offset to compute a valid position.
//   IMGUI_API void          SetScrollFromPosY(float local_y, float center_y_ratio = 0.5f);  // adjust scrolling amount to make given position visible. Generally GetCursorStartPos() + offset to compute a valid position.

/**
 * get scrolling amount [0 .. GetScrollMaxX()]
 */
export function getScrollX(): number {
  return imgui.igGetScrollX();
}
/**
 * get scrolling amount [0 .. GetScrollMaxY()]
 */
export function getScrollY(): number {
  return imgui.igGetScrollY();
}
/**
 * set scrolling amount [0 .. GetScrollMaxX()]
 */
export function setScrollX_Float(scroll_x: number): void {
  imgui.igSetScrollX_Float(scroll_x);
}
/**
 * set scrolling amount [0 .. GetScrollMaxY()]
 */
export function setScrollY_Float(scroll_y: number): void {
  imgui.igSetScrollY_Float(scroll_y);
}
/**
 * get maximum scrolling amount ~~ ContentSize.x - WindowSize.x - DecorationsSize.x
 */
export function getScrollMaxX(): number {
  return imgui.igGetScrollMaxX();
}
/**
 * get maximum scrolling amount ~~ ContentSize.y - WindowSize.y - DecorationsSize.y
 */
export function getScrollMaxY(): number {
  return imgui.igGetScrollMaxY();
}
/**
 * adjust scrolling amount to make current cursor position visible.
 * center_x_ratio=0.0: left, 0.5: center, 1.0: right.
 * When using to make a "default/current item" visible,
 * consider using SetItemDefaultFocus() instead.
 */
export function setScrollHereX(center_x_ratio: number = 0.5): void {
  imgui.igSetScrollHereX(center_x_ratio);
}
/**
 * adjust scrolling amount to make current cursor position visible.
 * center_x_ratio=0.0: left, 0.5: center, 1.0: right.
 * When using to make a "default/current item" visible,
 * consider using SetItemDefaultFocus() instead.
 */
export function setScrollHereY(center_y_ratio: number = 0.5): void {
  imgui.igSetScrollHereY(center_y_ratio);
}
/**
 * adjust scrolling amount to make given position visible.
 * Generally GetCursorStartPos() + offset to compute a valid position.
 */
export function setScrollFromPosX_Float(
  local_x: number,
  center_x_ratio: number = 0.5,
): void {
  imgui.igSetScrollFromPosX_Float(local_x, center_x_ratio);
}
/**
 * adjust scrolling amount to make given position visible.
 * Generally GetCursorStartPos() + offset to compute a valid position.
 */
export function setScrollFromPosY_Float(
  local_y: number,
  center_y_ratio: number = 0.5,
): void {
  imgui.igSetScrollFromPosY_Float(local_y, center_y_ratio);
}

//   // Parameters stacks (shared)
//   IMGUI_API void          PushFont(ImFont* font);                                         // use NULL as a shortcut to push default font
//   IMGUI_API void          PopFont();
//   IMGUI_API void          PushStyleColor(ImGuiCol idx, ImU32 col);                        // modify a style color. always use this if you modify the style after NewFrame().
//   IMGUI_API void          PushStyleColor(ImGuiCol idx, const ImVec4& col);
//   IMGUI_API void          PopStyleColor(int count = 1);
//   IMGUI_API void          PushStyleVar(ImGuiStyleVar idx, float val);                     // modify a style float variable. always use this if you modify the style after NewFrame().
//   IMGUI_API void          PushStyleVar(ImGuiStyleVar idx, const ImVec2& val);             // modify a style ImVec2 variable. always use this if you modify the style after NewFrame().
//   IMGUI_API void          PopStyleVar(int count = 1);
//   IMGUI_API void          PushAllowKeyboardFocus(bool allow_keyboard_focus);              // == tab stop enable. Allow focusing using TAB/Shift-TAB, enabled by default but you can disable it for certain widgets
//   IMGUI_API void          PopAllowKeyboardFocus();
//   IMGUI_API void          PushButtonRepeat(bool repeat);                                  // in 'repeat' mode, Button*() functions return repeated true in a typematic manner (using io.KeyRepeatDelay/io.KeyRepeatRate setting). Note that you can call IsItemActive() after any Button() to tell if the button is held in the current frame.
//   IMGUI_API void          PopButtonRepeat();

/**
 * use NULL as a shortcut to push default font
 */
export function pushFont(font: ImFont): void {
  imgui.igPushFont(font);
}
export function popFont(): void {
  imgui.igPopFont();
}
/**
 * modify a style color. always use this if you modify the style after NewFrame().
 */
export function pushStyleColor(idx: ImGuiCol, col: ImU32 | ImVec4): void {
  if (col instanceof ImVec4) {
    imgui.igPushStyleColor_Vec4(idx, col[BUFFER]);
  } else {
    imgui.igPushStyleColor_U32(idx, col);
  }
}
export function popStyleColor(count: number = 1): void {
  imgui.igPopStyleColor(count);
}
/**
 * modify a style float variable. always use this if you modify the style after NewFrame().
 */
export function pushStyleVar(idx: ImGuiStyleVar, val: number | ImVec2): void {
  if (val instanceof ImVec2) {
    imgui.igPushStyleVar_Vec2(idx, val[BUFFER]);
  } else {
    imgui.igPushStyleVar_Float(idx, val);
  }
}
export function popStyleVar(count: number = 1): void {
  imgui.igPopStyleVar(count);
}
/**
 * == tab stop enable. Allow focusing using TAB/Shift-TAB, enabled by default but you can disable it for certain widgets
 */
export function pushAllowKeyboardFocus(allow_keyboard_focus: boolean): void {
  imgui.igPushAllowKeyboardFocus(allow_keyboard_focus);
}
export function popAllowKeyboardFocus(): void {
  imgui.igPopAllowKeyboardFocus();
}
/**
 * in 'repeat' mode, Button*() functions return repeated true in a typematic manner (using io.KeyRepeatDelay/io.KeyRepeatRate setting). Note that you can call IsItemActive() after any Button() to tell if the button is held in the current frame.
 */
export function pushButtonRepeat(repeat: boolean): void {
  imgui.igPushButtonRepeat(repeat);
}
export function popButtonRepeat(): void {
  imgui.igPopButtonRepeat();
}

//   // Parameters stacks (current window)
//   IMGUI_API void          PushItemWidth(float item_width);                                // push width of items for common large "item+label" widgets. >0.0f: width in pixels, <0.0f align xx pixels to the right of window (so -FLT_MIN always align width to the right side).
//   IMGUI_API void          PopItemWidth();
//   IMGUI_API void          SetNextItemWidth(float item_width);                             // set width of the _next_ common large "item+label" widget. >0.0f: width in pixels, <0.0f align xx pixels to the right of window (so -FLT_MIN always align width to the right side)
//   IMGUI_API float         CalcItemWidth();                                                // width of item given pushed settings and current cursor position. NOT necessarily the width of last item unlike most 'Item' functions.
//   IMGUI_API void          PushTextWrapPos(float wrap_local_pos_x = 0.0f);                 // push word-wrapping position for Text*() commands. < 0.0f: no wrapping; 0.0f: wrap to end of window (or column); > 0.0f: wrap at 'wrap_pos_x' position in window local space
//   IMGUI_API void          PopTextWrapPos();

/**
 * push width of items for common large "item+label" widgets.
 * `>0.0f`: width in pixels.;
 * `<0.0f`: align xx pixels to the right of window
 * (so -FLT_MIN always align width to the right side).
 */
export function pushItemWidth(item_width: number): void {
  imgui.igPushItemWidth(item_width);
}
export function popItemWidth(): void {
  imgui.igPopItemWidth();
}
/**
 * set width of the _next_ common large "item+label" widget.
 * `>0.0f`: width in pixels;
 * `<0.0f`: align xx pixels to the right of window
 * (so -FLT_MIN always align width to the right side).
 */
export function setNextItemWidth(item_width: number): void {
  imgui.igSetNextItemWidth(item_width);
}
/**
 * width of item given pushed settings and current cursor position.
 * NOT necessarily the width of last item unlike most 'Item' functions.
 */
export function calcItemWidth(): number {
  return imgui.igCalcItemWidth();
}
/**
 * push word-wrapping position for Text*() commands.
 * `<0.0f`: no wrapping; 0.0f: wrap to end of window (or column);
 * `>0.0f`: wrap at 'wrap_pos_x' position in window local space
 */
export function pushTextWrapPos(wrap_local_pos_x: number = 0.0): void {
  imgui.igPushTextWrapPos(wrap_local_pos_x);
}
export function popTextWrapPos(): void {
  imgui.igPopTextWrapPos();
}

//   // Style read access
//   // - Use the ShowStyleEditor() function to interactively see/edit the colors.
//   IMGUI_API ImFont*       GetFont();                                                      // get current font
//   IMGUI_API float         GetFontSize();                                                  // get current font size (= height in pixels) of current font with current scale applied
//   IMGUI_API ImVec2        GetFontTexUvWhitePixel();                                       // get UV coordinate for a while pixel, useful to draw custom shapes via the ImDrawList API
//   IMGUI_API ImU32         GetColorU32(ImGuiCol idx, float alpha_mul = 1.0f);              // retrieve given style color with style alpha applied and optional extra alpha multiplier, packed as a 32-bit value suitable for ImDrawList
//   IMGUI_API ImU32         GetColorU32(const ImVec4& col);                                 // retrieve given color with style alpha applied, packed as a 32-bit value suitable for ImDrawList
//   IMGUI_API ImU32         GetColorU32(ImU32 col);                                         // retrieve given color with style alpha applied, packed as a 32-bit value suitable for ImDrawList
//   IMGUI_API const ImVec4& GetStyleColorVec4(ImGuiCol idx);                                // retrieve style color as stored in ImGuiStyle structure. use to feed back into PushStyleColor(), otherwise use GetColorU32() to get style color with style alpha baked in.

export function getFont(): ImFont {
  return imgui.igGetFont();
}
export function getFontSize(): number {
  return imgui.igGetFontSize();
}

export function getFontTexUvWhitePixel(): ImVec2 {
  const vec2 = new ImVec2();
  imgui.igGetFontTexUvWhitePixel(vec2[BUFFER]);
  return vec2;
}
export function getColorU32_Col(idx: ImGuiCol, alpha_mul: number): ImU32 {
  return imgui.igGetColorU32_Col(idx, alpha_mul);
}
export function getColorU32_Vec4(col: ImVec4): ImU32 {
  return imgui.igGetColorU32_Vec4(col[BUFFER]);
}
export function getColorU32_U32(col: ImU32): ImU32 {
  return imgui.igGetColorU32_U32(col);
}

// export function getStyleColorVec4(idx: ImGuiCol): ImVec4 {
// TODO editable ImVec4
//   const vec4 = new ImVec4();
//   return imgui.igGetStyleColorVec4(idx);
//   return vec4;
// }

//   // Cursor / Layout
//   // - By "cursor" we mean the current output position.
//   // - The typical widget behavior is to output themselves at the current cursor position, then move the cursor one line down.
//   // - You can call SameLine() between widgets to undo the last carriage return and output at the right of the preceding widget.
//   // - Attention! We currently have inconsistencies between window-local and absolute positions we will aim to fix with future API:
//   //    Window-local coordinates:   SameLine(), GetCursorPos(), SetCursorPos(), GetCursorStartPos(), GetContentRegionMax(), GetWindowContentRegion*(), PushTextWrapPos()
//   //    Absolute coordinate:        GetCursorScreenPos(), SetCursorScreenPos(), all ImDrawList:: functions.
//   IMGUI_API void          Separator();                                                    // separator, generally horizontal. inside a menu bar or in horizontal layout mode, this becomes a vertical separator.
//   IMGUI_API void          SameLine(float offset_from_start_x=0.0f, float spacing=-1.0f);  // call between widgets or groups to layout them horizontally. X position given in window coordinates.
//   IMGUI_API void          NewLine();                                                      // undo a SameLine() or force a new line when in a horizontal-layout context.
//   IMGUI_API void          Spacing();                                                      // add vertical spacing.
//   IMGUI_API void          Dummy(const ImVec2& size);                                      // add a dummy item of given size. unlike InvisibleButton(), Dummy() won't take the mouse click or be navigable into.
//   IMGUI_API void          Indent(float indent_w = 0.0f);                                  // move content position toward the right, by indent_w, or style.IndentSpacing if indent_w <= 0
//   IMGUI_API void          Unindent(float indent_w = 0.0f);                                // move content position back to the left, by indent_w, or style.IndentSpacing if indent_w <= 0
//   IMGUI_API void          BeginGroup();                                                   // lock horizontal starting position
//   IMGUI_API void          EndGroup();                                                     // unlock horizontal starting position + capture the whole group bounding box into one "item" (so you can use IsItemHovered() or layout primitives such as SameLine() on whole group, etc.)
//   IMGUI_API ImVec2        GetCursorPos();                                                 // cursor position in window coordinates (relative to window position)
//   IMGUI_API float         GetCursorPosX();                                                //   (some functions are using window-relative coordinates, such as: GetCursorPos, GetCursorStartPos, GetContentRegionMax, GetWindowContentRegion* etc.
//   IMGUI_API float         GetCursorPosY();                                                //    other functions such as GetCursorScreenPos or everything in ImDrawList::
//   IMGUI_API void          SetCursorPos(const ImVec2& local_pos);                          //    are using the main, absolute coordinate system.
//   IMGUI_API void          SetCursorPosX(float local_x);                                   //    GetWindowPos() + GetCursorPos() == GetCursorScreenPos() etc.)
//   IMGUI_API void          SetCursorPosY(float local_y);                                   //
//   IMGUI_API ImVec2        GetCursorStartPos();                                            // initial cursor position in window coordinates
//   IMGUI_API ImVec2        GetCursorScreenPos();                                           // cursor position in absolute coordinates (useful to work with ImDrawList API). generally top-left == GetMainViewport()->Pos == (0,0) in single viewport mode, and bottom-right == GetMainViewport()->Pos+Size == io.DisplaySize in single-viewport mode.
//   IMGUI_API void          SetCursorScreenPos(const ImVec2& pos);                          // cursor position in absolute coordinates
//   IMGUI_API void          AlignTextToFramePadding();                                      // vertically align upcoming text baseline to FramePadding.y so that it will align properly to regularly framed items (call if you have text on a line before a framed item)
//   IMGUI_API float         GetTextLineHeight();                                            // ~ FontSize
//   IMGUI_API float         GetTextLineHeightWithSpacing();                                 // ~ FontSize + style.ItemSpacing.y (distance in pixels between 2 consecutive lines of text)
//   IMGUI_API float         GetFrameHeight();                                               // ~ FontSize + style.FramePadding.y * 2
//   IMGUI_API float         GetFrameHeightWithSpacing();                                    // ~ FontSize + style.FramePadding.y * 2 + style.ItemSpacing.y (distance in pixels between 2 consecutive lines of framed widgets)

/**
 * separator, generally horizontal. inside a menu bar
 * or in horizontal layout mode, this becomes a vertical separator.
 */
export function separator(): void {
  imgui.igSeparator();
}
/**
 * call between widgets or groups to layout them horizontally.
 * X position given in window coordinates.
 */
export function sameLine(
  offset_from_start_x: number = 0.0,
  spacing: number = -1.0,
): void {
  imgui.igSameLine(offset_from_start_x, spacing);
}
/**
 * undo a SameLine() or force a new line when in a horizontal-layout context.
 */
export function newLine(): void {
  imgui.igNewLine();
}
/**
 * add vertical spacing.
 */
export function spacing(): void {
  imgui.igSpacing();
}
/**
 * add a dummy item of given size. unlike InvisibleButton(),
 * Dummy() won't take the mouse click or be navigable into.
 */
export function dummy(size: ImVec2): void {
  imgui.igDummy(size[BUFFER]);
}
/**
 * move content position toward the right, by indent_w,
 * or style.IndentSpacing if indent_w <= 0
 */
export function indent(indent_w: number = 0.0): void {
  imgui.igIndent(indent_w);
}
/**
 * move content position back to the left, by indent_w,
 * or style.IndentSpacing if indent_w <= 0
 */
export function unindent(indent_w: number = 0.0): void {
  imgui.igUnindent(indent_w);
}
/**
 * lock horizontal starting position
 */
export function beginGroup(): void {
  imgui.igBeginGroup();
}
/**
 * unlock horizontal starting position + capture the whole group bounding box
 * into one "item" (so you can use IsItemHovered() or layout primitives
 * such as SameLine() on whole group, etc.)
 */
export function endGroup(): void {
  imgui.igEndGroup();
}

/**
 * cursor position in window coordinates (relative to window position)
 */
export function getCursorPos(out?: ImVec2): ImVec2 {
  const vec2 = out ?? new ImVec2();
  imgui.igGetCursorPos(vec2[BUFFER]);
  return vec2;
}
//   (some functions are using window-relative coordinates, such as: GetCursorPos, GetCursorStartPos, GetContentRegionMax, GetWindowContentRegion* etc.
//    other functions such as GetCursorScreenPos or everything in ImDrawList::
//    are using the main, absolute coordinate system.
//    GetWindowPos() + GetCursorPos() == GetCursorScreenPos() etc.)
//
export function getCursorPosX(): number {
  return imgui.igGetCursorPosX();
}
export function getCursorPosY(): number {
  return imgui.igGetCursorPosY();
}
export function setCursorPos(local_pos: ImVec2): void {
  imgui.igSetCursorPos(local_pos[BUFFER]);
}
export function setCursorPosX(local_x: number): void {
  imgui.igSetCursorPosX(local_x);
}
export function setCursorPosY(local_y: number): void {
  imgui.igSetCursorPosY(local_y);
}

/**
 * initial cursor position in window coordinates
 */
export function getCursorStartPos(out?: ImVec2): ImVec2 {
  const vec2 = out ?? new ImVec2();
  imgui.igGetCursorStartPos(vec2[BUFFER]);
  return vec2;
}
/**
 * cursor position in absolute coordinates (useful to work with ImDrawList API).
 * generally top-left == GetMainViewport()->Pos == (0,0) in single viewport mode,
 * and bottom-right == GetMainViewport()->Pos+Size == io.DisplaySize in single-viewport mode.
 */
export function getCursorScreenPos(out?: ImVec2): ImVec2 {
  const vec2 = out ?? new ImVec2();
  imgui.igGetCursorScreenPos(vec2[BUFFER]);
  return vec2;
}
/**
 * cursor position in absolute coordinates
 */
export function setCursorScreenPos(pos: ImVec2): void {
  imgui.igSetCursorScreenPos(pos[BUFFER]);
}
/**
 * vertically align upcoming text baseline to `FramePadding.y`
 * so that it will align properly to regularly framed items
 * (call if you have text on a line before a framed item)
 */
export function alignTextToFramePadding(): void {
  imgui.igAlignTextToFramePadding();
}
/**
 * `FontSize`
 */
export function getTextLineHeight(): number {
  return imgui.igGetTextLineHeight();
}
/**
 * `FontSize + style.ItemSpacing.y`
 * (distance in pixels between 2 consecutive lines of text)
 */
//
export function getTextLineHeightWithSpacing(): number {
  return imgui.igGetTextLineHeightWithSpacing();
}
/**
 * `FontSize + style.FramePadding.y * 2`
 */
export function getFrameHeight(): number {
  return imgui.igGetFrameHeight();
}
/**
 * `FontSize + style.FramePadding.y * 2 + style.ItemSpacing.y`
 * (distance in pixels between 2 consecutive lines of framed widgets)
 */
//
export function getFrameHeightWithSpacing(): number {
  return imgui.igGetFrameHeightWithSpacing();
}

//   // ID stack/scopes
//   // Read the FAQ (docs/FAQ.md or http://dearimgui.org/faq) for more details about how ID are handled in dear imgui.
//   // - Those questions are answered and impacted by understanding of the ID stack system:
//   //   - "Q: Why is my widget not reacting when I click on it?"
//   //   - "Q: How can I have widgets with an empty label?"
//   //   - "Q: How can I have multiple widgets with the same label?"
//   // - Short version: ID are hashes of the entire ID stack. If you are creating widgets in a loop you most likely
//   //   want to push a unique identifier (e.g. object pointer, loop index) to uniquely differentiate them.
//   // - You can also use the "Label##foobar" syntax within widget label to distinguish them from each others.
//   // - In this header file we use the "label"/"name" terminology to denote a string that will be displayed + used as an ID,
//   //   whereas "str_id" denote a string that is only used as an ID and not normally displayed.
//   IMGUI_API void          PushID(const char* str_id);                                     // push string into the ID stack (will hash string).
//   IMGUI_API void          PushID(const char* str_id_begin, const char* str_id_end);       // push string into the ID stack (will hash string).
//   IMGUI_API void          PushID(const void* ptr_id);                                     // push pointer into the ID stack (will hash pointer).
//   IMGUI_API void          PushID(int int_id);                                             // push integer into the ID stack (will hash integer).
//   IMGUI_API void          PopID();                                                        // pop from the ID stack.
//   IMGUI_API ImGuiID       GetID(const char* str_id);                                      // calculate unique ID (hash of whole ID stack + given parameter). e.g. if you want to query into ImGuiStorage yourself
//   IMGUI_API ImGuiID       GetID(const char* str_id_begin, const char* str_id_end);
//   IMGUI_API ImGuiID       GetID(const void* ptr_id);

/**
 *  push string into the ID stack (will hash id).
 */
export function pushID(id: string | number): void {
  if (typeof id == "string") {
    imgui.igPushID_Str(cString(id));
  } else {
    imgui.igPushID_Int(id);
  }
}

/**
 * pop from the ID stack.
 */
export function popID(): void {
  imgui.igPopID();
}

/**
 * calculate unique ID (hash of whole ID stack + given parameter).
 * e.g. if you want to query into ImGuiStorage yourself
 */
export function getID(id: string): ImGuiID {
  return imgui.igGetID_Str(cString(id));
}

//   // Widgets: Text
//   IMGUI_API void          TextUnformatted(const char* text, const char* text_end = NULL); // raw text without formatting. Roughly equivalent to Text("%s", text) but: A) doesn't require null terminated string if 'text_end' is specified, B) it's faster, no memory copy is done, no buffer size limits, recommended for long chunks of text.
//   IMGUI_API void          Text(const char* fmt, ...)                                      IM_FMTARGS(1); // formatted text
//   IMGUI_API void          TextV(const char* fmt, va_list args)                            IM_FMTLIST(1);
//   IMGUI_API void          TextColored(const ImVec4& col, const char* fmt, ...)            IM_FMTARGS(2); // shortcut for PushStyleColor(ImGuiCol_Text, col); Text(fmt, ...); PopStyleColor();
//   IMGUI_API void          TextColoredV(const ImVec4& col, const char* fmt, va_list args)  IM_FMTLIST(2);
//   IMGUI_API void          TextDisabled(const char* fmt, ...)                              IM_FMTARGS(1); // shortcut for PushStyleColor(ImGuiCol_Text, style.Colors[ImGuiCol_TextDisabled]); Text(fmt, ...); PopStyleColor();
//   IMGUI_API void          TextDisabledV(const char* fmt, va_list args)                    IM_FMTLIST(1);
//   IMGUI_API void          TextWrapped(const char* fmt, ...)                               IM_FMTARGS(1); // shortcut for PushTextWrapPos(0.0f); Text(fmt, ...); PopTextWrapPos();. Note that this won't work on an auto-resizing window if there's no other widgets to extend the window width, yoy may need to set a size using SetNextWindowSize().
//   IMGUI_API void          TextWrappedV(const char* fmt, va_list args)                     IM_FMTLIST(1);
//   IMGUI_API void          LabelText(const char* label, const char* fmt, ...)              IM_FMTARGS(2); // display text+label aligned the same way as value+label widgets
//   IMGUI_API void          LabelTextV(const char* label, const char* fmt, va_list args)    IM_FMTLIST(2);
//   IMGUI_API void          BulletText(const char* fmt, ...)                                IM_FMTARGS(1); // shortcut for Bullet()+Text()
//   IMGUI_API void          BulletTextV(const char* fmt, va_list args)                      IM_FMTLIST(1);

export function text(text: string): void {
  return imgui.igTextUnformatted(cString(text), null);
}

//   // Widgets: Main
//   // - Most widgets return true when the value has been changed or when pressed/selected
//   // - You may also use one of the many IsItemXXX functions (e.g. IsItemActive, IsItemHovered, etc.) to query widget state.
//   IMGUI_API bool          Button(const char* label, const ImVec2& size = ImVec2(0, 0));   // button
//   IMGUI_API bool          SmallButton(const char* label);                                 // button with FramePadding=(0,0) to easily embed within text
//   IMGUI_API bool          InvisibleButton(const char* str_id, const ImVec2& size, ImGuiButtonFlags flags = 0); // flexible button behavior without the visuals, frequently useful to build custom behaviors using the public api (along with IsItemActive, IsItemHovered, etc.)
//   IMGUI_API bool          ArrowButton(const char* str_id, ImGuiDir dir);                  // square button with an arrow shape
//   IMGUI_API bool          Checkbox(const char* label, bool* v);
//   IMGUI_API bool          CheckboxFlags(const char* label, int* flags, int flags_value);
//   IMGUI_API bool          CheckboxFlags(const char* label, unsigned int* flags, unsigned int flags_value);
//   IMGUI_API bool          RadioButton(const char* label, bool active);                    // use with e.g. if (RadioButton("one", my_value==1)) { my_value = 1; }
//   IMGUI_API bool          RadioButton(const char* label, int* v, int v_button);           // shortcut to handle the above pattern when value is an integer
//   IMGUI_API void          ProgressBar(float fraction, const ImVec2& size_arg = ImVec2(-FLT_MIN, 0), const char* overlay = NULL);
//   IMGUI_API void          Bullet();                                                       // draw a small circle + keep the cursor on the same line. advance cursor x position by GetTreeNodeToLabelSpacing(), same distance that TreeNode() uses

/**
 * button
 */
export function button(label: string, size: ImVec2): boolean {
  return imgui.igButton(cString(label), size[BUFFER]);
}
/**
 * button with FramePadding=(0,0) to easily embed within text
 */
export function smallButton(label: string): boolean {
  return imgui.igSmallButton(cString(label));
}
/**
 * flexible button behavior without the visuals,
 * frequently useful to build custom behaviors using the public api
 * (along with IsItemActive, IsItemHovered, etc.)
 */
export function invisibleButton(
  str_id: string,
  size: ImVec2,
  flags: ImGuiButtonFlags,
): boolean {
  return imgui.igInvisibleButton(cString(str_id), size[BUFFER], flags);
}
/**
 * square button with an arrow shape
 */
export function arrowButton(str_id: string, dir: ImGuiDir): boolean {
  return imgui.igArrowButton(cString(str_id), dir);
}
/**
 * checkbox
 */
export function checkbox(label: string, v: CBool | null = null): boolean {
  return imgui.igCheckbox(cString(label), v ? v[BUFFER] : null);
}

/**
 * @example
 * if (radioButton("one", my_value==1)) { my_value = 1; }
 */
export function radioButton(label: string, active: boolean): boolean {
  return imgui.igRadioButton_Bool(cString(label), active);
}

/**
 * draw a small circle + keep the cursor on the same line.
 * advance cursor x position by GetTreeNodeToLabelSpacing(),
 * same distance that `TreeNode()` uses
 */
export function bullet(): void {
  imgui.igBullet();
}

//   // Widgets: Images
//   // - Read about ImTextureID here: https://github.com/ocornut/imgui/wiki/Image-Loading-and-Displaying-Examples
//   IMGUI_API void          Image(ImTextureID user_texture_id, const ImVec2& size, const ImVec2& uv0 = ImVec2(0, 0), const ImVec2& uv1 = ImVec2(1, 1), const ImVec4& tint_col = ImVec4(1, 1, 1, 1), const ImVec4& border_col = ImVec4(0, 0, 0, 0));
//   IMGUI_API bool          ImageButton(const char* str_id, ImTextureID user_texture_id, const ImVec2& size, const ImVec2& uv0 = ImVec2(0, 0), const ImVec2& uv1 = ImVec2(1, 1), const ImVec4& bg_col = ImVec4(0, 0, 0, 0), const ImVec4& tint_col = ImVec4(1, 1, 1, 1));

export function image(
  user_texture_id: ImTextureID,
  size: ImVec2,
  uv0: ImVec2,
  uv1: ImVec2,
  tint_col: ImVec4,
  border_col: ImVec4,
): void {
  imgui.igImage(
    user_texture_id,
    size[BUFFER],
    uv0[BUFFER],
    uv1[BUFFER],
    tint_col[BUFFER],
    border_col[BUFFER],
  );
}
export function imageButton(
  str_id: string,
  user_texture_id: ImTextureID,
  size: ImVec2,
  uv0: ImVec2,
  uv1: ImVec2,
  bg_col: ImVec4,
  tint_col: ImVec4,
): boolean {
  return imgui.igImageButton(
    cString(str_id),
    user_texture_id,
    size[BUFFER],
    uv0[BUFFER],
    uv1[BUFFER],
    bg_col[BUFFER],
    tint_col[BUFFER],
  );
}

//   // Widgets: Combo Box (Dropdown)
//   // - The BeginCombo()/EndCombo() api allows you to manage your contents and selection state however you want it, by creating e.g. Selectable() items.
//   // - The old Combo() api are helpers over BeginCombo()/EndCombo() which are kept available for convenience purpose. This is analogous to how ListBox are created.
//   IMGUI_API bool          BeginCombo(const char* label, const char* preview_value, ImGuiComboFlags flags = 0);
//   IMGUI_API void          EndCombo(); // only call EndCombo() if BeginCombo() returns true!
//   IMGUI_API bool          Combo(const char* label, int* current_item, const char* const items[], int items_count, int popup_max_height_in_items = -1);
//   IMGUI_API bool          Combo(const char* label, int* current_item, const char* items_separated_by_zeros, int popup_max_height_in_items = -1);      // Separate items with \0 within a string, end item-list with \0\0. e.g. "One\0Two\0Three\0"
//   IMGUI_API bool          Combo(const char* label, int* current_item, bool(*items_getter)(void* data, int idx, const char** out_text), void* data, int items_count, int popup_max_height_in_items = -1);

// TODO

//   // Widgets: Drag Sliders
//   // - CTRL+Click on any drag box to turn them into an input box. Manually input values aren't clamped by default and can go off-bounds. Use ImGuiSliderFlags_AlwaysClamp to always clamp.
//   // - For all the Float2/Float3/Float4/Int2/Int3/Int4 versions of every function, note that a 'float v[X]' function argument is the same as 'float* v',
//   //   the array syntax is just a way to document the number of elements that are expected to be accessible. You can pass address of your first element out of a contiguous set, e.g. &myvector.x
//   // - Adjust format string to decorate the value with a prefix, a suffix, or adapt the editing and display precision e.g. "%.3f" -> 1.234; "%5.2f secs" -> 01.23 secs; "Biscuit: %.0f" -> Biscuit: 1; etc.
//   // - Format string may also be set to NULL or use the default format ("%f" or "%d").
//   // - Speed are per-pixel of mouse movement (v_speed=0.2f: mouse needs to move by 5 pixels to increase value by 1). For gamepad/keyboard navigation, minimum speed is Max(v_speed, minimum_step_at_given_precision).
//   // - Use v_min < v_max to clamp edits to given limits. Note that CTRL+Click manual input can override those limits if ImGuiSliderFlags_AlwaysClamp is not used.
//   // - Use v_max = FLT_MAX / INT_MAX etc to avoid clamping to a maximum, same with v_min = -FLT_MAX / INT_MIN to avoid clamping to a minimum.
//   // - We use the same sets of flags for DragXXX() and SliderXXX() functions as the features are the same and it makes it easier to swap them.
//   // - Legacy: Pre-1.78 there are DragXXX() function signatures that take a final `float power=1.0f' argument instead of the `ImGuiSliderFlags flags=0' argument.
//   //   If you get a warning converting a float to ImGuiSliderFlags, read https://github.com/ocornut/imgui/issues/3361
//   IMGUI_API bool          DragFloat(const char* label, float* v, float v_speed = 1.0f, float v_min = 0.0f, float v_max = 0.0f, const char* format = "%.3f", ImGuiSliderFlags flags = 0);     // If v_min >= v_max we have no bound
//   IMGUI_API bool          DragFloat2(const char* label, float v[2], float v_speed = 1.0f, float v_min = 0.0f, float v_max = 0.0f, const char* format = "%.3f", ImGuiSliderFlags flags = 0);
//   IMGUI_API bool          DragFloat3(const char* label, float v[3], float v_speed = 1.0f, float v_min = 0.0f, float v_max = 0.0f, const char* format = "%.3f", ImGuiSliderFlags flags = 0);
//   IMGUI_API bool          DragFloat4(const char* label, float v[4], float v_speed = 1.0f, float v_min = 0.0f, float v_max = 0.0f, const char* format = "%.3f", ImGuiSliderFlags flags = 0);
//   IMGUI_API bool          DragFloatRange2(const char* label, float* v_current_min, float* v_current_max, float v_speed = 1.0f, float v_min = 0.0f, float v_max = 0.0f, const char* format = "%.3f", const char* format_max = NULL, ImGuiSliderFlags flags = 0);
//   IMGUI_API bool          DragInt(const char* label, int* v, float v_speed = 1.0f, int v_min = 0, int v_max = 0, const char* format = "%d", ImGuiSliderFlags flags = 0);  // If v_min >= v_max we have no bound
//   IMGUI_API bool          DragInt2(const char* label, int v[2], float v_speed = 1.0f, int v_min = 0, int v_max = 0, const char* format = "%d", ImGuiSliderFlags flags = 0);
//   IMGUI_API bool          DragInt3(const char* label, int v[3], float v_speed = 1.0f, int v_min = 0, int v_max = 0, const char* format = "%d", ImGuiSliderFlags flags = 0);
//   IMGUI_API bool          DragInt4(const char* label, int v[4], float v_speed = 1.0f, int v_min = 0, int v_max = 0, const char* format = "%d", ImGuiSliderFlags flags = 0);
//   IMGUI_API bool          DragIntRange2(const char* label, int* v_current_min, int* v_current_max, float v_speed = 1.0f, int v_min = 0, int v_max = 0, const char* format = "%d", const char* format_max = NULL, ImGuiSliderFlags flags = 0);
//   IMGUI_API bool          DragScalar(const char* label, ImGuiDataType data_type, void* p_data, float v_speed = 1.0f, const void* p_min = NULL, const void* p_max = NULL, const char* format = NULL, ImGuiSliderFlags flags = 0);
//   IMGUI_API bool          DragScalarN(const char* label, ImGuiDataType data_type, void* p_data, int components, float v_speed = 1.0f, const void* p_min = NULL, const void* p_max = NULL, const char* format = NULL, ImGuiSliderFlags flags = 0);

export function dragFloat(
  label: string,
  v: Float32Array,
  v_speed: number = 1.0,
  v_min: number = 0,
  v_max: number = 0,
  format: string = "%.3f",
  flags: ImGuiSliderFlags = 0,
): boolean {
  return imgui.igDragFloat(
    cString(label),
    v,
    v_speed,
    v_min,
    v_max,
    cString(format),
    flags,
  );
}
export function dragFloat2(
  label: string,
  v: Float32Array,
  v_speed: number = 1.0,
  v_min: number = 0,
  v_max: number = 0,
  format: string = "%.3f",
  flags: ImGuiSliderFlags = 0,
): boolean {
  return imgui.igDragFloat2(
    cString(label),
    v,
    v_speed,
    v_min,
    v_max,
    cString(format),
    flags,
  );
}
export function dragFloat3(
  label: string,
  v: Float32Array,
  v_speed: number = 1.0,
  v_min: number = 0,
  v_max: number = 0,
  format: string = "%.3f",
  flags: ImGuiSliderFlags = 0,
): boolean {
  return imgui.igDragFloat3(
    cString(label),
    v,
    v_speed,
    v_min,
    v_max,
    cString(format),
    flags,
  );
}
export function dragFloat4(
  label: string,
  v: Float32Array,
  v_speed: number = 1.0,
  v_min: number = 0,
  v_max: number = 0,
  format: string = "%.3f",
  flags: ImGuiSliderFlags = 0,
): boolean {
  return imgui.igDragFloat4(
    cString(label),
    v,
    v_speed,
    v_min,
    v_max,
    cString(format),
    flags,
  );
}
export function dragFloatRange2(
  label: string,
  v_current_min: Float32Array,
  v_current_max: Float32Array,
  v_speed: number = 1.0,
  v_min: number = 0,
  v_max: number = 0,
  format: string = "%.3f",
  format_max: string,
  flags: ImGuiSliderFlags = 0,
): boolean {
  return imgui.igDragFloatRange2(
    cString(label),
    v_current_min,
    v_current_max,
    v_speed,
    v_min,
    v_max,
    cString(format),
    cString(format_max),
    flags,
  );
}
export function dragInt(
  label: string,
  v: Int32Array,
  v_speed: number = 1.0,
  v_min: number = 0,
  v_max: number = 0,
  format: string = "%d",
  flags: ImGuiSliderFlags = 0,
): boolean {
  return imgui.igDragInt(
    cString(label),
    v,
    v_speed,
    v_min,
    v_max,
    cString(format),
    flags,
  );
}
export function dragInt2(
  label: string,
  v: Int32Array,
  v_speed: number = 1.0,
  v_min: number = 0,
  v_max: number = 0,
  format: string = "%d",
  flags: ImGuiSliderFlags = 0,
): boolean {
  return imgui.igDragInt2(
    cString(label),
    v,
    v_speed,
    v_min,
    v_max,
    cString(format),
    flags,
  );
}
export function dragInt3(
  label: string,
  v: Int32Array,
  v_speed: number = 1.0,
  v_min: number = 0,
  v_max: number = 0,
  format: string = "%d",
  flags: ImGuiSliderFlags = 0,
): boolean {
  return imgui.igDragInt3(
    cString(label),
    v,
    v_speed,
    v_min,
    v_max,
    cString(format),
    flags,
  );
}
export function dragInt4(
  label: string,
  v: Int32Array,
  v_speed: number = 1.0,
  v_min: number = 0,
  v_max: number = 0,
  format: string = "%d",
  flags: ImGuiSliderFlags = 0,
): boolean {
  return imgui.igDragInt4(
    cString(label),
    v,
    v_speed,
    v_min,
    v_max,
    cString(format),
    flags,
  );
}
export function dragIntRange2(
  label: string,
  v_current_min: Int32Array,
  v_current_max: Int32Array,
  v_speed: number = 1.0,
  v_min: number = 0,
  v_max: number = 0,
  format: string = "%d",
  format_max: string,
  flags: ImGuiSliderFlags = 0,
): boolean {
  return imgui.igDragIntRange2(
    cString(label),
    v_current_min,
    v_current_max,
    v_speed,
    v_min,
    v_max,
    cString(format),
    cString(format_max),
    flags,
  );
}

//   // Widgets: Regular Sliders
//   // - CTRL+Click on any slider to turn them into an input box. Manually input values aren't clamped by default and can go off-bounds. Use ImGuiSliderFlags_AlwaysClamp to always clamp.
//   // - Adjust format string to decorate the value with a prefix, a suffix, or adapt the editing and display precision e.g. "%.3f" -> 1.234; "%5.2f secs" -> 01.23 secs; "Biscuit: %.0f" -> Biscuit: 1; etc.
//   // - Format string may also be set to NULL or use the default format ("%f" or "%d").
//   // - Legacy: Pre-1.78 there are SliderXXX() function signatures that take a final `float power=1.0f' argument instead of the `ImGuiSliderFlags flags=0' argument.
//   //   If you get a warning converting a float to ImGuiSliderFlags, read https://github.com/ocornut/imgui/issues/3361
//   IMGUI_API bool          SliderFloat(const char* label, float* v, float v_min, float v_max, const char* format = "%.3f", ImGuiSliderFlags flags = 0);     // adjust format to decorate the value with a prefix or a suffix for in-slider labels or unit display.
//   IMGUI_API bool          SliderFloat2(const char* label, float v[2], float v_min, float v_max, const char* format = "%.3f", ImGuiSliderFlags flags = 0);
//   IMGUI_API bool          SliderFloat3(const char* label, float v[3], float v_min, float v_max, const char* format = "%.3f", ImGuiSliderFlags flags = 0);
//   IMGUI_API bool          SliderFloat4(const char* label, float v[4], float v_min, float v_max, const char* format = "%.3f", ImGuiSliderFlags flags = 0);
//   IMGUI_API bool          SliderAngle(const char* label, float* v_rad, float v_degrees_min = -360.0f, float v_degrees_max = +360.0f, const char* format = "%.0f deg", ImGuiSliderFlags flags = 0);
//   IMGUI_API bool          SliderInt(const char* label, int* v, int v_min, int v_max, const char* format = "%d", ImGuiSliderFlags flags = 0);
//   IMGUI_API bool          SliderInt2(const char* label, int v[2], int v_min, int v_max, const char* format = "%d", ImGuiSliderFlags flags = 0);
//   IMGUI_API bool          SliderInt3(const char* label, int v[3], int v_min, int v_max, const char* format = "%d", ImGuiSliderFlags flags = 0);
//   IMGUI_API bool          SliderInt4(const char* label, int v[4], int v_min, int v_max, const char* format = "%d", ImGuiSliderFlags flags = 0);
//   IMGUI_API bool          SliderScalar(const char* label, ImGuiDataType data_type, void* p_data, const void* p_min, const void* p_max, const char* format = NULL, ImGuiSliderFlags flags = 0);
//   IMGUI_API bool          SliderScalarN(const char* label, ImGuiDataType data_type, void* p_data, int components, const void* p_min, const void* p_max, const char* format = NULL, ImGuiSliderFlags flags = 0);
//   IMGUI_API bool          VSliderFloat(const char* label, const ImVec2& size, float* v, float v_min, float v_max, const char* format = "%.3f", ImGuiSliderFlags flags = 0);
//   IMGUI_API bool          VSliderInt(const char* label, const ImVec2& size, int* v, int v_min, int v_max, const char* format = "%d", ImGuiSliderFlags flags = 0);
//   IMGUI_API bool          VSliderScalar(const char* label, const ImVec2& size, ImGuiDataType data_type, void* p_data, const void* p_min, const void* p_max, const char* format = NULL, ImGuiSliderFlags flags = 0);

export function sliderFloat(
  label: string,
  v: Float32Array,
  v_min: number,
  v_max: number,
  format: string = "%.3f",
  flags: ImGuiSliderFlags = 0,
): boolean {
  assert(v.length >= 1);
  return imgui.igSliderFloat(
    cString(label),
    v,
    v_min,
    v_max,
    cString(format),
    flags,
  );
}
export function sliderFloat2(
  label: string,
  v: Float32Array,
  v_min: number,
  v_max: number,
  format: string = "%.3f",
  flags: ImGuiSliderFlags = 0,
): boolean {
  assert(v.length >= 2);
  return imgui.igSliderFloat2(
    cString(label),
    v,
    v_min,
    v_max,
    cString(format),
    flags,
  );
}
export function sliderFloat3(
  label: string,
  v: Float32Array,
  v_min: number,
  v_max: number,
  format: string = "%.3f",
  flags: ImGuiSliderFlags = 0,
): boolean {
  assert(v.length >= 3);
  return imgui.igSliderFloat3(
    cString(label),
    v,
    v_min,
    v_max,
    cString(format),
    flags,
  );
}
export function sliderFloat4(
  label: string,
  v: Float32Array,
  v_min: number,
  v_max: number,
  format: string = "%.3f",
  flags: ImGuiSliderFlags = 0,
): boolean {
  assert(v.length >= 4);
  return imgui.igSliderFloat4(
    cString(label),
    v,
    v_min,
    v_max,
    cString(format),
    flags,
  );
}
export function sliderAngle(
  label: string,
  v_rad: Float32Array,
  v_degrees_min: number = -360.0,
  v_degrees_max: number = 360.0,
  format: string = "%.0f deg",
  flags: ImGuiSliderFlags = 0,
): boolean {
  assert(v_rad.length >= 1);
  return imgui.igSliderAngle(
    cString(label),
    v_rad,
    v_degrees_min,
    v_degrees_max,
    cString(format),
    flags,
  );
}
export function sliderInt(
  label: string,
  v: Int32Array,
  v_min: number,
  v_max: number,
  format: string = "%d",
  flags: ImGuiSliderFlags = 0,
): boolean {
  return imgui.igSliderInt(
    cString(label),
    v,
    v_min,
    v_max,
    cString(format),
    flags,
  );
}
export function sliderInt2(
  label: string,
  v: Int32Array,
  v_min: number,
  v_max: number,
  format: string = "%d",
  flags: ImGuiSliderFlags = 0,
): boolean {
  return imgui.igSliderInt2(
    cString(label),
    v,
    v_min,
    v_max,
    cString(format),
    flags,
  );
}
export function sliderInt3(
  label: string,
  v: Int32Array,
  v_min: number,
  v_max: number,
  format: string = "%d",
  flags: ImGuiSliderFlags = 0,
): boolean {
  return imgui.igSliderInt3(
    cString(label),
    v,
    v_min,
    v_max,
    cString(format),
    flags,
  );
}
export function sliderInt4(
  label: string,
  v: Int32Array,
  v_min: number,
  v_max: number,
  format: string = "%d",
  flags: ImGuiSliderFlags = 0,
): boolean {
  return imgui.igSliderInt4(
    cString(label),
    v,
    v_min,
    v_max,
    cString(format),
    flags,
  );
}
/**
 * vertical silder
 */
export function vSliderFloat(
  label: string,
  size: ImVec2,
  v: Float32Array,
  v_min: number,
  v_max: number,
  format: string = "%.3f",
  flags: ImGuiSliderFlags = 0,
): boolean {
  return imgui.igVSliderFloat(
    cString(label),
    size[BUFFER],
    v,
    v_min,
    v_max,
    cString(format),
    flags,
  );
}
/**
 * vertical silder
 */
export function vSliderInt(
  label: string,
  size: ImVec2,
  v: Int32Array,
  v_min: number,
  v_max: number,
  format: string = "%d",
  flags: ImGuiSliderFlags = 0,
): boolean {
  return imgui.igVSliderInt(
    cString(label),
    size[BUFFER],
    v,
    v_min,
    v_max,
    cString(format),
    flags,
  );
}

//   // Widgets: Input with Keyboard
//   // - If you want to use InputText() with std::string or any custom dynamic string type, see misc/cpp/imgui_stdlib.h and comments in imgui_demo.cpp.
//   // - Most of the ImGuiInputTextFlags flags are only useful for InputText() and not for InputFloatX, InputIntX, InputDouble etc.
//   IMGUI_API bool          InputText(const char* label, char* buf, size_t buf_size, ImGuiInputTextFlags flags = 0, ImGuiInputTextCallback callback = NULL, void* user_data = NULL);
//   IMGUI_API bool          InputTextMultiline(const char* label, char* buf, size_t buf_size, const ImVec2& size = ImVec2(0, 0), ImGuiInputTextFlags flags = 0, ImGuiInputTextCallback callback = NULL, void* user_data = NULL);
//   IMGUI_API bool          InputTextWithHint(const char* label, const char* hint, char* buf, size_t buf_size, ImGuiInputTextFlags flags = 0, ImGuiInputTextCallback callback = NULL, void* user_data = NULL);
//   IMGUI_API bool          InputFloat(const char* label, float* v, float step = 0.0f, float step_fast = 0.0f, const char* format = "%.3f", ImGuiInputTextFlags flags = 0);
//   IMGUI_API bool          InputFloat2(const char* label, float v[2], const char* format = "%.3f", ImGuiInputTextFlags flags = 0);
//   IMGUI_API bool          InputFloat3(const char* label, float v[3], const char* format = "%.3f", ImGuiInputTextFlags flags = 0);
//   IMGUI_API bool          InputFloat4(const char* label, float v[4], const char* format = "%.3f", ImGuiInputTextFlags flags = 0);
//   IMGUI_API bool          InputInt(const char* label, int* v, int step = 1, int step_fast = 100, ImGuiInputTextFlags flags = 0);
//   IMGUI_API bool          InputInt2(const char* label, int v[2], ImGuiInputTextFlags flags = 0);
//   IMGUI_API bool          InputInt3(const char* label, int v[3], ImGuiInputTextFlags flags = 0);
//   IMGUI_API bool          InputInt4(const char* label, int v[4], ImGuiInputTextFlags flags = 0);
//   IMGUI_API bool          InputDouble(const char* label, double* v, double step = 0.0, double step_fast = 0.0, const char* format = "%.6f", ImGuiInputTextFlags flags = 0);
//   IMGUI_API bool          InputScalar(const char* label, ImGuiDataType data_type, void* p_data, const void* p_step = NULL, const void* p_step_fast = NULL, const char* format = NULL, ImGuiInputTextFlags flags = 0);
//   IMGUI_API bool          InputScalarN(const char* label, ImGuiDataType data_type, void* p_data, int components, const void* p_step = NULL, const void* p_step_fast = NULL, const char* format = NULL, ImGuiInputTextFlags flags = 0);

export function inputText(
  label: string,
  buf: string,
  buf_size: Deno.PointerValue,
  flags: ImGuiInputTextFlags,
  callback: ImGuiInputTextCallback,
  user_data: ArrayBuffer,
): boolean {
  return imgui.igInputText(
    cString(label),
    cString(buf),
    buf_size,
    flags,
    callback.pointer,
    user_data,
  );
}
export function inputTextMultiline(
  label: string,
  buf: string,
  buf_size: Deno.PointerValue,
  size: ImVec2,
  flags: ImGuiInputTextFlags,
  callback: ImGuiInputTextCallback,
  user_data: ArrayBuffer,
): boolean {
  return imgui.igInputTextMultiline(
    cString(label),
    cString(buf),
    buf_size,
    size[BUFFER],
    flags,
    callback.pointer,
    user_data,
  );
}
export function inputTextWithHint(
  label: string,
  hint: string,
  buf: string,
  buf_size: Deno.PointerValue,
  flags: ImGuiInputTextFlags,
  callback: ImGuiInputTextCallback,
  user_data: ArrayBuffer,
): boolean {
  return imgui.igInputTextWithHint(
    cString(label),
    cString(hint),
    cString(buf),
    buf_size,
    flags,
    callback.pointer,
    user_data,
  );
}
export function inputFloat(
  label: string,
  v: Float32Array,
  step: number,
  step_fast: number,
  format: string,
  flags: ImGuiInputTextFlags,
): boolean {
  return imgui.igInputFloat(
    cString(label),
    v,
    step,
    step_fast,
    cString(format),
    flags,
  );
}
export function inputFloat2(
  label: string,
  v: Float32Array,
  format: string,
  flags: ImGuiInputTextFlags,
): boolean {
  return imgui.igInputFloat2(cString(label), v, cString(format), flags);
}
export function inputFloat3(
  label: string,
  v: Float32Array,
  format: string,
  flags: ImGuiInputTextFlags,
): boolean {
  return imgui.igInputFloat3(cString(label), v, cString(format), flags);
}
export function inputFloat4(
  label: string,
  v: Float32Array,
  format: string,
  flags: ImGuiInputTextFlags,
): boolean {
  return imgui.igInputFloat4(cString(label), v, cString(format), flags);
}
export function inputInt(
  label: string,
  v: Int32Array,
  step: number,
  step_fast: number,
  flags: ImGuiInputTextFlags,
): boolean {
  return imgui.igInputInt(cString(label), v, step, step_fast, flags);
}
export function inputInt2(
  label: string,
  v: Int32Array,
  flags: ImGuiInputTextFlags,
): boolean {
  return imgui.igInputInt2(cString(label), v, flags);
}
export function inputInt3(
  label: string,
  v: Int32Array,
  flags: ImGuiInputTextFlags,
): boolean {
  return imgui.igInputInt3(cString(label), v, flags);
}
export function inputInt4(
  label: string,
  v: Int32Array,
  flags: ImGuiInputTextFlags,
): boolean {
  return imgui.igInputInt4(cString(label), v, flags);
}
export function inputDouble(
  label: string,
  v: Float64Array,
  step: number,
  step_fast: number,
  format: string,
  flags: ImGuiInputTextFlags,
): boolean {
  return imgui.igInputDouble(
    cString(label),
    v,
    step,
    step_fast,
    cString(format),
    flags,
  );
}
export function inputScalar(
  label: string,
  data_type: ImGuiDataType,
  data: ArrayBuffer,
  step: ArrayBuffer,
  step_fast: ArrayBuffer,
  format: string,
  flags: ImGuiInputTextFlags,
): boolean {
  return imgui.igInputScalar(
    cString(label),
    data_type,
    data,
    step,
    step_fast,
    cString(format),
    flags,
  );
}
export function inputScalarN(
  label: string,
  data_type: ImGuiDataType,
  data: ArrayBuffer,
  components: number,
  step: ArrayBuffer,
  step_fast: ArrayBuffer,
  format: string,
  flags: ImGuiInputTextFlags,
): boolean {
  return imgui.igInputScalarN(
    cString(label),
    data_type,
    data,
    components,
    step,
    step_fast,
    cString(format),
    flags,
  );
}

//   // Widgets: Color Editor/Picker (tip: the ColorEdit* functions have a little color square that can be left-clicked to open a picker, and right-clicked to open an option menu.)
//   // - Note that in C++ a 'float v[X]' function argument is the _same_ as 'float* v', the array syntax is just a way to document the number of elements that are expected to be accessible.
//   // - You can pass the address of a first float element out of a contiguous structure, e.g. &myvector.x
//   IMGUI_API bool          ColorEdit3(const char* label, float col[3], ImGuiColorEditFlags flags = 0);
//   IMGUI_API bool          ColorEdit4(const char* label, float col[4], ImGuiColorEditFlags flags = 0);
//   IMGUI_API bool          ColorPicker3(const char* label, float col[3], ImGuiColorEditFlags flags = 0);
//   IMGUI_API bool          ColorPicker4(const char* label, float col[4], ImGuiColorEditFlags flags = 0, const float* ref_col = NULL);
//   IMGUI_API bool          ColorButton(const char* desc_id, const ImVec4& col, ImGuiColorEditFlags flags = 0, const ImVec2& size = ImVec2(0, 0)); // display a color square/button, hover for details, return true when pressed.
//   IMGUI_API void          SetColorEditOptions(ImGuiColorEditFlags flags);                     // initialize current options (generally on application startup) if you want to select a default format, picker type, etc. User will be able to change many settings, unless you pass the _NoOptions flag to your calls.

export function colorEdit3(
  label: string,
  col: Float32Array,
  flags: ImGuiColorEditFlags,
): boolean {
  return imgui.igColorEdit3(cString(label), col, flags);
}
export function colorEdit4(
  label: string,
  col: Float32Array,
  flags: ImGuiColorEditFlags,
): boolean {
  return imgui.igColorEdit4(cString(label), col, flags);
}
export function colorPicker3(
  label: string,
  col: Float32Array,
  flags: ImGuiColorEditFlags,
): boolean {
  return imgui.igColorPicker3(cString(label), col, flags);
}
export function colorPicker4(
  label: string,
  col: Float32Array,
  flags: ImGuiColorEditFlags,
  ref_col: Float32Array,
): boolean {
  return imgui.igColorPicker4(cString(label), col, flags, ref_col);
}
export function colorButton(
  desc_id: string,
  col: ImVec4,
  flags: ImGuiColorEditFlags,
  size: ImVec2,
): boolean {
  return imgui.igColorButton(
    cString(desc_id),
    col[BUFFER],
    flags,
    size[BUFFER],
  );
}
export function setColorEditOptions(flags: ImGuiColorEditFlags): void {
  imgui.igSetColorEditOptions(flags);
}

//   // Widgets: Trees
//   // - TreeNode functions return true when the node is open, in which case you need to also call TreePop() when you are finished displaying the tree node contents.
//   IMGUI_API bool          TreeNode(const char* label);
//   IMGUI_API bool          TreeNode(const char* str_id, const char* fmt, ...) IM_FMTARGS(2);   // helper variation to easily decorelate the id from the displayed string. Read the FAQ about why and how to use ID. to align arbitrary text at the same level as a TreeNode() you can use Bullet().
//   IMGUI_API bool          TreeNode(const void* ptr_id, const char* fmt, ...) IM_FMTARGS(2);   // "
//   IMGUI_API bool          TreeNodeV(const char* str_id, const char* fmt, va_list args) IM_FMTLIST(2);
//   IMGUI_API bool          TreeNodeV(const void* ptr_id, const char* fmt, va_list args) IM_FMTLIST(2);
//   IMGUI_API bool          TreeNodeEx(const char* label, ImGuiTreeNodeFlags flags = 0);
//   IMGUI_API bool          TreeNodeEx(const char* str_id, ImGuiTreeNodeFlags flags, const char* fmt, ...) IM_FMTARGS(3);
//   IMGUI_API bool          TreeNodeEx(const void* ptr_id, ImGuiTreeNodeFlags flags, const char* fmt, ...) IM_FMTARGS(3);
//   IMGUI_API bool          TreeNodeExV(const char* str_id, ImGuiTreeNodeFlags flags, const char* fmt, va_list args) IM_FMTLIST(3);
//   IMGUI_API bool          TreeNodeExV(const void* ptr_id, ImGuiTreeNodeFlags flags, const char* fmt, va_list args) IM_FMTLIST(3);
//   IMGUI_API void          TreePush(const char* str_id);                                       // ~ Indent()+PushId(). Already called by TreeNode() when returning true, but you can call TreePush/TreePop yourself if desired.
//   IMGUI_API void          TreePush(const void* ptr_id);                                       // "
//   IMGUI_API void          TreePop();                                                          // ~ Unindent()+PopId()
//   IMGUI_API float         GetTreeNodeToLabelSpacing();                                        // horizontal distance preceding label when using TreeNode*() or Bullet() == (g.FontSize + style.FramePadding.x*2) for a regular unframed TreeNode
//   IMGUI_API bool          CollapsingHeader(const char* label, ImGuiTreeNodeFlags flags = 0);  // if returning 'true' the header is open. doesn't indent nor push on ID stack. user doesn't have to call TreePop().
//   IMGUI_API bool          CollapsingHeader(const char* label, bool* p_visible, ImGuiTreeNodeFlags flags = 0); // when 'p_visible != NULL': if '*p_visible==true' display an additional small close button on upper right of the header which will set the bool to false when clicked, if '*p_visible==false' don't display the header.
//   IMGUI_API void          SetNextItemOpen(bool is_open, ImGuiCond cond = 0);                  // set next TreeNode/CollapsingHeader open state.

export function treeNode_Str(label: string): boolean {
  return imgui.igTreeNode_Str(cString(label));
}
export function treeNodeEx_Str(
  label: string,
  flags: ImGuiTreeNodeFlags,
): boolean {
  return imgui.igTreeNodeEx_Str(cString(label), flags);
}
export function treePush_Str(str_id: string): void {
  imgui.igTreePush_Str(cString(str_id));
}
export function treePush_Ptr(ptr_id: ArrayBuffer): void {
  imgui.igTreePush_Ptr(ptr_id);
}
export function treePop(): void {
  imgui.igTreePop();
}
export function getTreeNodeToLabelSpacing(): number {
  return imgui.igGetTreeNodeToLabelSpacing();
}
export function collapsingHeader_TreeNodeFlags(
  label: string,
  flags: ImGuiTreeNodeFlags,
): boolean {
  return imgui.igCollapsingHeader_TreeNodeFlags(cString(label), flags);
}
export function collapsingHeader_BoolPtr(
  label: string,
  visible: CBool | null = null,
  flags: ImGuiTreeNodeFlags,
): boolean {
  return imgui.igCollapsingHeader_BoolPtr(
    cString(label),
    visible ? visible[BUFFER] : null,
    flags,
  );
}
export function setNextItemOpen(is_open: boolean, cond: ImGuiCond): void {
  imgui.igSetNextItemOpen(is_open, cond);
}

//   // Widgets: Selectables
//   // - A selectable highlights when hovered, and can display another color when selected.
//   // - Neighbors selectable extend their highlight bounds in order to leave no gap between them. This is so a series of selected Selectable appear contiguous.
//   IMGUI_API bool          Selectable(const char* label, bool selected = false, ImGuiSelectableFlags flags = 0, const ImVec2& size = ImVec2(0, 0)); // "bool selected" carry the selection state (read-only). Selectable() is clicked is returns true so you can modify your selection state. size.x==0.0: use remaining width, size.x>0.0: specify width. size.y==0.0: use label height, size.y>0.0: specify height
//   IMGUI_API bool          Selectable(const char* label, bool* p_selected, ImGuiSelectableFlags flags = 0, const ImVec2& size = ImVec2(0, 0));      // "bool* p_selected" point to the selection state (read-write), as a convenient helper.

export function selectable_Bool(
  label: string,
  selected: boolean,
  flags: ImGuiSelectableFlags,
  size: ImVec2,
): boolean {
  return imgui.igSelectable_Bool(cString(label), selected, flags, size[BUFFER]);
}
export function selectable_BoolPtr(
  label: string,
  selected: CBool | null = null,
  flags: ImGuiSelectableFlags,
  size: ImVec2,
): boolean {
  return imgui.igSelectable_BoolPtr(
    cString(label),
    selected ? selected[BUFFER] : null,
    flags,
    size[BUFFER],
  );
}

//   // Widgets: List Boxes
//   // - This is essentially a thin wrapper to using BeginChild/EndChild with some stylistic changes.
//   // - The BeginListBox()/EndListBox() api allows you to manage your contents and selection state however you want it, by creating e.g. Selectable() or any items.
//   // - The simplified/old ListBox() api are helpers over BeginListBox()/EndListBox() which are kept available for convenience purpose. This is analoguous to how Combos are created.
//   // - Choose frame width:   size.x > 0.0f: custom  /  size.x < 0.0f or -FLT_MIN: right-align   /  size.x = 0.0f (default): use current ItemWidth
//   // - Choose frame height:  size.y > 0.0f: custom  /  size.y < 0.0f or -FLT_MIN: bottom-align  /  size.y = 0.0f (default): arbitrary default height which can fit ~7 items
//   IMGUI_API bool          BeginListBox(const char* label, const ImVec2& size = ImVec2(0, 0)); // open a framed scrolling region
//   IMGUI_API void          EndListBox();                                                       // only call EndListBox() if BeginListBox() returned true!
//   IMGUI_API bool          ListBox(const char* label, int* current_item, const char* const items[], int items_count, int height_in_items = -1);
//   IMGUI_API bool          ListBox(const char* label, int* current_item, bool (*items_getter)(void* data, int idx, const char** out_text), void* data, int items_count, int height_in_items = -1);

export function beginListBox(label: string, size: ImVec2): boolean {
  return imgui.igBeginListBox(cString(label), size[BUFFER]);
}
export function endListBox(): void {
  imgui.igEndListBox();
}
// TODO
// export function listBox_Str_arr(label: string, current_item: Int32Array, items: char[], items_count: number, height_in_items: number): boolean {
//   return imgui.igListBox_Str_arr(cString(label), current_item, items, items_count, height_in_items);
// }
// export function listBox_FnBoolPtr(label: string, current_item: Int32Array, data: Deno.UnsafeCallback, idx: number, out_text): Deno.UnsafeCallback, data: ArrayBuffer, items_count: number, height_in_items: number): boolean {
//   return imgui.igListBox_FnBoolPtr(cString(label), current_item, data, idx, out_text), data, items_count, height_in_items);
// }

//   // Widgets: Data Plotting
//   // - Consider using ImPlot (https://github.com/epezent/implot) which is much better!
//   IMGUI_API void          PlotLines(const char* label, const float* values, int values_count, int values_offset = 0, const char* overlay_text = NULL, float scale_min = FLT_MAX, float scale_max = FLT_MAX, ImVec2 graph_size = ImVec2(0, 0), int stride = sizeof(float));
//   IMGUI_API void          PlotLines(const char* label, float(*values_getter)(void* data, int idx), void* data, int values_count, int values_offset = 0, const char* overlay_text = NULL, float scale_min = FLT_MAX, float scale_max = FLT_MAX, ImVec2 graph_size = ImVec2(0, 0));
//   IMGUI_API void          PlotHistogram(const char* label, const float* values, int values_count, int values_offset = 0, const char* overlay_text = NULL, float scale_min = FLT_MAX, float scale_max = FLT_MAX, ImVec2 graph_size = ImVec2(0, 0), int stride = sizeof(float));
//   IMGUI_API void          PlotHistogram(const char* label, float(*values_getter)(void* data, int idx), void* data, int values_count, int values_offset = 0, const char* overlay_text = NULL, float scale_min = FLT_MAX, float scale_max = FLT_MAX, ImVec2 graph_size = ImVec2(0, 0));

// TODO

//   // Widgets: Value() Helpers.
//   // - Those are merely shortcut to calling Text() with a format string. Output single value in "name: value" format (tip: freely declare more in your code to handle your types. you can add functions to the ImGui namespace)
//   IMGUI_API void          Value(const char* prefix, bool b);
//   IMGUI_API void          Value(const char* prefix, int v);
//   IMGUI_API void          Value(const char* prefix, unsigned int v);
//   IMGUI_API void          Value(const char* prefix, float v, const char* float_format = NULL);

export function value_Bool(prefix: string, b: boolean): void {
  imgui.igValue_Bool(cString(prefix), b);
}
export function value_Int(prefix: string, v: number): void {
  imgui.igValue_Int(cString(prefix), v);
}
export function value_Uint(prefix: string, v: number): void {
  imgui.igValue_Uint(cString(prefix), v);
}
export function value_Float(
  prefix: string,
  v: number,
  float_format: string,
): void {
  imgui.igValue_Float(cString(prefix), v, cString(float_format));
}

//   // Widgets: Menus
//   // - Use BeginMenuBar() on a window ImGuiWindowFlags_MenuBar to append to its menu bar.
//   // - Use BeginMainMenuBar() to create a menu bar at the top of the screen and append to it.
//   // - Use BeginMenu() to create a menu. You can call BeginMenu() multiple time with the same identifier to append more items to it.
//   // - Not that MenuItem() keyboardshortcuts are displayed as a convenience but _not processed_ by Dear ImGui at the moment.
//   IMGUI_API bool          BeginMenuBar();                                                     // append to menu-bar of current window (requires ImGuiWindowFlags_MenuBar flag set on parent window).
//   IMGUI_API void          EndMenuBar();                                                       // only call EndMenuBar() if BeginMenuBar() returns true!
//   IMGUI_API bool          BeginMainMenuBar();                                                 // create and append to a full screen menu-bar.
//   IMGUI_API void          EndMainMenuBar();                                                   // only call EndMainMenuBar() if BeginMainMenuBar() returns true!
//   IMGUI_API bool          BeginMenu(const char* label, bool enabled = true);                  // create a sub-menu entry. only call EndMenu() if this returns true!
//   IMGUI_API void          EndMenu();                                                          // only call EndMenu() if BeginMenu() returns true!
//   IMGUI_API bool          MenuItem(const char* label, const char* shortcut = NULL, bool selected = false, bool enabled = true);  // return true when activated.
//   IMGUI_API bool          MenuItem(const char* label, const char* shortcut, bool* p_selected, bool enabled = true);              // return true when activated + toggle (*p_selected) if p_selected != NULL

export function endMenuBar(): void {
  imgui.igEndMenuBar();
}
export function beginMainMenuBar(): boolean {
  return imgui.igBeginMainMenuBar();
}
export function endMainMenuBar(): void {
  imgui.igEndMainMenuBar();
}
export function beginMenu(label: string, enabled: boolean): boolean {
  return imgui.igBeginMenu(cString(label), enabled);
}
export function endMenu(): void {
  imgui.igEndMenu();
}
export function menuItem_Bool(
  label: string,
  shortcut: string,
  selected: boolean,
  enabled: boolean,
): boolean {
  return imgui.igMenuItem_Bool(
    cString(label),
    cString(shortcut),
    selected,
    enabled,
  );
}
export function menuItem_BoolPtr(
  label: string,
  shortcut: string,
  selected: CBool | null = null,
  enabled: boolean,
): boolean {
  return imgui.igMenuItem_BoolPtr(
    cString(label),
    cString(shortcut),
    selected ? selected[BUFFER] : null,
    enabled,
  );
}

//   // Tooltips
//   // - Tooltip are windows following the mouse. They do not take focus away.
//   IMGUI_API void          BeginTooltip();                                                     // begin/append a tooltip window. to create full-featured tooltip (with any kind of items).
//   IMGUI_API void          EndTooltip();
//   IMGUI_API void          SetTooltip(const char* fmt, ...) IM_FMTARGS(1);                     // set a text-only tooltip, typically use with ImGui::IsItemHovered(). override any previous call to SetTooltip().
//   IMGUI_API void          SetTooltipV(const char* fmt, va_list args) IM_FMTLIST(1);

export function beginTooltip(): void {
  imgui.igBeginTooltip();
}
export function endTooltip(): void {
  imgui.igEndTooltip();
}

// TODO  SetTooltip(const char* fmt, ...)

//   // Popups, Modals
//   //  - They block normal mouse hovering detection (and therefore most mouse interactions) behind them.
//   //  - If not modal: they can be closed by clicking anywhere outside them, or by pressing ESCAPE.
//   //  - Their visibility state (~bool) is held internally instead of being held by the programmer as we are used to with regular Begin*() calls.
//   //  - The 3 properties above are related: we need to retain popup visibility state in the library because popups may be closed as any time.
//   //  - You can bypass the hovering restriction by using ImGuiHoveredFlags_AllowWhenBlockedByPopup when calling IsItemHovered() or IsWindowHovered().
//   //  - IMPORTANT: Popup identifiers are relative to the current ID stack, so OpenPopup and BeginPopup generally needs to be at the same level of the stack.
//   //    This is sometimes leading to confusing mistakes. May rework this in the future.

//   // Popups: begin/end functions
//   //  - BeginPopup(): query popup state, if open start appending into the window. Call EndPopup() afterwards. ImGuiWindowFlags are forwarded to the window.
//   //  - BeginPopupModal(): block every interaction behind the window, cannot be closed by user, add a dimming background, has a title bar.
//   IMGUI_API bool          BeginPopup(const char* str_id, ImGuiWindowFlags flags = 0);                         // return true if the popup is open, and you can start outputting to it.
//   IMGUI_API bool          BeginPopupModal(const char* name, bool* p_open = NULL, ImGuiWindowFlags flags = 0); // return true if the modal is open, and you can start outputting to it.
//   IMGUI_API void          EndPopup();                                                                         // only call EndPopup() if BeginPopupXXX() returns true!

export function beginPopup(str_id: string, flags: ImGuiWindowFlags): boolean {
  return imgui.igBeginPopup(cString(str_id), flags);
}
export function beginPopupModal(
  name: string,
  open: CBool | null = null,
  flags: ImGuiWindowFlags,
): boolean {
  return imgui.igBeginPopupModal(
    cString(name),
    open ? open[BUFFER] : null,
    flags,
  );
}
export function endPopup(): void {
  imgui.igEndPopup();
}

//   // Popups: open/close functions
//   //  - OpenPopup(): set popup state to open. ImGuiPopupFlags are available for opening options.
//   //  - If not modal: they can be closed by clicking anywhere outside them, or by pressing ESCAPE.
//   //  - CloseCurrentPopup(): use inside the BeginPopup()/EndPopup() scope to close manually.
//   //  - CloseCurrentPopup() is called by default by Selectable()/MenuItem() when activated (FIXME: need some options).
//   //  - Use ImGuiPopupFlags_NoOpenOverExistingPopup to avoid opening a popup if there's already one at the same level. This is equivalent to e.g. testing for !IsAnyPopupOpen() prior to OpenPopup().
//   //  - Use IsWindowAppearing() after BeginPopup() to tell if a window just opened.
//   //  - IMPORTANT: Notice that for OpenPopupOnItemClick() we exceptionally default flags to 1 (== ImGuiPopupFlags_MouseButtonRight) for backward compatibility with older API taking 'int mouse_button = 1' parameter
//   IMGUI_API void          OpenPopup(const char* str_id, ImGuiPopupFlags popup_flags = 0);                     // call to mark popup as open (don't call every frame!).
//   IMGUI_API void          OpenPopup(ImGuiID id, ImGuiPopupFlags popup_flags = 0);                             // id overload to facilitate calling from nested stacks
//   IMGUI_API void          OpenPopupOnItemClick(const char* str_id = NULL, ImGuiPopupFlags popup_flags = 1);   // helper to open popup when clicked on last item. Default to ImGuiPopupFlags_MouseButtonRight == 1. (note: actually triggers on the mouse _released_ event to be consistent with popup behaviors)
//   IMGUI_API void          CloseCurrentPopup();                                                                // manually close the popup we have begin-ed into.

export function openPopup_Str(
  str_id: string,
  popup_flags: ImGuiPopupFlags,
): void {
  imgui.igOpenPopup_Str(cString(str_id), popup_flags);
}
export function openPopup_ID(id: ImGuiID, popup_flags: ImGuiPopupFlags): void {
  imgui.igOpenPopup_ID(id, popup_flags);
}
export function openPopupOnItemClick(
  str_id: string,
  popup_flags: ImGuiPopupFlags,
): void {
  imgui.igOpenPopupOnItemClick(cString(str_id), popup_flags);
}
export function closeCurrentPopup(): void {
  imgui.igCloseCurrentPopup();
}

//   // Popups: open+begin combined functions helpers
//   //  - Helpers to do OpenPopup+BeginPopup where the Open action is triggered by e.g. hovering an item and right-clicking.
//   //  - They are convenient to easily create context menus, hence the name.
//   //  - IMPORTANT: Notice that BeginPopupContextXXX takes ImGuiPopupFlags just like OpenPopup() and unlike BeginPopup(). For full consistency, we may add ImGuiWindowFlags to the BeginPopupContextXXX functions in the future.
//   //  - IMPORTANT: Notice that we exceptionally default their flags to 1 (== ImGuiPopupFlags_MouseButtonRight) for backward compatibility with older API taking 'int mouse_button = 1' parameter, so if you add other flags remember to re-add the ImGuiPopupFlags_MouseButtonRight.
//   IMGUI_API bool          BeginPopupContextItem(const char* str_id = NULL, ImGuiPopupFlags popup_flags = 1);  // open+begin popup when clicked on last item. Use str_id==NULL to associate the popup to previous item. If you want to use that on a non-interactive item such as Text() you need to pass in an explicit ID here. read comments in .cpp!
//   IMGUI_API bool          BeginPopupContextWindow(const char* str_id = NULL, ImGuiPopupFlags popup_flags = 1);// open+begin popup when clicked on current window.
//   IMGUI_API bool          BeginPopupContextVoid(const char* str_id = NULL, ImGuiPopupFlags popup_flags = 1);  // open+begin popup when clicked in void (where there are no windows).

export function beginPopupContextItem(
  str_id: string,
  popup_flags: ImGuiPopupFlags,
): boolean {
  return imgui.igBeginPopupContextItem(cString(str_id), popup_flags);
}
export function beginPopupContextWindow(
  str_id: string,
  popup_flags: ImGuiPopupFlags,
): boolean {
  return imgui.igBeginPopupContextWindow(cString(str_id), popup_flags);
}
export function beginPopupContextVoid(
  str_id: string,
  popup_flags: ImGuiPopupFlags,
): boolean {
  return imgui.igBeginPopupContextVoid(cString(str_id), popup_flags);
}

//   // Popups: query functions
//   //  - IsPopupOpen(): return true if the popup is open at the current BeginPopup() level of the popup stack.
//   //  - IsPopupOpen() with ImGuiPopupFlags_AnyPopupId: return true if any popup is open at the current BeginPopup() level of the popup stack.
//   //  - IsPopupOpen() with ImGuiPopupFlags_AnyPopupId + ImGuiPopupFlags_AnyPopupLevel: return true if any popup is open.
//   IMGUI_API bool          IsPopupOpen(const char* str_id, ImGuiPopupFlags flags = 0);                         // return true if the popup is open.

export function isPopupOpen_Str(
  str_id: string,
  flags: ImGuiPopupFlags,
): boolean {
  return imgui.igIsPopupOpen_Str(cString(str_id), flags);
}

//   // Tables
//   // - Full-featured replacement for old Columns API.
//   // - See Demo->Tables for demo code. See top of imgui_tables.cpp for general commentary.
//   // - See ImGuiTableFlags_ and ImGuiTableColumnFlags_ enums for a description of available flags.
//   // The typical call flow is:
//   // - 1. Call BeginTable(), early out if returning false.
//   // - 2. Optionally call TableSetupColumn() to submit column name/flags/defaults.
//   // - 3. Optionally call TableSetupScrollFreeze() to request scroll freezing of columns/rows.
//   // - 4. Optionally call TableHeadersRow() to submit a header row. Names are pulled from TableSetupColumn() data.
//   // - 5. Populate contents:
//   //    - In most situations you can use TableNextRow() + TableSetColumnIndex(N) to start appending into a column.
//   //    - If you are using tables as a sort of grid, where every column is holding the same type of contents,
//   //      you may prefer using TableNextColumn() instead of TableNextRow() + TableSetColumnIndex().
//   //      TableNextColumn() will automatically wrap-around into the next row if needed.
//   //    - IMPORTANT: Comparatively to the old Columns() API, we need to call TableNextColumn() for the first column!
//   //    - Summary of possible call flow:
//   //        --------------------------------------------------------------------------------------------------------
//   //        TableNextRow() -> TableSetColumnIndex(0) -> Text("Hello 0") -> TableSetColumnIndex(1) -> Text("Hello 1")  // OK
//   //        TableNextRow() -> TableNextColumn()      -> Text("Hello 0") -> TableNextColumn()      -> Text("Hello 1")  // OK
//   //                          TableNextColumn()      -> Text("Hello 0") -> TableNextColumn()      -> Text("Hello 1")  // OK: TableNextColumn() automatically gets to next row!
//   //        TableNextRow()                           -> Text("Hello 0")                                               // Not OK! Missing TableSetColumnIndex() or TableNextColumn()! Text will not appear!
//   //        --------------------------------------------------------------------------------------------------------
//   // - 5. Call EndTable()
//   IMGUI_API bool          BeginTable(const char* str_id, int column, ImGuiTableFlags flags = 0, const ImVec2& outer_size = ImVec2(0.0f, 0.0f), float inner_width = 0.0f);
//   IMGUI_API void          EndTable();                                         // only call EndTable() if BeginTable() returns true!
//   IMGUI_API void          TableNextRow(ImGuiTableRowFlags row_flags = 0, float min_row_height = 0.0f); // append into the first cell of a new row.
//   IMGUI_API bool          TableNextColumn();                                  // append into the next column (or first column of next row if currently in last column). Return true when column is visible.
//   IMGUI_API bool          TableSetColumnIndex(int column_n);                  // append into the specified column. Return true when column is visible.

export function beginTable(
  str_id: string,
  column: number,
  flags: ImGuiTableFlags,
  outer_size: ImVec2,
  inner_width: number,
): boolean {
  return imgui.igBeginTable(
    cString(str_id),
    column,
    flags,
    outer_size[BUFFER],
    inner_width,
  );
}
export function endTable(): void {
  imgui.igEndTable();
}
export function tableNextRow(
  row_flags: ImGuiTableRowFlags,
  min_row_height: number,
): void {
  imgui.igTableNextRow(row_flags, min_row_height);
}
export function tableNextColumn(): boolean {
  return imgui.igTableNextColumn();
}
export function tableSetColumnIndex(column_n: number): boolean {
  return imgui.igTableSetColumnIndex(column_n);
}

//   // Tables: Headers & Columns declaration
//   // - Use TableSetupColumn() to specify label, resizing policy, default width/weight, id, various other flags etc.
//   // - Use TableHeadersRow() to create a header row and automatically submit a TableHeader() for each column.
//   //   Headers are required to perform: reordering, sorting, and opening the context menu.
//   //   The context menu can also be made available in columns body using ImGuiTableFlags_ContextMenuInBody.
//   // - You may manually submit headers using TableNextRow() + TableHeader() calls, but this is only useful in
//   //   some advanced use cases (e.g. adding custom widgets in header row).
//   // - Use TableSetupScrollFreeze() to lock columns/rows so they stay visible when scrolled.
//   IMGUI_API void          TableSetupColumn(const char* label, ImGuiTableColumnFlags flags = 0, float init_width_or_weight = 0.0f, ImGuiID user_id = 0);
//   IMGUI_API void          TableSetupScrollFreeze(int cols, int rows);         // lock columns/rows so they stay visible when scrolled.
//   IMGUI_API void          TableHeadersRow();                                  // submit all headers cells based on data provided to TableSetupColumn() + submit context menu
//   IMGUI_API void          TableHeader(const char* label);                     // submit one header cell manually (rarely used)

export function tableSetupColumn(
  label: string,
  flags: ImGuiTableColumnFlags,
  init_width_or_weight: number,
  user_id: ImGuiID,
): void {
  imgui.igTableSetupColumn(
    cString(label),
    flags,
    init_width_or_weight,
    user_id,
  );
}
export function tableSetupScrollFreeze(cols: number, rows: number): void {
  imgui.igTableSetupScrollFreeze(cols, rows);
}
export function tableHeadersRow(): void {
  imgui.igTableHeadersRow();
}
export function tableHeader(label: string): void {
  imgui.igTableHeader(cString(label));
}

//   // Tables: Sorting & Miscellaneous functions
//   // - Sorting: call TableGetSortSpecs() to retrieve latest sort specs for the table. NULL when not sorting.
//   //   When 'sort_specs->SpecsDirty == true' you should sort your data. It will be true when sorting specs have
//   //   changed since last call, or the first time. Make sure to set 'SpecsDirty = false' after sorting,
//   //   else you may wastefully sort your data every frame!
//   // - Functions args 'int column_n' treat the default value of -1 as the same as passing the current column index.
//   IMGUI_API ImGuiTableSortSpecs*  TableGetSortSpecs();                        // get latest sort specs for the table (NULL if not sorting).  Lifetime: don't hold on this pointer over multiple frames or past any subsequent call to BeginTable().
//   IMGUI_API int                   TableGetColumnCount();                      // return number of columns (value passed to BeginTable)
//   IMGUI_API int                   TableGetColumnIndex();                      // return current column index.
//   IMGUI_API int                   TableGetRowIndex();                         // return current row index.
//   IMGUI_API const char*           TableGetColumnName(int column_n = -1);      // return "" if column didn't have a name declared by TableSetupColumn(). Pass -1 to use current column.
//   IMGUI_API ImGuiTableColumnFlags TableGetColumnFlags(int column_n = -1);     // return column flags so you can query their Enabled/Visible/Sorted/Hovered status flags. Pass -1 to use current column.
//   IMGUI_API void                  TableSetColumnEnabled(int column_n, bool v);// change user accessible enabled/disabled state of a column. Set to false to hide the column. User can use the context menu to change this themselves (right-click in headers, or right-click in columns body with ImGuiTableFlags_ContextMenuInBody)
//   IMGUI_API void                  TableSetBgColor(ImGuiTableBgTarget target, ImU32 color, int column_n = -1);  // change the color of a cell, row, or column. See ImGuiTableBgTarget_ flags for details.

export function tableGetSortSpecs(): ImGuiTableSortSpecs {
  return imgui.igTableGetSortSpecs();
}
export function tableGetColumnCount(): number {
  return imgui.igTableGetColumnCount();
}
export function tableGetColumnIndex(): number {
  return imgui.igTableGetColumnIndex();
}
export function tableGetRowIndex(): number {
  return imgui.igTableGetRowIndex();
}
export function tableGetColumnName_Int(column_n: number): string {
  return jsString(imgui.igTableGetColumnName_Int(column_n));
}
export function tableGetColumnFlags(column_n: number): ImGuiTableColumnFlags {
  return imgui.igTableGetColumnFlags(column_n);
}
export function tableSetColumnEnabled(column_n: number, v: boolean): void {
  imgui.igTableSetColumnEnabled(column_n, v);
}
export function tableSetBgColor(
  target: ImGuiTableBgTarget,
  color: ImU32,
  column_n: number,
): void {
  imgui.igTableSetBgColor(target, color, column_n);
}

//   // Legacy Columns API (prefer using Tables!)
//   // - You can also use SameLine(pos_x) to mimic simplified columns.
//   IMGUI_API void          Columns(int count = 1, const char* id = NULL, bool border = true);
//   IMGUI_API void          NextColumn();                                                       // next column, defaults to current row or next row if the current row is finished
//   IMGUI_API int           GetColumnIndex();                                                   // get current column index
//   IMGUI_API float         GetColumnWidth(int column_index = -1);                              // get column width (in pixels). pass -1 to use current column
//   IMGUI_API void          SetColumnWidth(int column_index, float width);                      // set column width (in pixels). pass -1 to use current column
//   IMGUI_API float         GetColumnOffset(int column_index = -1);                             // get position of column line (in pixels, from the left side of the contents region). pass -1 to use current column, otherwise 0..GetColumnsCount() inclusive. column 0 is typically 0.0f
//   IMGUI_API void          SetColumnOffset(int column_index, float offset_x);                  // set position of column line (in pixels, from the left side of the contents region). pass -1 to use current column
//   IMGUI_API int           GetColumnsCount();

//   // Tab Bars, Tabs
//   // - Note: Tabs are automatically created by the docking system (when in 'docking' branch). Use this to create tab bars/tabs yourself.
//   IMGUI_API bool          BeginTabBar(const char* str_id, ImGuiTabBarFlags flags = 0);        // create and append into a TabBar
//   IMGUI_API void          EndTabBar();                                                        // only call EndTabBar() if BeginTabBar() returns true!
//   IMGUI_API bool          BeginTabItem(const char* label, bool* p_open = NULL, ImGuiTabItemFlags flags = 0); // create a Tab. Returns true if the Tab is selected.
//   IMGUI_API void          EndTabItem();                                                       // only call EndTabItem() if BeginTabItem() returns true!
//   IMGUI_API bool          TabItemButton(const char* label, ImGuiTabItemFlags flags = 0);      // create a Tab behaving like a button. return true when clicked. cannot be selected in the tab bar.
//   IMGUI_API void          SetTabItemClosed(const char* tab_or_docked_window_label);           // notify TabBar or Docking system of a closed tab/window ahead (useful to reduce visual flicker on reorderable tab bars). For tab-bar: call after BeginTabBar() and before Tab submissions. Otherwise call with a window name.

export function beginTabBar(str_id: string, flags: ImGuiTabBarFlags): boolean {
  return imgui.igBeginTabBar(cString(str_id), flags);
}
export function endTabBar(): void {
  imgui.igEndTabBar();
}
export function beginTabItem(
  label: string,
  open: CBool | null = null,
  flags: ImGuiTabItemFlags,
): boolean {
  return imgui.igBeginTabItem(
    cString(label),
    open ? open[BUFFER] : null,
    flags,
  );
}
export function endTabItem(): void {
  imgui.igEndTabItem();
}
export function tabItemButton(
  label: string,
  flags: ImGuiTabItemFlags,
): boolean {
  return imgui.igTabItemButton(cString(label), flags);
}
export function setTabItemClosed(tab_or_docked_window_label: string): void {
  imgui.igSetTabItemClosed(cString(tab_or_docked_window_label));
}

//   // Docking
//   // [BETA API] Enable with io.ConfigFlags |= ImGuiConfigFlags_DockingEnable.
//   // Note: You can use most Docking facilities without calling any API. You DO NOT need to call DockSpace() to use Docking!
//   // - Drag from window title bar or their tab to dock/undock. Hold SHIFT to disable docking/undocking.
//   // - Drag from window menu button (upper-left button) to undock an entire node (all windows).
//   // - When io.ConfigDockingWithShift == true, you instead need to hold SHIFT to _enable_ docking/undocking.
//   // About dockspaces:
//   // - Use DockSpace() to create an explicit dock node _within_ an existing window. See Docking demo for details.
//   // - Use DockSpaceOverViewport() to create an explicit dock node covering the screen or a specific viewport.
//   //   This is often used with ImGuiDockNodeFlags_PassthruCentralNode.
//   // - Important: Dockspaces need to be submitted _before_ any window they can host. Submit it early in your frame!
//   // - Important: Dockspaces need to be kept alive if hidden, otherwise windows docked into it will be undocked.
//   //   e.g. if you have multiple tabs with a dockspace inside each tab: submit the non-visible dockspaces with ImGuiDockNodeFlags_KeepAliveOnly.
//   IMGUI_API ImGuiID       DockSpace(ImGuiID id, const ImVec2& size = ImVec2(0, 0), ImGuiDockNodeFlags flags = 0, const ImGuiWindowClass* window_class = NULL);
//   IMGUI_API ImGuiID       DockSpaceOverViewport(const ImGuiViewport* viewport = NULL, ImGuiDockNodeFlags flags = 0, const ImGuiWindowClass* window_class = NULL);
//   IMGUI_API void          SetNextWindowDockID(ImGuiID dock_id, ImGuiCond cond = 0);           // set next window dock id
//   IMGUI_API void          SetNextWindowClass(const ImGuiWindowClass* window_class);           // set next window class (control docking compatibility + provide hints to platform backend via custom viewport flags and platform parent/child relationship)
//   IMGUI_API ImGuiID       GetWindowDockID();
//   IMGUI_API bool          IsWindowDocked();                                                   // is current window docked into another window?

export function dockSpace(
  id: ImGuiID,
  size: ImVec2,
  flags: ImGuiDockNodeFlags,
  window_class: ImGuiWindowClass,
): ImGuiID {
  return imgui.igDockSpace(id, size[BUFFER], flags, window_class);
}
export function dockSpaceOverViewport(
  viewport: ImGuiViewport,
  flags: ImGuiDockNodeFlags,
  window_class: ImGuiWindowClass,
): ImGuiID {
  return imgui.igDockSpaceOverViewport(viewport, flags, window_class);
}
export function setNextWindowDockID(dock_id: ImGuiID, cond: ImGuiCond): void {
  imgui.igSetNextWindowDockID(dock_id, cond);
}
export function setNextWindowClass(window_class: ImGuiWindowClass): void {
  imgui.igSetNextWindowClass(window_class);
}
export function getWindowDockID(): ImGuiID {
  return imgui.igGetWindowDockID();
}
export function isWindowDocked(): boolean {
  return imgui.igIsWindowDocked();
}

//   // Logging/Capture
//   // - All text output from the interface can be captured into tty/file/clipboard. By default, tree nodes are automatically opened during logging.
//   IMGUI_API void          LogToTTY(int auto_open_depth = -1);                                 // start logging to tty (stdout)
//   IMGUI_API void          LogToFile(int auto_open_depth = -1, const char* filename = NULL);   // start logging to file
//   IMGUI_API void          LogToClipboard(int auto_open_depth = -1);                           // start logging to OS clipboard
//   IMGUI_API void          LogFinish();                                                        // stop logging (close file, etc.)
//   IMGUI_API void          LogButtons();                                                       // helper to display buttons for logging to tty/file/clipboard
//   IMGUI_API void          LogText(const char* fmt, ...) IM_FMTARGS(1);                        // pass text data straight to log (without being displayed)
//   IMGUI_API void          LogTextV(const char* fmt, va_list args) IM_FMTLIST(1);

//   // Drag and Drop
//   // - On source items, call BeginDragDropSource(), if it returns true also call SetDragDropPayload() + EndDragDropSource().
//   // - On target candidates, call BeginDragDropTarget(), if it returns true also call AcceptDragDropPayload() + EndDragDropTarget().
//   // - If you stop calling BeginDragDropSource() the payload is preserved however it won't have a preview tooltip (we currently display a fallback "..." tooltip, see #1725)
//   // - An item can be both drag source and drop target.
//   IMGUI_API bool          BeginDragDropSource(ImGuiDragDropFlags flags = 0);                                      // call after submitting an item which may be dragged. when this return true, you can call SetDragDropPayload() + EndDragDropSource()
//   IMGUI_API bool          SetDragDropPayload(const char* type, const void* data, size_t sz, ImGuiCond cond = 0);  // type is a user defined string of maximum 32 characters. Strings starting with '_' are reserved for dear imgui internal types. Data is copied and held by imgui. Return true when payload has been accepted.
//   IMGUI_API void          EndDragDropSource();                                                                    // only call EndDragDropSource() if BeginDragDropSource() returns true!
//   IMGUI_API bool                  BeginDragDropTarget();                                                          // call after submitting an item that may receive a payload. If this returns true, you can call AcceptDragDropPayload() + EndDragDropTarget()
//   IMGUI_API const ImGuiPayload*   AcceptDragDropPayload(const char* type, ImGuiDragDropFlags flags = 0);          // accept contents of a given type. If ImGuiDragDropFlags_AcceptBeforeDelivery is set you can peek into the payload before the mouse button is released.
//   IMGUI_API void                  EndDragDropTarget();                                                            // only call EndDragDropTarget() if BeginDragDropTarget() returns true!
//   IMGUI_API const ImGuiPayload*   GetDragDropPayload();                                                           // peek directly into the current payload from anywhere. may return NULL. use ImGuiPayload::IsDataType() to test for the payload type.

export function beginDragDropSource(flags: ImGuiDragDropFlags): boolean {
  return imgui.igBeginDragDropSource(flags);
}
export function setDragDropPayload(
  type: string,
  data: ArrayBuffer,
  sz: Deno.PointerValue,
  cond: ImGuiCond,
): boolean {
  return imgui.igSetDragDropPayload(cString(type), data, sz, cond);
}
export function endDragDropSource(): void {
  imgui.igEndDragDropSource();
}
export function beginDragDropTarget(): boolean {
  return imgui.igBeginDragDropTarget();
}
export function acceptDragDropPayload(
  type: string,
  flags: ImGuiDragDropFlags,
): ImGuiPayload {
  return imgui.igAcceptDragDropPayload(cString(type), flags);
}
export function endDragDropTarget(): void {
  imgui.igEndDragDropTarget();
}
export function getDragDropPayload(): ImGuiPayload {
  return imgui.igGetDragDropPayload();
}

//   // Disabling [BETA API]
//   // - Disable all user interactions and dim items visuals (applying style.DisabledAlpha over current colors)
//   // - Those can be nested but it cannot be used to enable an already disabled section (a single BeginDisabled(true) in the stack is enough to keep everything disabled)
//   // - BeginDisabled(false) essentially does nothing useful but is provided to facilitate use of boolean expressions. If you can avoid calling BeginDisabled(False)/EndDisabled() best to avoid it.
//   IMGUI_API void          BeginDisabled(bool disabled = true);
//   IMGUI_API void          EndDisabled();

export function beginDisabled(disabled: boolean): void {
  imgui.igBeginDisabled(disabled);
}
export function endDisabled(): void {
  imgui.igEndDisabled();
}

//   // Clipping
//   // - Mouse hovering is affected by ImGui::PushClipRect() calls, unlike direct calls to ImDrawList::PushClipRect() which are render only.
//   IMGUI_API void          PushClipRect(const ImVec2& clip_rect_min, const ImVec2& clip_rect_max, bool intersect_with_current_clip_rect);
//   IMGUI_API void          PopClipRect();

export function pushClipRect(
  clip_rect_min: ImVec2,
  clip_rect_max: ImVec2,
  intersect_with_current_clip_rect: boolean,
): void {
  imgui.igPushClipRect(
    clip_rect_min[BUFFER],
    clip_rect_max[BUFFER],
    intersect_with_current_clip_rect,
  );
}
export function popClipRect(): void {
  imgui.igPopClipRect();
}

//   // Focus, Activation
//   // - Prefer using "SetItemDefaultFocus()" over "if (IsWindowAppearing()) SetScrollHereY()" when applicable to signify "this is the default item"
//   IMGUI_API void          SetItemDefaultFocus();                                              // make last item the default focused item of a window.
//   IMGUI_API void          SetKeyboardFocusHere(int offset = 0);                               // focus keyboard on the next widget. Use positive 'offset' to access sub components of a multiple component widget. Use -1 to access previous widget.

export function setItemDefaultFocus(): void {
  imgui.igSetItemDefaultFocus();
}
export function setKeyboardFocusHere(offset: number): void {
  imgui.igSetKeyboardFocusHere(offset);
}

//   // Item/Widgets Utilities and Query Functions
//   // - Most of the functions are referring to the previous Item that has been submitted.
//   // - See Demo Window under "Widgets->Querying Status" for an interactive visualization of most of those functions.
//   IMGUI_API bool          IsItemHovered(ImGuiHoveredFlags flags = 0);                         // is the last item hovered? (and usable, aka not blocked by a popup, etc.). See ImGuiHoveredFlags for more options.
//   IMGUI_API bool          IsItemActive();                                                     // is the last item active? (e.g. button being held, text field being edited. This will continuously return true while holding mouse button on an item. Items that don't interact will always return false)
//   IMGUI_API bool          IsItemFocused();                                                    // is the last item focused for keyboard/gamepad navigation?
//   IMGUI_API bool          IsItemClicked(ImGuiMouseButton mouse_button = 0);                   // is the last item hovered and mouse clicked on? (**)  == IsMouseClicked(mouse_button) && IsItemHovered()Important. (**) this is NOT equivalent to the behavior of e.g. Button(). Read comments in function definition.
//   IMGUI_API bool          IsItemVisible();                                                    // is the last item visible? (items may be out of sight because of clipping/scrolling)
//   IMGUI_API bool          IsItemEdited();                                                     // did the last item modify its underlying value this frame? or was pressed? This is generally the same as the "bool" return value of many widgets.
//   IMGUI_API bool          IsItemActivated();                                                  // was the last item just made active (item was previously inactive).
//   IMGUI_API bool          IsItemDeactivated();                                                // was the last item just made inactive (item was previously active). Useful for Undo/Redo patterns with widgets that require continuous editing.
//   IMGUI_API bool          IsItemDeactivatedAfterEdit();                                       // was the last item just made inactive and made a value change when it was active? (e.g. Slider/Drag moved). Useful for Undo/Redo patterns with widgets that require continuous editing. Note that you may get false positives (some widgets such as Combo()/ListBox()/Selectable() will return true even when clicking an already selected item).
//   IMGUI_API bool          IsItemToggledOpen();                                                // was the last item open state toggled? set by TreeNode().
//   IMGUI_API bool          IsAnyItemHovered();                                                 // is any item hovered?
//   IMGUI_API bool          IsAnyItemActive();                                                  // is any item active?
//   IMGUI_API bool          IsAnyItemFocused();                                                 // is any item focused?
//   IMGUI_API ImGuiID       GetItemID();                                                        // get ID of last item (~~ often same ImGui::GetID(label) beforehand)
//   IMGUI_API ImVec2        GetItemRectMin();                                                   // get upper-left bounding rectangle of the last item (screen space)
//   IMGUI_API ImVec2        GetItemRectMax();                                                   // get lower-right bounding rectangle of the last item (screen space)
//   IMGUI_API ImVec2        GetItemRectSize();                                                  // get size of last item
//   IMGUI_API void          SetItemAllowOverlap();                                              // allow last item to be overlapped by a subsequent item. sometimes useful with invisible buttons, selectables, etc. to catch unused area.

export function isItemHovered(flags: ImGuiHoveredFlags): boolean {
  return imgui.igIsItemHovered(flags);
}
export function isItemActive(): boolean {
  return imgui.igIsItemActive();
}
export function isItemFocused(): boolean {
  return imgui.igIsItemFocused();
}
export function isItemClicked(mouse_button: ImGuiMouseButton): boolean {
  return imgui.igIsItemClicked(mouse_button);
}
export function isItemVisible(): boolean {
  return imgui.igIsItemVisible();
}
export function isItemEdited(): boolean {
  return imgui.igIsItemEdited();
}
export function isItemActivated(): boolean {
  return imgui.igIsItemActivated();
}
export function isItemDeactivated(): boolean {
  return imgui.igIsItemDeactivated();
}
export function isItemDeactivatedAfterEdit(): boolean {
  return imgui.igIsItemDeactivatedAfterEdit();
}
export function isItemToggledOpen(): boolean {
  return imgui.igIsItemToggledOpen();
}
export function isAnyItemHovered(): boolean {
  return imgui.igIsAnyItemHovered();
}
export function isAnyItemActive(): boolean {
  return imgui.igIsAnyItemActive();
}
export function isAnyItemFocused(): boolean {
  return imgui.igIsAnyItemFocused();
}
export function getItemID(): ImGuiID {
  return imgui.igGetItemID();
}

export function getItemRectMin(out?: ImVec2): ImVec2 {
  const vec2 = out ?? new ImVec2();
  imgui.igGetItemRectMin(vec2[BUFFER]);
  return vec2;
}
export function getItemRectMax(out?: ImVec2): ImVec2 {
  const vec2 = out ?? new ImVec2();
  imgui.igGetItemRectMax(vec2[BUFFER]);
  return vec2;
}
export function getItemRectSize(out?: ImVec2): ImVec2 {
  const vec2 = out ?? new ImVec2();
  imgui.igGetItemRectSize(vec2[BUFFER]);
  return vec2;
}
export function setItemAllowOverlap(): void {
  imgui.igSetItemAllowOverlap();
}

//   // Viewports
//   // - Currently represents the Platform Window created by the application which is hosting our Dear ImGui windows.
//   // - In 'docking' branch with multi-viewport enabled, we extend this concept to have multiple active viewports.
//   // - In the future we will extend this concept further to also represent Platform Monitor and support a "no main platform window" operation mode.
//   IMGUI_API ImGuiViewport* GetMainViewport();                                                 // return primary/default viewport. This can never be NULL.

export function getMainViewport(): ImGuiViewport {
  return imgui.igGetMainViewport();
}

//   // Background/Foreground Draw Lists
//   IMGUI_API ImDrawList*   GetBackgroundDrawList();                                            // get background draw list for the viewport associated to the current window. this draw list will be the first rendering one. Useful to quickly draw shapes/text behind dear imgui contents.
//   IMGUI_API ImDrawList*   GetForegroundDrawList();                                            // get foreground draw list for the viewport associated to the current window. this draw list will be the last rendered one. Useful to quickly draw shapes/text over dear imgui contents.
//   IMGUI_API ImDrawList*   GetBackgroundDrawList(ImGuiViewport* viewport);                     // get background draw list for the given viewport. this draw list will be the first rendering one. Useful to quickly draw shapes/text behind dear imgui contents.
//   IMGUI_API ImDrawList*   GetForegroundDrawList(ImGuiViewport* viewport);                     // get foreground draw list for the given viewport. this draw list will be the last rendered one. Useful to quickly draw shapes/text over dear imgui contents.

export function getBackgroundDrawList_Nil(): ImDrawList {
  return imgui.igGetBackgroundDrawList_Nil();
}
export function getForegroundDrawList_Nil(): ImDrawList {
  return imgui.igGetForegroundDrawList_Nil();
}
export function getBackgroundDrawList_ViewportPtr(
  viewport: ImGuiViewport,
): ImDrawList {
  return imgui.igGetBackgroundDrawList_ViewportPtr(viewport);
}
export function getForegroundDrawList_ViewportPtr(
  viewport: ImGuiViewport,
): ImDrawList {
  return imgui.igGetForegroundDrawList_ViewportPtr(viewport);
}

//   // Miscellaneous Utilities
//   IMGUI_API bool          IsRectVisible(const ImVec2& size);                                  // test if rectangle (of given size, starting from cursor position) is visible / not clipped.
//   IMGUI_API bool          IsRectVisible(const ImVec2& rect_min, const ImVec2& rect_max);      // test if rectangle (in screen space) is visible / not clipped. to perform coarse clipping on user's side.
//   IMGUI_API double        GetTime();                                                          // get global imgui time. incremented by io.DeltaTime every frame.
//   IMGUI_API int           GetFrameCount();                                                    // get global imgui frame count. incremented by 1 every frame.
//   IMGUI_API ImDrawListSharedData* GetDrawListSharedData();                                    // you may use this when creating your own ImDrawList instances.
//   IMGUI_API const char*   GetStyleColorName(ImGuiCol idx);                                    // get a string corresponding to the enum value (for display, saving, etc.).
//   IMGUI_API void          SetStateStorage(ImGuiStorage* storage);                             // replace current window storage with our own (if you want to manipulate it yourself, typically clear subsection of it)
//   IMGUI_API ImGuiStorage* GetStateStorage();
//   IMGUI_API bool          BeginChildFrame(ImGuiID id, const ImVec2& size, ImGuiWindowFlags flags = 0); // helper to create a child window / scrolling region that looks like a normal widget frame
//   IMGUI_API void          EndChildFrame();                                                    // always call EndChildFrame() regardless of BeginChildFrame() return values (which indicates a collapsed/clipped window)

export function isRectVisible_Nil(size: ImVec2): boolean {
  return imgui.igIsRectVisible_Nil(size[BUFFER]);
}
export function isRectVisible_Vec2(
  rect_min: ImVec2,
  rect_max: ImVec2,
): boolean {
  return imgui.igIsRectVisible_Vec2(rect_min[BUFFER], rect_max[BUFFER]);
}
export function getTime(): number {
  return imgui.igGetTime();
}
export function getFrameCount(): number {
  return imgui.igGetFrameCount();
}
export function getDrawListSharedData(): ImDrawListSharedData {
  return imgui.igGetDrawListSharedData();
}
export function getStyleColorName(idx: ImGuiCol): string {
  return jsString(imgui.igGetStyleColorName(idx));
}
export function setStateStorage(storage: ImGuiStorage): void {
  imgui.igSetStateStorage(storage);
}
export function getStateStorage(): ImGuiStorage {
  return imgui.igGetStateStorage();
}
export function beginChildFrame(
  id: ImGuiID,
  size: ImVec2,
  flags: ImGuiWindowFlags,
): boolean {
  return imgui.igBeginChildFrame(id, size[BUFFER], flags);
}
export function endChildFrame(): void {
  imgui.igEndChildFrame();
}

//   // Text Utilities
//   IMGUI_API ImVec2        CalcTextSize(const char* text, const char* text_end = NULL, bool hide_text_after_double_hash = false, float wrap_width = -1.0f);

export function calcTextSize(
  text: string,
  text_end: string,
  hide_text_after_double_hash: boolean,
  wrap_width: number,
): ImVec2 {
  const vec2 = new ImVec2();
  imgui.igCalcTextSize(
    vec2[BUFFER],
    cString(text),
    cString(text_end),
    hide_text_after_double_hash,
    wrap_width,
  );
  return vec2;
}

//   // Color Utilities
//   IMGUI_API ImVec4        ColorConvertU32ToFloat4(ImU32 in);
//   IMGUI_API ImU32         ColorConvertFloat4ToU32(const ImVec4& in);
//   IMGUI_API void          ColorConvertRGBtoHSV(float r, float g, float b, float& out_h, float& out_s, float& out_v);
//   IMGUI_API void          ColorConvertHSVtoRGB(float h, float s, float v, float& out_r, float& out_g, float& out_b);

export function colorConvertU32ToFloat4(input: ImU32): ImVec4 {
  const vec4 = new ImVec4();
  imgui.igColorConvertU32ToFloat4(vec4[BUFFER], input);
  return vec4;
}
export function colorConvertFloat4ToU32(input: ImVec4): ImU32 {
  return imgui.igColorConvertFloat4ToU32(input[BUFFER]);
}
export function colorConvertRGBtoHSV(
  r: number,
  g: number,
  b: number,
  out_h: Float32Array,
  out_s: Float32Array,
  out_v: Float32Array,
): void {
  imgui.igColorConvertRGBtoHSV(r, g, b, out_h, out_s, out_v);
}
export function colorConvertHSVtoRGB(
  h: number,
  s: number,
  v: number,
  out_r: Float32Array,
  out_g: Float32Array,
  out_b: Float32Array,
): void {
  imgui.igColorConvertHSVtoRGB(h, s, v, out_r, out_g, out_b);
}

//   // Inputs Utilities: Keyboard/Mouse/Gamepad
//   // - the ImGuiKey enum contains all possible keyboard, mouse and gamepad inputs (e.g. ImGuiKey_A, ImGuiKey_MouseLeft, ImGuiKey_GamepadDpadUp...).
//   // - before v1.87, we used ImGuiKey to carry native/user indices as defined by each backends. About use of those legacy ImGuiKey values:
//   //  - without IMGUI_DISABLE_OBSOLETE_KEYIO (legacy support): you can still use your legacy native/user indices (< 512) according to how your backend/engine stored them in io.KeysDown[], but need to cast them to ImGuiKey.
//   //  - with    IMGUI_DISABLE_OBSOLETE_KEYIO (this is the way forward): any use of ImGuiKey will assert with key < 512. GetKeyIndex() is pass-through and therefore deprecated (gone if IMGUI_DISABLE_OBSOLETE_KEYIO is defined).
//   IMGUI_API bool          IsKeyDown(ImGuiKey key);                                            // is key being held.
//   IMGUI_API bool          IsKeyPressed(ImGuiKey key, bool repeat = true);                     // was key pressed (went from !Down to Down)? if repeat=true, uses io.KeyRepeatDelay / KeyRepeatRate
//   IMGUI_API bool          IsKeyReleased(ImGuiKey key);                                        // was key released (went from Down to !Down)?
//   IMGUI_API int           GetKeyPressedAmount(ImGuiKey key, float repeat_delay, float rate);  // uses provided repeat rate/delay. return a count, most often 0 or 1 but might be >1 if RepeatRate is small enough that DeltaTime > RepeatRate
//   IMGUI_API const char*   GetKeyName(ImGuiKey key);                                           // [DEBUG] returns English name of the key. Those names a provided for debugging purpose and are not meant to be saved persistently not compared.
//   IMGUI_API void          SetNextFrameWantCaptureKeyboard(bool want_capture_keyboard);        // Override io.WantCaptureKeyboard flag next frame (said flag is left for your application to handle, typically when true it instructs your app to ignore inputs). e.g. force capture keyboard when your widget is being hovered. This is equivalent to setting "io.WantCaptureKeyboard = want_capture_keyboard"; after the next NewFrame() call.

export function isKeyDown_Nil(key: ImGuiKey): boolean {
  return imgui.igIsKeyDown_Nil(key);
}
export function isKeyPressed_Bool(key: ImGuiKey, repeat: boolean): boolean {
  return imgui.igIsKeyPressed_Bool(key, repeat);
}
export function isKeyReleased_Nil(key: ImGuiKey): boolean {
  return imgui.igIsKeyReleased_Nil(key);
}
export function getKeyPressedAmount(
  key: ImGuiKey,
  repeat_delay: number,
  rate: number,
): number {
  return imgui.igGetKeyPressedAmount(key, repeat_delay, rate);
}
export function getKeyName(key: ImGuiKey): string {
  return jsString(imgui.igGetKeyName(key));
}
export function setNextFrameWantCaptureKeyboard(
  want_capture_keyboard: boolean,
): void {
  imgui.igSetNextFrameWantCaptureKeyboard(want_capture_keyboard);
}

//   // Inputs Utilities: Mouse specific
//   // - To refer to a mouse button, you may use named enums in your code e.g. ImGuiMouseButton_Left, ImGuiMouseButton_Right.
//   // - You can also use regular integer: it is forever guaranteed that 0=Left, 1=Right, 2=Middle.
//   // - Dragging operations are only reported after mouse has moved a certain distance away from the initial clicking position (see 'lock_threshold' and 'io.MouseDraggingThreshold')
//   IMGUI_API bool          IsMouseDown(ImGuiMouseButton button);                               // is mouse button held?
//   IMGUI_API bool          IsMouseClicked(ImGuiMouseButton button, bool repeat = false);       // did mouse button clicked? (went from !Down to Down). Same as GetMouseClickedCount() == 1.
//   IMGUI_API bool          IsMouseReleased(ImGuiMouseButton button);                           // did mouse button released? (went from Down to !Down)
//   IMGUI_API bool          IsMouseDoubleClicked(ImGuiMouseButton button);                      // did mouse button double-clicked? Same as GetMouseClickedCount() == 2. (note that a double-click will also report IsMouseClicked() == true)
//   IMGUI_API int           GetMouseClickedCount(ImGuiMouseButton button);                      // return the number of successive mouse-clicks at the time where a click happen (otherwise 0).
//   IMGUI_API bool          IsMouseHoveringRect(const ImVec2& r_min, const ImVec2& r_max, bool clip = true);// is mouse hovering given bounding rect (in screen space). clipped by current clipping settings, but disregarding of other consideration of focus/window ordering/popup-block.
//   IMGUI_API bool          IsMousePosValid(const ImVec2* mouse_pos = NULL);                    // by convention we use (-FLT_MAX,-FLT_MAX) to denote that there is no mouse available
//   IMGUI_API bool          IsAnyMouseDown();                                                   // [WILL OBSOLETE] is any mouse button held? This was designed for backends, but prefer having backend maintain a mask of held mouse buttons, because upcoming input queue system will make this invalid.
//   IMGUI_API ImVec2        GetMousePos();                                                      // shortcut to ImGui::GetIO().MousePos provided by user, to be consistent with other calls
//   IMGUI_API ImVec2        GetMousePosOnOpeningCurrentPopup();                                 // retrieve mouse position at the time of opening popup we have BeginPopup() into (helper to avoid user backing that value themselves)
//   IMGUI_API bool          IsMouseDragging(ImGuiMouseButton button, float lock_threshold = -1.0f);         // is mouse dragging? (if lock_threshold < -1.0f, uses io.MouseDraggingThreshold)
//   IMGUI_API ImVec2        GetMouseDragDelta(ImGuiMouseButton button = 0, float lock_threshold = -1.0f);   // return the delta from the initial clicking position while the mouse button is pressed or was just released. This is locked and return 0.0f until the mouse moves past a distance threshold at least once (if lock_threshold < -1.0f, uses io.MouseDraggingThreshold)
//   IMGUI_API void          ResetMouseDragDelta(ImGuiMouseButton button = 0);                   //
//   IMGUI_API ImGuiMouseCursor GetMouseCursor();                                                // get desired mouse cursor shape. Important: reset in ImGui::NewFrame(), this is updated during the frame. valid before Render(). If you use software rendering by setting io.MouseDrawCursor ImGui will render those for you
//   IMGUI_API void          SetMouseCursor(ImGuiMouseCursor cursor_type);                       // set desired mouse cursor shape
//   IMGUI_API void          SetNextFrameWantCaptureMouse(bool want_capture_mouse);              // Override io.WantCaptureMouse flag next frame (said flag is left for your application to handle, typical when true it instucts your app to ignore inputs). This is equivalent to setting "io.WantCaptureMouse = want_capture_mouse;" after the next NewFrame() call.

export function isMouseDown_Nil(button: ImGuiMouseButton): boolean {
  return imgui.igIsMouseDown_Nil(button);
}
export function isMouseClicked_Bool(
  button: ImGuiMouseButton,
  repeat: boolean,
): boolean {
  return imgui.igIsMouseClicked_Bool(button, repeat);
}
export function isMouseReleased_Nil(button: ImGuiMouseButton): boolean {
  return imgui.igIsMouseReleased_Nil(button);
}
export function isMouseDoubleClicked(button: ImGuiMouseButton): boolean {
  return imgui.igIsMouseDoubleClicked(button);
}
export function getMouseClickedCount(button: ImGuiMouseButton): number {
  return imgui.igGetMouseClickedCount(button);
}
export function isMouseHoveringRect(
  r_min: ImVec2,
  r_max: ImVec2,
  clip: boolean,
): boolean {
  return imgui.igIsMouseHoveringRect(r_min[BUFFER], r_max[BUFFER], clip);
}
export function isMousePosValid(mouse_pos: ImVec2): boolean {
  return imgui.igIsMousePosValid(mouse_pos[BUFFER]);
}
export function isAnyMouseDown(): boolean {
  return imgui.igIsAnyMouseDown();
}
export function getMousePos(): ImVec2 {
  const vec2 = new ImVec2();
  imgui.igGetMousePos(vec2[BUFFER]);
  return vec2;
}
export function getMousePosOnOpeningCurrentPopup(): ImVec2 {
  const vec2 = new ImVec2();
  imgui.igGetMousePosOnOpeningCurrentPopup(vec2[BUFFER]);
  return vec2;
}
export function isMouseDragging(
  button: ImGuiMouseButton,
  lock_threshold: number,
): boolean {
  return imgui.igIsMouseDragging(button, lock_threshold);
}
export function getMouseDragDelta(
  button: ImGuiMouseButton,
  lock_threshold: number,
): ImVec2 {
  const vec2 = new ImVec2();
  imgui.igGetMouseDragDelta(vec2[BUFFER], button, lock_threshold);
  return vec2;
}
export function resetMouseDragDelta(button: ImGuiMouseButton): void {
  imgui.igResetMouseDragDelta(button);
}
export function getMouseCursor(): ImGuiMouseCursor {
  return imgui.igGetMouseCursor();
}
export function setMouseCursor(cursor_type: ImGuiMouseCursor): void {
  imgui.igSetMouseCursor(cursor_type);
}
export function setNextFrameWantCaptureMouse(
  want_capture_mouse: boolean,
): void {
  imgui.igSetNextFrameWantCaptureMouse(want_capture_mouse);
}

//   // Clipboard Utilities
//   // - Also see the LogToClipboard() function to capture GUI into clipboard, or easily output text data to the clipboard.
//   IMGUI_API const char*   GetClipboardText();
//   IMGUI_API void          SetClipboardText(const char* text);

export function getClipboardText(): string {
  return jsString(imgui.igGetClipboardText());
}
export function setClipboardText(text: string): void {
  imgui.igSetClipboardText(cString(text));
}

//   // Settings/.Ini Utilities
//   // - The disk functions are automatically called if io.IniFilename != NULL (default is "imgui.ini").
//   // - Set io.IniFilename to NULL to load/save manually. Read io.WantSaveIniSettings description about handling .ini saving manually.
//   // - Important: default value "imgui.ini" is relative to current working dir! Most apps will want to lock this to an absolute path (e.g. same path as executables).
//   IMGUI_API void          LoadIniSettingsFromDisk(const char* ini_filename);                  // call after CreateContext() and before the first call to NewFrame(). NewFrame() automatically calls LoadIniSettingsFromDisk(io.IniFilename).
//   IMGUI_API void          LoadIniSettingsFromMemory(const char* ini_data, size_t ini_size=0); // call after CreateContext() and before the first call to NewFrame() to provide .ini data from your own data source.
//   IMGUI_API void          SaveIniSettingsToDisk(const char* ini_filename);                    // this is automatically called (if io.IniFilename is not empty) a few seconds after any modification that should be reflected in the .ini file (and also by DestroyContext).
//   IMGUI_API const char*   SaveIniSettingsToMemory(size_t* out_ini_size = NULL);               // return a zero-terminated string with the .ini data which you can save by your own mean. call when io.WantSaveIniSettings is set, then save data by your own mean and clear io.WantSaveIniSettings.

export function loadIniSettingsFromDisk(ini_filename: string): void {
  imgui.igLoadIniSettingsFromDisk(cString(ini_filename));
}
export function loadIniSettingsFromMemory(
  ini_data: string,
  ini_size: Deno.PointerValue,
): void {
  imgui.igLoadIniSettingsFromMemory(cString(ini_data), ini_size);
}
export function saveIniSettingsToDisk(ini_filename: string): void {
  imgui.igSaveIniSettingsToDisk(cString(ini_filename));
}
export function saveIniSettingsToMemory(out_ini_size: number): string {
  return jsString(imgui.igSaveIniSettingsToMemory(out_ini_size));
}

//   // Debug Utilities
//   IMGUI_API void          DebugTextEncoding(const char* text);
//   IMGUI_API bool          DebugCheckVersionAndDataLayout(const char* version_str, size_t sz_io, size_t sz_style, size_t sz_vec2, size_t sz_vec4, size_t sz_drawvert, size_t sz_drawidx); // This is called by IMGUI_CHECKVERSION() macro.

export function debugTextEncoding(text: string): void {
  imgui.igDebugTextEncoding(cString(text));
}
export function debugCheckVersionAndDataLayout(
  version_str: string,
  sz_io: Deno.PointerValue,
  sz_style: Deno.PointerValue,
  sz_vec2: Deno.PointerValue,
  sz_vec4: Deno.PointerValue,
  sz_drawvert: Deno.PointerValue,
  sz_drawidx: Deno.PointerValue,
): boolean {
  return imgui.igDebugCheckVersionAndDataLayout(
    cString(version_str),
    sz_io,
    sz_style,
    sz_vec2,
    sz_vec4,
    sz_drawvert,
    sz_drawidx,
  );
}

//   // Memory Allocators
//   // - Those functions are not reliant on the current context.
//   // - DLL users: heaps and globals are not shared across DLL boundaries! You will need to call SetCurrentContext() + SetAllocatorFunctions()
//   //   for each static/DLL boundary you are calling from. Read "Context and Memory Allocators" section of imgui.cpp for more details.
//   IMGUI_API void          SetAllocatorFunctions(ImGuiMemAllocFunc alloc_func, ImGuiMemFreeFunc free_func, void* user_data = NULL);
//   IMGUI_API void          GetAllocatorFunctions(ImGuiMemAllocFunc* p_alloc_func, ImGuiMemFreeFunc* p_free_func, void** p_user_data);
//   IMGUI_API void*         MemAlloc(size_t size);
//   IMGUI_API void          MemFree(void* ptr);

//   // (Optional) Platform/OS interface for multi-viewport support
//   // Read comments around the ImGuiPlatformIO structure for more details.
//   // Note: You may use GetWindowViewport() to get the current viewport of the current window.
//   IMGUI_API ImGuiPlatformIO&  GetPlatformIO();                                                // platform/renderer functions, for backend to setup + viewports list.
//   IMGUI_API void              UpdatePlatformWindows();                                        // call in main loop. will call CreateWindow/ResizeWindow/etc. platform functions for each secondary viewport, and DestroyWindow for each inactive viewport.
//   IMGUI_API void              RenderPlatformWindowsDefault(void* platform_render_arg = NULL, void* renderer_render_arg = NULL); // call in main loop. will call RenderWindow/SwapBuffers platform functions for each secondary viewport which doesn't have the ImGuiViewportFlags_Minimized flag set. May be reimplemented by user for custom rendering needs.
//   IMGUI_API void              DestroyPlatformWindows();                                       // call DestroyWindow platform functions for all viewports. call from backend Shutdown() if you need to close platform windows before imgui shutdown. otherwise will be called by DestroyContext().
//   IMGUI_API ImGuiViewport*    FindViewportByID(ImGuiID id);                                   // this is a helper for backends.
//   IMGUI_API ImGuiViewport*    FindViewportByPlatformHandle(void* platform_handle);            // this is a helper for backends. the type platform_handle is decided by the backend (e.g. HWND, MyWindow*, GLFWwindow* etc.)

// opengl
export function implOpenGL3Init(glVersion: string): void {
  imgui.ImGui_ImplOpenGL3_Init(cString(glVersion));
}
export function implOpenGL3Shutdown(): void {
  imgui.ImGui_ImplOpenGL3_Shutdown();
}
export function implOpenGL3NewFrame(): void {
  imgui.ImGui_ImplOpenGL3_NewFrame();
}

// glfw
export function implGlfwInitForOpenGL(
  windowNativeHandle: Deno.PointerValue,
  install_callbacks = true,
): void {
  imgui.ImGui_ImplGlfw_InitForOpenGL(windowNativeHandle, install_callbacks);
}
export function implGlfwShutdown(): void {
  imgui.ImGui_ImplGlfw_Shutdown();
}
export function implGlfwNewFrame(): void {
  imgui.ImGui_ImplGlfw_NewFrame();
}
export function implOpenGL3RenderDrawData(drawData: ImDrawData): void {
  imgui.ImGui_ImplOpenGL3_RenderDrawData(drawData);
}

// helper
export function printImVec2(vec2: ImVec2): void {
  imgui.DImGuiPrintImVec2(vec2[BUFFER]);
}

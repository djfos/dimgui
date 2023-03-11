import { ImFont, ImGuiBackendFlags, ImGuiConfigFlags, ImVec2 } from "./type.ts";
import { cString, ffi as imgui, jsString } from "./ffi.ts";
import { ImFontAtlas } from "./imgui_font_atlas.ts";

/**
 * Main configuration and I/O between your application and ImGui
 */
export class ImGuiIO {
  #self: Deno.PointerValue;

  constructor(pointer: Deno.PointerValue) {
    this.#self = pointer;
  }

  get pointer() {
    return this.#self;
  }

  /*
   *  = 0              // See ImGuiConfigFlags_ enum. Set by user/application. Gamepad/keyboard navigation options, etc.
   */
  get ConfigFlags(): ImGuiConfigFlags {
    return imgui.DImGuiIOGetConfigFlags(this.#self);
  }
  set ConfigFlags(value: ImGuiConfigFlags) {
    imgui.DImGuiIOSetConfigFlags(this.#self, value);
  }
  /*
   *  = 0              // See ImGuiBackendFlags_ enum. Set by backend (imgui_impl_xxx files or custom backend) to communicate features supported by the backend.
   */
  get BackendFlags(): ImGuiBackendFlags {
    return imgui.DImGuiIOGetBackendFlags(this.#self);
  }
  set BackendFlags(value: ImGuiBackendFlags) {
    imgui.DImGuiIOSetBackendFlags(this.#self, value);
  }
  /*
   *  <unset>          // Main display size, in pixels (generally == GetMainViewport()->Size). May change every frame.
   */
  get DisplaySize(): ImVec2 {
    const data = imgui.DImGuiIOGetDisplaySize(this.#self);
    return new ImVec2(data);
  }
  set DisplaySize(value: ImVec2) {
    imgui.DImGuiIOSetDisplaySize(this.#self, value.buffer);
  }
  /*
   *  = 1.0f/60.0f     // Time elapsed since last frame, in seconds. May change every frame.
   */
  get DeltaTime(): number {
    return imgui.DImGuiIOGetDeltaTime(this.#self);
  }
  set DeltaTime(value: number) {
    imgui.DImGuiIOSetDeltaTime(this.#self, value);
  }
  /*
   *  = 5.0f           // Minimum time between saving positions/sizes to .ini file, in seconds.
   */
  get IniSavingRate(): number {
    return imgui.DImGuiIOGetIniSavingRate(this.#self);
  }
  set IniSavingRate(value: number) {
    imgui.DImGuiIOSetIniSavingRate(this.#self, value);
  }
  /*
   *  = "imgui.ini"    // Path to .ini file (important: default "imgui.ini" is relative to current working dir!). Set NULL to disable automatic .ini loading/saving or if you want to manually call LoadIniSettingsXXX() / SaveIniSettingsXXX() functions.
   */
  get IniFilename(): string {
    return jsString(imgui.DImGuiIOGetIniFilename(this.#self));
  }
  set IniFilename(value: string) {
    imgui.DImGuiIOSetIniFilename(this.#self, cString(value));
  }
  /*
   *  = "imgui_log.txt"// Path to .log file (default parameter to ImGui::LogToFile when no file is specified).
   */
  get LogFilename(): string {
    return jsString(imgui.DImGuiIOGetLogFilename(this.#self));
  }
  set LogFilename(value: string) {
    imgui.DImGuiIOSetLogFilename(this.#self, cString(value));
  }
  /*
   *  = 0.30f          // Time for a double-click, in seconds.
   */
  get MouseDoubleClickTime(): number {
    return imgui.DImGuiIOGetMouseDoubleClickTime(this.#self);
  }
  set MouseDoubleClickTime(value: number) {
    imgui.DImGuiIOSetMouseDoubleClickTime(this.#self, value);
  }
  /*
   *  = 6.0f           // Distance threshold to stay in to validate a double-click, in pixels.
   */
  get MouseDoubleClickMaxDist(): number {
    return imgui.DImGuiIOGetMouseDoubleClickMaxDist(this.#self);
  }
  set MouseDoubleClickMaxDist(value: number) {
    imgui.DImGuiIOSetMouseDoubleClickMaxDist(this.#self, value);
  }
  /*
   *  = 6.0f           // Distance threshold before considering we are dragging.
   */
  get MouseDragThreshold(): number {
    return imgui.DImGuiIOGetMouseDragThreshold(this.#self);
  }
  set MouseDragThreshold(value: number) {
    imgui.DImGuiIOSetMouseDragThreshold(this.#self, value);
  }
  /*
   *  = 0.275f         // When holding a key/button, time before it starts repeating, in seconds (for buttons in Repeat mode, etc.).
   */
  get KeyRepeatDelay(): number {
    return imgui.DImGuiIOGetKeyRepeatDelay(this.#self);
  }
  set KeyRepeatDelay(value: number) {
    imgui.DImGuiIOSetKeyRepeatDelay(this.#self, value);
  }
  /*
   *  = 0.050f         // When holding a key/button, rate at which it repeats, in seconds.
   */
  get KeyRepeatRate(): number {
    return imgui.DImGuiIOGetKeyRepeatRate(this.#self);
  }
  set KeyRepeatRate(value: number) {
    imgui.DImGuiIOSetKeyRepeatRate(this.#self, value);
  }
  /*
   *  = 0.30 sec       // Delay on hovering before IsItemHovered(ImGuiHoveredFlags_DelayNormal) returns true.
   */
  get HoverDelayNormal(): number {
    return imgui.DImGuiIOGetHoverDelayNormal(this.#self);
  }
  set HoverDelayNormal(value: number) {
    imgui.DImGuiIOSetHoverDelayNormal(this.#self, value);
  }
  /*
   *  = 0.10 sec       // Delay on hovering before IsItemHovered(ImGuiHoveredFlags_DelayShort) returns true.
   */
  get HoverDelayShort(): number {
    return imgui.DImGuiIOGetHoverDelayShort(this.#self);
  }
  set HoverDelayShort(value: number) {
    imgui.DImGuiIOSetHoverDelayShort(this.#self, value);
  }
  /*
   *  = NULL           // Store your own data.
   */
  // get UserData(): BufferSource {
  //   return imgui.DImGuiIOGetUserData(this.#self);
  // }
  // set UserData(value: BufferSource) {
  //   imgui.DImGuiIOSetUserData(this.#self, value);
  // }
  /*
   *  <auto>           // Font atlas: load, rasterize and pack one or more fonts into a single texture.
   */
  get Fonts(): ImFontAtlas {
    const pointer = imgui.DImGuiIOGetFonts(this.#self);
    return new ImFontAtlas(pointer);
  }
  set Fonts(value: ImFontAtlas) {
    imgui.DImGuiIOSetFonts(this.#self, value.pointer);
  }
  /*
   *  = 1.0f           // Global scale all fonts
   */
  get FontGlobalScale(): number {
    return imgui.DImGuiIOGetFontGlobalScale(this.#self);
  }
  set FontGlobalScale(value: number) {
    imgui.DImGuiIOSetFontGlobalScale(this.#self, value);
  }
  /*
   *  = false          // Allow user scaling text of individual window with CTRL+Wheel.
   */
  get FontAllowUserScaling(): boolean {
    return imgui.DImGuiIOGetFontAllowUserScaling(this.#self);
  }
  set FontAllowUserScaling(value: boolean) {
    imgui.DImGuiIOSetFontAllowUserScaling(this.#self, value);
  }
  /*
   *  = NULL           // Font to use on NewFrame(). Use NULL to uses Fonts->Fonts[0].
   */
  get FontDefault(): ImFont {
    return imgui.DImGuiIOGetFontDefault(this.#self);
  }
  set FontDefault(value: ImFont) {
    imgui.DImGuiIOSetFontDefault(this.#self, value);
  }
  /*
   *  = (1, 1)         // For retina display or other situations where window coordinates are different from framebuffer coordinates. This generally ends up in ImDrawData::FramebufferScale.
   */
  get DisplayFramebufferScale(): ImVec2 {
    const data = imgui.DImGuiIOGetDisplayFramebufferScale(this.#self);
    return new ImVec2(data);
  }
  set DisplayFramebufferScale(value: ImVec2) {
    imgui.DImGuiIOSetDisplayFramebufferScale(this.#self, value.buffer);
  }
  /*
   *  = false          // Simplified docking mode: disable window splitting, so docking is limited to merging multiple windows together into tab-bars.
   */
  get ConfigDockingNoSplit(): boolean {
    return imgui.DImGuiIOGetConfigDockingNoSplit(this.#self);
  }
  set ConfigDockingNoSplit(value: boolean) {
    imgui.DImGuiIOSetConfigDockingNoSplit(this.#self, value);
  }
  /*
   *  = false          // Enable docking with holding Shift key (reduce visual noise, allows dropping in wider space)
   */
  get ConfigDockingWithShift(): boolean {
    return imgui.DImGuiIOGetConfigDockingWithShift(this.#self);
  }
  set ConfigDockingWithShift(value: boolean) {
    imgui.DImGuiIOSetConfigDockingWithShift(this.#self, value);
  }
  /*
   *  = false          // [BETA] [FIXME: This currently creates regression with auto-sizing and general overhead] Make every single floating window display within a docking node.
   */
  get ConfigDockingAlwaysTabBar(): boolean {
    return imgui.DImGuiIOGetConfigDockingAlwaysTabBar(this.#self);
  }
  set ConfigDockingAlwaysTabBar(value: boolean) {
    imgui.DImGuiIOSetConfigDockingAlwaysTabBar(this.#self, value);
  }
  /*
   *  = false          // [BETA] Make window or viewport transparent when docking and only display docking boxes on the target viewport. Useful if rendering of multiple viewport cannot be synced. Best used with ConfigViewportsNoAutoMerge.
   */
  get ConfigDockingTransparentPayload(): boolean {
    return imgui.DImGuiIOGetConfigDockingTransparentPayload(this.#self);
  }
  set ConfigDockingTransparentPayload(value: boolean) {
    imgui.DImGuiIOSetConfigDockingTransparentPayload(this.#self, value);
  }
  /*
   *  = false;         // Set to make all floating imgui windows always create their own viewport. Otherwise, they are merged into the main host viewports when overlapping it. May also set ImGuiViewportFlags_NoAutoMerge on individual viewport.
   */
  get ConfigViewportsNoAutoMerge(): boolean {
    return imgui.DImGuiIOGetConfigViewportsNoAutoMerge(this.#self);
  }
  set ConfigViewportsNoAutoMerge(value: boolean) {
    imgui.DImGuiIOSetConfigViewportsNoAutoMerge(this.#self, value);
  }
  /*
   *  = false          // Disable default OS task bar icon flag for secondary viewports. When a viewport doesn't want a task bar icon, ImGuiViewportFlags_NoTaskBarIcon will be set on it.
   */
  get ConfigViewportsNoTaskBarIcon(): boolean {
    return imgui.DImGuiIOGetConfigViewportsNoTaskBarIcon(this.#self);
  }
  set ConfigViewportsNoTaskBarIcon(value: boolean) {
    imgui.DImGuiIOSetConfigViewportsNoTaskBarIcon(this.#self, value);
  }
  /*
   *  = true           // Disable default OS window decoration flag for secondary viewports. When a viewport doesn't want window decorations, ImGuiViewportFlags_NoDecoration will be set on it. Enabling decoration can create subsequent issues at OS levels (e.g. minimum window size).
   */
  get ConfigViewportsNoDecoration(): boolean {
    return imgui.DImGuiIOGetConfigViewportsNoDecoration(this.#self);
  }
  set ConfigViewportsNoDecoration(value: boolean) {
    imgui.DImGuiIOSetConfigViewportsNoDecoration(this.#self, value);
  }
  /*
   *  = false          // Disable default OS parenting to main viewport for secondary viewports. By default, viewports are marked with ParentViewportId = <main_viewport>, expecting the platform backend to setup a parent/child relationship between the OS windows (some backend may ignore this). Set to true if you want the default to be 0, then all viewports will be top-level OS windows.
   */
  get ConfigViewportsNoDefaultParent(): boolean {
    return imgui.DImGuiIOGetConfigViewportsNoDefaultParent(this.#self);
  }
  set ConfigViewportsNoDefaultParent(value: boolean) {
    imgui.DImGuiIOSetConfigViewportsNoDefaultParent(this.#self, value);
  }
  /*
   *  = false          // Request ImGui to draw a mouse cursor for you (if you are on a platform without a mouse cursor). Cannot be easily renamed to 'io.ConfigXXX' because this is frequently used by backend implementations.
   */
  get MouseDrawCursor(): boolean {
    return imgui.DImGuiIOGetMouseDrawCursor(this.#self);
  }
  set MouseDrawCursor(value: boolean) {
    imgui.DImGuiIOSetMouseDrawCursor(this.#self, value);
  }
  /*
   *  = defined(__APPLE__) // OS X style: Text editing cursor movement using Alt instead of Ctrl, Shortcuts using Cmd/Super instead of Ctrl, Line/Text Start and End using Cmd+Arrows instead of Home/End, Double click selects by word instead of selecting whole text, Multi-selection in lists uses Cmd/Super instead of Ctrl.
   */
  get ConfigMacOSXBehaviors(): boolean {
    return imgui.DImGuiIOGetConfigMacOSXBehaviors(this.#self);
  }
  set ConfigMacOSXBehaviors(value: boolean) {
    imgui.DImGuiIOSetConfigMacOSXBehaviors(this.#self, value);
  }
  /*
   *  = true           // Enable input queue trickling: some types of events submitted during the same frame (e.g. button down + up) will be spread over multiple frames, improving interactions with low framerates.
   */
  get ConfigInputTrickleEventQueue(): boolean {
    return imgui.DImGuiIOGetConfigInputTrickleEventQueue(this.#self);
  }
  set ConfigInputTrickleEventQueue(value: boolean) {
    imgui.DImGuiIOSetConfigInputTrickleEventQueue(this.#self, value);
  }
  /*
   *  = true           // Enable blinking cursor (optional as some users consider it to be distracting).
   */
  get ConfigInputTextCursorBlink(): boolean {
    return imgui.DImGuiIOGetConfigInputTextCursorBlink(this.#self);
  }
  set ConfigInputTextCursorBlink(value: boolean) {
    imgui.DImGuiIOSetConfigInputTextCursorBlink(this.#self, value);
  }
  /*
   *  = false          // [BETA] Pressing Enter will keep item active and select contents (single-line only).
   */
  get ConfigInputTextEnterKeepActive(): boolean {
    return imgui.DImGuiIOGetConfigInputTextEnterKeepActive(this.#self);
  }
  set ConfigInputTextEnterKeepActive(value: boolean) {
    imgui.DImGuiIOSetConfigInputTextEnterKeepActive(this.#self, value);
  }
  /*
   *  = false          // [BETA] Enable turning DragXXX widgets into text input with a simple mouse click-release (without moving). Not desirable on devices without a keyboard.
   */
  get ConfigDragClickToInputText(): boolean {
    return imgui.DImGuiIOGetConfigDragClickToInputText(this.#self);
  }
  set ConfigDragClickToInputText(value: boolean) {
    imgui.DImGuiIOSetConfigDragClickToInputText(this.#self, value);
  }
  /*
   *  = true           // Enable resizing of windows from their edges and from the lower-left corner. This requires (io.BackendFlags & ImGuiBackendFlags_HasMouseCursors) because it needs mouse cursor feedback. (This used to be a per-window ImGuiWindowFlags_ResizeFromAnySide flag)
   */
  get ConfigWindowsResizeFromEdges(): boolean {
    return imgui.DImGuiIOGetConfigWindowsResizeFromEdges(this.#self);
  }
  set ConfigWindowsResizeFromEdges(value: boolean) {
    imgui.DImGuiIOSetConfigWindowsResizeFromEdges(this.#self, value);
  }
  /*
   *  = false       // Enable allowing to move windows only when clicking on their title bar. Does not apply to windows without a title bar.
   */
  get ConfigWindowsMoveFromTitleBarOnly(): boolean {
    return imgui.DImGuiIOGetConfigWindowsMoveFromTitleBarOnly(this.#self);
  }
  set ConfigWindowsMoveFromTitleBarOnly(value: boolean) {
    imgui.DImGuiIOSetConfigWindowsMoveFromTitleBarOnly(this.#self, value);
  }
  /*
   *  = 60.0f          // Timer (in seconds) to free transient windows/tables memory buffers when unused. Set to -1.0f to disable.
   */
  get ConfigMemoryCompactTimer(): number {
    return imgui.DImGuiIOGetConfigMemoryCompactTimer(this.#self);
  }
  set ConfigMemoryCompactTimer(value: number) {
    imgui.DImGuiIOSetConfigMemoryCompactTimer(this.#self, value);
  }

  //------------------------------------------------------------------
  // Output - Updated by NewFrame() or EndFrame()/Render()
  // (when reading from the io.WantCaptureMouse, io.WantCaptureKeyboard flags to dispatch your inputs, it is
  //  generally easier and more correct to use their state BEFORE calling NewFrame(). See FAQ for details!)
  //------------------------------------------------------------------

  /*
   *  Set when Dear ImGui will use mouse inputs, in this case do not dispatch them to your main game/application (either way, always pass on mouse inputs to imgui). (e.g. unclicked mouse is hovering over an imgui window, widget is active, mouse was clicked over an imgui window, etc.).
   */
  get WantCaptureMouse(): boolean {
    return imgui.DImGuiIOGetWantCaptureMouse(this.#self);
  }
  // set WantCaptureMouse(value: boolean) {
  //   imgui.DImGuiIOSetWantCaptureMouse(this.#self, value);
  // }
  /*
   *  Set when Dear ImGui will use keyboard inputs, in this case do not dispatch them to your main game/application (either way, always pass keyboard inputs to imgui). (e.g. InputText active, or an imgui window is focused and navigation is enabled, etc.).
   */
  get WantCaptureKeyboard(): boolean {
    return imgui.DImGuiIOGetWantCaptureKeyboard(this.#self);
  }
  // set WantCaptureKeyboard(value: boolean) {
  //   imgui.DImGuiIOSetWantCaptureKeyboard(this.#self, value);
  // }
  /*
   *  Mobile/console: when set, you may display an on-screen keyboard. This is set by Dear ImGui when it wants textual keyboard input to happen (e.g. when a InputText widget is active).
   */
  get WantTextInput(): boolean {
    return imgui.DImGuiIOGetWantTextInput(this.#self);
  }
  // set WantTextInput(value: boolean) {
  //   imgui.DImGuiIOSetWantTextInput(this.#self, value);
  // }
  /*
   *  MousePos has been altered, backend should reposition mouse on next frame. Rarely used! Set only when ImGuiConfigFlags_NavEnableSetMousePos flag is enabled.
   */
  get WantSetMousePos(): boolean {
    return imgui.DImGuiIOGetWantSetMousePos(this.#self);
  }
  // set WantSetMousePos(value: boolean) {
  //   imgui.DImGuiIOSetWantSetMousePos(this.#self, value);
  // }
  /*
   *  When manual .ini load/save is active (io.IniFilename == NULL), this will be set to notify your application that you can call SaveIniSettingsToMemory() and save yourself. Important: clear io.WantSaveIniSettings yourself after saving!
   */
  get WantSaveIniSettings(): boolean {
    return imgui.DImGuiIOGetWantSaveIniSettings(this.#self);
  }
  // set WantSaveIniSettings(value: boolean) {
  //   imgui.DImGuiIOSetWantSaveIniSettings(this.#self, value);
  // }
  /*
   *  Keyboard/Gamepad navigation is currently allowed (will handle ImGuiKey_NavXXX events) = a window is focused and it doesn't use the ImGuiWindowFlags_NoNavInputs flag.
   */
  get NavActive(): boolean {
    return imgui.DImGuiIOGetNavActive(this.#self);
  }
  // set NavActive(value: boolean) {
  //   imgui.DImGuiIOSetNavActive(this.#self, value);
  // }
  /*
   *  Keyboard/Gamepad navigation is visible and allowed (will handle ImGuiKey_NavXXX events).
   */
  get NavVisible(): boolean {
    return imgui.DImGuiIOGetNavVisible(this.#self);
  }
  set NavVisible(value: boolean) {
    imgui.DImGuiIOSetNavVisible(this.#self, value);
  }
  /*
   *  Estimate of application framerate (rolling average over 60 frames, based on io.DeltaTime), in frame per second. Solely for convenience. Slow applications may not want to use a moving average or may want to reset underlying buffers occasionally.
   */
  get Framerate(): number {
    return imgui.DImGuiIOGetFramerate(this.#self);
  }
  // set Framerate(value: number) {
  //   imgui.DImGuiIOSetFramerate(this.#self, value);
  // }
  /*
   *  Vertices output during last call to Render()
   */
  get MetricsRenderVertices(): number {
    return imgui.DImGuiIOGetMetricsRenderVertices(this.#self);
  }
  // set MetricsRenderVertices(value: number) {
  //   imgui.DImGuiIOSetMetricsRenderVertices(this.#self, value);
  // }
  /*
   *  Indices output during last call to Render() = number of triangles * 3
   */
  get MetricsRenderIndices(): number {
    return imgui.DImGuiIOGetMetricsRenderIndices(this.#self);
  }
  // set MetricsRenderIndices(value: number) {
  //   imgui.DImGuiIOSetMetricsRenderIndices(this.#self, value);
  // }
  /*
   *  Number of visible windows
   */
  get MetricsRenderWindows(): number {
    return imgui.DImGuiIOGetMetricsRenderWindows(this.#self);
  }
  // set MetricsRenderWindows(value: number) {
  //   imgui.DImGuiIOSetMetricsRenderWindows(this.#self, value);
  // }
  /*
   *  Number of active windows
   */
  get MetricsActiveWindows(): number {
    return imgui.DImGuiIOGetMetricsActiveWindows(this.#self);
  }
  // set MetricsActiveWindows(value: number) {
  //   imgui.DImGuiIOSetMetricsActiveWindows(this.#self, value);
  // }
  /*
   *  Number of active allocations, updated by MemAlloc/MemFree based on current context. May be off if you have multiple imgui contexts.
   */
  get MetricsActiveAllocations(): number {
    return imgui.DImGuiIOGetMetricsActiveAllocations(this.#self);
  }
  // set MetricsActiveAllocations(value: number) {
  //   imgui.DImGuiIOSetMetricsActiveAllocations(this.#self, value);
  // }
  /*
   *  Mouse delta. Note that this is zero if either current or previous position are invalid (-FLT_MAX,-FLT_MAX), so a disappearing/reappearing mouse won't have a huge delta.
   */
  get MouseDelta(): ImVec2 {
    const data = imgui.DImGuiIOGetMouseDelta(this.#self);
    return new ImVec2(data);
  }
  // set MouseDelta(value: ImVec2) {
  //   imgui.DImGuiIOSetMouseDelta(this.#self, value.buffer);
  // }
}

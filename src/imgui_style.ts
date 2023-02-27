import { ImGuiDir } from "./enum.ts";
import { BUFFER, ImVec2 } from "./type.ts";
import { ffi as imgui } from "./ffi.ts";

export class ImGuiStyle {
  #self: Deno.PointerValue;

  constructor(pointer: Deno.PointerValue) {
    this.#self = pointer;
  }

  get pointer() {
    return this.#self;
  }

  /*
   *  Global alpha applies to everything in Dear ImGui.
   */
  get Alpha(): number {
    return imgui.DImGuiGetAlpha(this.#self);
  }
  set Alpha(value: number) {
    imgui.DImGuiSetAlpha(this.#self, value);
  }
  /*
   *  Additional alpha multiplier applied by BeginDisabled(). Multiply over current value of Alpha.
   */
  get DisabledAlpha(): number {
    return imgui.DImGuiGetDisabledAlpha(this.#self);
  }
  set DisabledAlpha(value: number) {
    imgui.DImGuiSetDisabledAlpha(this.#self, value);
  }
  /*
   *  Padding within a window.
   */
  get WindowPadding(): ImVec2 {
    const data = imgui.DImGuiGetWindowPadding(this.#self);
    return new ImVec2(data);
  }
  set WindowPadding(value: ImVec2) {
    imgui.DImGuiSetWindowPadding(this.#self, value[BUFFER]);
  }
  /*
   *  Radius of window corners rounding. Set to 0.0f to have rectangular windows. Large values tend to lead to variety of artifacts and are not recommended.
   */
  get WindowRounding(): number {
    return imgui.DImGuiGetWindowRounding(this.#self);
  }
  set WindowRounding(value: number) {
    imgui.DImGuiSetWindowRounding(this.#self, value);
  }
  /*
   *  Thickness of border around windows. Generally set to 0.0f or 1.0f. (Other values are not well tested and more CPU/GPU costly).
   */
  get WindowBorderSize(): number {
    return imgui.DImGuiGetWindowBorderSize(this.#self);
  }
  set WindowBorderSize(value: number) {
    imgui.DImGuiSetWindowBorderSize(this.#self, value);
  }
  /*
   *  Minimum window size. This is a global setting. If you want to constrain individual windows, use SetNextWindowSizeConstraints().
   */
  get WindowMinSize(): ImVec2 {
    const data = imgui.DImGuiGetWindowMinSize(this.#self);
    return new ImVec2(data);
  }
  set WindowMinSize(value: ImVec2) {
    imgui.DImGuiSetWindowMinSize(this.#self, value[BUFFER]);
  }
  /*
   *  Alignment for title bar text. Defaults to (0.0f,0.5f) for left-aligned,vertically centered.
   */
  get WindowTitleAlign(): ImVec2 {
    const data = imgui.DImGuiGetWindowTitleAlign(this.#self);
    return new ImVec2(data);
  }
  set WindowTitleAlign(value: ImVec2) {
    imgui.DImGuiSetWindowTitleAlign(this.#self, value[BUFFER]);
  }
  /*
   *  Side of the collapsing/docking button in the title bar (None/Left/Right). Defaults to ImGuiDir_Left.
   */
  get WindowMenuButtonPosition(): ImGuiDir {
    return imgui.DImGuiGetWindowMenuButtonPosition(this.#self);
  }
  set WindowMenuButtonPosition(value: ImGuiDir) {
    imgui.DImGuiSetWindowMenuButtonPosition(this.#self, value);
  }
  /*
   *  Radius of child window corners rounding. Set to 0.0f to have rectangular windows.
   */
  get ChildRounding(): number {
    return imgui.DImGuiGetChildRounding(this.#self);
  }
  set ChildRounding(value: number) {
    imgui.DImGuiSetChildRounding(this.#self, value);
  }
  /*
   *  Thickness of border around child windows. Generally set to 0.0f or 1.0f. (Other values are not well tested and more CPU/GPU costly).
   */
  get ChildBorderSize(): number {
    return imgui.DImGuiGetChildBorderSize(this.#self);
  }
  set ChildBorderSize(value: number) {
    imgui.DImGuiSetChildBorderSize(this.#self, value);
  }
  /*
   *  Radius of popup window corners rounding. (Note that tooltip windows use WindowRounding)
   */
  get PopupRounding(): number {
    return imgui.DImGuiGetPopupRounding(this.#self);
  }
  set PopupRounding(value: number) {
    imgui.DImGuiSetPopupRounding(this.#self, value);
  }
  /*
   *  Thickness of border around popup/tooltip windows. Generally set to 0.0f or 1.0f. (Other values are not well tested and more CPU/GPU costly).
   */
  get PopupBorderSize(): number {
    return imgui.DImGuiGetPopupBorderSize(this.#self);
  }
  set PopupBorderSize(value: number) {
    imgui.DImGuiSetPopupBorderSize(this.#self, value);
  }
  /*
   *  Padding within a framed rectangle (used by most widgets).
   */
  get FramePadding(): ImVec2 {
    const data = imgui.DImGuiGetFramePadding(this.#self);
    return new ImVec2(data);
  }
  set FramePadding(value: ImVec2) {
    imgui.DImGuiSetFramePadding(this.#self, value[BUFFER]);
  }
  /*
   *  Radius of frame corners rounding. Set to 0.0f to have rectangular frame (used by most widgets).
   */
  get FrameRounding(): number {
    return imgui.DImGuiGetFrameRounding(this.#self);
  }
  set FrameRounding(value: number) {
    imgui.DImGuiSetFrameRounding(this.#self, value);
  }
  /*
   *  Thickness of border around frames. Generally set to 0.0f or 1.0f. (Other values are not well tested and more CPU/GPU costly).
   */
  get FrameBorderSize(): number {
    return imgui.DImGuiGetFrameBorderSize(this.#self);
  }
  set FrameBorderSize(value: number) {
    imgui.DImGuiSetFrameBorderSize(this.#self, value);
  }
  /*
   *  Horizontal and vertical spacing between widgets/lines.
   */
  get ItemSpacing(): ImVec2 {
    const data = imgui.DImGuiGetItemSpacing(this.#self);
    return new ImVec2(data);
  }
  set ItemSpacing(value: ImVec2) {
    imgui.DImGuiSetItemSpacing(this.#self, value[BUFFER]);
  }
  /*
   *  Horizontal and vertical spacing between within elements of a composed widget (e.g. a slider and its label).
   */
  get ItemInnerSpacing(): ImVec2 {
    const data = imgui.DImGuiGetItemInnerSpacing(this.#self);
    return new ImVec2(data);
  }
  set ItemInnerSpacing(value: ImVec2) {
    imgui.DImGuiSetItemInnerSpacing(this.#self, value[BUFFER]);
  }
  /*
   *  Padding within a table cell
   */
  get CellPadding(): ImVec2 {
    const data = imgui.DImGuiGetCellPadding(this.#self);
    return new ImVec2(data);
  }
  set CellPadding(value: ImVec2) {
    imgui.DImGuiSetCellPadding(this.#self, value[BUFFER]);
  }
  /*
   *  Expand reactive bounding box for touch-based system where touch position is not accurate enough. Unfortunately we don't sort widgets so priority on overlap will always be given to the first widget. So don't grow this too much!
   */
  get TouchExtraPadding(): ImVec2 {
    const data = imgui.DImGuiGetTouchExtraPadding(this.#self);
    return new ImVec2(data);
  }
  set TouchExtraPadding(value: ImVec2) {
    imgui.DImGuiSetTouchExtraPadding(this.#self, value[BUFFER]);
  }
  /*
   *  Horizontal indentation when e.g. entering a tree node. Generally == (FontSize + FramePadding.x*2).
   */
  get IndentSpacing(): number {
    return imgui.DImGuiGetIndentSpacing(this.#self);
  }
  set IndentSpacing(value: number) {
    imgui.DImGuiSetIndentSpacing(this.#self, value);
  }
  /*
   *  Minimum horizontal spacing between two columns. Preferably > (FramePadding.x + 1).
   */
  get ColumnsMinSpacing(): number {
    return imgui.DImGuiGetColumnsMinSpacing(this.#self);
  }
  set ColumnsMinSpacing(value: number) {
    imgui.DImGuiSetColumnsMinSpacing(this.#self, value);
  }
  /*
   *  Width of the vertical scrollbar, Height of the horizontal scrollbar.
   */
  get ScrollbarSize(): number {
    return imgui.DImGuiGetScrollbarSize(this.#self);
  }
  set ScrollbarSize(value: number) {
    imgui.DImGuiSetScrollbarSize(this.#self, value);
  }
  /*
   *  Radius of grab corners for scrollbar.
   */
  get ScrollbarRounding(): number {
    return imgui.DImGuiGetScrollbarRounding(this.#self);
  }
  set ScrollbarRounding(value: number) {
    imgui.DImGuiSetScrollbarRounding(this.#self, value);
  }
  /*
   *  Minimum width/height of a grab box for slider/scrollbar.
   */
  get GrabMinSize(): number {
    return imgui.DImGuiGetGrabMinSize(this.#self);
  }
  set GrabMinSize(value: number) {
    imgui.DImGuiSetGrabMinSize(this.#self, value);
  }
  /*
   *  Radius of grabs corners rounding. Set to 0.0f to have rectangular slider grabs.
   */
  get GrabRounding(): number {
    return imgui.DImGuiGetGrabRounding(this.#self);
  }
  set GrabRounding(value: number) {
    imgui.DImGuiSetGrabRounding(this.#self, value);
  }
  /*
   *  The size in pixels of the dead-zone around zero on logarithmic sliders that cross zero.
   */
  get LogSliderDeadzone(): number {
    return imgui.DImGuiGetLogSliderDeadzone(this.#self);
  }
  set LogSliderDeadzone(value: number) {
    imgui.DImGuiSetLogSliderDeadzone(this.#self, value);
  }
  /*
   *  Radius of upper corners of a tab. Set to 0.0f to have rectangular tabs.
   */
  get TabRounding(): number {
    return imgui.DImGuiGetTabRounding(this.#self);
  }
  set TabRounding(value: number) {
    imgui.DImGuiSetTabRounding(this.#self, value);
  }
  /*
   *  Thickness of border around tabs.
   */
  get TabBorderSize(): number {
    return imgui.DImGuiGetTabBorderSize(this.#self);
  }
  set TabBorderSize(value: number) {
    imgui.DImGuiSetTabBorderSize(this.#self, value);
  }
  /*
   *  Minimum width for close button to appear on an unselected tab when hovered. Set to 0.0f to always show when hovering, set to FLT_MAX to never show close button unless selected.
   */
  get TabMinWidthForCloseButton(): number {
    return imgui.DImGuiGetTabMinWidthForCloseButton(this.#self);
  }
  set TabMinWidthForCloseButton(value: number) {
    imgui.DImGuiSetTabMinWidthForCloseButton(this.#self, value);
  }
  /*
   *  Side of the color button in the ColorEdit4 widget (left/right). Defaults to ImGuiDir_Right.
   */
  get ColorButtonPosition(): ImGuiDir {
    return imgui.DImGuiGetColorButtonPosition(this.#self);
  }
  set ColorButtonPosition(value: ImGuiDir) {
    imgui.DImGuiSetColorButtonPosition(this.#self, value);
  }
  /*
   *  Alignment of button text when button is larger than text. Defaults to (0.5f, 0.5f) (centered).
   */
  get ButtonTextAlign(): ImVec2 {
    const data = imgui.DImGuiGetButtonTextAlign(this.#self);
    return new ImVec2(data);
  }
  set ButtonTextAlign(value: ImVec2) {
    imgui.DImGuiSetButtonTextAlign(this.#self, value[BUFFER]);
  }
  /*
   *  Alignment of selectable text. Defaults to (0.0f, 0.0f) (top-left aligned). It's generally important to keep this left-aligned if you want to lay multiple items on a same line.
   */
  get SelectableTextAlign(): ImVec2 {
    const data = imgui.DImGuiGetSelectableTextAlign(this.#self);
    return new ImVec2(data);
  }
  set SelectableTextAlign(value: ImVec2) {
    imgui.DImGuiSetSelectableTextAlign(this.#self, value[BUFFER]);
  }
  /*
   *  Window position are clamped to be visible within the display area or monitors by at least this amount. Only applies to regular windows.
   */
  get DisplayWindowPadding(): ImVec2 {
    const data = imgui.DImGuiGetDisplayWindowPadding(this.#self);
    return new ImVec2(data);
  }
  set DisplayWindowPadding(value: ImVec2) {
    imgui.DImGuiSetDisplayWindowPadding(this.#self, value[BUFFER]);
  }
  /*
   *  If you cannot see the edges of your screen (e.g. on a TV) increase the safe area padding. Apply to popups/tooltips as well regular windows. NB: Prefer configuring your TV sets correctly!
   */
  get DisplaySafeAreaPadding(): ImVec2 {
    const data = imgui.DImGuiGetDisplaySafeAreaPadding(this.#self);
    return new ImVec2(data);
  }
  set DisplaySafeAreaPadding(value: ImVec2) {
    imgui.DImGuiSetDisplaySafeAreaPadding(this.#self, value[BUFFER]);
  }
  /*
   *  Scale software rendered mouse cursor (when io.MouseDrawCursor is enabled). We apply per-monitor DPI scaling over this scale. May be removed later.
   */
  get MouseCursorScale(): number {
    return imgui.DImGuiGetMouseCursorScale(this.#self);
  }
  set MouseCursorScale(value: number) {
    imgui.DImGuiSetMouseCursorScale(this.#self, value);
  }
  /*
   *  Enable anti-aliased lines/borders. Disable if you are really tight on CPU/GPU. Latched at the beginning of the frame (copied to ImDrawList).
   */
  get AntiAliasedLines(): boolean {
    return imgui.DImGuiGetAntiAliasedLines(this.#self);
  }
  set AntiAliasedLines(value: boolean) {
    imgui.DImGuiSetAntiAliasedLines(this.#self, value);
  }
  /*
   *  Enable anti-aliased lines/borders using textures where possible. Require backend to render with bilinear filtering (NOT point/nearest filtering). Latched at the beginning of the frame (copied to ImDrawList).
   */
  get AntiAliasedLinesUseTex(): boolean {
    return imgui.DImGuiGetAntiAliasedLinesUseTex(this.#self);
  }
  set AntiAliasedLinesUseTex(value: boolean) {
    imgui.DImGuiSetAntiAliasedLinesUseTex(this.#self, value);
  }
  /*
   *  Enable anti-aliased edges around filled shapes (rounded rectangles, circles, etc.). Disable if you are really tight on CPU/GPU. Latched at the beginning of the frame (copied to ImDrawList).
   */
  get AntiAliasedFill(): boolean {
    return imgui.DImGuiGetAntiAliasedFill(this.#self);
  }
  set AntiAliasedFill(value: boolean) {
    imgui.DImGuiSetAntiAliasedFill(this.#self, value);
  }
  /*
   *  Tessellation tolerance when using PathBezierCurveTo() without a specific number of segments. Decrease for highly tessellated curves (higher quality, more polygons), increase to reduce quality.
   */
  get CurveTessellationTol(): number {
    return imgui.DImGuiGetCurveTessellationTol(this.#self);
  }
  set CurveTessellationTol(value: number) {
    imgui.DImGuiSetCurveTessellationTol(this.#self, value);
  }
  /*
   *  Maximum error (in pixels) allowed when using AddCircle()/AddCircleFilled() or drawing rounded corner rectangles with no explicit segment count specified. Decrease for higher quality but more geometry.
   */
  get CircleTessellationMaxError(): number {
    return imgui.DImGuiGetCircleTessellationMaxError(this.#self);
  }
  set CircleTessellationMaxError(value: number) {
    imgui.DImGuiSetCircleTessellationMaxError(this.#self, value);
  }
}

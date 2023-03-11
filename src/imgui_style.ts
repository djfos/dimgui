import { ImGuiDir } from "./enum.ts";
import { ImVec2 } from "./type.ts";
import { ffi as imgui } from "./ffi.ts";

/**
 * Runtime data for styling/colors
 */
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
    return imgui.DImGuiStyleGetAlpha(this.#self);
  }
  set Alpha(value: number) {
    imgui.DImGuiStyleSetAlpha(this.#self, value);
  }
  /*
   *  Additional alpha multiplier applied by BeginDisabled(). Multiply over current value of Alpha.
   */
  get DisabledAlpha(): number {
    return imgui.DImGuiStyleGetDisabledAlpha(this.#self);
  }
  set DisabledAlpha(value: number) {
    imgui.DImGuiStyleSetDisabledAlpha(this.#self, value);
  }
  /*
   *  Padding within a window.
   */
  get WindowPadding(): ImVec2 {
    const data = imgui.DImGuiStyleGetWindowPadding(this.#self);
    return new ImVec2(data);
  }
  set WindowPadding(value: ImVec2) {
    imgui.DImGuiStyleSetWindowPadding(this.#self, value.buffer);
  }
  /*
   *  Radius of window corners rounding. Set to 0.0f to have rectangular windows. Large values tend to lead to variety of artifacts and are not recommended.
   */
  get WindowRounding(): number {
    return imgui.DImGuiStyleGetWindowRounding(this.#self);
  }
  set WindowRounding(value: number) {
    imgui.DImGuiStyleSetWindowRounding(this.#self, value);
  }
  /*
   *  Thickness of border around windows. Generally set to 0.0f or 1.0f. (Other values are not well tested and more CPU/GPU costly).
   */
  get WindowBorderSize(): number {
    return imgui.DImGuiStyleGetWindowBorderSize(this.#self);
  }
  set WindowBorderSize(value: number) {
    imgui.DImGuiStyleSetWindowBorderSize(this.#self, value);
  }
  /*
   *  Minimum window size. This is a global setting. If you want to rain individual windows, use SetNextWindowSizeConstraints().
   */
  get WindowMinSize(): ImVec2 {
    const data = imgui.DImGuiStyleGetWindowMinSize(this.#self);
    return new ImVec2(data);
  }
  set WindowMinSize(value: ImVec2) {
    imgui.DImGuiStyleSetWindowMinSize(this.#self, value.buffer);
  }
  /*
   *  Alignment for title bar text. Defaults to (0.0f,0.5f) for left-aligned,vertically centered.
   */
  get WindowTitleAlign(): ImVec2 {
    const data = imgui.DImGuiStyleGetWindowTitleAlign(this.#self);
    return new ImVec2(data);
  }
  set WindowTitleAlign(value: ImVec2) {
    imgui.DImGuiStyleSetWindowTitleAlign(this.#self, value.buffer);
  }
  /*
   *  Side of the collapsing/docking button in the title bar (None/Left/Right). Defaults to ImGuiDir_Left.
   */
  get WindowMenuButtonPosition(): ImGuiDir {
    return imgui.DImGuiStyleGetWindowMenuButtonPosition(this.#self);
  }
  set WindowMenuButtonPosition(value: ImGuiDir) {
    imgui.DImGuiStyleSetWindowMenuButtonPosition(this.#self, value);
  }
  /*
   *  Radius of child window corners rounding. Set to 0.0f to have rectangular windows.
   */
  get ChildRounding(): number {
    return imgui.DImGuiStyleGetChildRounding(this.#self);
  }
  set ChildRounding(value: number) {
    imgui.DImGuiStyleSetChildRounding(this.#self, value);
  }
  /*
   *  Thickness of border around child windows. Generally set to 0.0f or 1.0f. (Other values are not well tested and more CPU/GPU costly).
   */
  get ChildBorderSize(): number {
    return imgui.DImGuiStyleGetChildBorderSize(this.#self);
  }
  set ChildBorderSize(value: number) {
    imgui.DImGuiStyleSetChildBorderSize(this.#self, value);
  }
  /*
   *  Radius of popup window corners rounding. (Note that tooltip windows use WindowRounding)
   */
  get PopupRounding(): number {
    return imgui.DImGuiStyleGetPopupRounding(this.#self);
  }
  set PopupRounding(value: number) {
    imgui.DImGuiStyleSetPopupRounding(this.#self, value);
  }
  /*
   *  Thickness of border around popup/tooltip windows. Generally set to 0.0f or 1.0f. (Other values are not well tested and more CPU/GPU costly).
   */
  get PopupBorderSize(): number {
    return imgui.DImGuiStyleGetPopupBorderSize(this.#self);
  }
  set PopupBorderSize(value: number) {
    imgui.DImGuiStyleSetPopupBorderSize(this.#self, value);
  }
  /*
   *  Padding within a framed rectangle (used by most widgets).
   */
  get FramePadding(): ImVec2 {
    const data = imgui.DImGuiStyleGetFramePadding(this.#self);
    return new ImVec2(data);
  }
  set FramePadding(value: ImVec2) {
    imgui.DImGuiStyleSetFramePadding(this.#self, value.buffer);
  }
  /*
   *  Radius of frame corners rounding. Set to 0.0f to have rectangular frame (used by most widgets).
   */
  get FrameRounding(): number {
    return imgui.DImGuiStyleGetFrameRounding(this.#self);
  }
  set FrameRounding(value: number) {
    imgui.DImGuiStyleSetFrameRounding(this.#self, value);
  }
  /*
   *  Thickness of border around frames. Generally set to 0.0f or 1.0f. (Other values are not well tested and more CPU/GPU costly).
   */
  get FrameBorderSize(): number {
    return imgui.DImGuiStyleGetFrameBorderSize(this.#self);
  }
  set FrameBorderSize(value: number) {
    imgui.DImGuiStyleSetFrameBorderSize(this.#self, value);
  }
  /*
   *  Horizontal and vertical spacing between widgets/lines.
   */
  get ItemSpacing(): ImVec2 {
    const data = imgui.DImGuiStyleGetItemSpacing(this.#self);
    return new ImVec2(data);
  }
  set ItemSpacing(value: ImVec2) {
    imgui.DImGuiStyleSetItemSpacing(this.#self, value.buffer);
  }
  /*
   *  Horizontal and vertical spacing between within elements of a composed widget (e.g. a slider and its label).
   */
  get ItemInnerSpacing(): ImVec2 {
    const data = imgui.DImGuiStyleGetItemInnerSpacing(this.#self);
    return new ImVec2(data);
  }
  set ItemInnerSpacing(value: ImVec2) {
    imgui.DImGuiStyleSetItemInnerSpacing(this.#self, value.buffer);
  }
  /*
   *  Padding within a table cell
   */
  get CellPadding(): ImVec2 {
    const data = imgui.DImGuiStyleGetCellPadding(this.#self);
    return new ImVec2(data);
  }
  set CellPadding(value: ImVec2) {
    imgui.DImGuiStyleSetCellPadding(this.#self, value.buffer);
  }
  /*
   *  Expand reactive bounding box for touch-based system where touch position is not accurate enough. Unfortunately we don't sort widgets so priority on overlap will always be given to the first widget. So don't grow this too much!
   */
  get TouchExtraPadding(): ImVec2 {
    const data = imgui.DImGuiStyleGetTouchExtraPadding(this.#self);
    return new ImVec2(data);
  }
  set TouchExtraPadding(value: ImVec2) {
    imgui.DImGuiStyleSetTouchExtraPadding(this.#self, value.buffer);
  }
  /*
   *  Horizontal indentation when e.g. entering a tree node. Generally == (FontSize + FramePadding.x*2).
   */
  get IndentSpacing(): number {
    return imgui.DImGuiStyleGetIndentSpacing(this.#self);
  }
  set IndentSpacing(value: number) {
    imgui.DImGuiStyleSetIndentSpacing(this.#self, value);
  }
  /*
   *  Minimum horizontal spacing between two columns. Preferably > (FramePadding.x + 1).
   */
  get ColumnsMinSpacing(): number {
    return imgui.DImGuiStyleGetColumnsMinSpacing(this.#self);
  }
  set ColumnsMinSpacing(value: number) {
    imgui.DImGuiStyleSetColumnsMinSpacing(this.#self, value);
  }
  /*
   *  Width of the vertical scrollbar, Height of the horizontal scrollbar.
   */
  get ScrollbarSize(): number {
    return imgui.DImGuiStyleGetScrollbarSize(this.#self);
  }
  set ScrollbarSize(value: number) {
    imgui.DImGuiStyleSetScrollbarSize(this.#self, value);
  }
  /*
   *  Radius of grab corners for scrollbar.
   */
  get ScrollbarRounding(): number {
    return imgui.DImGuiStyleGetScrollbarRounding(this.#self);
  }
  set ScrollbarRounding(value: number) {
    imgui.DImGuiStyleSetScrollbarRounding(this.#self, value);
  }
  /*
   *  Minimum width/height of a grab box for slider/scrollbar.
   */
  get GrabMinSize(): number {
    return imgui.DImGuiStyleGetGrabMinSize(this.#self);
  }
  set GrabMinSize(value: number) {
    imgui.DImGuiStyleSetGrabMinSize(this.#self, value);
  }
  /*
   *  Radius of grabs corners rounding. Set to 0.0f to have rectangular slider grabs.
   */
  get GrabRounding(): number {
    return imgui.DImGuiStyleGetGrabRounding(this.#self);
  }
  set GrabRounding(value: number) {
    imgui.DImGuiStyleSetGrabRounding(this.#self, value);
  }
  /*
   *  The size in pixels of the dead-zone around zero on logarithmic sliders that cross zero.
   */
  get LogSliderDeadzone(): number {
    return imgui.DImGuiStyleGetLogSliderDeadzone(this.#self);
  }
  set LogSliderDeadzone(value: number) {
    imgui.DImGuiStyleSetLogSliderDeadzone(this.#self, value);
  }
  /*
   *  Radius of upper corners of a tab. Set to 0.0f to have rectangular tabs.
   */
  get TabRounding(): number {
    return imgui.DImGuiStyleGetTabRounding(this.#self);
  }
  set TabRounding(value: number) {
    imgui.DImGuiStyleSetTabRounding(this.#self, value);
  }
  /*
   *  Thickness of border around tabs.
   */
  get TabBorderSize(): number {
    return imgui.DImGuiStyleGetTabBorderSize(this.#self);
  }
  set TabBorderSize(value: number) {
    imgui.DImGuiStyleSetTabBorderSize(this.#self, value);
  }
  /*
   *  Minimum width for close button to appear on an unselected tab when hovered. Set to 0.0f to always show when hovering, set to FLT_MAX to never show close button unless selected.
   */
  get TabMinWidthForCloseButton(): number {
    return imgui.DImGuiStyleGetTabMinWidthForCloseButton(this.#self);
  }
  set TabMinWidthForCloseButton(value: number) {
    imgui.DImGuiStyleSetTabMinWidthForCloseButton(this.#self, value);
  }
  /*
   *  Side of the color button in the ColorEdit4 widget (left/right). Defaults to ImGuiDir_Right.
   */
  get ColorButtonPosition(): ImGuiDir {
    return imgui.DImGuiStyleGetColorButtonPosition(this.#self);
  }
  set ColorButtonPosition(value: ImGuiDir) {
    imgui.DImGuiStyleSetColorButtonPosition(this.#self, value);
  }
  /*
   *  Alignment of button text when button is larger than text. Defaults to (0.5f, 0.5f) (centered).
   */
  get ButtonTextAlign(): ImVec2 {
    const data = imgui.DImGuiStyleGetButtonTextAlign(this.#self);
    return new ImVec2(data);
  }
  set ButtonTextAlign(value: ImVec2) {
    imgui.DImGuiStyleSetButtonTextAlign(this.#self, value.buffer);
  }
  /*
   *  Alignment of selectable text. Defaults to (0.0f, 0.0f) (top-left aligned). It's generally important to keep this left-aligned if you want to lay multiple items on a same line.
   */
  get SelectableTextAlign(): ImVec2 {
    const data = imgui.DImGuiStyleGetSelectableTextAlign(this.#self);
    return new ImVec2(data);
  }
  set SelectableTextAlign(value: ImVec2) {
    imgui.DImGuiStyleSetSelectableTextAlign(this.#self, value.buffer);
  }
  /*
   *  Window position are clamped to be visible within the display area or monitors by at least this amount. Only applies to regular windows.
   */
  get DisplayWindowPadding(): ImVec2 {
    const data = imgui.DImGuiStyleGetDisplayWindowPadding(this.#self);
    return new ImVec2(data);
  }
  set DisplayWindowPadding(value: ImVec2) {
    imgui.DImGuiStyleSetDisplayWindowPadding(this.#self, value.buffer);
  }
  /*
   *  If you cannot see the edges of your screen (e.g. on a TV) increase the safe area padding. Apply to popups/tooltips as well regular windows. NB: Prefer configuring your TV sets correctly!
   */
  get DisplaySafeAreaPadding(): ImVec2 {
    const data = imgui.DImGuiStyleGetDisplaySafeAreaPadding(this.#self);
    return new ImVec2(data);
  }
  set DisplaySafeAreaPadding(value: ImVec2) {
    imgui.DImGuiStyleSetDisplaySafeAreaPadding(this.#self, value.buffer);
  }
  /*
   *  Scale software rendered mouse cursor (when io.MouseDrawCursor is enabled). We apply per-monitor DPI scaling over this scale. May be removed later.
   */
  get MouseCursorScale(): number {
    return imgui.DImGuiStyleGetMouseCursorScale(this.#self);
  }
  set MouseCursorScale(value: number) {
    imgui.DImGuiStyleSetMouseCursorScale(this.#self, value);
  }
  /*
   *  Enable anti-aliased lines/borders. Disable if you are really tight on CPU/GPU. Latched at the beginning of the frame (copied to ImDrawList).
   */
  get AntiAliasedLines(): boolean {
    return imgui.DImGuiStyleGetAntiAliasedLines(this.#self);
  }
  set AntiAliasedLines(value: boolean) {
    imgui.DImGuiStyleSetAntiAliasedLines(this.#self, value);
  }
  /*
   *  Enable anti-aliased lines/borders using textures where possible. Require backend to render with bilinear filtering (NOT point/nearest filtering). Latched at the beginning of the frame (copied to ImDrawList).
   */
  get AntiAliasedLinesUseTex(): boolean {
    return imgui.DImGuiStyleGetAntiAliasedLinesUseTex(this.#self);
  }
  set AntiAliasedLinesUseTex(value: boolean) {
    imgui.DImGuiStyleSetAntiAliasedLinesUseTex(this.#self, value);
  }
  /*
   *  Enable anti-aliased edges around filled shapes (rounded rectangles, circles, etc.). Disable if you are really tight on CPU/GPU. Latched at the beginning of the frame (copied to ImDrawList).
   */
  get AntiAliasedFill(): boolean {
    return imgui.DImGuiStyleGetAntiAliasedFill(this.#self);
  }
  set AntiAliasedFill(value: boolean) {
    imgui.DImGuiStyleSetAntiAliasedFill(this.#self, value);
  }
  /*
   *  Tessellation tolerance when using PathBezierCurveTo() without a specific number of segments. Decrease for highly tessellated curves (higher quality, more polygons), increase to reduce quality.
   */
  get CurveTessellationTol(): number {
    return imgui.DImGuiStyleGetCurveTessellationTol(this.#self);
  }
  set CurveTessellationTol(value: number) {
    imgui.DImGuiStyleSetCurveTessellationTol(this.#self, value);
  }
  /*
   *  Maximum error (in pixels) allowed when using AddCircle()/AddCircleFilled() or drawing rounded corner rectangles with no explicit segment count specified. Decrease for higher quality but more geometry.
   */
  get CircleTessellationMaxError(): number {
    return imgui.DImGuiStyleGetCircleTessellationMaxError(this.#self);
  }
  set CircleTessellationMaxError(value: number) {
    imgui.DImGuiStyleSetCircleTessellationMaxError(this.#self, value);
  }
}

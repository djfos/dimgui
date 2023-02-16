// export function createContext(shared_font_atlas: ImFontAtlas): ImGuiContext {
//   return imgui.igCreateContext(shared_font_atlas);
// }
// export function destroyContext(ctx: ImGuiContext): void {
//    imgui.igDestroyContext(ctx);
// }
// export function getCurrentContext(): ImGuiContext {
//   return imgui.igGetCurrentContext();
// }
// export function setCurrentContext(ctx: ImGuiContext): void {
//    imgui.igSetCurrentContext(ctx);
// }
// export function getIO(): ImGuiIO {
//   return imgui.igGetIO();
// }
// export function getStyle(): ImGuiStyle {
//   return imgui.igGetStyle();
// }
// export function newFrame(): void {
//    imgui.igNewFrame();
// }
// export function endFrame(): void {
//    imgui.igEndFrame();
// }
// export function render(): void {
//    imgui.igRender();
// }
// export function getDrawData(): ImDrawData {
//   return imgui.igGetDrawData();
// }
// export function showDemoWindow(open: CBool | null = null): void {
//    imgui.igShowDemoWindow(open ? open[BUFFER] : null);
// }
// export function showMetricsWindow(open: CBool | null = null): void {
//    imgui.igShowMetricsWindow(open ? open[BUFFER] : null);
// }
// export function showDebugLogWindow(open: CBool | null = null): void {
//    imgui.igShowDebugLogWindow(open ? open[BUFFER] : null);
// }
// export function showStackToolWindow(open: CBool | null = null): void {
//    imgui.igShowStackToolWindow(open ? open[BUFFER] : null);
// }
// export function showAboutWindow(open: CBool | null = null): void {
//    imgui.igShowAboutWindow(open ? open[BUFFER] : null);
// }
// export function showStyleEditor(ref: ImGuiStyle): void {
//    imgui.igShowStyleEditor(ref);
// }
// export function showStyleSelector(label: string): boolean {
//   return imgui.igShowStyleSelector(cString(label));
// }
// export function showFontSelector(label: string): void {
//    imgui.igShowFontSelector(cString(label));
// }
// export function showUserGuide(): void {
//    imgui.igShowUserGuide();
// }
// export function getVersion(): string {
//   return imgui.igGetVersion();
// }
// export function styleColorsDark(dst: ImGuiStyle): void {
//    imgui.igStyleColorsDark(dst);
// }
// export function styleColorsLight(dst: ImGuiStyle): void {
//    imgui.igStyleColorsLight(dst);
// }
// export function styleColorsClassic(dst: ImGuiStyle): void {
//    imgui.igStyleColorsClassic(dst);
// }
// export function begin(name: string, open: CBool | null = null, flags: ImGuiWindowFlags): boolean {
//   return imgui.igBegin(cString(name), open ? open[BUFFER] : null, flags);
// }
// export function end(): void {
//    imgui.igEnd();
// }
// export function beginChild_Str(str_id: string, size: ImVec2, border: boolean, flags: ImGuiWindowFlags): boolean {
//   return imgui.igBeginChild_Str(cString(str_id), size[BUFFER], border, flags);
// }
// export function beginChild_ID(id: ImGuiID, size: ImVec2, border: boolean, flags: ImGuiWindowFlags): boolean {
//   return imgui.igBeginChild_ID(id, size[BUFFER], border, flags);
// }
// export function endChild(): void {
//    imgui.igEndChild();
// }
// export function isWindowAppearing(): boolean {
//   return imgui.igIsWindowAppearing();
// }
// export function isWindowCollapsed(): boolean {
//   return imgui.igIsWindowCollapsed();
// }
// export function isWindowFocused(flags: ImGuiFocusedFlags): boolean {
//   return imgui.igIsWindowFocused(flags);
// }
// export function isWindowHovered(flags: ImGuiHoveredFlags): boolean {
//   return imgui.igIsWindowHovered(flags);
// }
// export function getWindowDrawList(): ImDrawList {
//   return imgui.igGetWindowDrawList();
// }
// export function getWindowDpiScale(): number {
//   return imgui.igGetWindowDpiScale();
// }
// export function getWindowPos(*pOut: ImVec2): void {
//    imgui.igGetWindowPos(*pOut[BUFFER]);
// }
// export function getWindowSize(*pOut: ImVec2): void {
//    imgui.igGetWindowSize(*pOut[BUFFER]);
// }
// export function getWindowWidth(): number {
//   return imgui.igGetWindowWidth();
// }
// export function getWindowHeight(): number {
//   return imgui.igGetWindowHeight();
// }
// export function getWindowViewport(): ImGuiViewport {
//   return imgui.igGetWindowViewport();
// }
// export function setNextWindowPos(pos: ImVec2, cond: ImGuiCond, pivot: ImVec2): void {
//    imgui.igSetNextWindowPos(pos[BUFFER], cond, pivot[BUFFER]);
// }
// export function setNextWindowSize(size: ImVec2, cond: ImGuiCond): void {
//    imgui.igSetNextWindowSize(size[BUFFER], cond);
// }
// export function setNextWindowSizeConstraints(size_min: ImVec2, size_max: ImVec2, custom_callback: ImGuiSizeCallback, custom_callback_data: ArrayBuffer): void {
//    imgui.igSetNextWindowSizeConstraints(size_min[BUFFER], size_max[BUFFER], custom_callback.pointer, custom_callback_data);
// }
// export function setNextWindowContentSize(size: ImVec2): void {
//    imgui.igSetNextWindowContentSize(size[BUFFER]);
// }
// export function setNextWindowCollapsed(collapsed: boolean, cond: ImGuiCond): void {
//    imgui.igSetNextWindowCollapsed(collapsed, cond);
// }
// export function setNextWindowFocus(): void {
//    imgui.igSetNextWindowFocus();
// }
// export function setNextWindowScroll(scroll: ImVec2): void {
//    imgui.igSetNextWindowScroll(scroll[BUFFER]);
// }
// export function setNextWindowBgAlpha(alpha: number): void {
//    imgui.igSetNextWindowBgAlpha(alpha);
// }
// export function setNextWindowViewport(viewport_id: ImGuiID): void {
//    imgui.igSetNextWindowViewport(viewport_id);
// }
// export function setWindowPos_Vec2(pos: ImVec2, cond: ImGuiCond): void {
//    imgui.igSetWindowPos_Vec2(pos[BUFFER], cond);
// }
// export function setWindowSize_Vec2(size: ImVec2, cond: ImGuiCond): void {
//    imgui.igSetWindowSize_Vec2(size[BUFFER], cond);
// }
// export function setWindowCollapsed_Bool(collapsed: boolean, cond: ImGuiCond): void {
//    imgui.igSetWindowCollapsed_Bool(collapsed, cond);
// }
// export function setWindowFocus_Nil(): void {
//    imgui.igSetWindowFocus_Nil();
// }
// export function setWindowFontScale(scale: number): void {
//    imgui.igSetWindowFontScale(scale);
// }
// export function setWindowPos_Str(name: string, pos: ImVec2, cond: ImGuiCond): void {
//    imgui.igSetWindowPos_Str(cString(name), pos[BUFFER], cond);
// }
// export function setWindowSize_Str(name: string, size: ImVec2, cond: ImGuiCond): void {
//    imgui.igSetWindowSize_Str(cString(name), size[BUFFER], cond);
// }
// export function setWindowCollapsed_Str(name: string, collapsed: boolean, cond: ImGuiCond): void {
//    imgui.igSetWindowCollapsed_Str(cString(name), collapsed, cond);
// }
// export function setWindowFocus_Str(name: string): void {
//    imgui.igSetWindowFocus_Str(cString(name));
// }
// export function getContentRegionAvail(*pOut: ImVec2): void {
//    imgui.igGetContentRegionAvail(*pOut[BUFFER]);
// }
// export function getContentRegionMax(*pOut: ImVec2): void {
//    imgui.igGetContentRegionMax(*pOut[BUFFER]);
// }
// export function getWindowContentRegionMin(*pOut: ImVec2): void {
//    imgui.igGetWindowContentRegionMin(*pOut[BUFFER]);
// }
// export function getWindowContentRegionMax(*pOut: ImVec2): void {
//    imgui.igGetWindowContentRegionMax(*pOut[BUFFER]);
// }
// export function getScrollX(): number {
//   return imgui.igGetScrollX();
// }
// export function getScrollY(): number {
//   return imgui.igGetScrollY();
// }
// export function setScrollX_Float(scroll_x: number): void {
//    imgui.igSetScrollX_Float(scroll_x);
// }
// export function setScrollY_Float(scroll_y: number): void {
//    imgui.igSetScrollY_Float(scroll_y);
// }
// export function getScrollMaxX(): number {
//   return imgui.igGetScrollMaxX();
// }
// export function getScrollMaxY(): number {
//   return imgui.igGetScrollMaxY();
// }
// export function setScrollHereX(center_x_ratio: number): void {
//    imgui.igSetScrollHereX(center_x_ratio);
// }
// export function setScrollHereY(center_y_ratio: number): void {
//    imgui.igSetScrollHereY(center_y_ratio);
// }
// export function setScrollFromPosX_Float(local_x: number, center_x_ratio: number): void {
//    imgui.igSetScrollFromPosX_Float(local_x, center_x_ratio);
// }
// export function setScrollFromPosY_Float(local_y: number, center_y_ratio: number): void {
//    imgui.igSetScrollFromPosY_Float(local_y, center_y_ratio);
// }
// export function pushFont(font: ImFont): void {
//    imgui.igPushFont(font);
// }
// export function popFont(): void {
//    imgui.igPopFont();
// }
// export function pushStyleColor_U32(idx: ImGuiCol, col: ImU32): void {
//    imgui.igPushStyleColor_U32(idx, col);
// }
// export function pushStyleColor_Vec4(idx: ImGuiCol, col: ImVec4): void {
//    imgui.igPushStyleColor_Vec4(idx, col[BUFFER]);
// }
// export function popStyleColor(count: number): void {
//    imgui.igPopStyleColor(count);
// }
// export function pushStyleVar_Float(idx: ImGuiStyleVar, val: number): void {
//    imgui.igPushStyleVar_Float(idx, val);
// }
// export function pushStyleVar_Vec2(idx: ImGuiStyleVar, val: ImVec2): void {
//    imgui.igPushStyleVar_Vec2(idx, val[BUFFER]);
// }
// export function popStyleVar(count: number): void {
//    imgui.igPopStyleVar(count);
// }
// export function pushAllowKeyboardFocus(allow_keyboard_focus: boolean): void {
//    imgui.igPushAllowKeyboardFocus(allow_keyboard_focus);
// }
// export function popAllowKeyboardFocus(): void {
//    imgui.igPopAllowKeyboardFocus();
// }
// export function pushButtonRepeat(repeat: boolean): void {
//    imgui.igPushButtonRepeat(repeat);
// }
// export function popButtonRepeat(): void {
//    imgui.igPopButtonRepeat();
// }
// export function pushItemWidth(item_width: number): void {
//    imgui.igPushItemWidth(item_width);
// }
// export function popItemWidth(): void {
//    imgui.igPopItemWidth();
// }
// export function setNextItemWidth(item_width: number): void {
//    imgui.igSetNextItemWidth(item_width);
// }
// export function calcItemWidth(): number {
//   return imgui.igCalcItemWidth();
// }
// export function pushTextWrapPos(wrap_local_pos_x: number): void {
//    imgui.igPushTextWrapPos(wrap_local_pos_x);
// }
// export function popTextWrapPos(): void {
//    imgui.igPopTextWrapPos();
// }
// export function getFont(): ImFont {
//   return imgui.igGetFont();
// }
// export function getFontSize(): number {
//   return imgui.igGetFontSize();
// }
// export function getFontTexUvWhitePixel(*pOut: ImVec2): void {
//    imgui.igGetFontTexUvWhitePixel(*pOut[BUFFER]);
// }
// export function getColorU32_Col(idx: ImGuiCol, alpha_mul: number): ImU32 {
//   return imgui.igGetColorU32_Col(idx, alpha_mul);
// }
// export function getColorU32_Vec4(col: ImVec4): ImU32 {
//   return imgui.igGetColorU32_Vec4(col[BUFFER]);
// }
// export function getColorU32_U32(col: ImU32): ImU32 {
//   return imgui.igGetColorU32_U32(col);
// }
// export function getStyleColorVec4(idx: ImGuiCol): ImVec4 {
//   return imgui.igGetStyleColorVec4(idx);
// }
// export function separator(): void {
//    imgui.igSeparator();
// }
// export function sameLine(offset_from_start_x: number, spacing: number): void {
//    imgui.igSameLine(offset_from_start_x, spacing);
// }
// export function newLine(): void {
//    imgui.igNewLine();
// }
// export function spacing(): void {
//    imgui.igSpacing();
// }
// export function dummy(size: ImVec2): void {
//    imgui.igDummy(size[BUFFER]);
// }
// export function indent(indent_w: number): void {
//    imgui.igIndent(indent_w);
// }
// export function unindent(indent_w: number): void {
//    imgui.igUnindent(indent_w);
// }
// export function beginGroup(): void {
//    imgui.igBeginGroup();
// }
// export function endGroup(): void {
//    imgui.igEndGroup();
// }
// export function getCursorPos(*pOut: ImVec2): void {
//    imgui.igGetCursorPos(*pOut[BUFFER]);
// }
// export function getCursorPosX(): number {
//   return imgui.igGetCursorPosX();
// }
// export function getCursorPosY(): number {
//   return imgui.igGetCursorPosY();
// }
// export function setCursorPos(local_pos: ImVec2): void {
//    imgui.igSetCursorPos(local_pos[BUFFER]);
// }
// export function setCursorPosX(local_x: number): void {
//    imgui.igSetCursorPosX(local_x);
// }
// export function setCursorPosY(local_y: number): void {
//    imgui.igSetCursorPosY(local_y);
// }
// export function getCursorStartPos(*pOut: ImVec2): void {
//    imgui.igGetCursorStartPos(*pOut[BUFFER]);
// }
// export function getCursorScreenPos(*pOut: ImVec2): void {
//    imgui.igGetCursorScreenPos(*pOut[BUFFER]);
// }
// export function setCursorScreenPos(pos: ImVec2): void {
//    imgui.igSetCursorScreenPos(pos[BUFFER]);
// }
// export function alignTextToFramePadding(): void {
//    imgui.igAlignTextToFramePadding();
// }
// export function getTextLineHeight(): number {
//   return imgui.igGetTextLineHeight();
// }
// export function getTextLineHeightWithSpacing(): number {
//   return imgui.igGetTextLineHeightWithSpacing();
// }
// export function getFrameHeight(): number {
//   return imgui.igGetFrameHeight();
// }
// export function getFrameHeightWithSpacing(): number {
//   return imgui.igGetFrameHeightWithSpacing();
// }
// export function pushID_Str(str_id: string): void {
//    imgui.igPushID_Str(cString(str_id));
// }
// export function pushID_StrStr(str_id_begin: string, str_id_end: string): void {
//    imgui.igPushID_StrStr(cString(str_id_begin), cString(str_id_end));
// }
// export function pushID_Ptr(ptr_id: ArrayBuffer): void {
//    imgui.igPushID_Ptr(ptr_id);
// }
// export function pushID_Int(int_id: number): void {
//    imgui.igPushID_Int(int_id);
// }
// export function popID(): void {
//    imgui.igPopID();
// }
// export function getID_Str(str_id: string): ImGuiID {
//   return imgui.igGetID_Str(cString(str_id));
// }
// export function getID_StrStr(str_id_begin: string, str_id_end: string): ImGuiID {
//   return imgui.igGetID_StrStr(cString(str_id_begin), cString(str_id_end));
// }
// export function getID_Ptr(ptr_id: ArrayBuffer): ImGuiID {
//   return imgui.igGetID_Ptr(ptr_id);
// }
// export function textUnformatted(text: string, text_end: string): void {
//    imgui.igTextUnformatted(cString(text), cString(text_end));
// }
// export function button(label: string, size: ImVec2): boolean {
//   return imgui.igButton(cString(label), size[BUFFER]);
// }
// export function smallButton(label: string): boolean {
//   return imgui.igSmallButton(cString(label));
// }
// export function invisibleButton(str_id: string, size: ImVec2, flags: ImGuiButtonFlags): boolean {
//   return imgui.igInvisibleButton(cString(str_id), size[BUFFER], flags);
// }
// export function arrowButton(str_id: string, dir: ImGuiDir): boolean {
//   return imgui.igArrowButton(cString(str_id), dir);
// }
// export function checkbox(label: string, v: CBool | null = null): boolean {
//   return imgui.igCheckbox(cString(label), v ? v[BUFFER] : null);
// }
// export function checkboxFlags_IntPtr(label: string, flags: Int32Array, flags_value: number): boolean {
//   return imgui.igCheckboxFlags_IntPtr(cString(label), flags, flags_value);
// }
// export function checkboxFlags_UintPtr(label: string, flags: unsigned int, flags_value: number): boolean {
//   return imgui.igCheckboxFlags_UintPtr(cString(label), flags, flags_value);
// }
// export function radioButton_Bool(label: string, active: boolean): boolean {
//   return imgui.igRadioButton_Bool(cString(label), active);
// }
// export function radioButton_IntPtr(label: string, v: Int32Array, v_button: number): boolean {
//   return imgui.igRadioButton_IntPtr(cString(label), v, v_button);
// }
// export function progressBar(fraction: number, size_arg: ImVec2, overlay: string): void {
//    imgui.igProgressBar(fraction, size_arg[BUFFER], cString(overlay));
// }
// export function bullet(): void {
//    imgui.igBullet();
// }
// export function image(user_texture_id: ImTextureID, size: ImVec2, uv0: ImVec2, uv1: ImVec2, tint_col: ImVec4, border_col: ImVec4): void {
//    imgui.igImage(user_texture_id, size[BUFFER], uv0[BUFFER], uv1[BUFFER], tint_col[BUFFER], border_col[BUFFER]);
// }
// export function imageButton(str_id: string, user_texture_id: ImTextureID, size: ImVec2, uv0: ImVec2, uv1: ImVec2, bg_col: ImVec4, tint_col: ImVec4): boolean {
//   return imgui.igImageButton(cString(str_id), user_texture_id, size[BUFFER], uv0[BUFFER], uv1[BUFFER], bg_col[BUFFER], tint_col[BUFFER]);
// }
// export function beginCombo(label: string, preview_value: string, flags: ImGuiComboFlags): boolean {
//   return imgui.igBeginCombo(cString(label), cString(preview_value), flags);
// }
// export function endCombo(): void {
//    imgui.igEndCombo();
// }
// export function combo_Str_arr(label: string, current_item: Int32Array, items: char[], items_count: number, popup_max_height_in_items: number): boolean {
//   return imgui.igCombo_Str_arr(cString(label), current_item, items, items_count, popup_max_height_in_items);
// }
// export function combo_Str(label: string, current_item: Int32Array, items_separated_by_zeros: string, popup_max_height_in_items: number): boolean {
//   return imgui.igCombo_Str(cString(label), current_item, cString(items_separated_by_zeros), popup_max_height_in_items);
// }
// export function combo_FnBoolPtr(label: string, current_item: Int32Array, data: Deno.UnsafeCallback, idx: number, out_text): Deno.UnsafeCallback, data: ArrayBuffer, items_count: number, popup_max_height_in_items: number): boolean {
//   return imgui.igCombo_FnBoolPtr(cString(label), current_item, data, idx, out_text), data, items_count, popup_max_height_in_items);
// }
// export function dragFloat(label: string, v: Float32Array, v_speed: number, v_min: number, v_max: number, format: string, flags: ImGuiSliderFlags): boolean {
//   return imgui.igDragFloat(cString(label), v, v_speed, v_min, v_max, cString(format), flags);
// }
// export function dragFloat2(label: string, v: Float32Array, v_speed: number, v_min: number, v_max: number, format: string, flags: ImGuiSliderFlags): boolean {
//   return imgui.igDragFloat2(cString(label), v, v_speed, v_min, v_max, cString(format), flags);
// }
// export function dragFloat3(label: string, v: Float32Array, v_speed: number, v_min: number, v_max: number, format: string, flags: ImGuiSliderFlags): boolean {
//   return imgui.igDragFloat3(cString(label), v, v_speed, v_min, v_max, cString(format), flags);
// }
// export function dragFloat4(label: string, v: Float32Array, v_speed: number, v_min: number, v_max: number, format: string, flags: ImGuiSliderFlags): boolean {
//   return imgui.igDragFloat4(cString(label), v, v_speed, v_min, v_max, cString(format), flags);
// }
// export function dragFloatRange2(label: string, v_current_min: Float32Array, v_current_max: Float32Array, v_speed: number, v_min: number, v_max: number, format: string, format_max: string, flags: ImGuiSliderFlags): boolean {
//   return imgui.igDragFloatRange2(cString(label), v_current_min, v_current_max, v_speed, v_min, v_max, cString(format), cString(format_max), flags);
// }
// export function dragInt(label: string, v: Int32Array, v_speed: number, v_min: number, v_max: number, format: string, flags: ImGuiSliderFlags): boolean {
//   return imgui.igDragInt(cString(label), v, v_speed, v_min, v_max, cString(format), flags);
// }
// export function dragInt2(label: string, v: Int32Array, v_speed: number, v_min: number, v_max: number, format: string, flags: ImGuiSliderFlags): boolean {
//   return imgui.igDragInt2(cString(label), v, v_speed, v_min, v_max, cString(format), flags);
// }
// export function dragInt3(label: string, v: Int32Array, v_speed: number, v_min: number, v_max: number, format: string, flags: ImGuiSliderFlags): boolean {
//   return imgui.igDragInt3(cString(label), v, v_speed, v_min, v_max, cString(format), flags);
// }
// export function dragInt4(label: string, v: Int32Array, v_speed: number, v_min: number, v_max: number, format: string, flags: ImGuiSliderFlags): boolean {
//   return imgui.igDragInt4(cString(label), v, v_speed, v_min, v_max, cString(format), flags);
// }
// export function dragIntRange2(label: string, v_current_min: Int32Array, v_current_max: Int32Array, v_speed: number, v_min: number, v_max: number, format: string, format_max: string, flags: ImGuiSliderFlags): boolean {
//   return imgui.igDragIntRange2(cString(label), v_current_min, v_current_max, v_speed, v_min, v_max, cString(format), cString(format_max), flags);
// }
// export function dragScalar(label: string, data_type: ImGuiDataType, data: ArrayBuffer, v_speed: number, min: ArrayBuffer, max: ArrayBuffer, format: string, flags: ImGuiSliderFlags): boolean {
//   return imgui.igDragScalar(cString(label), data_type, data, v_speed, min, max, cString(format), flags);
// }
// export function dragScalarN(label: string, data_type: ImGuiDataType, data: ArrayBuffer, components: number, v_speed: number, min: ArrayBuffer, max: ArrayBuffer, format: string, flags: ImGuiSliderFlags): boolean {
//   return imgui.igDragScalarN(cString(label), data_type, data, components, v_speed, min, max, cString(format), flags);
// }
// export function sliderFloat(label: string, v: Float32Array, v_min: number, v_max: number, format: string, flags: ImGuiSliderFlags): boolean {
//   return imgui.igSliderFloat(cString(label), v, v_min, v_max, cString(format), flags);
// }
// export function sliderFloat2(label: string, v: Float32Array, v_min: number, v_max: number, format: string, flags: ImGuiSliderFlags): boolean {
//   return imgui.igSliderFloat2(cString(label), v, v_min, v_max, cString(format), flags);
// }
// export function sliderFloat3(label: string, v: Float32Array, v_min: number, v_max: number, format: string, flags: ImGuiSliderFlags): boolean {
//   return imgui.igSliderFloat3(cString(label), v, v_min, v_max, cString(format), flags);
// }
// export function sliderFloat4(label: string, v: Float32Array, v_min: number, v_max: number, format: string, flags: ImGuiSliderFlags): boolean {
//   return imgui.igSliderFloat4(cString(label), v, v_min, v_max, cString(format), flags);
// }
// export function sliderAngle(label: string, v_rad: Float32Array, v_degrees_min: number, v_degrees_max: number, format: string, flags: ImGuiSliderFlags): boolean {
//   return imgui.igSliderAngle(cString(label), v_rad, v_degrees_min, v_degrees_max, cString(format), flags);
// }
// export function sliderInt(label: string, v: Int32Array, v_min: number, v_max: number, format: string, flags: ImGuiSliderFlags): boolean {
//   return imgui.igSliderInt(cString(label), v, v_min, v_max, cString(format), flags);
// }
// export function sliderInt2(label: string, v: Int32Array, v_min: number, v_max: number, format: string, flags: ImGuiSliderFlags): boolean {
//   return imgui.igSliderInt2(cString(label), v, v_min, v_max, cString(format), flags);
// }
// export function sliderInt3(label: string, v: Int32Array, v_min: number, v_max: number, format: string, flags: ImGuiSliderFlags): boolean {
//   return imgui.igSliderInt3(cString(label), v, v_min, v_max, cString(format), flags);
// }
// export function sliderInt4(label: string, v: Int32Array, v_min: number, v_max: number, format: string, flags: ImGuiSliderFlags): boolean {
//   return imgui.igSliderInt4(cString(label), v, v_min, v_max, cString(format), flags);
// }
// export function sliderScalar(label: string, data_type: ImGuiDataType, data: ArrayBuffer, min: ArrayBuffer, max: ArrayBuffer, format: string, flags: ImGuiSliderFlags): boolean {
//   return imgui.igSliderScalar(cString(label), data_type, data, min, max, cString(format), flags);
// }
// export function sliderScalarN(label: string, data_type: ImGuiDataType, data: ArrayBuffer, components: number, min: ArrayBuffer, max: ArrayBuffer, format: string, flags: ImGuiSliderFlags): boolean {
//   return imgui.igSliderScalarN(cString(label), data_type, data, components, min, max, cString(format), flags);
// }
// export function vSliderFloat(label: string, size: ImVec2, v: Float32Array, v_min: number, v_max: number, format: string, flags: ImGuiSliderFlags): boolean {
//   return imgui.igVSliderFloat(cString(label), size[BUFFER], v, v_min, v_max, cString(format), flags);
// }
// export function vSliderInt(label: string, size: ImVec2, v: Int32Array, v_min: number, v_max: number, format: string, flags: ImGuiSliderFlags): boolean {
//   return imgui.igVSliderInt(cString(label), size[BUFFER], v, v_min, v_max, cString(format), flags);
// }
// export function vSliderScalar(label: string, size: ImVec2, data_type: ImGuiDataType, data: ArrayBuffer, min: ArrayBuffer, max: ArrayBuffer, format: string, flags: ImGuiSliderFlags): boolean {
//   return imgui.igVSliderScalar(cString(label), size[BUFFER], data_type, data, min, max, cString(format), flags);
// }
// export function inputText(label: string, buf: string, buf_size: Deno.PointerValue, flags: ImGuiInputTextFlags, callback: ImGuiInputTextCallback, user_data: ArrayBuffer): boolean {
//   return imgui.igInputText(cString(label), cString(buf), buf_size, flags, callback.pointer, user_data);
// }
// export function inputTextMultiline(label: string, buf: string, buf_size: Deno.PointerValue, size: ImVec2, flags: ImGuiInputTextFlags, callback: ImGuiInputTextCallback, user_data: ArrayBuffer): boolean {
//   return imgui.igInputTextMultiline(cString(label), cString(buf), buf_size, size[BUFFER], flags, callback.pointer, user_data);
// }
// export function inputTextWithHint(label: string, hint: string, buf: string, buf_size: Deno.PointerValue, flags: ImGuiInputTextFlags, callback: ImGuiInputTextCallback, user_data: ArrayBuffer): boolean {
//   return imgui.igInputTextWithHint(cString(label), cString(hint), cString(buf), buf_size, flags, callback.pointer, user_data);
// }
// export function inputFloat(label: string, v: Float32Array, step: number, step_fast: number, format: string, flags: ImGuiInputTextFlags): boolean {
//   return imgui.igInputFloat(cString(label), v, step, step_fast, cString(format), flags);
// }
// export function inputFloat2(label: string, v: Float32Array, format: string, flags: ImGuiInputTextFlags): boolean {
//   return imgui.igInputFloat2(cString(label), v, cString(format), flags);
// }
// export function inputFloat3(label: string, v: Float32Array, format: string, flags: ImGuiInputTextFlags): boolean {
//   return imgui.igInputFloat3(cString(label), v, cString(format), flags);
// }
// export function inputFloat4(label: string, v: Float32Array, format: string, flags: ImGuiInputTextFlags): boolean {
//   return imgui.igInputFloat4(cString(label), v, cString(format), flags);
// }
// export function inputInt(label: string, v: Int32Array, step: number, step_fast: number, flags: ImGuiInputTextFlags): boolean {
//   return imgui.igInputInt(cString(label), v, step, step_fast, flags);
// }
// export function inputInt2(label: string, v: Int32Array, flags: ImGuiInputTextFlags): boolean {
//   return imgui.igInputInt2(cString(label), v, flags);
// }
// export function inputInt3(label: string, v: Int32Array, flags: ImGuiInputTextFlags): boolean {
//   return imgui.igInputInt3(cString(label), v, flags);
// }
// export function inputInt4(label: string, v: Int32Array, flags: ImGuiInputTextFlags): boolean {
//   return imgui.igInputInt4(cString(label), v, flags);
// }
// export function inputDouble(label: string, v: Float64Array, step: number, step_fast: number, format: string, flags: ImGuiInputTextFlags): boolean {
//   return imgui.igInputDouble(cString(label), v, step, step_fast, cString(format), flags);
// }
// export function inputScalar(label: string, data_type: ImGuiDataType, data: ArrayBuffer, step: ArrayBuffer, step_fast: ArrayBuffer, format: string, flags: ImGuiInputTextFlags): boolean {
//   return imgui.igInputScalar(cString(label), data_type, data, step, step_fast, cString(format), flags);
// }
// export function inputScalarN(label: string, data_type: ImGuiDataType, data: ArrayBuffer, components: number, step: ArrayBuffer, step_fast: ArrayBuffer, format: string, flags: ImGuiInputTextFlags): boolean {
//   return imgui.igInputScalarN(cString(label), data_type, data, components, step, step_fast, cString(format), flags);
// }
// export function colorEdit3(label: string, col: Float32Array, flags: ImGuiColorEditFlags): boolean {
//   return imgui.igColorEdit3(cString(label), col, flags);
// }
// export function colorEdit4(label: string, col: Float32Array, flags: ImGuiColorEditFlags): boolean {
//   return imgui.igColorEdit4(cString(label), col, flags);
// }
// export function colorPicker3(label: string, col: Float32Array, flags: ImGuiColorEditFlags): boolean {
//   return imgui.igColorPicker3(cString(label), col, flags);
// }
// export function colorPicker4(label: string, col: Float32Array, flags: ImGuiColorEditFlags, ref_col: Float32Array): boolean {
//   return imgui.igColorPicker4(cString(label), col, flags, ref_col);
// }
// export function colorButton(desc_id: string, col: ImVec4, flags: ImGuiColorEditFlags, size: ImVec2): boolean {
//   return imgui.igColorButton(cString(desc_id), col[BUFFER], flags, size[BUFFER]);
// }
// export function setColorEditOptions(flags: ImGuiColorEditFlags): void {
//    imgui.igSetColorEditOptions(flags);
// }
// export function treeNode_Str(label: string): boolean {
//   return imgui.igTreeNode_Str(cString(label));
// }
// export function treeNodeEx_Str(label: string, flags: ImGuiTreeNodeFlags): boolean {
//   return imgui.igTreeNodeEx_Str(cString(label), flags);
// }
// export function treePush_Str(str_id: string): void {
//    imgui.igTreePush_Str(cString(str_id));
// }
// export function treePush_Ptr(ptr_id: ArrayBuffer): void {
//    imgui.igTreePush_Ptr(ptr_id);
// }
// export function treePop(): void {
//    imgui.igTreePop();
// }
// export function getTreeNodeToLabelSpacing(): number {
//   return imgui.igGetTreeNodeToLabelSpacing();
// }
// export function collapsingHeader_TreeNodeFlags(label: string, flags: ImGuiTreeNodeFlags): boolean {
//   return imgui.igCollapsingHeader_TreeNodeFlags(cString(label), flags);
// }
// export function collapsingHeader_BoolPtr(label: string, visible: CBool | null = null, flags: ImGuiTreeNodeFlags): boolean {
//   return imgui.igCollapsingHeader_BoolPtr(cString(label), visible ? visible[BUFFER] : null, flags);
// }
// export function setNextItemOpen(is_open: boolean, cond: ImGuiCond): void {
//    imgui.igSetNextItemOpen(is_open, cond);
// }
// export function selectable_Bool(label: string, selected: boolean, flags: ImGuiSelectableFlags, size: ImVec2): boolean {
//   return imgui.igSelectable_Bool(cString(label), selected, flags, size[BUFFER]);
// }
// export function selectable_BoolPtr(label: string, selected: CBool | null = null, flags: ImGuiSelectableFlags, size: ImVec2): boolean {
//   return imgui.igSelectable_BoolPtr(cString(label), selected ? selected[BUFFER] : null, flags, size[BUFFER]);
// }
// export function beginListBox(label: string, size: ImVec2): boolean {
//   return imgui.igBeginListBox(cString(label), size[BUFFER]);
// }
// export function endListBox(): void {
//    imgui.igEndListBox();
// }
// export function listBox_Str_arr(label: string, current_item: Int32Array, items: char[], items_count: number, height_in_items: number): boolean {
//   return imgui.igListBox_Str_arr(cString(label), current_item, items, items_count, height_in_items);
// }
// export function listBox_FnBoolPtr(label: string, current_item: Int32Array, data: Deno.UnsafeCallback, idx: number, out_text): Deno.UnsafeCallback, data: ArrayBuffer, items_count: number, height_in_items: number): boolean {
//   return imgui.igListBox_FnBoolPtr(cString(label), current_item, data, idx, out_text), data, items_count, height_in_items);
// }
// export function plotLines_FloatPtr(label: string, values: Float32Array, values_count: number, values_offset: number, overlay_text: string, scale_min: number, scale_max: number, graph_size: ImVec2, stride: number): void {
//    imgui.igPlotLines_FloatPtr(cString(label), values, values_count, values_offset, cString(overlay_text), scale_min, scale_max, graph_size[BUFFER], stride);
// }
// export function plotLines_FnFloatPtr(label: string, data: Deno.UnsafeCallback, idx): number, data: ArrayBuffer, values_count: number, values_offset: number, overlay_text: string, scale_min: number, scale_max: number, graph_size: ImVec2): void {
//    imgui.igPlotLines_FnFloatPtr(cString(label), data, idx), data, values_count, values_offset, cString(overlay_text), scale_min, scale_max, graph_size[BUFFER]);
// }
// export function plotHistogram_FloatPtr(label: string, values: Float32Array, values_count: number, values_offset: number, overlay_text: string, scale_min: number, scale_max: number, graph_size: ImVec2, stride: number): void {
//    imgui.igPlotHistogram_FloatPtr(cString(label), values, values_count, values_offset, cString(overlay_text), scale_min, scale_max, graph_size[BUFFER], stride);
// }
// export function plotHistogram_FnFloatPtr(label: string, data: Deno.UnsafeCallback, idx): number, data: ArrayBuffer, values_count: number, values_offset: number, overlay_text: string, scale_min: number, scale_max: number, graph_size: ImVec2): void {
//    imgui.igPlotHistogram_FnFloatPtr(cString(label), data, idx), data, values_count, values_offset, cString(overlay_text), scale_min, scale_max, graph_size[BUFFER]);
// }
// export function value_Bool(prefix: string, b: boolean): void {
//    imgui.igValue_Bool(cString(prefix), b);
// }
// export function value_Int(prefix: string, v: number): void {
//    imgui.igValue_Int(cString(prefix), v);
// }
// export function value_Uint(prefix: string, v: number): void {
//    imgui.igValue_Uint(cString(prefix), v);
// }
// export function value_Float(prefix: string, v: number, float_format: string): void {
//    imgui.igValue_Float(cString(prefix), v, cString(float_format));
// }
// export function beginMenuBar(): boolean {
//   return imgui.igBeginMenuBar();
// }
// export function endMenuBar(): void {
//    imgui.igEndMenuBar();
// }
// export function beginMainMenuBar(): boolean {
//   return imgui.igBeginMainMenuBar();
// }
// export function endMainMenuBar(): void {
//    imgui.igEndMainMenuBar();
// }
// export function beginMenu(label: string, enabled: boolean): boolean {
//   return imgui.igBeginMenu(cString(label), enabled);
// }
// export function endMenu(): void {
//    imgui.igEndMenu();
// }
// export function menuItem_Bool(label: string, shortcut: string, selected: boolean, enabled: boolean): boolean {
//   return imgui.igMenuItem_Bool(cString(label), cString(shortcut), selected, enabled);
// }
// export function menuItem_BoolPtr(label: string, shortcut: string, selected: CBool | null = null, enabled: boolean): boolean {
//   return imgui.igMenuItem_BoolPtr(cString(label), cString(shortcut), selected ? selected[BUFFER] : null, enabled);
// }
// export function beginTooltip(): void {
//    imgui.igBeginTooltip();
// }
// export function endTooltip(): void {
//    imgui.igEndTooltip();
// }
// export function beginPopup(str_id: string, flags: ImGuiWindowFlags): boolean {
//   return imgui.igBeginPopup(cString(str_id), flags);
// }
// export function beginPopupModal(name: string, open: CBool | null = null, flags: ImGuiWindowFlags): boolean {
//   return imgui.igBeginPopupModal(cString(name), open ? open[BUFFER] : null, flags);
// }
// export function endPopup(): void {
//    imgui.igEndPopup();
// }
// export function openPopup_Str(str_id: string, popup_flags: ImGuiPopupFlags): void {
//    imgui.igOpenPopup_Str(cString(str_id), popup_flags);
// }
// export function openPopup_ID(id: ImGuiID, popup_flags: ImGuiPopupFlags): void {
//    imgui.igOpenPopup_ID(id, popup_flags);
// }
// export function openPopupOnItemClick(str_id: string, popup_flags: ImGuiPopupFlags): void {
//    imgui.igOpenPopupOnItemClick(cString(str_id), popup_flags);
// }
// export function closeCurrentPopup(): void {
//    imgui.igCloseCurrentPopup();
// }
// export function beginPopupContextItem(str_id: string, popup_flags: ImGuiPopupFlags): boolean {
//   return imgui.igBeginPopupContextItem(cString(str_id), popup_flags);
// }
// export function beginPopupContextWindow(str_id: string, popup_flags: ImGuiPopupFlags): boolean {
//   return imgui.igBeginPopupContextWindow(cString(str_id), popup_flags);
// }
// export function beginPopupContextVoid(str_id: string, popup_flags: ImGuiPopupFlags): boolean {
//   return imgui.igBeginPopupContextVoid(cString(str_id), popup_flags);
// }
// export function isPopupOpen_Str(str_id: string, flags: ImGuiPopupFlags): boolean {
//   return imgui.igIsPopupOpen_Str(cString(str_id), flags);
// }
// export function beginTable(str_id: string, column: number, flags: ImGuiTableFlags, outer_size: ImVec2, inner_width: number): boolean {
//   return imgui.igBeginTable(cString(str_id), column, flags, outer_size[BUFFER], inner_width);
// }
// export function endTable(): void {
//    imgui.igEndTable();
// }
// export function tableNextRow(row_flags: ImGuiTableRowFlags, min_row_height: number): void {
//    imgui.igTableNextRow(row_flags, min_row_height);
// }
// export function tableNextColumn(): boolean {
//   return imgui.igTableNextColumn();
// }
// export function tableSetColumnIndex(column_n: number): boolean {
//   return imgui.igTableSetColumnIndex(column_n);
// }
// export function tableSetupColumn(label: string, flags: ImGuiTableColumnFlags, init_width_or_weight: number, user_id: ImGuiID): void {
//    imgui.igTableSetupColumn(cString(label), flags, init_width_or_weight, user_id);
// }
// export function tableSetupScrollFreeze(cols: number, rows: number): void {
//    imgui.igTableSetupScrollFreeze(cols, rows);
// }
// export function tableHeadersRow(): void {
//    imgui.igTableHeadersRow();
// }
// export function tableHeader(label: string): void {
//    imgui.igTableHeader(cString(label));
// }
// export function tableGetSortSpecs(): ImGuiTableSortSpecs {
//   return imgui.igTableGetSortSpecs();
// }
// export function tableGetColumnCount(): number {
//   return imgui.igTableGetColumnCount();
// }
// export function tableGetColumnIndex(): number {
//   return imgui.igTableGetColumnIndex();
// }
// export function tableGetRowIndex(): number {
//   return imgui.igTableGetRowIndex();
// }
// export function tableGetColumnName_Int(column_n: number): string {
//   return imgui.igTableGetColumnName_Int(column_n);
// }
// export function tableGetColumnFlags(column_n: number): ImGuiTableColumnFlags {
//   return imgui.igTableGetColumnFlags(column_n);
// }
// export function tableSetColumnEnabled(column_n: number, v: boolean): void {
//    imgui.igTableSetColumnEnabled(column_n, v);
// }
// export function tableSetBgColor(target: ImGuiTableBgTarget, color: ImU32, column_n: number): void {
//    imgui.igTableSetBgColor(target, color, column_n);
// }
// export function columns(count: number, id: string, border: boolean): void {
//    imgui.igColumns(count, cString(id), border);
// }
// export function nextColumn(): void {
//    imgui.igNextColumn();
// }
// export function getColumnIndex(): number {
//   return imgui.igGetColumnIndex();
// }
// export function getColumnWidth(column_index: number): number {
//   return imgui.igGetColumnWidth(column_index);
// }
// export function setColumnWidth(column_index: number, width: number): void {
//    imgui.igSetColumnWidth(column_index, width);
// }
// export function getColumnOffset(column_index: number): number {
//   return imgui.igGetColumnOffset(column_index);
// }
// export function setColumnOffset(column_index: number, offset_x: number): void {
//    imgui.igSetColumnOffset(column_index, offset_x);
// }
// export function getColumnsCount(): number {
//   return imgui.igGetColumnsCount();
// }
// export function beginTabBar(str_id: string, flags: ImGuiTabBarFlags): boolean {
//   return imgui.igBeginTabBar(cString(str_id), flags);
// }
// export function endTabBar(): void {
//    imgui.igEndTabBar();
// }
// export function beginTabItem(label: string, open: CBool | null = null, flags: ImGuiTabItemFlags): boolean {
//   return imgui.igBeginTabItem(cString(label), open ? open[BUFFER] : null, flags);
// }
// export function endTabItem(): void {
//    imgui.igEndTabItem();
// }
// export function tabItemButton(label: string, flags: ImGuiTabItemFlags): boolean {
//   return imgui.igTabItemButton(cString(label), flags);
// }
// export function setTabItemClosed(tab_or_docked_window_label: string): void {
//    imgui.igSetTabItemClosed(cString(tab_or_docked_window_label));
// }
// export function dockSpace(id: ImGuiID, size: ImVec2, flags: ImGuiDockNodeFlags, window_class: ImGuiWindowClass): ImGuiID {
//   return imgui.igDockSpace(id, size[BUFFER], flags, window_class);
// }
// export function dockSpaceOverViewport(viewport: ImGuiViewport, flags: ImGuiDockNodeFlags, window_class: ImGuiWindowClass): ImGuiID {
//   return imgui.igDockSpaceOverViewport(viewport, flags, window_class);
// }
// export function setNextWindowDockID(dock_id: ImGuiID, cond: ImGuiCond): void {
//    imgui.igSetNextWindowDockID(dock_id, cond);
// }
// export function setNextWindowClass(window_class: ImGuiWindowClass): void {
//    imgui.igSetNextWindowClass(window_class);
// }
// export function getWindowDockID(): ImGuiID {
//   return imgui.igGetWindowDockID();
// }
// export function isWindowDocked(): boolean {
//   return imgui.igIsWindowDocked();
// }
// export function logToTTY(auto_open_depth: number): void {
//    imgui.igLogToTTY(auto_open_depth);
// }
// export function logToClipboard(auto_open_depth: number): void {
//    imgui.igLogToClipboard(auto_open_depth);
// }
// export function logFinish(): void {
//    imgui.igLogFinish();
// }
// export function logButtons(): void {
//    imgui.igLogButtons();
// }
// export function beginDragDropSource(flags: ImGuiDragDropFlags): boolean {
//   return imgui.igBeginDragDropSource(flags);
// }
// export function setDragDropPayload(type: string, data: ArrayBuffer, sz: Deno.PointerValue, cond: ImGuiCond): boolean {
//   return imgui.igSetDragDropPayload(cString(type), data, sz, cond);
// }
// export function endDragDropSource(): void {
//    imgui.igEndDragDropSource();
// }
// export function beginDragDropTarget(): boolean {
//   return imgui.igBeginDragDropTarget();
// }
// export function acceptDragDropPayload(type: string, flags: ImGuiDragDropFlags): ImGuiPayload {
//   return imgui.igAcceptDragDropPayload(cString(type), flags);
// }
// export function endDragDropTarget(): void {
//    imgui.igEndDragDropTarget();
// }
// export function getDragDropPayload(): ImGuiPayload {
//   return imgui.igGetDragDropPayload();
// }
// export function beginDisabled(disabled: boolean): void {
//    imgui.igBeginDisabled(disabled);
// }
// export function endDisabled(): void {
//    imgui.igEndDisabled();
// }
// export function pushClipRect(clip_rect_min: ImVec2, clip_rect_max: ImVec2, intersect_with_current_clip_rect: boolean): void {
//    imgui.igPushClipRect(clip_rect_min[BUFFER], clip_rect_max[BUFFER], intersect_with_current_clip_rect);
// }
// export function popClipRect(): void {
//    imgui.igPopClipRect();
// }
// export function setItemDefaultFocus(): void {
//    imgui.igSetItemDefaultFocus();
// }
// export function setKeyboardFocusHere(offset: number): void {
//    imgui.igSetKeyboardFocusHere(offset);
// }
// export function isItemHovered(flags: ImGuiHoveredFlags): boolean {
//   return imgui.igIsItemHovered(flags);
// }
// export function isItemActive(): boolean {
//   return imgui.igIsItemActive();
// }
// export function isItemFocused(): boolean {
//   return imgui.igIsItemFocused();
// }
// export function isItemClicked(mouse_button: ImGuiMouseButton): boolean {
//   return imgui.igIsItemClicked(mouse_button);
// }
// export function isItemVisible(): boolean {
//   return imgui.igIsItemVisible();
// }
// export function isItemEdited(): boolean {
//   return imgui.igIsItemEdited();
// }
// export function isItemActivated(): boolean {
//   return imgui.igIsItemActivated();
// }
// export function isItemDeactivated(): boolean {
//   return imgui.igIsItemDeactivated();
// }
// export function isItemDeactivatedAfterEdit(): boolean {
//   return imgui.igIsItemDeactivatedAfterEdit();
// }
// export function isItemToggledOpen(): boolean {
//   return imgui.igIsItemToggledOpen();
// }
// export function isAnyItemHovered(): boolean {
//   return imgui.igIsAnyItemHovered();
// }
// export function isAnyItemActive(): boolean {
//   return imgui.igIsAnyItemActive();
// }
// export function isAnyItemFocused(): boolean {
//   return imgui.igIsAnyItemFocused();
// }
// export function getItemID(): ImGuiID {
//   return imgui.igGetItemID();
// }
// export function getItemRectMin(*pOut: ImVec2): void {
//    imgui.igGetItemRectMin(*pOut[BUFFER]);
// }
// export function getItemRectMax(*pOut: ImVec2): void {
//    imgui.igGetItemRectMax(*pOut[BUFFER]);
// }
// export function getItemRectSize(*pOut: ImVec2): void {
//    imgui.igGetItemRectSize(*pOut[BUFFER]);
// }
// export function setItemAllowOverlap(): void {
//    imgui.igSetItemAllowOverlap();
// }
// export function getMainViewport(): ImGuiViewport {
//   return imgui.igGetMainViewport();
// }
// export function getBackgroundDrawList_Nil(): ImDrawList {
//   return imgui.igGetBackgroundDrawList_Nil();
// }
// export function getForegroundDrawList_Nil(): ImDrawList {
//   return imgui.igGetForegroundDrawList_Nil();
// }
// export function getBackgroundDrawList_ViewportPtr(viewport: ImGuiViewport): ImDrawList {
//   return imgui.igGetBackgroundDrawList_ViewportPtr(viewport);
// }
// export function getForegroundDrawList_ViewportPtr(viewport: ImGuiViewport): ImDrawList {
//   return imgui.igGetForegroundDrawList_ViewportPtr(viewport);
// }
// export function isRectVisible_Nil(size: ImVec2): boolean {
//   return imgui.igIsRectVisible_Nil(size[BUFFER]);
// }
// export function isRectVisible_Vec2(rect_min: ImVec2, rect_max: ImVec2): boolean {
//   return imgui.igIsRectVisible_Vec2(rect_min[BUFFER], rect_max[BUFFER]);
// }
// export function getTime(): number {
//   return imgui.igGetTime();
// }
// export function getFrameCount(): number {
//   return imgui.igGetFrameCount();
// }
// export function getDrawListSharedData(): ImDrawListSharedData {
//   return imgui.igGetDrawListSharedData();
// }
// export function getStyleColorName(idx: ImGuiCol): string {
//   return imgui.igGetStyleColorName(idx);
// }
// export function setStateStorage(storage: ImGuiStorage): void {
//    imgui.igSetStateStorage(storage);
// }
// export function getStateStorage(): ImGuiStorage {
//   return imgui.igGetStateStorage();
// }
// export function beginChildFrame(id: ImGuiID, size: ImVec2, flags: ImGuiWindowFlags): boolean {
//   return imgui.igBeginChildFrame(id, size[BUFFER], flags);
// }
// export function endChildFrame(): void {
//    imgui.igEndChildFrame();
// }
// export function calcTextSize(*pOut: ImVec2, text: string, text_end: string, hide_text_after_double_hash: boolean, wrap_width: number): void {
//    imgui.igCalcTextSize(*pOut[BUFFER], cString(text), cString(text_end), hide_text_after_double_hash, wrap_width);
// }
// export function colorConvertU32ToFloat4(*pOut: ImVec4, in: ImU32): void {
//    imgui.igColorConvertU32ToFloat4(*pOut[BUFFER], in);
// }
// export function colorConvertFloat4ToU32(in: ImVec4): ImU32 {
//   return imgui.igColorConvertFloat4ToU32(in[BUFFER]);
// }
// export function colorConvertRGBtoHSV(r: number, g: number, b: number, out_h: Float32Array, out_s: Float32Array, out_v: Float32Array): void {
//    imgui.igColorConvertRGBtoHSV(r, g, b, out_h, out_s, out_v);
// }
// export function colorConvertHSVtoRGB(h: number, s: number, v: number, out_r: Float32Array, out_g: Float32Array, out_b: Float32Array): void {
//    imgui.igColorConvertHSVtoRGB(h, s, v, out_r, out_g, out_b);
// }
// export function isKeyDown_Nil(key: ImGuiKey): boolean {
//   return imgui.igIsKeyDown_Nil(key);
// }
// export function isKeyPressed_Bool(key: ImGuiKey, repeat: boolean): boolean {
//   return imgui.igIsKeyPressed_Bool(key, repeat);
// }
// export function isKeyReleased_Nil(key: ImGuiKey): boolean {
//   return imgui.igIsKeyReleased_Nil(key);
// }
// export function getKeyPressedAmount(key: ImGuiKey, repeat_delay: number, rate: number): number {
//   return imgui.igGetKeyPressedAmount(key, repeat_delay, rate);
// }
// export function getKeyName(key: ImGuiKey): string {
//   return imgui.igGetKeyName(key);
// }
// export function setNextFrameWantCaptureKeyboard(want_capture_keyboard: boolean): void {
//    imgui.igSetNextFrameWantCaptureKeyboard(want_capture_keyboard);
// }
// export function isMouseDown_Nil(button: ImGuiMouseButton): boolean {
//   return imgui.igIsMouseDown_Nil(button);
// }
// export function isMouseClicked_Bool(button: ImGuiMouseButton, repeat: boolean): boolean {
//   return imgui.igIsMouseClicked_Bool(button, repeat);
// }
// export function isMouseReleased_Nil(button: ImGuiMouseButton): boolean {
//   return imgui.igIsMouseReleased_Nil(button);
// }
// export function isMouseDoubleClicked(button: ImGuiMouseButton): boolean {
//   return imgui.igIsMouseDoubleClicked(button);
// }
// export function getMouseClickedCount(button: ImGuiMouseButton): number {
//   return imgui.igGetMouseClickedCount(button);
// }
// export function isMouseHoveringRect(r_min: ImVec2, r_max: ImVec2, clip: boolean): boolean {
//   return imgui.igIsMouseHoveringRect(r_min[BUFFER], r_max[BUFFER], clip);
// }
// export function isMousePosValid(mouse_pos: ImVec2): boolean {
//   return imgui.igIsMousePosValid(mouse_pos);
// }
// export function isAnyMouseDown(): boolean {
//   return imgui.igIsAnyMouseDown();
// }
// export function getMousePos(*pOut: ImVec2): void {
//    imgui.igGetMousePos(*pOut[BUFFER]);
// }
// export function getMousePosOnOpeningCurrentPopup(*pOut: ImVec2): void {
//    imgui.igGetMousePosOnOpeningCurrentPopup(*pOut[BUFFER]);
// }
// export function isMouseDragging(button: ImGuiMouseButton, lock_threshold: number): boolean {
//   return imgui.igIsMouseDragging(button, lock_threshold);
// }
// export function getMouseDragDelta(*pOut: ImVec2, button: ImGuiMouseButton, lock_threshold: number): void {
//    imgui.igGetMouseDragDelta(*pOut[BUFFER], button, lock_threshold);
// }
// export function resetMouseDragDelta(button: ImGuiMouseButton): void {
//    imgui.igResetMouseDragDelta(button);
// }
// export function getMouseCursor(): ImGuiMouseCursor {
//   return imgui.igGetMouseCursor();
// }
// export function setMouseCursor(cursor_type: ImGuiMouseCursor): void {
//    imgui.igSetMouseCursor(cursor_type);
// }
// export function setNextFrameWantCaptureMouse(want_capture_mouse: boolean): void {
//    imgui.igSetNextFrameWantCaptureMouse(want_capture_mouse);
// }
// export function getClipboardText(): string {
//   return imgui.igGetClipboardText();
// }
// export function setClipboardText(text: string): void {
//    imgui.igSetClipboardText(cString(text));
// }
// export function loadIniSettingsFromDisk(ini_filename: string): void {
//    imgui.igLoadIniSettingsFromDisk(cString(ini_filename));
// }
// export function loadIniSettingsFromMemory(ini_data: string, ini_size: Deno.PointerValue): void {
//    imgui.igLoadIniSettingsFromMemory(cString(ini_data), ini_size);
// }
// export function saveIniSettingsToDisk(ini_filename: string): void {
//    imgui.igSaveIniSettingsToDisk(cString(ini_filename));
// }
// export function saveIniSettingsToMemory(out_ini_size: size_t): string {
//   return imgui.igSaveIniSettingsToMemory(out_ini_size);
// }
// export function debugTextEncoding(text: string): void {
//    imgui.igDebugTextEncoding(cString(text));
// }
// export function debugCheckVersionAndDataLayout(version_str: string, sz_io: Deno.PointerValue, sz_style: Deno.PointerValue, sz_vec2: Deno.PointerValue, sz_vec4: Deno.PointerValue, sz_drawvert: Deno.PointerValue, sz_drawidx: Deno.PointerValue): boolean {
//   return imgui.igDebugCheckVersionAndDataLayout(cString(version_str), sz_io, sz_style, sz_vec2, sz_vec4, sz_drawvert, sz_drawidx);
// }
// export function memAlloc(size: Deno.PointerValue): ArrayBuffer {
//   return imgui.igMemAlloc(size);
// }
// export function memFree(ptr: ArrayBuffer): void {
//    imgui.igMemFree(ptr);
// }
// export function getPlatformIO(): ImGuiPlatformIO {
//   return imgui.igGetPlatformIO();
// }
// export function updatePlatformWindows(): void {
//    imgui.igUpdatePlatformWindows();
// }
// export function renderPlatformWindowsDefault(platform_render_arg: ArrayBuffer, renderer_render_arg: ArrayBuffer): void {
//    imgui.igRenderPlatformWindowsDefault(platform_render_arg, renderer_render_arg);
// }
// export function destroyPlatformWindows(): void {
//    imgui.igDestroyPlatformWindows();
// }
// export function findViewportByID(id: ImGuiID): ImGuiViewport {
//   return imgui.igFindViewportByID(id);
// }
// export function findViewportByPlatformHandle(platform_handle: ArrayBuffer): ImGuiViewport {
//   return imgui.igFindViewportByPlatformHandle(platform_handle);
// }
// export function getKeyIndex(key: ImGuiKey): ImGuiKey {
//   return imgui.igGetKeyIndex(key);
// }
// export function imHashData(data: ArrayBuffer, data_size: Deno.PointerValue, seed: ImU32): ImGuiID {
//   return imgui.igImHashData(data, data_size, seed);
// }
// export function imHashStr(data: string, data_size: Deno.PointerValue, seed: ImU32): ImGuiID {
//   return imgui.igImHashStr(cString(data), data_size, seed);
// }
// export function imAlphaBlendColors(col_a: ImU32, col_b: ImU32): ImU32 {
//   return imgui.igImAlphaBlendColors(col_a, col_b);
// }
// export function imIsPowerOfTwo_Int(v: number): boolean {
//   return imgui.igImIsPowerOfTwo_Int(v);
// }
// export function imIsPowerOfTwo_U64(v: ImU64): boolean {
//   return imgui.igImIsPowerOfTwo_U64(v);
// }
// export function imUpperPowerOfTwo(v: number): number {
//   return imgui.igImUpperPowerOfTwo(v);
// }
// export function imStricmp(str1: string, str2: string): number {
//   return imgui.igImStricmp(cString(str1), cString(str2));
// }
// export function imStrnicmp(str1: string, str2: string, count: Deno.PointerValue): number {
//   return imgui.igImStrnicmp(cString(str1), cString(str2), count);
// }
// export function imStrncpy(dst: string, src: string, count: Deno.PointerValue): void {
//    imgui.igImStrncpy(cString(dst), cString(src), count);
// }
// export function imStrdup(str: string): string {
//   return imgui.igImStrdup(cString(str));
// }
// export function imStrdupcpy(dst: string, dst_size: size_t, str: string): string {
//   return imgui.igImStrdupcpy(cString(dst), dst_size, cString(str));
// }
// export function imStrchrRange(str_begin: string, str_end: string, c: number): string {
//   return imgui.igImStrchrRange(cString(str_begin), cString(str_end), c);
// }
// export function imStrlenW(str: ImWchar): number {
//   return imgui.igImStrlenW(str);
// }
// export function imStreolRange(str: string, str_end: string): string {
//   return imgui.igImStreolRange(cString(str), cString(str_end));
// }
// export function imStrbolW(buf_mid_line: ImWchar, buf_begin: ImWchar): ImWchar {
//   return imgui.igImStrbolW(buf_mid_line, buf_begin);
// }
// export function imStristr(haystack: string, haystack_end: string, needle: string, needle_end: string): string {
//   return imgui.igImStristr(cString(haystack), cString(haystack_end), cString(needle), cString(needle_end));
// }
// export function imStrTrimBlanks(str: string): void {
//    imgui.igImStrTrimBlanks(cString(str));
// }
// export function imStrSkipBlank(str: string): string {
//   return imgui.igImStrSkipBlank(cString(str));
// }
// export function imToUpper(c: number): number {
//   return imgui.igImToUpper(c);
// }
// export function imCharIsBlankA(c: number): boolean {
//   return imgui.igImCharIsBlankA(c);
// }
// export function imCharIsBlankW(c: number): boolean {
//   return imgui.igImCharIsBlankW(c);
// }
// export function imParseFormatFindStart(format: string): string {
//   return imgui.igImParseFormatFindStart(cString(format));
// }
// export function imParseFormatFindEnd(format: string): string {
//   return imgui.igImParseFormatFindEnd(cString(format));
// }
// export function imParseFormatTrimDecorations(format: string, buf: string, buf_size: Deno.PointerValue): string {
//   return imgui.igImParseFormatTrimDecorations(cString(format), cString(buf), buf_size);
// }
// export function imParseFormatSanitizeForPrinting(fmt_in: string, fmt_out: string, fmt_out_size: Deno.PointerValue): void {
//    imgui.igImParseFormatSanitizeForPrinting(cString(fmt_in), cString(fmt_out), fmt_out_size);
// }
// export function imParseFormatSanitizeForScanning(fmt_in: string, fmt_out: string, fmt_out_size: Deno.PointerValue): string {
//   return imgui.igImParseFormatSanitizeForScanning(cString(fmt_in), cString(fmt_out), fmt_out_size);
// }
// export function imParseFormatPrecision(format: string, default_value: number): number {
//   return imgui.igImParseFormatPrecision(cString(format), default_value);
// }
// export function imTextCharToUtf8(out_buf: char[], c: number): string {
//   return imgui.igImTextCharToUtf8(out_buf, c);
// }
// export function imTextStrToUtf8(out_buf: string, out_buf_size: number, in_text: ImWchar, in_text_end: ImWchar): number {
//   return imgui.igImTextStrToUtf8(cString(out_buf), out_buf_size, in_text, in_text_end);
// }
// export function imTextCharFromUtf8(out_char: unsigned int, in_text: string, in_text_end: string): number {
//   return imgui.igImTextCharFromUtf8(out_char, cString(in_text), cString(in_text_end));
// }
// export function imTextStrFromUtf8(out_buf: ImWchar, out_buf_size: number, in_text: string, in_text_end: string, in_remaining: Deno.UnsafeCallback): number {
//   return imgui.igImTextStrFromUtf8(out_buf, out_buf_size, cString(in_text), cString(in_text_end), in_remaining);
// }
// export function imTextCountCharsFromUtf8(in_text: string, in_text_end: string): number {
//   return imgui.igImTextCountCharsFromUtf8(cString(in_text), cString(in_text_end));
// }
// export function imTextCountUtf8BytesFromChar(in_text: string, in_text_end: string): number {
//   return imgui.igImTextCountUtf8BytesFromChar(cString(in_text), cString(in_text_end));
// }
// export function imTextCountUtf8BytesFromStr(in_text: ImWchar, in_text_end: ImWchar): number {
//   return imgui.igImTextCountUtf8BytesFromStr(in_text, in_text_end);
// }
// export function imPow_Float(x: number, y: number): number {
//   return imgui.igImPow_Float(x, y);
// }
// export function imPow_double(x: number, y: number): number {
//   return imgui.igImPow_double(x, y);
// }
// export function imLog_Float(x: number): number {
//   return imgui.igImLog_Float(x);
// }
// export function imLog_double(x: number): number {
//   return imgui.igImLog_double(x);
// }
// export function imAbs_Int(x: number): number {
//   return imgui.igImAbs_Int(x);
// }
// export function imAbs_Float(x: number): number {
//   return imgui.igImAbs_Float(x);
// }
// export function imAbs_double(x: number): number {
//   return imgui.igImAbs_double(x);
// }
// export function imSign_Float(x: number): number {
//   return imgui.igImSign_Float(x);
// }
// export function imSign_double(x: number): number {
//   return imgui.igImSign_double(x);
// }
// export function imRsqrt_Float(x: number): number {
//   return imgui.igImRsqrt_Float(x);
// }
// export function imRsqrt_double(x: number): number {
//   return imgui.igImRsqrt_double(x);
// }
// export function imMin(*pOut: ImVec2, lhs: ImVec2, rhs: ImVec2): void {
//    imgui.igImMin(*pOut[BUFFER], lhs[BUFFER], rhs[BUFFER]);
// }
// export function imMax(*pOut: ImVec2, lhs: ImVec2, rhs: ImVec2): void {
//    imgui.igImMax(*pOut[BUFFER], lhs[BUFFER], rhs[BUFFER]);
// }
// export function imClamp(*pOut: ImVec2, v: ImVec2, mn: ImVec2, mx: ImVec2): void {
//    imgui.igImClamp(*pOut[BUFFER], v[BUFFER], mn[BUFFER], mx[BUFFER]);
// }
// export function imLerp_Vec2Float(*pOut: ImVec2, a: ImVec2, b: ImVec2, t: number): void {
//    imgui.igImLerp_Vec2Float(*pOut[BUFFER], a[BUFFER], b[BUFFER], t);
// }
// export function imLerp_Vec2Vec2(*pOut: ImVec2, a: ImVec2, b: ImVec2, t: ImVec2): void {
//    imgui.igImLerp_Vec2Vec2(*pOut[BUFFER], a[BUFFER], b[BUFFER], t[BUFFER]);
// }
// export function imLerp_Vec4(*pOut: ImVec4, a: ImVec4, b: ImVec4, t: number): void {
//    imgui.igImLerp_Vec4(*pOut[BUFFER], a[BUFFER], b[BUFFER], t);
// }
// export function imSaturate(f: number): number {
//   return imgui.igImSaturate(f);
// }
// export function imLengthSqr_Vec2(lhs: ImVec2): number {
//   return imgui.igImLengthSqr_Vec2(lhs[BUFFER]);
// }
// export function imLengthSqr_Vec4(lhs: ImVec4): number {
//   return imgui.igImLengthSqr_Vec4(lhs[BUFFER]);
// }
// export function imInvLength(lhs: ImVec2, fail_value: number): number {
//   return imgui.igImInvLength(lhs[BUFFER], fail_value);
// }
// export function imFloor_Float(f: number): number {
//   return imgui.igImFloor_Float(f);
// }
// export function imFloorSigned_Float(f: number): number {
//   return imgui.igImFloorSigned_Float(f);
// }
// export function imFloor_Vec2(*pOut: ImVec2, v: ImVec2): void {
//    imgui.igImFloor_Vec2(*pOut[BUFFER], v[BUFFER]);
// }
// export function imFloorSigned_Vec2(*pOut: ImVec2, v: ImVec2): void {
//    imgui.igImFloorSigned_Vec2(*pOut[BUFFER], v[BUFFER]);
// }
// export function imModPositive(a: number, b: number): number {
//   return imgui.igImModPositive(a, b);
// }
// export function imDot(a: ImVec2, b: ImVec2): number {
//   return imgui.igImDot(a[BUFFER], b[BUFFER]);
// }
// export function imRotate(*pOut: ImVec2, v: ImVec2, cos_a: number, sin_a: number): void {
//    imgui.igImRotate(*pOut[BUFFER], v[BUFFER], cos_a, sin_a);
// }
// export function imLinearSweep(current: number, target: number, speed: number): number {
//   return imgui.igImLinearSweep(current, target, speed);
// }
// export function imMul(*pOut: ImVec2, lhs: ImVec2, rhs: ImVec2): void {
//    imgui.igImMul(*pOut[BUFFER], lhs[BUFFER], rhs[BUFFER]);
// }
// export function imIsFloatAboveGuaranteedIntegerPrecision(f: number): boolean {
//   return imgui.igImIsFloatAboveGuaranteedIntegerPrecision(f);
// }
// export function imExponentialMovingAverage(avg: number, sample: number, n: number): number {
//   return imgui.igImExponentialMovingAverage(avg, sample, n);
// }
// export function imBezierCubicCalc(*pOut: ImVec2, p1: ImVec2, p2: ImVec2, p3: ImVec2, p4: ImVec2, t: number): void {
//    imgui.igImBezierCubicCalc(*pOut[BUFFER], p1[BUFFER], p2[BUFFER], p3[BUFFER], p4[BUFFER], t);
// }
// export function imBezierCubicClosestPoint(*pOut: ImVec2, p1: ImVec2, p2: ImVec2, p3: ImVec2, p4: ImVec2, p: ImVec2, num_segments: number): void {
//    imgui.igImBezierCubicClosestPoint(*pOut[BUFFER], p1[BUFFER], p2[BUFFER], p3[BUFFER], p4[BUFFER], p[BUFFER], num_segments);
// }
// export function imBezierCubicClosestPointCasteljau(*pOut: ImVec2, p1: ImVec2, p2: ImVec2, p3: ImVec2, p4: ImVec2, p: ImVec2, tess_tol: number): void {
//    imgui.igImBezierCubicClosestPointCasteljau(*pOut[BUFFER], p1[BUFFER], p2[BUFFER], p3[BUFFER], p4[BUFFER], p[BUFFER], tess_tol);
// }
// export function imBezierQuadraticCalc(*pOut: ImVec2, p1: ImVec2, p2: ImVec2, p3: ImVec2, t: number): void {
//    imgui.igImBezierQuadraticCalc(*pOut[BUFFER], p1[BUFFER], p2[BUFFER], p3[BUFFER], t);
// }
// export function imLineClosestPoint(*pOut: ImVec2, a: ImVec2, b: ImVec2, p: ImVec2): void {
//    imgui.igImLineClosestPoint(*pOut[BUFFER], a[BUFFER], b[BUFFER], p[BUFFER]);
// }
// export function imTriangleContainsPoint(a: ImVec2, b: ImVec2, c: ImVec2, p: ImVec2): boolean {
//   return imgui.igImTriangleContainsPoint(a[BUFFER], b[BUFFER], c[BUFFER], p[BUFFER]);
// }
// export function imTriangleClosestPoint(*pOut: ImVec2, a: ImVec2, b: ImVec2, c: ImVec2, p: ImVec2): void {
//    imgui.igImTriangleClosestPoint(*pOut[BUFFER], a[BUFFER], b[BUFFER], c[BUFFER], p[BUFFER]);
// }
// export function imTriangleBarycentricCoords(a: ImVec2, b: ImVec2, c: ImVec2, p: ImVec2, out_u: Float32Array, out_v: Float32Array, out_w: Float32Array): void {
//    imgui.igImTriangleBarycentricCoords(a[BUFFER], b[BUFFER], c[BUFFER], p[BUFFER], out_u, out_v, out_w);
// }
// export function imTriangleArea(a: ImVec2, b: ImVec2, c: ImVec2): number {
//   return imgui.igImTriangleArea(a[BUFFER], b[BUFFER], c[BUFFER]);
// }
// export function imGetDirQuadrantFromDelta(dx: number, dy: number): ImGuiDir {
//   return imgui.igImGetDirQuadrantFromDelta(dx, dy);
// }
// export function imBitArrayTestBit(arr: ImU32, n: number): boolean {
//   return imgui.igImBitArrayTestBit(arr, n);
// }
// export function imBitArrayClearBit(arr: ImU32, n: number): void {
//    imgui.igImBitArrayClearBit(arr, n);
// }
// export function imBitArraySetBit(arr: ImU32, n: number): void {
//    imgui.igImBitArraySetBit(arr, n);
// }
// export function imBitArraySetBitRange(arr: ImU32, n: number, n2: number): void {
//    imgui.igImBitArraySetBitRange(arr, n, n2);
// }
// export function getCurrentWindowRead(): ImGuiWindow {
//   return imgui.igGetCurrentWindowRead();
// }
// export function getCurrentWindow(): ImGuiWindow {
//   return imgui.igGetCurrentWindow();
// }
// export function findWindowByID(id: ImGuiID): ImGuiWindow {
//   return imgui.igFindWindowByID(id);
// }
// export function findWindowByName(name: string): ImGuiWindow {
//   return imgui.igFindWindowByName(cString(name));
// }
// export function updateWindowParentAndRootLinks(window: ImGuiWindow, flags: ImGuiWindowFlags, parent_window: ImGuiWindow): void {
//    imgui.igUpdateWindowParentAndRootLinks(window, flags, parent_window);
// }
// export function calcWindowNextAutoFitSize(*pOut: ImVec2, window: ImGuiWindow): void {
//    imgui.igCalcWindowNextAutoFitSize(*pOut[BUFFER], window);
// }
// export function isWindowChildOf(window: ImGuiWindow, potential_parent: ImGuiWindow, popup_hierarchy: boolean, dock_hierarchy: boolean): boolean {
//   return imgui.igIsWindowChildOf(window, potential_parent, popup_hierarchy, dock_hierarchy);
// }
// export function isWindowWithinBeginStackOf(window: ImGuiWindow, potential_parent: ImGuiWindow): boolean {
//   return imgui.igIsWindowWithinBeginStackOf(window, potential_parent);
// }
// export function isWindowAbove(potential_above: ImGuiWindow, potential_below: ImGuiWindow): boolean {
//   return imgui.igIsWindowAbove(potential_above, potential_below);
// }
// export function isWindowNavFocusable(window: ImGuiWindow): boolean {
//   return imgui.igIsWindowNavFocusable(window);
// }
// export function setWindowPos_WindowPtr(window: ImGuiWindow, pos: ImVec2, cond: ImGuiCond): void {
//    imgui.igSetWindowPos_WindowPtr(window, pos[BUFFER], cond);
// }
// export function setWindowSize_WindowPtr(window: ImGuiWindow, size: ImVec2, cond: ImGuiCond): void {
//    imgui.igSetWindowSize_WindowPtr(window, size[BUFFER], cond);
// }
// export function setWindowCollapsed_WindowPtr(window: ImGuiWindow, collapsed: boolean, cond: ImGuiCond): void {
//    imgui.igSetWindowCollapsed_WindowPtr(window, collapsed, cond);
// }
// export function setWindowHitTestHole(window: ImGuiWindow, pos: ImVec2, size: ImVec2): void {
//    imgui.igSetWindowHitTestHole(window, pos[BUFFER], size[BUFFER]);
// }
// export function windowRectAbsToRel(*pOut: ImRect, window: ImGuiWindow, r: ImRect): void {
//    imgui.igWindowRectAbsToRel(*pOut, window, r);
// }
// export function windowRectRelToAbs(*pOut: ImRect, window: ImGuiWindow, r: ImRect): void {
//    imgui.igWindowRectRelToAbs(*pOut, window, r);
// }
// export function focusWindow(window: ImGuiWindow): void {
//    imgui.igFocusWindow(window);
// }
// export function focusTopMostWindowUnderOne(under_this_window: ImGuiWindow, ignore_window: ImGuiWindow): void {
//    imgui.igFocusTopMostWindowUnderOne(under_this_window, ignore_window);
// }
// export function bringWindowToFocusFront(window: ImGuiWindow): void {
//    imgui.igBringWindowToFocusFront(window);
// }
// export function bringWindowToDisplayFront(window: ImGuiWindow): void {
//    imgui.igBringWindowToDisplayFront(window);
// }
// export function bringWindowToDisplayBack(window: ImGuiWindow): void {
//    imgui.igBringWindowToDisplayBack(window);
// }
// export function bringWindowToDisplayBehind(window: ImGuiWindow, above_window: ImGuiWindow): void {
//    imgui.igBringWindowToDisplayBehind(window, above_window);
// }
// export function findWindowDisplayIndex(window: ImGuiWindow): number {
//   return imgui.igFindWindowDisplayIndex(window);
// }
// export function findBottomMostVisibleWindowWithinBeginStack(window: ImGuiWindow): ImGuiWindow {
//   return imgui.igFindBottomMostVisibleWindowWithinBeginStack(window);
// }
// export function setCurrentFont(font: ImFont): void {
//    imgui.igSetCurrentFont(font);
// }
// export function getDefaultFont(): ImFont {
//   return imgui.igGetDefaultFont();
// }
// export function getForegroundDrawList_WindowPtr(window: ImGuiWindow): ImDrawList {
//   return imgui.igGetForegroundDrawList_WindowPtr(window);
// }
// export function initialize(): void {
//    imgui.igInitialize();
// }
// export function shutdown(): void {
//    imgui.igShutdown();
// }
// export function updateInputEvents(trickle_fast_inputs: boolean): void {
//    imgui.igUpdateInputEvents(trickle_fast_inputs);
// }
// export function updateHoveredWindowAndCaptureFlags(): void {
//    imgui.igUpdateHoveredWindowAndCaptureFlags();
// }
// export function startMouseMovingWindow(window: ImGuiWindow): void {
//    imgui.igStartMouseMovingWindow(window);
// }
// export function startMouseMovingWindowOrNode(window: ImGuiWindow, node: ImGuiDockNode, undock_floating_node: boolean): void {
//    imgui.igStartMouseMovingWindowOrNode(window, node, undock_floating_node);
// }
// export function updateMouseMovingWindowNewFrame(): void {
//    imgui.igUpdateMouseMovingWindowNewFrame();
// }
// export function updateMouseMovingWindowEndFrame(): void {
//    imgui.igUpdateMouseMovingWindowEndFrame();
// }
// export function addContextHook(context: ImGuiContext, hook: ImGuiContextHook): ImGuiID {
//   return imgui.igAddContextHook(context, hook);
// }
// export function removeContextHook(context: ImGuiContext, hook_to_remove: ImGuiID): void {
//    imgui.igRemoveContextHook(context, hook_to_remove);
// }
// export function translateWindowsInViewport(viewport: ImGuiViewportP, old_pos: ImVec2, new_pos: ImVec2): void {
//    imgui.igTranslateWindowsInViewport(viewport, old_pos[BUFFER], new_pos[BUFFER]);
// }
// export function scaleWindowsInViewport(viewport: ImGuiViewportP, scale: number): void {
//    imgui.igScaleWindowsInViewport(viewport, scale);
// }
// export function destroyPlatformWindow(viewport: ImGuiViewportP): void {
//    imgui.igDestroyPlatformWindow(viewport);
// }
// export function setWindowViewport(window: ImGuiWindow, viewport: ImGuiViewportP): void {
//    imgui.igSetWindowViewport(window, viewport);
// }
// export function setCurrentViewport(window: ImGuiWindow, viewport: ImGuiViewportP): void {
//    imgui.igSetCurrentViewport(window, viewport);
// }
// export function getViewportPlatformMonitor(viewport: ImGuiViewport): ImGuiPlatformMonitor {
//   return imgui.igGetViewportPlatformMonitor(viewport);
// }
// export function findHoveredViewportFromPlatformWindowStack(mouse_platform_pos: ImVec2): ImGuiViewportP {
//   return imgui.igFindHoveredViewportFromPlatformWindowStack(mouse_platform_pos[BUFFER]);
// }
// export function markIniSettingsDirty_Nil(): void {
//    imgui.igMarkIniSettingsDirty_Nil();
// }
// export function markIniSettingsDirty_WindowPtr(window: ImGuiWindow): void {
//    imgui.igMarkIniSettingsDirty_WindowPtr(window);
// }
// export function clearIniSettings(): void {
//    imgui.igClearIniSettings();
// }
// export function createNewWindowSettings(name: string): ImGuiWindowSettings {
//   return imgui.igCreateNewWindowSettings(cString(name));
// }
// export function findWindowSettings(id: ImGuiID): ImGuiWindowSettings {
//   return imgui.igFindWindowSettings(id);
// }
// export function findOrCreateWindowSettings(name: string): ImGuiWindowSettings {
//   return imgui.igFindOrCreateWindowSettings(cString(name));
// }
// export function addSettingsHandler(handler: ImGuiSettingsHandler): void {
//    imgui.igAddSettingsHandler(handler);
// }
// export function removeSettingsHandler(type_name: string): void {
//    imgui.igRemoveSettingsHandler(cString(type_name));
// }
// export function findSettingsHandler(type_name: string): ImGuiSettingsHandler {
//   return imgui.igFindSettingsHandler(cString(type_name));
// }
// export function localizeRegisterEntries(entries: ImGuiLocEntry, count: number): void {
//    imgui.igLocalizeRegisterEntries(entries, count);
// }
// export function setScrollX_WindowPtr(window: ImGuiWindow, scroll_x: number): void {
//    imgui.igSetScrollX_WindowPtr(window, scroll_x);
// }
// export function setScrollY_WindowPtr(window: ImGuiWindow, scroll_y: number): void {
//    imgui.igSetScrollY_WindowPtr(window, scroll_y);
// }
// export function setScrollFromPosX_WindowPtr(window: ImGuiWindow, local_x: number, center_x_ratio: number): void {
//    imgui.igSetScrollFromPosX_WindowPtr(window, local_x, center_x_ratio);
// }
// export function setScrollFromPosY_WindowPtr(window: ImGuiWindow, local_y: number, center_y_ratio: number): void {
//    imgui.igSetScrollFromPosY_WindowPtr(window, local_y, center_y_ratio);
// }
// export function scrollToItem(flags: ImGuiScrollFlags): void {
//    imgui.igScrollToItem(flags);
// }
// export function scrollToRect(window: ImGuiWindow, rect: ImRect, flags: ImGuiScrollFlags): void {
//    imgui.igScrollToRect(window, rect, flags);
// }
// export function scrollToRectEx(*pOut: ImVec2, window: ImGuiWindow, rect: ImRect, flags: ImGuiScrollFlags): void {
//    imgui.igScrollToRectEx(*pOut[BUFFER], window, rect, flags);
// }
// export function scrollToBringRectIntoView(window: ImGuiWindow, rect: ImRect): void {
//    imgui.igScrollToBringRectIntoView(window, rect);
// }
// export function getItemStatusFlags(): ImGuiItemStatusFlags {
//   return imgui.igGetItemStatusFlags();
// }
// export function getItemFlags(): ImGuiItemFlags {
//   return imgui.igGetItemFlags();
// }
// export function getActiveID(): ImGuiID {
//   return imgui.igGetActiveID();
// }
// export function getFocusID(): ImGuiID {
//   return imgui.igGetFocusID();
// }
// export function setActiveID(id: ImGuiID, window: ImGuiWindow): void {
//    imgui.igSetActiveID(id, window);
// }
// export function setFocusID(id: ImGuiID, window: ImGuiWindow): void {
//    imgui.igSetFocusID(id, window);
// }
// export function clearActiveID(): void {
//    imgui.igClearActiveID();
// }
// export function getHoveredID(): ImGuiID {
//   return imgui.igGetHoveredID();
// }
// export function setHoveredID(id: ImGuiID): void {
//    imgui.igSetHoveredID(id);
// }
// export function keepAliveID(id: ImGuiID): void {
//    imgui.igKeepAliveID(id);
// }
// export function markItemEdited(id: ImGuiID): void {
//    imgui.igMarkItemEdited(id);
// }
// export function pushOverrideID(id: ImGuiID): void {
//    imgui.igPushOverrideID(id);
// }
// export function getIDWithSeed(str_id_begin: string, str_id_end: string, seed: ImGuiID): ImGuiID {
//   return imgui.igGetIDWithSeed(cString(str_id_begin), cString(str_id_end), seed);
// }
// export function itemSize_Vec2(size: ImVec2, text_baseline_y: number): void {
//    imgui.igItemSize_Vec2(size[BUFFER], text_baseline_y);
// }
// export function itemSize_Rect(bb: ImRect, text_baseline_y: number): void {
//    imgui.igItemSize_Rect(bb, text_baseline_y);
// }
// export function itemAdd(bb: ImRect, id: ImGuiID, nav_bb: ImRect, extra_flags: ImGuiItemFlags): boolean {
//   return imgui.igItemAdd(bb, id, nav_bb, extra_flags);
// }
// export function itemHoverable(bb: ImRect, id: ImGuiID): boolean {
//   return imgui.igItemHoverable(bb, id);
// }
// export function isClippedEx(bb: ImRect, id: ImGuiID): boolean {
//   return imgui.igIsClippedEx(bb, id);
// }
// export function setLastItemData(item_id: ImGuiID, in_flags: ImGuiItemFlags, status_flags: ImGuiItemStatusFlags, item_rect: ImRect): void {
//    imgui.igSetLastItemData(item_id, in_flags, status_flags, item_rect);
// }
// export function calcItemSize(*pOut: ImVec2, size: ImVec2, default_w: number, default_h: number): void {
//    imgui.igCalcItemSize(*pOut[BUFFER], size[BUFFER], default_w, default_h);
// }
// export function calcWrapWidthForPos(pos: ImVec2, wrap_pos_x: number): number {
//   return imgui.igCalcWrapWidthForPos(pos[BUFFER], wrap_pos_x);
// }
// export function pushMultiItemsWidths(components: number, width_full: number): void {
//    imgui.igPushMultiItemsWidths(components, width_full);
// }
// export function isItemToggledSelection(): boolean {
//   return imgui.igIsItemToggledSelection();
// }
// export function getContentRegionMaxAbs(*pOut: ImVec2): void {
//    imgui.igGetContentRegionMaxAbs(*pOut[BUFFER]);
// }
// export function shrinkWidths(items: ImGuiShrinkWidthItem, count: number, width_excess: number): void {
//    imgui.igShrinkWidths(items, count, width_excess);
// }
// export function pushItemFlag(option: ImGuiItemFlags, enabled: boolean): void {
//    imgui.igPushItemFlag(option, enabled);
// }
// export function popItemFlag(): void {
//    imgui.igPopItemFlag();
// }
// export function logToBuffer(auto_open_depth: number): void {
//    imgui.igLogToBuffer(auto_open_depth);
// }
// export function logRenderedText(ref_pos: ImVec2, text: string, text_end: string): void {
//    imgui.igLogRenderedText(ref_pos, cString(text), cString(text_end));
// }
// export function logSetNextTextDecoration(prefix: string, suffix: string): void {
//    imgui.igLogSetNextTextDecoration(cString(prefix), cString(suffix));
// }
// export function beginChildEx(name: string, id: ImGuiID, size_arg: ImVec2, border: boolean, flags: ImGuiWindowFlags): boolean {
//   return imgui.igBeginChildEx(cString(name), id, size_arg[BUFFER], border, flags);
// }
// export function openPopupEx(id: ImGuiID, popup_flags: ImGuiPopupFlags): void {
//    imgui.igOpenPopupEx(id, popup_flags);
// }
// export function closePopupToLevel(remaining: number, restore_focus_to_window_under_popup: boolean): void {
//    imgui.igClosePopupToLevel(remaining, restore_focus_to_window_under_popup);
// }
// export function closePopupsOverWindow(ref_window: ImGuiWindow, restore_focus_to_window_under_popup: boolean): void {
//    imgui.igClosePopupsOverWindow(ref_window, restore_focus_to_window_under_popup);
// }
// export function closePopupsExceptModals(): void {
//    imgui.igClosePopupsExceptModals();
// }
// export function isPopupOpen_ID(id: ImGuiID, popup_flags: ImGuiPopupFlags): boolean {
//   return imgui.igIsPopupOpen_ID(id, popup_flags);
// }
// export function beginPopupEx(id: ImGuiID, extra_flags: ImGuiWindowFlags): boolean {
//   return imgui.igBeginPopupEx(id, extra_flags);
// }
// export function beginTooltipEx(tooltip_flags: ImGuiTooltipFlags, extra_window_flags: ImGuiWindowFlags): void {
//    imgui.igBeginTooltipEx(tooltip_flags, extra_window_flags);
// }
// export function getPopupAllowedExtentRect(*pOut: ImRect, window: ImGuiWindow): void {
//    imgui.igGetPopupAllowedExtentRect(*pOut, window);
// }
// export function getTopMostPopupModal(): ImGuiWindow {
//   return imgui.igGetTopMostPopupModal();
// }
// export function getTopMostAndVisiblePopupModal(): ImGuiWindow {
//   return imgui.igGetTopMostAndVisiblePopupModal();
// }
// export function findBestWindowPosForPopup(*pOut: ImVec2, window: ImGuiWindow): void {
//    imgui.igFindBestWindowPosForPopup(*pOut[BUFFER], window);
// }
// export function beginViewportSideBar(name: string, viewport: ImGuiViewport, dir: ImGuiDir, size: number, window_flags: ImGuiWindowFlags): boolean {
//   return imgui.igBeginViewportSideBar(cString(name), viewport, dir, size, window_flags);
// }
// export function beginMenuEx(label: string, icon: string, enabled: boolean): boolean {
//   return imgui.igBeginMenuEx(cString(label), cString(icon), enabled);
// }
// export function menuItemEx(label: string, icon: string, shortcut: string, selected: boolean, enabled: boolean): boolean {
//   return imgui.igMenuItemEx(cString(label), cString(icon), cString(shortcut), selected, enabled);
// }
// export function beginComboPopup(popup_id: ImGuiID, bb: ImRect, flags: ImGuiComboFlags): boolean {
//   return imgui.igBeginComboPopup(popup_id, bb, flags);
// }
// export function beginComboPreview(): boolean {
//   return imgui.igBeginComboPreview();
// }
// export function endComboPreview(): void {
//    imgui.igEndComboPreview();
// }
// export function navInitWindow(window: ImGuiWindow, force_reinit: boolean): void {
//    imgui.igNavInitWindow(window, force_reinit);
// }
// export function navInitRequestApplyResult(): void {
//    imgui.igNavInitRequestApplyResult();
// }
// export function navMoveRequestButNoResultYet(): boolean {
//   return imgui.igNavMoveRequestButNoResultYet();
// }
// export function navMoveRequestSubmit(move_dir: ImGuiDir, clip_dir: ImGuiDir, move_flags: ImGuiNavMoveFlags, scroll_flags: ImGuiScrollFlags): void {
//    imgui.igNavMoveRequestSubmit(move_dir, clip_dir, move_flags, scroll_flags);
// }
// export function navMoveRequestForward(move_dir: ImGuiDir, clip_dir: ImGuiDir, move_flags: ImGuiNavMoveFlags, scroll_flags: ImGuiScrollFlags): void {
//    imgui.igNavMoveRequestForward(move_dir, clip_dir, move_flags, scroll_flags);
// }
// export function navMoveRequestResolveWithLastItem(result: ImGuiNavItemData): void {
//    imgui.igNavMoveRequestResolveWithLastItem(result);
// }
// export function navMoveRequestCancel(): void {
//    imgui.igNavMoveRequestCancel();
// }
// export function navMoveRequestApplyResult(): void {
//    imgui.igNavMoveRequestApplyResult();
// }
// export function navMoveRequestTryWrapping(window: ImGuiWindow, move_flags: ImGuiNavMoveFlags): void {
//    imgui.igNavMoveRequestTryWrapping(window, move_flags);
// }
// export function activateItem(id: ImGuiID): void {
//    imgui.igActivateItem(id);
// }
// export function setNavWindow(window: ImGuiWindow): void {
//    imgui.igSetNavWindow(window);
// }
// export function isNamedKey(key: ImGuiKey): boolean {
//   return imgui.igIsNamedKey(key);
// }
// export function isNamedKeyOrModKey(key: ImGuiKey): boolean {
//   return imgui.igIsNamedKeyOrModKey(key);
// }
// export function isLegacyKey(key: ImGuiKey): boolean {
//   return imgui.igIsLegacyKey(key);
// }
// export function isKeyboardKey(key: ImGuiKey): boolean {
//   return imgui.igIsKeyboardKey(key);
// }
// export function isGamepadKey(key: ImGuiKey): boolean {
//   return imgui.igIsGamepadKey(key);
// }
// export function isMouseKey(key: ImGuiKey): boolean {
//   return imgui.igIsMouseKey(key);
// }
// export function isAliasKey(key: ImGuiKey): boolean {
//   return imgui.igIsAliasKey(key);
// }
// export function convertShortcutMod(key_chord: ImGuiKeyChord): ImGuiKeyChord {
//   return imgui.igConvertShortcutMod(key_chord);
// }
// export function convertSingleModFlagToKey(key: ImGuiKey): ImGuiKey {
//   return imgui.igConvertSingleModFlagToKey(key);
// }
// export function getKeyData(key: ImGuiKey): ImGuiKeyData {
//   return imgui.igGetKeyData(key);
// }
// export function getKeyChordName(key_chord: ImGuiKeyChord, out_buf: string, out_buf_size: number): void {
//    imgui.igGetKeyChordName(key_chord, cString(out_buf), out_buf_size);
// }
// export function mouseButtonToKey(button: ImGuiMouseButton): ImGuiKey {
//   return imgui.igMouseButtonToKey(button);
// }
// export function isMouseDragPastThreshold(button: ImGuiMouseButton, lock_threshold: number): boolean {
//   return imgui.igIsMouseDragPastThreshold(button, lock_threshold);
// }
// export function getKeyMagnitude2d(*pOut: ImVec2, key_left: ImGuiKey, key_right: ImGuiKey, key_up: ImGuiKey, key_down: ImGuiKey): void {
//    imgui.igGetKeyMagnitude2d(*pOut[BUFFER], key_left, key_right, key_up, key_down);
// }
// export function getNavTweakPressedAmount(axis: ImGuiAxis): number {
//   return imgui.igGetNavTweakPressedAmount(axis);
// }
// export function calcTypematicRepeatAmount(t0: number, t1: number, repeat_delay: number, repeat_rate: number): number {
//   return imgui.igCalcTypematicRepeatAmount(t0, t1, repeat_delay, repeat_rate);
// }
// export function getTypematicRepeatRate(flags: ImGuiInputFlags, repeat_delay: Float32Array, repeat_rate: Float32Array): void {
//    imgui.igGetTypematicRepeatRate(flags, repeat_delay, repeat_rate);
// }
// export function setActiveIdUsingAllKeyboardKeys(): void {
//    imgui.igSetActiveIdUsingAllKeyboardKeys();
// }
// export function isActiveIdUsingNavDir(dir: ImGuiDir): boolean {
//   return imgui.igIsActiveIdUsingNavDir(dir);
// }
// export function getKeyOwner(key: ImGuiKey): ImGuiID {
//   return imgui.igGetKeyOwner(key);
// }
// export function setKeyOwner(key: ImGuiKey, owner_id: ImGuiID, flags: ImGuiInputFlags): void {
//    imgui.igSetKeyOwner(key, owner_id, flags);
// }
// export function setItemKeyOwner(key: ImGuiKey, flags: ImGuiInputFlags): void {
//    imgui.igSetItemKeyOwner(key, flags);
// }
// export function testKeyOwner(key: ImGuiKey, owner_id: ImGuiID): boolean {
//   return imgui.igTestKeyOwner(key, owner_id);
// }
// export function getKeyOwnerData(key: ImGuiKey): ImGuiKeyOwnerData {
//   return imgui.igGetKeyOwnerData(key);
// }
// export function isKeyDown_ID(key: ImGuiKey, owner_id: ImGuiID): boolean {
//   return imgui.igIsKeyDown_ID(key, owner_id);
// }
// export function isKeyPressed_ID(key: ImGuiKey, owner_id: ImGuiID, flags: ImGuiInputFlags): boolean {
//   return imgui.igIsKeyPressed_ID(key, owner_id, flags);
// }
// export function isKeyReleased_ID(key: ImGuiKey, owner_id: ImGuiID): boolean {
//   return imgui.igIsKeyReleased_ID(key, owner_id);
// }
// export function isMouseDown_ID(button: ImGuiMouseButton, owner_id: ImGuiID): boolean {
//   return imgui.igIsMouseDown_ID(button, owner_id);
// }
// export function isMouseClicked_ID(button: ImGuiMouseButton, owner_id: ImGuiID, flags: ImGuiInputFlags): boolean {
//   return imgui.igIsMouseClicked_ID(button, owner_id, flags);
// }
// export function isMouseReleased_ID(button: ImGuiMouseButton, owner_id: ImGuiID): boolean {
//   return imgui.igIsMouseReleased_ID(button, owner_id);
// }
// export function shortcut(key_chord: ImGuiKeyChord, owner_id: ImGuiID, flags: ImGuiInputFlags): boolean {
//   return imgui.igShortcut(key_chord, owner_id, flags);
// }
// export function setShortcutRouting(key_chord: ImGuiKeyChord, owner_id: ImGuiID, flags: ImGuiInputFlags): boolean {
//   return imgui.igSetShortcutRouting(key_chord, owner_id, flags);
// }
// export function testShortcutRouting(key_chord: ImGuiKeyChord, owner_id: ImGuiID): boolean {
//   return imgui.igTestShortcutRouting(key_chord, owner_id);
// }
// export function getShortcutRoutingData(key_chord: ImGuiKeyChord): ImGuiKeyRoutingData {
//   return imgui.igGetShortcutRoutingData(key_chord);
// }
// export function dockContextInitialize(ctx: ImGuiContext): void {
//    imgui.igDockContextInitialize(ctx);
// }
// export function dockContextShutdown(ctx: ImGuiContext): void {
//    imgui.igDockContextShutdown(ctx);
// }
// export function dockContextClearNodes(ctx: ImGuiContext, root_id: ImGuiID, clear_settings_refs: boolean): void {
//    imgui.igDockContextClearNodes(ctx, root_id, clear_settings_refs);
// }
// export function dockContextRebuildNodes(ctx: ImGuiContext): void {
//    imgui.igDockContextRebuildNodes(ctx);
// }
// export function dockContextNewFrameUpdateUndocking(ctx: ImGuiContext): void {
//    imgui.igDockContextNewFrameUpdateUndocking(ctx);
// }
// export function dockContextNewFrameUpdateDocking(ctx: ImGuiContext): void {
//    imgui.igDockContextNewFrameUpdateDocking(ctx);
// }
// export function dockContextEndFrame(ctx: ImGuiContext): void {
//    imgui.igDockContextEndFrame(ctx);
// }
// export function dockContextGenNodeID(ctx: ImGuiContext): ImGuiID {
//   return imgui.igDockContextGenNodeID(ctx);
// }
// export function dockContextQueueDock(ctx: ImGuiContext, target: ImGuiWindow, target_node: ImGuiDockNode, payload: ImGuiWindow, split_dir: ImGuiDir, split_ratio: number, split_outer: boolean): void {
//    imgui.igDockContextQueueDock(ctx, target, target_node, payload, split_dir, split_ratio, split_outer);
// }
// export function dockContextQueueUndockWindow(ctx: ImGuiContext, window: ImGuiWindow): void {
//    imgui.igDockContextQueueUndockWindow(ctx, window);
// }
// export function dockContextQueueUndockNode(ctx: ImGuiContext, node: ImGuiDockNode): void {
//    imgui.igDockContextQueueUndockNode(ctx, node);
// }
// export function dockContextCalcDropPosForDocking(target: ImGuiWindow, target_node: ImGuiDockNode, payload_window: ImGuiWindow, payload_node: ImGuiDockNode, split_dir: ImGuiDir, split_outer: boolean, out_pos: ImVec2): boolean {
//   return imgui.igDockContextCalcDropPosForDocking(target, target_node, payload_window, payload_node, split_dir, split_outer, out_pos);
// }
// export function dockContextFindNodeByID(ctx: ImGuiContext, id: ImGuiID): ImGuiDockNode {
//   return imgui.igDockContextFindNodeByID(ctx, id);
// }
// export function dockNodeBeginAmendTabBar(node: ImGuiDockNode): boolean {
//   return imgui.igDockNodeBeginAmendTabBar(node);
// }
// export function dockNodeEndAmendTabBar(): void {
//    imgui.igDockNodeEndAmendTabBar();
// }
// export function dockNodeGetRootNode(node: ImGuiDockNode): ImGuiDockNode {
//   return imgui.igDockNodeGetRootNode(node);
// }
// export function dockNodeIsInHierarchyOf(node: ImGuiDockNode, parent: ImGuiDockNode): boolean {
//   return imgui.igDockNodeIsInHierarchyOf(node, parent);
// }
// export function dockNodeGetDepth(node: ImGuiDockNode): number {
//   return imgui.igDockNodeGetDepth(node);
// }
// export function dockNodeGetWindowMenuButtonId(node: ImGuiDockNode): ImGuiID {
//   return imgui.igDockNodeGetWindowMenuButtonId(node);
// }
// export function getWindowDockNode(): ImGuiDockNode {
//   return imgui.igGetWindowDockNode();
// }
// export function getWindowAlwaysWantOwnTabBar(window: ImGuiWindow): boolean {
//   return imgui.igGetWindowAlwaysWantOwnTabBar(window);
// }
// export function beginDocked(window: ImGuiWindow, open: CBool | null = null): void {
//    imgui.igBeginDocked(window, open ? open[BUFFER] : null);
// }
// export function beginDockableDragDropSource(window: ImGuiWindow): void {
//    imgui.igBeginDockableDragDropSource(window);
// }
// export function beginDockableDragDropTarget(window: ImGuiWindow): void {
//    imgui.igBeginDockableDragDropTarget(window);
// }
// export function setWindowDock(window: ImGuiWindow, dock_id: ImGuiID, cond: ImGuiCond): void {
//    imgui.igSetWindowDock(window, dock_id, cond);
// }
// export function dockBuilderDockWindow(window_name: string, node_id: ImGuiID): void {
//    imgui.igDockBuilderDockWindow(cString(window_name), node_id);
// }
// export function dockBuilderGetNode(node_id: ImGuiID): ImGuiDockNode {
//   return imgui.igDockBuilderGetNode(node_id);
// }
// export function dockBuilderGetCentralNode(node_id: ImGuiID): ImGuiDockNode {
//   return imgui.igDockBuilderGetCentralNode(node_id);
// }
// export function dockBuilderAddNode(node_id: ImGuiID, flags: ImGuiDockNodeFlags): ImGuiID {
//   return imgui.igDockBuilderAddNode(node_id, flags);
// }
// export function dockBuilderRemoveNode(node_id: ImGuiID): void {
//    imgui.igDockBuilderRemoveNode(node_id);
// }
// export function dockBuilderRemoveNodeDockedWindows(node_id: ImGuiID, clear_settings_refs: boolean): void {
//    imgui.igDockBuilderRemoveNodeDockedWindows(node_id, clear_settings_refs);
// }
// export function dockBuilderRemoveNodeChildNodes(node_id: ImGuiID): void {
//    imgui.igDockBuilderRemoveNodeChildNodes(node_id);
// }
// export function dockBuilderSetNodePos(node_id: ImGuiID, pos: ImVec2): void {
//    imgui.igDockBuilderSetNodePos(node_id, pos[BUFFER]);
// }
// export function dockBuilderSetNodeSize(node_id: ImGuiID, size: ImVec2): void {
//    imgui.igDockBuilderSetNodeSize(node_id, size[BUFFER]);
// }
// export function dockBuilderSplitNode(node_id: ImGuiID, split_dir: ImGuiDir, size_ratio_for_node_at_dir: number, out_id_at_dir: ImGuiID, out_id_at_opposite_dir: ImGuiID): ImGuiID {
//   return imgui.igDockBuilderSplitNode(node_id, split_dir, size_ratio_for_node_at_dir, out_id_at_dir, out_id_at_opposite_dir);
// }
// export function dockBuilderCopyDockSpace(src_dockspace_id: ImGuiID, dst_dockspace_id: ImGuiID, in_window_remap_pairs: ImVector__charPtr): void {
//    imgui.igDockBuilderCopyDockSpace(src_dockspace_id, dst_dockspace_id, in_window_remap_pairs);
// }
// export function dockBuilderCopyNode(src_node_id: ImGuiID, dst_node_id: ImGuiID, out_node_remap_pairs: ImVector_ImGuiID): void {
//    imgui.igDockBuilderCopyNode(src_node_id, dst_node_id, out_node_remap_pairs);
// }
// export function dockBuilderCopyWindowSettings(src_name: string, dst_name: string): void {
//    imgui.igDockBuilderCopyWindowSettings(cString(src_name), cString(dst_name));
// }
// export function dockBuilderFinish(node_id: ImGuiID): void {
//    imgui.igDockBuilderFinish(node_id);
// }
// export function pushFocusScope(id: ImGuiID): void {
//    imgui.igPushFocusScope(id);
// }
// export function popFocusScope(): void {
//    imgui.igPopFocusScope();
// }
// export function getCurrentFocusScope(): ImGuiID {
//   return imgui.igGetCurrentFocusScope();
// }
// export function isDragDropActive(): boolean {
//   return imgui.igIsDragDropActive();
// }
// export function beginDragDropTargetCustom(bb: ImRect, id: ImGuiID): boolean {
//   return imgui.igBeginDragDropTargetCustom(bb, id);
// }
// export function clearDragDrop(): void {
//    imgui.igClearDragDrop();
// }
// export function isDragDropPayloadBeingAccepted(): boolean {
//   return imgui.igIsDragDropPayloadBeingAccepted();
// }
// export function renderDragDropTargetRect(bb: ImRect): void {
//    imgui.igRenderDragDropTargetRect(bb);
// }
// export function setWindowClipRectBeforeSetChannel(window: ImGuiWindow, clip_rect: ImRect): void {
//    imgui.igSetWindowClipRectBeforeSetChannel(window, clip_rect);
// }
// export function beginColumns(str_id: string, count: number, flags: ImGuiOldColumnFlags): void {
//    imgui.igBeginColumns(cString(str_id), count, flags);
// }
// export function endColumns(): void {
//    imgui.igEndColumns();
// }
// export function pushColumnClipRect(column_index: number): void {
//    imgui.igPushColumnClipRect(column_index);
// }
// export function pushColumnsBackground(): void {
//    imgui.igPushColumnsBackground();
// }
// export function popColumnsBackground(): void {
//    imgui.igPopColumnsBackground();
// }
// export function getColumnsID(str_id: string, count: number): ImGuiID {
//   return imgui.igGetColumnsID(cString(str_id), count);
// }
// export function findOrCreateColumns(window: ImGuiWindow, id: ImGuiID): ImGuiOldColumns {
//   return imgui.igFindOrCreateColumns(window, id);
// }
// export function getColumnOffsetFromNorm(columns: ImGuiOldColumns, offset_norm: number): number {
//   return imgui.igGetColumnOffsetFromNorm(columns, offset_norm);
// }
// export function getColumnNormFromOffset(columns: ImGuiOldColumns, offset: number): number {
//   return imgui.igGetColumnNormFromOffset(columns, offset);
// }
// export function tableOpenContextMenu(column_n: number): void {
//    imgui.igTableOpenContextMenu(column_n);
// }
// export function tableSetColumnWidth(column_n: number, width: number): void {
//    imgui.igTableSetColumnWidth(column_n, width);
// }
// export function tableSetColumnSortDirection(column_n: number, sort_direction: ImGuiSortDirection, append_to_sort_specs: boolean): void {
//    imgui.igTableSetColumnSortDirection(column_n, sort_direction, append_to_sort_specs);
// }
// export function tableGetHoveredColumn(): number {
//   return imgui.igTableGetHoveredColumn();
// }
// export function tableGetHeaderRowHeight(): number {
//   return imgui.igTableGetHeaderRowHeight();
// }
// export function tablePushBackgroundChannel(): void {
//    imgui.igTablePushBackgroundChannel();
// }
// export function tablePopBackgroundChannel(): void {
//    imgui.igTablePopBackgroundChannel();
// }
// export function getCurrentTable(): ImGuiTable {
//   return imgui.igGetCurrentTable();
// }
// export function tableFindByID(id: ImGuiID): ImGuiTable {
//   return imgui.igTableFindByID(id);
// }
// export function beginTableEx(name: string, id: ImGuiID, columns_count: number, flags: ImGuiTableFlags, outer_size: ImVec2, inner_width: number): boolean {
//   return imgui.igBeginTableEx(cString(name), id, columns_count, flags, outer_size[BUFFER], inner_width);
// }
// export function tableBeginInitMemory(table: ImGuiTable, columns_count: number): void {
//    imgui.igTableBeginInitMemory(table, columns_count);
// }
// export function tableBeginApplyRequests(table: ImGuiTable): void {
//    imgui.igTableBeginApplyRequests(table);
// }
// export function tableSetupDrawChannels(table: ImGuiTable): void {
//    imgui.igTableSetupDrawChannels(table);
// }
// export function tableUpdateLayout(table: ImGuiTable): void {
//    imgui.igTableUpdateLayout(table);
// }
// export function tableUpdateBorders(table: ImGuiTable): void {
//    imgui.igTableUpdateBorders(table);
// }
// export function tableUpdateColumnsWeightFromWidth(table: ImGuiTable): void {
//    imgui.igTableUpdateColumnsWeightFromWidth(table);
// }
// export function tableDrawBorders(table: ImGuiTable): void {
//    imgui.igTableDrawBorders(table);
// }
// export function tableDrawContextMenu(table: ImGuiTable): void {
//    imgui.igTableDrawContextMenu(table);
// }
// export function tableBeginContextMenuPopup(table: ImGuiTable): boolean {
//   return imgui.igTableBeginContextMenuPopup(table);
// }
// export function tableMergeDrawChannels(table: ImGuiTable): void {
//    imgui.igTableMergeDrawChannels(table);
// }
// export function tableGetInstanceData(table: ImGuiTable, instance_no: number): ImGuiTableInstanceData {
//   return imgui.igTableGetInstanceData(table, instance_no);
// }
// export function tableSortSpecsSanitize(table: ImGuiTable): void {
//    imgui.igTableSortSpecsSanitize(table);
// }
// export function tableSortSpecsBuild(table: ImGuiTable): void {
//    imgui.igTableSortSpecsBuild(table);
// }
// export function tableGetColumnNextSortDirection(column: ImGuiTableColumn): ImGuiSortDirection {
//   return imgui.igTableGetColumnNextSortDirection(column);
// }
// export function tableFixColumnSortDirection(table: ImGuiTable, column: ImGuiTableColumn): void {
//    imgui.igTableFixColumnSortDirection(table, column);
// }
// export function tableGetColumnWidthAuto(table: ImGuiTable, column: ImGuiTableColumn): number {
//   return imgui.igTableGetColumnWidthAuto(table, column);
// }
// export function tableBeginRow(table: ImGuiTable): void {
//    imgui.igTableBeginRow(table);
// }
// export function tableEndRow(table: ImGuiTable): void {
//    imgui.igTableEndRow(table);
// }
// export function tableBeginCell(table: ImGuiTable, column_n: number): void {
//    imgui.igTableBeginCell(table, column_n);
// }
// export function tableEndCell(table: ImGuiTable): void {
//    imgui.igTableEndCell(table);
// }
// export function tableGetCellBgRect(*pOut: ImRect, table: ImGuiTable, column_n: number): void {
//    imgui.igTableGetCellBgRect(*pOut, table, column_n);
// }
// export function tableGetColumnName_TablePtr(table: ImGuiTable, column_n: number): string {
//   return imgui.igTableGetColumnName_TablePtr(table, column_n);
// }
// export function tableGetColumnResizeID(table: ImGuiTable, column_n: number, instance_no: number): ImGuiID {
//   return imgui.igTableGetColumnResizeID(table, column_n, instance_no);
// }
// export function tableGetMaxColumnWidth(table: ImGuiTable, column_n: number): number {
//   return imgui.igTableGetMaxColumnWidth(table, column_n);
// }
// export function tableSetColumnWidthAutoSingle(table: ImGuiTable, column_n: number): void {
//    imgui.igTableSetColumnWidthAutoSingle(table, column_n);
// }
// export function tableSetColumnWidthAutoAll(table: ImGuiTable): void {
//    imgui.igTableSetColumnWidthAutoAll(table);
// }
// export function tableRemove(table: ImGuiTable): void {
//    imgui.igTableRemove(table);
// }
// export function tableGcCompactTransientBuffers_TablePtr(table: ImGuiTable): void {
//    imgui.igTableGcCompactTransientBuffers_TablePtr(table);
// }
// export function tableGcCompactTransientBuffers_TableTempDataPtr(table: ImGuiTableTempData): void {
//    imgui.igTableGcCompactTransientBuffers_TableTempDataPtr(table);
// }
// export function tableGcCompactSettings(): void {
//    imgui.igTableGcCompactSettings();
// }
// export function tableLoadSettings(table: ImGuiTable): void {
//    imgui.igTableLoadSettings(table);
// }
// export function tableSaveSettings(table: ImGuiTable): void {
//    imgui.igTableSaveSettings(table);
// }
// export function tableResetSettings(table: ImGuiTable): void {
//    imgui.igTableResetSettings(table);
// }
// export function tableGetBoundSettings(table: ImGuiTable): ImGuiTableSettings {
//   return imgui.igTableGetBoundSettings(table);
// }
// export function tableSettingsAddSettingsHandler(): void {
//    imgui.igTableSettingsAddSettingsHandler();
// }
// export function tableSettingsCreate(id: ImGuiID, columns_count: number): ImGuiTableSettings {
//   return imgui.igTableSettingsCreate(id, columns_count);
// }
// export function tableSettingsFindByID(id: ImGuiID): ImGuiTableSettings {
//   return imgui.igTableSettingsFindByID(id);
// }
// export function beginTabBarEx(tab_bar: ImGuiTabBar, bb: ImRect, flags: ImGuiTabBarFlags, dock_node: ImGuiDockNode): boolean {
//   return imgui.igBeginTabBarEx(tab_bar, bb, flags, dock_node);
// }
// export function tabBarFindTabByID(tab_bar: ImGuiTabBar, tab_id: ImGuiID): ImGuiTabItem {
//   return imgui.igTabBarFindTabByID(tab_bar, tab_id);
// }
// export function tabBarFindMostRecentlySelectedTabForActiveWindow(tab_bar: ImGuiTabBar): ImGuiTabItem {
//   return imgui.igTabBarFindMostRecentlySelectedTabForActiveWindow(tab_bar);
// }
// export function tabBarAddTab(tab_bar: ImGuiTabBar, tab_flags: ImGuiTabItemFlags, window: ImGuiWindow): void {
//    imgui.igTabBarAddTab(tab_bar, tab_flags, window);
// }
// export function tabBarRemoveTab(tab_bar: ImGuiTabBar, tab_id: ImGuiID): void {
//    imgui.igTabBarRemoveTab(tab_bar, tab_id);
// }
// export function tabBarCloseTab(tab_bar: ImGuiTabBar, tab: ImGuiTabItem): void {
//    imgui.igTabBarCloseTab(tab_bar, tab);
// }
// export function tabBarQueueReorder(tab_bar: ImGuiTabBar, tab: ImGuiTabItem, offset: number): void {
//    imgui.igTabBarQueueReorder(tab_bar, tab, offset);
// }
// export function tabBarQueueReorderFromMousePos(tab_bar: ImGuiTabBar, tab: ImGuiTabItem, mouse_pos: ImVec2): void {
//    imgui.igTabBarQueueReorderFromMousePos(tab_bar, tab, mouse_pos[BUFFER]);
// }
// export function tabBarProcessReorder(tab_bar: ImGuiTabBar): boolean {
//   return imgui.igTabBarProcessReorder(tab_bar);
// }
// export function tabItemEx(tab_bar: ImGuiTabBar, label: string, open: CBool | null = null, flags: ImGuiTabItemFlags, docked_window: ImGuiWindow): boolean {
//   return imgui.igTabItemEx(tab_bar, cString(label), open ? open[BUFFER] : null, flags, docked_window);
// }
// export function tabItemCalcSize_Str(*pOut: ImVec2, label: string, has_close_button_or_unsaved_marker: boolean): void {
//    imgui.igTabItemCalcSize_Str(*pOut[BUFFER], cString(label), has_close_button_or_unsaved_marker);
// }
// export function tabItemCalcSize_WindowPtr(*pOut: ImVec2, window: ImGuiWindow): void {
//    imgui.igTabItemCalcSize_WindowPtr(*pOut[BUFFER], window);
// }
// export function tabItemBackground(draw_list: ImDrawList, bb: ImRect, flags: ImGuiTabItemFlags, col: ImU32): void {
//    imgui.igTabItemBackground(draw_list, bb, flags, col);
// }
// export function tabItemLabelAndCloseButton(draw_list: ImDrawList, bb: ImRect, flags: ImGuiTabItemFlags, frame_padding: ImVec2, label: string, tab_id: ImGuiID, close_button_id: ImGuiID, is_contents_visible: boolean, out_just_closed: CBool | null = null, out_text_clipped: CBool | null = null): void {
//    imgui.igTabItemLabelAndCloseButton(draw_list, bb, flags, frame_padding[BUFFER], cString(label), tab_id, close_button_id, is_contents_visible, out_just_closed ? out_just_closed[BUFFER] : null, out_text_clipped ? out_text_clipped[BUFFER] : null);
// }
// export function renderText(pos: ImVec2, text: string, text_end: string, hide_text_after_hash: boolean): void {
//    imgui.igRenderText(pos[BUFFER], cString(text), cString(text_end), hide_text_after_hash);
// }
// export function renderTextWrapped(pos: ImVec2, text: string, text_end: string, wrap_width: number): void {
//    imgui.igRenderTextWrapped(pos[BUFFER], cString(text), cString(text_end), wrap_width);
// }
// export function renderTextClipped(pos_min: ImVec2, pos_max: ImVec2, text: string, text_end: string, text_size_if_known: ImVec2, align: ImVec2, clip_rect: ImRect): void {
//    imgui.igRenderTextClipped(pos_min[BUFFER], pos_max[BUFFER], cString(text), cString(text_end), text_size_if_known, align[BUFFER], clip_rect);
// }
// export function renderTextClippedEx(draw_list: ImDrawList, pos_min: ImVec2, pos_max: ImVec2, text: string, text_end: string, text_size_if_known: ImVec2, align: ImVec2, clip_rect: ImRect): void {
//    imgui.igRenderTextClippedEx(draw_list, pos_min[BUFFER], pos_max[BUFFER], cString(text), cString(text_end), text_size_if_known, align[BUFFER], clip_rect);
// }
// export function renderTextEllipsis(draw_list: ImDrawList, pos_min: ImVec2, pos_max: ImVec2, clip_max_x: number, ellipsis_max_x: number, text: string, text_end: string, text_size_if_known: ImVec2): void {
//    imgui.igRenderTextEllipsis(draw_list, pos_min[BUFFER], pos_max[BUFFER], clip_max_x, ellipsis_max_x, cString(text), cString(text_end), text_size_if_known);
// }
// export function renderFrame(min: ImVec2, max: ImVec2, fill_col: ImU32, border: boolean, rounding: number): void {
//    imgui.igRenderFrame(min[BUFFER], max[BUFFER], fill_col, border, rounding);
// }
// export function renderFrameBorder(min: ImVec2, max: ImVec2, rounding: number): void {
//    imgui.igRenderFrameBorder(min[BUFFER], max[BUFFER], rounding);
// }
// export function renderColorRectWithAlphaCheckerboard(draw_list: ImDrawList, min: ImVec2, max: ImVec2, fill_col: ImU32, grid_step: number, grid_off: ImVec2, rounding: number, flags: ImDrawFlags): void {
//    imgui.igRenderColorRectWithAlphaCheckerboard(draw_list, min[BUFFER], max[BUFFER], fill_col, grid_step, grid_off[BUFFER], rounding, flags);
// }
// export function renderNavHighlight(bb: ImRect, id: ImGuiID, flags: ImGuiNavHighlightFlags): void {
//    imgui.igRenderNavHighlight(bb, id, flags);
// }
// export function findRenderedTextEnd(text: string, text_end: string): string {
//   return imgui.igFindRenderedTextEnd(cString(text), cString(text_end));
// }
// export function renderMouseCursor(pos: ImVec2, scale: number, mouse_cursor: ImGuiMouseCursor, col_fill: ImU32, col_border: ImU32, col_shadow: ImU32): void {
//    imgui.igRenderMouseCursor(pos[BUFFER], scale, mouse_cursor, col_fill, col_border, col_shadow);
// }
// export function renderArrow(draw_list: ImDrawList, pos: ImVec2, col: ImU32, dir: ImGuiDir, scale: number): void {
//    imgui.igRenderArrow(draw_list, pos[BUFFER], col, dir, scale);
// }
// export function renderBullet(draw_list: ImDrawList, pos: ImVec2, col: ImU32): void {
//    imgui.igRenderBullet(draw_list, pos[BUFFER], col);
// }
// export function renderCheckMark(draw_list: ImDrawList, pos: ImVec2, col: ImU32, sz: number): void {
//    imgui.igRenderCheckMark(draw_list, pos[BUFFER], col, sz);
// }
// export function renderArrowPointingAt(draw_list: ImDrawList, pos: ImVec2, half_sz: ImVec2, direction: ImGuiDir, col: ImU32): void {
//    imgui.igRenderArrowPointingAt(draw_list, pos[BUFFER], half_sz[BUFFER], direction, col);
// }
// export function renderArrowDockMenu(draw_list: ImDrawList, min: ImVec2, sz: number, col: ImU32): void {
//    imgui.igRenderArrowDockMenu(draw_list, min[BUFFER], sz, col);
// }
// export function renderRectFilledRangeH(draw_list: ImDrawList, rect: ImRect, col: ImU32, x_start_norm: number, x_end_norm: number, rounding: number): void {
//    imgui.igRenderRectFilledRangeH(draw_list, rect, col, x_start_norm, x_end_norm, rounding);
// }
// export function renderRectFilledWithHole(draw_list: ImDrawList, outer: ImRect, inner: ImRect, col: ImU32, rounding: number): void {
//    imgui.igRenderRectFilledWithHole(draw_list, outer, inner, col, rounding);
// }
// export function calcRoundingFlagsForRectInRect(r_in: ImRect, r_outer: ImRect, threshold: number): ImDrawFlags {
//   return imgui.igCalcRoundingFlagsForRectInRect(r_in, r_outer, threshold);
// }
// export function textEx(text: string, text_end: string, flags: ImGuiTextFlags): void {
//    imgui.igTextEx(cString(text), cString(text_end), flags);
// }
// export function buttonEx(label: string, size_arg: ImVec2, flags: ImGuiButtonFlags): boolean {
//   return imgui.igButtonEx(cString(label), size_arg[BUFFER], flags);
// }
// export function arrowButtonEx(str_id: string, dir: ImGuiDir, size_arg: ImVec2, flags: ImGuiButtonFlags): boolean {
//   return imgui.igArrowButtonEx(cString(str_id), dir, size_arg[BUFFER], flags);
// }
// export function imageButtonEx(id: ImGuiID, texture_id: ImTextureID, size: ImVec2, uv0: ImVec2, uv1: ImVec2, bg_col: ImVec4, tint_col: ImVec4): boolean {
//   return imgui.igImageButtonEx(id, texture_id, size[BUFFER], uv0[BUFFER], uv1[BUFFER], bg_col[BUFFER], tint_col[BUFFER]);
// }
// export function separatorEx(flags: ImGuiSeparatorFlags): void {
//    imgui.igSeparatorEx(flags);
// }
// export function checkboxFlags_S64Ptr(label: string, flags: ImS64, flags_value: ImS64): boolean {
//   return imgui.igCheckboxFlags_S64Ptr(cString(label), flags, flags_value);
// }
// export function checkboxFlags_U64Ptr(label: string, flags: ImU64, flags_value: ImU64): boolean {
//   return imgui.igCheckboxFlags_U64Ptr(cString(label), flags, flags_value);
// }
// export function closeButton(id: ImGuiID, pos: ImVec2): boolean {
//   return imgui.igCloseButton(id, pos[BUFFER]);
// }
// export function collapseButton(id: ImGuiID, pos: ImVec2, dock_node: ImGuiDockNode): boolean {
//   return imgui.igCollapseButton(id, pos[BUFFER], dock_node);
// }
// export function scrollbar(axis: ImGuiAxis): void {
//    imgui.igScrollbar(axis);
// }
// export function scrollbarEx(bb: ImRect, id: ImGuiID, axis: ImGuiAxis, scroll_v: ImS64, avail_v: ImS64, contents_v: ImS64, flags: ImDrawFlags): boolean {
//   return imgui.igScrollbarEx(bb, id, axis, scroll_v, avail_v, contents_v, flags);
// }
// export function getWindowScrollbarRect(*pOut: ImRect, window: ImGuiWindow, axis: ImGuiAxis): void {
//    imgui.igGetWindowScrollbarRect(*pOut, window, axis);
// }
// export function getWindowScrollbarID(window: ImGuiWindow, axis: ImGuiAxis): ImGuiID {
//   return imgui.igGetWindowScrollbarID(window, axis);
// }
// export function getWindowResizeCornerID(window: ImGuiWindow, n: number): ImGuiID {
//   return imgui.igGetWindowResizeCornerID(window, n);
// }
// export function getWindowResizeBorderID(window: ImGuiWindow, dir: ImGuiDir): ImGuiID {
//   return imgui.igGetWindowResizeBorderID(window, dir);
// }
// export function buttonBehavior(bb: ImRect, id: ImGuiID, out_hovered: CBool | null = null, out_held: CBool | null = null, flags: ImGuiButtonFlags): boolean {
//   return imgui.igButtonBehavior(bb, id, out_hovered ? out_hovered[BUFFER] : null, out_held ? out_held[BUFFER] : null, flags);
// }
// export function dragBehavior(id: ImGuiID, data_type: ImGuiDataType, v: ArrayBuffer, v_speed: number, min: ArrayBuffer, max: ArrayBuffer, format: string, flags: ImGuiSliderFlags): boolean {
//   return imgui.igDragBehavior(id, data_type, v, v_speed, min, max, cString(format), flags);
// }
// export function sliderBehavior(bb: ImRect, id: ImGuiID, data_type: ImGuiDataType, v: ArrayBuffer, min: ArrayBuffer, max: ArrayBuffer, format: string, flags: ImGuiSliderFlags, out_grab_bb: ImRect): boolean {
//   return imgui.igSliderBehavior(bb, id, data_type, v, min, max, cString(format), flags, out_grab_bb);
// }
// export function splitterBehavior(bb: ImRect, id: ImGuiID, axis: ImGuiAxis, size1: Float32Array, size2: Float32Array, min_size1: number, min_size2: number, hover_extend: number, hover_visibility_delay: number, bg_col: ImU32): boolean {
//   return imgui.igSplitterBehavior(bb, id, axis, size1, size2, min_size1, min_size2, hover_extend, hover_visibility_delay, bg_col);
// }
// export function treeNodeBehavior(id: ImGuiID, flags: ImGuiTreeNodeFlags, label: string, label_end: string): boolean {
//   return imgui.igTreeNodeBehavior(id, flags, cString(label), cString(label_end));
// }
// export function treePushOverrideID(id: ImGuiID): void {
//    imgui.igTreePushOverrideID(id);
// }
// export function treeNodeSetOpen(id: ImGuiID, open: boolean): void {
//    imgui.igTreeNodeSetOpen(id, open);
// }
// export function treeNodeUpdateNextOpen(id: ImGuiID, flags: ImGuiTreeNodeFlags): boolean {
//   return imgui.igTreeNodeUpdateNextOpen(id, flags);
// }
// export function dataTypeGetInfo(data_type: ImGuiDataType): ImGuiDataTypeInfo {
//   return imgui.igDataTypeGetInfo(data_type);
// }
// export function dataTypeFormatString(buf: string, buf_size: number, data_type: ImGuiDataType, data: ArrayBuffer, format: string): number {
//   return imgui.igDataTypeFormatString(cString(buf), buf_size, data_type, data, cString(format));
// }
// export function dataTypeApplyOp(data_type: ImGuiDataType, op: number, output: ArrayBuffer, arg_1: ArrayBuffer, arg_2: ArrayBuffer): void {
//    imgui.igDataTypeApplyOp(data_type, op, output, arg_1, arg_2);
// }
// export function dataTypeApplyFromText(buf: string, data_type: ImGuiDataType, data: ArrayBuffer, format: string): boolean {
//   return imgui.igDataTypeApplyFromText(cString(buf), data_type, data, cString(format));
// }
// export function dataTypeCompare(data_type: ImGuiDataType, arg_1: ArrayBuffer, arg_2: ArrayBuffer): number {
//   return imgui.igDataTypeCompare(data_type, arg_1, arg_2);
// }
// export function dataTypeClamp(data_type: ImGuiDataType, data: ArrayBuffer, min: ArrayBuffer, max: ArrayBuffer): boolean {
//   return imgui.igDataTypeClamp(data_type, data, min, max);
// }
// export function inputTextEx(label: string, hint: string, buf: string, buf_size: number, size_arg: ImVec2, flags: ImGuiInputTextFlags, callback: ImGuiInputTextCallback, user_data: ArrayBuffer): boolean {
//   return imgui.igInputTextEx(cString(label), cString(hint), cString(buf), buf_size, size_arg[BUFFER], flags, callback.pointer, user_data);
// }
// export function tempInputText(bb: ImRect, id: ImGuiID, label: string, buf: string, buf_size: number, flags: ImGuiInputTextFlags): boolean {
//   return imgui.igTempInputText(bb, id, cString(label), cString(buf), buf_size, flags);
// }
// export function tempInputScalar(bb: ImRect, id: ImGuiID, label: string, data_type: ImGuiDataType, data: ArrayBuffer, format: string, clamp_min: ArrayBuffer, clamp_max: ArrayBuffer): boolean {
//   return imgui.igTempInputScalar(bb, id, cString(label), data_type, data, cString(format), clamp_min, clamp_max);
// }
// export function tempInputIsActive(id: ImGuiID): boolean {
//   return imgui.igTempInputIsActive(id);
// }
// export function getInputTextState(id: ImGuiID): ImGuiInputTextState {
//   return imgui.igGetInputTextState(id);
// }
// export function colorTooltip(text: string, col: Float32Array, flags: ImGuiColorEditFlags): void {
//    imgui.igColorTooltip(cString(text), col, flags);
// }
// export function colorEditOptionsPopup(col: Float32Array, flags: ImGuiColorEditFlags): void {
//    imgui.igColorEditOptionsPopup(col, flags);
// }
// export function colorPickerOptionsPopup(ref_col: Float32Array, flags: ImGuiColorEditFlags): void {
//    imgui.igColorPickerOptionsPopup(ref_col, flags);
// }
// export function plotEx(plot_type: ImGuiPlotType, label: string, data: Deno.UnsafeCallback, idx): number, data: ArrayBuffer, values_count: number, values_offset: number, overlay_text: string, scale_min: number, scale_max: number, frame_size: ImVec2): number {
//   return imgui.igPlotEx(plot_type, cString(label), data, idx), data, values_count, values_offset, cString(overlay_text), scale_min, scale_max, frame_size[BUFFER]);
// }
// export function shadeVertsLinearColorGradientKeepAlpha(draw_list: ImDrawList, vert_start_idx: number, vert_end_idx: number, gradient_p0: ImVec2, gradient_p1: ImVec2, col0: ImU32, col1: ImU32): void {
//    imgui.igShadeVertsLinearColorGradientKeepAlpha(draw_list, vert_start_idx, vert_end_idx, gradient_p0[BUFFER], gradient_p1[BUFFER], col0, col1);
// }
// export function shadeVertsLinearUV(draw_list: ImDrawList, vert_start_idx: number, vert_end_idx: number, a: ImVec2, b: ImVec2, uv_a: ImVec2, uv_b: ImVec2, clamp: boolean): void {
//    imgui.igShadeVertsLinearUV(draw_list, vert_start_idx, vert_end_idx, a[BUFFER], b[BUFFER], uv_a[BUFFER], uv_b[BUFFER], clamp);
// }
// export function gcCompactTransientMiscBuffers(): void {
//    imgui.igGcCompactTransientMiscBuffers();
// }
// export function gcCompactTransientWindowBuffers(window: ImGuiWindow): void {
//    imgui.igGcCompactTransientWindowBuffers(window);
// }
// export function gcAwakeTransientWindowBuffers(window: ImGuiWindow): void {
//    imgui.igGcAwakeTransientWindowBuffers(window);
// }
// export function errorCheckEndFrameRecover(log_callback: ImGuiErrorLogCallback, user_data: ArrayBuffer): void {
//    imgui.igErrorCheckEndFrameRecover(log_callback.pointer, user_data);
// }
// export function errorCheckEndWindowRecover(log_callback: ImGuiErrorLogCallback, user_data: ArrayBuffer): void {
//    imgui.igErrorCheckEndWindowRecover(log_callback.pointer, user_data);
// }
// export function errorCheckUsingSetCursorPosToExtendParentBoundaries(): void {
//    imgui.igErrorCheckUsingSetCursorPosToExtendParentBoundaries();
// }
// export function debugLocateItem(target_id: ImGuiID): void {
//    imgui.igDebugLocateItem(target_id);
// }
// export function debugLocateItemOnHover(target_id: ImGuiID): void {
//    imgui.igDebugLocateItemOnHover(target_id);
// }
// export function debugLocateItemResolveWithLastItem(): void {
//    imgui.igDebugLocateItemResolveWithLastItem();
// }
// export function debugDrawItemRect(col: ImU32): void {
//    imgui.igDebugDrawItemRect(col);
// }
// export function debugStartItemPicker(): void {
//    imgui.igDebugStartItemPicker();
// }
// export function showFontAtlas(atlas: ImFontAtlas): void {
//    imgui.igShowFontAtlas(atlas);
// }
// export function debugHookIdInfo(id: ImGuiID, data_type: ImGuiDataType, data_id: ArrayBuffer, data_id_end: ArrayBuffer): void {
//    imgui.igDebugHookIdInfo(id, data_type, data_id, data_id_end);
// }
// export function debugNodeColumns(columns: ImGuiOldColumns): void {
//    imgui.igDebugNodeColumns(columns);
// }
// export function debugNodeDockNode(node: ImGuiDockNode, label: string): void {
//    imgui.igDebugNodeDockNode(node, cString(label));
// }
// export function debugNodeDrawList(window: ImGuiWindow, viewport: ImGuiViewportP, draw_list: ImDrawList, label: string): void {
//    imgui.igDebugNodeDrawList(window, viewport, draw_list, cString(label));
// }
// export function debugNodeDrawCmdShowMeshAndBoundingBox(out_draw_list: ImDrawList, draw_list: ImDrawList, draw_cmd: ImDrawCmd, show_mesh: boolean, show_aabb: boolean): void {
//    imgui.igDebugNodeDrawCmdShowMeshAndBoundingBox(out_draw_list, draw_list, draw_cmd, show_mesh, show_aabb);
// }
// export function debugNodeFont(font: ImFont): void {
//    imgui.igDebugNodeFont(font);
// }
// export function debugNodeFontGlyph(font: ImFont, glyph: ImFontGlyph): void {
//    imgui.igDebugNodeFontGlyph(font, glyph);
// }
// export function debugNodeStorage(storage: ImGuiStorage, label: string): void {
//    imgui.igDebugNodeStorage(storage, cString(label));
// }
// export function debugNodeTabBar(tab_bar: ImGuiTabBar, label: string): void {
//    imgui.igDebugNodeTabBar(tab_bar, cString(label));
// }
// export function debugNodeTable(table: ImGuiTable): void {
//    imgui.igDebugNodeTable(table);
// }
// export function debugNodeTableSettings(settings: ImGuiTableSettings): void {
//    imgui.igDebugNodeTableSettings(settings);
// }
// export function debugNodeInputTextState(state: ImGuiInputTextState): void {
//    imgui.igDebugNodeInputTextState(state);
// }
// export function debugNodeWindow(window: ImGuiWindow, label: string): void {
//    imgui.igDebugNodeWindow(window, cString(label));
// }
// export function debugNodeWindowSettings(settings: ImGuiWindowSettings): void {
//    imgui.igDebugNodeWindowSettings(settings);
// }
// export function debugNodeWindowsList(windows: ImVector_ImGuiWindowPtr, label: string): void {
//    imgui.igDebugNodeWindowsList(windows, cString(label));
// }
// export function debugNodeWindowsListByBeginStackParent(windows: Deno.UnsafeCallback, windows_size: number, parent_in_begin_stack: ImGuiWindow): void {
//    imgui.igDebugNodeWindowsListByBeginStackParent(windows, windows_size, parent_in_begin_stack);
// }
// export function debugNodeViewport(viewport: ImGuiViewportP): void {
//    imgui.igDebugNodeViewport(viewport);
// }
// export function debugRenderKeyboardPreview(draw_list: ImDrawList): void {
//    imgui.igDebugRenderKeyboardPreview(draw_list);
// }
// export function debugRenderViewportThumbnail(draw_list: ImDrawList, viewport: ImGuiViewportP, bb: ImRect): void {
//    imgui.igDebugRenderViewportThumbnail(draw_list, viewport, bb);
// }
// export function isKeyPressedMap(key: ImGuiKey, repeat: boolean): boolean {
//   return imgui.igIsKeyPressedMap(key, repeat);
// }
// export function imFontAtlasGetBuilderForStbTruetype(): ImFontBuilderIO {
//   return imgui.igImFontAtlasGetBuilderForStbTruetype();
// }
// export function imFontAtlasBuildInit(atlas: ImFontAtlas): void {
//    imgui.igImFontAtlasBuildInit(atlas);
// }
// export function imFontAtlasBuildSetupFont(atlas: ImFontAtlas, font: ImFont, font_config: ImFontConfig, ascent: number, descent: number): void {
//    imgui.igImFontAtlasBuildSetupFont(atlas, font, font_config, ascent, descent);
// }
// export function imFontAtlasBuildPackCustomRects(atlas: ImFontAtlas, stbrp_context_opaque: ArrayBuffer): void {
//    imgui.igImFontAtlasBuildPackCustomRects(atlas, stbrp_context_opaque);
// }
// export function imFontAtlasBuildFinish(atlas: ImFontAtlas): void {
//    imgui.igImFontAtlasBuildFinish(atlas);
// }
// export function imFontAtlasBuildRender8bppRectFromString(atlas: ImFontAtlas, x: number, y: number, w: number, h: number, in_str: string, in_marker_char: number, in_marker_pixel_value: number): void {
//    imgui.igImFontAtlasBuildRender8bppRectFromString(atlas, x, y, w, h, cString(in_str), in_marker_char, in_marker_pixel_value);
// }
// export function imFontAtlasBuildRender32bppRectFromString(atlas: ImFontAtlas, x: number, y: number, w: number, h: number, in_str: string, in_marker_char: number, in_marker_pixel_value: number): void {
//    imgui.igImFontAtlasBuildRender32bppRectFromString(atlas, x, y, w, h, cString(in_str), in_marker_char, in_marker_pixel_value);
// }
// export function imFontAtlasBuildMultiplyCalcLookupTable(out_table: unsigned char[], in_multiply_factor: number): void {
//    imgui.igImFontAtlasBuildMultiplyCalcLookupTable(out_table, in_multiply_factor);
// }
// export function imFontAtlasBuildMultiplyRectAlpha8(table: unsigned char[], pixels: unsigned char, x: number, y: number, w: number, h: number, stride: number): void {
//    imgui.igImFontAtlasBuildMultiplyRectAlpha8(table, pixels, x, y, w, h, stride);
// }
// export function gET_FLT_MAX(): number {
//   return imgui.igGET_FLT_MAX();
// }
// export function gET_FLT_MIN(): number {
//   return imgui.igGET_FLT_MIN();
// }
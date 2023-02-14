// export function createContext(shared_font_atlas: ImFontAtlas): ImGuiContext {
//   return imgui.igCreateContext(shared_font_atlas);
// }
// export function destroyContext(ctx: ImGuiContext): void {
//   return imgui.igDestroyContext(ctx);
// }
// export function getCurrentContext(): ImGuiContext {
//    imgui.igGetCurrentContext();
// }
// export function setCurrentContext(ctx: ImGuiContext): void {
//   return imgui.igSetCurrentContext(ctx);
// }
// export function getIO(): ImGuiIO {
//    imgui.igGetIO();
// }
// export function getStyle(): ImGuiStyle {
//    imgui.igGetStyle();
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
//    imgui.igGetDrawData();
// }
// export function showDemoWindow(open: CBool | null = null): void {
//   return imgui.igShowDemoWindow(open ? open[BUFFER] : null);
// }
// export function showMetricsWindow(open: CBool | null = null): void {
//   return imgui.igShowMetricsWindow(open ? open[BUFFER] : null);
// }
// export function showDebugLogWindow(open: CBool | null = null): void {
//   return imgui.igShowDebugLogWindow(open ? open[BUFFER] : null);
// }
// export function showStackToolWindow(open: CBool | null = null): void {
//   return imgui.igShowStackToolWindow(open ? open[BUFFER] : null);
// }
// export function showAboutWindow(open: CBool | null = null): void {
//   return imgui.igShowAboutWindow(open ? open[BUFFER] : null);
// }
// export function showStyleEditor(ref: ImGuiStyle): void {
//   return imgui.igShowStyleEditor(ref);
// }
// export function showStyleSelector(label: string): boolean {
//   return imgui.igShowStyleSelector(cstring(label));
// }
// export function showFontSelector(label: string): void {
//   return imgui.igShowFontSelector(cstring(label));
// }
// export function showUserGuide(): void {
//    imgui.igShowUserGuide();
// }
// export function getVersion(): string {
//    imgui.igGetVersion();
// }
// export function styleColorsDark(dst: ImGuiStyle): void {
//   return imgui.igStyleColorsDark(dst);
// }
// export function styleColorsLight(dst: ImGuiStyle): void {
//   return imgui.igStyleColorsLight(dst);
// }
// export function styleColorsClassic(dst: ImGuiStyle): void {
//   return imgui.igStyleColorsClassic(dst);
// }
// export function begin(name: string, open: CBool | null = null, flags: ImGuiWindowFlags): boolean {
//   return imgui.igBegin(cstring(name), open ? open[BUFFER] : null, flags);
// }
// export function end(): void {
//    imgui.igEnd();
// }
// export function beginChild_Str(str_id: string, size: ImVec2, border: boolean, flags: ImGuiWindowFlags): boolean {
//   return imgui.igBeginChild_Str(cstring(str_id), size, border, flags);
// }
// export function beginChild_ID(id: ImGuiID, size: ImVec2, border: boolean, flags: ImGuiWindowFlags): boolean {
//   return imgui.igBeginChild_ID(id, size, border, flags);
// }
// export function endChild(): void {
//    imgui.igEndChild();
// }
// export function isWindowAppearing(): boolean {
//    imgui.igIsWindowAppearing();
// }
// export function isWindowCollapsed(): boolean {
//    imgui.igIsWindowCollapsed();
// }
// export function isWindowFocused(flags: ImGuiFocusedFlags): boolean {
//   return imgui.igIsWindowFocused(flags);
// }
// export function isWindowHovered(flags: ImGuiHoveredFlags): boolean {
//   return imgui.igIsWindowHovered(flags);
// }
// export function getWindowDrawList(): ImDrawList {
//    imgui.igGetWindowDrawList();
// }
// export function getWindowDpiScale(): number {
//    imgui.igGetWindowDpiScale();
// }
// export function getWindowPos(*pOut: ImVec2): void {
//   return imgui.igGetWindowPos(*pOut);
// }
// export function getWindowSize(*pOut: ImVec2): void {
//   return imgui.igGetWindowSize(*pOut);
// }
// export function getWindowWidth(): number {
//    imgui.igGetWindowWidth();
// }
// export function getWindowHeight(): number {
//    imgui.igGetWindowHeight();
// }
// export function getWindowViewport(): ImGuiViewport {
//    imgui.igGetWindowViewport();
// }
// export function setNextWindowPos(pos: ImVec2, cond: ImGuiCond, pivot: ImVec2): void {
//   return imgui.igSetNextWindowPos(pos, cond, pivot);
// }
// export function setNextWindowSize(size: ImVec2, cond: ImGuiCond): void {
//   return imgui.igSetNextWindowSize(size, cond);
// }
// export function setNextWindowSizeConstraints(size_min: ImVec2, size_max: ImVec2, custom_callback: ImGuiSizeCallback, custom_callback_data: void): void {
//   return imgui.igSetNextWindowSizeConstraints(size_min, size_max, custom_callback, custom_callback_data);
// }
// export function setNextWindowContentSize(size: ImVec2): void {
//   return imgui.igSetNextWindowContentSize(size);
// }
// export function setNextWindowCollapsed(collapsed: boolean, cond: ImGuiCond): void {
//   return imgui.igSetNextWindowCollapsed(collapsed, cond);
// }
// export function setNextWindowFocus(): void {
//    imgui.igSetNextWindowFocus();
// }
// export function setNextWindowScroll(scroll: ImVec2): void {
//   return imgui.igSetNextWindowScroll(scroll);
// }
// export function setNextWindowBgAlpha(alpha: number): void {
//   return imgui.igSetNextWindowBgAlpha(alpha);
// }
// export function setNextWindowViewport(viewport_id: ImGuiID): void {
//   return imgui.igSetNextWindowViewport(viewport_id);
// }
// export function setWindowPos_Vec2(pos: ImVec2, cond: ImGuiCond): void {
//   return imgui.igSetWindowPos_Vec2(pos, cond);
// }
// export function setWindowSize_Vec2(size: ImVec2, cond: ImGuiCond): void {
//   return imgui.igSetWindowSize_Vec2(size, cond);
// }
// export function setWindowCollapsed_Bool(collapsed: boolean, cond: ImGuiCond): void {
//   return imgui.igSetWindowCollapsed_Bool(collapsed, cond);
// }
// export function setWindowFocus_Nil(): void {
//    imgui.igSetWindowFocus_Nil();
// }
// export function setWindowFontScale(scale: number): void {
//   return imgui.igSetWindowFontScale(scale);
// }
// export function setWindowPos_Str(name: string, pos: ImVec2, cond: ImGuiCond): void {
//   return imgui.igSetWindowPos_Str(cstring(name), pos, cond);
// }
// export function setWindowSize_Str(name: string, size: ImVec2, cond: ImGuiCond): void {
//   return imgui.igSetWindowSize_Str(cstring(name), size, cond);
// }
// export function setWindowCollapsed_Str(name: string, collapsed: boolean, cond: ImGuiCond): void {
//   return imgui.igSetWindowCollapsed_Str(cstring(name), collapsed, cond);
// }
// export function setWindowFocus_Str(name: string): void {
//   return imgui.igSetWindowFocus_Str(cstring(name));
// }
// export function getContentRegionAvail(*pOut: ImVec2): void {
//   return imgui.igGetContentRegionAvail(*pOut);
// }
// export function getContentRegionMax(*pOut: ImVec2): void {
//   return imgui.igGetContentRegionMax(*pOut);
// }
// export function getWindowContentRegionMin(*pOut: ImVec2): void {
//   return imgui.igGetWindowContentRegionMin(*pOut);
// }
// export function getWindowContentRegionMax(*pOut: ImVec2): void {
//   return imgui.igGetWindowContentRegionMax(*pOut);
// }
// export function getScrollX(): number {
//    imgui.igGetScrollX();
// }
// export function getScrollY(): number {
//    imgui.igGetScrollY();
// }
// export function setScrollX_Float(scroll_x: number): void {
//   return imgui.igSetScrollX_Float(scroll_x);
// }
// export function setScrollY_Float(scroll_y: number): void {
//   return imgui.igSetScrollY_Float(scroll_y);
// }
// export function getScrollMaxX(): number {
//    imgui.igGetScrollMaxX();
// }
// export function getScrollMaxY(): number {
//    imgui.igGetScrollMaxY();
// }
// export function setScrollHereX(center_x_ratio: number): void {
//   return imgui.igSetScrollHereX(center_x_ratio);
// }
// export function setScrollHereY(center_y_ratio: number): void {
//   return imgui.igSetScrollHereY(center_y_ratio);
// }
// export function setScrollFromPosX_Float(local_x: number, center_x_ratio: number): void {
//   return imgui.igSetScrollFromPosX_Float(local_x, center_x_ratio);
// }
// export function setScrollFromPosY_Float(local_y: number, center_y_ratio: number): void {
//   return imgui.igSetScrollFromPosY_Float(local_y, center_y_ratio);
// }
// export function pushFont(font: ImFont): void {
//   return imgui.igPushFont(font);
// }
// export function popFont(): void {
//    imgui.igPopFont();
// }
// export function pushStyleColor_U32(idx: ImGuiCol, col: ImU32): void {
//   return imgui.igPushStyleColor_U32(idx, col);
// }
// export function pushStyleColor_Vec4(idx: ImGuiCol, col: ImVec4): void {
//   return imgui.igPushStyleColor_Vec4(idx, col);
// }
// export function popStyleColor(count: number): void {
//   return imgui.igPopStyleColor(count);
// }
// export function pushStyleVar_Float(idx: ImGuiStyleVar, val: number): void {
//   return imgui.igPushStyleVar_Float(idx, val);
// }
// export function pushStyleVar_Vec2(idx: ImGuiStyleVar, val: ImVec2): void {
//   return imgui.igPushStyleVar_Vec2(idx, val);
// }
// export function popStyleVar(count: number): void {
//   return imgui.igPopStyleVar(count);
// }
// export function pushAllowKeyboardFocus(allow_keyboard_focus: boolean): void {
//   return imgui.igPushAllowKeyboardFocus(allow_keyboard_focus);
// }
// export function popAllowKeyboardFocus(): void {
//    imgui.igPopAllowKeyboardFocus();
// }
// export function pushButtonRepeat(repeat: boolean): void {
//   return imgui.igPushButtonRepeat(repeat);
// }
// export function popButtonRepeat(): void {
//    imgui.igPopButtonRepeat();
// }
// export function pushItemWidth(item_width: number): void {
//   return imgui.igPushItemWidth(item_width);
// }
// export function popItemWidth(): void {
//    imgui.igPopItemWidth();
// }
// export function setNextItemWidth(item_width: number): void {
//   return imgui.igSetNextItemWidth(item_width);
// }
// export function calcItemWidth(): number {
//    imgui.igCalcItemWidth();
// }
// export function pushTextWrapPos(wrap_local_pos_x: number): void {
//   return imgui.igPushTextWrapPos(wrap_local_pos_x);
// }
// export function popTextWrapPos(): void {
//    imgui.igPopTextWrapPos();
// }
// export function getFont(): ImFont {
//    imgui.igGetFont();
// }
// export function getFontSize(): number {
//    imgui.igGetFontSize();
// }
// export function getFontTexUvWhitePixel(*pOut: ImVec2): void {
//   return imgui.igGetFontTexUvWhitePixel(*pOut);
// }
// export function getColorU32_Col(idx: ImGuiCol, alpha_mul: number): ImU32 {
//   return imgui.igGetColorU32_Col(idx, alpha_mul);
// }
// export function getColorU32_Vec4(col: ImVec4): ImU32 {
//   return imgui.igGetColorU32_Vec4(col);
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
//   return imgui.igSameLine(offset_from_start_x, spacing);
// }
// export function newLine(): void {
//    imgui.igNewLine();
// }
// export function spacing(): void {
//    imgui.igSpacing();
// }
// export function dummy(size: ImVec2): void {
//   return imgui.igDummy(size);
// }
// export function indent(indent_w: number): void {
//   return imgui.igIndent(indent_w);
// }
// export function unindent(indent_w: number): void {
//   return imgui.igUnindent(indent_w);
// }
// export function beginGroup(): void {
//    imgui.igBeginGroup();
// }
// export function endGroup(): void {
//    imgui.igEndGroup();
// }
// export function getCursorPos(*pOut: ImVec2): void {
//   return imgui.igGetCursorPos(*pOut);
// }
// export function getCursorPosX(): number {
//    imgui.igGetCursorPosX();
// }
// export function getCursorPosY(): number {
//    imgui.igGetCursorPosY();
// }
// export function setCursorPos(local_pos: ImVec2): void {
//   return imgui.igSetCursorPos(local_pos);
// }
// export function setCursorPosX(local_x: number): void {
//   return imgui.igSetCursorPosX(local_x);
// }
// export function setCursorPosY(local_y: number): void {
//   return imgui.igSetCursorPosY(local_y);
// }
// export function getCursorStartPos(*pOut: ImVec2): void {
//   return imgui.igGetCursorStartPos(*pOut);
// }
// export function getCursorScreenPos(*pOut: ImVec2): void {
//   return imgui.igGetCursorScreenPos(*pOut);
// }
// export function setCursorScreenPos(pos: ImVec2): void {
//   return imgui.igSetCursorScreenPos(pos);
// }
// export function alignTextToFramePadding(): void {
//    imgui.igAlignTextToFramePadding();
// }
// export function getTextLineHeight(): number {
//    imgui.igGetTextLineHeight();
// }
// export function getTextLineHeightWithSpacing(): number {
//    imgui.igGetTextLineHeightWithSpacing();
// }
// export function getFrameHeight(): number {
//    imgui.igGetFrameHeight();
// }
// export function getFrameHeightWithSpacing(): number {
//    imgui.igGetFrameHeightWithSpacing();
// }
// export function pushID_Str(str_id: string): void {
//   return imgui.igPushID_Str(cstring(str_id));
// }
// export function pushID_StrStr(str_id_begin: string, str_id_end: string): void {
//   return imgui.igPushID_StrStr(cstring(str_id_begin), cstring(str_id_end));
// }
// export function pushID_Ptr(ptr_id: void): void {
//   return imgui.igPushID_Ptr(ptr_id);
// }
// export function pushID_Int(int_id: number): void {
//   return imgui.igPushID_Int(int_id);
// }
// export function popID(): void {
//    imgui.igPopID();
// }
// export function getID_Str(str_id: string): ImGuiID {
//   return imgui.igGetID_Str(cstring(str_id));
// }
// export function getID_StrStr(str_id_begin: string, str_id_end: string): ImGuiID {
//   return imgui.igGetID_StrStr(cstring(str_id_begin), cstring(str_id_end));
// }
// export function getID_Ptr(ptr_id: void): ImGuiID {
//   return imgui.igGetID_Ptr(ptr_id);
// }
// export function textUnformatted(text: string, text_end: string): void {
//   return imgui.igTextUnformatted(cstring(text), cstring(text_end));
// }
// export function button(label: string, size: ImVec2): boolean {
//   return imgui.igButton(cstring(label), size);
// }
// export function smallButton(label: string): boolean {
//   return imgui.igSmallButton(cstring(label));
// }
// export function invisibleButton(str_id: string, size: ImVec2, flags: ImGuiButtonFlags): boolean {
//   return imgui.igInvisibleButton(cstring(str_id), size, flags);
// }
// export function arrowButton(str_id: string, dir: ImGuiDir): boolean {
//   return imgui.igArrowButton(cstring(str_id), dir);
// }
// export function checkbox(label: string, v: CBool | null = null): boolean {
//   return imgui.igCheckbox(cstring(label), v ? v[BUFFER] : null);
// }
// export function checkboxFlags_IntPtr(label: string, flags: int, flags_value: number): boolean {
//   return imgui.igCheckboxFlags_IntPtr(cstring(label), flags, flags_value);
// }
// export function checkboxFlags_UintPtr(label: string, flags: unsigned int, flags_value: number): boolean {
//   return imgui.igCheckboxFlags_UintPtr(cstring(label), flags, flags_value);
// }
// export function radioButton_Bool(label: string, active: boolean): boolean {
//   return imgui.igRadioButton_Bool(cstring(label), active);
// }
// export function radioButton_IntPtr(label: string, v: int, v_button: number): boolean {
//   return imgui.igRadioButton_IntPtr(cstring(label), v, v_button);
// }
// export function progressBar(fraction: number, size_arg: ImVec2, overlay: string): void {
//   return imgui.igProgressBar(fraction, size_arg, cstring(overlay));
// }
// export function bullet(): void {
//    imgui.igBullet();
// }
// export function image(user_texture_id: ImTextureID, size: ImVec2, uv0: ImVec2, uv1: ImVec2, tint_col: ImVec4, border_col: ImVec4): void {
//   return imgui.igImage(user_texture_id, size, uv0, uv1, tint_col, border_col);
// }
// export function imageButton(str_id: string, user_texture_id: ImTextureID, size: ImVec2, uv0: ImVec2, uv1: ImVec2, bg_col: ImVec4, tint_col: ImVec4): boolean {
//   return imgui.igImageButton(cstring(str_id), user_texture_id, size, uv0, uv1, bg_col, tint_col);
// }
// export function beginCombo(label: string, preview_value: string, flags: ImGuiComboFlags): boolean {
//   return imgui.igBeginCombo(cstring(label), cstring(preview_value), flags);
// }
// export function endCombo(): void {
//    imgui.igEndCombo();
// }
// export function combo_Str_arr(label: string, current_item: int, items[]: string, items_count: number, popup_max_height_in_items: number): boolean {
//   return imgui.igCombo_Str_arr(cstring(label), current_item, cstring(items[]), items_count, popup_max_height_in_items);
// }
// export function combo_Str(label: string, current_item: int, items_separated_by_zeros: string, popup_max_height_in_items: number): boolean {
//   return imgui.igCombo_Str(cstring(label), current_item, cstring(items_separated_by_zeros), popup_max_height_in_items);
// }
// export function combo_FnBoolPtr(label: string, current_item: int, data: Deno.UnsafeCallback, idx: number, out_text): Deno.UnsafeCallback, data: void, items_count: number, popup_max_height_in_items: number): boolean {
//   return imgui.igCombo_FnBoolPtr(cstring(label), current_item, data, idx, out_text), data, items_count, popup_max_height_in_items);
// }
// export function dragFloat(label: string, v: float, v_speed: number, v_min: number, v_max: number, format: string, flags: ImGuiSliderFlags): boolean {
//   return imgui.igDragFloat(cstring(label), v, v_speed, v_min, v_max, cstring(format), flags);
// }
// export function dragFloat2(label: string, v[2]: number, v_speed: number, v_min: number, v_max: number, format: string, flags: ImGuiSliderFlags): boolean {
//   return imgui.igDragFloat2(cstring(label), v[2], v_speed, v_min, v_max, cstring(format), flags);
// }
// export function dragFloat3(label: string, v[3]: number, v_speed: number, v_min: number, v_max: number, format: string, flags: ImGuiSliderFlags): boolean {
//   return imgui.igDragFloat3(cstring(label), v[3], v_speed, v_min, v_max, cstring(format), flags);
// }
// export function dragFloat4(label: string, v[4]: number, v_speed: number, v_min: number, v_max: number, format: string, flags: ImGuiSliderFlags): boolean {
//   return imgui.igDragFloat4(cstring(label), v[4], v_speed, v_min, v_max, cstring(format), flags);
// }
// export function dragFloatRange2(label: string, v_current_min: float, v_current_max: float, v_speed: number, v_min: number, v_max: number, format: string, format_max: string, flags: ImGuiSliderFlags): boolean {
//   return imgui.igDragFloatRange2(cstring(label), v_current_min, v_current_max, v_speed, v_min, v_max, cstring(format), cstring(format_max), flags);
// }
// export function dragInt(label: string, v: int, v_speed: number, v_min: number, v_max: number, format: string, flags: ImGuiSliderFlags): boolean {
//   return imgui.igDragInt(cstring(label), v, v_speed, v_min, v_max, cstring(format), flags);
// }
// export function dragInt2(label: string, v[2]: number, v_speed: number, v_min: number, v_max: number, format: string, flags: ImGuiSliderFlags): boolean {
//   return imgui.igDragInt2(cstring(label), v[2], v_speed, v_min, v_max, cstring(format), flags);
// }
// export function dragInt3(label: string, v[3]: number, v_speed: number, v_min: number, v_max: number, format: string, flags: ImGuiSliderFlags): boolean {
//   return imgui.igDragInt3(cstring(label), v[3], v_speed, v_min, v_max, cstring(format), flags);
// }
// export function dragInt4(label: string, v[4]: number, v_speed: number, v_min: number, v_max: number, format: string, flags: ImGuiSliderFlags): boolean {
//   return imgui.igDragInt4(cstring(label), v[4], v_speed, v_min, v_max, cstring(format), flags);
// }
// export function dragIntRange2(label: string, v_current_min: int, v_current_max: int, v_speed: number, v_min: number, v_max: number, format: string, format_max: string, flags: ImGuiSliderFlags): boolean {
//   return imgui.igDragIntRange2(cstring(label), v_current_min, v_current_max, v_speed, v_min, v_max, cstring(format), cstring(format_max), flags);
// }
// export function dragScalar(label: string, data_type: ImGuiDataType, data: void, v_speed: number, min: void, max: void, format: string, flags: ImGuiSliderFlags): boolean {
//   return imgui.igDragScalar(cstring(label), data_type, data, v_speed, min, max, cstring(format), flags);
// }
// export function dragScalarN(label: string, data_type: ImGuiDataType, data: void, components: number, v_speed: number, min: void, max: void, format: string, flags: ImGuiSliderFlags): boolean {
//   return imgui.igDragScalarN(cstring(label), data_type, data, components, v_speed, min, max, cstring(format), flags);
// }
// export function sliderFloat(label: string, v: float, v_min: number, v_max: number, format: string, flags: ImGuiSliderFlags): boolean {
//   return imgui.igSliderFloat(cstring(label), v, v_min, v_max, cstring(format), flags);
// }
// export function sliderFloat2(label: string, v[2]: number, v_min: number, v_max: number, format: string, flags: ImGuiSliderFlags): boolean {
//   return imgui.igSliderFloat2(cstring(label), v[2], v_min, v_max, cstring(format), flags);
// }
// export function sliderFloat3(label: string, v[3]: number, v_min: number, v_max: number, format: string, flags: ImGuiSliderFlags): boolean {
//   return imgui.igSliderFloat3(cstring(label), v[3], v_min, v_max, cstring(format), flags);
// }
// export function sliderFloat4(label: string, v[4]: number, v_min: number, v_max: number, format: string, flags: ImGuiSliderFlags): boolean {
//   return imgui.igSliderFloat4(cstring(label), v[4], v_min, v_max, cstring(format), flags);
// }
// export function sliderAngle(label: string, v_rad: float, v_degrees_min: number, v_degrees_max: number, format: string, flags: ImGuiSliderFlags): boolean {
//   return imgui.igSliderAngle(cstring(label), v_rad, v_degrees_min, v_degrees_max, cstring(format), flags);
// }
// export function sliderInt(label: string, v: int, v_min: number, v_max: number, format: string, flags: ImGuiSliderFlags): boolean {
//   return imgui.igSliderInt(cstring(label), v, v_min, v_max, cstring(format), flags);
// }
// export function sliderInt2(label: string, v[2]: number, v_min: number, v_max: number, format: string, flags: ImGuiSliderFlags): boolean {
//   return imgui.igSliderInt2(cstring(label), v[2], v_min, v_max, cstring(format), flags);
// }
// export function sliderInt3(label: string, v[3]: number, v_min: number, v_max: number, format: string, flags: ImGuiSliderFlags): boolean {
//   return imgui.igSliderInt3(cstring(label), v[3], v_min, v_max, cstring(format), flags);
// }
// export function sliderInt4(label: string, v[4]: number, v_min: number, v_max: number, format: string, flags: ImGuiSliderFlags): boolean {
//   return imgui.igSliderInt4(cstring(label), v[4], v_min, v_max, cstring(format), flags);
// }
// export function sliderScalar(label: string, data_type: ImGuiDataType, data: void, min: void, max: void, format: string, flags: ImGuiSliderFlags): boolean {
//   return imgui.igSliderScalar(cstring(label), data_type, data, min, max, cstring(format), flags);
// }
// export function sliderScalarN(label: string, data_type: ImGuiDataType, data: void, components: number, min: void, max: void, format: string, flags: ImGuiSliderFlags): boolean {
//   return imgui.igSliderScalarN(cstring(label), data_type, data, components, min, max, cstring(format), flags);
// }
// export function vSliderFloat(label: string, size: ImVec2, v: float, v_min: number, v_max: number, format: string, flags: ImGuiSliderFlags): boolean {
//   return imgui.igVSliderFloat(cstring(label), size, v, v_min, v_max, cstring(format), flags);
// }
// export function vSliderInt(label: string, size: ImVec2, v: int, v_min: number, v_max: number, format: string, flags: ImGuiSliderFlags): boolean {
//   return imgui.igVSliderInt(cstring(label), size, v, v_min, v_max, cstring(format), flags);
// }
// export function vSliderScalar(label: string, size: ImVec2, data_type: ImGuiDataType, data: void, min: void, max: void, format: string, flags: ImGuiSliderFlags): boolean {
//   return imgui.igVSliderScalar(cstring(label), size, data_type, data, min, max, cstring(format), flags);
// }
// export function inputText(label: string, buf: string, buf_size: Deno.PointerValue, flags: ImGuiInputTextFlags, callback: ImGuiInputTextCallback, user_data: void): boolean {
//   return imgui.igInputText(cstring(label), cstring(buf), buf_size, flags, callback, user_data);
// }
// export function inputTextMultiline(label: string, buf: string, buf_size: Deno.PointerValue, size: ImVec2, flags: ImGuiInputTextFlags, callback: ImGuiInputTextCallback, user_data: void): boolean {
//   return imgui.igInputTextMultiline(cstring(label), cstring(buf), buf_size, size, flags, callback, user_data);
// }
// export function inputTextWithHint(label: string, hint: string, buf: string, buf_size: Deno.PointerValue, flags: ImGuiInputTextFlags, callback: ImGuiInputTextCallback, user_data: void): boolean {
//   return imgui.igInputTextWithHint(cstring(label), cstring(hint), cstring(buf), buf_size, flags, callback, user_data);
// }
// export function inputFloat(label: string, v: float, step: number, step_fast: number, format: string, flags: ImGuiInputTextFlags): boolean {
//   return imgui.igInputFloat(cstring(label), v, step, step_fast, cstring(format), flags);
// }
// export function inputFloat2(label: string, v[2]: number, format: string, flags: ImGuiInputTextFlags): boolean {
//   return imgui.igInputFloat2(cstring(label), v[2], cstring(format), flags);
// }
// export function inputFloat3(label: string, v[3]: number, format: string, flags: ImGuiInputTextFlags): boolean {
//   return imgui.igInputFloat3(cstring(label), v[3], cstring(format), flags);
// }
// export function inputFloat4(label: string, v[4]: number, format: string, flags: ImGuiInputTextFlags): boolean {
//   return imgui.igInputFloat4(cstring(label), v[4], cstring(format), flags);
// }
// export function inputInt(label: string, v: int, step: number, step_fast: number, flags: ImGuiInputTextFlags): boolean {
//   return imgui.igInputInt(cstring(label), v, step, step_fast, flags);
// }
// export function inputInt2(label: string, v[2]: number, flags: ImGuiInputTextFlags): boolean {
//   return imgui.igInputInt2(cstring(label), v[2], flags);
// }
// export function inputInt3(label: string, v[3]: number, flags: ImGuiInputTextFlags): boolean {
//   return imgui.igInputInt3(cstring(label), v[3], flags);
// }
// export function inputInt4(label: string, v[4]: number, flags: ImGuiInputTextFlags): boolean {
//   return imgui.igInputInt4(cstring(label), v[4], flags);
// }
// export function inputDouble(label: string, v: double, step: number, step_fast: number, format: string, flags: ImGuiInputTextFlags): boolean {
//   return imgui.igInputDouble(cstring(label), v, step, step_fast, cstring(format), flags);
// }
// export function inputScalar(label: string, data_type: ImGuiDataType, data: void, step: void, step_fast: void, format: string, flags: ImGuiInputTextFlags): boolean {
//   return imgui.igInputScalar(cstring(label), data_type, data, step, step_fast, cstring(format), flags);
// }
// export function inputScalarN(label: string, data_type: ImGuiDataType, data: void, components: number, step: void, step_fast: void, format: string, flags: ImGuiInputTextFlags): boolean {
//   return imgui.igInputScalarN(cstring(label), data_type, data, components, step, step_fast, cstring(format), flags);
// }
// export function colorEdit3(label: string, col[3]: number, flags: ImGuiColorEditFlags): boolean {
//   return imgui.igColorEdit3(cstring(label), col[3], flags);
// }
// export function colorEdit4(label: string, col[4]: number, flags: ImGuiColorEditFlags): boolean {
//   return imgui.igColorEdit4(cstring(label), col[4], flags);
// }
// export function colorPicker3(label: string, col[3]: number, flags: ImGuiColorEditFlags): boolean {
//   return imgui.igColorPicker3(cstring(label), col[3], flags);
// }
// export function colorPicker4(label: string, col[4]: number, flags: ImGuiColorEditFlags, ref_col: float): boolean {
//   return imgui.igColorPicker4(cstring(label), col[4], flags, ref_col);
// }
// export function colorButton(desc_id: string, col: ImVec4, flags: ImGuiColorEditFlags, size: ImVec2): boolean {
//   return imgui.igColorButton(cstring(desc_id), col, flags, size);
// }
// export function setColorEditOptions(flags: ImGuiColorEditFlags): void {
//   return imgui.igSetColorEditOptions(flags);
// }
// export function treeNode_Str(label: string): boolean {
//   return imgui.igTreeNode_Str(cstring(label));
// }
// export function treeNodeEx_Str(label: string, flags: ImGuiTreeNodeFlags): boolean {
//   return imgui.igTreeNodeEx_Str(cstring(label), flags);
// }
// export function treePush_Str(str_id: string): void {
//   return imgui.igTreePush_Str(cstring(str_id));
// }
// export function treePush_Ptr(ptr_id: void): void {
//   return imgui.igTreePush_Ptr(ptr_id);
// }
// export function treePop(): void {
//    imgui.igTreePop();
// }
// export function getTreeNodeToLabelSpacing(): number {
//    imgui.igGetTreeNodeToLabelSpacing();
// }
// export function collapsingHeader_TreeNodeFlags(label: string, flags: ImGuiTreeNodeFlags): boolean {
//   return imgui.igCollapsingHeader_TreeNodeFlags(cstring(label), flags);
// }
// export function collapsingHeader_BoolPtr(label: string, visible: CBool | null = null, flags: ImGuiTreeNodeFlags): boolean {
//   return imgui.igCollapsingHeader_BoolPtr(cstring(label), visible ? visible[BUFFER] : null, flags);
// }
// export function setNextItemOpen(is_open: boolean, cond: ImGuiCond): void {
//   return imgui.igSetNextItemOpen(is_open, cond);
// }
// export function selectable_Bool(label: string, selected: boolean, flags: ImGuiSelectableFlags, size: ImVec2): boolean {
//   return imgui.igSelectable_Bool(cstring(label), selected, flags, size);
// }
// export function selectable_BoolPtr(label: string, selected: CBool | null = null, flags: ImGuiSelectableFlags, size: ImVec2): boolean {
//   return imgui.igSelectable_BoolPtr(cstring(label), selected ? selected[BUFFER] : null, flags, size);
// }
// export function beginListBox(label: string, size: ImVec2): boolean {
//   return imgui.igBeginListBox(cstring(label), size);
// }
// export function endListBox(): void {
//    imgui.igEndListBox();
// }
// export function listBox_Str_arr(label: string, current_item: int, items[]: string, items_count: number, height_in_items: number): boolean {
//   return imgui.igListBox_Str_arr(cstring(label), current_item, cstring(items[]), items_count, height_in_items);
// }
// export function listBox_FnBoolPtr(label: string, current_item: int, data: Deno.UnsafeCallback, idx: number, out_text): Deno.UnsafeCallback, data: void, items_count: number, height_in_items: number): boolean {
//   return imgui.igListBox_FnBoolPtr(cstring(label), current_item, data, idx, out_text), data, items_count, height_in_items);
// }
// export function plotLines_FloatPtr(label: string, values: float, values_count: number, values_offset: number, overlay_text: string, scale_min: number, scale_max: number, graph_size: ImVec2, stride: number): void {
//   return imgui.igPlotLines_FloatPtr(cstring(label), values, values_count, values_offset, cstring(overlay_text), scale_min, scale_max, graph_size, stride);
// }
// export function plotLines_FnFloatPtr(label: string, data: Deno.UnsafeCallback, idx): number, data: void, values_count: number, values_offset: number, overlay_text: string, scale_min: number, scale_max: number, graph_size: ImVec2): void {
//   return imgui.igPlotLines_FnFloatPtr(cstring(label), data, idx), data, values_count, values_offset, cstring(overlay_text), scale_min, scale_max, graph_size);
// }
// export function plotHistogram_FloatPtr(label: string, values: float, values_count: number, values_offset: number, overlay_text: string, scale_min: number, scale_max: number, graph_size: ImVec2, stride: number): void {
//   return imgui.igPlotHistogram_FloatPtr(cstring(label), values, values_count, values_offset, cstring(overlay_text), scale_min, scale_max, graph_size, stride);
// }
// export function plotHistogram_FnFloatPtr(label: string, data: Deno.UnsafeCallback, idx): number, data: void, values_count: number, values_offset: number, overlay_text: string, scale_min: number, scale_max: number, graph_size: ImVec2): void {
//   return imgui.igPlotHistogram_FnFloatPtr(cstring(label), data, idx), data, values_count, values_offset, cstring(overlay_text), scale_min, scale_max, graph_size);
// }
// export function value_Bool(prefix: string, b: boolean): void {
//   return imgui.igValue_Bool(cstring(prefix), b);
// }
// export function value_Int(prefix: string, v: number): void {
//   return imgui.igValue_Int(cstring(prefix), v);
// }
// export function value_Uint(prefix: string, v: number): void {
//   return imgui.igValue_Uint(cstring(prefix), v);
// }
// export function value_Float(prefix: string, v: number, float_format: string): void {
//   return imgui.igValue_Float(cstring(prefix), v, cstring(float_format));
// }
// export function beginMenuBar(): boolean {
//    imgui.igBeginMenuBar();
// }
// export function endMenuBar(): void {
//    imgui.igEndMenuBar();
// }
// export function beginMainMenuBar(): boolean {
//    imgui.igBeginMainMenuBar();
// }
// export function endMainMenuBar(): void {
//    imgui.igEndMainMenuBar();
// }
// export function beginMenu(label: string, enabled: boolean): boolean {
//   return imgui.igBeginMenu(cstring(label), enabled);
// }
// export function endMenu(): void {
//    imgui.igEndMenu();
// }
// export function menuItem_Bool(label: string, shortcut: string, selected: boolean, enabled: boolean): boolean {
//   return imgui.igMenuItem_Bool(cstring(label), cstring(shortcut), selected, enabled);
// }
// export function menuItem_BoolPtr(label: string, shortcut: string, selected: CBool | null = null, enabled: boolean): boolean {
//   return imgui.igMenuItem_BoolPtr(cstring(label), cstring(shortcut), selected ? selected[BUFFER] : null, enabled);
// }
// export function beginTooltip(): void {
//    imgui.igBeginTooltip();
// }
// export function endTooltip(): void {
//    imgui.igEndTooltip();
// }
// export function beginPopup(str_id: string, flags: ImGuiWindowFlags): boolean {
//   return imgui.igBeginPopup(cstring(str_id), flags);
// }
// export function beginPopupModal(name: string, open: CBool | null = null, flags: ImGuiWindowFlags): boolean {
//   return imgui.igBeginPopupModal(cstring(name), open ? open[BUFFER] : null, flags);
// }
// export function endPopup(): void {
//    imgui.igEndPopup();
// }
// export function openPopup_Str(str_id: string, popup_flags: ImGuiPopupFlags): void {
//   return imgui.igOpenPopup_Str(cstring(str_id), popup_flags);
// }
// export function openPopup_ID(id: ImGuiID, popup_flags: ImGuiPopupFlags): void {
//   return imgui.igOpenPopup_ID(id, popup_flags);
// }
// export function openPopupOnItemClick(str_id: string, popup_flags: ImGuiPopupFlags): void {
//   return imgui.igOpenPopupOnItemClick(cstring(str_id), popup_flags);
// }
// export function closeCurrentPopup(): void {
//    imgui.igCloseCurrentPopup();
// }
// export function beginPopupContextItem(str_id: string, popup_flags: ImGuiPopupFlags): boolean {
//   return imgui.igBeginPopupContextItem(cstring(str_id), popup_flags);
// }
// export function beginPopupContextWindow(str_id: string, popup_flags: ImGuiPopupFlags): boolean {
//   return imgui.igBeginPopupContextWindow(cstring(str_id), popup_flags);
// }
// export function beginPopupContextVoid(str_id: string, popup_flags: ImGuiPopupFlags): boolean {
//   return imgui.igBeginPopupContextVoid(cstring(str_id), popup_flags);
// }
// export function isPopupOpen_Str(str_id: string, flags: ImGuiPopupFlags): boolean {
//   return imgui.igIsPopupOpen_Str(cstring(str_id), flags);
// }
// export function beginTable(str_id: string, column: number, flags: ImGuiTableFlags, outer_size: ImVec2, inner_width: number): boolean {
//   return imgui.igBeginTable(cstring(str_id), column, flags, outer_size, inner_width);
// }
// export function endTable(): void {
//    imgui.igEndTable();
// }
// export function tableNextRow(row_flags: ImGuiTableRowFlags, min_row_height: number): void {
//   return imgui.igTableNextRow(row_flags, min_row_height);
// }
// export function tableNextColumn(): boolean {
//    imgui.igTableNextColumn();
// }
// export function tableSetColumnIndex(column_n: number): boolean {
//   return imgui.igTableSetColumnIndex(column_n);
// }
// export function tableSetupColumn(label: string, flags: ImGuiTableColumnFlags, init_width_or_weight: number, user_id: ImGuiID): void {
//   return imgui.igTableSetupColumn(cstring(label), flags, init_width_or_weight, user_id);
// }
// export function tableSetupScrollFreeze(cols: number, rows: number): void {
//   return imgui.igTableSetupScrollFreeze(cols, rows);
// }
// export function tableHeadersRow(): void {
//    imgui.igTableHeadersRow();
// }
// export function tableHeader(label: string): void {
//   return imgui.igTableHeader(cstring(label));
// }
// export function tableGetSortSpecs(): ImGuiTableSortSpecs {
//    imgui.igTableGetSortSpecs();
// }
// export function tableGetColumnCount(): number {
//    imgui.igTableGetColumnCount();
// }
// export function tableGetColumnIndex(): number {
//    imgui.igTableGetColumnIndex();
// }
// export function tableGetRowIndex(): number {
//    imgui.igTableGetRowIndex();
// }
// export function tableGetColumnName_Int(column_n: number): string {
//   return imgui.igTableGetColumnName_Int(column_n);
// }
// export function tableGetColumnFlags(column_n: number): ImGuiTableColumnFlags {
//   return imgui.igTableGetColumnFlags(column_n);
// }
// export function tableSetColumnEnabled(column_n: number, v: boolean): void {
//   return imgui.igTableSetColumnEnabled(column_n, v);
// }
// export function tableSetBgColor(target: ImGuiTableBgTarget, color: ImU32, column_n: number): void {
//   return imgui.igTableSetBgColor(target, color, column_n);
// }
// export function columns(count: number, id: string, border: boolean): void {
//   return imgui.igColumns(count, cstring(id), border);
// }
// export function nextColumn(): void {
//    imgui.igNextColumn();
// }
// export function getColumnIndex(): number {
//    imgui.igGetColumnIndex();
// }
// export function getColumnWidth(column_index: number): number {
//   return imgui.igGetColumnWidth(column_index);
// }
// export function setColumnWidth(column_index: number, width: number): void {
//   return imgui.igSetColumnWidth(column_index, width);
// }
// export function getColumnOffset(column_index: number): number {
//   return imgui.igGetColumnOffset(column_index);
// }
// export function setColumnOffset(column_index: number, offset_x: number): void {
//   return imgui.igSetColumnOffset(column_index, offset_x);
// }
// export function getColumnsCount(): number {
//    imgui.igGetColumnsCount();
// }
// export function beginTabBar(str_id: string, flags: ImGuiTabBarFlags): boolean {
//   return imgui.igBeginTabBar(cstring(str_id), flags);
// }
// export function endTabBar(): void {
//    imgui.igEndTabBar();
// }
// export function beginTabItem(label: string, open: CBool | null = null, flags: ImGuiTabItemFlags): boolean {
//   return imgui.igBeginTabItem(cstring(label), open ? open[BUFFER] : null, flags);
// }
// export function endTabItem(): void {
//    imgui.igEndTabItem();
// }
// export function tabItemButton(label: string, flags: ImGuiTabItemFlags): boolean {
//   return imgui.igTabItemButton(cstring(label), flags);
// }
// export function setTabItemClosed(tab_or_docked_window_label: string): void {
//   return imgui.igSetTabItemClosed(cstring(tab_or_docked_window_label));
// }
// export function dockSpace(id: ImGuiID, size: ImVec2, flags: ImGuiDockNodeFlags, window_class: ImGuiWindowClass): ImGuiID {
//   return imgui.igDockSpace(id, size, flags, window_class);
// }
// export function dockSpaceOverViewport(viewport: ImGuiViewport, flags: ImGuiDockNodeFlags, window_class: ImGuiWindowClass): ImGuiID {
//   return imgui.igDockSpaceOverViewport(viewport, flags, window_class);
// }
// export function setNextWindowDockID(dock_id: ImGuiID, cond: ImGuiCond): void {
//   return imgui.igSetNextWindowDockID(dock_id, cond);
// }
// export function setNextWindowClass(window_class: ImGuiWindowClass): void {
//   return imgui.igSetNextWindowClass(window_class);
// }
// export function getWindowDockID(): ImGuiID {
//    imgui.igGetWindowDockID();
// }
// export function isWindowDocked(): boolean {
//    imgui.igIsWindowDocked();
// }
// export function logToTTY(auto_open_depth: number): void {
//   return imgui.igLogToTTY(auto_open_depth);
// }
// export function logToClipboard(auto_open_depth: number): void {
//   return imgui.igLogToClipboard(auto_open_depth);
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
// export function setDragDropPayload(type: string, data: void, sz: Deno.PointerValue, cond: ImGuiCond): boolean {
//   return imgui.igSetDragDropPayload(cstring(type), data, sz, cond);
// }
// export function endDragDropSource(): void {
//    imgui.igEndDragDropSource();
// }
// export function beginDragDropTarget(): boolean {
//    imgui.igBeginDragDropTarget();
// }
// export function acceptDragDropPayload(type: string, flags: ImGuiDragDropFlags): ImGuiPayload {
//   return imgui.igAcceptDragDropPayload(cstring(type), flags);
// }
// export function endDragDropTarget(): void {
//    imgui.igEndDragDropTarget();
// }
// export function getDragDropPayload(): ImGuiPayload {
//    imgui.igGetDragDropPayload();
// }
// export function beginDisabled(disabled: boolean): void {
//   return imgui.igBeginDisabled(disabled);
// }
// export function endDisabled(): void {
//    imgui.igEndDisabled();
// }
// export function pushClipRect(clip_rect_min: ImVec2, clip_rect_max: ImVec2, intersect_with_current_clip_rect: boolean): void {
//   return imgui.igPushClipRect(clip_rect_min, clip_rect_max, intersect_with_current_clip_rect);
// }
// export function popClipRect(): void {
//    imgui.igPopClipRect();
// }
// export function setItemDefaultFocus(): void {
//    imgui.igSetItemDefaultFocus();
// }
// export function setKeyboardFocusHere(offset: number): void {
//   return imgui.igSetKeyboardFocusHere(offset);
// }
// export function isItemHovered(flags: ImGuiHoveredFlags): boolean {
//   return imgui.igIsItemHovered(flags);
// }
// export function isItemActive(): boolean {
//    imgui.igIsItemActive();
// }
// export function isItemFocused(): boolean {
//    imgui.igIsItemFocused();
// }
// export function isItemClicked(mouse_button: ImGuiMouseButton): boolean {
//   return imgui.igIsItemClicked(mouse_button);
// }
// export function isItemVisible(): boolean {
//    imgui.igIsItemVisible();
// }
// export function isItemEdited(): boolean {
//    imgui.igIsItemEdited();
// }
// export function isItemActivated(): boolean {
//    imgui.igIsItemActivated();
// }
// export function isItemDeactivated(): boolean {
//    imgui.igIsItemDeactivated();
// }
// export function isItemDeactivatedAfterEdit(): boolean {
//    imgui.igIsItemDeactivatedAfterEdit();
// }
// export function isItemToggledOpen(): boolean {
//    imgui.igIsItemToggledOpen();
// }
// export function isAnyItemHovered(): boolean {
//    imgui.igIsAnyItemHovered();
// }
// export function isAnyItemActive(): boolean {
//    imgui.igIsAnyItemActive();
// }
// export function isAnyItemFocused(): boolean {
//    imgui.igIsAnyItemFocused();
// }
// export function getItemID(): ImGuiID {
//    imgui.igGetItemID();
// }
// export function getItemRectMin(*pOut: ImVec2): void {
//   return imgui.igGetItemRectMin(*pOut);
// }
// export function getItemRectMax(*pOut: ImVec2): void {
//   return imgui.igGetItemRectMax(*pOut);
// }
// export function getItemRectSize(*pOut: ImVec2): void {
//   return imgui.igGetItemRectSize(*pOut);
// }
// export function setItemAllowOverlap(): void {
//    imgui.igSetItemAllowOverlap();
// }
// export function getMainViewport(): ImGuiViewport {
//    imgui.igGetMainViewport();
// }
// export function getBackgroundDrawList_Nil(): ImDrawList {
//    imgui.igGetBackgroundDrawList_Nil();
// }
// export function getForegroundDrawList_Nil(): ImDrawList {
//    imgui.igGetForegroundDrawList_Nil();
// }
// export function getBackgroundDrawList_ViewportPtr(viewport: ImGuiViewport): ImDrawList {
//   return imgui.igGetBackgroundDrawList_ViewportPtr(viewport);
// }
// export function getForegroundDrawList_ViewportPtr(viewport: ImGuiViewport): ImDrawList {
//   return imgui.igGetForegroundDrawList_ViewportPtr(viewport);
// }
// export function isRectVisible_Nil(size: ImVec2): boolean {
//   return imgui.igIsRectVisible_Nil(size);
// }
// export function isRectVisible_Vec2(rect_min: ImVec2, rect_max: ImVec2): boolean {
//   return imgui.igIsRectVisible_Vec2(rect_min, rect_max);
// }
// export function getTime(): number {
//    imgui.igGetTime();
// }
// export function getFrameCount(): number {
//    imgui.igGetFrameCount();
// }
// export function getDrawListSharedData(): ImDrawListSharedData {
//    imgui.igGetDrawListSharedData();
// }
// export function getStyleColorName(idx: ImGuiCol): string {
//   return imgui.igGetStyleColorName(idx);
// }
// export function setStateStorage(storage: ImGuiStorage): void {
//   return imgui.igSetStateStorage(storage);
// }
// export function getStateStorage(): ImGuiStorage {
//    imgui.igGetStateStorage();
// }
// export function beginChildFrame(id: ImGuiID, size: ImVec2, flags: ImGuiWindowFlags): boolean {
//   return imgui.igBeginChildFrame(id, size, flags);
// }
// export function endChildFrame(): void {
//    imgui.igEndChildFrame();
// }
// export function calcTextSize(*pOut: ImVec2, text: string, text_end: string, hide_text_after_double_hash: boolean, wrap_width: number): void {
//   return imgui.igCalcTextSize(*pOut, cstring(text), cstring(text_end), hide_text_after_double_hash, wrap_width);
// }
// export function colorConvertU32ToFloat4(*pOut: ImVec4, in: ImU32): void {
//   return imgui.igColorConvertU32ToFloat4(*pOut, in);
// }
// export function colorConvertFloat4ToU32(in: ImVec4): ImU32 {
//   return imgui.igColorConvertFloat4ToU32(in);
// }
// export function colorConvertRGBtoHSV(r: number, g: number, b: number, out_h: float, out_s: float, out_v: float): void {
//   return imgui.igColorConvertRGBtoHSV(r, g, b, out_h, out_s, out_v);
// }
// export function colorConvertHSVtoRGB(h: number, s: number, v: number, out_r: float, out_g: float, out_b: float): void {
//   return imgui.igColorConvertHSVtoRGB(h, s, v, out_r, out_g, out_b);
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
//   return imgui.igSetNextFrameWantCaptureKeyboard(want_capture_keyboard);
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
//   return imgui.igIsMouseHoveringRect(r_min, r_max, clip);
// }
// export function isMousePosValid(mouse_pos: ImVec2): boolean {
//   return imgui.igIsMousePosValid(mouse_pos);
// }
// export function isAnyMouseDown(): boolean {
//    imgui.igIsAnyMouseDown();
// }
// export function getMousePos(*pOut: ImVec2): void {
//   return imgui.igGetMousePos(*pOut);
// }
// export function getMousePosOnOpeningCurrentPopup(*pOut: ImVec2): void {
//   return imgui.igGetMousePosOnOpeningCurrentPopup(*pOut);
// }
// export function isMouseDragging(button: ImGuiMouseButton, lock_threshold: number): boolean {
//   return imgui.igIsMouseDragging(button, lock_threshold);
// }
// export function getMouseDragDelta(*pOut: ImVec2, button: ImGuiMouseButton, lock_threshold: number): void {
//   return imgui.igGetMouseDragDelta(*pOut, button, lock_threshold);
// }
// export function resetMouseDragDelta(button: ImGuiMouseButton): void {
//   return imgui.igResetMouseDragDelta(button);
// }
// export function getMouseCursor(): ImGuiMouseCursor {
//    imgui.igGetMouseCursor();
// }
// export function setMouseCursor(cursor_type: ImGuiMouseCursor): void {
//   return imgui.igSetMouseCursor(cursor_type);
// }
// export function setNextFrameWantCaptureMouse(want_capture_mouse: boolean): void {
//   return imgui.igSetNextFrameWantCaptureMouse(want_capture_mouse);
// }
// export function getClipboardText(): string {
//    imgui.igGetClipboardText();
// }
// export function setClipboardText(text: string): void {
//   return imgui.igSetClipboardText(cstring(text));
// }
// export function loadIniSettingsFromDisk(ini_filename: string): void {
//   return imgui.igLoadIniSettingsFromDisk(cstring(ini_filename));
// }
// export function loadIniSettingsFromMemory(ini_data: string, ini_size: Deno.PointerValue): void {
//   return imgui.igLoadIniSettingsFromMemory(cstring(ini_data), ini_size);
// }
// export function saveIniSettingsToDisk(ini_filename: string): void {
//   return imgui.igSaveIniSettingsToDisk(cstring(ini_filename));
// }
// export function saveIniSettingsToMemory(out_ini_size: size_t): string {
//   return imgui.igSaveIniSettingsToMemory(out_ini_size);
// }
// export function debugTextEncoding(text: string): void {
//   return imgui.igDebugTextEncoding(cstring(text));
// }
// export function debugCheckVersionAndDataLayout(version_str: string, sz_io: Deno.PointerValue, sz_style: Deno.PointerValue, sz_vec2: Deno.PointerValue, sz_vec4: Deno.PointerValue, sz_drawvert: Deno.PointerValue, sz_drawidx: Deno.PointerValue): boolean {
//   return imgui.igDebugCheckVersionAndDataLayout(cstring(version_str), sz_io, sz_style, sz_vec2, sz_vec4, sz_drawvert, sz_drawidx);
// }
// export function memAlloc(size: Deno.PointerValue): void {
//   return imgui.igMemAlloc(size);
// }
// export function memFree(ptr: void): void {
//   return imgui.igMemFree(ptr);
// }
// export function getPlatformIO(): ImGuiPlatformIO {
//    imgui.igGetPlatformIO();
// }
// export function updatePlatformWindows(): void {
//    imgui.igUpdatePlatformWindows();
// }
// export function renderPlatformWindowsDefault(platform_render_arg: void, renderer_render_arg: void): void {
//   return imgui.igRenderPlatformWindowsDefault(platform_render_arg, renderer_render_arg);
// }
// export function destroyPlatformWindows(): void {
//    imgui.igDestroyPlatformWindows();
// }
// export function findViewportByID(id: ImGuiID): ImGuiViewport {
//   return imgui.igFindViewportByID(id);
// }
// export function findViewportByPlatformHandle(platform_handle: void): ImGuiViewport {
//   return imgui.igFindViewportByPlatformHandle(platform_handle);
// }
// export function getKeyIndex(key: ImGuiKey): ImGuiKey {
//   return imgui.igGetKeyIndex(key);
// }
// export function imHashData(data: void, data_size: Deno.PointerValue, seed: ImU32): ImGuiID {
//   return imgui.igImHashData(data, data_size, seed);
// }
// export function imHashStr(data: string, data_size: Deno.PointerValue, seed: ImU32): ImGuiID {
//   return imgui.igImHashStr(cstring(data), data_size, seed);
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
//   return imgui.igImStricmp(cstring(str1), cstring(str2));
// }
// export function imStrnicmp(str1: string, str2: string, count: Deno.PointerValue): number {
//   return imgui.igImStrnicmp(cstring(str1), cstring(str2), count);
// }
// export function imStrncpy(dst: string, src: string, count: Deno.PointerValue): void {
//   return imgui.igImStrncpy(cstring(dst), cstring(src), count);
// }
// export function imStrdup(str: string): string {
//   return imgui.igImStrdup(cstring(str));
// }
// export function imStrdupcpy(dst: string, dst_size: size_t, str: string): string {
//   return imgui.igImStrdupcpy(cstring(dst), dst_size, cstring(str));
// }
// export function imStrchrRange(str_begin: string, str_end: string, c: number): string {
//   return imgui.igImStrchrRange(cstring(str_begin), cstring(str_end), c);
// }
// export function imStrlenW(str: ImWchar): number {
//   return imgui.igImStrlenW(str);
// }
// export function imStreolRange(str: string, str_end: string): string {
//   return imgui.igImStreolRange(cstring(str), cstring(str_end));
// }
// export function imStrbolW(buf_mid_line: ImWchar, buf_begin: ImWchar): ImWchar {
//   return imgui.igImStrbolW(buf_mid_line, buf_begin);
// }
// export function imStristr(haystack: string, haystack_end: string, needle: string, needle_end: string): string {
//   return imgui.igImStristr(cstring(haystack), cstring(haystack_end), cstring(needle), cstring(needle_end));
// }
// export function imStrTrimBlanks(str: string): void {
//   return imgui.igImStrTrimBlanks(cstring(str));
// }
// export function imStrSkipBlank(str: string): string {
//   return imgui.igImStrSkipBlank(cstring(str));
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
//   return imgui.igImParseFormatFindStart(cstring(format));
// }
// export function imParseFormatFindEnd(format: string): string {
//   return imgui.igImParseFormatFindEnd(cstring(format));
// }
// export function imParseFormatTrimDecorations(format: string, buf: string, buf_size: Deno.PointerValue): string {
//   return imgui.igImParseFormatTrimDecorations(cstring(format), cstring(buf), buf_size);
// }
// export function imParseFormatSanitizeForPrinting(fmt_in: string, fmt_out: string, fmt_out_size: Deno.PointerValue): void {
//   return imgui.igImParseFormatSanitizeForPrinting(cstring(fmt_in), cstring(fmt_out), fmt_out_size);
// }
// export function imParseFormatSanitizeForScanning(fmt_in: string, fmt_out: string, fmt_out_size: Deno.PointerValue): string {
//   return imgui.igImParseFormatSanitizeForScanning(cstring(fmt_in), cstring(fmt_out), fmt_out_size);
// }
// export function imParseFormatPrecision(format: string, default_value: number): number {
//   return imgui.igImParseFormatPrecision(cstring(format), default_value);
// }
// export function imTextCharToUtf8(out_buf[5]: number, c: number): string {
//   return imgui.igImTextCharToUtf8(out_buf[5], c);
// }
// export function imTextStrToUtf8(out_buf: string, out_buf_size: number, in_text: ImWchar, in_text_end: ImWchar): number {
//   return imgui.igImTextStrToUtf8(cstring(out_buf), out_buf_size, in_text, in_text_end);
// }
// export function imTextCharFromUtf8(out_char: unsigned int, in_text: string, in_text_end: string): number {
//   return imgui.igImTextCharFromUtf8(out_char, cstring(in_text), cstring(in_text_end));
// }
// export function imTextStrFromUtf8(out_buf: ImWchar, out_buf_size: number, in_text: string, in_text_end: string, in_remaining: Deno.UnsafeCallback): number {
//   return imgui.igImTextStrFromUtf8(out_buf, out_buf_size, cstring(in_text), cstring(in_text_end), in_remaining);
// }
// export function imTextCountCharsFromUtf8(in_text: string, in_text_end: string): number {
//   return imgui.igImTextCountCharsFromUtf8(cstring(in_text), cstring(in_text_end));
// }
// export function imTextCountUtf8BytesFromChar(in_text: string, in_text_end: string): number {
//   return imgui.igImTextCountUtf8BytesFromChar(cstring(in_text), cstring(in_text_end));
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
//   return imgui.igImMin(*pOut, lhs, rhs);
// }
// export function imMax(*pOut: ImVec2, lhs: ImVec2, rhs: ImVec2): void {
//   return imgui.igImMax(*pOut, lhs, rhs);
// }
// export function imClamp(*pOut: ImVec2, v: ImVec2, mn: ImVec2, mx: ImVec2): void {
//   return imgui.igImClamp(*pOut, v, mn, mx);
// }
// export function imLerp_Vec2Float(*pOut: ImVec2, a: ImVec2, b: ImVec2, t: number): void {
//   return imgui.igImLerp_Vec2Float(*pOut, a, b, t);
// }
// export function imLerp_Vec2Vec2(*pOut: ImVec2, a: ImVec2, b: ImVec2, t: ImVec2): void {
//   return imgui.igImLerp_Vec2Vec2(*pOut, a, b, t);
// }
// export function imLerp_Vec4(*pOut: ImVec4, a: ImVec4, b: ImVec4, t: number): void {
//   return imgui.igImLerp_Vec4(*pOut, a, b, t);
// }
// export function imSaturate(f: number): number {
//   return imgui.igImSaturate(f);
// }
// export function imLengthSqr_Vec2(lhs: ImVec2): number {
//   return imgui.igImLengthSqr_Vec2(lhs);
// }
// export function imLengthSqr_Vec4(lhs: ImVec4): number {
//   return imgui.igImLengthSqr_Vec4(lhs);
// }
// export function imInvLength(lhs: ImVec2, fail_value: number): number {
//   return imgui.igImInvLength(lhs, fail_value);
// }
// export function imFloor_Float(f: number): number {
//   return imgui.igImFloor_Float(f);
// }
// export function imFloorSigned_Float(f: number): number {
//   return imgui.igImFloorSigned_Float(f);
// }
// export function imFloor_Vec2(*pOut: ImVec2, v: ImVec2): void {
//   return imgui.igImFloor_Vec2(*pOut, v);
// }
// export function imFloorSigned_Vec2(*pOut: ImVec2, v: ImVec2): void {
//   return imgui.igImFloorSigned_Vec2(*pOut, v);
// }
// export function imModPositive(a: number, b: number): number {
//   return imgui.igImModPositive(a, b);
// }
// export function imDot(a: ImVec2, b: ImVec2): number {
//   return imgui.igImDot(a, b);
// }
// export function imRotate(*pOut: ImVec2, v: ImVec2, cos_a: number, sin_a: number): void {
//   return imgui.igImRotate(*pOut, v, cos_a, sin_a);
// }
// export function imLinearSweep(current: number, target: number, speed: number): number {
//   return imgui.igImLinearSweep(current, target, speed);
// }
// export function imMul(*pOut: ImVec2, lhs: ImVec2, rhs: ImVec2): void {
//   return imgui.igImMul(*pOut, lhs, rhs);
// }
// export function imIsFloatAboveGuaranteedIntegerPrecision(f: number): boolean {
//   return imgui.igImIsFloatAboveGuaranteedIntegerPrecision(f);
// }
// export function imExponentialMovingAverage(avg: number, sample: number, n: number): number {
//   return imgui.igImExponentialMovingAverage(avg, sample, n);
// }
// export function imBezierCubicCalc(*pOut: ImVec2, p1: ImVec2, p2: ImVec2, p3: ImVec2, p4: ImVec2, t: number): void {
//   return imgui.igImBezierCubicCalc(*pOut, p1, p2, p3, p4, t);
// }
// export function imBezierCubicClosestPoint(*pOut: ImVec2, p1: ImVec2, p2: ImVec2, p3: ImVec2, p4: ImVec2, p: ImVec2, num_segments: number): void {
//   return imgui.igImBezierCubicClosestPoint(*pOut, p1, p2, p3, p4, p, num_segments);
// }
// export function imBezierCubicClosestPointCasteljau(*pOut: ImVec2, p1: ImVec2, p2: ImVec2, p3: ImVec2, p4: ImVec2, p: ImVec2, tess_tol: number): void {
//   return imgui.igImBezierCubicClosestPointCasteljau(*pOut, p1, p2, p3, p4, p, tess_tol);
// }
// export function imBezierQuadraticCalc(*pOut: ImVec2, p1: ImVec2, p2: ImVec2, p3: ImVec2, t: number): void {
//   return imgui.igImBezierQuadraticCalc(*pOut, p1, p2, p3, t);
// }
// export function imLineClosestPoint(*pOut: ImVec2, a: ImVec2, b: ImVec2, p: ImVec2): void {
//   return imgui.igImLineClosestPoint(*pOut, a, b, p);
// }
// export function imTriangleContainsPoint(a: ImVec2, b: ImVec2, c: ImVec2, p: ImVec2): boolean {
//   return imgui.igImTriangleContainsPoint(a, b, c, p);
// }
// export function imTriangleClosestPoint(*pOut: ImVec2, a: ImVec2, b: ImVec2, c: ImVec2, p: ImVec2): void {
//   return imgui.igImTriangleClosestPoint(*pOut, a, b, c, p);
// }
// export function imTriangleBarycentricCoords(a: ImVec2, b: ImVec2, c: ImVec2, p: ImVec2, out_u: float, out_v: float, out_w: float): void {
//   return imgui.igImTriangleBarycentricCoords(a, b, c, p, out_u, out_v, out_w);
// }
// export function imTriangleArea(a: ImVec2, b: ImVec2, c: ImVec2): number {
//   return imgui.igImTriangleArea(a, b, c);
// }
// export function imGetDirQuadrantFromDelta(dx: number, dy: number): ImGuiDir {
//   return imgui.igImGetDirQuadrantFromDelta(dx, dy);
// }
// export function imBitArrayTestBit(arr: ImU32, n: number): boolean {
//   return imgui.igImBitArrayTestBit(arr, n);
// }
// export function imBitArrayClearBit(arr: ImU32, n: number): void {
//   return imgui.igImBitArrayClearBit(arr, n);
// }
// export function imBitArraySetBit(arr: ImU32, n: number): void {
//   return imgui.igImBitArraySetBit(arr, n);
// }
// export function imBitArraySetBitRange(arr: ImU32, n: number, n2: number): void {
//   return imgui.igImBitArraySetBitRange(arr, n, n2);
// }
// export function getCurrentWindowRead(): ImGuiWindow {
//    imgui.igGetCurrentWindowRead();
// }
// export function getCurrentWindow(): ImGuiWindow {
//    imgui.igGetCurrentWindow();
// }
// export function findWindowByID(id: ImGuiID): ImGuiWindow {
//   return imgui.igFindWindowByID(id);
// }
// export function findWindowByName(name: string): ImGuiWindow {
//   return imgui.igFindWindowByName(cstring(name));
// }
// export function updateWindowParentAndRootLinks(window: ImGuiWindow, flags: ImGuiWindowFlags, parent_window: ImGuiWindow): void {
//   return imgui.igUpdateWindowParentAndRootLinks(window, flags, parent_window);
// }
// export function calcWindowNextAutoFitSize(*pOut: ImVec2, window: ImGuiWindow): void {
//   return imgui.igCalcWindowNextAutoFitSize(*pOut, window);
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
//   return imgui.igSetWindowPos_WindowPtr(window, pos, cond);
// }
// export function setWindowSize_WindowPtr(window: ImGuiWindow, size: ImVec2, cond: ImGuiCond): void {
//   return imgui.igSetWindowSize_WindowPtr(window, size, cond);
// }
// export function setWindowCollapsed_WindowPtr(window: ImGuiWindow, collapsed: boolean, cond: ImGuiCond): void {
//   return imgui.igSetWindowCollapsed_WindowPtr(window, collapsed, cond);
// }
// export function setWindowHitTestHole(window: ImGuiWindow, pos: ImVec2, size: ImVec2): void {
//   return imgui.igSetWindowHitTestHole(window, pos, size);
// }
// export function windowRectAbsToRel(*pOut: ImRect, window: ImGuiWindow, r: ImRect): void {
//   return imgui.igWindowRectAbsToRel(*pOut, window, r);
// }
// export function windowRectRelToAbs(*pOut: ImRect, window: ImGuiWindow, r: ImRect): void {
//   return imgui.igWindowRectRelToAbs(*pOut, window, r);
// }
// export function focusWindow(window: ImGuiWindow): void {
//   return imgui.igFocusWindow(window);
// }
// export function focusTopMostWindowUnderOne(under_this_window: ImGuiWindow, ignore_window: ImGuiWindow): void {
//   return imgui.igFocusTopMostWindowUnderOne(under_this_window, ignore_window);
// }
// export function bringWindowToFocusFront(window: ImGuiWindow): void {
//   return imgui.igBringWindowToFocusFront(window);
// }
// export function bringWindowToDisplayFront(window: ImGuiWindow): void {
//   return imgui.igBringWindowToDisplayFront(window);
// }
// export function bringWindowToDisplayBack(window: ImGuiWindow): void {
//   return imgui.igBringWindowToDisplayBack(window);
// }
// export function bringWindowToDisplayBehind(window: ImGuiWindow, above_window: ImGuiWindow): void {
//   return imgui.igBringWindowToDisplayBehind(window, above_window);
// }
// export function findWindowDisplayIndex(window: ImGuiWindow): number {
//   return imgui.igFindWindowDisplayIndex(window);
// }
// export function findBottomMostVisibleWindowWithinBeginStack(window: ImGuiWindow): ImGuiWindow {
//   return imgui.igFindBottomMostVisibleWindowWithinBeginStack(window);
// }
// export function setCurrentFont(font: ImFont): void {
//   return imgui.igSetCurrentFont(font);
// }
// export function getDefaultFont(): ImFont {
//    imgui.igGetDefaultFont();
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
//   return imgui.igUpdateInputEvents(trickle_fast_inputs);
// }
// export function updateHoveredWindowAndCaptureFlags(): void {
//    imgui.igUpdateHoveredWindowAndCaptureFlags();
// }
// export function startMouseMovingWindow(window: ImGuiWindow): void {
//   return imgui.igStartMouseMovingWindow(window);
// }
// export function startMouseMovingWindowOrNode(window: ImGuiWindow, node: ImGuiDockNode, undock_floating_node: boolean): void {
//   return imgui.igStartMouseMovingWindowOrNode(window, node, undock_floating_node);
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
//   return imgui.igRemoveContextHook(context, hook_to_remove);
// }
// export function translateWindowsInViewport(viewport: ImGuiViewportP, old_pos: ImVec2, new_pos: ImVec2): void {
//   return imgui.igTranslateWindowsInViewport(viewport, old_pos, new_pos);
// }
// export function scaleWindowsInViewport(viewport: ImGuiViewportP, scale: number): void {
//   return imgui.igScaleWindowsInViewport(viewport, scale);
// }
// export function destroyPlatformWindow(viewport: ImGuiViewportP): void {
//   return imgui.igDestroyPlatformWindow(viewport);
// }
// export function setWindowViewport(window: ImGuiWindow, viewport: ImGuiViewportP): void {
//   return imgui.igSetWindowViewport(window, viewport);
// }
// export function setCurrentViewport(window: ImGuiWindow, viewport: ImGuiViewportP): void {
//   return imgui.igSetCurrentViewport(window, viewport);
// }
// export function getViewportPlatformMonitor(viewport: ImGuiViewport): ImGuiPlatformMonitor {
//   return imgui.igGetViewportPlatformMonitor(viewport);
// }
// export function findHoveredViewportFromPlatformWindowStack(mouse_platform_pos: ImVec2): ImGuiViewportP {
//   return imgui.igFindHoveredViewportFromPlatformWindowStack(mouse_platform_pos);
// }
// export function markIniSettingsDirty_Nil(): void {
//    imgui.igMarkIniSettingsDirty_Nil();
// }
// export function markIniSettingsDirty_WindowPtr(window: ImGuiWindow): void {
//   return imgui.igMarkIniSettingsDirty_WindowPtr(window);
// }
// export function clearIniSettings(): void {
//    imgui.igClearIniSettings();
// }
// export function createNewWindowSettings(name: string): ImGuiWindowSettings {
//   return imgui.igCreateNewWindowSettings(cstring(name));
// }
// export function findWindowSettings(id: ImGuiID): ImGuiWindowSettings {
//   return imgui.igFindWindowSettings(id);
// }
// export function findOrCreateWindowSettings(name: string): ImGuiWindowSettings {
//   return imgui.igFindOrCreateWindowSettings(cstring(name));
// }
// export function addSettingsHandler(handler: ImGuiSettingsHandler): void {
//   return imgui.igAddSettingsHandler(handler);
// }
// export function removeSettingsHandler(type_name: string): void {
//   return imgui.igRemoveSettingsHandler(cstring(type_name));
// }
// export function findSettingsHandler(type_name: string): ImGuiSettingsHandler {
//   return imgui.igFindSettingsHandler(cstring(type_name));
// }
// export function localizeRegisterEntries(entries: ImGuiLocEntry, count: number): void {
//   return imgui.igLocalizeRegisterEntries(entries, count);
// }
// export function setScrollX_WindowPtr(window: ImGuiWindow, scroll_x: number): void {
//   return imgui.igSetScrollX_WindowPtr(window, scroll_x);
// }
// export function setScrollY_WindowPtr(window: ImGuiWindow, scroll_y: number): void {
//   return imgui.igSetScrollY_WindowPtr(window, scroll_y);
// }
// export function setScrollFromPosX_WindowPtr(window: ImGuiWindow, local_x: number, center_x_ratio: number): void {
//   return imgui.igSetScrollFromPosX_WindowPtr(window, local_x, center_x_ratio);
// }
// export function setScrollFromPosY_WindowPtr(window: ImGuiWindow, local_y: number, center_y_ratio: number): void {
//   return imgui.igSetScrollFromPosY_WindowPtr(window, local_y, center_y_ratio);
// }
// export function scrollToItem(flags: ImGuiScrollFlags): void {
//   return imgui.igScrollToItem(flags);
// }
// export function scrollToRect(window: ImGuiWindow, rect: ImRect, flags: ImGuiScrollFlags): void {
//   return imgui.igScrollToRect(window, rect, flags);
// }
// export function scrollToRectEx(*pOut: ImVec2, window: ImGuiWindow, rect: ImRect, flags: ImGuiScrollFlags): void {
//   return imgui.igScrollToRectEx(*pOut, window, rect, flags);
// }
// export function scrollToBringRectIntoView(window: ImGuiWindow, rect: ImRect): void {
//   return imgui.igScrollToBringRectIntoView(window, rect);
// }
// export function getItemStatusFlags(): ImGuiItemStatusFlags {
//    imgui.igGetItemStatusFlags();
// }
// export function getItemFlags(): ImGuiItemFlags {
//    imgui.igGetItemFlags();
// }
// export function getActiveID(): ImGuiID {
//    imgui.igGetActiveID();
// }
// export function getFocusID(): ImGuiID {
//    imgui.igGetFocusID();
// }
// export function setActiveID(id: ImGuiID, window: ImGuiWindow): void {
//   return imgui.igSetActiveID(id, window);
// }
// export function setFocusID(id: ImGuiID, window: ImGuiWindow): void {
//   return imgui.igSetFocusID(id, window);
// }
// export function clearActiveID(): void {
//    imgui.igClearActiveID();
// }
// export function getHoveredID(): ImGuiID {
//    imgui.igGetHoveredID();
// }
// export function setHoveredID(id: ImGuiID): void {
//   return imgui.igSetHoveredID(id);
// }
// export function keepAliveID(id: ImGuiID): void {
//   return imgui.igKeepAliveID(id);
// }
// export function markItemEdited(id: ImGuiID): void {
//   return imgui.igMarkItemEdited(id);
// }
// export function pushOverrideID(id: ImGuiID): void {
//   return imgui.igPushOverrideID(id);
// }
// export function getIDWithSeed(str_id_begin: string, str_id_end: string, seed: ImGuiID): ImGuiID {
//   return imgui.igGetIDWithSeed(cstring(str_id_begin), cstring(str_id_end), seed);
// }
// export function itemSize_Vec2(size: ImVec2, text_baseline_y: number): void {
//   return imgui.igItemSize_Vec2(size, text_baseline_y);
// }
// export function itemSize_Rect(bb: ImRect, text_baseline_y: number): void {
//   return imgui.igItemSize_Rect(bb, text_baseline_y);
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
//   return imgui.igSetLastItemData(item_id, in_flags, status_flags, item_rect);
// }
// export function calcItemSize(*pOut: ImVec2, size: ImVec2, default_w: number, default_h: number): void {
//   return imgui.igCalcItemSize(*pOut, size, default_w, default_h);
// }
// export function calcWrapWidthForPos(pos: ImVec2, wrap_pos_x: number): number {
//   return imgui.igCalcWrapWidthForPos(pos, wrap_pos_x);
// }
// export function pushMultiItemsWidths(components: number, width_full: number): void {
//   return imgui.igPushMultiItemsWidths(components, width_full);
// }
// export function isItemToggledSelection(): boolean {
//    imgui.igIsItemToggledSelection();
// }
// export function getContentRegionMaxAbs(*pOut: ImVec2): void {
//   return imgui.igGetContentRegionMaxAbs(*pOut);
// }
// export function shrinkWidths(items: ImGuiShrinkWidthItem, count: number, width_excess: number): void {
//   return imgui.igShrinkWidths(items, count, width_excess);
// }
// export function pushItemFlag(option: ImGuiItemFlags, enabled: boolean): void {
//   return imgui.igPushItemFlag(option, enabled);
// }
// export function popItemFlag(): void {
//    imgui.igPopItemFlag();
// }
// export function logToBuffer(auto_open_depth: number): void {
//   return imgui.igLogToBuffer(auto_open_depth);
// }
// export function logRenderedText(ref_pos: ImVec2, text: string, text_end: string): void {
//   return imgui.igLogRenderedText(ref_pos, cstring(text), cstring(text_end));
// }
// export function logSetNextTextDecoration(prefix: string, suffix: string): void {
//   return imgui.igLogSetNextTextDecoration(cstring(prefix), cstring(suffix));
// }
// export function beginChildEx(name: string, id: ImGuiID, size_arg: ImVec2, border: boolean, flags: ImGuiWindowFlags): boolean {
//   return imgui.igBeginChildEx(cstring(name), id, size_arg, border, flags);
// }
// export function openPopupEx(id: ImGuiID, popup_flags: ImGuiPopupFlags): void {
//   return imgui.igOpenPopupEx(id, popup_flags);
// }
// export function closePopupToLevel(remaining: number, restore_focus_to_window_under_popup: boolean): void {
//   return imgui.igClosePopupToLevel(remaining, restore_focus_to_window_under_popup);
// }
// export function closePopupsOverWindow(ref_window: ImGuiWindow, restore_focus_to_window_under_popup: boolean): void {
//   return imgui.igClosePopupsOverWindow(ref_window, restore_focus_to_window_under_popup);
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
//   return imgui.igBeginTooltipEx(tooltip_flags, extra_window_flags);
// }
// export function getPopupAllowedExtentRect(*pOut: ImRect, window: ImGuiWindow): void {
//   return imgui.igGetPopupAllowedExtentRect(*pOut, window);
// }
// export function getTopMostPopupModal(): ImGuiWindow {
//    imgui.igGetTopMostPopupModal();
// }
// export function getTopMostAndVisiblePopupModal(): ImGuiWindow {
//    imgui.igGetTopMostAndVisiblePopupModal();
// }
// export function findBestWindowPosForPopup(*pOut: ImVec2, window: ImGuiWindow): void {
//   return imgui.igFindBestWindowPosForPopup(*pOut, window);
// }
// export function beginViewportSideBar(name: string, viewport: ImGuiViewport, dir: ImGuiDir, size: number, window_flags: ImGuiWindowFlags): boolean {
//   return imgui.igBeginViewportSideBar(cstring(name), viewport, dir, size, window_flags);
// }
// export function beginMenuEx(label: string, icon: string, enabled: boolean): boolean {
//   return imgui.igBeginMenuEx(cstring(label), cstring(icon), enabled);
// }
// export function menuItemEx(label: string, icon: string, shortcut: string, selected: boolean, enabled: boolean): boolean {
//   return imgui.igMenuItemEx(cstring(label), cstring(icon), cstring(shortcut), selected, enabled);
// }
// export function beginComboPopup(popup_id: ImGuiID, bb: ImRect, flags: ImGuiComboFlags): boolean {
//   return imgui.igBeginComboPopup(popup_id, bb, flags);
// }
// export function beginComboPreview(): boolean {
//    imgui.igBeginComboPreview();
// }
// export function endComboPreview(): void {
//    imgui.igEndComboPreview();
// }
// export function navInitWindow(window: ImGuiWindow, force_reinit: boolean): void {
//   return imgui.igNavInitWindow(window, force_reinit);
// }
// export function navInitRequestApplyResult(): void {
//    imgui.igNavInitRequestApplyResult();
// }
// export function navMoveRequestButNoResultYet(): boolean {
//    imgui.igNavMoveRequestButNoResultYet();
// }
// export function navMoveRequestSubmit(move_dir: ImGuiDir, clip_dir: ImGuiDir, move_flags: ImGuiNavMoveFlags, scroll_flags: ImGuiScrollFlags): void {
//   return imgui.igNavMoveRequestSubmit(move_dir, clip_dir, move_flags, scroll_flags);
// }
// export function navMoveRequestForward(move_dir: ImGuiDir, clip_dir: ImGuiDir, move_flags: ImGuiNavMoveFlags, scroll_flags: ImGuiScrollFlags): void {
//   return imgui.igNavMoveRequestForward(move_dir, clip_dir, move_flags, scroll_flags);
// }
// export function navMoveRequestResolveWithLastItem(result: ImGuiNavItemData): void {
//   return imgui.igNavMoveRequestResolveWithLastItem(result);
// }
// export function navMoveRequestCancel(): void {
//    imgui.igNavMoveRequestCancel();
// }
// export function navMoveRequestApplyResult(): void {
//    imgui.igNavMoveRequestApplyResult();
// }
// export function navMoveRequestTryWrapping(window: ImGuiWindow, move_flags: ImGuiNavMoveFlags): void {
//   return imgui.igNavMoveRequestTryWrapping(window, move_flags);
// }
// export function activateItem(id: ImGuiID): void {
//   return imgui.igActivateItem(id);
// }
// export function setNavWindow(window: ImGuiWindow): void {
//   return imgui.igSetNavWindow(window);
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
//   return imgui.igGetKeyChordName(key_chord, cstring(out_buf), out_buf_size);
// }
// export function mouseButtonToKey(button: ImGuiMouseButton): ImGuiKey {
//   return imgui.igMouseButtonToKey(button);
// }
// export function isMouseDragPastThreshold(button: ImGuiMouseButton, lock_threshold: number): boolean {
//   return imgui.igIsMouseDragPastThreshold(button, lock_threshold);
// }
// export function getKeyMagnitude2d(*pOut: ImVec2, key_left: ImGuiKey, key_right: ImGuiKey, key_up: ImGuiKey, key_down: ImGuiKey): void {
//   return imgui.igGetKeyMagnitude2d(*pOut, key_left, key_right, key_up, key_down);
// }
// export function getNavTweakPressedAmount(axis: ImGuiAxis): number {
//   return imgui.igGetNavTweakPressedAmount(axis);
// }
// export function calcTypematicRepeatAmount(t0: number, t1: number, repeat_delay: number, repeat_rate: number): number {
//   return imgui.igCalcTypematicRepeatAmount(t0, t1, repeat_delay, repeat_rate);
// }
// export function getTypematicRepeatRate(flags: ImGuiInputFlags, repeat_delay: float, repeat_rate: float): void {
//   return imgui.igGetTypematicRepeatRate(flags, repeat_delay, repeat_rate);
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
//   return imgui.igSetKeyOwner(key, owner_id, flags);
// }
// export function setItemKeyOwner(key: ImGuiKey, flags: ImGuiInputFlags): void {
//   return imgui.igSetItemKeyOwner(key, flags);
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
//   return imgui.igDockContextInitialize(ctx);
// }
// export function dockContextShutdown(ctx: ImGuiContext): void {
//   return imgui.igDockContextShutdown(ctx);
// }
// export function dockContextClearNodes(ctx: ImGuiContext, root_id: ImGuiID, clear_settings_refs: boolean): void {
//   return imgui.igDockContextClearNodes(ctx, root_id, clear_settings_refs);
// }
// export function dockContextRebuildNodes(ctx: ImGuiContext): void {
//   return imgui.igDockContextRebuildNodes(ctx);
// }
// export function dockContextNewFrameUpdateUndocking(ctx: ImGuiContext): void {
//   return imgui.igDockContextNewFrameUpdateUndocking(ctx);
// }
// export function dockContextNewFrameUpdateDocking(ctx: ImGuiContext): void {
//   return imgui.igDockContextNewFrameUpdateDocking(ctx);
// }
// export function dockContextEndFrame(ctx: ImGuiContext): void {
//   return imgui.igDockContextEndFrame(ctx);
// }
// export function dockContextGenNodeID(ctx: ImGuiContext): ImGuiID {
//   return imgui.igDockContextGenNodeID(ctx);
// }
// export function dockContextQueueDock(ctx: ImGuiContext, target: ImGuiWindow, target_node: ImGuiDockNode, payload: ImGuiWindow, split_dir: ImGuiDir, split_ratio: number, split_outer: boolean): void {
//   return imgui.igDockContextQueueDock(ctx, target, target_node, payload, split_dir, split_ratio, split_outer);
// }
// export function dockContextQueueUndockWindow(ctx: ImGuiContext, window: ImGuiWindow): void {
//   return imgui.igDockContextQueueUndockWindow(ctx, window);
// }
// export function dockContextQueueUndockNode(ctx: ImGuiContext, node: ImGuiDockNode): void {
//   return imgui.igDockContextQueueUndockNode(ctx, node);
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
//    imgui.igGetWindowDockNode();
// }
// export function getWindowAlwaysWantOwnTabBar(window: ImGuiWindow): boolean {
//   return imgui.igGetWindowAlwaysWantOwnTabBar(window);
// }
// export function beginDocked(window: ImGuiWindow, open: CBool | null = null): void {
//   return imgui.igBeginDocked(window, open ? open[BUFFER] : null);
// }
// export function beginDockableDragDropSource(window: ImGuiWindow): void {
//   return imgui.igBeginDockableDragDropSource(window);
// }
// export function beginDockableDragDropTarget(window: ImGuiWindow): void {
//   return imgui.igBeginDockableDragDropTarget(window);
// }
// export function setWindowDock(window: ImGuiWindow, dock_id: ImGuiID, cond: ImGuiCond): void {
//   return imgui.igSetWindowDock(window, dock_id, cond);
// }
// export function dockBuilderDockWindow(window_name: string, node_id: ImGuiID): void {
//   return imgui.igDockBuilderDockWindow(cstring(window_name), node_id);
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
//   return imgui.igDockBuilderRemoveNode(node_id);
// }
// export function dockBuilderRemoveNodeDockedWindows(node_id: ImGuiID, clear_settings_refs: boolean): void {
//   return imgui.igDockBuilderRemoveNodeDockedWindows(node_id, clear_settings_refs);
// }
// export function dockBuilderRemoveNodeChildNodes(node_id: ImGuiID): void {
//   return imgui.igDockBuilderRemoveNodeChildNodes(node_id);
// }
// export function dockBuilderSetNodePos(node_id: ImGuiID, pos: ImVec2): void {
//   return imgui.igDockBuilderSetNodePos(node_id, pos);
// }
// export function dockBuilderSetNodeSize(node_id: ImGuiID, size: ImVec2): void {
//   return imgui.igDockBuilderSetNodeSize(node_id, size);
// }
// export function dockBuilderSplitNode(node_id: ImGuiID, split_dir: ImGuiDir, size_ratio_for_node_at_dir: number, out_id_at_dir: ImGuiID, out_id_at_opposite_dir: ImGuiID): ImGuiID {
//   return imgui.igDockBuilderSplitNode(node_id, split_dir, size_ratio_for_node_at_dir, out_id_at_dir, out_id_at_opposite_dir);
// }
// export function dockBuilderCopyDockSpace(src_dockspace_id: ImGuiID, dst_dockspace_id: ImGuiID, in_window_remap_pairs: ImVector__charPtr): void {
//   return imgui.igDockBuilderCopyDockSpace(src_dockspace_id, dst_dockspace_id, in_window_remap_pairs);
// }
// export function dockBuilderCopyNode(src_node_id: ImGuiID, dst_node_id: ImGuiID, out_node_remap_pairs: ImVector_ImGuiID): void {
//   return imgui.igDockBuilderCopyNode(src_node_id, dst_node_id, out_node_remap_pairs);
// }
// export function dockBuilderCopyWindowSettings(src_name: string, dst_name: string): void {
//   return imgui.igDockBuilderCopyWindowSettings(cstring(src_name), cstring(dst_name));
// }
// export function dockBuilderFinish(node_id: ImGuiID): void {
//   return imgui.igDockBuilderFinish(node_id);
// }
// export function pushFocusScope(id: ImGuiID): void {
//   return imgui.igPushFocusScope(id);
// }
// export function popFocusScope(): void {
//    imgui.igPopFocusScope();
// }
// export function getCurrentFocusScope(): ImGuiID {
//    imgui.igGetCurrentFocusScope();
// }
// export function isDragDropActive(): boolean {
//    imgui.igIsDragDropActive();
// }
// export function beginDragDropTargetCustom(bb: ImRect, id: ImGuiID): boolean {
//   return imgui.igBeginDragDropTargetCustom(bb, id);
// }
// export function clearDragDrop(): void {
//    imgui.igClearDragDrop();
// }
// export function isDragDropPayloadBeingAccepted(): boolean {
//    imgui.igIsDragDropPayloadBeingAccepted();
// }
// export function renderDragDropTargetRect(bb: ImRect): void {
//   return imgui.igRenderDragDropTargetRect(bb);
// }
// export function setWindowClipRectBeforeSetChannel(window: ImGuiWindow, clip_rect: ImRect): void {
//   return imgui.igSetWindowClipRectBeforeSetChannel(window, clip_rect);
// }
// export function beginColumns(str_id: string, count: number, flags: ImGuiOldColumnFlags): void {
//   return imgui.igBeginColumns(cstring(str_id), count, flags);
// }
// export function endColumns(): void {
//    imgui.igEndColumns();
// }
// export function pushColumnClipRect(column_index: number): void {
//   return imgui.igPushColumnClipRect(column_index);
// }
// export function pushColumnsBackground(): void {
//    imgui.igPushColumnsBackground();
// }
// export function popColumnsBackground(): void {
//    imgui.igPopColumnsBackground();
// }
// export function getColumnsID(str_id: string, count: number): ImGuiID {
//   return imgui.igGetColumnsID(cstring(str_id), count);
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
//   return imgui.igTableOpenContextMenu(column_n);
// }
// export function tableSetColumnWidth(column_n: number, width: number): void {
//   return imgui.igTableSetColumnWidth(column_n, width);
// }
// export function tableSetColumnSortDirection(column_n: number, sort_direction: ImGuiSortDirection, append_to_sort_specs: boolean): void {
//   return imgui.igTableSetColumnSortDirection(column_n, sort_direction, append_to_sort_specs);
// }
// export function tableGetHoveredColumn(): number {
//    imgui.igTableGetHoveredColumn();
// }
// export function tableGetHeaderRowHeight(): number {
//    imgui.igTableGetHeaderRowHeight();
// }
// export function tablePushBackgroundChannel(): void {
//    imgui.igTablePushBackgroundChannel();
// }
// export function tablePopBackgroundChannel(): void {
//    imgui.igTablePopBackgroundChannel();
// }
// export function getCurrentTable(): ImGuiTable {
//    imgui.igGetCurrentTable();
// }
// export function tableFindByID(id: ImGuiID): ImGuiTable {
//   return imgui.igTableFindByID(id);
// }
// export function beginTableEx(name: string, id: ImGuiID, columns_count: number, flags: ImGuiTableFlags, outer_size: ImVec2, inner_width: number): boolean {
//   return imgui.igBeginTableEx(cstring(name), id, columns_count, flags, outer_size, inner_width);
// }
// export function tableBeginInitMemory(table: ImGuiTable, columns_count: number): void {
//   return imgui.igTableBeginInitMemory(table, columns_count);
// }
// export function tableBeginApplyRequests(table: ImGuiTable): void {
//   return imgui.igTableBeginApplyRequests(table);
// }
// export function tableSetupDrawChannels(table: ImGuiTable): void {
//   return imgui.igTableSetupDrawChannels(table);
// }
// export function tableUpdateLayout(table: ImGuiTable): void {
//   return imgui.igTableUpdateLayout(table);
// }
// export function tableUpdateBorders(table: ImGuiTable): void {
//   return imgui.igTableUpdateBorders(table);
// }
// export function tableUpdateColumnsWeightFromWidth(table: ImGuiTable): void {
//   return imgui.igTableUpdateColumnsWeightFromWidth(table);
// }
// export function tableDrawBorders(table: ImGuiTable): void {
//   return imgui.igTableDrawBorders(table);
// }
// export function tableDrawContextMenu(table: ImGuiTable): void {
//   return imgui.igTableDrawContextMenu(table);
// }
// export function tableBeginContextMenuPopup(table: ImGuiTable): boolean {
//   return imgui.igTableBeginContextMenuPopup(table);
// }
// export function tableMergeDrawChannels(table: ImGuiTable): void {
//   return imgui.igTableMergeDrawChannels(table);
// }
// export function tableGetInstanceData(table: ImGuiTable, instance_no: number): ImGuiTableInstanceData {
//   return imgui.igTableGetInstanceData(table, instance_no);
// }
// export function tableSortSpecsSanitize(table: ImGuiTable): void {
//   return imgui.igTableSortSpecsSanitize(table);
// }
// export function tableSortSpecsBuild(table: ImGuiTable): void {
//   return imgui.igTableSortSpecsBuild(table);
// }
// export function tableGetColumnNextSortDirection(column: ImGuiTableColumn): ImGuiSortDirection {
//   return imgui.igTableGetColumnNextSortDirection(column);
// }
// export function tableFixColumnSortDirection(table: ImGuiTable, column: ImGuiTableColumn): void {
//   return imgui.igTableFixColumnSortDirection(table, column);
// }
// export function tableGetColumnWidthAuto(table: ImGuiTable, column: ImGuiTableColumn): number {
//   return imgui.igTableGetColumnWidthAuto(table, column);
// }
// export function tableBeginRow(table: ImGuiTable): void {
//   return imgui.igTableBeginRow(table);
// }
// export function tableEndRow(table: ImGuiTable): void {
//   return imgui.igTableEndRow(table);
// }
// export function tableBeginCell(table: ImGuiTable, column_n: number): void {
//   return imgui.igTableBeginCell(table, column_n);
// }
// export function tableEndCell(table: ImGuiTable): void {
//   return imgui.igTableEndCell(table);
// }
// export function tableGetCellBgRect(*pOut: ImRect, table: ImGuiTable, column_n: number): void {
//   return imgui.igTableGetCellBgRect(*pOut, table, column_n);
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
//   return imgui.igTableSetColumnWidthAutoSingle(table, column_n);
// }
// export function tableSetColumnWidthAutoAll(table: ImGuiTable): void {
//   return imgui.igTableSetColumnWidthAutoAll(table);
// }
// export function tableRemove(table: ImGuiTable): void {
//   return imgui.igTableRemove(table);
// }
// export function tableGcCompactTransientBuffers_TablePtr(table: ImGuiTable): void {
//   return imgui.igTableGcCompactTransientBuffers_TablePtr(table);
// }
// export function tableGcCompactTransientBuffers_TableTempDataPtr(table: ImGuiTableTempData): void {
//   return imgui.igTableGcCompactTransientBuffers_TableTempDataPtr(table);
// }
// export function tableGcCompactSettings(): void {
//    imgui.igTableGcCompactSettings();
// }
// export function tableLoadSettings(table: ImGuiTable): void {
//   return imgui.igTableLoadSettings(table);
// }
// export function tableSaveSettings(table: ImGuiTable): void {
//   return imgui.igTableSaveSettings(table);
// }
// export function tableResetSettings(table: ImGuiTable): void {
//   return imgui.igTableResetSettings(table);
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
//   return imgui.igTabBarAddTab(tab_bar, tab_flags, window);
// }
// export function tabBarRemoveTab(tab_bar: ImGuiTabBar, tab_id: ImGuiID): void {
//   return imgui.igTabBarRemoveTab(tab_bar, tab_id);
// }
// export function tabBarCloseTab(tab_bar: ImGuiTabBar, tab: ImGuiTabItem): void {
//   return imgui.igTabBarCloseTab(tab_bar, tab);
// }
// export function tabBarQueueReorder(tab_bar: ImGuiTabBar, tab: ImGuiTabItem, offset: number): void {
//   return imgui.igTabBarQueueReorder(tab_bar, tab, offset);
// }
// export function tabBarQueueReorderFromMousePos(tab_bar: ImGuiTabBar, tab: ImGuiTabItem, mouse_pos: ImVec2): void {
//   return imgui.igTabBarQueueReorderFromMousePos(tab_bar, tab, mouse_pos);
// }
// export function tabBarProcessReorder(tab_bar: ImGuiTabBar): boolean {
//   return imgui.igTabBarProcessReorder(tab_bar);
// }
// export function tabItemEx(tab_bar: ImGuiTabBar, label: string, open: CBool | null = null, flags: ImGuiTabItemFlags, docked_window: ImGuiWindow): boolean {
//   return imgui.igTabItemEx(tab_bar, cstring(label), open ? open[BUFFER] : null, flags, docked_window);
// }
// export function tabItemCalcSize_Str(*pOut: ImVec2, label: string, has_close_button_or_unsaved_marker: boolean): void {
//   return imgui.igTabItemCalcSize_Str(*pOut, cstring(label), has_close_button_or_unsaved_marker);
// }
// export function tabItemCalcSize_WindowPtr(*pOut: ImVec2, window: ImGuiWindow): void {
//   return imgui.igTabItemCalcSize_WindowPtr(*pOut, window);
// }
// export function tabItemBackground(draw_list: ImDrawList, bb: ImRect, flags: ImGuiTabItemFlags, col: ImU32): void {
//   return imgui.igTabItemBackground(draw_list, bb, flags, col);
// }
// export function tabItemLabelAndCloseButton(draw_list: ImDrawList, bb: ImRect, flags: ImGuiTabItemFlags, frame_padding: ImVec2, label: string, tab_id: ImGuiID, close_button_id: ImGuiID, is_contents_visible: boolean, out_just_closed: CBool | null = null, out_text_clipped: CBool | null = null): void {
//   return imgui.igTabItemLabelAndCloseButton(draw_list, bb, flags, frame_padding, cstring(label), tab_id, close_button_id, is_contents_visible, out_just_closed ? out_just_closed[BUFFER] : null, out_text_clipped ? out_text_clipped[BUFFER] : null);
// }
// export function renderText(pos: ImVec2, text: string, text_end: string, hide_text_after_hash: boolean): void {
//   return imgui.igRenderText(pos, cstring(text), cstring(text_end), hide_text_after_hash);
// }
// export function renderTextWrapped(pos: ImVec2, text: string, text_end: string, wrap_width: number): void {
//   return imgui.igRenderTextWrapped(pos, cstring(text), cstring(text_end), wrap_width);
// }
// export function renderTextClipped(pos_min: ImVec2, pos_max: ImVec2, text: string, text_end: string, text_size_if_known: ImVec2, align: ImVec2, clip_rect: ImRect): void {
//   return imgui.igRenderTextClipped(pos_min, pos_max, cstring(text), cstring(text_end), text_size_if_known, align, clip_rect);
// }
// export function renderTextClippedEx(draw_list: ImDrawList, pos_min: ImVec2, pos_max: ImVec2, text: string, text_end: string, text_size_if_known: ImVec2, align: ImVec2, clip_rect: ImRect): void {
//   return imgui.igRenderTextClippedEx(draw_list, pos_min, pos_max, cstring(text), cstring(text_end), text_size_if_known, align, clip_rect);
// }
// export function renderTextEllipsis(draw_list: ImDrawList, pos_min: ImVec2, pos_max: ImVec2, clip_max_x: number, ellipsis_max_x: number, text: string, text_end: string, text_size_if_known: ImVec2): void {
//   return imgui.igRenderTextEllipsis(draw_list, pos_min, pos_max, clip_max_x, ellipsis_max_x, cstring(text), cstring(text_end), text_size_if_known);
// }
// export function renderFrame(min: ImVec2, max: ImVec2, fill_col: ImU32, border: boolean, rounding: number): void {
//   return imgui.igRenderFrame(min, max, fill_col, border, rounding);
// }
// export function renderFrameBorder(min: ImVec2, max: ImVec2, rounding: number): void {
//   return imgui.igRenderFrameBorder(min, max, rounding);
// }
// export function renderColorRectWithAlphaCheckerboard(draw_list: ImDrawList, min: ImVec2, max: ImVec2, fill_col: ImU32, grid_step: number, grid_off: ImVec2, rounding: number, flags: ImDrawFlags): void {
//   return imgui.igRenderColorRectWithAlphaCheckerboard(draw_list, min, max, fill_col, grid_step, grid_off, rounding, flags);
// }
// export function renderNavHighlight(bb: ImRect, id: ImGuiID, flags: ImGuiNavHighlightFlags): void {
//   return imgui.igRenderNavHighlight(bb, id, flags);
// }
// export function findRenderedTextEnd(text: string, text_end: string): string {
//   return imgui.igFindRenderedTextEnd(cstring(text), cstring(text_end));
// }
// export function renderMouseCursor(pos: ImVec2, scale: number, mouse_cursor: ImGuiMouseCursor, col_fill: ImU32, col_border: ImU32, col_shadow: ImU32): void {
//   return imgui.igRenderMouseCursor(pos, scale, mouse_cursor, col_fill, col_border, col_shadow);
// }
// export function renderArrow(draw_list: ImDrawList, pos: ImVec2, col: ImU32, dir: ImGuiDir, scale: number): void {
//   return imgui.igRenderArrow(draw_list, pos, col, dir, scale);
// }
// export function renderBullet(draw_list: ImDrawList, pos: ImVec2, col: ImU32): void {
//   return imgui.igRenderBullet(draw_list, pos, col);
// }
// export function renderCheckMark(draw_list: ImDrawList, pos: ImVec2, col: ImU32, sz: number): void {
//   return imgui.igRenderCheckMark(draw_list, pos, col, sz);
// }
// export function renderArrowPointingAt(draw_list: ImDrawList, pos: ImVec2, half_sz: ImVec2, direction: ImGuiDir, col: ImU32): void {
//   return imgui.igRenderArrowPointingAt(draw_list, pos, half_sz, direction, col);
// }
// export function renderArrowDockMenu(draw_list: ImDrawList, min: ImVec2, sz: number, col: ImU32): void {
//   return imgui.igRenderArrowDockMenu(draw_list, min, sz, col);
// }
// export function renderRectFilledRangeH(draw_list: ImDrawList, rect: ImRect, col: ImU32, x_start_norm: number, x_end_norm: number, rounding: number): void {
//   return imgui.igRenderRectFilledRangeH(draw_list, rect, col, x_start_norm, x_end_norm, rounding);
// }
// export function renderRectFilledWithHole(draw_list: ImDrawList, outer: ImRect, inner: ImRect, col: ImU32, rounding: number): void {
//   return imgui.igRenderRectFilledWithHole(draw_list, outer, inner, col, rounding);
// }
// export function calcRoundingFlagsForRectInRect(r_in: ImRect, r_outer: ImRect, threshold: number): ImDrawFlags {
//   return imgui.igCalcRoundingFlagsForRectInRect(r_in, r_outer, threshold);
// }
// export function textEx(text: string, text_end: string, flags: ImGuiTextFlags): void {
//   return imgui.igTextEx(cstring(text), cstring(text_end), flags);
// }
// export function buttonEx(label: string, size_arg: ImVec2, flags: ImGuiButtonFlags): boolean {
//   return imgui.igButtonEx(cstring(label), size_arg, flags);
// }
// export function arrowButtonEx(str_id: string, dir: ImGuiDir, size_arg: ImVec2, flags: ImGuiButtonFlags): boolean {
//   return imgui.igArrowButtonEx(cstring(str_id), dir, size_arg, flags);
// }
// export function imageButtonEx(id: ImGuiID, texture_id: ImTextureID, size: ImVec2, uv0: ImVec2, uv1: ImVec2, bg_col: ImVec4, tint_col: ImVec4): boolean {
//   return imgui.igImageButtonEx(id, texture_id, size, uv0, uv1, bg_col, tint_col);
// }
// export function separatorEx(flags: ImGuiSeparatorFlags): void {
//   return imgui.igSeparatorEx(flags);
// }
// export function checkboxFlags_S64Ptr(label: string, flags: ImS64, flags_value: ImS64): boolean {
//   return imgui.igCheckboxFlags_S64Ptr(cstring(label), flags, flags_value);
// }
// export function checkboxFlags_U64Ptr(label: string, flags: ImU64, flags_value: ImU64): boolean {
//   return imgui.igCheckboxFlags_U64Ptr(cstring(label), flags, flags_value);
// }
// export function closeButton(id: ImGuiID, pos: ImVec2): boolean {
//   return imgui.igCloseButton(id, pos);
// }
// export function collapseButton(id: ImGuiID, pos: ImVec2, dock_node: ImGuiDockNode): boolean {
//   return imgui.igCollapseButton(id, pos, dock_node);
// }
// export function scrollbar(axis: ImGuiAxis): void {
//   return imgui.igScrollbar(axis);
// }
// export function scrollbarEx(bb: ImRect, id: ImGuiID, axis: ImGuiAxis, scroll_v: ImS64, avail_v: ImS64, contents_v: ImS64, flags: ImDrawFlags): boolean {
//   return imgui.igScrollbarEx(bb, id, axis, scroll_v, avail_v, contents_v, flags);
// }
// export function getWindowScrollbarRect(*pOut: ImRect, window: ImGuiWindow, axis: ImGuiAxis): void {
//   return imgui.igGetWindowScrollbarRect(*pOut, window, axis);
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
// export function dragBehavior(id: ImGuiID, data_type: ImGuiDataType, v: void, v_speed: number, min: void, max: void, format: string, flags: ImGuiSliderFlags): boolean {
//   return imgui.igDragBehavior(id, data_type, v, v_speed, min, max, cstring(format), flags);
// }
// export function sliderBehavior(bb: ImRect, id: ImGuiID, data_type: ImGuiDataType, v: void, min: void, max: void, format: string, flags: ImGuiSliderFlags, out_grab_bb: ImRect): boolean {
//   return imgui.igSliderBehavior(bb, id, data_type, v, min, max, cstring(format), flags, out_grab_bb);
// }
// export function splitterBehavior(bb: ImRect, id: ImGuiID, axis: ImGuiAxis, size1: float, size2: float, min_size1: number, min_size2: number, hover_extend: number, hover_visibility_delay: number, bg_col: ImU32): boolean {
//   return imgui.igSplitterBehavior(bb, id, axis, size1, size2, min_size1, min_size2, hover_extend, hover_visibility_delay, bg_col);
// }
// export function treeNodeBehavior(id: ImGuiID, flags: ImGuiTreeNodeFlags, label: string, label_end: string): boolean {
//   return imgui.igTreeNodeBehavior(id, flags, cstring(label), cstring(label_end));
// }
// export function treePushOverrideID(id: ImGuiID): void {
//   return imgui.igTreePushOverrideID(id);
// }
// export function treeNodeSetOpen(id: ImGuiID, open: boolean): void {
//   return imgui.igTreeNodeSetOpen(id, open);
// }
// export function treeNodeUpdateNextOpen(id: ImGuiID, flags: ImGuiTreeNodeFlags): boolean {
//   return imgui.igTreeNodeUpdateNextOpen(id, flags);
// }
// export function dataTypeGetInfo(data_type: ImGuiDataType): ImGuiDataTypeInfo {
//   return imgui.igDataTypeGetInfo(data_type);
// }
// export function dataTypeFormatString(buf: string, buf_size: number, data_type: ImGuiDataType, data: void, format: string): number {
//   return imgui.igDataTypeFormatString(cstring(buf), buf_size, data_type, data, cstring(format));
// }
// export function dataTypeApplyOp(data_type: ImGuiDataType, op: number, output: void, arg_1: void, arg_2: void): void {
//   return imgui.igDataTypeApplyOp(data_type, op, output, arg_1, arg_2);
// }
// export function dataTypeApplyFromText(buf: string, data_type: ImGuiDataType, data: void, format: string): boolean {
//   return imgui.igDataTypeApplyFromText(cstring(buf), data_type, data, cstring(format));
// }
// export function dataTypeCompare(data_type: ImGuiDataType, arg_1: void, arg_2: void): number {
//   return imgui.igDataTypeCompare(data_type, arg_1, arg_2);
// }
// export function dataTypeClamp(data_type: ImGuiDataType, data: void, min: void, max: void): boolean {
//   return imgui.igDataTypeClamp(data_type, data, min, max);
// }
// export function inputTextEx(label: string, hint: string, buf: string, buf_size: number, size_arg: ImVec2, flags: ImGuiInputTextFlags, callback: ImGuiInputTextCallback, user_data: void): boolean {
//   return imgui.igInputTextEx(cstring(label), cstring(hint), cstring(buf), buf_size, size_arg, flags, callback, user_data);
// }
// export function tempInputText(bb: ImRect, id: ImGuiID, label: string, buf: string, buf_size: number, flags: ImGuiInputTextFlags): boolean {
//   return imgui.igTempInputText(bb, id, cstring(label), cstring(buf), buf_size, flags);
// }
// export function tempInputScalar(bb: ImRect, id: ImGuiID, label: string, data_type: ImGuiDataType, data: void, format: string, clamp_min: void, clamp_max: void): boolean {
//   return imgui.igTempInputScalar(bb, id, cstring(label), data_type, data, cstring(format), clamp_min, clamp_max);
// }
// export function tempInputIsActive(id: ImGuiID): boolean {
//   return imgui.igTempInputIsActive(id);
// }
// export function getInputTextState(id: ImGuiID): ImGuiInputTextState {
//   return imgui.igGetInputTextState(id);
// }
// export function colorTooltip(text: string, col: float, flags: ImGuiColorEditFlags): void {
//   return imgui.igColorTooltip(cstring(text), col, flags);
// }
// export function colorEditOptionsPopup(col: float, flags: ImGuiColorEditFlags): void {
//   return imgui.igColorEditOptionsPopup(col, flags);
// }
// export function colorPickerOptionsPopup(ref_col: float, flags: ImGuiColorEditFlags): void {
//   return imgui.igColorPickerOptionsPopup(ref_col, flags);
// }
// export function plotEx(plot_type: ImGuiPlotType, label: string, data: Deno.UnsafeCallback, idx): number, data: void, values_count: number, values_offset: number, overlay_text: string, scale_min: number, scale_max: number, frame_size: ImVec2): number {
//   return imgui.igPlotEx(plot_type, cstring(label), data, idx), data, values_count, values_offset, cstring(overlay_text), scale_min, scale_max, frame_size);
// }
// export function shadeVertsLinearColorGradientKeepAlpha(draw_list: ImDrawList, vert_start_idx: number, vert_end_idx: number, gradient_p0: ImVec2, gradient_p1: ImVec2, col0: ImU32, col1: ImU32): void {
//   return imgui.igShadeVertsLinearColorGradientKeepAlpha(draw_list, vert_start_idx, vert_end_idx, gradient_p0, gradient_p1, col0, col1);
// }
// export function shadeVertsLinearUV(draw_list: ImDrawList, vert_start_idx: number, vert_end_idx: number, a: ImVec2, b: ImVec2, uv_a: ImVec2, uv_b: ImVec2, clamp: boolean): void {
//   return imgui.igShadeVertsLinearUV(draw_list, vert_start_idx, vert_end_idx, a, b, uv_a, uv_b, clamp);
// }
// export function gcCompactTransientMiscBuffers(): void {
//    imgui.igGcCompactTransientMiscBuffers();
// }
// export function gcCompactTransientWindowBuffers(window: ImGuiWindow): void {
//   return imgui.igGcCompactTransientWindowBuffers(window);
// }
// export function gcAwakeTransientWindowBuffers(window: ImGuiWindow): void {
//   return imgui.igGcAwakeTransientWindowBuffers(window);
// }
// export function errorCheckEndFrameRecover(log_callback: ImGuiErrorLogCallback, user_data: void): void {
//   return imgui.igErrorCheckEndFrameRecover(log_callback, user_data);
// }
// export function errorCheckEndWindowRecover(log_callback: ImGuiErrorLogCallback, user_data: void): void {
//   return imgui.igErrorCheckEndWindowRecover(log_callback, user_data);
// }
// export function errorCheckUsingSetCursorPosToExtendParentBoundaries(): void {
//    imgui.igErrorCheckUsingSetCursorPosToExtendParentBoundaries();
// }
// export function debugLocateItem(target_id: ImGuiID): void {
//   return imgui.igDebugLocateItem(target_id);
// }
// export function debugLocateItemOnHover(target_id: ImGuiID): void {
//   return imgui.igDebugLocateItemOnHover(target_id);
// }
// export function debugLocateItemResolveWithLastItem(): void {
//    imgui.igDebugLocateItemResolveWithLastItem();
// }
// export function debugDrawItemRect(col: ImU32): void {
//   return imgui.igDebugDrawItemRect(col);
// }
// export function debugStartItemPicker(): void {
//    imgui.igDebugStartItemPicker();
// }
// export function showFontAtlas(atlas: ImFontAtlas): void {
//   return imgui.igShowFontAtlas(atlas);
// }
// export function debugHookIdInfo(id: ImGuiID, data_type: ImGuiDataType, data_id: void, data_id_end: void): void {
//   return imgui.igDebugHookIdInfo(id, data_type, data_id, data_id_end);
// }
// export function debugNodeColumns(columns: ImGuiOldColumns): void {
//   return imgui.igDebugNodeColumns(columns);
// }
// export function debugNodeDockNode(node: ImGuiDockNode, label: string): void {
//   return imgui.igDebugNodeDockNode(node, cstring(label));
// }
// export function debugNodeDrawList(window: ImGuiWindow, viewport: ImGuiViewportP, draw_list: ImDrawList, label: string): void {
//   return imgui.igDebugNodeDrawList(window, viewport, draw_list, cstring(label));
// }
// export function debugNodeDrawCmdShowMeshAndBoundingBox(out_draw_list: ImDrawList, draw_list: ImDrawList, draw_cmd: ImDrawCmd, show_mesh: boolean, show_aabb: boolean): void {
//   return imgui.igDebugNodeDrawCmdShowMeshAndBoundingBox(out_draw_list, draw_list, draw_cmd, show_mesh, show_aabb);
// }
// export function debugNodeFont(font: ImFont): void {
//   return imgui.igDebugNodeFont(font);
// }
// export function debugNodeFontGlyph(font: ImFont, glyph: ImFontGlyph): void {
//   return imgui.igDebugNodeFontGlyph(font, glyph);
// }
// export function debugNodeStorage(storage: ImGuiStorage, label: string): void {
//   return imgui.igDebugNodeStorage(storage, cstring(label));
// }
// export function debugNodeTabBar(tab_bar: ImGuiTabBar, label: string): void {
//   return imgui.igDebugNodeTabBar(tab_bar, cstring(label));
// }
// export function debugNodeTable(table: ImGuiTable): void {
//   return imgui.igDebugNodeTable(table);
// }
// export function debugNodeTableSettings(settings: ImGuiTableSettings): void {
//   return imgui.igDebugNodeTableSettings(settings);
// }
// export function debugNodeInputTextState(state: ImGuiInputTextState): void {
//   return imgui.igDebugNodeInputTextState(state);
// }
// export function debugNodeWindow(window: ImGuiWindow, label: string): void {
//   return imgui.igDebugNodeWindow(window, cstring(label));
// }
// export function debugNodeWindowSettings(settings: ImGuiWindowSettings): void {
//   return imgui.igDebugNodeWindowSettings(settings);
// }
// export function debugNodeWindowsList(windows: ImVector_ImGuiWindowPtr, label: string): void {
//   return imgui.igDebugNodeWindowsList(windows, cstring(label));
// }
// export function debugNodeWindowsListByBeginStackParent(windows: Deno.UnsafeCallback, windows_size: number, parent_in_begin_stack: ImGuiWindow): void {
//   return imgui.igDebugNodeWindowsListByBeginStackParent(windows, windows_size, parent_in_begin_stack);
// }
// export function debugNodeViewport(viewport: ImGuiViewportP): void {
//   return imgui.igDebugNodeViewport(viewport);
// }
// export function debugRenderKeyboardPreview(draw_list: ImDrawList): void {
//   return imgui.igDebugRenderKeyboardPreview(draw_list);
// }
// export function debugRenderViewportThumbnail(draw_list: ImDrawList, viewport: ImGuiViewportP, bb: ImRect): void {
//   return imgui.igDebugRenderViewportThumbnail(draw_list, viewport, bb);
// }
// export function isKeyPressedMap(key: ImGuiKey, repeat: boolean): boolean {
//   return imgui.igIsKeyPressedMap(key, repeat);
// }
// export function imFontAtlasGetBuilderForStbTruetype(): ImFontBuilderIO {
//    imgui.igImFontAtlasGetBuilderForStbTruetype();
// }
// export function imFontAtlasBuildInit(atlas: ImFontAtlas): void {
//   return imgui.igImFontAtlasBuildInit(atlas);
// }
// export function imFontAtlasBuildSetupFont(atlas: ImFontAtlas, font: ImFont, font_config: ImFontConfig, ascent: number, descent: number): void {
//   return imgui.igImFontAtlasBuildSetupFont(atlas, font, font_config, ascent, descent);
// }
// export function imFontAtlasBuildPackCustomRects(atlas: ImFontAtlas, stbrp_context_opaque: void): void {
//   return imgui.igImFontAtlasBuildPackCustomRects(atlas, stbrp_context_opaque);
// }
// export function imFontAtlasBuildFinish(atlas: ImFontAtlas): void {
//   return imgui.igImFontAtlasBuildFinish(atlas);
// }
// export function imFontAtlasBuildRender8bppRectFromString(atlas: ImFontAtlas, x: number, y: number, w: number, h: number, in_str: string, in_marker_char: number, in_marker_pixel_value: number): void {
//   return imgui.igImFontAtlasBuildRender8bppRectFromString(atlas, x, y, w, h, cstring(in_str), in_marker_char, in_marker_pixel_value);
// }
// export function imFontAtlasBuildRender32bppRectFromString(atlas: ImFontAtlas, x: number, y: number, w: number, h: number, in_str: string, in_marker_char: number, in_marker_pixel_value: number): void {
//   return imgui.igImFontAtlasBuildRender32bppRectFromString(atlas, x, y, w, h, cstring(in_str), in_marker_char, in_marker_pixel_value);
// }
// export function imFontAtlasBuildMultiplyCalcLookupTable(out_table[256]: number, in_multiply_factor: number): void {
//   return imgui.igImFontAtlasBuildMultiplyCalcLookupTable(out_table[256], in_multiply_factor);
// }
// export function imFontAtlasBuildMultiplyRectAlpha8(table[256]: number, pixels: unsigned char, x: number, y: number, w: number, h: number, stride: number): void {
//   return imgui.igImFontAtlasBuildMultiplyRectAlpha8(table[256], pixels, x, y, w, h, stride);
// }
// export function gET_FLT_MAX(): number {
//    imgui.igGET_FLT_MAX();
// }
// export function gET_FLT_MIN(): number {
//    imgui.igGET_FLT_MIN();
// }
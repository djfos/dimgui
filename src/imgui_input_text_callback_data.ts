import { ImGuiKey } from "./enum.ts";
import { ImGuiInputTextFlags, ImWchar } from "./type.ts";
import { cString, ffi as imgui, StringSource } from "./ffi.ts";
import { assert } from "https://deno.land/std@0.177.0/testing/asserts.ts";

export class ImGuiInputTextCallbackData {
  #self: Deno.PointerValue;

  constructor(pointer: Deno.PointerValue) {
    this.#self = pointer;
  }

  get pointer() {
    return this.#self;
  }

  /*
   *  One ImGuiInputTextFlags_Callback*    // Read-only
   */
  get EventFlag(): ImGuiInputTextFlags {
    return imgui.DImGuiGetEventFlag(this.#self);
  }

  /*
   *  What user passed to InputText()      // Read-only
   */
  get Flags(): ImGuiInputTextFlags {
    return imgui.DImGuiGetFlags(this.#self);
  }

  /*
   *  Character input                      // Read-write   // [CharFilter] Replace character with another one, or set to zero to drop. return 1 is equivalent to setting EventChar=0;
   */
  get EventChar(): ImWchar {
    return imgui.DImGuiGetEventChar(this.#self);
  }
  set EventChar(value: ImWchar) {
    imgui.DImGuiSetEventChar(this.#self, value);
  }
  /*
   *  Key pressed (Up/Down/TAB)            // Read-only    // [Completion,History]
   */
  get EventKey(): ImGuiKey {
    return imgui.DImGuiGetEventKey(this.#self);
  }

  /*
   *  Text buffer                          // Read-write   // [Resize] Can replace pointer / [Completion,History,Always] Only write to pointed data, don't replace the actual pointer!
   */
  // get Buf() {
  //   const pointer = imgui.DImGuiGetBuf(this.#self);
  //   assert(pointer !== null);
  //   return new Deno.UnsafePointerView(pointer);
  // }

  /*
   *  Text length (in bytes)               // Read-write   // [Resize,Completion,History,Always] Exclude zero-terminator storage. In C land: == strlen(some_text), in C++ land: string.length()
   */
  get BufTextLen(): number {
    return imgui.DImGuiGetBufTextLen(this.#self);
  }
  /*
   *  Buffer size (in bytes) = capacity+1  // Read-only    // [Resize,Completion,History,Always] Include zero-terminator storage. In C land == ARRAYSIZE(my_char_array), in C++ land: string.capacity()+1
   */
  get BufSize(): number {
    return imgui.DImGuiGetBufSize(this.#self);
  }

  /*
   *  Set if you modify Buf/BufTextLen!    // Write        // [Completion,History,Always]
   */
  get BufDirty(): boolean {
    return imgui.DImGuiGetBufDirty(this.#self);
  }
  set BufDirty(value: boolean) {
    imgui.DImGuiSetBufDirty(this.#self, value);
  }
  /*
   *                                       // Read-write   // [Completion,History,Always]
   */
  get CursorPos(): number {
    return imgui.DImGuiGetCursorPos(this.#self);
  }
  set CursorPos(value: number) {
    imgui.DImGuiSetCursorPos(this.#self, value);
  }
  /*
   *                                       // Read-write   // [Completion,History,Always] == to SelectionEnd when no selection)
   */
  get SelectionStart(): number {
    return imgui.DImGuiGetSelectionStart(this.#self);
  }
  set SelectionStart(value: number) {
    imgui.DImGuiSetSelectionStart(this.#self, value);
  }
  /*
   *                                       // Read-write   // [Completion,History,Always]
   */
  get SelectionEnd(): number {
    return imgui.DImGuiGetSelectionEnd(this.#self);
  }
  set SelectionEnd(value: number) {
    imgui.DImGuiSetSelectionEnd(this.#self, value);
  }

  // IMGUI_API void      DeleteChars(int pos, int bytes_count);
  // IMGUI_API void      InsertChars(int pos, const char* text, const char* text_end = NULL);
  // void                SelectAll()             { SelectionStart = 0; SelectionEnd = BufTextLen; }
  // void                ClearSelection()        { SelectionStart = SelectionEnd = BufTextLen; }
  // bool                HasSelection() const    { return SelectionStart != SelectionEnd; }

  deleteChars(pos: number, bytes_count: number) {
    imgui.ImGuiInputTextCallbackData_DeleteChars(this.#self, pos, bytes_count);
  }
  insertChars(pos: number, text: StringSource) {
    imgui.ImGuiInputTextCallbackData_InsertChars(this.#self, pos, cString(text), null);
  }
  selectAll() {
    this.SelectionStart = 0;
    this.SelectionEnd = this.BufTextLen;
  }
  clearSelction() {
    this.SelectionStart = this.BufTextLen;
    this.SelectionEnd = this.BufTextLen;
  }
  hasSelection() {
    return this.SelectionStart != this.SelectionEnd;
  }
}

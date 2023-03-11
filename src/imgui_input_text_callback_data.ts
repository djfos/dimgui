import { ImGuiKey } from "./enum.ts";
import { ImGuiInputTextFlags, ImWchar } from "./type.ts";
import { ffi as imgui } from "./ffi.ts";

/**
 * Shared state of InputText() when using
 * custom ImGuiInputTextCallback (rare/advanced use)
 */
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
    return imgui.DImGuiInputTextCallbackDataGetEventFlag(this.#self);
  }
  // set EventFlag(value: ImGuiInputTextFlags) {
  //   imgui.DImGuiInputTextCallbackDataSetEventFlag(this.#self, value);
  // }
  /*
   *  What user passed to InputText()      // Read-only
   */
  get Flags(): ImGuiInputTextFlags {
    return imgui.DImGuiInputTextCallbackDataGetFlags(this.#self);
  }
  // set Flags(value: ImGuiInputTextFlags) {
  //   imgui.DImGuiInputTextCallbackDataSetFlags(this.#self, value);
  // }
  /*
   *  Character input                      // Read-write   // [CharFilter] Replace character with another one, or set to zero to drop. return 1 is equivalent to setting EventChar=0;
   */
  get EventChar(): ImWchar {
    return imgui.DImGuiInputTextCallbackDataGetEventChar(this.#self);
  }
  set EventChar(value: ImWchar) {
    imgui.DImGuiInputTextCallbackDataSetEventChar(this.#self, value);
  }
  /*
   *  Key pressed (Up/Down/TAB)            // Read-only    // [Completion,History]
   */
  get EventKey(): ImGuiKey {
    return imgui.DImGuiInputTextCallbackDataGetEventKey(this.#self);
  }
  // set EventKey(value: ImGuiKey) {
  //   imgui.DImGuiInputTextCallbackDataSetEventKey(this.#self, value);
  // }
  /*
   *  Text buffer                          // Read-write   // [Resize] Can replace pointer / [Completion,History,Always] Only write to pointed data, don't replace the actual pointer!
   */
  // get Buf(): string {
  //   return jsString(imgui.DImGuiInputTextCallbackDataGetBuf(this.#self));
  // }
  // set Buf(value: string) {
  //   imgui.DImGuiInputTextCallbackDataSetBuf(this.#self, cString(value));
  // }
  /*
   *  Text length (in bytes)               // Read-write   // [Resize,Completion,History,Always] Exclude zero-terminator storage. In C land: == strlen(some_text), in C++ land: string.length()
   */
  get BufTextLen(): number {
    return imgui.DImGuiInputTextCallbackDataGetBufTextLen(this.#self);
  }
  set BufTextLen(value: number) {
    imgui.DImGuiInputTextCallbackDataSetBufTextLen(this.#self, value);
  }
  /*
   *  Buffer size (in bytes) = capacity+1  // Read-only    // [Resize,Completion,History,Always] Include zero-terminator storage. In C land == ARRAYSIZE(my_char_array), in C++ land: string.capacity()+1
   */
  get BufSize(): number {
    return imgui.DImGuiInputTextCallbackDataGetBufSize(this.#self);
  }
  // set BufSize(value: number) {
  //   imgui.DImGuiInputTextCallbackDataSetBufSize(this.#self, value);
  // }
  /*
   *  Set if you modify Buf/BufTextLen!    // Write        // [Completion,History,Always]
   */
  get BufDirty(): boolean {
    return imgui.DImGuiInputTextCallbackDataGetBufDirty(this.#self);
  }
  set BufDirty(value: boolean) {
    imgui.DImGuiInputTextCallbackDataSetBufDirty(this.#self, value);
  }
  /*
   *                                       // Read-write   // [Completion,History,Always]
   */
  get CursorPos(): number {
    return imgui.DImGuiInputTextCallbackDataGetCursorPos(this.#self);
  }
  set CursorPos(value: number) {
    imgui.DImGuiInputTextCallbackDataSetCursorPos(this.#self, value);
  }
  /*
   *                                       // Read-write   // [Completion,History,Always] == to SelectionEnd when no selection)
   */
  get SelectionStart(): number {
    return imgui.DImGuiInputTextCallbackDataGetSelectionStart(this.#self);
  }
  set SelectionStart(value: number) {
    imgui.DImGuiInputTextCallbackDataSetSelectionStart(this.#self, value);
  }
  /*
   *                                       // Read-write   // [Completion,History,Always]
   */
  get SelectionEnd(): number {
    return imgui.DImGuiInputTextCallbackDataGetSelectionEnd(this.#self);
  }
  set SelectionEnd(value: number) {
    imgui.DImGuiInputTextCallbackDataSetSelectionEnd(this.#self, value);
  }
}

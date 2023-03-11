import { assert } from "https://deno.land/std@0.177.0/testing/asserts.ts";
import { ffi as imgui } from "./ffi.ts";

export const BUFFER = Symbol("vkStructBuffer");
export const DATAVIEW = Symbol("vkStructDataView");
export const LE = new Uint8Array(new Uint32Array([0x12345678]).buffer)[0] === 0x78;

function getPointerByte() {
  switch (Deno.build.arch) {
    case "x86_64":
      return 8;

    case "aarch64":
      return 16;

    default:
      throw Error("unhandled arch");
  }
}

export class Bool {
  #data: Uint8Array;

  get [BUFFER]() {
    return this.#data;
  }

  constructor(value: boolean = false) {
    this.#data = new Uint8Array(1);
    this.value = value;
  }

  static of(value: boolean) {
    const ret = new Bool();
    ret.value = value;
    return ret;
  }

  get value() {
    return !(this.#data[0] === 0);
  }

  set value(value: boolean) {
    if (value) {
      this.#data[0] = 1;
    } else {
      this.#data[0] = 0;
    }
  }

  toggle(): void {
    this.value = !this.value;
  }

  get buffer() {
    return this.#data;
  }
}

// type Int32 = number;
// type Float = number;
export class Float {
  #buffer: Float32Array;
  constructor() {
    this.#buffer = new Float32Array(1);
  }

  static of(value: number) {
    const ret = new Float();
    ret.value = value;
    return ret;
  }

  get value() {
    return this.#buffer[0];
  }

  set value(value: number) {
    this.#buffer[0] = value;
  }

  get buffer() {
    return this.#buffer;
  }
}

export class Double {
  #buffer: Float64Array;
  constructor() {
    this.#buffer = new Float64Array(1);
  }

  static of(value: number) {
    const ret = new Double();
    ret.value = value;
    return ret;
  }

  get value() {
    return this.#buffer[0];
  }

  set value(value: number) {
    this.#buffer[0] = value;
  }

  get buffer() {
    return this.#buffer;
  }
}

export class Int32 {
  #buffer: Int32Array;
  constructor() {
    this.#buffer = new Int32Array(1);
  }

  static of(value: number) {
    const ret = new Int32();
    ret.value = value;
    return ret;
  }

  get value() {
    return this.#buffer[0];
  }

  set value(value: number) {
    this.#buffer[0] = value;
  }

  get buffer() {
    return this.#buffer;
  }
}

export class Utf8Array {
  #buffer: Uint8Array;

  constructor(capacity: number);
  constructor(array: Uint8Array);
  constructor(x: number | Uint8Array) {
    if (x instanceof Uint8Array) {
      this.#buffer = x;
    } else {
      this.#buffer = new Uint8Array(x);
    }
  }

  /**
   * create a empty buffer
   */
  static empty(capacity: number) {
    const ret = new Utf8Array(capacity);
    return ret;
  }

  static of(initValue: string, capacity?: number) {
    const _capacity = capacity ?? initValue.length + 1;
    const ret = new Utf8Array(_capacity);
    ret.value = initValue;
    return ret;
  }

  private getEndingIndex() {
    for (let i = 0; i < this.#buffer.length; i++) {
      const c = this.#buffer[i];
      if (c == 0) {
        return i;
      }
    }
    return this.#buffer.length;
  }

  get value() {
    const ending = this.getEndingIndex();
    return new TextDecoder().decode(this.#buffer.slice(0, ending));
  }

  set value(value: string) {
    assert(value.length + 1 <= this.#buffer.length);
    new TextEncoder().encodeInto(value + "\0", this.#buffer);
  }

  get buffer() {
    return this.#buffer;
  }
}

// structs
/**
 * Temporary storage to output draw commands out of order,
 * used by ImDrawListSplitter and ImDrawList::ChannelsSplit()
 */
export type ImDrawChannel = Deno.PointerValue;
/**
 * A single draw command within a parent ImDrawList
 * (generally maps to 1 GPU draw call, unless it is a callback)
 */
export type ImDrawCmd = Deno.PointerValue;
/**
 * All draw command lists required to render
 * the frame + pos/size coordinates to use for the projection matrix.
 */
export type ImDrawData = Deno.PointerValue;
/**
 * A single draw command list (generally one per window,
 * conceptually you may see this as a dynamic "mesh" builder)
 */
export type ImDrawList = Deno.PointerValue;
/**
 * Data shared among multiple draw lists
 * (typically owned by parent ImGui context, but you may create one yourself)
 */
export type ImDrawListSharedData = Deno.PointerValue;
/**
 * Helper to split a draw list into different layers
 * which can be drawn into out of order, then flattened back.
 */
export type ImDrawListSplitter = Deno.PointerValue;
/**
 * A single vertex (pos + uv + col = 20 bytes by default.
 * Override layout with IMGUI_OVERRIDE_DRAWVERT_STRUCT_LAYOUT)
 */
export type ImDrawVert = Deno.PointerValue;
/**
 * Runtime data for a single font within a parent ImFontAtlas
 */
export type ImFont = Deno.PointerValue;
/**
 * Opaque interface to a font builder (stb_truetype or FreeType).
 */
export type ImFontBuilderIO = Deno.PointerValue;
/**
 * Configuration data when adding a font or merging fonts
 */
export type ImFontConfig = Deno.PointerValue;
/**
 * A single font glyph (code point + coordinates within in ImFontAtlas + offset)
 */
export type ImFontGlyph = Deno.PointerValue;
/**
 * Helper to build glyph ranges from text/string data
 */
export type ImFontGlyphRangesBuilder = Deno.PointerValue;
/**
 * Helper functions to create a color that can be converted to
 * either u32 or float4 (*OBSOLETE* please avoid using)
 */
// export type ImColor = Deno.PointerValue;
/**
 * Dear ImGui context (opaque structure, unless including imgui_internal.h)
 */
export type ImGuiContext = Deno.PointerValue;
/**
 * Main configuration and I/O between your application and ImGui
 */
// export class ImGuiIO {
//   #self: Deno.PointerValue;

//   constructor(self: Deno.PointerValue) {
//     this.#self = self;
//   }

//   get ConfigFlags(): number {
//     return imgui.DImGuiIOGetConfigFlags(this.#self);
//   }
//   set ConfigFlags(value: number) {
//     imgui.DImGuiIOSetConfigFlags(this.#self, value);
//   }

//   get Fonts(): ImFontAtlas {
//     return new ImFontAtlas(imgui.DImGuiIOGetFonts(this.#self));
//   }
// }
/**
 * Shared state of InputText() when using
 * custom ImGuiInputTextCallback (rare/advanced use)
 */
// import { ImGuiInputTextCallbackData } from "./imgui_input_text_callback_data.ts";
/**
 * Storage for ImGuiIO and IsKeyDown(), IsKeyPressed() etc functions.
 */
export type ImGuiKeyData = Deno.PointerValue;
/**
 * Helper to manually clip large list of items
 */
export class ImGuiListClipper {
  #buffer: Uint8Array;
  #view: DataView;
  // int             DisplayStart;       // First item to display, updated by each call to Step()
  // int             DisplayEnd;         // End of items to display (exclusive)
  // int             ItemsCount;         // [Internal] Number of items
  // float           ItemsHeight;        // [Internal] Height of item after a first step and item submission can calculate it
  // float           StartPosY;          // [Internal] Cursor position at the time of Begin() or after table frozen rows are all processed
  // void*           TempData;           // [Internal] Internal data
  static readonly size = 20 + getPointerByte();

  constructor() {
    this.#buffer = new Uint8Array(ImGuiListClipper.size);
    this.#view = new DataView(this.#buffer.buffer, this.#buffer.byteOffset);
    this.#view.setUint32(8, -1, LE);
  }

  get buffer() {
    return this.#buffer;
  }

  get DisplayStart() {
    return this.#view.getInt32(0, LE);
  }

  set DisplayStart(value: number) {
    this.#view.setInt32(0, value, LE);
  }
  get DisplayEnd() {
    return this.#view.getInt32(4, LE);
  }

  set DisplayEnd(value: number) {
    this.#view.setInt32(4, value, LE);
  }

  begin(items_count: number, items_height = -1.0) {
    imgui.ImGuiListClipper_Begin(
      Deno.UnsafePointer.of(this.#buffer),
      items_count,
      items_height,
    );
  }

  /**
   * Automatically called on the last call of Step() that returns false.
   */
  end() {
    imgui.ImGuiListClipper_End(Deno.UnsafePointer.of(this.#buffer));
  }

  /**
   * Call until it returns false. The DisplayStart/DisplayEnd fields will be set and you can process/draw those items.
   */
  step(): boolean {
    return imgui.ImGuiListClipper_Step(Deno.UnsafePointer.of(this.#buffer));
  }
}
/**
 * Helper for running a block of code not more than once a frame
 */
export type ImGuiOnceUponAFrame = Deno.PointerValue;
/**
 * User data payload for drag and drop operations
 */
export type ImGuiPayload = Deno.PointerValue;
/**
 * Multi-viewport support: interface for
 * Platform/Renderer backends + viewports to render
 */
export type ImGuiPlatformIO = Deno.PointerValue;
/**
 * Multi-viewport support: user-provided bounds
 * for each connected monitor/display.
 * Used when positioning popups and tooltips to avoid them straddling monitors
 */
export type ImGuiPlatformMonitor = Deno.PointerValue;
/**
 * Platform IME data for io.SetPlatformImeDataFn() function.
 */
export type ImGuiPlatformImeData = Deno.PointerValue;
/**
 * Callback data when using SetNextWindowSizeConstraints() (rare/advanced use)
 */
export type ImGuiSizeCallbackData = Deno.PointerValue;
/**
 * Helper for key->value storage
 */
export type ImGuiStorage = Deno.PointerValue;
/**
 * Runtime data for styling/colors
 */
// export type ImGuiStyle = Deno.PointerValue;
// export { ImGuiStyle } from "./imgui_style.ts";
/**
 * Sorting specifications for a table
 * (often handling sort specs for a single column, occasionally more)
 */
export type ImGuiTableSortSpecs = Deno.PointerValue;
/**
 * Sorting specification for one column of a table
 */
export type ImGuiTableColumnSortSpecs = Deno.PointerValue;
/**
 * Helper to hold and append into a text buffer (~string builder)
 */
export type ImGuiTextBuffer = Deno.PointerValue;
/**
 * Helper to parse and apply text filters (e.g. "aaaaa[,bbbbb][,ccccc]")
 */
export type ImGuiTextFilter = Deno.PointerValue;
/**
 * A Platform Window (always 1 unless multi-viewport are enabled.
 * One per platform window to output to).
 * In the future may represent Platform Monitor
 */
export type ImGuiViewport = Deno.PointerValue;
/**
 * Window class (rare/advanced uses: provide hints
 * to the platform backend via altered viewport flags and parent/child info)
 */
export type ImGuiWindowClass = Deno.PointerValue;

/**
 * ImVec2: 2D vector used to store positions, sizes etc.
 */
export class ImVec2 {
  #data: Float32Array;

  get [BUFFER]() {
    return this.#data;
  }

  constructor();
  constructor(x: number, y: number);
  constructor(x: ImVec2);
  constructor(x: BufferSource);
  constructor(x: number | ImVec2 | BufferSource = 0, y: number = 0) {
    if (typeof x == "number") { // assign
      this.#data = Float32Array.of(x, y);
    } else if (x instanceof ImVec2) { // clone
      this.#data = Float32Array.of(x.x, x.y);
    } else if (x instanceof ArrayBuffer) { // view
      this.#data = new Float32Array(x, 0, 2);
    } else { // view of TypedArray
      this.#data = new Float32Array(x.buffer, x.byteOffset, 2);
    }
  }

  get buffer() {
    return this.#data;
  }

  get x() {
    return this.#data[0];
  }
  set x(value: number) {
    this.#data[0] = value;
  }

  get y() {
    return this.#data[1];
  }
  set y(value: number) {
    this.#data[1] = value;
  }
}

/**
 * ImVec4: 4D vector used to store clipping rectangles, colors etc.
 */
export class ImVec4 {
  #data: Float32Array;

  get [BUFFER]() {
    return this.#data;
  }

  constructor();
  constructor(x: number, y: number, z: number, w: number);
  constructor(v: ImVec4);
  constructor(x: number | ImVec4 | BufferSource = 0, y: number = 0, z: number = 0, w: number = 0) {
    if (typeof x == "number") { // assign
      this.#data = Float32Array.of(x, y, z, w);
    } else if (x instanceof ImVec4) { // clone
      this.#data = Float32Array.of(x.x, x.y, x.z, x.w);
    } else if (x instanceof ArrayBuffer) { // view
      this.#data = new Float32Array(x, 0, 4);
    } else { // view of TypedArray
      this.#data = new Float32Array(x.buffer, x.byteOffset, 4);
    }
  }

  get buffer() {
    return this.#data;
  }

  get x() {
    return this.#data[0];
  }
  set x(value: number) {
    this.#data[0] = value;
  }
  get y() {
    return this.#data[1];
  }
  set y(value: number) {
    this.#data[1] = value;
  }
  get z() {
    return this.#data[2];
  }
  set z(value: number) {
    this.#data[2] = value;
  }
  get w() {
    return this.#data[3];
  }
  set w(value: number) {
    this.#data[3] = value;
  }

  pointer(index: number): Float32Array {
    return this.#data.subarray(index, index + 1);
  }

  static fromHSV(h: number, s: number, v: number, a = 1) {
    const vec4 = new ImVec4();
    imgui.igColorConvertHSVtoRGB(h, s, v, vec4.pointer(0), vec4.pointer(1), vec4.pointer(2));
    vec4.w = a;
    return vec4;
  }
}

// Flag
export type ImDrawFlags = number;
export type ImDrawListFlags = number;
export type ImFontAtlasFlags = number;
export type ImGuiBackendFlags = number;
export type ImGuiButtonFlags = number;
export type ImGuiColorEditFlags = number;
export type ImGuiConfigFlags = number;
export type ImGuiComboFlags = number;
export type ImGuiDockNodeFlags = number;
export type ImGuiDragDropFlags = number;
export type ImGuiFocusedFlags = number;
export type ImGuiHoveredFlags = number;
export type ImGuiInputTextFlags = number;
export type ImGuiKeyChord = number;
export type ImGuiPopupFlags = number;
export type ImGuiSelectableFlags = number;
export type ImGuiSliderFlags = number;
export type ImGuiTabBarFlags = number;
export type ImGuiTabItemFlags = number;
export type ImGuiTableFlags = number;
export type ImGuiTableColumnFlags = number;
export type ImGuiTableRowFlags = number;
export type ImGuiTreeNodeFlags = number;
export type ImGuiViewportFlags = number;
export type ImGuiWindowFlags = number;

// ImTexture: user data for renderer backend to identify a texture [Compile-time configurable type]
// - To use something else than an opaque void* pointer: override with e.g. '#define ImTextureID MyTextureType*' in your imconfig.h file.
// - This can be whatever to you want it to be! read the FAQ about ImTextureID for details.
export type ImTextureID = Deno.PointerValue;

// ImDrawIdx: vertex index. [Compile-time configurable type]
// - To use 16-bit indices + allow large meshes: backend need to set 'io.BackendFlags |= ImGuiBackendFlags_RendererHasVtxOffset' and handle ImDrawCmd::VtxOffset (recommended).
// - To use 32-bit indices: override with '#define ImDrawIdx unsigned int' in your imconfig.h file.
export type ImDrawIdx = number;

// Scalar data types
/**
 * A unique ID used by widgets (typically the result of hashing a stack of string)
 */
export type ImGuiID = number;
export type ImS8 = number;
export type ImU8 = number;
export type ImS16 = number;
export type ImU16 = number;
export type ImS32 = number;
/**
 * often used to store packed colors
 */
export type ImU32 = number;
export type ImS64 = Deno.PointerValue;
export type ImU64 = Deno.PointerValue;

// Character types
export type ImWchar16 = number;
export type ImWchar32 = number;
export type ImWchar = number;

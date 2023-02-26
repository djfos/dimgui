import { ffi as imgui } from "./ffi.ts";

export const BUFFER = Symbol("vkStructBuffer");
export const DATAVIEW = Symbol("vkStructDataView");
export const LE =
  new Uint8Array(new Uint32Array([0x12345678]).buffer)[0] === 0x78;

type BufferSource = ArrayBufferView | ArrayBuffer;

export class CBool {
  static readonly size = 1;
  #data: Uint8Array;
  #view: DataView;

  get [BUFFER]() {
    return this.#data;
  }
  get [DATAVIEW]() {
    return this.#view;
  }

  constructor(value: boolean) {
    this.#data = new Uint8Array(CBool.size);
    this.#view = new DataView(
      this.#data.buffer,
      this.#data.byteOffset,
      this.#data.byteLength,
    );
    this.value = value;
  }

  get value() {
    return !(this.#view.getUint8(0) === 0);
  }

  set value(value: boolean) {
    if (value) {
      this.#view.setUint8(0, 1);
    } else {
      this.#view.setUint8(0, 0);
    }
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
 * Runtime data for multiple fonts, bake multiple
 * fonts into a single texture, TTF/OTF font loader
 */
export type ImFontAtlas = Deno.PointerValue;
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
export type ImColor = Deno.PointerValue;
/**
 * Dear ImGui context (opaque structure, unless including imgui_internal.h)
 */
export type ImGuiContext = Deno.PointerValue;
/**
 * Main configuration and I/O between your application and ImGui
 */
export class ImGuiIO {
  #cPointer: Deno.PointerValue;

  constructor(imGuiIOPointer: Deno.PointerValue) {
    this.#cPointer = imGuiIOPointer;
  }

  get ConfigFlags(): number {
    return imgui.DImGuiIOGetConfigFlags(this.#cPointer);
  }
  set ConfigFlags(value: number) {
    imgui.DImGuiIOSetConfigFlags(this.#cPointer, value);
  }
}
/**
 * Shared state of InputText() when using
 * custom ImGuiInputTextCallback (rare/advanced use)
 */
export type ImGuiInputTextCallbackData = Deno.PointerValue;
/**
 * Storage for ImGuiIO and IsKeyDown(), IsKeyPressed() etc functions.
 */
export type ImGuiKeyData = Deno.PointerValue;
/**
 * Helper to manually clip large list of items
 */
export type ImGuiListClipper = Deno.PointerValue;
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
export type ImGuiStyle = Deno.PointerValue;
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
  static readonly size = 8;
  #data: ArrayBuffer;
  #view: DataView;

  get [BUFFER]() {
    return this.#data;
  }
  get [DATAVIEW]() {
    return this.#view;
  }

  constructor();
  constructor(x: number, y: number);
  constructor(v: ImVec2);
  constructor(data?: number | ImVec2, y?: number) {
    this.#data = new ArrayBuffer(ImVec2.size);
    this.#view = new DataView(this.#data);
    if (data instanceof ImVec2) {
      this.#data = data.#data.slice(0);
    } else if (typeof data == "number" && typeof y == "number") {
      this.x = data;
      this.y = y;
    }
  }

  get x() {
    return this.#view.getFloat32(0, LE);
  }
  set x(value: number) {
    this.#view.setFloat32(0, value, LE);
  }

  get y() {
    return this.#view.getFloat32(4, LE);
  }
  set y(value: number) {
    this.#view.setFloat32(4, value, LE);
  }
}

/**
 * ImVec4: 4D vector used to store clipping rectangles, colors etc.
 */
export class ImVec4 {
  static readonly size = 16;
  #data: ArrayBuffer;
  #view: DataView;

  get [BUFFER]() {
    return this.#data;
  }
  get [DATAVIEW]() {
    return this.#view;
  }

  constructor();
  constructor(r: number, g: number, b: number, a: number);
  constructor(v: ImVec4);
  constructor(r?: number | ImVec4, g?: number, b?: number, a?: number) {
    this.#data = new ArrayBuffer(ImVec4.size);
    this.#view = new DataView(this.#data);
    if (r instanceof ImVec4) {
      this.#data = r.#data.slice(0);
    } else if (
      typeof r == "number" && typeof g == "number" && typeof b == "number" &&
      typeof a == "number"
    ) {
      this.r = r;
      this.g = g;
      this.b = b;
      this.a = a;
    }
  }

  get r() {
    return this.#view.getFloat32(0, LE);
  }
  set r(value: number) {
    this.#view.setFloat32(0, value, LE);
  }
  get g() {
    return this.#view.getFloat32(4, LE);
  }
  set g(value: number) {
    this.#view.setFloat32(4, value, LE);
  }
  get b() {
    return this.#view.getFloat32(8, LE);
  }
  set b(value: number) {
    this.#view.setFloat32(8, value, LE);
  }
  get a() {
    return this.#view.getFloat32(12, LE);
  }
  set a(value: number) {
    this.#view.setFloat32(12, value, LE);
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

// // Callback and functions types
// typedef int     (*ImGuiInputTextCallback)(ImGuiInputTextCallbackData* data);    // Callback function for ImGui::InputText()
// typedef void    (*ImGuiSizeCallback)(ImGuiSizeCallbackData* data);              // Callback function for ImGui::SetNextWindowSizeConstraints()
// typedef void*   (*ImGuiMemAllocFunc)(size_t sz, void* user_data);               // Function signature for ImGui::SetAllocatorFunctions()
// typedef void    (*ImGuiMemFreeFunc)(void* ptr, void* user_data);                // Function signature for ImGui::SetAllocatorFunctions()

// Callback and functions types
/**
 * Callback function for ImGui::InputText()
 */
export type ImGuiInputTextCallback = Deno.UnsafeFnPointer<
  Deno.ForeignFunction<["buffer"], "i32">
>;
/**
 * Callback function for ImGui::SetNextWindowSizeConstraints()
 */
export type ImGuiSizeCallback = Deno.UnsafeFnPointer<
  Deno.ForeignFunction<["buffer"], "void">
>; //

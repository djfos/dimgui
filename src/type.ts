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

export type ImGuiContext = Deno.PointerValue;
export type ImGuiIO = Deno.PointerValue;
export type ImGuiStyle = Deno.PointerValue;
export type ImFontAtlas = Deno.PointerValue;
export type ImDrawData = Deno.PointerValue;
export type Bool = Deno.PointerValue;
export type ImGuiWindowFlags = number;
export type ImGuiButtonFlags = number;
// export type ImDrawData = Deno.PointerValue;
// export type ImDrawData = Deno.PointerValue;
// export type ImDrawData = Deno.PointerValue;

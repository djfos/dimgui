import { assert } from "https://deno.land/std@0.177.0/testing/asserts.ts";

const apiExport = "CIMGUI_API";
const C_TYPES = {
  "uint8_t": "number",
  "uint16_t": "number",
  "uint32_t": "number",
  "uint64_t": "Deno.PointerValue",
  "int8_t": "number",
  "int16_t": "number",
  "int32_t": "number",
  "int64_t": "Deno.PointerValue",
  "float": "number",
  "double": "number",
  "char": "number",
  "size_t": "Deno.PointerValue",
  "ssize_t": "Deno.PointerValue",
  "int": "number",
  "unsigned int": "number",
  "unsigned char": "number",

  "ImGuiCol": "number",
  "ImGuiCond": "number",
  "ImGuiDataType": "number",
  "ImGuiDir": "number",
  "ImGuiMouseButton": "number",
  "ImGuiMouseCursor": "number",
  "ImGuiSortDirection": "number",
  "ImGuiStyleVar": "number",
  "ImGuiTableBgTarget": "number",
  "ImTextureID": "Deno.PointerValue",
  "ImDrawIdx": "number",
  "ImGuiID": "number",
  "ImS8": "number",
  "ImU8": "number",
  "ImS16": "number",
  "ImU16": "number",
  "ImS32": "number",
  "ImU32": "number",
  "ImS64": "Deno.PointerValue",
  "ImU64": "Deno.PointerValue",
  "ImWchar16": "number",
  "ImWchar32": "number",
  "ImWchar": "number",
  "ImGuiKey": "number",
  "ImGuiKeyChord": "number",
  "ImVec2": "ImVec2",
  "ImVec4": "ImVec2",
  "ImRect": "ImRect",
  "ImGuiAxis": "ImGuiAxis",
  "ImGuiPlotType": "ImGuiPlotType",
};

const C_TYPES_FFI = {
  "uint8_t": "u8",
  "uint16_t": "u16",
  "uint32_t": "u32",
  "uint64_t": "u64",
  "int8_t": "i8",
  "int16_t": "i16",
  "int32_t": "i32",
  "int64_t": "i64",
  "float": "f32",
  "double": "f64",
  "char": "u8",
  "size_t": "usize",
  "ssize_t": "isize",
  "void": "void",
  "int": "i32",
  "unsigned int": "u32",
  "unsigned char": "u8",

  "ImGuiCol": "i32",
  "ImGuiCond": "i32",
  "ImGuiDataType": "i32",
  "ImGuiDir": "i32",
  "ImGuiMouseButton": "i32",
  "ImGuiMouseCursor": "i32",
  "ImGuiSortDirection": "i32",
  "ImGuiStyleVar": "i32",
  "ImGuiTableBgTarget": "i32",
  "ImTextureID": "pointer",
  "ImDrawIdx": "u16",
  "ImGuiID": "u32",
  "ImS8": "i8",
  "ImU8": "u8",
  "ImS16": "i16",
  "ImU16": "u16",
  "ImS32": "i32",
  "ImU32": "u32",
  "ImS64": "i64",
  "ImU64": "u64",
  "ImWchar16": "u16",
  "ImWchar32": "u32",
  "ImWchar": "u16",
  "ImGuiKey": "i32",
  "ImGuiKeyChord": "i32",
  "ImVec2": "buffer",
  "ImVec4": "buffer",
  "ImRect": "buffer",
  "ImGuiAxis": "i32",
  "ImGuiPlotType": "i32",
  // usize
};

export const tymap = {
  u8: "Uint8Array",
  i8: "Int8Array",
  u16: "Uint16Array",
  i16: "Int16Array",
  u32: "Uint32Array",
  i32: "Int32Array",
  u64: "BigUint64Array",
  i64: "BigInt64Array",
  f32: "Float32Array",
  f64: "Float64Array",
};

const igonreFunctions = [
  "igImQsort",
  "igCallContextHooks",
  "igLocalizeGetMsg",
  "igLogBegin",
  "igImQsort",
  "igFindBestWindowPosForPopupEx",
  "igSetNavID",
];

export function typeToJS(ty: string): string {
  if (ty in C_TYPES) {
    return Reflect.get(C_TYPES, ty) as string;
  }
  if (ty.includes("*")) {
    return "Deno.PointerValue";
  }

  if (ty.includes("Flags")) {
    return "number";
  }
  if (ty.includes("Callback")) {
    return "Deno.UnsafeCallback";
  }

  return ty;
}

export function typeToFFI(type: string, name = ""): string {
  if (type in C_TYPES_FFI) {
    return Reflect.get(C_TYPES_FFI, type) as string;
  }
  if (type.includes("*")) {
    return "pointer";
  }
  if (name.includes("[")) {
    return "buffer";
  }
  if (type.includes("Flags")) {
    return "i32";
  }
  if (type.includes("Callback")) {
    return "function";
  }
  return type;
}

const indent = " ".repeat(4);

// function unreachable(): never {
//   throw Error("unreachable!");
// }

function quote(str: string) {
  return `"${str}"`;
}

function shift(lines: string[]) {
  return lines.map((l) => indent + l);
}

function object(lines: string[], name: string) {
  return [
    `${name}:{`,
    ...shift(lines),
    "} as const satisfies Deno.ForeignFunction,",
  ];
}

function outSource(lines: string[]) {
  return [
    "const cimguiSymbols = {",
    ...shift(lines),
    // "} as const;",
    "} as const satisfies Deno.ForeignLibraryInterface;",
    "export default cimguiSymbols",
  ];
}

function isUsefulCall(call: string): boolean {
  if (call.startsWith(apiExport) && call.includes(" ig")) {
    if (call.includes("...") || call.includes("va_list")) {
      return false;
    }
    if (call.includes("File")) {
      return false;
    }
    if (call.includes("Allocator")) {
      return false;
    }
    for (const name of igonreFunctions) {
      if (call.includes(name)) {
        return false;
      }
    }
    return true;
  }
  return false;
}

function readHeaderFile(): string {
  const decoder = new TextDecoder("utf-8");
  const file = Deno.readFileSync("imgui/cimgui/cimgui.h");
  return decoder.decode(file);
}

function writeSymboleFile(lines: string[]) {
  const outFile = "symbol/cimgui.ts";
  const encoder = new TextEncoder();
  const outSource_ = outSource(lines).join("\n");
  Deno.writeFileSync(outFile, encoder.encode(outSource_));
}

function gen() {
  const source = readHeaderFile();
  const functions = source.split("\n").filter(isUsefulCall);
  const lines = functions.map((f_) => {
    const f = f_.replace(apiExport, "").replaceAll("const", "").trim();
    // return name(***);
    const l = f.indexOf(" ");
    const m = f.indexOf("(");
    const r = f.lastIndexOf(")");
    assert(
      l > -1 && m > -1 && r > -1,
      `${f} is not in form "return name(***)"`,
    );
    const resultType = f.substring(0, l).trim();
    const result = typeToFFI(resultType);
    const name = f.substring(l + 1, m).trim();
    const signature = f.substring(m + 1, r).trim();
    let params = signature.split(",").map((p) => {
      // sometype name
      const speaceIndex = p.lastIndexOf(" ");
      // assert(speaceIndex > -1, `not find space in ${p}`);
      if (speaceIndex > 1) {
        const type_ = p.substring(0, speaceIndex).trim();
        const name_ = p.substring(speaceIndex + 1).trim();
        return typeToFFI(type_, name_);
      } else {
        assert(p == "void", `${p} is not void`);
        return "void";
      }
    });

    if (params.length == 1 && params[0] == "void") {
      params = [];
    }

    return object([
      `name: ${quote(name)},`,
      `// resultType: ${quote(resultType)},`,
      `// signature: ${quote(signature)},`,
      `parameters: [${params.map(quote).join(",")}],`,
      `result: ${quote(result)},`,
    ], name);
  });

  writeSymboleFile(lines.flat());
}

gen();

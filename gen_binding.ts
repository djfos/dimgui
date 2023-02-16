import {
  assert,
  unreachable,
} from "https://deno.land/std@0.177.0/testing/asserts.ts";

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
  "bool": "boolean",

  "char*": "string",
  "void*": "ArrayBuffer",
  // "ImGuiCol": "number",
  // "ImGuiCond": "number",
  // "ImGuiDataType": "number",
  // "ImGuiDir": "number",
  // "ImGuiMouseButton": "number",
  // "ImGuiMouseCursor": "number",
  // "ImGuiSortDirection": "number",
  // "ImGuiStyleVar": "number",
  // "ImGuiTableBgTarget": "number",
  // "ImTextureID": "Deno.PointerValue",
  // "ImDrawIdx": "number",
  // "ImGuiID": "number",
  // "ImS8": "number",
  // "ImU8": "number",
  // "ImS16": "number",
  // "ImU16": "number",
  // "ImS32": "number",
  // "ImU32": "number",
  // "ImS64": "Deno.PointerValue",
  // "ImU64": "Deno.PointerValue",
  // "ImWchar16": "number",
  // "ImWchar32": "number",
  // "ImWchar": "number",
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

  "bool*": "buffer",
  "char*": "buffer",
  "float*": "buffer",
  "int*": "buffer",
  "void*": "buffer",
  "double*": "buffer",
  "ImVec2*": "buffer",

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
  // if (ty.includes("Callback")) {
  //   return "Deno.UnsafeCallback";
  // }
  if (ty.includes("*")) {
    const startCount = Array.from(ty).filter((c) => c == "*").length;
    if (startCount == 1) {
      return ty.replace("*", "").trim();
    } else {
      return "Deno.UnsafeCallback";
    }
  }
  // if (ty.includes("Flags")) {
  //   return "number";
  // }

  return ty;
}

export function typeToFFI(type: string): string {
  if (type in C_TYPES_FFI) {
    return Reflect.get(C_TYPES_FFI, type) as string;
  }
  if (type.includes("*")) {
    return "pointer";
  }
  if (type.includes("[")) {
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

// function object(lines: string[], name: string) {
//   return [
//     `${name}:{`,
//     ...shift(lines),
//     "} as const satisfies Deno.ForeignFunction,",
//   ];
// }

// function outSource(lines: string[]) {
//   return [
//     "const cimguiSymbols = {",
//     ...shift(lines),
//     // "} as const;",
//     "} as const satisfies Deno.ForeignLibraryInterface;",
//     "export default cimguiSymbols",
//   ];
// }

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
  const source = [
    "const cimguiSymbols = {",
    ...shift(lines),
    // "} as const;",
    "} as const satisfies Deno.ForeignLibraryInterface;",
    "export default cimguiSymbols",
  ].join("\n");
  Deno.writeFileSync(outFile, encoder.encode(source));
}

function writeDraftFile(lines: string[]) {
  const outFile = "symbol/call_draft.ts";
  const encoder = new TextEncoder();
  const source = lines.join("\n");
  Deno.writeFileSync(outFile, encoder.encode(source));
}

function lowerCaseFirstLetter(s: string): string {
  return s[0].toLocaleLowerCase() + s.substring(1);
}

function parseParamter(parameter: string) {
  const arrayPattern = /(?<type>([\w\*]+ +)+)(?<name>\w+)\[\d*\]/;
  const match = parameter.trim().match(arrayPattern);
  if (match) {
    return {
      name: match.groups!.name.trim(),
      type: match.groups!.type.trim() + "[]",
    };
  }
  // sometype name
  const speaceIndex = parameter.lastIndexOf(" ");
  // assert(speaceIndex > -1, `not find space in ${p}`);
  if (speaceIndex > 1) {
    const type = parameter.substring(0, speaceIndex).trim();
    const name = parameter.substring(speaceIndex + 1).trim();
    return { name, type };
  } else {
    assert(parameter == "void", `${parameter} is not void`);
    return undefined;
  }
}

function makeSymbol(
  functionName: string,
  resultType: string,
  parameters: string,
): string[] {
  const resultFFIType = typeToFFI(resultType);
  const paramterFFITypes: string[] = [];
  const parameters_ = parameters.split(",");
  for (const parameter of parameters_) {
    const parameterInfo = parseParamter(parameter);
    if (parameterInfo) {
      const type = typeToFFI(parameterInfo.type);
      paramterFFITypes.push(type);
    } else {
      // paramterFFITypes.push("void");
    }
  }

  const lines = [
    `// signature: ${quote(parameters)},`,
    `parameters: [${paramterFFITypes.map(quote).join(",")}],`,
    `// resultType: ${quote(resultType)},`,
    `result: ${quote(resultFFIType)},`,
  ];
  return [
    `${functionName}:{`,
    ...shift(lines),
    "} as const satisfies Deno.ForeignFunction,",
  ];
}

interface Paramter {
  name: string;
  type: string;
  asArgument?: string;
}

function transformParamter(type: string, name: string): Paramter {
  const cleanName = name.startsWith("p_") ? name.substring(2) : name;

  if (type.includes("Callback")) {
    return {
      name: cleanName,
      type: type,
      asArgument: `${cleanName}.pointer`,
    };
  }

  switch (type) {
    case "bool*": {
      return {
        name: cleanName,
        type: "CBool | null = null",
        asArgument: `${cleanName} ? ${cleanName}[BUFFER] : null`,
      };
    }
    case "char*": {
      return {
        name: cleanName,
        type: "string",
        asArgument: `cString(${cleanName})`,
      };
    }
    case "float*":
    case "float[]": {
      return {
        name: cleanName,
        type: "Float32Array",
      };
    }
    case "int*":
    case "int[]": {
      return {
        name: cleanName,
        type: "Int32Array",
      };
    }
    case "double*":
    case "double[]": {
      return {
        name: cleanName,
        type: "Float64Array",
      };
    }
    case "ImVec2":
    case "ImVec4": {
      return {
        name: cleanName,
        type: type,
        asArgument: `${cleanName}[BUFFER]`,
      };
    }
    default: {
      const jsType = typeToJS(type);
      return { name: cleanName, type: jsType };
    }
  }
}

function makeDraft(
  functionName: string,
  resultType: string,
  parameters: string,
): string[] {
  const resultJSType = typeToJS(resultType);

  const parameterInofs: Paramter[] = [];
  const parameters_ = parameters.split(",");
  for (const parameter of parameters_) {
    const parameterInfo = parseParamter(parameter);
    if (parameterInfo === undefined) {
      assert(parameters_.length == 1);
      break;
    }

    const { type, name } = parameterInfo;
    const tranformedParameter = transformParamter(type, name);
    parameterInofs.push(tranformedParameter);
  }

  const outerParamters = parameterInofs.map((info) =>
    `${info.name}: ${info.type}`
  ).join(", ");
  const innerArguments = parameterInofs.map((info) =>
    info.asArgument ?? info.name
  ).join(", ");
  const returnText = resultJSType == "void" ? "" : "return";
  const outerFunctionName = lowerCaseFirstLetter(
    functionName.replace("ig", ""),
  );
  return [
    `// export function ${outerFunctionName}(${outerParamters}): ${resultJSType} {`,
    `//   ${returnText} imgui.${functionName}(${innerArguments});`,
    `// }`,
  ];
}

function parseFunction(func: string) {
  const f = func.replace(apiExport, "").replaceAll("const", "").trim();
  // return name(***);
  const l = f.indexOf(" ");
  const m = f.indexOf("(");
  const r = f.lastIndexOf(")");
  assert(
    l > -1 && m > -1 && r > -1,
    `${f} is not in form "return name(***)"`,
  );
  const resultType = f.substring(0, l).trim();
  const functionName = f.substring(l + 1, m).trim();
  const paramters = f.substring(m + 1, r).trim();

  const symbol = makeSymbol(functionName, resultType, paramters);
  const draft = makeDraft(functionName, resultType, paramters);
  return { symbol, draft };
}

function gen() {
  const source = readHeaderFile();
  const functions = source.split("\n").filter(isUsefulCall);
  const draftLines: string[] = [];
  const symbolLines: string[] = [];
  for (const func of functions) {
    const { draft, symbol } = parseFunction(func);
    draftLines.push(...draft);
    symbolLines.push(...symbol);
  }

  writeDraftFile(draftLines);
  writeSymboleFile(symbolLines);
}

gen();

import { assert } from "https://deno.land/std@0.177.0/testing/asserts.ts";
import * as path from "https://deno.land/std@0.177.0/path/mod.ts";

const apiExport = "CIMGUI_API";
const C_TYPES = {
  "uint8_t": "number",
  "uint16_t": "number",
  "uint32_t": "number",
  "uint64_t": "number | bigint",
  "int8_t": "number",
  "int16_t": "number",
  "int32_t": "number",
  "int64_t": "number | bigint",
  "float": "number",
  "double": "number",
  "char": "number",
  "size_t": "number | bigint",
  "ssize_t": "number | bigint",
  "int": "number",
  "unsigned int": "number",
  "unsigned char": "number",
  "bool": "boolean",

  "char*": "string",
  "void*": "BufferSource",
  "ImWchar*": "StringSource",
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
  "bool": "bool",
  "short": "i16",

  "bool*": "buffer",
  "char*": "buffer",
  "float*": "buffer",
  "int*": "buffer",
  "void*": "buffer",
  "double*": "buffer",
  "ImVec2*": "buffer",
  "ImVec4*": "buffer",
  "ImRect*": "buffer",
  "ImWchar*": "buffer",
  "ImS64*": "buffer",
  "ImU64*": "buffer",

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
    return quote(Reflect.get(C_TYPES_FFI, type) as string);
  }
  if (type.includes("*")) {
    return quote("pointer");
  }
  if (type.includes("[")) {
    return quote("buffer");
  }
  if (type.includes("Flags")) {
    return quote("i32");
  }
  if (type.includes("Callback")) {
    return quote("function");
  }

  // pass struct by value
  // details reference to https://github.com/denoland/deno/pull/15060
  switch (type) {
    case "ImVec2":
      return "{struct:ImVec2}";
    case "ImVec4":
      return "{struct:ImVec4}";
    case "ImRect":
      return "{struct:ImRect}";
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
  if (call.startsWith(apiExport) /*  && call.includes(" ig") */) {
    // if (call.includes("...") || call.includes("va_list")) {
    //   return false;
    // }
    if (call.includes("File")) {
      return false;
    }
    if (call.includes("Allocator")) {
      return false;
    }
    // just put aside for now
    if (call.includes("ImGuiListClipperRange")) {
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
    "// deno-fmt-ignore-file",
    `const ImVec2 = ["f32","f32"] as const;`,
    `const ImVec4 = ["f32","f32","f32","f32"] as const;`,
    `const ImRect = ["f32","f32","f32","f32"] as const;`,
    "const cimguiSymbols = {",
    ...shift(lines),
    // "} as const;",
    "} as const satisfies Deno.ForeignLibraryInterface;",
    "export default cimguiSymbols",
  ].join("\n");
  Deno.writeFileSync(outFile, encoder.encode(source));
}

function writeDraftFile(lines: string[]) {
  const outFile = "draft/call_draft.txt";
  const encoder = new TextEncoder();
  const source = lines.join("\n");
  Deno.writeFileSync(outFile, encoder.encode(source));
}

function lowerCaseFirstLetter(s: string): string {
  return s[0].toLocaleLowerCase() + s.substring(1);
}

function parseParamter(parameter: string) {
  if (parameter.includes("...") || parameter.includes("va_list")) {
    return undefined;
  }

  // use to match array syntax ,lile "float v[2]"  "char* text[250]"
  const arrayPattern = /(?<type>([\w\*]+ +)+)(?<name>\w+)\[\d*\]/;
  const match = parameter.trim().match(arrayPattern);
  if (match) {
    return {
      name: match.groups!.name.trim(),
      type: match.groups!.type.trim() + "[]",
    };
  }

  // contains no "[]""
  // in the form "sometype name"
  const speaceIndex = parameter.lastIndexOf(" ");
  // assert(speaceIndex > -1, `not find space in ${p}`);
  if (speaceIndex > 1) {
    const type = parameter.substring(0, speaceIndex).trim();
    const name = parameter.substring(speaceIndex + 1).trim();

    // fix "ImColor *pOut", move "*" from name to type
    if (name.startsWith("*")) {
      return { name: name.substring(1), type: type + "*" };
    }
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
    const parameterInfo = parseParamter(parameter.trim());
    if (parameterInfo) {
      const type = typeToFFI(parameterInfo.type);
      paramterFFITypes.push(type);
    } else {
      // paramterFFITypes.push("void");
    }
  }

  const lines = [
    `// signature: ${quote(parameters)},`,
    `parameters: [${paramterFFITypes.join(",")}],`,
    `// resultType: ${quote(resultType)},`,
    `result: ${resultFFIType},`,
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
  optional?: boolean;
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
        type: "Uint8Array",
        optional: true,
        asArgument: `${cleanName} ?? null`,
      };
    }
    case "char*": {
      return {
        name: cleanName,
        type: "StringSource",
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
        asArgument: `${cleanName}.buffer`,
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
      continue;
    }

    const { type, name } = parameterInfo;
    const tranformedParameter = transformParamter(type, name);
    parameterInofs.push(tranformedParameter);
  }

  const outerParamters = parameterInofs.map((info) => `${info.name}${info.optional ? "?" : ""}: ${info.type}`).join(
    ", ",
  );
  const innerArguments = parameterInofs.map((info) => info.asArgument ?? info.name).join(", ");
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

function makeStructMembersDraft(filePath: string, structName: string) {
  const pathObject = path.parse(filePath);
  const outFilePath = path.format({
    dir: pathObject.dir,
    name: pathObject.name + "-draft",
    ext: pathObject.ext,
  });

  const file = Deno.readTextFileSync(filePath);
  const lines = file.split("\n").filter((line) => {
    const _line = line.trim();
    // remove comments
    if (_line.startsWith("//")) {
      return false;
    }
    // remove empty line
    if (line.match(/^\s*$/)) {
      return false;
    }
    return true;
  }).map((l) => l.replaceAll("const", "").trim());
  interface DeclareInfo {
    name: string;
    type: string;
    comment: string;
  }
  function parseLine(line: string) {
    const parts = line.split("//");
    const declare = parts[0];
    const comment = parts.slice(1).join("//");
    const match = declare.trim().match(/([\w*]+) +(\w+)/);
    assert(match && match.length > 2);
    const type = match[1];
    const name = match[2];
    return { name, type, comment };
  }

  function getterName(info: DeclareInfo) {
    return "D" + structName + "Get" + info.name;
  }
  function setterName(info: DeclareInfo) {
    return "D" + structName + "Set" + info.name;
  }
  function makeFunctions(info: DeclareInfo): string[] {
    const ffiType = typeToFFI(info.type);
    const lines = [
      `${getterName(info)}:{`,
      ...shift([
        `parameters: ["pointer"],`,
        `result: ${ffiType},`,
      ]),
      "} as const satisfies Deno.ForeignFunction,",
      `${setterName(info)}:{`,
      ...shift([
        `parameters: ["pointer",${ffiType}],`,
        `result: "void",`,
      ]),
      "} as const satisfies Deno.ForeignFunction,",
    ];
    return lines;
  }
  function makeCPPGetter(info: DeclareInfo): string {
    // deno-fmt-ignore
    return `DIMGUI_EXPORT ${info.type} ${ getterName(info) } (${structName}* s){ return s->${info.name};}`;
  }
  function makeCPPSetter(info: DeclareInfo): string {
    // deno-fmt-ignore
    return `DIMGUI_EXPORT void ${ setterName(info) } (${structName}* s, ${info.type} value){ s->${info.name}=value;}`;
  }

  function makeJsCall(info: DeclareInfo): string[] {
    const jsType = typeToJS(info.type);
    const lines_ = [] as string[];

    // comment
    lines_.push(
      `/*`,
      ` * ${info.comment}`,
      `*/`,
    );
    if (jsType == "ImVec2") {
      // getter
      lines_.push(
        `get ${info.name}(): ${jsType} {`,
        `  const data = imgui.${getterName(info)}(this.#self);`,
        `  return new ImVec2(data);`,
        `}`,
      );
      // setter
      lines_.push(
        `set ${info.name}(value: ${jsType}) {`,
        `  imgui.${setterName(info)}(this.#self, value.buffer);`,
        `}`,
      );
    } else if (jsType == "string") {
      // getter
      lines_.push(
        `get ${info.name}(): ${jsType} {`,
        `  return jsString(imgui.${getterName(info)}(this.#self));`,
        `}`,
      );
      // setter
      lines_.push(
        `set ${info.name}(value: ${jsType}) {`,
        `  imgui.${setterName(info)}(this.#self, cString(value));`,
        `}`,
      );
    } else {
      // getter
      lines_.push(
        `get ${info.name}(): ${jsType} {`,
        `  return imgui.${getterName(info)}(this.#self);`,
        `}`,
      );
      // setter
      lines_.push(
        `set ${info.name}(value: ${jsType}) {`,
        `  imgui.${setterName(info)}(this.#self, value);`,
        `}`,
      );
    }
    return lines_;
  }

  const declareInfos = lines.map(parseLine);

  const output = [] as string[];
  output.push("\n".repeat(3));
  for (const info of declareInfos) {
    output.push(makeCPPGetter(info));
  }
  output.push("\n".repeat(3));
  for (const info of declareInfos) {
    output.push(makeCPPSetter(info));
  }
  output.push("\n".repeat(3));
  for (const info of declareInfos) {
    output.push(...makeFunctions(info));
  }
  output.push("\n".repeat(3));
  for (const info of declareInfos) {
    output.push(...makeJsCall(info));
  }

  Deno.writeTextFileSync(outFilePath, output.join("\n"));
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

  makeStructMembersDraft("./draft/style.txt", "ImGuiStyle");
  makeStructMembersDraft(
    "./draft/input_text_callback_data.txt",
    "ImGuiInputTextCallbackData",
  );
  makeStructMembersDraft("./draft/io.txt", "ImGuiIO");
  makeStructMembersDraft("./draft/font_atlas.txt", "ImFontAtlas");
}

gen();

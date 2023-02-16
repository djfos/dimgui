import { cachedir } from "https://deno.land/x/cache@0.2.13/directories.ts";
import { join } from "https://deno.land/std@0.177.0/path/mod.ts";

import { getOutFileName } from "../script/convention.ts";
import cimguiSymbols from "../symbol/cimgui.ts";
import glfwSymbols from "../symbol/glfw.ts";
import imguiBackendSymbols from "../symbol/imgui_backend.ts";

export const DIMGUI_VERSION = "0.1.0";

const imguiCustomFunctions = {
  LogImDrawData: {
    parameters: ["pointer"],
    result: "void",
  },
  ImGuiIOGetConfigFlag: {
    parameters: ["pointer", "i32"],
    result: "bool",
  },
  ImGuiIOSetConfigFlag: {
    parameters: ["pointer", "i32", "bool"],
    result: "void",
  },
  dimguiSetErrorCallback: {
    parameters: ["function"],
    result: "void",
  },
} as const satisfies Deno.ForeignLibraryInterface;

async function prepareLibraryFile(): Promise<string> {
  const suffix = Deno.build.os === "windows"
    ? "dll"
    : Deno.build.os === "darwin"
    ? "dylib"
    : "so";
  const tmp = join(
    cachedir(),
    `imgui${DIMGUI_VERSION.replaceAll(".", "-")}.${suffix}`,
  );

  try {
    Deno.statSync(tmp);
  } catch (error) {
    if (!(error instanceof Deno.errors.NotFound)) throw error;
    const binPath = `../imgui/dist/${getOutFileName()}`;
    const { default: bin } = await import(binPath);
    Deno.writeFileSync(tmp, bin);
  }
  return tmp;
}

async function loadLibrary() {
  const libararyPath = await prepareLibraryFile();
  return Deno.dlopen(
    libararyPath,
    {
      ...cimguiSymbols,
      ...glfwSymbols,
      ...imguiBackendSymbols,
      ...imguiCustomFunctions,
    } as const,
  );
}

const library = await loadLibrary();
export const ffi = library.symbols;

export function cString(str: string) {
  return new TextEncoder().encode(str + "\0");
}

export function jsString(cstring: Deno.PointerValue): string {
  return new Deno.UnsafePointerView(cstring).getCString();
}

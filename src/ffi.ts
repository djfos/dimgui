import { getOutFileName, getTemptLibraryPath } from "../script/convention.ts";
import cimguiSymbols from "../symbol/cimgui.ts";
import glfwSymbols from "../symbol/glfw.ts";
import imguiBackendSymbols from "../symbol/imgui_backend.ts";
import { DIMGUI_VERSION } from "../script/version.ts";

const dImGuiCustomFunctions = {
  LogImDrawData: {
    parameters: ["pointer"],
    result: "void",
  },
  DImGuiIOGetConfigFlags: {
    parameters: ["pointer"],
    result: "i32",
  },
  DImGuiIOSetConfigFlags: {
    parameters: ["pointer", "i32"],
    result: "void",
  },
  dimguiSetErrorCallback: {
    parameters: ["function"],
    result: "void",
  },
  DImGuiPrintImVec2: {
    parameters: [{ struct: ["f32", "f32"] }],
    result: "void",
  },
} as const satisfies Deno.ForeignLibraryInterface;

async function prepareLibraryFile(): Promise<string> {
  const tmp = getTemptLibraryPath(DIMGUI_VERSION);
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
      ...dImGuiCustomFunctions,
    } as const,
  );
}

const library = await loadLibrary();
export const ffi = library.symbols;

export function cString(str: string) {
  if (str.length === 0) {
    return null;
  }
  return new TextEncoder().encode(str + "\0");
}

export function jsString(cstring: Deno.PointerValue): string {
  return new Deno.UnsafePointerView(cstring).getCString();
}

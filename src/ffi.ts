import cimguiSymbols from "../symbol/cimgui.ts";
import glfwSymbols from "../symbol/glfw.ts";
import imguiBackendSymbols from "../symbol/imgui_backend.ts";

const imguiCustomFunctions = {
  LogImDrawData: {
    name: "LogImDrawData",
    parameters: ["pointer"],
    result: "void",
  },
  ImGuiIOGetConfigFlag: {
    name: "ImGuiIOGetConfigFlag",
    parameters: ["pointer", "i32"],
    result: "bool",
  },
  ImGuiIOSetConfigFlag: {
    name: "ImGuiIOSetConfigFlag",
    parameters: ["pointer", "i32", "bool"],
    result: "void",
  },
} as const satisfies Deno.ForeignLibraryInterface;

const lib = Deno.dlopen(
  "D:/dev/deno-imgui/imgui/build/bin/imgui.dll",
  {
    ...cimguiSymbols,
    ...glfwSymbols,
    ...imguiBackendSymbols,
    ...imguiCustomFunctions,
  } as const,
);

export const ffi = lib.symbols;

export function cstr(str: string) {
  return new TextEncoder().encode(str + "\0");
}

export function getBinFileName(): string {
  switch(Deno.build.os) {
    case "windows": {
      return "imgui.dll";
    }
    case "linux": {
      return "imgui.so";
    }
    default:
      throw Error("need more work!");
  }
}
export function getOutFileName(): string {
  switch(Deno.build.os) {
    case "windows": {
      return "imgui_windows.js";
    }
    case "linux": {
      return "imgui_linux.js";
    }
    default:
      throw Error("need more work!");
  }
}

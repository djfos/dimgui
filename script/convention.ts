import { join } from "https://deno.land/std@0.177.0/path/mod.ts";
import { cachedir } from "https://deno.land/x/cache@0.2.13/directories.ts";

export function getBinFileName(): string {
  switch (Deno.build.os) {
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
  switch (Deno.build.os) {
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

export function getCacheDirectory() {
  return cachedir();
}

export function getTemptLibraryPath(version: string) {
  const suffix = Deno.build.os === "windows" ? "dll" : Deno.build.os === "darwin" ? "dylib" : "so";
  const tmp = join(
    getCacheDirectory(),
    `imgui${version.replaceAll(".", "-")}.${suffix}`,
  );
  return tmp;
}

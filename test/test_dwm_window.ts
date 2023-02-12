import {
  createWindow,
  getProcAddress,
} from "https://deno.land/x/dwm@0.3.0/mod.ts";
import { ffi as glfw } from "https://deno.land/x/dwm@0.3.0/src/platform/glfw/ffi.ts";
import * as gl from "https://deno.land/x/gluten@0.1.3/api/gles23.2.ts";
import { cstr, ffi as imgui } from "../src/ffi.ts";

function main() {
  const window = createWindow({
    title: "DenoGL",
    width: 800,
    height: 600,
    resizable: true,
    glVersion: "v3.2",
    gles: false,
  });

  // !!!!! glfw must be init
  const result = imgui.glfwInit();
  if (!result) {
    throw new Error("imgui glfw init faild");
  }

  imgui.glfwMakeContextCurrent(window.nativeHandle);
  imgui.glfwSwapInterval(1);
  gl.load(getProcAddress);

  const imguiContext = imgui.igCreateContext(null);
  imgui.igSetCurrentContext(imguiContext);
  imgui.igStyleColorsDark(null);
  imgui.ImGui_ImplGlfw_InitForOpenGL(window.nativeHandle, true);
  imgui.ImGui_ImplOpenGL3_Init(cstr("#version 130"));

  while (!window.shouldClose) {
    imgui.ImGui_ImplOpenGL3_NewFrame();
    imgui.ImGui_ImplGlfw_NewFrame();
    imgui.igNewFrame();
    imgui.igShowDemoWindow(null);
    imgui.igRender();

    const drawData = imgui.igGetDrawData();
    // imgui.LogImDrawData(drawData);

    imgui.glfwMakeContextCurrent(window.nativeHandle);
    gl.Clear(gl.COLOR_BUFFER_BIT);
    imgui.ImGui_ImplOpenGL3_RenderDrawData(drawData);

    window.swapBuffers();
    glfw.glfwPollEvents();
  }

  imgui.ImGui_ImplOpenGL3_Shutdown();
  imgui.ImGui_ImplGlfw_Shutdown();
  imgui.igDestroyContext(imguiContext);

  window.close();
}

main();

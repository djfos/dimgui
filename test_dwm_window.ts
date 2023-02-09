import {
  createWindow,
  getProcAddress,
} from "https://deno.land/x/dwm@0.3.0/mod.ts";
import { ffi as glfw } from "https://deno.land/x/dwm@0.3.0/src/platform/glfw/ffi.ts";
import * as gl from "https://deno.land/x/gluten@0.1.3/api/gles23.2.ts";
import { cstr, ffi as imgui } from "./ffi.ts";

// function getProcAddress(name: string) {
//   return imgui.glfwGetProcAddress(cstr(name));
// }

const I32_0 = new Int32Array(1);
const I32_1 = new Int32Array(1);

function main() {
  const window = createWindow({
    title: "DenoGL",
    width: 800,
    height: 600,
    resizable: true,
    glVersion: "v3.2",
    gles: false,
  });

  const result = imgui.glfwInit();
  if (!result) {
    throw new Error("imgui glfw init faild");
  }

  imgui.glfwMakeContextCurrent(window.nativeHandle);
  imgui.glfwSwapInterval(1);
  gl.load(getProcAddress);

  const imguiContext = imgui.createContext(null);
  imgui.SetCurrentContext(imguiContext);
  imgui.StyleColorsDark(null);
  imgui.ImplGlfw_InitForOpenGL(window.nativeHandle, true);
  imgui.ImplOpenGL3_Init(cstr("#version 130"));

  while (!window.shouldClose) {
    imgui.ImplOpenGL3_NewFrame();
    imgui.ImplGlfw_NewFrame();
    imgui.NewFrame();
    imgui.ShowDemoWindow(null);
    imgui.Render();

    const size_dwm = window.size;
    imgui.glfwGetWindowSize(window.nativeHandle, I32_0, I32_1);
    const size_self = { width: I32_0[0], height: I32_1[0] };

    const drawData = imgui.GetDrawData();
    imgui.LogImDrawData(drawData);

    imgui.glfwMakeContextCurrent(window.nativeHandle);
    gl.Clear(gl.COLOR_BUFFER_BIT);
    imgui.ImGui_ImplOpenGL3_RenderDrawData(drawData);

    window.swapBuffers();
    glfw.glfwPollEvents();
  }

  imgui.ImplOpenGL3_Shutdown();
  imgui.ImplGlfw_Shutdown();
  imgui.destroyContext(imguiContext);

  window.close();
}

main();

import * as gl from "https://deno.land/x/gluten@0.1.3/api/gles23.2.ts";
import { cstring, ffi as imgui } from "../src/ffi.ts";

{
  const result = imgui.glfwInit();
  if (!result) {
    throw new Error("Failed to initialize GLFW");
  }
}

function getProcAddress(name: string) {
  return imgui.glfwGetProcAddress(cstring(name));
}

function main() {
  const window = imgui.glfwCreateWindow(
    800,
    600,
    cstring("DwmWindow"),
    null,
    null,
  );
  if (!window) {
    throw new Error("Failed to create window");
  }

  imgui.glfwMakeContextCurrent(window);
  imgui.glfwSwapInterval(1);
  gl.load(getProcAddress);

  const imguiContext = imgui.igCreateContext(null);
  imgui.igSetCurrentContext(imguiContext);
  imgui.igStyleColorsDark(null);
  imgui.ImGui_ImplGlfw_InitForOpenGL(window, true);
  imgui.ImGui_ImplOpenGL3_Init(cstring("#version 130"));

  while (!imgui.glfwWindowShouldClose(window)) {
    imgui.ImGui_ImplOpenGL3_NewFrame();
    imgui.ImGui_ImplGlfw_NewFrame();
    imgui.igNewFrame();
    imgui.igShowDemoWindow(null);
    imgui.igRender();

    const drawData = imgui.igGetDrawData();

    gl.Clear(gl.COLOR_BUFFER_BIT);
    imgui.ImGui_ImplOpenGL3_RenderDrawData(drawData);
    imgui.glfwSwapBuffers(window);
    imgui.glfwPollEvents();
  }

  imgui.ImGui_ImplOpenGL3_Shutdown();
  imgui.ImGui_ImplGlfw_Shutdown();
  imgui.igDestroyContext(imguiContext);

  imgui.glfwDestroyWindow(window);
  imgui.glfwTerminate();
}

main();

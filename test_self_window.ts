import * as gl from "https://deno.land/x/gluten@0.1.3/api/gles23.2.ts";
import { cstr, ffi as imgui } from "./ffi.ts";

{
  const result = imgui.glfwInit();
  if (!result) {
    throw new Error("Failed to initialize GLFW");
  }
}

function getProcAddress(name: string) {
  return imgui.glfwGetProcAddress(cstr(name));
}

function main() {
  const window = imgui.glfwCreateWindow(
    800,
    600,
    cstr("DwmWindow"),
    null,
    null,
  );
  if (!window) {
    throw new Error("Failed to create window");
  }

  imgui.glfwMakeContextCurrent(window);
  imgui.glfwSwapInterval(1);
  gl.load(getProcAddress);

  const imguiContext = imgui.createContext(null);
  imgui.SetCurrentContext(imguiContext);
  imgui.StyleColorsDark(null);
  imgui.ImplGlfw_InitForOpenGL(window, true);
  imgui.ImplOpenGL3_Init(cstr("#version 130"));

  while (!imgui.glfwWindowShouldClose(window)) {
    imgui.ImplOpenGL3_NewFrame();
    imgui.ImplGlfw_NewFrame();
    imgui.NewFrame();
    imgui.ShowDemoWindow(null);
    imgui.Render();
    const drawData = imgui.GetDrawData();

    gl.Clear(gl.COLOR_BUFFER_BIT);
    imgui.ImGui_ImplOpenGL3_RenderDrawData(drawData);
    imgui.glfwSwapBuffers(window);
    imgui.glfwPollEvents();
  }

  imgui.ImplOpenGL3_Shutdown();
  imgui.ImplGlfw_Shutdown();
  imgui.destroyContext(imguiContext);

  imgui.glfwDestroyWindow(window);
  imgui.glfwTerminate();
}

main();

import {
  createWindow,
  getProcAddress,
  mainloop,
  pollEvents,
} from "https://deno.land/x/dwm@0.3.0/mod.ts";
import * as gl from "https://deno.land/x/gluten@0.1.3/api/gles23.2.ts";
import * as imgui from "../src/call.ts";
import { CBool } from "../src/type.ts";

const window = createWindow({
  title: "IMGUI DWM",
  width: 800,
  height: 600,
  resizable: true,
  glVersion: "v3.2",
  gles: false,
});

gl.load(getProcAddress);

const imguiContext = imgui.createContext();
imgui.implGlfwInitForOpenGL(window.nativeHandle);
imgui.implOpenGL3Init("#version 130");

const showDemo = new CBool(true);

await mainloop(() => {
  imgui.implOpenGL3NewFrame();
  imgui.implGlfwNewFrame();
  imgui.newFrame();

  imgui.begin("control");
  imgui.checkbox("show demo window", showDemo);
  imgui.end();

  if (showDemo.value) {
    imgui.showDemoWindow(showDemo);
  }

  imgui.render();
  const drawData = imgui.getDrawData();

  gl.Clear(gl.COLOR_BUFFER_BIT);
  imgui.implOpenGL3RenderDrawData(drawData);

  window.swapBuffers();
  pollEvents();
});

imgui.implOpenGL3Shutdown();
imgui.implGlfwShutdown();
imgui.destroyContext(imguiContext);

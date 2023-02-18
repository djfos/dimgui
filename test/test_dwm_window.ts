import {
  createWindow,
  getProcAddress,
  mainloop,
  pollEvents,
} from "https://deno.land/x/dwm@0.3.0/mod.ts";
import * as gl from "https://deno.land/x/gluten@0.1.3/api/gles23.2.ts";
import * as imgui from "../mod.ts";
import { CBool } from "../mod.ts";
import { testWidget } from "./test_widget.ts";

const window = createWindow({
  title: "IMGUI DWM",
  width: 1600,
  height: 1200,
  resizable: true,
  glVersion: "v3.2",
  gles: false,
});

gl.load(getProcAddress);

imgui.printImVec2(new imgui.ImVec2(10, 20));

const imguiContext = imgui.createContext();
imgui.implGlfwInitForOpenGL(window.nativeHandle);
imgui.implOpenGL3Init("#version 130");

const showDemoWindow = new CBool(true);
const showMetricsWindow = new CBool(false);
const showDebugLogWindow = new CBool(false);
const showStackToolWindow = new CBool(false);
const showAboutWindow = new CBool(false);

function testRender() {
  imgui.begin("deno, debug, info windows control");
  imgui.checkbox("demo", showDemoWindow);
  imgui.checkbox("metrics", showMetricsWindow);
  imgui.checkbox("debug info", showDebugLogWindow);
  imgui.checkbox("stack tool", showStackToolWindow);
  imgui.checkbox("about", showAboutWindow);
  imgui.showStyleSelector("style selector");
  imgui.showFontSelector("font selector");

  imgui.separator();

  imgui.text("The following is user guide!");
  imgui.showUserGuide();
  imgui.end();

  if (showDemoWindow.value) {
    imgui.showDemoWindow(showDemoWindow);
  }
  if (showDebugLogWindow.value) {
    imgui.showDebugLogWindow(showDebugLogWindow);
  }
  if (showMetricsWindow.value) {
    imgui.showMetricsWindow(showMetricsWindow);
  }
  if (showDebugLogWindow.value) {
    imgui.showDebugLogWindow(showDebugLogWindow);
  }
  if (showStackToolWindow.value) {
    imgui.showStackToolWindow(showStackToolWindow);
  }
  if (showAboutWindow.value) {
    imgui.showAboutWindow(showAboutWindow);
  }
}

await mainloop(() => {
  imgui.implOpenGL3NewFrame();
  imgui.implGlfwNewFrame();
  imgui.newFrame();
  testRender();
  testWidget();
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

import {
  createWindow,
  getPrimaryMonitor,
  getProcAddress,
  mainloop,
  pollEvents,
} from "https://deno.land/x/dwm@0.3.0/mod.ts";
import * as gl from "https://deno.land/x/gluten@0.1.3/api/gles23.2.ts";
import * as imgui from "../mod.ts";
import { Bool, ImGuiConfigFlagBits } from "../mod.ts";
import { showDemoWindowWidgets } from "./test_demo.ts";

function queryWindowSizeAndFontSize() {
  const aspectRatio = 16 / 9;
  const lines = 40;

  const monitor = getPrimaryMonitor();
  const height = Math.ceil(monitor.workArea.height * 0.7);
  const width = Math.ceil(height * aspectRatio);
  const fontSize = Math.min(32, Math.ceil(height / lines));

  return { width, height, fontSize };
}
const windowInfo = queryWindowSizeAndFontSize();
console.info(windowInfo);

const window = createWindow({
  title: "IMGUI DWM",
  width: windowInfo.width,
  height: windowInfo.height,

  resizable: true,
  glVersion: "v3.2",
  gles: false,
});

gl.load(getProcAddress);

const imguiContext = imgui.createContext();
imgui.implGlfwInitForOpenGL(window.nativeHandle);
imgui.implOpenGL3Init("#version 130");

// set io
const io = imgui.getIO();
io.ConfigFlags |= ImGuiConfigFlagBits.DockingEnable;

// set font
const fonts = io.Fonts;
if (Deno.build.os == "windows") {
  const fontFile = "C:/Windows/Fonts/consola.ttf";
  try {
    const fontData = Deno.readFileSync(fontFile);
    fonts.addFontFromMemoryTTF(fontData, windowInfo.fontSize);
  } catch (error) {
    console.error(error);
  }
}

const showDemoWindow = Bool.of(true);
const showMetricsWindow = Bool.of(false);
const showDebugLogWindow = Bool.of(false);
const showStackToolWindow = Bool.of(false);
const showAboutWindow = Bool.of(false);

function showControllWindow() {
  imgui.begin("deno, debug, info windows control");
  imgui.checkbox("demo", showDemoWindow.buffer);
  imgui.checkbox("metrics", showMetricsWindow.buffer);
  imgui.checkbox("debug info", showDebugLogWindow.buffer);
  imgui.checkbox("stack tool", showStackToolWindow.buffer);
  imgui.checkbox("about", showAboutWindow.buffer);
  imgui.showStyleSelector("style selector");
  imgui.showFontSelector("font selector");
  imgui.end();

  if (showDemoWindow.value) {
    imgui.showDemoWindow(showDemoWindow.buffer);
  }
  if (showDebugLogWindow.value) {
    imgui.showDebugLogWindow(showDebugLogWindow.buffer);
  }
  if (showMetricsWindow.value) {
    imgui.showMetricsWindow(showMetricsWindow.buffer);
  }
  if (showDebugLogWindow.value) {
    imgui.showDebugLogWindow(showDebugLogWindow.buffer);
  }
  if (showStackToolWindow.value) {
    imgui.showStackToolWindow(showStackToolWindow.buffer);
  }
  if (showAboutWindow.value) {
    imgui.showAboutWindow(showAboutWindow.buffer);
  }
}

await mainloop(() => {
  imgui.implOpenGL3NewFrame();
  imgui.implGlfwNewFrame();
  imgui.newFrame();
  showControllWindow();
  showDemoWindowWidgets();
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

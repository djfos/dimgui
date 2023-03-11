import {
  createWindow,
  getPrimaryMonitor,
  getProcAddress,
  mainloop,
  pollEvents,
} from "https://deno.land/x/dwm@0.3.2/mod.ts";
import * as gl from "https://deno.land/x/gluten@0.1.3/api/gles23.2.ts";
import * as imgui from "https://deno.land/x/dimgui@v0.2.0/mod.ts";
import { Bool, ImGuiConfigFlagBits, showWidgetDemoWindow } from "https://deno.land/x/dimgui@v0.2.0/mod.ts";

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

// load opengl functions
gl.load(getProcAddress);

// create imgui context and init imgui backends
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

// states, primitive wrappers
const showDImGuiDemoWindow = Bool.of(true);
const showCppDemoWindow = Bool.of(true);

await mainloop(() => {
  // new frame
  imgui.implOpenGL3NewFrame();
  imgui.implGlfwNewFrame();
  imgui.newFrame();

  // draw widgets
  imgui.begin("controls");
  imgui.checkbox("dimgui demo", showDImGuiDemoWindow.buffer);
  imgui.checkbox("c++ demo", showCppDemoWindow.buffer);
  imgui.showStyleSelector("style selector");
  imgui.showFontSelector("font selector");
  imgui.end();

  if (showDImGuiDemoWindow.value) {
    showWidgetDemoWindow();
  }
  if (showCppDemoWindow.value) {
    imgui.showDemoWindow(showCppDemoWindow.buffer);
  }
  // submit
  imgui.render();

  // clear screen with default color
  gl.Clear(gl.COLOR_BUFFER_BIT);
  // render by imgui backend
  const drawData = imgui.getDrawData();
  imgui.implOpenGL3RenderDrawData(drawData);

  // swap render buffer and handle window events
  window.swapBuffers();
  pollEvents();
});

// clean up
imgui.implOpenGL3Shutdown();
imgui.implGlfwShutdown();
imgui.destroyContext(imguiContext);

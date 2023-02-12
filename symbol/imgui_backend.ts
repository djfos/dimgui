const symbols = {
  // glfw
  ImGui_ImplGlfw_InitForOpenGL: {
    name: "ImGui_ImplGlfw_InitForOpenGL",
    parameters: ["pointer", "bool"],
    result: "bool",
  },
  ImGui_ImplGlfw_NewFrame: {
    name: "ImGui_ImplGlfw_NewFrame",
    parameters: [],
    result: "void",
  },
  ImGui_ImplGlfw_Shutdown: {
    name: "ImGui_ImplGlfw_Shutdown",
    parameters: [],
    result: "void",
  },
  // opengl
  ImGui_ImplOpenGL3_Init: {
    name: "ImGui_ImplOpenGL3_Init",
    parameters: ["buffer"],
    result: "bool",
  },
  ImGui_ImplOpenGL3_NewFrame: {
    name: "ImGui_ImplOpenGL3_NewFrame",
    parameters: [],
    result: "void",
  },
  ImGui_ImplOpenGL3_RenderDrawData: {
    name: "ImGui_ImplOpenGL3_RenderDrawData",
    parameters: ["pointer"],
    result: "void",
  },
  ImGui_ImplOpenGL3_Shutdown: {
    name: "ImGui_ImplOpenGL3_Shutdown",
    parameters: [],
    result: "void",
  },
} as const satisfies Deno.ForeignLibraryInterface;

export default symbols;

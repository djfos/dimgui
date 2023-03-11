import { ImGuiInputTextCallbackData } from "./imgui_input_text_callback_data.ts";

// // Callback and functions types
// typedef int     (*ImGuiInputTextCallback)(ImGuiInputTextCallbackData* data);    // Callback function for ImGui::InputText()
// typedef void    (*ImGuiSizeCallback)(ImGuiSizeCallbackData* data);              // Callback function for ImGui::SetNextWindowSizeConstraints()
// typedef void*   (*ImGuiMemAllocFunc)(size_t sz, void* user_data);               // Function signature for ImGui::SetAllocatorFunctions()
// typedef void    (*ImGuiMemFreeFunc)(void* ptr, void* user_data);                // Function signature for ImGui::SetAllocatorFunctions()

/**
 * Callback function for ImGui::InputText()
 * return false to discard char
 */
export type ImGuiInputTextCallback = (
  data: ImGuiInputTextCallbackData,
  buf: Uint8Array,
) => boolean;
/**
 * Callback function for ImGui::SetNextWindowSizeConstraints()
 */
export type ImGuiSizeCallback = Deno.UnsafeFnPointer<
  Deno.ForeignFunction<["buffer"], "void">
>;

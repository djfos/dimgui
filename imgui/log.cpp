#include "imgui.h"
#include "stdio.h"

#define LOG_EXPORT extern "C" __declspec(dllexport)

LOG_EXPORT void LogImDrawData(ImDrawData *drawData)
{
    if (drawData == nullptr)
    {
        printf_s("drawData is null");
    }
    printf_s("Valid: %s\n", drawData->Valid ? "true" : "false");
    printf_s("CmdListsCount: %d\n", drawData->CmdListsCount);
    printf_s("TotalIdxCount: %d\n", drawData->TotalIdxCount);
    printf_s("TotalVtxCount: %d\n", drawData->TotalVtxCount);
    printf_s("DisplaySize: [%f,%f]\n", drawData->DisplaySize.x, drawData->DisplaySize.y);
    printf_s("DisplayPos: [%f,%f]\n", drawData->DisplayPos.x, drawData->DisplayPos.y);
}

LOG_EXPORT bool ImGuiIOGetConfigFlag(ImGuiContext *context, int bitpos)
{
    if (bitpos < 0 || bitpos > 31)
        return false;
    ImGui::SetCurrentContext(context);
    auto io = ImGui::GetIO();
    return io.ConfigFlags & 1 << bitpos;
}

LOG_EXPORT void ImGuiIOSetConfigFlag(ImGuiContext *context, int bitpos, bool value)
{
    if (bitpos < 0 || bitpos > 31)
        return;
    ImGui::SetCurrentContext(context);
    auto io = ImGui::GetIO();
    auto mask = 1 << bitpos;
    if (value)
    {
        io.ConfigFlags |= mask;
    }
    else
    {
        io.ConfigFlags &= ~mask;
    }
}

#ifdef GLFW_DLL
#endif
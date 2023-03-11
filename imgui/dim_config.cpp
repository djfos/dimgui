#include "./dim_config.h"
#include "imgui.h"
#include "stdio.h"

static DImGuiReportUserErrorCallback errorCallback = nullptr;

void dimguiSetErrorCallback(DImGuiReportUserErrorCallback callback)
{
    errorCallback = callback;
}

void dimguiReportcUserError(const char *message)
{
    if (errorCallback != nullptr)
    {
        errorCallback(message);
    }
}

DIMGUI_EXPORT void LogImDrawData(ImDrawData *drawData)
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

DIMGUI_EXPORT void DImGuiPrintImVec2(const ImVec2 vec)
{
    printf_s("vec2 [%.3f ,%.3f]\n", vec.x, vec.y);
}

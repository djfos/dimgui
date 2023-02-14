#pragma once

#define DIMGUI_EXPORT extern "C" __declspec(dllexport)

// LOG_EXPORT void LogImDrawData(ImDrawData *drawData);
// LOG_EXPORT bool ImGuiIOGetConfigFlag(ImGuiContext *context, int bitpos);
// LOG_EXPORT void ImGuiIOSetConfigFlag(ImGuiContext *context, int bitpos, bool value);

#ifndef IM_ASSERT_USER_ERROR
#define IM_ASSERT_USER_ERROR(_EXP, _MSG) dimguiReportcUserError(_MSG) // Recoverable User Error
#endif

// error handling
typedef void (*DImGuiReportUserErrorCallback)(const char *);
DIMGUI_EXPORT void dimguiSetErrorCallback(DImGuiReportUserErrorCallback callback);
void dimguiReportcUserError(const char *message);

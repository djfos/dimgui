#include "../dim_config.h"

// use sturcts without constructors
#define CIMGUI_DEFINE_ENUMS_AND_STRUCTS
#include "cimgui/cimgui.h"

// clang-format off
DIMGUI_EXPORT ImGuiConfigFlags DImGuiIOGetConfigFlags (ImGuiIO* s){ return s->ConfigFlags;}
DIMGUI_EXPORT ImGuiBackendFlags DImGuiIOGetBackendFlags (ImGuiIO* s){ return s->BackendFlags;}
DIMGUI_EXPORT ImVec2 DImGuiIOGetDisplaySize (ImGuiIO* s){ return s->DisplaySize;}
DIMGUI_EXPORT float DImGuiIOGetDeltaTime (ImGuiIO* s){ return s->DeltaTime;}
DIMGUI_EXPORT float DImGuiIOGetIniSavingRate (ImGuiIO* s){ return s->IniSavingRate;}
DIMGUI_EXPORT const char* DImGuiIOGetIniFilename (ImGuiIO* s){ return s->IniFilename;}
DIMGUI_EXPORT const char* DImGuiIOGetLogFilename (ImGuiIO* s){ return s->LogFilename;}
DIMGUI_EXPORT float DImGuiIOGetMouseDoubleClickTime (ImGuiIO* s){ return s->MouseDoubleClickTime;}
DIMGUI_EXPORT float DImGuiIOGetMouseDoubleClickMaxDist (ImGuiIO* s){ return s->MouseDoubleClickMaxDist;}
DIMGUI_EXPORT float DImGuiIOGetMouseDragThreshold (ImGuiIO* s){ return s->MouseDragThreshold;}
DIMGUI_EXPORT float DImGuiIOGetKeyRepeatDelay (ImGuiIO* s){ return s->KeyRepeatDelay;}
DIMGUI_EXPORT float DImGuiIOGetKeyRepeatRate (ImGuiIO* s){ return s->KeyRepeatRate;}
DIMGUI_EXPORT float DImGuiIOGetHoverDelayNormal (ImGuiIO* s){ return s->HoverDelayNormal;}
DIMGUI_EXPORT float DImGuiIOGetHoverDelayShort (ImGuiIO* s){ return s->HoverDelayShort;}
DIMGUI_EXPORT void* DImGuiIOGetUserData (ImGuiIO* s){ return s->UserData;}
DIMGUI_EXPORT ImFontAtlas* DImGuiIOGetFonts (ImGuiIO* s){ return s->Fonts;}
DIMGUI_EXPORT float DImGuiIOGetFontGlobalScale (ImGuiIO* s){ return s->FontGlobalScale;}
DIMGUI_EXPORT bool DImGuiIOGetFontAllowUserScaling (ImGuiIO* s){ return s->FontAllowUserScaling;}
DIMGUI_EXPORT ImFont* DImGuiIOGetFontDefault (ImGuiIO* s){ return s->FontDefault;}
DIMGUI_EXPORT ImVec2 DImGuiIOGetDisplayFramebufferScale (ImGuiIO* s){ return s->DisplayFramebufferScale;}
DIMGUI_EXPORT bool DImGuiIOGetConfigDockingNoSplit (ImGuiIO* s){ return s->ConfigDockingNoSplit;}
DIMGUI_EXPORT bool DImGuiIOGetConfigDockingWithShift (ImGuiIO* s){ return s->ConfigDockingWithShift;}
DIMGUI_EXPORT bool DImGuiIOGetConfigDockingAlwaysTabBar (ImGuiIO* s){ return s->ConfigDockingAlwaysTabBar;}
DIMGUI_EXPORT bool DImGuiIOGetConfigDockingTransparentPayload (ImGuiIO* s){ return s->ConfigDockingTransparentPayload;}
DIMGUI_EXPORT bool DImGuiIOGetConfigViewportsNoAutoMerge (ImGuiIO* s){ return s->ConfigViewportsNoAutoMerge;}
DIMGUI_EXPORT bool DImGuiIOGetConfigViewportsNoTaskBarIcon (ImGuiIO* s){ return s->ConfigViewportsNoTaskBarIcon;}
DIMGUI_EXPORT bool DImGuiIOGetConfigViewportsNoDecoration (ImGuiIO* s){ return s->ConfigViewportsNoDecoration;}
DIMGUI_EXPORT bool DImGuiIOGetConfigViewportsNoDefaultParent (ImGuiIO* s){ return s->ConfigViewportsNoDefaultParent;}
DIMGUI_EXPORT bool DImGuiIOGetMouseDrawCursor (ImGuiIO* s){ return s->MouseDrawCursor;}
DIMGUI_EXPORT bool DImGuiIOGetConfigMacOSXBehaviors (ImGuiIO* s){ return s->ConfigMacOSXBehaviors;}
DIMGUI_EXPORT bool DImGuiIOGetConfigInputTrickleEventQueue (ImGuiIO* s){ return s->ConfigInputTrickleEventQueue;}
DIMGUI_EXPORT bool DImGuiIOGetConfigInputTextCursorBlink (ImGuiIO* s){ return s->ConfigInputTextCursorBlink;}
DIMGUI_EXPORT bool DImGuiIOGetConfigInputTextEnterKeepActive (ImGuiIO* s){ return s->ConfigInputTextEnterKeepActive;}
DIMGUI_EXPORT bool DImGuiIOGetConfigDragClickToInputText (ImGuiIO* s){ return s->ConfigDragClickToInputText;}
DIMGUI_EXPORT bool DImGuiIOGetConfigWindowsResizeFromEdges (ImGuiIO* s){ return s->ConfigWindowsResizeFromEdges;}
DIMGUI_EXPORT bool DImGuiIOGetConfigWindowsMoveFromTitleBarOnly (ImGuiIO* s){ return s->ConfigWindowsMoveFromTitleBarOnly;}
DIMGUI_EXPORT float DImGuiIOGetConfigMemoryCompactTimer (ImGuiIO* s){ return s->ConfigMemoryCompactTimer;}
DIMGUI_EXPORT bool DImGuiIOGetWantCaptureMouse (ImGuiIO* s){ return s->WantCaptureMouse;}
DIMGUI_EXPORT bool DImGuiIOGetWantCaptureKeyboard (ImGuiIO* s){ return s->WantCaptureKeyboard;}
DIMGUI_EXPORT bool DImGuiIOGetWantTextInput (ImGuiIO* s){ return s->WantTextInput;}
DIMGUI_EXPORT bool DImGuiIOGetWantSetMousePos (ImGuiIO* s){ return s->WantSetMousePos;}
DIMGUI_EXPORT bool DImGuiIOGetWantSaveIniSettings (ImGuiIO* s){ return s->WantSaveIniSettings;}
DIMGUI_EXPORT bool DImGuiIOGetNavActive (ImGuiIO* s){ return s->NavActive;}
DIMGUI_EXPORT bool DImGuiIOGetNavVisible (ImGuiIO* s){ return s->NavVisible;}
DIMGUI_EXPORT float DImGuiIOGetFramerate (ImGuiIO* s){ return s->Framerate;}
DIMGUI_EXPORT int DImGuiIOGetMetricsRenderVertices (ImGuiIO* s){ return s->MetricsRenderVertices;}
DIMGUI_EXPORT int DImGuiIOGetMetricsRenderIndices (ImGuiIO* s){ return s->MetricsRenderIndices;}
DIMGUI_EXPORT int DImGuiIOGetMetricsRenderWindows (ImGuiIO* s){ return s->MetricsRenderWindows;}
DIMGUI_EXPORT int DImGuiIOGetMetricsActiveWindows (ImGuiIO* s){ return s->MetricsActiveWindows;}
DIMGUI_EXPORT int DImGuiIOGetMetricsActiveAllocations (ImGuiIO* s){ return s->MetricsActiveAllocations;}
DIMGUI_EXPORT ImVec2 DImGuiIOGetMouseDelta (ImGuiIO* s){ return s->MouseDelta;}




DIMGUI_EXPORT void DImGuiIOSetConfigFlags (ImGuiIO* s, ImGuiConfigFlags value){ s->ConfigFlags=value;}
DIMGUI_EXPORT void DImGuiIOSetBackendFlags (ImGuiIO* s, ImGuiBackendFlags value){ s->BackendFlags=value;}
DIMGUI_EXPORT void DImGuiIOSetDisplaySize (ImGuiIO* s, ImVec2 value){ s->DisplaySize=value;}
DIMGUI_EXPORT void DImGuiIOSetDeltaTime (ImGuiIO* s, float value){ s->DeltaTime=value;}
DIMGUI_EXPORT void DImGuiIOSetIniSavingRate (ImGuiIO* s, float value){ s->IniSavingRate=value;}
DIMGUI_EXPORT void DImGuiIOSetIniFilename (ImGuiIO* s, char* value){ s->IniFilename=value;}
DIMGUI_EXPORT void DImGuiIOSetLogFilename (ImGuiIO* s, char* value){ s->LogFilename=value;}
DIMGUI_EXPORT void DImGuiIOSetMouseDoubleClickTime (ImGuiIO* s, float value){ s->MouseDoubleClickTime=value;}
DIMGUI_EXPORT void DImGuiIOSetMouseDoubleClickMaxDist (ImGuiIO* s, float value){ s->MouseDoubleClickMaxDist=value;}
DIMGUI_EXPORT void DImGuiIOSetMouseDragThreshold (ImGuiIO* s, float value){ s->MouseDragThreshold=value;}
DIMGUI_EXPORT void DImGuiIOSetKeyRepeatDelay (ImGuiIO* s, float value){ s->KeyRepeatDelay=value;}
DIMGUI_EXPORT void DImGuiIOSetKeyRepeatRate (ImGuiIO* s, float value){ s->KeyRepeatRate=value;}
DIMGUI_EXPORT void DImGuiIOSetHoverDelayNormal (ImGuiIO* s, float value){ s->HoverDelayNormal=value;}
DIMGUI_EXPORT void DImGuiIOSetHoverDelayShort (ImGuiIO* s, float value){ s->HoverDelayShort=value;}
DIMGUI_EXPORT void DImGuiIOSetUserData (ImGuiIO* s, void* value){ s->UserData=value;}
DIMGUI_EXPORT void DImGuiIOSetFonts (ImGuiIO* s, ImFontAtlas* value){ s->Fonts=value;}
DIMGUI_EXPORT void DImGuiIOSetFontGlobalScale (ImGuiIO* s, float value){ s->FontGlobalScale=value;}
DIMGUI_EXPORT void DImGuiIOSetFontAllowUserScaling (ImGuiIO* s, bool value){ s->FontAllowUserScaling=value;}
DIMGUI_EXPORT void DImGuiIOSetFontDefault (ImGuiIO* s, ImFont* value){ s->FontDefault=value;}
DIMGUI_EXPORT void DImGuiIOSetDisplayFramebufferScale (ImGuiIO* s, ImVec2 value){ s->DisplayFramebufferScale=value;}
DIMGUI_EXPORT void DImGuiIOSetConfigDockingNoSplit (ImGuiIO* s, bool value){ s->ConfigDockingNoSplit=value;}
DIMGUI_EXPORT void DImGuiIOSetConfigDockingWithShift (ImGuiIO* s, bool value){ s->ConfigDockingWithShift=value;}
DIMGUI_EXPORT void DImGuiIOSetConfigDockingAlwaysTabBar (ImGuiIO* s, bool value){ s->ConfigDockingAlwaysTabBar=value;}
DIMGUI_EXPORT void DImGuiIOSetConfigDockingTransparentPayload (ImGuiIO* s, bool value){ s->ConfigDockingTransparentPayload=value;}
DIMGUI_EXPORT void DImGuiIOSetConfigViewportsNoAutoMerge (ImGuiIO* s, bool value){ s->ConfigViewportsNoAutoMerge=value;}
DIMGUI_EXPORT void DImGuiIOSetConfigViewportsNoTaskBarIcon (ImGuiIO* s, bool value){ s->ConfigViewportsNoTaskBarIcon=value;}
DIMGUI_EXPORT void DImGuiIOSetConfigViewportsNoDecoration (ImGuiIO* s, bool value){ s->ConfigViewportsNoDecoration=value;}
DIMGUI_EXPORT void DImGuiIOSetConfigViewportsNoDefaultParent (ImGuiIO* s, bool value){ s->ConfigViewportsNoDefaultParent=value;}
DIMGUI_EXPORT void DImGuiIOSetMouseDrawCursor (ImGuiIO* s, bool value){ s->MouseDrawCursor=value;}
DIMGUI_EXPORT void DImGuiIOSetConfigMacOSXBehaviors (ImGuiIO* s, bool value){ s->ConfigMacOSXBehaviors=value;}
DIMGUI_EXPORT void DImGuiIOSetConfigInputTrickleEventQueue (ImGuiIO* s, bool value){ s->ConfigInputTrickleEventQueue=value;}
DIMGUI_EXPORT void DImGuiIOSetConfigInputTextCursorBlink (ImGuiIO* s, bool value){ s->ConfigInputTextCursorBlink=value;}
DIMGUI_EXPORT void DImGuiIOSetConfigInputTextEnterKeepActive (ImGuiIO* s, bool value){ s->ConfigInputTextEnterKeepActive=value;}
DIMGUI_EXPORT void DImGuiIOSetConfigDragClickToInputText (ImGuiIO* s, bool value){ s->ConfigDragClickToInputText=value;}
DIMGUI_EXPORT void DImGuiIOSetConfigWindowsResizeFromEdges (ImGuiIO* s, bool value){ s->ConfigWindowsResizeFromEdges=value;}
DIMGUI_EXPORT void DImGuiIOSetConfigWindowsMoveFromTitleBarOnly (ImGuiIO* s, bool value){ s->ConfigWindowsMoveFromTitleBarOnly=value;}
DIMGUI_EXPORT void DImGuiIOSetConfigMemoryCompactTimer (ImGuiIO* s, float value){ s->ConfigMemoryCompactTimer=value;}
DIMGUI_EXPORT void DImGuiIOSetWantCaptureMouse (ImGuiIO* s, bool value){ s->WantCaptureMouse=value;}
DIMGUI_EXPORT void DImGuiIOSetWantCaptureKeyboard (ImGuiIO* s, bool value){ s->WantCaptureKeyboard=value;}
DIMGUI_EXPORT void DImGuiIOSetWantTextInput (ImGuiIO* s, bool value){ s->WantTextInput=value;}
DIMGUI_EXPORT void DImGuiIOSetWantSetMousePos (ImGuiIO* s, bool value){ s->WantSetMousePos=value;}
DIMGUI_EXPORT void DImGuiIOSetWantSaveIniSettings (ImGuiIO* s, bool value){ s->WantSaveIniSettings=value;}
DIMGUI_EXPORT void DImGuiIOSetNavActive (ImGuiIO* s, bool value){ s->NavActive=value;}
DIMGUI_EXPORT void DImGuiIOSetNavVisible (ImGuiIO* s, bool value){ s->NavVisible=value;}
DIMGUI_EXPORT void DImGuiIOSetFramerate (ImGuiIO* s, float value){ s->Framerate=value;}
DIMGUI_EXPORT void DImGuiIOSetMetricsRenderVertices (ImGuiIO* s, int value){ s->MetricsRenderVertices=value;}
DIMGUI_EXPORT void DImGuiIOSetMetricsRenderIndices (ImGuiIO* s, int value){ s->MetricsRenderIndices=value;}
DIMGUI_EXPORT void DImGuiIOSetMetricsRenderWindows (ImGuiIO* s, int value){ s->MetricsRenderWindows=value;}
DIMGUI_EXPORT void DImGuiIOSetMetricsActiveWindows (ImGuiIO* s, int value){ s->MetricsActiveWindows=value;}
DIMGUI_EXPORT void DImGuiIOSetMetricsActiveAllocations (ImGuiIO* s, int value){ s->MetricsActiveAllocations=value;}
DIMGUI_EXPORT void DImGuiIOSetMouseDelta (ImGuiIO* s, ImVec2 value){ s->MouseDelta=value;}

// clang-format on
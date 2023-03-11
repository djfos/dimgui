#include "../dim_config.h"

// use sturcts without constructors
#define CIMGUI_DEFINE_ENUMS_AND_STRUCTS
#include "cimgui/cimgui.h"

// clang-format off
DIMGUI_EXPORT float DImGuiStyleGetAlpha (ImGuiStyle* s){ return s->Alpha;}
DIMGUI_EXPORT float DImGuiStyleGetDisabledAlpha (ImGuiStyle* s){ return s->DisabledAlpha;}
DIMGUI_EXPORT ImVec2 DImGuiStyleGetWindowPadding (ImGuiStyle* s){ return s->WindowPadding;}
DIMGUI_EXPORT float DImGuiStyleGetWindowRounding (ImGuiStyle* s){ return s->WindowRounding;}
DIMGUI_EXPORT float DImGuiStyleGetWindowBorderSize (ImGuiStyle* s){ return s->WindowBorderSize;}
DIMGUI_EXPORT ImVec2 DImGuiStyleGetWindowMinSize (ImGuiStyle* s){ return s->WindowMinSize;}
DIMGUI_EXPORT ImVec2 DImGuiStyleGetWindowTitleAlign (ImGuiStyle* s){ return s->WindowTitleAlign;}
DIMGUI_EXPORT ImGuiDir DImGuiStyleGetWindowMenuButtonPosition (ImGuiStyle* s){ return s->WindowMenuButtonPosition;}
DIMGUI_EXPORT float DImGuiStyleGetChildRounding (ImGuiStyle* s){ return s->ChildRounding;}
DIMGUI_EXPORT float DImGuiStyleGetChildBorderSize (ImGuiStyle* s){ return s->ChildBorderSize;}
DIMGUI_EXPORT float DImGuiStyleGetPopupRounding (ImGuiStyle* s){ return s->PopupRounding;}
DIMGUI_EXPORT float DImGuiStyleGetPopupBorderSize (ImGuiStyle* s){ return s->PopupBorderSize;}
DIMGUI_EXPORT ImVec2 DImGuiStyleGetFramePadding (ImGuiStyle* s){ return s->FramePadding;}
DIMGUI_EXPORT float DImGuiStyleGetFrameRounding (ImGuiStyle* s){ return s->FrameRounding;}
DIMGUI_EXPORT float DImGuiStyleGetFrameBorderSize (ImGuiStyle* s){ return s->FrameBorderSize;}
DIMGUI_EXPORT ImVec2 DImGuiStyleGetItemSpacing (ImGuiStyle* s){ return s->ItemSpacing;}
DIMGUI_EXPORT ImVec2 DImGuiStyleGetItemInnerSpacing (ImGuiStyle* s){ return s->ItemInnerSpacing;}
DIMGUI_EXPORT ImVec2 DImGuiStyleGetCellPadding (ImGuiStyle* s){ return s->CellPadding;}
DIMGUI_EXPORT ImVec2 DImGuiStyleGetTouchExtraPadding (ImGuiStyle* s){ return s->TouchExtraPadding;}
DIMGUI_EXPORT float DImGuiStyleGetIndentSpacing (ImGuiStyle* s){ return s->IndentSpacing;}
DIMGUI_EXPORT float DImGuiStyleGetColumnsMinSpacing (ImGuiStyle* s){ return s->ColumnsMinSpacing;}
DIMGUI_EXPORT float DImGuiStyleGetScrollbarSize (ImGuiStyle* s){ return s->ScrollbarSize;}
DIMGUI_EXPORT float DImGuiStyleGetScrollbarRounding (ImGuiStyle* s){ return s->ScrollbarRounding;}
DIMGUI_EXPORT float DImGuiStyleGetGrabMinSize (ImGuiStyle* s){ return s->GrabMinSize;}
DIMGUI_EXPORT float DImGuiStyleGetGrabRounding (ImGuiStyle* s){ return s->GrabRounding;}
DIMGUI_EXPORT float DImGuiStyleGetLogSliderDeadzone (ImGuiStyle* s){ return s->LogSliderDeadzone;}
DIMGUI_EXPORT float DImGuiStyleGetTabRounding (ImGuiStyle* s){ return s->TabRounding;}
DIMGUI_EXPORT float DImGuiStyleGetTabBorderSize (ImGuiStyle* s){ return s->TabBorderSize;}
DIMGUI_EXPORT float DImGuiStyleGetTabMinWidthForCloseButton (ImGuiStyle* s){ return s->TabMinWidthForCloseButton;}
DIMGUI_EXPORT ImGuiDir DImGuiStyleGetColorButtonPosition (ImGuiStyle* s){ return s->ColorButtonPosition;}
DIMGUI_EXPORT ImVec2 DImGuiStyleGetButtonTextAlign (ImGuiStyle* s){ return s->ButtonTextAlign;}
DIMGUI_EXPORT ImVec2 DImGuiStyleGetSelectableTextAlign (ImGuiStyle* s){ return s->SelectableTextAlign;}
DIMGUI_EXPORT ImVec2 DImGuiStyleGetDisplayWindowPadding (ImGuiStyle* s){ return s->DisplayWindowPadding;}
DIMGUI_EXPORT ImVec2 DImGuiStyleGetDisplaySafeAreaPadding (ImGuiStyle* s){ return s->DisplaySafeAreaPadding;}
DIMGUI_EXPORT float DImGuiStyleGetMouseCursorScale (ImGuiStyle* s){ return s->MouseCursorScale;}
DIMGUI_EXPORT bool DImGuiStyleGetAntiAliasedLines (ImGuiStyle* s){ return s->AntiAliasedLines;}
DIMGUI_EXPORT bool DImGuiStyleGetAntiAliasedLinesUseTex (ImGuiStyle* s){ return s->AntiAliasedLinesUseTex;}
DIMGUI_EXPORT bool DImGuiStyleGetAntiAliasedFill (ImGuiStyle* s){ return s->AntiAliasedFill;}
DIMGUI_EXPORT float DImGuiStyleGetCurveTessellationTol (ImGuiStyle* s){ return s->CurveTessellationTol;}
DIMGUI_EXPORT float DImGuiStyleGetCircleTessellationMaxError (ImGuiStyle* s){ return s->CircleTessellationMaxError;}




DIMGUI_EXPORT void DImGuiStyleSetAlpha (ImGuiStyle* s, float value){ s->Alpha=value;}
DIMGUI_EXPORT void DImGuiStyleSetDisabledAlpha (ImGuiStyle* s, float value){ s->DisabledAlpha=value;}
DIMGUI_EXPORT void DImGuiStyleSetWindowPadding (ImGuiStyle* s, ImVec2 value){ s->WindowPadding=value;}
DIMGUI_EXPORT void DImGuiStyleSetWindowRounding (ImGuiStyle* s, float value){ s->WindowRounding=value;}
DIMGUI_EXPORT void DImGuiStyleSetWindowBorderSize (ImGuiStyle* s, float value){ s->WindowBorderSize=value;}
DIMGUI_EXPORT void DImGuiStyleSetWindowMinSize (ImGuiStyle* s, ImVec2 value){ s->WindowMinSize=value;}
DIMGUI_EXPORT void DImGuiStyleSetWindowTitleAlign (ImGuiStyle* s, ImVec2 value){ s->WindowTitleAlign=value;}
DIMGUI_EXPORT void DImGuiStyleSetWindowMenuButtonPosition (ImGuiStyle* s, ImGuiDir value){ s->WindowMenuButtonPosition=value;}
DIMGUI_EXPORT void DImGuiStyleSetChildRounding (ImGuiStyle* s, float value){ s->ChildRounding=value;}
DIMGUI_EXPORT void DImGuiStyleSetChildBorderSize (ImGuiStyle* s, float value){ s->ChildBorderSize=value;}
DIMGUI_EXPORT void DImGuiStyleSetPopupRounding (ImGuiStyle* s, float value){ s->PopupRounding=value;}
DIMGUI_EXPORT void DImGuiStyleSetPopupBorderSize (ImGuiStyle* s, float value){ s->PopupBorderSize=value;}
DIMGUI_EXPORT void DImGuiStyleSetFramePadding (ImGuiStyle* s, ImVec2 value){ s->FramePadding=value;}
DIMGUI_EXPORT void DImGuiStyleSetFrameRounding (ImGuiStyle* s, float value){ s->FrameRounding=value;}
DIMGUI_EXPORT void DImGuiStyleSetFrameBorderSize (ImGuiStyle* s, float value){ s->FrameBorderSize=value;}
DIMGUI_EXPORT void DImGuiStyleSetItemSpacing (ImGuiStyle* s, ImVec2 value){ s->ItemSpacing=value;}
DIMGUI_EXPORT void DImGuiStyleSetItemInnerSpacing (ImGuiStyle* s, ImVec2 value){ s->ItemInnerSpacing=value;}
DIMGUI_EXPORT void DImGuiStyleSetCellPadding (ImGuiStyle* s, ImVec2 value){ s->CellPadding=value;}
DIMGUI_EXPORT void DImGuiStyleSetTouchExtraPadding (ImGuiStyle* s, ImVec2 value){ s->TouchExtraPadding=value;}
DIMGUI_EXPORT void DImGuiStyleSetIndentSpacing (ImGuiStyle* s, float value){ s->IndentSpacing=value;}
DIMGUI_EXPORT void DImGuiStyleSetColumnsMinSpacing (ImGuiStyle* s, float value){ s->ColumnsMinSpacing=value;}
DIMGUI_EXPORT void DImGuiStyleSetScrollbarSize (ImGuiStyle* s, float value){ s->ScrollbarSize=value;}
DIMGUI_EXPORT void DImGuiStyleSetScrollbarRounding (ImGuiStyle* s, float value){ s->ScrollbarRounding=value;}
DIMGUI_EXPORT void DImGuiStyleSetGrabMinSize (ImGuiStyle* s, float value){ s->GrabMinSize=value;}
DIMGUI_EXPORT void DImGuiStyleSetGrabRounding (ImGuiStyle* s, float value){ s->GrabRounding=value;}
DIMGUI_EXPORT void DImGuiStyleSetLogSliderDeadzone (ImGuiStyle* s, float value){ s->LogSliderDeadzone=value;}
DIMGUI_EXPORT void DImGuiStyleSetTabRounding (ImGuiStyle* s, float value){ s->TabRounding=value;}
DIMGUI_EXPORT void DImGuiStyleSetTabBorderSize (ImGuiStyle* s, float value){ s->TabBorderSize=value;}
DIMGUI_EXPORT void DImGuiStyleSetTabMinWidthForCloseButton (ImGuiStyle* s, float value){ s->TabMinWidthForCloseButton=value;}
DIMGUI_EXPORT void DImGuiStyleSetColorButtonPosition (ImGuiStyle* s, ImGuiDir value){ s->ColorButtonPosition=value;}
DIMGUI_EXPORT void DImGuiStyleSetButtonTextAlign (ImGuiStyle* s, ImVec2 value){ s->ButtonTextAlign=value;}
DIMGUI_EXPORT void DImGuiStyleSetSelectableTextAlign (ImGuiStyle* s, ImVec2 value){ s->SelectableTextAlign=value;}
DIMGUI_EXPORT void DImGuiStyleSetDisplayWindowPadding (ImGuiStyle* s, ImVec2 value){ s->DisplayWindowPadding=value;}
DIMGUI_EXPORT void DImGuiStyleSetDisplaySafeAreaPadding (ImGuiStyle* s, ImVec2 value){ s->DisplaySafeAreaPadding=value;}
DIMGUI_EXPORT void DImGuiStyleSetMouseCursorScale (ImGuiStyle* s, float value){ s->MouseCursorScale=value;}
DIMGUI_EXPORT void DImGuiStyleSetAntiAliasedLines (ImGuiStyle* s, bool value){ s->AntiAliasedLines=value;}
DIMGUI_EXPORT void DImGuiStyleSetAntiAliasedLinesUseTex (ImGuiStyle* s, bool value){ s->AntiAliasedLinesUseTex=value;}
DIMGUI_EXPORT void DImGuiStyleSetAntiAliasedFill (ImGuiStyle* s, bool value){ s->AntiAliasedFill=value;}
DIMGUI_EXPORT void DImGuiStyleSetCurveTessellationTol (ImGuiStyle* s, float value){ s->CurveTessellationTol=value;}
DIMGUI_EXPORT void DImGuiStyleSetCircleTessellationMaxError (ImGuiStyle* s, float value){ s->CircleTessellationMaxError=value;}

// clang-format on
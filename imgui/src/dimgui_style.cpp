#include "../dim_config.h"

// use sturcts without constructors
#define CIMGUI_DEFINE_ENUMS_AND_STRUCTS
#include "cimgui/cimgui.h"

// clang-format off
DIMGUI_EXPORT float DImGuiGetAlpha (ImGuiStyle* style){ return style->Alpha;}
DIMGUI_EXPORT float DImGuiGetDisabledAlpha (ImGuiStyle* style){ return style->DisabledAlpha;}
DIMGUI_EXPORT ImVec2 DImGuiGetWindowPadding (ImGuiStyle* style){ return style->WindowPadding;}
DIMGUI_EXPORT float DImGuiGetWindowRounding (ImGuiStyle* style){ return style->WindowRounding;}
DIMGUI_EXPORT float DImGuiGetWindowBorderSize (ImGuiStyle* style){ return style->WindowBorderSize;}
DIMGUI_EXPORT ImVec2 DImGuiGetWindowMinSize (ImGuiStyle* style){ return style->WindowMinSize;}
DIMGUI_EXPORT ImVec2 DImGuiGetWindowTitleAlign (ImGuiStyle* style){ return style->WindowTitleAlign;}
DIMGUI_EXPORT ImGuiDir DImGuiGetWindowMenuButtonPosition (ImGuiStyle* style){ return style->WindowMenuButtonPosition;}
DIMGUI_EXPORT float DImGuiGetChildRounding (ImGuiStyle* style){ return style->ChildRounding;}
DIMGUI_EXPORT float DImGuiGetChildBorderSize (ImGuiStyle* style){ return style->ChildBorderSize;}
DIMGUI_EXPORT float DImGuiGetPopupRounding (ImGuiStyle* style){ return style->PopupRounding;}
DIMGUI_EXPORT float DImGuiGetPopupBorderSize (ImGuiStyle* style){ return style->PopupBorderSize;}
DIMGUI_EXPORT ImVec2 DImGuiGetFramePadding (ImGuiStyle* style){ return style->FramePadding;}
DIMGUI_EXPORT float DImGuiGetFrameRounding (ImGuiStyle* style){ return style->FrameRounding;}
DIMGUI_EXPORT float DImGuiGetFrameBorderSize (ImGuiStyle* style){ return style->FrameBorderSize;}
DIMGUI_EXPORT ImVec2 DImGuiGetItemSpacing (ImGuiStyle* style){ return style->ItemSpacing;}
DIMGUI_EXPORT ImVec2 DImGuiGetItemInnerSpacing (ImGuiStyle* style){ return style->ItemInnerSpacing;}
DIMGUI_EXPORT ImVec2 DImGuiGetCellPadding (ImGuiStyle* style){ return style->CellPadding;}
DIMGUI_EXPORT ImVec2 DImGuiGetTouchExtraPadding (ImGuiStyle* style){ return style->TouchExtraPadding;}
DIMGUI_EXPORT float DImGuiGetIndentSpacing (ImGuiStyle* style){ return style->IndentSpacing;}
DIMGUI_EXPORT float DImGuiGetColumnsMinSpacing (ImGuiStyle* style){ return style->ColumnsMinSpacing;}
DIMGUI_EXPORT float DImGuiGetScrollbarSize (ImGuiStyle* style){ return style->ScrollbarSize;}
DIMGUI_EXPORT float DImGuiGetScrollbarRounding (ImGuiStyle* style){ return style->ScrollbarRounding;}
DIMGUI_EXPORT float DImGuiGetGrabMinSize (ImGuiStyle* style){ return style->GrabMinSize;}
DIMGUI_EXPORT float DImGuiGetGrabRounding (ImGuiStyle* style){ return style->GrabRounding;}
DIMGUI_EXPORT float DImGuiGetLogSliderDeadzone (ImGuiStyle* style){ return style->LogSliderDeadzone;}
DIMGUI_EXPORT float DImGuiGetTabRounding (ImGuiStyle* style){ return style->TabRounding;}
DIMGUI_EXPORT float DImGuiGetTabBorderSize (ImGuiStyle* style){ return style->TabBorderSize;}
DIMGUI_EXPORT float DImGuiGetTabMinWidthForCloseButton (ImGuiStyle* style){ return style->TabMinWidthForCloseButton;}
DIMGUI_EXPORT ImGuiDir DImGuiGetColorButtonPosition (ImGuiStyle* style){ return style->ColorButtonPosition;}
DIMGUI_EXPORT ImVec2 DImGuiGetButtonTextAlign (ImGuiStyle* style){ return style->ButtonTextAlign;}
DIMGUI_EXPORT ImVec2 DImGuiGetSelectableTextAlign (ImGuiStyle* style){ return style->SelectableTextAlign;}
DIMGUI_EXPORT ImVec2 DImGuiGetDisplayWindowPadding (ImGuiStyle* style){ return style->DisplayWindowPadding;}
DIMGUI_EXPORT ImVec2 DImGuiGetDisplaySafeAreaPadding (ImGuiStyle* style){ return style->DisplaySafeAreaPadding;}
DIMGUI_EXPORT float DImGuiGetMouseCursorScale (ImGuiStyle* style){ return style->MouseCursorScale;}
DIMGUI_EXPORT bool DImGuiGetAntiAliasedLines (ImGuiStyle* style){ return style->AntiAliasedLines;}
DIMGUI_EXPORT bool DImGuiGetAntiAliasedLinesUseTex (ImGuiStyle* style){ return style->AntiAliasedLinesUseTex;}
DIMGUI_EXPORT bool DImGuiGetAntiAliasedFill (ImGuiStyle* style){ return style->AntiAliasedFill;}
DIMGUI_EXPORT float DImGuiGetCurveTessellationTol (ImGuiStyle* style){ return style->CurveTessellationTol;}
DIMGUI_EXPORT float DImGuiGetCircleTessellationMaxError (ImGuiStyle* style){ return style->CircleTessellationMaxError;}




DIMGUI_EXPORT void DImGuiSetAlpha (ImGuiStyle* style, float value){ style->Alpha=value;}
DIMGUI_EXPORT void DImGuiSetDisabledAlpha (ImGuiStyle* style, float value){ style->DisabledAlpha=value;}
DIMGUI_EXPORT void DImGuiSetWindowPadding (ImGuiStyle* style, ImVec2 value){ style->WindowPadding=value;}
DIMGUI_EXPORT void DImGuiSetWindowRounding (ImGuiStyle* style, float value){ style->WindowRounding=value;}
DIMGUI_EXPORT void DImGuiSetWindowBorderSize (ImGuiStyle* style, float value){ style->WindowBorderSize=value;}
DIMGUI_EXPORT void DImGuiSetWindowMinSize (ImGuiStyle* style, ImVec2 value){ style->WindowMinSize=value;}
DIMGUI_EXPORT void DImGuiSetWindowTitleAlign (ImGuiStyle* style, ImVec2 value){ style->WindowTitleAlign=value;}
DIMGUI_EXPORT void DImGuiSetWindowMenuButtonPosition (ImGuiStyle* style, ImGuiDir value){ style->WindowMenuButtonPosition=value;}
DIMGUI_EXPORT void DImGuiSetChildRounding (ImGuiStyle* style, float value){ style->ChildRounding=value;}
DIMGUI_EXPORT void DImGuiSetChildBorderSize (ImGuiStyle* style, float value){ style->ChildBorderSize=value;}
DIMGUI_EXPORT void DImGuiSetPopupRounding (ImGuiStyle* style, float value){ style->PopupRounding=value;}
DIMGUI_EXPORT void DImGuiSetPopupBorderSize (ImGuiStyle* style, float value){ style->PopupBorderSize=value;}
DIMGUI_EXPORT void DImGuiSetFramePadding (ImGuiStyle* style, ImVec2 value){ style->FramePadding=value;}
DIMGUI_EXPORT void DImGuiSetFrameRounding (ImGuiStyle* style, float value){ style->FrameRounding=value;}
DIMGUI_EXPORT void DImGuiSetFrameBorderSize (ImGuiStyle* style, float value){ style->FrameBorderSize=value;}
DIMGUI_EXPORT void DImGuiSetItemSpacing (ImGuiStyle* style, ImVec2 value){ style->ItemSpacing=value;}
DIMGUI_EXPORT void DImGuiSetItemInnerSpacing (ImGuiStyle* style, ImVec2 value){ style->ItemInnerSpacing=value;}
DIMGUI_EXPORT void DImGuiSetCellPadding (ImGuiStyle* style, ImVec2 value){ style->CellPadding=value;}
DIMGUI_EXPORT void DImGuiSetTouchExtraPadding (ImGuiStyle* style, ImVec2 value){ style->TouchExtraPadding=value;}
DIMGUI_EXPORT void DImGuiSetIndentSpacing (ImGuiStyle* style, float value){ style->IndentSpacing=value;}
DIMGUI_EXPORT void DImGuiSetColumnsMinSpacing (ImGuiStyle* style, float value){ style->ColumnsMinSpacing=value;}
DIMGUI_EXPORT void DImGuiSetScrollbarSize (ImGuiStyle* style, float value){ style->ScrollbarSize=value;}
DIMGUI_EXPORT void DImGuiSetScrollbarRounding (ImGuiStyle* style, float value){ style->ScrollbarRounding=value;}
DIMGUI_EXPORT void DImGuiSetGrabMinSize (ImGuiStyle* style, float value){ style->GrabMinSize=value;}
DIMGUI_EXPORT void DImGuiSetGrabRounding (ImGuiStyle* style, float value){ style->GrabRounding=value;}
DIMGUI_EXPORT void DImGuiSetLogSliderDeadzone (ImGuiStyle* style, float value){ style->LogSliderDeadzone=value;}
DIMGUI_EXPORT void DImGuiSetTabRounding (ImGuiStyle* style, float value){ style->TabRounding=value;}
DIMGUI_EXPORT void DImGuiSetTabBorderSize (ImGuiStyle* style, float value){ style->TabBorderSize=value;}
DIMGUI_EXPORT void DImGuiSetTabMinWidthForCloseButton (ImGuiStyle* style, float value){ style->TabMinWidthForCloseButton=value;}
DIMGUI_EXPORT void DImGuiSetColorButtonPosition (ImGuiStyle* style, ImGuiDir value){ style->ColorButtonPosition=value;}
DIMGUI_EXPORT void DImGuiSetButtonTextAlign (ImGuiStyle* style, ImVec2 value){ style->ButtonTextAlign=value;}
DIMGUI_EXPORT void DImGuiSetSelectableTextAlign (ImGuiStyle* style, ImVec2 value){ style->SelectableTextAlign=value;}
DIMGUI_EXPORT void DImGuiSetDisplayWindowPadding (ImGuiStyle* style, ImVec2 value){ style->DisplayWindowPadding=value;}
DIMGUI_EXPORT void DImGuiSetDisplaySafeAreaPadding (ImGuiStyle* style, ImVec2 value){ style->DisplaySafeAreaPadding=value;}
DIMGUI_EXPORT void DImGuiSetMouseCursorScale (ImGuiStyle* style, float value){ style->MouseCursorScale=value;}
DIMGUI_EXPORT void DImGuiSetAntiAliasedLines (ImGuiStyle* style, bool value){ style->AntiAliasedLines=value;}
DIMGUI_EXPORT void DImGuiSetAntiAliasedLinesUseTex (ImGuiStyle* style, bool value){ style->AntiAliasedLinesUseTex=value;}
DIMGUI_EXPORT void DImGuiSetAntiAliasedFill (ImGuiStyle* style, bool value){ style->AntiAliasedFill=value;}
DIMGUI_EXPORT void DImGuiSetCurveTessellationTol (ImGuiStyle* style, float value){ style->CurveTessellationTol=value;}
DIMGUI_EXPORT void DImGuiSetCircleTessellationMaxError (ImGuiStyle* style, float value){ style->CircleTessellationMaxError=value;}

// clang-format on
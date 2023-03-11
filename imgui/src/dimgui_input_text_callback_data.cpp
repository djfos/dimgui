#include "../dim_config.h"

// use sturcts without constructors
#define CIMGUI_DEFINE_ENUMS_AND_STRUCTS
#include "cimgui/cimgui.h"

// clang-format off
DIMGUI_EXPORT ImGuiInputTextFlags DImGuiInputTextCallbackDataGetEventFlag (ImGuiInputTextCallbackData* s){ return s->EventFlag;}
DIMGUI_EXPORT ImGuiInputTextFlags DImGuiInputTextCallbackDataGetFlags (ImGuiInputTextCallbackData* s){ return s->Flags;}
DIMGUI_EXPORT ImWchar DImGuiInputTextCallbackDataGetEventChar (ImGuiInputTextCallbackData* s){ return s->EventChar;}
DIMGUI_EXPORT ImGuiKey DImGuiInputTextCallbackDataGetEventKey (ImGuiInputTextCallbackData* s){ return s->EventKey;}
DIMGUI_EXPORT char* DImGuiInputTextCallbackDataGetBuf (ImGuiInputTextCallbackData* s){ return s->Buf;}
DIMGUI_EXPORT int DImGuiInputTextCallbackDataGetBufTextLen (ImGuiInputTextCallbackData* s){ return s->BufTextLen;}
DIMGUI_EXPORT int DImGuiInputTextCallbackDataGetBufSize (ImGuiInputTextCallbackData* s){ return s->BufSize;}
DIMGUI_EXPORT bool DImGuiInputTextCallbackDataGetBufDirty (ImGuiInputTextCallbackData* s){ return s->BufDirty;}
DIMGUI_EXPORT int DImGuiInputTextCallbackDataGetCursorPos (ImGuiInputTextCallbackData* s){ return s->CursorPos;}
DIMGUI_EXPORT int DImGuiInputTextCallbackDataGetSelectionStart (ImGuiInputTextCallbackData* s){ return s->SelectionStart;}
DIMGUI_EXPORT int DImGuiInputTextCallbackDataGetSelectionEnd (ImGuiInputTextCallbackData* s){ return s->SelectionEnd;}




DIMGUI_EXPORT void DImGuiInputTextCallbackDataSetEventFlag (ImGuiInputTextCallbackData* s, ImGuiInputTextFlags value){ s->EventFlag=value;}
DIMGUI_EXPORT void DImGuiInputTextCallbackDataSetFlags (ImGuiInputTextCallbackData* s, ImGuiInputTextFlags value){ s->Flags=value;}
DIMGUI_EXPORT void DImGuiInputTextCallbackDataSetEventChar (ImGuiInputTextCallbackData* s, ImWchar value){ s->EventChar=value;}
DIMGUI_EXPORT void DImGuiInputTextCallbackDataSetEventKey (ImGuiInputTextCallbackData* s, ImGuiKey value){ s->EventKey=value;}
DIMGUI_EXPORT void DImGuiInputTextCallbackDataSetBuf (ImGuiInputTextCallbackData* s, char* value){ s->Buf=value;}
DIMGUI_EXPORT void DImGuiInputTextCallbackDataSetBufTextLen (ImGuiInputTextCallbackData* s, int value){ s->BufTextLen=value;}
DIMGUI_EXPORT void DImGuiInputTextCallbackDataSetBufSize (ImGuiInputTextCallbackData* s, int value){ s->BufSize=value;}
DIMGUI_EXPORT void DImGuiInputTextCallbackDataSetBufDirty (ImGuiInputTextCallbackData* s, bool value){ s->BufDirty=value;}
DIMGUI_EXPORT void DImGuiInputTextCallbackDataSetCursorPos (ImGuiInputTextCallbackData* s, int value){ s->CursorPos=value;}
DIMGUI_EXPORT void DImGuiInputTextCallbackDataSetSelectionStart (ImGuiInputTextCallbackData* s, int value){ s->SelectionStart=value;}
DIMGUI_EXPORT void DImGuiInputTextCallbackDataSetSelectionEnd (ImGuiInputTextCallbackData* s, int value){ s->SelectionEnd=value;}

// clang-format on
#include "../dim_config.h"

// use sturcts without constructors
#define CIMGUI_DEFINE_ENUMS_AND_STRUCTS
#include "cimgui/cimgui.h"

// clang-format off
DIMGUI_EXPORT ImGuiInputTextFlags DImGuiGetEventFlag (ImGuiInputTextCallbackData* s){ return s->EventFlag;}
DIMGUI_EXPORT ImGuiInputTextFlags DImGuiGetFlags (ImGuiInputTextCallbackData* s){ return s->Flags;}
DIMGUI_EXPORT ImWchar DImGuiGetEventChar (ImGuiInputTextCallbackData* s){ return s->EventChar;}
DIMGUI_EXPORT ImGuiKey DImGuiGetEventKey (ImGuiInputTextCallbackData* s){ return s->EventKey;}
DIMGUI_EXPORT char* DImGuiGetBuf (ImGuiInputTextCallbackData* s){ return s->Buf;}
DIMGUI_EXPORT int DImGuiGetBufTextLen (ImGuiInputTextCallbackData* s){ return s->BufTextLen;}
DIMGUI_EXPORT int DImGuiGetBufSize (ImGuiInputTextCallbackData* s){ return s->BufSize;}
DIMGUI_EXPORT bool DImGuiGetBufDirty (ImGuiInputTextCallbackData* s){ return s->BufDirty;}
DIMGUI_EXPORT int DImGuiGetCursorPos (ImGuiInputTextCallbackData* s){ return s->CursorPos;}
DIMGUI_EXPORT int DImGuiGetSelectionStart (ImGuiInputTextCallbackData* s){ return s->SelectionStart;}
DIMGUI_EXPORT int DImGuiGetSelectionEnd (ImGuiInputTextCallbackData* s){ return s->SelectionEnd;}




DIMGUI_EXPORT void DImGuiSetEventFlag (ImGuiInputTextCallbackData* s, ImGuiInputTextFlags value){ s->EventFlag=value;}
DIMGUI_EXPORT void DImGuiSetFlags (ImGuiInputTextCallbackData* s, ImGuiInputTextFlags value){ s->Flags=value;}
DIMGUI_EXPORT void DImGuiSetEventChar (ImGuiInputTextCallbackData* s, ImWchar value){ s->EventChar=value;}
DIMGUI_EXPORT void DImGuiSetEventKey (ImGuiInputTextCallbackData* s, ImGuiKey value){ s->EventKey=value;}
DIMGUI_EXPORT void DImGuiSetBuf (ImGuiInputTextCallbackData* s, char* value){ s->Buf=value;}
DIMGUI_EXPORT void DImGuiSetBufTextLen (ImGuiInputTextCallbackData* s, int value){ s->BufTextLen=value;}
DIMGUI_EXPORT void DImGuiSetBufSize (ImGuiInputTextCallbackData* s, int value){ s->BufSize=value;}
DIMGUI_EXPORT void DImGuiSetBufDirty (ImGuiInputTextCallbackData* s, bool value){ s->BufDirty=value;}
DIMGUI_EXPORT void DImGuiSetCursorPos (ImGuiInputTextCallbackData* s, int value){ s->CursorPos=value;}
DIMGUI_EXPORT void DImGuiSetSelectionStart (ImGuiInputTextCallbackData* s, int value){ s->SelectionStart=value;}
DIMGUI_EXPORT void DImGuiSetSelectionEnd (ImGuiInputTextCallbackData* s, int value){ s->SelectionEnd=value;}
// clang-format on
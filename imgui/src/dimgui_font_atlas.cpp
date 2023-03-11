#include "../dim_config.h"

// use sturcts without constructors
#define CIMGUI_DEFINE_ENUMS_AND_STRUCTS
#include "cimgui/cimgui.h"

// clang-format off

DIMGUI_EXPORT ImFontAtlasFlags DImFontAtlasGetFlags (ImFontAtlas* s){ return s->Flags;}
DIMGUI_EXPORT ImTextureID DImFontAtlasGetTexID (ImFontAtlas* s){ return s->TexID;}
DIMGUI_EXPORT int DImFontAtlasGetTexDesiredWidth (ImFontAtlas* s){ return s->TexDesiredWidth;}
DIMGUI_EXPORT int DImFontAtlasGetTexGlyphPadding (ImFontAtlas* s){ return s->TexGlyphPadding;}
DIMGUI_EXPORT bool DImFontAtlasGetLocked (ImFontAtlas* s){ return s->Locked;}
DIMGUI_EXPORT void* DImFontAtlasGetUserData (ImFontAtlas* s){ return s->UserData;}




DIMGUI_EXPORT void DImFontAtlasSetFlags (ImFontAtlas* s, ImFontAtlasFlags value){ s->Flags=value;}
DIMGUI_EXPORT void DImFontAtlasSetTexID (ImFontAtlas* s, ImTextureID value){ s->TexID=value;}
DIMGUI_EXPORT void DImFontAtlasSetTexDesiredWidth (ImFontAtlas* s, int value){ s->TexDesiredWidth=value;}
DIMGUI_EXPORT void DImFontAtlasSetTexGlyphPadding (ImFontAtlas* s, int value){ s->TexGlyphPadding=value;}
DIMGUI_EXPORT void DImFontAtlasSetLocked (ImFontAtlas* s, bool value){ s->Locked=value;}
DIMGUI_EXPORT void DImFontAtlasSetUserData (ImFontAtlas* s, void* value){ s->UserData=value;}



// clang-format on
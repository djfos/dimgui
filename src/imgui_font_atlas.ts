import { ImFont, ImFontAtlasFlags, ImFontConfig, ImTextureID, Int32 } from "./type.ts";
import { cString, ffi as imgui } from "./ffi.ts";

/**
 * Runtime data for multiple fonts, bake multiple
 * fonts into a single texture, TTF/OTF font loader
 */
export class ImFontAtlas {
  #self: Deno.PointerValue;

  constructor(pointer: Deno.PointerValue) {
    this.#self = pointer;
  }

  get pointer() {
    return this.#self;
  }

  /*
   *  Build flags (see ImFontAtlasFlags_)
   */
  get Flags(): ImFontAtlasFlags {
    return imgui.DImFontAtlasGetFlags(this.#self);
  }
  set Flags(value: ImFontAtlasFlags) {
    imgui.DImFontAtlasSetFlags(this.#self, value);
  }
  /*
   *  User data to refer to the texture once it has been uploaded to user's graphic systems. It is passed back to you during rendering via the ImDrawCmd structure.
   */
  get TexID(): ImTextureID {
    return imgui.DImFontAtlasGetTexID(this.#self);
  }
  set TexID(value: ImTextureID) {
    imgui.DImFontAtlasSetTexID(this.#self, value);
  }
  /*
   *  Texture width desired by user before Build(). Must be a power-of-two. If have many glyphs your graphics API have texture size restrictions you may want to increase texture width to decrease height.
   */
  get TexDesiredWidth(): number {
    return imgui.DImFontAtlasGetTexDesiredWidth(this.#self);
  }
  set TexDesiredWidth(value: number) {
    imgui.DImFontAtlasSetTexDesiredWidth(this.#self, value);
  }
  /*
   *  Padding between glyphs within texture in pixels. Defaults to 1. If your rendering method doesn't rely on bilinear filtering you may set this to 0 (will also need to set AntiAliasedLinesUseTex = false).
   */
  get TexGlyphPadding(): number {
    return imgui.DImFontAtlasGetTexGlyphPadding(this.#self);
  }
  set TexGlyphPadding(value: number) {
    imgui.DImFontAtlasSetTexGlyphPadding(this.#self, value);
  }
  /*
   *  Marked as Locked by ImGui::NewFrame() so attempt to modify the atlas will assert.
   */
  get Locked(): boolean {
    return imgui.DImFontAtlasGetLocked(this.#self);
  }
  set Locked(value: boolean) {
    imgui.DImFontAtlasSetLocked(this.#self, value);
  }
  // /*
  //  *  Store your own atlas related user-data (if e.g. you have multiple font atlas).
  // */
  // get UserData(): BufferSource {
  //   return imgui.DImFontAtlasGetUserData(this.#self);
  // }
  // set UserData(value: BufferSource) {
  //   imgui.DImFontAtlasSetUserData(this.#self, value);
  // }

  addFontFromMemoryTTF(
    font_data: BufferSource,
    size_pixels: number,
    font_cfg?: ImFontConfig,
    glyph_ranges?: string,
  ): ImFont {
    return imgui.ImFontAtlas_AddFontFromMemoryTTF(
      this.#self,
      font_data,
      font_data.byteLength,
      size_pixels,
      font_cfg ?? null,
      cString(glyph_ranges),
    );
  }

  // 1 byte per-pixel
  getTexDataAsAlpha8() {
    const dataPointer = new BigUint64Array(1);
    const pDataPointer = Deno.UnsafePointer.of(dataPointer);
    const width = Int32.of(0);
    const height = Int32.of(0);
    imgui.ImFontAtlas_GetTexDataAsAlpha8(this.#self, pDataPointer, width.buffer, height.buffer, null);
    return {
      data: null,
      texWidth: width.value,
      texHeight: height.value,
    };
  }

  //-------------------------------------------
  // Glyph Ranges
  //-------------------------------------------

  // Helpers to retrieve list of common Unicode ranges (2 value per range, values are inclusive, zero-terminated list)
  // NB: Make sure that your string are UTF-8 and NOT in your local code page. In C++11, you can create UTF-8 string literal using the u8"Hello world" syntax. See FAQ for details.
  // NB: Consider using ImFontGlyphRangesBuilder to build glyph ranges from textual data.
  GetGlyphRangesDefault(): Deno.PointerValue {
    return imgui.ImFontAtlas_GetGlyphRangesDefault(this.#self);
  }
  GetGlyphRangesGreek(): Deno.PointerValue {
    return imgui.ImFontAtlas_GetGlyphRangesGreek(this.#self);
  }
  GetGlyphRangesKorean(): Deno.PointerValue {
    return imgui.ImFontAtlas_GetGlyphRangesKorean(this.#self);
  }
  GetGlyphRangesJapanese(): Deno.PointerValue {
    return imgui.ImFontAtlas_GetGlyphRangesJapanese(this.#self);
  }
  GetGlyphRangesChineseFull(): Deno.PointerValue {
    return imgui.ImFontAtlas_GetGlyphRangesChineseFull(this.#self);
  }
  GetGlyphRangesChineseSimplifiedCommon(): Deno.PointerValue {
    return imgui.ImFontAtlas_GetGlyphRangesChineseSimplifiedCommon(this.#self);
  }
  GetGlyphRangesCyrillic(): Deno.PointerValue {
    return imgui.ImFontAtlas_GetGlyphRangesCyrillic(this.#self);
  }
  GetGlyphRangesThai(): Deno.PointerValue {
    return imgui.ImFontAtlas_GetGlyphRangesThai(this.#self);
  }
  GetGlyphRangesVietnamese(): Deno.PointerValue {
    return imgui.ImFontAtlas_GetGlyphRangesVietnamese(this.#self);
  }
}

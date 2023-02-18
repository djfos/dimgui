import * as imgui from "../mod.ts";
import { ImVec2 } from "../mod.ts";

const float1 = new Float32Array(1);
const float2 = new Float32Array(2);
const float3 = new Float32Array(3);
const float4 = new Float32Array(4);

const int1 = new Int32Array(1);
const int2 = new Int32Array(2);
const int3 = new Int32Array(3);
const int4 = new Int32Array(4);

const minSliderFloat = 0;
const maxSliderFloat = 1;

const minSliderInt = 0;
const maxSliderInt = 10;

export function testWidget() {
  const size = new ImVec2(40, 160);
  imgui.begin("test widget");

  imgui.text(`float1: ${float1}`);
  imgui.text(`float2: ${float2}`);
  imgui.text(`float3: ${float3}`);
  imgui.text(`float4: ${float4}`);

  imgui.text(`int1: ${int1}`);
  imgui.text(`int2: ${int2}`);
  imgui.text(`int3: ${int3}`);
  imgui.text(`int4: ${int4}`);

  imgui.separator();

  imgui.pushID("slider-float");
  imgui.sliderFloat("float1", float1, minSliderFloat, maxSliderFloat);
  imgui.sliderFloat2("float2", float2, minSliderFloat, maxSliderFloat);
  imgui.sliderFloat3("float3", float3, minSliderFloat, maxSliderFloat);
  imgui.sliderFloat4("float4", float4, minSliderFloat, maxSliderFloat);
  imgui.vSliderFloat("vfloat1", size, float1, minSliderFloat, maxSliderFloat);
  imgui.popID();

  imgui.pushID("slider-int");
  imgui.sliderInt("int1", int1, minSliderInt, maxSliderInt);
  imgui.sliderInt2("int2", int2, minSliderInt, maxSliderInt);
  imgui.sliderInt3("int3", int3, minSliderInt, maxSliderInt);
  imgui.sliderInt4("int4", int4, minSliderInt, maxSliderInt);
  imgui.vSliderInt("vint1", size, int1, minSliderFloat, maxSliderFloat);
  imgui.popID();

  imgui.end();
}

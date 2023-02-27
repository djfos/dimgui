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

const minFloat = 0;
const maxFloat = 1;

const minInt = 0;
const maxInt = 10;

const speedFloat = 0.01;
const speedInt = 0.1;

const text = new Uint8Array(8);

export function testWidget() {
  const size = new ImVec2(40, 160);
  imgui.begin("test widget");

  imgui.pushID("text-slider");
  imgui.text(`float1: ${float1}`);
  imgui.text(`float2: ${float2}`);
  imgui.text(`float3: ${float3}`);
  imgui.text(`float4: ${float4}`);
  imgui.text(`int1: ${int1}`);
  imgui.text(`int2: ${int2}`);
  imgui.text(`int3: ${int3}`);
  imgui.text(`int4: ${int4}`);
  imgui.popID();

  imgui.separator();

  imgui.pushID("slider-float");
  imgui.sliderFloat("float1", float1, minFloat, maxFloat);
  imgui.sliderFloat2("float2", float2, minFloat, maxFloat);
  imgui.sliderFloat3("float3", float3, minFloat, maxFloat);
  imgui.sliderFloat4("float4", float4, minFloat, maxFloat);
  imgui.vSliderFloat(
    "vfloat1",
    size,
    new Float32Array(float2.buffer, 4, 1),
    minFloat,
    maxFloat,
  );
  imgui.popID();

  imgui.pushID("slider-int");
  imgui.sliderInt("int1", int1, minInt, maxInt);
  imgui.sliderInt2("int2", int2, minInt, maxInt);
  imgui.sliderInt3("int3", int3, minInt, maxInt);
  imgui.sliderInt4("int4", int4, minInt, maxInt);
  imgui.vSliderInt("vint1", size, int1, minFloat, maxFloat);
  imgui.popID();

  imgui.pushID("text-drag");
  imgui.text(`float1: ${float1}`);
  imgui.text(`float2: ${float2}`);
  imgui.text(`float3: ${float3}`);
  imgui.text(`float4: ${float4}`);
  imgui.text(`int1: ${int1}`);
  imgui.text(`int2: ${int2}`);
  imgui.text(`int3: ${int3}`);
  imgui.text(`int4: ${int4}`);
  imgui.popID();

  imgui.pushID("drag-float");
  imgui.dragFloat("float1", float1, speedFloat, minFloat, maxFloat);
  imgui.dragFloat2("float2", float2, speedFloat, minFloat, maxFloat);
  imgui.dragFloat3("float3", float3, speedFloat, minFloat, maxFloat);
  imgui.dragFloat4("float4", float4, speedFloat, minFloat, maxFloat);
  imgui.dragFloatRange2(
    "float range2",
    float2,
    new Float32Array(float2.buffer, 4, 1),
    speedFloat,
    minFloat,
    maxFloat,
  );
  imgui.popID();

  imgui.pushID("drag-int");
  imgui.dragInt("int1", int1, speedFloat, minInt, maxInt);
  imgui.dragInt2("int2", int2, speedFloat, minInt, maxInt);
  imgui.dragInt3("int3", int3, speedFloat, minInt, maxInt);
  imgui.dragInt4("int4", int4, speedFloat, minInt, maxInt);
  imgui.dragIntRange2(
    "int range2",
    int2,
    new Int32Array(int2.buffer, 4, 1),
    speedInt,
    minInt,
    maxInt,
  );
  imgui.popID();

  imgui.pushID("input");
  imgui.text(text);
  imgui.inputText("text input", text,text.length)
  imgui.popID();

  imgui.end();
}

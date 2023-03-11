import * as imgui from "../mod.ts";
import {
  Bool,
  Double,
  Float,
  ImGuiCol,
  ImGuiComboFlagBits,
  ImGuiCond,
  ImGuiDir,
  ImGuiHoveredFlagBits,
  ImGuiKey,
  ImGuiSelectableFlagBits,
  ImGuiSliderFlagBits,
  ImGuiTableFlagBits,
  ImGuiTreeNodeFlagBits,
  ImVec2,
  ImVec4,
  Int32,
  Utf8Array,
} from "../mod.ts";
import {
  ImGuiColorEditFlagBits,
  ImGuiDragDropFlagBits,
  ImGuiFocusedFlagBits,
  ImGuiInputTextFlagBits,
  ImGuiPayloadType,
  ImGuiStyleVar,
  ImGuiTabBarFlagBits,
  ImGuiTabItemFlagBits,
} from "../src/enum.ts";
import { ImGuiInputTextCallbackData } from "../src/imgui_input_text_callback_data.ts";

/**
 * Helper to display a little (?) mark which shows a tooltip when hovered.
 * In your own code you may want to display an actual icon if you are using a merged icon fonts (see docs/FONTS.md)
 */
function helpMarker(desc: string) {
  imgui.textDisabled("(?)");
  if (imgui.isItemHovered(ImGuiHoveredFlagBits.DelayShort)) {
    imgui.beginTooltip();
    imgui.pushTextWrapPos(imgui.getFontSize() * 35.0);
    imgui.text(desc);
    imgui.popTextWrapPos();
    imgui.endTooltip();
  }
}

function boolArrray(values: boolean[]) {
  return values.map((v) => Bool.of(v));
}

enum Element {
  Fire,
  Earth,
  Air,
  Water,
  COUNT,
}

const statusBasic = {
  clicked: 0,
  check: new Bool(true),
  e: 0,
  counter: 0,
  combo: {
    // deno-fmt-ignore
    items: [ "AAAA", "BBBB", "CCCC", "DDDD", "EEEE", "FFFF", "GGGG", "HHHH", "IIIIIII", "JJJJ", "KKKKKKK"],
    item_current: new Int32Array(1),
  },
  textInput: {
    str0: new Uint8Array(128),
    str1: new Uint8Array(128),
    i0: Int32.of(123),
    f0: Float.of(0.001),
    d0: Double.of(999999.00000001),
    f1: Float.of(1.e10),
    vec4a: new ImVec4(0.10, 0.20, 0.30, 0.44),
  },
  drag: {
    i1: Int32.of(50),
    i2: Int32.of(42),
    f1: Float.of(1.0),
    f2: Float.of(0.0067),
  },
  slider: {
    i1: Int32.of(0),
    f1: Float.of(0.123),
    f2: Float.of(0.0),
    angle: Float.of(0.0),
    elem: Int32.of(Element.Fire),
    elems_names: ["Fire", "Earth", "Air", "Water"],
  },
  color: {
    col1: Float32Array.of(1.0, 0.0, 0.2),
    col2: Float32Array.of(0.4, 0.7, 0.0, 0.5),
  },
  listbox: {
    item_current: Int32.of(1),
  },
};

function demoBasic() {
  const basic = statusBasic;
  if (imgui.treeNode("Basic")) {
    if (imgui.button("Button")) {
      basic.clicked++;
    }
    if (basic.clicked & 1) {
      imgui.sameLine();
      imgui.text("Thanks for clicking me!");
    }

    imgui.checkbox("checkbox", basic.check.buffer);
    imgui.radioButton("radio a", basic.e == 0, () => basic.e = 0);
    imgui.sameLine();
    imgui.radioButton("radio b", basic.e == 1, () => basic.e = 1);
    imgui.sameLine();
    imgui.radioButton("radio c", basic.e == 2, () => basic.e = 2);

    // Color buttons, demonstrate using PushID() to add unique identifier in the ID stack, and changing style.
    for (let i = 0; i < 7; i++) {
      if (i > 0) {
        imgui.sameLine();
      }

      imgui.pushID(i);
      imgui.pushStyleColor(ImGuiCol.Button, imgui.createHSVColor(i / 7.0, 0.6, 0.6));
      imgui.pushStyleColor(ImGuiCol.ButtonHovered, imgui.createHSVColor(i / 7.0, 0.7, 0.7));
      imgui.pushStyleColor(ImGuiCol.ButtonActive, imgui.createHSVColor(i / 7.0, 0.8, 0.8));
      imgui.button("Click");
      imgui.popStyleColor(3);
      imgui.popID();
    }

    // Use AlignTextToFramePadding() to align text baseline to the baseline of framed widgets elements
    // (otherwise a Text+SameLine+Button sequence will have the text a little too high by default!)
    // See 'Demo->Layout->Text Baseline Alignment' for details.
    imgui.alignTextToFramePadding();
    imgui.text("Hold to repeat:");
    imgui.sameLine();

    // Arrow buttons with Repeater
    const spacing = imgui.getStyle().ItemInnerSpacing.x;
    imgui.pushButtonRepeat(true);
    if (imgui.arrowButton("##left", ImGuiDir.Left)) basic.counter--;
    imgui.sameLine(0.0, spacing);
    if (imgui.arrowButton("##right", ImGuiDir.Right)) basic.counter++;
    imgui.popButtonRepeat();
    imgui.sameLine();
    imgui.text(basic.counter.toString());

    imgui.separator();
    imgui.labelText("label", "Value");

    // Using the _simplified_ one-liner Combo() api here
    // See "Combo" section for examples of how to use the more flexible BeginCombo()/EndCombo() api.
    const combo = basic.combo;
    imgui.combo("combo", combo.item_current, combo.items, combo.items.length);
    imgui.sameLine();
    helpMarker(
      "Using the simplified one-liner Combo API here.\n " +
        "Refer to the 'Combo' section below for an explanation " +
        "of how to use the more flexible and general BeginCombo/EndCombo API.",
    );

    // To wire InputText() with std::string or any other custom string type,
    // see the "Text Input > Resize Callback" section of this demo, and the misc/cpp/imgui_stdlib.h file.
    // static char str0[128] = "Hello, world!";

    const textInput = basic.textInput;
    new TextEncoder().encodeInto("Hello, world!", textInput.str0);
    imgui.inputText("input text", textInput.str0, textInput.str0.byteLength);
    imgui.sameLine();
    helpMarker(
      "USER:\n" +
        "Hold SHIFT or use mouse to select text.\n" +
        "CTRL+Left/Right to word jump.\n" +
        "CTRL+A or Double-Click to select all.\n" +
        "CTRL+X,CTRL+C,CTRL+V clipboard.\n" +
        "CTRL+Z,CTRL+Y undo/redo.\n" +
        "ESCAPE to revert.\n\n" +
        "PROGRAMMER:\n" +
        "You can use the ImGuiInputTextFlagBits.CallbackResize facility if you need to wire InputText() " +
        "to a dynamic string type. See misc/cpp/imgui_stdlib.h for an example (this is not demonstrated " +
        "in imgui_demo.cpp).",
    );

    imgui.inputTextWithHint(
      "input text (w/ hint)",
      "enter text here",
      textInput.str1,
      textInput.str1.byteLength,
    );
    imgui.inputInt("input int", textInput.i0.buffer);
    imgui.inputFloat("input float", textInput.f0.buffer, 0.01, 1.0, "%.3f");
    imgui.inputDouble("input double", textInput.d0.buffer, 0.01, 1.0, "%.8f");
    imgui.inputFloat("input scientific", textInput.f1.buffer, 0.0, 0.0, "%e");
    imgui.sameLine();
    helpMarker(
      "You can input value using the scientific notation,\n" +
        '  e.g. "1e+8" becomes "100000000".',
    );
    imgui.inputFloat3("input float3", textInput.vec4a.buffer);

    const drag = basic.drag;
    imgui.dragInt("drag int", drag.i1.buffer, 1);
    imgui.sameLine();
    helpMarker(
      "Click and drag to edit value.\n" +
        "Hold SHIFT/ALT for faster/slower edit.\n" +
        "Double-click or CTRL+click to input value.",
    );

    imgui.dragInt("drag int 0..100", drag.i2.buffer, 1, 0, 100, "%d%%", ImGuiSliderFlagBits.AlwaysClamp);

    imgui.dragFloat("drag float", drag.f1.buffer, 0.005);
    imgui.dragFloat("drag small float", drag.f2.buffer, 0.0001, 0.0, 0.0, "%.06 ns");

    const slider = basic.slider;
    imgui.sliderInt("slider int", slider.i1.buffer, -1, 3);
    imgui.sameLine();
    helpMarker("CTRL+click to input value.");

    imgui.sliderFloat("slider float", slider.f1.buffer, 0.0, 1.0, "ratio = %.3f");
    imgui.sliderFloat("slider float (log)", slider.f2.buffer, -10.0, 10.0, "%.4f", ImGuiSliderFlagBits.Logarithmic);
    imgui.sliderAngle("slider angle", slider.angle.buffer);

    // Using the format string to display a name instead of an integer.
    // Here we completely omit '%d' from the format string, so it'll only display a name.
    // This technique can also be used with DragInt().
    const elem_name = (slider.elem.value >= 0 && slider.elem.value < Element.COUNT)
      ? slider.elems_names[slider.elem.value]
      : "Unknown";
    imgui.sliderInt("slider enum", slider.elem.buffer, 0, Element.COUNT - 1, elem_name);
    imgui.sameLine();
    helpMarker(
      "Using the format string parameter to display a name instead of the underlying integer.",
    );

    {
      const color = basic.color;
      // IMGUI_DEMO_MARKER("Widgets/Basic/ColorEdit3, ColorEdit4");
      imgui.colorEdit3("color 1", color.col1);
      imgui.sameLine();
      helpMarker(
        "Click on the color square to open a color picker.\n" +
          "Click and hold to use drag and drop.\n" +
          "Right-click on the color square to show options.\n" +
          "CTRL+click on individual component to input value.\n",
      );

      imgui.colorEdit4("color 2", color.col2);
    }

    {
      // Using the _simplified_ one-liner ListBox() api here
      // See "List boxes" section for examples of how to use the more flexible BeginListBox()/EndListBox() api.
      // IMGUI_DEMO_MARKER("Widgets/Basic/ListBox");

      // deno-fmt-ignore
      const items = [ "Apple", "Banana", "Cherry", "Kiwi", "Mango", "Orange", "Pineapple", "Strawberry", "Watermelon", ];
      const item_current = basic.listbox.item_current;
      imgui.listBox("listbox", item_current.buffer, items, items.length, 4);
      imgui.sameLine();
      // deno-fmt-ignore
      helpMarker(
        'Using the simplified one-liner ListBox API here.\nRefer\
        to the "List boxes" section below for an explanation of how\
        to use the more flexible and general BeginListBox/EndListBox API.',
      );
    }

    {
      // Tooltips
      // IMGUI_DEMO_MARKER("Widgets/Basic/Tooltips");
      imgui.alignTextToFramePadding();
      imgui.text("Tooltips:");

      imgui.sameLine();
      imgui.button("Button");
      if (imgui.isItemHovered()) {
        imgui.setTooltip("I am a tooltip");
      }

      imgui.sameLine();
      imgui.button("Fancy");
      if (imgui.isItemHovered()) {
        imgui.beginTooltip();
        imgui.text("I am a fancy tooltip");
        const arr = Float32Array.of(0.6, 0.1, 1.0, 0.5, 0.92, 0.1, 0.2);
        imgui.plotLines("Curve", arr, arr.length);
        imgui.text(`Sin(time) = ${Math.sin(Date.now())}`);
        imgui.endTooltip();
      }

      imgui.sameLine();
      imgui.button("Delayed");
      // Delay best used on items that highlight on hover, so this not a great example!
      if (imgui.isItemHovered(ImGuiHoveredFlagBits.DelayNormal)) {
        imgui.setTooltip("I am a tooltip with a delay.");
      }

      imgui.sameLine();
      helpMarker(
        "Tooltip are created by using the IsItemHovered() function over any kind of item.",
      );
    }

    imgui.treePop();
  }
}
const statusTree = {
  base_flags: Int32.of(
    ImGuiTreeNodeFlagBits.OpenOnArrow |
      ImGuiTreeNodeFlagBits.OpenOnDoubleClick |
      ImGuiTreeNodeFlagBits.SpanAvailWidth,
  ),
  align_label_with_current_x_position: Bool.of(false),
  test_drag_and_drop: Bool.of(false),
  selection_mask: 1 << 2,
};

function demoTree() {
  const tree = statusTree;
  if (imgui.treeNode("Trees")) {
    if (imgui.treeNode("Basic trees")) {
      for (let i = 0; i < 5; i++) {
        // Use SetNextItemOpen() so set the default state of a node to be open. We could
        // also use TreeNodeEx() with the ImGuiTreeNodeFlagBits.DefaultOpen flag to achieve the same thing!
        if (i == 0) {
          imgui.setNextItemOpen(true, ImGuiCond.Once);
        }

        if (imgui.treeNode(`Child ${i}`)) {
          imgui.text("blah blah");
          imgui.sameLine();
          imgui.smallButton("button");
          imgui.treePop();
        }
      }
      imgui.treePop();
    }

    if (imgui.treeNode("Advanced, with Selectable nodes")) {
      helpMarker(
        "This is a more typical looking tree with selectable nodes.\n" +
          "Click to select, CTRL+Click to toggle, click on arrows or double-click to open.",
      );
      imgui.checkboxFlags("OpenOnArrow", tree.base_flags.buffer, ImGuiTreeNodeFlagBits.OpenOnArrow);
      imgui.checkboxFlags("OpenOnDoubleClick", tree.base_flags.buffer, ImGuiTreeNodeFlagBits.OpenOnDoubleClick);
      imgui.checkboxFlags("SpanAvailWidth", tree.base_flags.buffer, ImGuiTreeNodeFlagBits.SpanAvailWidth);
      imgui.sameLine();
      helpMarker(
        "Extend hit area to all available width instead of allowing more items to be laid out after the node.",
      );
      imgui.checkboxFlags("SpanFullWidth", tree.base_flags.buffer, ImGuiTreeNodeFlagBits.SpanFullWidth);
      imgui.checkbox("Align label with current X position", tree.align_label_with_current_x_position.buffer);
      imgui.checkbox("Test tree node as drag source", tree.test_drag_and_drop.buffer);
      imgui.text("Hello!");
      if (tree.align_label_with_current_x_position.value) {
        imgui.unindent(imgui.getTreeNodeToLabelSpacing());
      }

      // 'selection_mask' is dumb representation of what may be user-side selection state.
      //  You may retain selection state inside or outside your objects in whatever format you see fit.
      // 'node_clicked' is temporary storage of what node we have clicked to process selection at the end
      /// of the loop. May be a pointer to your own node type, etc.
      let node_clicked = -1;
      for (let i = 0; i < 6; i++) {
        // Disable the default "open on single-click behavior" + set Selected flag according to our selection.
        // To alter selection we use IsItemClicked() && !IsItemToggledOpen(), so clicking on an arrow doesn't alter selection.
        let node_flags = tree.base_flags.value;
        const is_selected = (tree.selection_mask & (1 << i)) != 0;
        if (is_selected) {
          node_flags |= ImGuiTreeNodeFlagBits.Selected;
        }
        if (i < 3) {
          // Items 0..2 are Tree Node
          const node_open = imgui.treeNodeEx(
            `Selectable Node ${i}`,
            node_flags,
          );
          if (imgui.isItemClicked() && !imgui.isItemToggledOpen()) {
            node_clicked = i;
          }
          if (tree.test_drag_and_drop && imgui.beginDragDropSource()) {
            imgui.setDragDropPayload("_TREENODE", null, 0);
            imgui.text("This is a drag and drop source");
            imgui.endDragDropSource();
          }
          if (node_open) {
            imgui.bulletText("Blah blah\nBlah Blah");
            imgui.treePop();
          }
        } else {
          // Items 3..5 are Tree Leaves
          // The only reason we use TreeNode at all is to allow selection of the leaf. Otherwise we can
          // use BulletText() or advance the cursor by GetTreeNodeToLabelSpacing() and call Text().
          node_flags |= ImGuiTreeNodeFlagBits.Leaf | ImGuiTreeNodeFlagBits.NoTreePushOnOpen; // ImGuiTreeNodeFlagBits.Bullet
          imgui.treeNodeEx(`Selectable Leaf ${i}`, node_flags);
          if (imgui.isItemClicked() && !imgui.isItemToggledOpen()) {
            node_clicked = i;
          }
          if (tree.test_drag_and_drop && imgui.beginDragDropSource()) {
            imgui.setDragDropPayload("_TREENODE", null, 0);
            imgui.text("This is a drag and drop source");
            imgui.endDragDropSource();
          }
        }
      }
      if (node_clicked != -1) {
        // Update selection state
        // (process outside of tree loop to avoid visual inconsistencies during the clicking frame)
        if (imgui.isKeyDown(ImGuiKey.LeftCtrl)) {
          tree.selection_mask ^= 1 << node_clicked; // CTRL+click to toggle
        } //if (!(selection_mask & (1 << node_clicked))) // Depending on selection behavior you want, may want to preserve selection when clicking on item that is part of the selection
        else {
          tree.selection_mask = 1 << node_clicked; // Click to single-select
        }
      }
      if (tree.align_label_with_current_x_position.value) {
        imgui.indent(imgui.getTreeNodeToLabelSpacing());
      }
      imgui.treePop();
    }
    imgui.treePop();
  }
}

const statusCollapsingHeaders = {
  closable_group: Bool.of(true),
};
function demoClollapsingHeaders() {
  const collapsingHeaders = statusCollapsingHeaders;
  if (imgui.treeNode("Collapsing Headers")) {
    // static bool closable_group = true;
    const closable_group = collapsingHeaders.closable_group;
    imgui.checkbox("Show 2nd header", closable_group.buffer);
    if (imgui.collapsingHeader("Header", null, ImGuiTreeNodeFlagBits.None)) {
      imgui.text(`IsItemHovered: ${imgui.isItemHovered()}`);
      for (let i = 0; i < 5; i++) {
        imgui.text(`Some content ${i}`);
      }
    }
    if (imgui.collapsingHeader("Header with a close button", closable_group.buffer)) {
      imgui.text(`IsItemHovered: ${imgui.isItemHovered()}`);
      for (let i = 0; i < 5; i++) {
        imgui.text(`More content ${i}`);
      }
    }
    imgui.treePop();
  }
}

function demoBullets() {
  if (imgui.treeNode("Bullets")) {
    imgui.bulletText("Bullet point 1");
    imgui.bulletText("Bullet point 2\nOn multiple lines");
    if (imgui.treeNode("Tree node")) {
      imgui.bulletText("Another bullet point");
      imgui.treePop();
    }
    imgui.bullet();
    imgui.text("Bullet point 3 (two calls)");
    imgui.bullet();
    imgui.smallButton("Button");
    imgui.treePop();
  }
}

const statusText = {
  utf8Text: {
    buf: Utf8Array.of("\xe6\x97\xa5\xe6\x9c\xac\xe8\xaa\x9e", 32),
  },
  wordWrapping: {
    wrap_width: Float.of(200),
  },
};
function demoText() {
  const text = statusText;
  if (imgui.treeNode("Text")) {
    if (imgui.treeNode("Colorful Text")) {
      // Using shortcut. You can use PushStyleColor()/PopStyleColor() for more flexibility.
      imgui.textColored(new ImVec4(1.0, 0.0, 1.0, 1.0), "Pink");
      imgui.textColored(new ImVec4(1.0, 1.0, 0.0, 1.0), "Yellow");
      imgui.textDisabled("Disabled");
      imgui.sameLine();
      helpMarker("The TextDisabled color is stored in ImGuiStyle.");
      imgui.treePop();
    }

    if (imgui.treeNode("Word Wrapping")) {
      // Using shortcut. You can use PushTextWrapPos()/PopTextWrapPos() for more flexibility.
      imgui.textWrapped(
        "This text should automatically wrap on the edge of the window. The current implementation " +
          "for text wrapping follows simple rules suitable for English and possibly other languages.",
      );

      const wrap_width = text.wordWrapping.wrap_width;
      imgui.sliderFloat("Wrap width", wrap_width.buffer, -20, 600, "%.0f");

      // const draw_list = imgui.getWindowDrawList();
      for (let n = 0; n < 2; n++) {
        imgui.text(`Test paragraph ${n}`);
        // const pos = imgui.getCursorScreenPos();
        // const marker_min = new ImVec2(pos.x + wrap_width.value, pos.y);
        // const marker_max = new ImVec2(pos.x + wrap_width.value + 10, pos.y + imgui.getTextLineHeight());
        imgui.pushTextWrapPos(imgui.getCursorPos().x + wrap_width.value);
        if (n == 0) {
          imgui.text(
            `The lazy dog is a good dog. This paragraph should fit within ${
              wrap_width.value.toFixed(1)
            } pixels. Testing a 1 character word. The quick brown fox jumps over the lazy dog.`,
          );
        } else {
          imgui.text(
            "aaaaaaaa bbbbbbbb, c cccccccc,dddddddd. d eeeeeeee   ffffffff. gggggggg!hhhhhhhh",
          );
        }

        // Draw actual text bounding box, following by marker of our expected limit (should not overlap!)
        // draw_list->AddRect(imgui.getItemRectMin(), imgui.getItemRectMax(), IM_COL32(255, 255, 0, 255));
        // draw_list->AddRectFilled(marker_min, marker_max, IM_COL32(255, 0, 255, 255));
        imgui.popTextWrapPos();
      }

      imgui.treePop();
    }

    if (imgui.treeNode("UTF-8 Text")) {
      // UTF-8 test with Japanese characters
      // (Needs a suitable font? Try "Google Noto" or "Arial Unicode". See docs/FONTS.md for details.)
      // - From C++11 you can use the u8"my text" syntax to encode literal strings as UTF-8
      // - For earlier compiler, you may be able to encode your sources as UTF-8 (e.g. in Visual Studio, you
      //   can save your source files as 'UTF-8 without signature').
      // - FOR THIS DEMO FILE ONLY, BECAUSE WE WANT TO SUPPORT OLD COMPILERS, WE ARE *NOT* INCLUDING RAW UTF-8
      //   CHARACTERS IN THIS SOURCE FILE. Instead we are encoding a few strings with hexadecimal constants.
      //   Don't do this in your application! Please use u8"text in any language" in your application!
      // Note that characters values are preserved even by InputText() if the font cannot be displayed,
      // so you can safely copy & paste garbled characters into another application.
      imgui.textWrapped(
        "CJK text will only appear if the font was loaded with the appropriate CJK character ranges. " +
          "Call io.Fonts->AddFontFromFileTTF() manually to load extra character ranges. " +
          "Read docs/FONTS.md for details.",
      );
      imgui.text(
        "Hiragana: \xe3\x81\x8b\xe3\x81\x8d\xe3\x81\x8f\xe3\x81\x91\xe3\x81\x93 (kakikukeko)",
      ); // Normally we would use u8"blah blah" with the proper characters directly in the string.
      imgui.text("Kanjis: \xe6\x97\xa5\xe6\x9c\xac\xe8\xaa\x9e (nihongo)");
      const buf = text.utf8Text.buf;
      imgui.inputText("UTF-8 input", buf.buffer, buf.buffer.length);
      if (imgui.button("log input to console")) {
        console.log(buf.value);
      }
      imgui.treePop();
    }
    imgui.treePop();
  }
}
const statusImages = {
  pressed_count: 0,
};
function demoImages() {
  const s = statusImages;
  // IMGUI_DEMO_MARKER("Widgets/Images");
  if (imgui.treeNode("Images")) {
    const io = imgui.getIO();
    imgui.textWrapped(
      "Below we are displaying the font texture (which is the only texture we have access to in this demo). " +
        "Use the 'ImTextureID' type as storage to pass pointers or identifier to your own texture data. " +
        "Hover the texture for a zoomed view!",
    );

    // Below we are displaying the font texture because it is the only texture we have access to inside the demo!
    // Remember that ImTextureID is just storage for whatever you want it to be. It is essentially a value that
    // will be passed to the rendering backend via the ImDrawCmd structure.
    // If you use one of the default imgui_impl_XXXX.cpp rendering backend, they all have comments at the top
    // of their respective source file to specify what they expect to be stored in ImTextureID, for example:
    // - The imgui_impl_dx11.cpp renderer expect a 'ID3D11ShaderResourceView*' pointer
    // - The imgui_impl_opengl3.cpp renderer expect a GLuint OpenGL texture identifier, etc.
    // More:
    // - If you decided that ImTextureID = MyEngineTexture*, then you can pass your MyEngineTexture* pointers
    //   to imgui.image(), and gather width/height through your own functions, etc.
    // - You can use ShowMetricsWindow() to inspect the draw data that are being passed to your renderer,
    //   it will help you debug issues if you are confused about it.
    // - Consider using the lower-level ImDrawList::addImage() API, via imgui.getWindowDrawList()->AddImage().
    // - Read https://github.com/ocornut/imgui/blob/master/docs/FAQ.md
    // - Read https://github.com/ocornut/imgui/wiki/Image-Loading-and-Displaying-Examples

    // ImTextureID my_tex_id = io.Fonts->TexID;
    // float my_tex_w = (float)io.Fonts->TexWidth;
    // float my_tex_h = (float)io.Fonts->TexHeight;
    const fonts = io.Fonts;
    const my_tex_id = fonts.TexID;
    const texData = fonts.getTexDataAsAlpha8();
    const my_tex_w = texData.texWidth;
    const my_tex_h = texData.texHeight;

    {
      imgui.text(`${my_tex_w.toFixed(0)}x${my_tex_h.toFixed(0)}`);
      const pos = imgui.getCursorScreenPos();
      const uv_min = new ImVec2(0.0, 0.0); // Top-left
      const uv_max = new ImVec2(1.0, 1.0); // Lower-right
      const tint_col = new ImVec4(1.0, 1.0, 1.0, 1.0); // No tint
      const border_col = new ImVec4(1.0, 1.0, 1.0, 0.5); // 50% opaque white
      imgui.image(my_tex_id, new ImVec2(my_tex_w, my_tex_h), uv_min, uv_max, tint_col, border_col);
      if (imgui.isItemHovered()) {
        imgui.beginTooltip();
        const mousePos = imgui.getMousePos();
        const region_sz = 32.0;
        let region_x = mousePos.x - pos.x - region_sz * 0.5;
        let region_y = mousePos.y - pos.y - region_sz * 0.5;
        const zoom = 4.0;
        if (region_x < 0.0) region_x = 0.0;
        else if (region_x > my_tex_w - region_sz) region_x = my_tex_w - region_sz;
        if (region_y < 0.0) region_y = 0.0;
        else if (region_y > my_tex_h - region_sz) region_y = my_tex_h - region_sz;
        imgui.text(`Min: (${region_x}, ${region_y})`);
        imgui.text(`Max: (${region_x + region_sz}, ${region_y + region_sz})`);
        const uv0 = new ImVec2((region_x) / my_tex_w, (region_y) / my_tex_h);
        const uv1 = new ImVec2((region_x + region_sz) / my_tex_w, (region_y + region_sz) / my_tex_h);
        imgui.image(my_tex_id, new ImVec2(region_sz * zoom, region_sz * zoom), uv0, uv1, tint_col, border_col);
        imgui.endTooltip();
      }
    }

    // IMGUI_DEMO_MARKER("Widgets/Images/Textured buttons");
    imgui.textWrapped("And now some textured buttons..");
    for (let i = 0; i < 8; i++) {
      // UV coordinates are often (0.0, 0.0f) and (1.0, 1.0f) to display an entire textures.
      // Here are trying to display only a 32x32 pixels area of the texture, hence the UV computation.
      // Read about UV coordinates here: https://github.com/ocornut/imgui/wiki/Image-Loading-and-Displaying-Examples
      imgui.pushID(i);
      if (i > 0) {
        imgui.pushStyleVar(ImGuiStyleVar.FramePadding, new ImVec2(i - 1.0, i - 1.0));
      }
      const size = new ImVec2(32.0, 32.0); // Size of the image we want to make visible
      const uv0 = new ImVec2(0.0, 0.0); // UV coordinates for lower-left
      const uv1 = new ImVec2(32.0 / my_tex_w, 32.0 / my_tex_h); // UV coordinates for (32,32) in our texture
      const bg_col = new ImVec4(0.0, 0.0, 0.0, 1.0); // Black background
      const tint_col = new ImVec4(1.0, 1.0, 1.0, 1.0); // No tint
      if (imgui.imageButton("", my_tex_id, size, uv0, uv1, bg_col, tint_col)) {
        s.pressed_count += 1;
      }
      if (i > 0) {
        imgui.popStyleVar();
      }
      imgui.popID();
      imgui.sameLine();
    }
    imgui.newLine();
    imgui.text(`Pressed ${s.pressed_count} times.`);
    imgui.treePop();
  }
}

const statusCombo = {
  flags: Int32.of(ImGuiComboFlagBits.None),
  item_current_idx: 0,
  item_current_2: Int32.of(0),
  item_current_3: Int32.of(-1),
  listBox: {
    item_current_idx: 0,
  },
};
function demoCombo() {
  const combo = statusCombo;
  // IMGUI_DEMO_MARKER("Widgets/Combo");
  if (imgui.treeNode("Combo")) {
    // Combo Boxes are also called "Dropdown" in other systems
    // Expose flags as checkbox for the demo
    const flags = combo.flags;
    imgui.checkboxFlags("ImGuiComboFlagBits.PopupAlignLeft", flags.buffer, ImGuiComboFlagBits.PopupAlignLeft);
    imgui.sameLine();
    helpMarker("Only makes a difference if the popup is larger than the combo");
    if (imgui.checkboxFlags("ImGuiComboFlagBits.NoArrowButton", flags.buffer, ImGuiComboFlagBits.NoArrowButton)) {
      flags.value &= ~ImGuiComboFlagBits.NoPreview; // Clear the other flag, as we cannot combine both
    }
    if (imgui.checkboxFlags("ImGuiComboFlagBits.NoPreview", flags.buffer, ImGuiComboFlagBits.NoPreview)) {
      flags.value &= ~ImGuiComboFlagBits.NoArrowButton; // Clear the other flag, as we cannot combine both
    }

    // Using the generic BeginCombo() API, you have full control over how to display the combo contents.
    // (your selection data could be an index, a pointer to the object, an id for the object, a flag intrusively
    // stored in the object itself, etc.)

    // deno-fmt-ignore
    const items = [ "AAAA", "BBBB", "CCCC", "DDDD", "EEEE", "FFFF", "GGGG", "HHHH", "IIII", "JJJJ", "KKKK", "LLLLLLL", "MMMM", "OOOOOOO", ];
    const combo_preview_value = items[combo.item_current_idx]; // Pass in the preview value visible before opening the combo (it could be anything)
    if (imgui.beginCombo("combo 1", combo_preview_value, flags.value)) {
      for (let n = 0; n < items.length; n++) {
        const is_selected = combo.item_current_idx == n;
        if (imgui.selectable(items[n], is_selected)) {
          combo.item_current_idx = n;
        }

        // Set the initial focus when opening the combo (scrolling + keyboard navigation focus)
        if (is_selected) {
          imgui.setItemDefaultFocus();
        }
      }
      imgui.endCombo();
    }

    // Simplified one-liner Combo() API, using values packed in a single constant string
    // This is a convenience for when the selection set is small and known at compile-time.
    const item_current_2 = combo.item_current_2;
    imgui.combo("combo 2 (one-liner)", item_current_2.buffer, ["aaaa", "bbb", "cccc", "dddd", "eee"]);

    // Simplified one-liner Combo() using an array of const char*
    // This is not very useful (may obsolete): prefer using BeginCombo()/EndCombo() for full control.

    const item_current_3 = combo.item_current_3; // If the selection isn't within 0..count, Combo won't display a preview
    imgui.combo("combo 3 (array)", item_current_3.buffer, items, items.length);

    imgui.treePop();
  }

  // IMGUI_DEMO_MARKER("Widgets/List Boxes");
  if (imgui.treeNode("List boxes")) {
    // Using the generic BeginListBox() API, you have full control over how to display the combo contents.
    // (your selection data could be an index, a pointer to the object, an id for the object, a flag intrusively
    // stored in the object itself, etc.)

    // deno-fmt-ignore
    const items = [ "AAAA", "BBBB", "CCCC", "DDDD", "EEEE", "FFFF", "GGGG", "HHHH", "IIII", "JJJJ", "KKKK", "LLLLLLL", "MMMM", "OOOOOOO"];
    const listBox = combo.listBox;
    if (imgui.beginListBox("listbox 1")) {
      for (let n = 0; n < items.length; n++) {
        const is_selected = listBox.item_current_idx == n;
        if (imgui.selectable(items[n], is_selected)) {
          listBox.item_current_idx = n;
        }

        // Set the initial focus when opening the combo (scrolling + keyboard navigation focus)
        if (is_selected) {
          imgui.setItemDefaultFocus();
        }
      }
      imgui.endListBox();
    }

    // Custom size: use all width, 5 items tall
    imgui.text("Full-width:");
    const fullWidth = new ImVec2(-imgui.floatMin(), 5 * imgui.getTextLineHeightWithSpacing());
    if (imgui.beginListBox("##listbox 2", fullWidth)) {
      for (let n = 0; n < items.length; n++) {
        const is_selected = listBox.item_current_idx == n;
        if (imgui.selectable(items[n], is_selected)) {
          listBox.item_current_idx = n;
        }

        // Set the initial focus when opening the combo (scrolling + keyboard navigation focus)
        if (is_selected) {
          imgui.setItemDefaultFocus();
        }
      }
      imgui.endListBox();
    }

    imgui.treePop();
  }
}

const statusSelectables = {
  basic: {
    selection: boolArrray([false, true, false, false, false]),
  },
  singleSlection: {
    selected: -1,
  },
  multiSlection: {
    selection: boolArrray([false, false, false, false, false]),
  },
  moreTextSameLine: {
    selected: boolArrray([false, false, false]),
  },
  inColumns: {
    selected: boolArrray([...Array(10).keys()].map((_) => false)),
  },
  grid: {
    selected: [
      boolArrray([true, false, false, false]),
      boolArrray([false, true, false, false]),
      boolArrray([false, false, true, false]),
      boolArrray([false, false, false, true]),
    ],
  },
  alignment: {
    // deno-fmt-ignore
    selected: boolArrray([ true, false, true, false, true, false, true, false, true ]),
  },
};

function demoSelectables() {
  // IMGUI_DEMO_MARKER("Widgets/Selectables");
  if (imgui.treeNode("Selectables")) {
    // Selectable() has 2 overloads:
    // - The one taking "bool selected" as a read-only selection information.
    //   When Selectable() has been clicked it returns true and you can alter selection state accordingly.
    // - The one taking "bool* p_selected" as a read-write selection information (convenient in some cases)
    // The earlier is more flexible, as in real application your selection may be stored in many different ways
    // and not necessarily inside a bool value (e.g. in flags within objects, as an external list, etc).
    // IMGUI_DEMO_MARKER("Widgets/Selectables/Basic");
    if (imgui.treeNode("Basic")) {
      const basic = statusSelectables.basic;
      const selection = basic.selection;
      imgui.selectable("1. I am selectable", selection[0]);
      imgui.selectable("2. I am selectable", selection[1]);
      imgui.text("(I am not selectable)");
      imgui.selectable("4. I am selectable", selection[3]);
      if (imgui.selectable("5. I am double clickable", selection[4], ImGuiSelectableFlagBits.AllowDoubleClick)) {
        if (imgui.isMouseDoubleClicked(0)) {
          selection[4].value = !selection[4].value;
        }
      }
      imgui.treePop();
    }
    // IMGUI_DEMO_MARKER("Widgets/Selectables/Single Selection");
    if (imgui.treeNode("Selection State: Single Selection")) {
      const singleSlection = statusSelectables.singleSlection;
      for (let n = 0; n < 5; n++) {
        if (imgui.selectable(`Object ${n}`, singleSlection.selected == n)) {
          singleSlection.selected = n;
        }
      }
      imgui.treePop();
    }
    // IMGUI_DEMO_MARKER("Widgets/Selectables/Multiple Selection");
    if (imgui.treeNode("Selection State: Multiple Selection")) {
      helpMarker("Hold CTRL and click to select multiple items.");
      const selection = statusSelectables.multiSlection.selection;
      for (let n = 0; n < 5; n++) {
        if (imgui.selectable(`Object ${n}`, selection[n])) {
          if (!imgui.isKeyDown(ImGuiKey.LeftAlt)) { // Clear selection when CTRL is not held
            selection.forEach((v) => v.value = false);
          }
          selection[n].value = !selection[n].value;
        }
      }
      imgui.treePop();
    }
    // IMGUI_DEMO_MARKER("Widgets/Selectables/Rendering more text into the same line");
    if (imgui.treeNode("Rendering more text into the same line")) {
      // Using the Selectable() override that takes "bool* p_selected" parameter,
      // this function toggle your bool value automatically.
      const selected = statusSelectables.moreTextSameLine.selected;
      imgui.selectable("main.c", selected[0]);
      imgui.sameLine(300);
      imgui.text(" 2,345 bytes");
      imgui.selectable("Hello.cpp", selected[1]);
      imgui.sameLine(300);
      imgui.text("12,345 bytes");
      imgui.selectable("Hello.h", selected[2]);
      imgui.sameLine(300);
      imgui.text(" 2,345 bytes");
      imgui.treePop();
    }
    // // IMGUI_DEMO_MARKER("Widgets/Selectables/In columns");
    if (imgui.treeNode("In columns")) {
      const selected = statusSelectables.inColumns.selected;
      const flags = ImGuiTableFlagBits.Resizable |
        ImGuiTableFlagBits.NoSavedSettings | ImGuiTableFlagBits.Borders;
      if (imgui.beginTable("split1", 3, flags)) {
        for (let i = 0; i < 10; i++) {
          imgui.tableNextColumn();
          imgui.selectable(`item ${i}`, selected[i]); // FIXME-TABLE: Selection overlap
        }
        imgui.endTable();
      }
      imgui.spacing();
      if (imgui.beginTable("split2", 3, flags)) {
        for (let i = 0; i < 10; i++) {
          imgui.tableNextRow();
          imgui.tableNextColumn();
          imgui.selectable(
            `item ${i}`,
            selected[i],
            ImGuiSelectableFlagBits.SpanAllColumns,
          );
          imgui.tableNextColumn();
          imgui.text("Some other contents");
          imgui.tableNextColumn();
          imgui.text("123456");
        }
        imgui.endTable();
      }
      imgui.treePop();
    }
    // // IMGUI_DEMO_MARKER("Widgets/Selectables/Grid");
    if (imgui.treeNode("Grid")) {
      const selected = statusSelectables.grid.selected;
      // Add in a bit of silly fun...
      const time = Date.now();
      const winning_state = selected.every((arr) => arr.every((v) => v.value)); // If all cells are selected...
      if (winning_state) {
        const size = new ImVec2(
          0.5 + 0.5 * Math.cos(time * 2.0),
          0.5 + 0.5 * Math.sin(time * 3.0),
        );
        imgui.pushStyleVar(ImGuiStyleVar.SelectableTextAlign, size);
      }

      for (let y = 0; y < 4; y++) {
        for (let x = 0; x < 4; x++) {
          if (x > 0) {
            imgui.sameLine();
          }
          imgui.pushID(y * 4 + x);
          if (
            imgui.selectable("Sailor", selected[y][x].value, 0, new ImVec2(50, 50))
          ) {
            // Toggle clicked cell + toggle neighbors
            selected[y][x].toggle();
            if (x > 0) selected[y][x - 1].toggle();
            if (x < 3) selected[y][x + 1].toggle();
            if (y > 0) selected[y - 1][x].toggle();
            if (y < 3) selected[y + 1][x].toggle();
          }
          imgui.popID();
        }
      }

      if (winning_state) {
        imgui.popStyleVar();
      }
      imgui.treePop();
    }
    // IMGUI_DEMO_MARKER("Widgets/Selectables/Alignment");
    if (imgui.treeNode("Alignment")) {
      helpMarker(
        "By default, Selectables uses style.SelectableTextAlign but it can be overridden on a per-item " +
          "basis using PushStyleVar(). You'll probably want to always keep your default situation to " +
          "left-align otherwise it becomes difficult to layout multiple items on a same line",
      );
      const selected = statusSelectables.alignment.selected;
      for (let y = 0; y < 3; y++) {
        for (let x = 0; x < 3; x++) {
          const alignment = new ImVec2(x / 2.0, y / 2.0);
          const name = `(${alignment.x.toFixed(1)},${alignment.y.toFixed(1)})`;
          if (x > 0) imgui.sameLine();
          imgui.pushStyleVar(ImGuiStyleVar.SelectableTextAlign, alignment);
          imgui.selectable(name, selected[3 * y + x], ImGuiSelectableFlagBits.None, new ImVec2(80, 80));
          imgui.popStyleVar();
        }
      }
      imgui.treePop();
    }
    imgui.treePop();
  }
}

const statusTextInput = {
  multiline: {
    text: Utf8Array.of(
      "/*\n" +
        " The Pentium F00 bug, shorthand for F0 0 C7 C8,\n" +
        " the hexadecimal encoding of one offending instruction,\n" +
        " more formally, the invalid operand with locked CMPXCHG8B\n" +
        " instruction bug, is a design flaw in the majority of\n" +
        " Intel Pentium, Pentium MMX, and Pentium OverDrive\n" +
        " processors (all in the P5 microarchitecture).\n" +
        "*/\n\n" +
        "label:\n" +
        "\tlock cmpxchg8b eax\n",
      1024 * 16,
    ),
    flags: Int32.of(ImGuiInputTextFlagBits.AllowTabInput),
  },
  filtered: {
    buf1: Utf8Array.empty(64),
    buf2: Utf8Array.empty(64),
    buf3: Utf8Array.empty(64),
    buf4: Utf8Array.empty(64),
    buf5: Utf8Array.empty(64),
    buf6: Utf8Array.empty(64),
  },
  status: {
    edit_count: 0,
    buf1: Utf8Array.empty(64),
    buf2: Utf8Array.empty(64),
    buf3: Utf8Array.empty(64),
  },
};

function demoTextInput() {
  if (imgui.treeNode("Text Input")) {
    if (imgui.treeNode("Multi-line Text Input")) {
      const multiline = statusTextInput.multiline;
      const text = multiline.text;
      const flags = multiline.flags;
      const fullWidth = new ImVec2(-imgui.floatMin(), imgui.getTextLineHeight() * 16);
      imgui.checkboxFlags("ImGuiInputTextFlagBits.ReadOnly", flags.buffer, ImGuiInputTextFlagBits.ReadOnly);
      imgui.checkboxFlags("ImGuiInputTextFlagBits.AllowTabInput", flags.buffer, ImGuiInputTextFlagBits.AllowTabInput);
      imgui.checkboxFlags(
        "ImGuiInputTextFlagBits.CtrlEnterForNewLine",
        flags.buffer,
        ImGuiInputTextFlagBits.CtrlEnterForNewLine,
      );
      imgui.inputTextMultiline("##source", text.buffer, fullWidth, flags.value);
      imgui.treePop();
    }

    // IMGUI_DEMO_MARKER("Widgets/Text Input/Filtered Text Input");
    if (imgui.treeNode("Filtered Text Input")) {
      const filtered = statusTextInput.filtered;

      imgui.inputText("default", filtered.buf1.buffer);
      imgui.inputText("decimal", filtered.buf2.buffer, ImGuiInputTextFlagBits.CharsDecimal);
      const flags = ImGuiInputTextFlagBits.CharsHexadecimal | ImGuiInputTextFlagBits.CharsUppercase;
      imgui.inputText("hexadecimal", filtered.buf3.buffer, flags);
      imgui.inputText("uppercase", filtered.buf4.buffer, ImGuiInputTextFlagBits.CharsUppercase);
      imgui.inputText("no blank", filtered.buf5.buffer, ImGuiInputTextFlagBits.CharsNoBlank);
      // different form array.filter
      const filter = (data: ImGuiInputTextCallbackData) => {
        if ("imgui".includes(String.fromCharCode(data.EventChar))) {
          return false; // accept
        }
        return true; // discard
      };
      imgui.inputText('"imgui" letters', filtered.buf6.buffer, ImGuiInputTextFlagBits.CallbackCharFilter, filter);
      imgui.treePop();
    }

    // IMGUI_DEMO_MARKER("Widgets/Text Input/Password input");
    if (imgui.treeNode("Password Input")) {
      // static char password[64] = "password123";
      const password = Utf8Array.of("password123", 64);
      imgui.inputText("password", password.buffer, ImGuiInputTextFlagBits.Password);
      imgui.sameLine();
      helpMarker("Display all characters as '*'.\nDisable clipboard cut and copy.\nDisable logging.\n");
      imgui.inputTextWithHint("password (w/ hint)", "<password>", password.buffer, ImGuiInputTextFlagBits.Password);
      imgui.inputText("password (clear)", password.buffer);
      imgui.treePop();
    }

    if (imgui.treeNode("Completion, History, Edit Callbacks")) {
      const status = statusTextInput.status;
      const callback = (data: ImGuiInputTextCallbackData): boolean => {
        if (data.EventFlag == ImGuiInputTextFlagBits.CallbackCompletion) {
          data.insertChars(data.CursorPos, "..");
        } else if (data.EventFlag == ImGuiInputTextFlagBits.CallbackHistory) {
          if (data.EventKey == ImGuiKey.UpArrow) {
            data.deleteChars(0, data.BufTextLen);
            data.insertChars(0, "Pressed Up!");
            data.selectAll();
          } else if (data.EventKey == ImGuiKey.DownArrow) {
            data.deleteChars(0, data.BufTextLen);
            data.insertChars(0, "Pressed Down!");
            data.selectAll();
          }
        } else if (data.EventFlag == ImGuiInputTextFlagBits.CallbackEdit) {
          // // Toggle casing of first character
          // // const char = String.fromCharCode(buf[0]);
          // // const _toggle = status.edit_count % 2 == 0 ? char.toUpperCase() : char.toLowerCase();
          // buf[0] = "P".charCodeAt(0);
          // data.BufDirty = true;
          // console.log(new Utf8Array(buf).value);
          // assert(buf === status.buf3.buffer);

          // // Increment a counter
          // status.edit_count++;
        }
        return false;
      };

      const buf1 = status.buf1;
      const buf2 = status.buf2;
      // const buf3 = status.buf3;
      imgui.inputText("Completion", buf1.buffer, ImGuiInputTextFlagBits.CallbackCompletion, callback);
      imgui.sameLine();
      helpMarker(
        "Here we append \"..\" each time Tab is pressed. See 'Examples>Console' for a more meaningful demonstration of using this callback.",
      );

      imgui.inputText("History", buf2.buffer, ImGuiInputTextFlagBits.CallbackHistory, callback);
      imgui.sameLine();
      helpMarker(
        "Here we replace and select text each time Up/Down are pressed. See 'Examples>Console' for a more meaningful demonstration of using this callback.",
      );

      // TODO
      // const ret = imgui.inputText("Edit", buf3.buffer, ImGuiInputTextFlagBits.CallbackEdit, callback);
      // imgui.sameLine();
      // helpMarker("Here we toggle the casing of the first character on every edit + count edits.");
      // imgui.sameLine();
      // imgui.text(`${status.edit_count}`);
      // if (ret) {
      //   console.log(new Utf8Array(buf3.buffer).value);
      // }

      imgui.treePop();
    }

    imgui.treePop();
  }
}

const statusTabs = {
  advanced: {
    flags: Int32.of(ImGuiTabBarFlagBits.Reorderable),
    opened: boolArrray([true, true, true, true]),
  },
  itemButton: {
    active_tabs: [] as number[],
    next_tab_id: 0,
    flags: Int32.of(
      ImGuiTabBarFlagBits.AutoSelectNewTabs | ImGuiTabBarFlagBits.Reorderable |
        ImGuiTabBarFlagBits.FittingPolicyResizeDown,
    ),
    show_leading_button: Bool.of(true),
    show_trailing_button: Bool.of(true),
  },
};

function demoTabs() {
  // IMGUI_DEMO_MARKER("Widgets/Tabs");
  if (imgui.treeNode("Tabs")) {
    // IMGUI_DEMO_MARKER("Widgets/Tabs/Basic");
    if (imgui.treeNode("Basic")) {
      if (imgui.beginTabBar("MyTabBar", ImGuiTabBarFlagBits.None)) {
        if (imgui.beginTabItem("Avocado")) {
          imgui.text("This is the Avocado tab!\nblah blah blah blah blah");
          imgui.endTabItem();
        }
        if (imgui.beginTabItem("Broccoli")) {
          imgui.text("This is the Broccoli tab!\nblah blah blah blah blah");
          imgui.endTabItem();
        }
        if (imgui.beginTabItem("Cucumber")) {
          imgui.text("This is the Cucumber tab!\nblah blah blah blah blah");
          imgui.endTabItem();
        }
        imgui.endTabBar();
      }
      imgui.separator();
      imgui.treePop();
    }

    // IMGUI_DEMO_MARKER("Widgets/Tabs/Advanced & Close Button");
    if (imgui.treeNode("Advanced & Close Button")) {
      // Expose a couple of the available flags. In most cases you may just call BeginTabBar() with no flags (0).
      const f = statusTabs.advanced.flags;
      imgui.checkboxFlags("Reorderable", f.buffer, ImGuiTabBarFlagBits.Reorderable);
      imgui.checkboxFlags("AutoSelectNewTabs", f.buffer, ImGuiTabBarFlagBits.AutoSelectNewTabs);
      imgui.checkboxFlags("TabListPopupButton", f.buffer, ImGuiTabBarFlagBits.TabListPopupButton);
      imgui.checkboxFlags("NoCloseWithMiddleMouseButton", f.buffer, ImGuiTabBarFlagBits.NoCloseWithMiddleMouseButton);
      if ((f.value & ImGuiTabBarFlagBits.FittingPolicyMask_) == 0) {
        f.value |= ImGuiTabBarFlagBits.FittingPolicyDefault_;
      }
      if (imgui.checkboxFlags("FittingPolicyResizeDown", f.buffer, ImGuiTabBarFlagBits.FittingPolicyResizeDown)) {
        f.value &= ~(ImGuiTabBarFlagBits.FittingPolicyMask_ ^ ImGuiTabBarFlagBits.FittingPolicyResizeDown);
      }
      if (imgui.checkboxFlags("FittingPolicyScroll", f.buffer, ImGuiTabBarFlagBits.FittingPolicyScroll)) {
        f.value &= ~(ImGuiTabBarFlagBits.FittingPolicyMask_ ^ ImGuiTabBarFlagBits.FittingPolicyScroll);
      }

      // Tab Bar
      const names = ["Artichoke", "Beetroot", "Celery", "Daikon"];
      const opened = statusTabs.advanced.opened;
      for (let n = 0; n < opened.length; n++) {
        if (n > 0) imgui.sameLine();
        imgui.checkbox(names[n], opened[n].buffer);
      }

      // Passing a bool* to BeginTabItem() is similar to passing one to Begin():
      // the underlying bool will be set to false when the tab is closed.
      if (imgui.beginTabBar("MyTabBar", f.value)) {
        for (let n = 0; n < opened.length; n++) {
          if (opened[n] && imgui.beginTabItem(names[n], opened[n].buffer, ImGuiTabItemFlagBits.None)) {
            imgui.text(`This is the ${names[n]} tab!`);
            if (n & 1) {
              imgui.text("I am an odd tab.");
            }
            imgui.endTabItem();
          }
        }
        imgui.endTabBar();
      }
      imgui.separator();
      imgui.treePop();
    }

    // IMGUI_DEMO_MARKER("Widgets/Tabs/TabItemButton & Leading-Trailing flags");
    if (imgui.treeNode("TabItemButton & Leading/Trailing flags")) {
      const status = statusTabs.itemButton;
      const active_tabs = status.active_tabs;
      if (status.next_tab_id == 0) { // Initialize with some default tabs
        for (let i = 0; i < 3; i++) {
          active_tabs.push(status.next_tab_id++);
        }
      }

      // TabItemButton() and Leading/Trailing flags are distinct features which we will demo together.
      // (It is possible to submit regular tabs with Leading/Trailing flags, or TabItemButton tabs without Leading/Trailing flags...
      // but they tend to make more sense together)
      const show_leading_button = statusTabs.itemButton.show_leading_button;
      const show_trailing_button = statusTabs.itemButton.show_trailing_button;
      imgui.checkbox("Show Leading TabItemButton()", show_leading_button.buffer);
      imgui.checkbox("Show Trailing TabItemButton()", show_trailing_button.buffer);

      // Expose some other flags which are useful to showcase how they interact with Leading/Trailing tabs
      const flags = status.flags;
      imgui.checkboxFlags("TabListPopupButton", flags.buffer, ImGuiTabBarFlagBits.TabListPopupButton);
      if (imgui.checkboxFlags("FittingPolicyResizeDown", flags.buffer, ImGuiTabBarFlagBits.FittingPolicyResizeDown)) {
        flags.value &= ~(ImGuiTabBarFlagBits.FittingPolicyMask_ ^ ImGuiTabBarFlagBits.FittingPolicyResizeDown);
      }
      if (imgui.checkboxFlags("FittingPolicyScroll", flags.buffer, ImGuiTabBarFlagBits.FittingPolicyScroll)) {
        flags.value &= ~(ImGuiTabBarFlagBits.FittingPolicyMask_ ^ ImGuiTabBarFlagBits.FittingPolicyScroll);
      }

      if (imgui.beginTabBar("MyTabBar", flags.value)) {
        // Demo a Leading TabItemButton(): click the "?" button to open a menu
        if (show_leading_button.value) {
          if (imgui.tabItemButton("?", ImGuiTabItemFlagBits.Leading | ImGuiTabItemFlagBits.NoTooltip)) {
            imgui.openPopup("MyHelpMenu");
          }
        }
        if (imgui.beginPopup("MyHelpMenu")) {
          imgui.selectable("Hello!");
          imgui.endPopup();
        }

        // Demo Trailing Tabs: click the "+" button to add a new tab (in your app you may want to use a font icon instead of the "+")
        // Note that we submit it before the regular tabs, but because of the ImGuiTabItemFlagBits.Trailing flag it will always appear at the end.
        if (show_trailing_button.value) {
          if (imgui.tabItemButton("+", ImGuiTabItemFlagBits.Trailing | ImGuiTabItemFlagBits.NoTooltip)) {
            active_tabs.push(status.next_tab_id++); // Add new tab
          }
        }

        // Submit our regular tabs
        for (let n = 0; n < active_tabs.length;) {
          const open = Bool.of(true);
          const name = active_tabs[n].toString().padStart(4, "0");
          if (imgui.beginTabItem(name, open.buffer, ImGuiTabItemFlagBits.None)) {
            imgui.text(`This is the ${name} tab!`);
            imgui.endTabItem();
          }

          if (!open.value) {
            active_tabs.splice(n, 1);
          } else {
            n++;
          }
        }

        imgui.endTabBar();
      }
      imgui.separator();
      imgui.treePop();
    }
    imgui.treePop();
  }
}

function demoPloting() {
  // // Plot/Graph widgets are not very good.
  // // Consider using a third-party library such as ImPlot: https://github.com/epezent/implot
  // // (see others https://github.com/ocornut/imgui/wiki/Useful-Extensions)
  // IMGUI_DEMO_MARKER("Widgets/Plotting");
  // if (imgui.treeNode("Plotting"))
  // {
  //     static bool animate = true;
  //     imgui.checkbox("Animate", &animate);

  //     // Plot as lines and plot as histogram
  //     IMGUI_DEMO_MARKER("Widgets/Plotting/PlotLines, PlotHistogram");
  //     static float arr[] = { 0.6, 0.1, 1.0, 0.5, 0.92, 0.1, 0.2 };
  //     imgui.plotLines("Frame Times", arr, IM_ARRAYSIZE(arr));
  //     imgui.plotHistogram("Histogram", arr, IM_ARRAYSIZE(arr), 0, NULL, 0.0, 1.0, ImVec2(0, 80.0f));

  //     // Fill an array of contiguous float values to plot
  //     // Tip: If your float aren't contiguous but part of a structure, you can pass a pointer to your first float
  //     // and the sizeof() of your structure in the "stride" parameter.
  //     static float values[90] = {};
  //     static int values_offset = 0;
  //     static double refresh_time = 0.0;
  //     if (!animate || refresh_time == 0.0)
  //         refresh_time = imgui.getTime();
  //     while (refresh_time < imgui.getTime()) // Create data at fixed 60 Hz rate for the demo
  //     {
  //         static float phase = 0.0;
  //         values[values_offset] = cosf(phase);
  //         values_offset = (values_offset + 1) % IM_ARRAYSIZE(values);
  //         phase += 0.10 * values_offset;
  //         refresh_time += 1.0 / 60.0;
  //     }

  //     // Plots can display overlay texts
  //     // (in this example, we will display an average value)
  //     {
  //         float average = 0.0;
  //         for (int n = 0; n < IM_ARRAYSIZE(values); n++)
  //             average += values[n];
  //         average /= (float)IM_ARRAYSIZE(values);
  //         char overlay[32];
  //         sprintf(overlay, "avg %f", average);
  //         imgui.plotLines("Lines", values, IM_ARRAYSIZE(values), values_offset, overlay, -1.0, 1.0, ImVec2(0, 80.0f));
  //     }

  //     // Use functions to generate output
  //     // FIXME: This is rather awkward because current plot API only pass in indices.
  //     // We probably want an API passing floats and user provide sample rate/count.
  //     struct Funcs
  //     {
  //         static float Sin(void*, int i) { return sinf(i * 0.1f); }
  //         static float Saw(void*, int i) { return (i & 1) ? 1.0 : -1.0; }
  //     };
  //     static int func_type = 0, display_count = 70;
  //     imgui.separator();
  //     imgui.setNextItemWidth(imgui.getFontSize() * 8);
  //     imgui.combo("func", &func_type, "Sin\0Saw\0");
  //     imgui.sameLine();
  //     imgui.sliderInt("Sample count", &display_count, 1, 400);
  //     float (*func)(void*, int) = (func_type == 0) ? Funcs::sin : Funcs::saw;
  //     imgui.plotLines("Lines", func, NULL, display_count, 0, NULL, -1.0, 1.0, ImVec2(0, 80));
  //     imgui.plotHistogram("Histogram", func, NULL, display_count, 0, NULL, -1.0, 1.0, ImVec2(0, 80));
  //     imgui.separator();

  //     // Animate a simple progress bar
  //     IMGUI_DEMO_MARKER("Widgets/Plotting/ProgressBar");
  //     static float progress = 0.0, progress_dir = 1.0;
  //     if (animate)
  //     {
  //         progress += progress_dir * 0.4 * imgui.getIO().DeltaTime;
  //         if (progress >= +1.1f) { progress = +1.1; progress_dir *= -1.0; }
  //         if (progress <= -0.1f) { progress = -0.1; progress_dir *= -1.0; }
  //     }

  //     // Typically we would use ImVec2(-1.0,0.0f) or ImVec2(-FLT_MIN,0.0f) to use all available width,
  //     // or ImVec2(width,0.0f) for a specified width. ImVec2(0.0,0.0f) uses ItemWidth.
  //     imgui.progressBar(progress, ImVec2(0.0, 0.0f));
  //     imgui.sameLine(0.0, imgui.getStyle().ItemInnerSpacing.x);
  //     imgui.text("Progress Bar");

  //     float progress_saturated = IM_CLAMP(progress, 0.0, 1.0f);
  //     char buf[32];
  //     sprintf(buf, "%d/%d", (int)(progress_saturated * 1753), 1753);
  //     imgui.progressBar(progress, ImVec2(0.f, 0.f), buf);
  //     imgui.treePop();
  // }
}

function range(n: number): number[] {
  const ret = [] as number[];
  for (let i = 0; i < n; i++) {
    ret.push(i);
  }
  return ret;
}

const statusColor = {
  color: new ImVec4(114.0 / 255.0, 144.0 / 255.0, 154.0 / 255.0, 200.0 / 255.0),
  alpha_preview: Bool.of(true),
  alpha_half_preview: Bool.of(false),
  drag_and_drop: Bool.of(true),
  options_menu: Bool.of(true),
  hdr: Bool.of(false),
  saved_palette_init: true,
  saved_palette: range(32).map((_) => new ImVec4()),
  no_border: Bool.of(false),
  alpha: Bool.of(true),
  alpha_bar: Bool.of(true),
  side_preview: Bool.of(true),
  ref_color: Bool.of(false),
  ref_color_v: new ImVec4(1.0, 0.0, 1.0, 0.5),
  display_mode: Int32.of(0),
  picker_mode: Int32.of(0),
  color_hsv: new ImVec4(0.23, 1.0, 1.0, 1.0),
};
function demoColor() {
  const s = statusColor;
  // IMGUI_DEMO_MARKER("Widgets/Color");
  if (imgui.treeNode("Color/Picker Widgets")) {
    const alpha_preview = s.alpha_preview;
    const alpha_half_preview = s.alpha_half_preview;
    const drag_and_drop = s.drag_and_drop;
    const options_menu = s.options_menu;
    const hdr = s.hdr;
    imgui.checkbox("With Alpha Preview", alpha_preview.buffer);
    imgui.checkbox("With Half Alpha Preview", alpha_half_preview.buffer);
    imgui.checkbox("With Drag and Drop", drag_and_drop.buffer);
    imgui.checkbox("With Options Menu", options_menu.buffer);
    imgui.sameLine();
    helpMarker("Right-click on the individual color widget to show options.");
    imgui.checkbox("With HDR", hdr.buffer);
    imgui.sameLine();
    helpMarker("Currently all this does is to lift the 0..1 limits on dragging widgets.");
    const misc_flags = (hdr.value ? ImGuiColorEditFlagBits.HDR : 0) |
      (drag_and_drop.value ? 0 : ImGuiColorEditFlagBits.NoDragDrop) |
      (alpha_half_preview.value
        ? ImGuiColorEditFlagBits.AlphaPreviewHalf
        : (alpha_preview.value ? ImGuiColorEditFlagBits.AlphaPreview : 0)) |
      (options_menu.value ? 0 : ImGuiColorEditFlagBits.NoOptions);

    {
      // IMGUI_DEMO_MARKER("Widgets/Color/ColorEdit");
      imgui.text("Color widget:");
      imgui.sameLine();
      helpMarker(
        "Click on the color square to open a color picker.\n" +
          "CTRL+click on individual component to input value.\n",
      );
      imgui.colorEdit3("MyColor##1", s.color.buffer, misc_flags);

      // IMGUI_DEMO_MARKER("Widgets/Color/ColorEdit (HSV, with Alpha)");
      imgui.text("Color widget HSV with Alpha:");
      imgui.colorEdit4("MyColor##2", s.color.buffer, ImGuiColorEditFlagBits.DisplayHSV | misc_flags);

      // IMGUI_DEMO_MARKER("Widgets/Color/ColorEdit (float display)");
      imgui.text("Color widget with Float Display:");
      imgui.colorEdit4("MyColor##2f", s.color.buffer, ImGuiColorEditFlagBits.Float | misc_flags);

      // IMGUI_DEMO_MARKER("Widgets/Color/ColorButton (with Picker)");
      imgui.text("Color button with Picker:");
      imgui.sameLine();
      helpMarker(
        "With the ImGuiColorEditFlagBits.NoInputs flag you can hide all the slider/text inputs.\n" +
          "With the ImGuiColorEditFlagBits.NoLabel flag you can pass a non-empty label which will only " +
          "be used for the tooltip and picker popup.",
      );
      imgui.colorEdit4(
        "MyColor##3",
        s.color.buffer,
        ImGuiColorEditFlagBits.NoInputs | ImGuiColorEditFlagBits.NoLabel | misc_flags,
      );
    }

    // IMGUI_DEMO_MARKER("Widgets/Color/ColorButton (with custom Picker popup)");
    {
      imgui.text("Color button with Custom Picker Popup:");

      // Generate a default palette. The palette will persist and can be edited.
      const saved_palette = s.saved_palette;
      if (s.saved_palette_init) {
        for (let n = 0; n < saved_palette.length; n++) {
          const _color = saved_palette[n];
          imgui.colorConvertHSVtoRGB(n / 31.0, 0.8, 0.8, _color.pointer(0), _color.pointer(1), _color.pointer(2));
          _color.w = 1.0; // Alpha
        }
        s.saved_palette_init = false;
      }

      // static ImVec4 backup_color;
      let backup_color = new ImVec4();
      const open_popup = imgui.colorButton("MyColor##3b", s.color, misc_flags);
      imgui.sameLine(0, imgui.getStyle().ItemInnerSpacing.x);
      const show_palette = imgui.button("Palette");
      if (open_popup || show_palette) {
        imgui.openPopup("mypicker");
        backup_color = s.color;
      }
      if (imgui.beginPopup("mypicker")) {
        imgui.text("MY CUSTOM COLOR PICKER WITH AN AMAZING PALETTE!");
        imgui.separator();
        const _flags = misc_flags | ImGuiColorEditFlagBits.NoSidePreview | ImGuiColorEditFlagBits.NoSmallPreview;
        imgui.colorPicker4("##picker", s.color.buffer, _flags);
        imgui.sameLine();

        imgui.beginGroup(); // Lock X position
        imgui.text("Current");
        const _current_flags = ImGuiColorEditFlagBits.NoPicker | ImGuiColorEditFlagBits.AlphaPreviewHalf;
        imgui.colorButton("##current", s.color, _current_flags, new ImVec2(60, 40));
        imgui.text("Previous");

        const _previous_btn_flags = ImGuiColorEditFlagBits.NoPicker | ImGuiColorEditFlagBits.AlphaPreviewHalf;
        if (imgui.colorButton("##previous", backup_color, _previous_btn_flags, new ImVec2(60, 40))) {
          s.color = backup_color;
        }
        imgui.separator();
        imgui.text("Palette");
        for (let n = 0; n < saved_palette.length; n++) {
          imgui.pushID(n);
          if ((n % 8) != 0) {
            imgui.sameLine(0.0, imgui.getStyle().ItemSpacing.y);
          }

          const _color = saved_palette[n];
          const palette_button_flags = ImGuiColorEditFlagBits.NoAlpha | ImGuiColorEditFlagBits.NoPicker |
            ImGuiColorEditFlagBits.NoTooltip;
          if (imgui.colorButton("##palette", _color, palette_button_flags, new ImVec2(20, 20))) {
            s.color = new ImVec4(_color.x, _color.y, _color.z, s.color.w); // Preserve alpha!
          }

          // Allow user to drop colors into each palette entry. Note that ColorButton() is already a
          // drag source by default, unless specifying the ImGuiColorEditFlagBits.NoDragDrop flag.
          if (imgui.beginDragDropTarget()) {
            const color3 = imgui.acceptDragDropPayload(ImGuiPayloadType.Color_3f);
            if (color3) {
              // memcpy((float*)&saved_palette[n], payload->Data, sizeof(float) * 3);
              const view = new Deno.UnsafePointerView(color3);
              _color.x = view.getFloat32(0);
              _color.y = view.getFloat32(4);
              _color.z = view.getFloat32(8);
            }
            const color4 = imgui.acceptDragDropPayload(ImGuiPayloadType.Color_4f);
            if (color4) {
              // memcpy((float*)&saved_palette[n], payload->Data, sizeof(float) * 4);
              const view = new Deno.UnsafePointerView(color4);
              view.copyInto(_color.buffer);
            }
            imgui.endDragDropTarget();
          }

          imgui.popID();
        }
        imgui.endGroup();
        imgui.endPopup();
      }
    }

    // IMGUI_DEMO_MARKER("Widgets/Color/ColorButton (simple)");
    imgui.text("Color button only:");
    imgui.checkbox("ImGuiColorEditFlagBits.NoBorder", s.no_border.buffer);
    const _color_button_flags = misc_flags | (s.no_border.value ? ImGuiColorEditFlagBits.NoBorder : 0);
    imgui.colorButton("MyColor##3c", s.color, _color_button_flags, new ImVec2(80, 80));

    // IMGUI_DEMO_MARKER("Widgets/Color/ColorPicker");
    imgui.text("Color picker:");
    imgui.checkbox("With Alpha", s.alpha.buffer);
    imgui.checkbox("With Alpha Bar", s.alpha_bar.buffer);
    imgui.checkbox("With Side Preview", s.side_preview.buffer);
    if (s.side_preview.value) {
      imgui.sameLine();
      imgui.checkbox("With Ref Color", s.ref_color.buffer);
      if (s.ref_color.value) {
        imgui.sameLine();
        imgui.colorEdit4("##RefColor", s.ref_color_v.buffer, ImGuiColorEditFlagBits.NoInputs | misc_flags);
      }
    }
    imgui.combo("Display Mode", s.display_mode.buffer, ["Auto/Current", "None", "RGB Only", "HSV Only", "Hex Only"]);
    imgui.sameLine();
    helpMarker(
      "ColorEdit defaults to displaying RGB inputs if you don't specify a display mode, " +
        "but the user can change it with a right-click on those inputs.\n\nColorPicker defaults to displaying RGB+HSV+Hex " +
        "if you don't specify a display mode.\n\nYou can change the defaults using SetColorEditOptions().",
    );
    imgui.sameLine();
    helpMarker("When not specified explicitly (Auto/Current mode), user can right-click the picker to change mode.");
    let flags = misc_flags;
    if (!s.alpha.value) flags |= ImGuiColorEditFlagBits.NoAlpha; // This is by default if you call ColorPicker3() instead of ColorPicker4()
    if (s.alpha_bar.value) flags |= ImGuiColorEditFlagBits.AlphaBar;
    if (!s.side_preview.value) flags |= ImGuiColorEditFlagBits.NoSidePreview;
    if (s.picker_mode.value == 1) flags |= ImGuiColorEditFlagBits.PickerHueBar;
    if (s.picker_mode.value == 2) flags |= ImGuiColorEditFlagBits.PickerHueWheel;
    if (s.display_mode.value == 1) flags |= ImGuiColorEditFlagBits.NoInputs; // Disable all RGB/HSV/Hex displays
    if (s.display_mode.value == 2) flags |= ImGuiColorEditFlagBits.DisplayRGB; // Override display mode
    if (s.display_mode.value == 3) flags |= ImGuiColorEditFlagBits.DisplayHSV;
    if (s.display_mode.value == 4) flags |= ImGuiColorEditFlagBits.DisplayHex;
    imgui.colorPicker4("MyColor##4", s.color.buffer, flags, s.ref_color.value ? s.ref_color_v.buffer : null);

    imgui.text("Set defaults in code:");
    imgui.sameLine();
    helpMarker(
      "SetColorEditOptions() is designed to allow you to set boot-time default.\n" +
        "We don't have Push/Pop functions because you can force options on a per-widget basis if needed," +
        "and the user can change non-forced ones with the options menu.\nWe don't have a getter to avoid" +
        "encouraging you to persistently save values that aren't forward-compatible.",
    );
    if (imgui.button("Default: Uint8 + HSV + Hue Bar")) {
      imgui.setColorEditOptions(
        ImGuiColorEditFlagBits.Uint8 | ImGuiColorEditFlagBits.DisplayHSV | ImGuiColorEditFlagBits.PickerHueBar,
      );
    }
    if (imgui.button("Default: Float + HDR + Hue Wheel")) {
      imgui.setColorEditOptions(
        ImGuiColorEditFlagBits.Float | ImGuiColorEditFlagBits.HDR | ImGuiColorEditFlagBits.PickerHueWheel,
      );
    }

    // Always both a small version of both types of pickers (to make it more visible in the demo to people who are skimming quickly through it)
    imgui.text("Both types:");
    const w = (imgui.getContentRegionAvail().x - imgui.getStyle().ItemSpacing.y) * 0.40;
    const _picker_flags = ImGuiColorEditFlagBits.NoSidePreview | ImGuiColorEditFlagBits.NoInputs |
      ImGuiColorEditFlagBits.NoAlpha;
    imgui.setNextItemWidth(w);
    imgui.colorPicker3("##MyColor##5", s.color.buffer, _picker_flags | ImGuiColorEditFlagBits.PickerHueBar);
    imgui.sameLine();
    imgui.setNextItemWidth(w);
    imgui.colorPicker3("##MyColor##6", s.color.buffer, _picker_flags | ImGuiColorEditFlagBits.PickerHueWheel);

    // HSV encoded support (to avoid RGB<>HSV round trips and singularities when S==0 or V==0)
    imgui.spacing();
    imgui.text("HSV encoded colors");
    imgui.sameLine();
    helpMarker(
      "By default, colors are given to ColorEdit and ColorPicker in RGB, but ImGuiColorEditFlagBits.InputHSV" +
        "allows you to store colors as HSV and pass them to ColorEdit and ColorPicker as HSV. This comes with the" +
        "added benefit that you can manipulate hue values with the picker even when saturation or value are zero.",
    );
    imgui.text("Color widget with InputHSV:");
    const _edit_flags = ImGuiColorEditFlagBits.InputHSV | ImGuiColorEditFlagBits.Float;
    imgui.colorEdit4("HSV shown as RGB##1", s.color_hsv.buffer, ImGuiColorEditFlagBits.DisplayRGB | _edit_flags);
    imgui.colorEdit4("HSV shown as HSV##1", s.color_hsv.buffer, ImGuiColorEditFlagBits.DisplayHSV | _edit_flags);
    imgui.dragFloat4("Raw HSV values", s.color_hsv.buffer, 0.01, 0.0, 1.0);

    imgui.treePop();
  }
}

const statusDragAndSlderFlags = {
  flags: Int32.of(ImGuiSliderFlagBits.None),
  drag_f: Float.of(0.5),
  drag_i: Int32.of(50),
  slider_f: Float.of(0.5),
  slider_i: Int32.of(50),
};
function demoDragAndSlderFlags() {
  // IMGUI_DEMO_MARKER("Widgets/Drag and Slider Flags");
  if (imgui.treeNode("Drag/Slider Flags")) {
    const s = statusDragAndSlderFlags;
    // Demonstrate using advanced flags for DragXXX and SliderXXX functions. Note that the flags are the same!
    const flags = s.flags;
    imgui.checkboxFlags("ImGuiSliderFlagBits.AlwaysClamp", flags.buffer, ImGuiSliderFlagBits.AlwaysClamp);
    imgui.sameLine();
    helpMarker("Always clamp value to min/max bounds (if any) when input manually with CTRL+Click.");
    imgui.checkboxFlags("ImGuiSliderFlagBits.Logarithmic", flags.buffer, ImGuiSliderFlagBits.Logarithmic);
    imgui.sameLine();
    helpMarker("Enable logarithmic editing (more precision for small values).");
    imgui.checkboxFlags("ImGuiSliderFlagBits.NoRoundToFormat", flags.buffer, ImGuiSliderFlagBits.NoRoundToFormat);
    imgui.sameLine();
    helpMarker(
      "Disable rounding underlying value to match precision of the format string (e.g. %.3 values are rounded to those 3 digits).",
    );
    imgui.checkboxFlags("ImGuiSliderFlagBits.NoInput", flags.buffer, ImGuiSliderFlagBits.NoInput);
    imgui.sameLine();
    helpMarker("Disable CTRL+Click or Enter key allowing to input text directly into the widget.");

    // Drags
    const drag_f = s.drag_f;
    const drag_i = s.drag_i;
    const FLOAT_MAX = imgui.floatMax();
    imgui.text(`Underlying float value: ${drag_f.value}`);
    imgui.dragFloat("DragFloat (0 -> 1)", drag_f.buffer, 0.005, 0.0, 1.0, "%.3f", flags.value);
    imgui.dragFloat("DragFloat (0 -> +inf)", drag_f.buffer, 0.005, 0.0, FLOAT_MAX, "%.3f", flags.value);
    imgui.dragFloat("DragFloat (-inf -> 1)", drag_f.buffer, 0.005, -FLOAT_MAX, 1.0, "%.3f", flags.value);
    imgui.dragFloat("DragFloat (-inf -> +inf)", drag_f.buffer, 0.005, -FLOAT_MAX, +FLOAT_MAX, "%.3f", flags.value);
    imgui.dragInt("DragInt (0 -> 100)", drag_i.buffer, 0.5, 0, 100, "%d", flags.value);

    // Sliders
    const slider_f = s.slider_f;
    const slider_i = s.slider_i;
    imgui.text(`Underlying float value: ${slider_f}f`);
    imgui.sliderFloat("SliderFloat (0 -> 1)", slider_f.buffer, 0.0, 1.0, "%.3f", flags.value);
    imgui.sliderInt("SliderInt (0 -> 100)", slider_i.buffer, 0, 100, "%d", flags.value);

    imgui.treePop();
  }
}
const statusRange = {
  begin: Float.of(10.0),
  end: Float.of(90.0),
  begin_i: Int32.of(100),
  end_i: Int32.of(1000),
};
function demoRange() {
  // IMGUI_DEMO_MARKER("Widgets/Range Widgets");
  if (imgui.treeNode("Range Widgets")) {
    const s = statusRange;
    imgui.dragFloatRange2(
      "range float",
      s.begin.buffer,
      s.end.buffer,
      0.25,
      0.0,
      100.0,
      "Min: %.1f %%",
      "Max: %.1f %%",
      ImGuiSliderFlagBits.AlwaysClamp,
    );

    imgui.dragIntRange2("range int", s.begin_i.buffer, s.end_i.buffer, 5, 0, 1000, "Min: %d units", "Max: %d units");
    imgui.dragIntRange2(
      "range int (no bounds)",
      s.begin_i.buffer,
      s.end_i.buffer,
      5,
      0,
      0,
      "Min: %d units",
      "Max: %d units",
    );
    imgui.treePop();
  }
}

function demoDataTypes() {
  // IMGUI_DEMO_MARKER("Widgets/Data Types");
  // if (imgui.treeNode("Data Types"))
  // {
  //     // DragScalar/InputScalar/SliderScalar functions allow various data types
  //     // - signed/unsigned
  //     // - 8/16/32/64-bits
  //     // - integer/float/double
  //     // To avoid polluting the public API with all possible combinations, we use the ImGuiDataType enum
  //     // to pass the type, and passing all arguments by pointer.
  //     // This is the reason the test code below creates local variables to hold "zero" "one" etc. for each type.
  //     // In practice, if you frequently use a given type that is not covered by the normal API entry points,
  //     // you can wrap it yourself inside a 1 line function which can take typed argument as value instead of void*,
  //     // and then pass their address to the generic function. For example:
  //     //   bool MySliderU64(const char *label, u64* value, u64 min = 0, u64 max = 0, const char* format = "%lld")
  //     //   {
  //     //      return SliderScalar(label, ImGuiDataType_U64, value, &min, &max, format);
  //     //   }

  //     // Setup limits (as helper variables so we can take their address, as explained above)
  //     // Note: SliderScalar() functions have a maximum usable range of half the natural type maximum, hence the /2.
  //     #ifndef LLONG_MIN
  //     ImS64 LLONG_MIN = -9223372036854775807LL - 1;
  //     ImS64 LLONG_MAX = 9223372036854775807LL;
  //     ImU64 ULLONG_MAX = (2ULL * 9223372036854775807LL + 1);
  //     #endif
  //     const char    s8_zero  = 0,   s8_one  = 1,   s8_fifty  = 50, s8_min  = -128,        s8_max = 127;
  //     const ImU8    u8_zero  = 0,   u8_one  = 1,   u8_fifty  = 50, u8_min  = 0,           u8_max = 255;
  //     const short   s16_zero = 0,   s16_one = 1,   s16_fifty = 50, s16_min = -32768,      s16_max = 32767;
  //     const ImU16   u16_zero = 0,   u16_one = 1,   u16_fifty = 50, u16_min = 0,           u16_max = 65535;
  //     const ImS32   s32_zero = 0,   s32_one = 1,   s32_fifty = 50, s32_min = INT_MIN/2,   s32_max = INT_MAX/2,    s32_hi_a = INT_MAX/2 - 100,    s32_hi_b = INT_MAX/2;
  //     const ImU32   u32_zero = 0,   u32_one = 1,   u32_fifty = 50, u32_min = 0,           u32_max = UINT_MAX/2,   u32_hi_a = UINT_MAX/2 - 100,   u32_hi_b = UINT_MAX/2;
  //     const ImS64   s64_zero = 0,   s64_one = 1,   s64_fifty = 50, s64_min = LLONG_MIN/2, s64_max = LLONG_MAX/2,  s64_hi_a = LLONG_MAX/2 - 100,  s64_hi_b = LLONG_MAX/2;
  //     const ImU64   u64_zero = 0,   u64_one = 1,   u64_fifty = 50, u64_min = 0,           u64_max = ULLONG_MAX/2, u64_hi_a = ULLONG_MAX/2 - 100, u64_hi_b = ULLONG_MAX/2;
  //     const float   f32_zero = 0.f, f32_one = 1.f, f32_lo_a = -10000000000.0, f32_hi_a = +10000000000.0;
  //     const double  f64_zero = 0.,  f64_one = 1.,  f64_lo_a = -1000000000000000.0, f64_hi_a = +1000000000000000.0;

  //     // State
  //     static char   s8_v  = 127;
  //     static ImU8   u8_v  = 255;
  //     static short  s16_v = 32767;
  //     static ImU16  u16_v = 65535;
  //     static ImS32  s32_v = -1;
  //     static ImU32  u32_v = (ImU32)-1;
  //     static ImS64  s64_v = -1;
  //     static ImU64  u64_v = (ImU64)-1;
  //     static float  f32_v = 0.123;
  //     static double f64_v = 90000.01234567890123456789;

  //     const float drag_speed = 0.2;
  //     static bool drag_clamp = false;
  //     IMGUI_DEMO_MARKER("Widgets/Data Types/Drags");
  //     imgui.text("Drags:");
  //     imgui.checkbox("Clamp integers to 0..50", &drag_clamp);
  //     imgui.sameLine(); helpMarker(
  //         "As with every widget in dear imgui, we never modify values unless there is a user interaction.\n"
  //         "You can override the clamping limits by using CTRL+Click to input a value.");
  //     imgui.dragScalar("drag s8",        ImGuiDataType_S8,     &s8_v,  drag_speed, drag_clamp ? &s8_zero  : NULL, drag_clamp ? &s8_fifty  : NULL);
  //     imgui.dragScalar("drag u8",        ImGuiDataType_U8,     &u8_v,  drag_speed, drag_clamp ? &u8_zero  : NULL, drag_clamp ? &u8_fifty  : NULL, "%u ms");
  //     imgui.dragScalar("drag s16",       ImGuiDataType_S16,    &s16_v, drag_speed, drag_clamp ? &s16_zero : NULL, drag_clamp ? &s16_fifty : NULL);
  //     imgui.dragScalar("drag u16",       ImGuiDataType_U16,    &u16_v, drag_speed, drag_clamp ? &u16_zero : NULL, drag_clamp ? &u16_fifty : NULL, "%u ms");
  //     imgui.dragScalar("drag s32",       ImGuiDataType_S32,    &s32_v, drag_speed, drag_clamp ? &s32_zero : NULL, drag_clamp ? &s32_fifty : NULL);
  //     imgui.dragScalar("drag s32 hex",   ImGuiDataType_S32,    &s32_v, drag_speed, drag_clamp ? &s32_zero : NULL, drag_clamp ? &s32_fifty : NULL, "0x%08X");
  //     imgui.dragScalar("drag u32",       ImGuiDataType_U32,    &u32_v, drag_speed, drag_clamp ? &u32_zero : NULL, drag_clamp ? &u32_fifty : NULL, "%u ms");
  //     imgui.dragScalar("drag s64",       ImGuiDataType_S64,    &s64_v, drag_speed, drag_clamp ? &s64_zero : NULL, drag_clamp ? &s64_fifty : NULL);
  //     imgui.dragScalar("drag u64",       ImGuiDataType_U64,    &u64_v, drag_speed, drag_clamp ? &u64_zero : NULL, drag_clamp ? &u64_fifty : NULL);
  //     imgui.dragScalar("drag float",     ImGuiDataType_Float,  &f32_v, 0.005,  &f32_zero, &f32_one, "%f");
  //     imgui.dragScalar("drag float log", ImGuiDataType_Float,  &f32_v, 0.005,  &f32_zero, &f32_one, "%f", ImGuiSliderFlagBits.Logarithmic);
  //     imgui.dragScalar("drag double",    ImGuiDataType_Double, &f64_v, 0.0005, &f64_zero, NULL,     "%.10 grams");
  //     imgui.dragScalar("drag double log",ImGuiDataType_Double, &f64_v, 0.0005, &f64_zero, &f64_one, "0 < %.10 < 1", ImGuiSliderFlagBits.Logarithmic);

  //     IMGUI_DEMO_MARKER("Widgets/Data Types/Sliders");
  //     imgui.text("Sliders");
  //     imgui.sliderScalar("slider s8 full",       ImGuiDataType_S8,     &s8_v,  &s8_min,   &s8_max,   "%d");
  //     imgui.sliderScalar("slider u8 full",       ImGuiDataType_U8,     &u8_v,  &u8_min,   &u8_max,   "%u");
  //     imgui.sliderScalar("slider s16 full",      ImGuiDataType_S16,    &s16_v, &s16_min,  &s16_max,  "%d");
  //     imgui.sliderScalar("slider u16 full",      ImGuiDataType_U16,    &u16_v, &u16_min,  &u16_max,  "%u");
  //     imgui.sliderScalar("slider s32 low",       ImGuiDataType_S32,    &s32_v, &s32_zero, &s32_fifty,"%d");
  //     imgui.sliderScalar("slider s32 high",      ImGuiDataType_S32,    &s32_v, &s32_hi_a, &s32_hi_b, "%d");
  //     imgui.sliderScalar("slider s32 full",      ImGuiDataType_S32,    &s32_v, &s32_min,  &s32_max,  "%d");
  //     imgui.sliderScalar("slider s32 hex",       ImGuiDataType_S32,    &s32_v, &s32_zero, &s32_fifty, "0x%04X");
  //     imgui.sliderScalar("slider u32 low",       ImGuiDataType_U32,    &u32_v, &u32_zero, &u32_fifty,"%u");
  //     imgui.sliderScalar("slider u32 high",      ImGuiDataType_U32,    &u32_v, &u32_hi_a, &u32_hi_b, "%u");
  //     imgui.sliderScalar("slider u32 full",      ImGuiDataType_U32,    &u32_v, &u32_min,  &u32_max,  "%u");
  //     imgui.sliderScalar("slider s64 low",       ImGuiDataType_S64,    &s64_v, &s64_zero, &s64_fifty,"%" IM_PRId64);
  //     imgui.sliderScalar("slider s64 high",      ImGuiDataType_S64,    &s64_v, &s64_hi_a, &s64_hi_b, "%" IM_PRId64);
  //     imgui.sliderScalar("slider s64 full",      ImGuiDataType_S64,    &s64_v, &s64_min,  &s64_max,  "%" IM_PRId64);
  //     imgui.sliderScalar("slider u64 low",       ImGuiDataType_U64,    &u64_v, &u64_zero, &u64_fifty,"%" IM_PRIu64 " ms");
  //     imgui.sliderScalar("slider u64 high",      ImGuiDataType_U64,    &u64_v, &u64_hi_a, &u64_hi_b, "%" IM_PRIu64 " ms");
  //     imgui.sliderScalar("slider u64 full",      ImGuiDataType_U64,    &u64_v, &u64_min,  &u64_max,  "%" IM_PRIu64 " ms");
  //     imgui.sliderScalar("slider float low",     ImGuiDataType_Float,  &f32_v, &f32_zero, &f32_one);
  //     imgui.sliderScalar("slider float low log", ImGuiDataType_Float,  &f32_v, &f32_zero, &f32_one,  "%.10f", ImGuiSliderFlagBits.Logarithmic);
  //     imgui.sliderScalar("slider float high",    ImGuiDataType_Float,  &f32_v, &f32_lo_a, &f32_hi_a, "%e");
  //     imgui.sliderScalar("slider double low",    ImGuiDataType_Double, &f64_v, &f64_zero, &f64_one,  "%.10 grams");
  //     imgui.sliderScalar("slider double low log",ImGuiDataType_Double, &f64_v, &f64_zero, &f64_one,  "%.10f", ImGuiSliderFlagBits.Logarithmic);
  //     imgui.sliderScalar("slider double high",   ImGuiDataType_Double, &f64_v, &f64_lo_a, &f64_hi_a, "%e grams");

  //     imgui.text("Sliders (reverse)");
  //     imgui.sliderScalar("slider s8 reverse",    ImGuiDataType_S8,   &s8_v,  &s8_max,    &s8_min,   "%d");
  //     imgui.sliderScalar("slider u8 reverse",    ImGuiDataType_U8,   &u8_v,  &u8_max,    &u8_min,   "%u");
  //     imgui.sliderScalar("slider s32 reverse",   ImGuiDataType_S32,  &s32_v, &s32_fifty, &s32_zero, "%d");
  //     imgui.sliderScalar("slider u32 reverse",   ImGuiDataType_U32,  &u32_v, &u32_fifty, &u32_zero, "%u");
  //     imgui.sliderScalar("slider s64 reverse",   ImGuiDataType_S64,  &s64_v, &s64_fifty, &s64_zero, "%" IM_PRId64);
  //     imgui.sliderScalar("slider u64 reverse",   ImGuiDataType_U64,  &u64_v, &u64_fifty, &u64_zero, "%" IM_PRIu64 " ms");

  //     IMGUI_DEMO_MARKER("Widgets/Data Types/Inputs");
  //     static bool inputs_step = true;
  //     imgui.text("Inputs");
  //     imgui.checkbox("Show step buttons", &inputs_step);
  //     imgui.inputScalar("input s8",      ImGuiDataType_S8,     &s8_v,  inputs_step ? &s8_one  : NULL, NULL, "%d");
  //     imgui.inputScalar("input u8",      ImGuiDataType_U8,     &u8_v,  inputs_step ? &u8_one  : NULL, NULL, "%u");
  //     imgui.inputScalar("input s16",     ImGuiDataType_S16,    &s16_v, inputs_step ? &s16_one : NULL, NULL, "%d");
  //     imgui.inputScalar("input u16",     ImGuiDataType_U16,    &u16_v, inputs_step ? &u16_one : NULL, NULL, "%u");
  //     imgui.inputScalar("input s32",     ImGuiDataType_S32,    &s32_v, inputs_step ? &s32_one : NULL, NULL, "%d");
  //     imgui.inputScalar("input s32 hex", ImGuiDataType_S32,    &s32_v, inputs_step ? &s32_one : NULL, NULL, "%04X");
  //     imgui.inputScalar("input u32",     ImGuiDataType_U32,    &u32_v, inputs_step ? &u32_one : NULL, NULL, "%u");
  //     imgui.inputScalar("input u32 hex", ImGuiDataType_U32,    &u32_v, inputs_step ? &u32_one : NULL, NULL, "%08X");
  //     imgui.inputScalar("input s64",     ImGuiDataType_S64,    &s64_v, inputs_step ? &s64_one : NULL);
  //     imgui.inputScalar("input u64",     ImGuiDataType_U64,    &u64_v, inputs_step ? &u64_one : NULL);
  //     imgui.inputScalar("input float",   ImGuiDataType_Float,  &f32_v, inputs_step ? &f32_one : NULL);
  //     imgui.inputScalar("input double",  ImGuiDataType_Double, &f64_v, inputs_step ? &f64_one : NULL);

  //     imgui.treePop();
  // }
}

const statusMultiComponent = {
  vec4f: Float32Array.of(0.10, 0.20, 0.30, 0.44),
  vec4i: Int32Array.of(0.10, 0.20, 0.30, 0.44),
};
function demoMultiComponent() {
  // IMGUI_DEMO_MARKER("Widgets/Multi-component Widgets");
  if (imgui.treeNode("Multi-component Widgets")) {
    const s = statusMultiComponent;
    const vec4f = s.vec4f;
    const vec4i = s.vec4i;

    imgui.inputFloat2("input float2", vec4f);
    imgui.dragFloat2("drag float2", vec4f, 0.01, 0.0, 1.0);
    imgui.sliderFloat2("slider float2", vec4f, 0.0, 1.0);
    imgui.inputInt2("input int2", vec4i);
    imgui.dragInt2("drag int2", vec4i, 1, 0, 255);
    imgui.sliderInt2("slider int2", vec4i, 0, 255);
    imgui.spacing();

    imgui.inputFloat3("input float3", vec4f);
    imgui.dragFloat3("drag float3", vec4f, 0.01, 0.0, 1.0);
    imgui.sliderFloat3("slider float3", vec4f, 0.0, 1.0);
    imgui.inputInt3("input int3", vec4i);
    imgui.dragInt3("drag int3", vec4i, 1, 0, 255);
    imgui.sliderInt3("slider int3", vec4i, 0, 255);
    imgui.spacing();

    imgui.inputFloat4("input float4", vec4f);
    imgui.dragFloat4("drag float4", vec4f, 0.01, 0.0, 1.0);
    imgui.sliderFloat4("slider float4", vec4f, 0.0, 1.0);
    imgui.inputInt4("input int4", vec4i);
    imgui.dragInt4("drag int4", vec4i, 1, 0, 255);
    imgui.sliderInt4("slider int4", vec4i, 0, 255);

    imgui.treePop();
  }
}

const statusVerticalSlider = {
  int_value: Int32.of(0),
  values: Float32Array.of(0.0, 0.60, 0.35, 0.9, 0.70, 0.20, 0.0),
  values2: Float32Array.of(0.20, 0.80, 0.40, 0.25),
};
function demoVerticalSlider() {
  // IMGUI_DEMO_MARKER("Widgets/Vertical Sliders");
  if (imgui.treeNode("Vertical Sliders")) {
    const s = statusVerticalSlider;
    const spacing = 4;
    const fontSize = imgui.getFontSize();
    imgui.pushStyleVar(ImGuiStyleVar.ItemSpacing, new ImVec2(spacing, spacing));

    // static let int_value = 0;
    imgui.vSliderInt("##int", new ImVec2(fontSize, 160), s.int_value.buffer, 0, 5);
    imgui.sameLine();

    // static float values[7] = { 0.0, 0.60, 0.35, 0.9, 0.70, 0.20, 0.0 };
    imgui.pushID("set1");
    for (let i = 0; i < 7; i++) {
      if (i > 0) imgui.sameLine();
      imgui.pushID(i);
      imgui.pushStyleColor(ImGuiCol.FrameBg, ImVec4.fromHSV(i / 7.0, 0.5, 0.5));
      imgui.pushStyleColor(ImGuiCol.FrameBgHovered, ImVec4.fromHSV(i / 7.0, 0.6, 0.5));
      imgui.pushStyleColor(ImGuiCol.FrameBgActive, ImVec4.fromHSV(i / 7.0, 0.7, 0.5));
      imgui.pushStyleColor(ImGuiCol.SliderGrab, ImVec4.fromHSV(i / 7.0, 0.9, 0.9));
      imgui.vSliderFloat("##v", new ImVec2(fontSize, 160), s.values.subarray(i), 0.0, 1.0, "");
      if (imgui.isItemActive() || imgui.isItemHovered()) {
        imgui.setTooltip(`${s.values[i].toFixed(3)}`);
      }
      imgui.popStyleColor(4);
      imgui.popID();
    }
    imgui.popID();

    imgui.sameLine();
    imgui.pushID("set2");
    const rows = 3;
    const small_slider_size = new ImVec2(fontSize, (160.0 - (rows - 1) * spacing) / rows);
    for (let nx = 0; nx < 4; nx++) {
      if (nx > 0) imgui.sameLine();
      imgui.beginGroup();
      for (let ny = 0; ny < rows; ny++) {
        imgui.pushID(nx * rows + ny);
        imgui.vSliderFloat("##v", small_slider_size, s.values2.subarray(nx), 0.0, 1.0, "");
        if (imgui.isItemActive() || imgui.isItemHovered()) {
          imgui.setTooltip(`${s.values2[nx].toFixed(3)}`);
        }
        imgui.popID();
      }
      imgui.endGroup();
    }
    imgui.popID();

    imgui.sameLine();
    imgui.pushID("set3");
    for (let i = 0; i < 4; i++) {
      if (i > 0) imgui.sameLine();
      imgui.pushID(i);
      imgui.pushStyleVar(ImGuiStyleVar.GrabMinSize, 40);
      imgui.vSliderFloat("##v", new ImVec2(fontSize * 4, 160), s.values.subarray(i), 0.0, 1.0, "%.2f\nsec");
      imgui.popStyleVar();
      imgui.popID();
    }
    imgui.popID();
    imgui.popStyleVar();
    imgui.treePop();
  }
}
enum Mode {
  Copy,
  Move,
  Swap,
}
const statusDragAndDrop = {
  standard: {
    col1: Float32Array.of(1.0, 0.0, 0.2),
    col2: Float32Array.of(0.4, 0.7, 0.0, 0.5),
  },
  copyAndSwap: {
    mode: Mode.Copy,
    dragPayLoad: 0,
    // deno-fmt-ignore
    names: [ "Bobby", "Beatrice", "Betty", "Brianna", "Barry", "Bernard", "Bibi", "Blaine", "Bryn"],
  },
  simple: {
    item_names: ["Item One", "Item Two", "Item Three", "Item Four", "Item Five"],
  },
};
function demoDragAndDrop() {
  // IMGUI_DEMO_MARKER("Widgets/Drag and drop");
  if (imgui.treeNode("Drag and Drop")) {
    // IMGUI_DEMO_MARKER("Widgets/Drag and drop/Standard widgets");
    if (imgui.treeNode("Drag and drop in standard widgets")) {
      // ColorEdit widgets automatically act as drag source and drag target.
      // They are using standardized payload strings IMGUI_PAYLOAD_TYPE_COLOR_3 and IMGUI_PAYLOAD_TYPE_COLOR_4F
      // to allow your own widgets to use colors in their drag and drop interaction.
      // Also see 'Demo->Widgets->Color/Picker Widgets->Palette' demo.
      helpMarker("You can drag from the color squares.");
      const s = statusDragAndDrop.standard;
      imgui.colorEdit3("color 1", s.col1);
      imgui.colorEdit4("color 2", s.col2);
      imgui.treePop();
    }

    // IMGUI_DEMO_MARKER("Widgets/Drag and drop/Copy-swap items");
    if (imgui.treeNode("Drag and drop to copy/swap items")) {
      const s = statusDragAndDrop.copyAndSwap;
      if (imgui.radioButton("Copy", s.mode == Mode.Copy)) s.mode = Mode.Copy;
      imgui.sameLine();
      if (imgui.radioButton("Move", s.mode == Mode.Move)) s.mode = Mode.Move;
      imgui.sameLine();
      if (imgui.radioButton("Swap", s.mode == Mode.Swap)) s.mode = Mode.Swap;

      const names = s.names;
      for (let n = 0; n < names.length; n++) {
        imgui.pushID(n);
        if ((n % 3) != 0) {
          imgui.sameLine();
        }
        const fontSize = imgui.getFontSize();
        imgui.button(names[n], new ImVec2(fontSize * 5, fontSize * 5));

        // Our buttons are both drag sources and drag targets here!
        if (imgui.beginDragDropSource(ImGuiDragDropFlagBits.None)) {
          // Set payload to carry the index of our item (could be anything)
          // imgui.setDragDropPayload("DND_DEMO_CELL", &n, sizeof(int));

          // here we maintain the payload by ourselves instead of passing them to c++ bindings
          imgui.setDragDropPayload("DND_DEMO_CELL", null, 0);
          s.dragPayLoad = n;

          // Display preview (could be anything, e.g. when dragging an image we could decide to display
          // the filename and a small preview of the image, etc.)
          if (s.mode == Mode.Copy) imgui.text(`Copy ${names[n]}`);
          if (s.mode == Mode.Move) imgui.text(`Move ${names[n]}`);
          if (s.mode == Mode.Swap) imgui.text(`Swap ${names[n]}`);
          imgui.endDragDropSource();
        }
        if (imgui.beginDragDropTarget()) {
          if (imgui.acceptDragDropPayload("DND_DEMO_CELL")) {
            const payload_n = s.dragPayLoad;
            if (s.mode == Mode.Copy) {
              names[n] = names[payload_n];
            }
            if (s.mode == Mode.Move) {
              names[n] = names[payload_n];
              names[payload_n] = "";
            }
            if (s.mode == Mode.Swap) {
              const tmp = names[n];
              names[n] = names[payload_n];
              names[payload_n] = tmp;
            }
          }
          imgui.endDragDropTarget();
        }
        imgui.popID();
      }
      imgui.treePop();
    }

    // IMGUI_DEMO_MARKER("Widgets/Drag and Drop/Drag to reorder items (simple)");
    if (imgui.treeNode("Drag to reorder items (simple)")) {
      // Simple reordering
      helpMarker(
        "We don't use the drag and drop api at all here! " +
          "Instead we query when the item is held but not hovered, and order items accordingly.",
      );
      const item_names = statusDragAndDrop.simple.item_names;
      for (let n = 0; n < item_names.length; n++) {
        const item = item_names[n];
        imgui.selectable(item);

        if (imgui.isItemActive() && !imgui.isItemHovered()) {
          const n_next = n + (imgui.getMouseDragDelta(0).y < 0 ? -1 : 1);
          if (n_next >= 0 && n_next < item_names.length) {
            item_names[n] = item_names[n_next];
            item_names[n_next] = item;
            imgui.resetMouseDragDelta();
          }
        }
      }
      imgui.treePop();
    }

    imgui.treePop();
  }
}

const statusQueryingItem = {
  // deno-fmt-ignore
  item_names: [
    "Text", "Button", "Button (w/ repeat)", "Checkbox", 
    "SliderFloat", "InputText", "InputTextMultiline", "InputFloat",
    "InputFloat3", "ColorEdit4", "Selectable", "MenuItem", 
    "TreeNode", "TreeNode (w/ double-click)", "Combo", "ListBox"
  ],
  item_type: Int32.of(4),
  item_disabled: Bool.of(false),
  b: Bool.of(false),
  col4f: Float32Array.of(1.0, 0.5, 0.0, 1.0),
  str: Utf8Array.empty(16),
  current1: Int32.of(2),
  current2: Int32.of(2),
};
function demoQueryingItem() {
  // IMGUI_DEMO_MARKER("Widgets/Querying Item Status (Edited,Active,Hovered etc.)");
  if (imgui.treeNode("Querying Item Status (Edited/Active/Hovered etc.)")) {
    const s = statusQueryingItem;
    // Select an item type
    const item_names = s.item_names;
    const item_type = s.item_type;
    const item_disabled = s.item_disabled;
    // static bool item_disabled = false;
    imgui.combo("Item Type", s.item_type.buffer, item_names, item_names.length);
    imgui.sameLine();
    helpMarker(
"Testing how various types of items are interacting with the IsItemXXX functions. \
      Note that the bool return value of most ImGui function is generally equivalent to calling imgui.isItemHovered().",
    );
    imgui.checkbox("Item Disabled", item_disabled.buffer);

    // Submit selected items so we can query their status in the code following it.
    let ret = false;
    const b = s.b;
    const col4f = s.col4f;
    const str = s.str;
    if (item_disabled.value) {
      imgui.beginDisabled(true);
    }
    // Testing text items with no identifier/interaction
    if (item_type.value == 0) imgui.text("ITEM: Text");
    // Testing button
    if (item_type.value == 1) ret = imgui.button("ITEM: Button");
    // Testing button (with repeater)
    if (item_type.value == 2) {
      imgui.pushButtonRepeat(true);
      ret = imgui.button("ITEM: Button");
      imgui.popButtonRepeat();
    }
    // Testing checkbox
    if (item_type.value == 3) ret = imgui.checkbox("ITEM: Checkbox", b.buffer);
    // Testing basic item
    if (item_type.value == 4) ret = imgui.sliderFloat("ITEM: SliderFloat", col4f, 0.0, 1.0);
    // Testing input text (which handles tabbing)
    if (item_type.value == 5) ret = imgui.inputText("ITEM: InputText", str.buffer);
    // Testing input text (which uses a child window)
    if (item_type.value == 6) ret = imgui.inputTextMultiline("ITEM: InputTextMultiline", str.buffer);
    // Testing +/- buttons on scalar input
    if (item_type.value == 7) ret = imgui.inputFloat("ITEM: InputFloat", col4f, 1.0);
    // Testing multi-component items (IsItemXXX flags are reported merged)
    if (item_type.value == 8) ret = imgui.inputFloat3("ITEM: InputFloat3", col4f);
    // Testing multi-component items (IsItemXXX flags are reported merged)
    if (item_type.value == 9) ret = imgui.colorEdit4("ITEM: ColorEdit4", col4f);
    // Testing selectable item
    if (item_type.value == 10) ret = imgui.selectable("ITEM: Selectable");
    // Testing menu item (they use ImGuiButtonFlagBits.PressedOnRelease button policy)
    if (item_type.value == 11) ret = imgui.menuItem("ITEM: MenuItem");
    // Testing tree node
    if (item_type.value == 12) {
      ret = imgui.treeNode("ITEM: TreeNode");
      if (ret) imgui.treePop();
    }
    // Testing tree node with ImGuiButtonFlagBits.PressedOnDoubleClick button policy.
    if (item_type.value == 13) {
      ret = imgui.treeNodeEx(
        "ITEM: TreeNode w/ ImGuiTreeNodeFlagBits.OpenOnDoubleClick",
        ImGuiTreeNodeFlagBits.OpenOnDoubleClick | ImGuiTreeNodeFlagBits.NoTreePushOnOpen,
      );
    }
    if (item_type.value == 14) {
      const items = ["Apple", "Banana", "Cherry", "Kiwi"];
      ret = imgui.combo("ITEM: Combo", s.current1.buffer, items, items.length);
    }
    if (item_type.value == 15) {
      const items = ["Apple", "Banana", "Cherry", "Kiwi"];
      ret = imgui.listBox("ITEM: ListBox", s.current2.buffer, items, items.length, items.length);
    }

    const hovered_delay_none = imgui.isItemHovered();
    const hovered_delay_short = imgui.isItemHovered(ImGuiHoveredFlagBits.DelayShort);
    const hovered_delay_normal = imgui.isItemHovered(ImGuiHoveredFlagBits.DelayNormal);

    // Display the values of IsItemHovered() and other common item state functions.
    // Note that the ImGuiHoveredFlagBits.XXX flags can be combined.
    // Because BulletText is an item itself and that would affect the output of IsItemXXX functions,
    // we query every state in a single call to avoid storing them and to simplify the code.

    // deno-fmt-ignore
    imgui.bulletText(
      `Return value = ${ret}\n` +
        `IsItemFocused() = ${imgui.isItemFocused()}\n` +
        `IsItemHovered() = ${imgui.isItemHovered()}\n` +
        `IsItemHovered(AllowWhenBlockedByPopup) = ${ imgui.isItemHovered(ImGuiHoveredFlagBits.AllowWhenBlockedByPopup) }\n` +
        `IsItemHovered(AllowWhenBlockedByActiveItem) = ${ imgui.isItemHovered(ImGuiHoveredFlagBits.AllowWhenBlockedByActiveItem) }\n` +
        `IsItemHovered(AllowWhenOverlapped) = ${imgui.isItemHovered(ImGuiHoveredFlagBits.AllowWhenOverlapped)}\n` +
        `IsItemHovered(AllowWhenDisabled) = ${imgui.isItemHovered(ImGuiHoveredFlagBits.AllowWhenDisabled)}\n` +
        `IsItemHovered(RectOnly) = ${imgui.isItemHovered(ImGuiHoveredFlagBits.RectOnly)}\n` +
        `IsItemActive() = ${imgui.isItemActive()}\n` +
        `IsItemEdited() = ${imgui.isItemEdited()}\n` +
        `IsItemActivated() = ${imgui.isItemActivated()}\n` +
        `IsItemDeactivated() = ${imgui.isItemDeactivated()}\n` +
        `IsItemDeactivatedAfterEdit() = ${imgui.isItemDeactivatedAfterEdit()}\n` +
        `IsItemVisible() = ${imgui.isItemVisible()}\n` +
        `IsItemClicked() = ${imgui.isItemClicked()}\n` +
        `IsItemToggledOpen() = ${imgui.isItemToggledOpen()}\n` +
        `GetItemRectMin() = (${imgui.getItemRectMin().x.toFixed(1)}, ${imgui.getItemRectMin().y.toFixed(1)})\n` +
        `GetItemRectMax() = (${imgui.getItemRectMax().x.toFixed(1)}, ${imgui.getItemRectMax().y.toFixed(1)})\n` +
        `GetItemRectSize() = (${imgui.getItemRectSize().x.toFixed(1)}, ${imgui.getItemRectSize().y.toFixed(1)})`,
    );
    imgui.bulletText(
      `w/ Hovering Delay: None = ${hovered_delay_none}, Fast ${hovered_delay_short}, Normal = ${hovered_delay_normal}`,
    );

    if (item_disabled.value) {
      imgui.endDisabled();
    }

    const buf = Utf8Array.empty(16);
    imgui.inputText("unused", buf.buffer, ImGuiInputTextFlagBits.ReadOnly);
    imgui.sameLine();
    helpMarker(
      "This widget is only here to be able to tab-out of the widgets above and see e.g. Deactivated() status.",
    );

    imgui.treePop();
  }
}

const statusQueryingWidnow = {
  embed_all_inside_a_child_window: Bool.of(false),
  test_window: Bool.of(false),
};

function demoQueryingWindow() {
  // IMGUI_DEMO_MARKER("Widgets/Querying Window Status (Focused,Hovered etc.)");
  if (imgui.treeNode("Querying Window Status (Focused/Hovered etc.)")) {
    const s = statusQueryingWidnow;

    imgui.checkbox(
      "Embed everything inside a child window for testing _RootWindow flag.",
      s.embed_all_inside_a_child_window.buffer,
    );
    if (s.embed_all_inside_a_child_window.value) {
      imgui.beginChild("outer_child", new ImVec2(0, imgui.getFontSize() * 20.0), true);
    }

    // Testing IsWindowFocused() function with its various flags.
    imgui.bulletText(
      `IsWindowFocused() = ${imgui.isWindowFocused()}\n` +
        `IsWindowFocused(_ChildWindows) = ${imgui.isWindowFocused(ImGuiFocusedFlagBits.ChildWindows)}\n` +
        `IsWindowFocused(_ChildWindows|_NoPopupHierarchy) = ${
          imgui.isWindowFocused(ImGuiFocusedFlagBits.ChildWindows | ImGuiFocusedFlagBits.NoPopupHierarchy)
        }\n` +
        `IsWindowFocused(_ChildWindows|_DockHierarchy) = ${
          imgui.isWindowFocused(ImGuiFocusedFlagBits.ChildWindows | ImGuiFocusedFlagBits.DockHierarchy)
        }\n` +
        `IsWindowFocused(_ChildWindows|_RootWindow) = ${
          imgui.isWindowFocused(ImGuiFocusedFlagBits.ChildWindows | ImGuiFocusedFlagBits.RootWindow)
        }\n` +
        `IsWindowFocused(_ChildWindows|_RootWindow|_NoPopupHierarchy) = ${
          imgui.isWindowFocused(
            ImGuiFocusedFlagBits.ChildWindows | ImGuiFocusedFlagBits.RootWindow | ImGuiFocusedFlagBits.NoPopupHierarchy,
          )
        }\n` +
        `IsWindowFocused(_ChildWindows|_RootWindow|_DockHierarchy) = ${
          imgui.isWindowFocused(
            ImGuiFocusedFlagBits.ChildWindows | ImGuiFocusedFlagBits.RootWindow | ImGuiFocusedFlagBits.DockHierarchy,
          )
        }\n` +
        `IsWindowFocused(_RootWindow) = ${imgui.isWindowFocused(ImGuiFocusedFlagBits.RootWindow)}\n` +
        `IsWindowFocused(_RootWindow|_NoPopupHierarchy) = ${
          imgui.isWindowFocused(ImGuiFocusedFlagBits.RootWindow | ImGuiFocusedFlagBits.NoPopupHierarchy)
        }\n` +
        `IsWindowFocused(_RootWindow|_DockHierarchy) = ${
          imgui.isWindowFocused(ImGuiFocusedFlagBits.RootWindow | ImGuiFocusedFlagBits.DockHierarchy)
        }\n` +
        `IsWindowFocused(_AnyWindow) = ${imgui.isWindowFocused(ImGuiFocusedFlagBits.AnyWindow)}\n`,
    );

    // Testing IsWindowHovered() function with its various flags.
    imgui.bulletText(
      `IsWindowHovered() = ${imgui.isWindowHovered()}\n` +
        `IsWindowHovered(_AllowWhenBlockedByPopup) = ${
          imgui.isWindowHovered(ImGuiHoveredFlagBits.AllowWhenBlockedByPopup)
        }\n` +
        `IsWindowHovered(_AllowWhenBlockedByActiveItem) = ${
          imgui.isWindowHovered(ImGuiHoveredFlagBits.AllowWhenBlockedByActiveItem)
        }\n` +
        `IsWindowHovered(_ChildWindows) = ${imgui.isWindowHovered(ImGuiHoveredFlagBits.ChildWindows)}\n` +
        `IsWindowHovered(_ChildWindows|_NoPopupHierarchy) = ${
          imgui.isWindowHovered(ImGuiHoveredFlagBits.ChildWindows | ImGuiHoveredFlagBits.NoPopupHierarchy)
        }\n` +
        `IsWindowHovered(_ChildWindows|_DockHierarchy) = ${
          imgui.isWindowHovered(ImGuiHoveredFlagBits.ChildWindows | ImGuiHoveredFlagBits.DockHierarchy)
        }\n` +
        `IsWindowHovered(_ChildWindows|_RootWindow) = ${
          imgui.isWindowHovered(ImGuiHoveredFlagBits.ChildWindows | ImGuiHoveredFlagBits.RootWindow)
        }\n` +
        `IsWindowHovered(_ChildWindows|_RootWindow|_NoPopupHierarchy) = ${
          imgui.isWindowHovered(
            ImGuiHoveredFlagBits.ChildWindows | ImGuiHoveredFlagBits.RootWindow | ImGuiHoveredFlagBits.NoPopupHierarchy,
          )
        }\n` +
        `IsWindowHovered(_ChildWindows|_RootWindow|_DockHierarchy) = ${
          imgui.isWindowHovered(
            ImGuiHoveredFlagBits.ChildWindows | ImGuiHoveredFlagBits.RootWindow | ImGuiHoveredFlagBits.DockHierarchy,
          )
        }\n` +
        `IsWindowHovered(_RootWindow) = ${imgui.isWindowHovered(ImGuiHoveredFlagBits.RootWindow)}\n` +
        `IsWindowHovered(_RootWindow|_NoPopupHierarchy) = ${
          imgui.isWindowHovered(ImGuiHoveredFlagBits.RootWindow | ImGuiHoveredFlagBits.NoPopupHierarchy)
        }\n` +
        `IsWindowHovered(_RootWindow|_DockHierarchy) = ${
          imgui.isWindowHovered(ImGuiHoveredFlagBits.RootWindow | ImGuiHoveredFlagBits.DockHierarchy)
        }\n` +
        `IsWindowHovered(_ChildWindows|_AllowWhenBlockedByPopup) = ${
          imgui.isWindowHovered(ImGuiHoveredFlagBits.ChildWindows | ImGuiHoveredFlagBits.AllowWhenBlockedByPopup)
        }\n` +
        `IsWindowHovered(_AnyWindow) = ${imgui.isWindowHovered(ImGuiHoveredFlagBits.AnyWindow)}\n`,
    );

    imgui.beginChild("child", new ImVec2(0, 50), true);
    imgui.text("This is another child window for testing the _ChildWindows flag.");
    imgui.endChild();
    if (s.embed_all_inside_a_child_window.value) {
      imgui.endChild();
    }

    // Calling IsItemHovered() after begin returns the hovered status of the title bar.
    // This is useful in particular if you want to create a context menu associated to the title bar of a window.
    // This will also work when docked into a Tab (the Tab replace the Title Bar and guarantee the same properties).
    const test_window = s.test_window;
    imgui.checkbox("Hovered/Active tests after Begin() for title bar testing", test_window.buffer);
    if (test_window.value) {
      // FIXME-DOCK: This window cannot be docked within the ImGui Demo window, this will cause a feedback loop and get them stuck.
      // Could we fix this through an ImGuiWindowClass feature? Or an API call to tag our parent as "don't skip items"?
      imgui.begin("Title bar Hovered/Active tests", test_window.buffer);
      if (imgui.beginPopupContextItem()) { // <-- This is using IsItemHovered()
        if (imgui.menuItem("Close")) test_window.value = false;
        imgui.endPopup();
      }
      imgui.text(
        `IsItemHovered() after begin = ${imgui.isItemHovered()} (== is title bar hovered)\n` +
          `IsItemActive() after begin = ${imgui.isItemActive()} (== is window being clicked/moved)\n`,
      );
      imgui.end();
    }

    imgui.treePop();
  }
}

/**
 * The Checkbox for that is inside the "Disabled" section at the bottom
 */
const disable_all = Bool.of(false);
export function showDemoWindowWidgets() {
  // Most "big" widgets share a common width settings by default. See 'Demo->Layout->Widgets Width' for details.
  // e.g. Use 2/3 of the space for widgets and 1/3 for labels (right align)
  //ImGui::PushItemWidth(-ImGui::GetWindowWidth() * 0.35f);
  // e.g. Leave a fixed amount of width for labels (by passing a negative value), the rest goes to widgets.
  imgui.pushItemWidth(imgui.getFontSize() * -12);

  if (!imgui.collapsingHeader("Widgets")) {
    return;
  }
  if (disable_all.value) {
    imgui.beginDisabled();
  }

  demoBasic();
  demoTree();
  demoClollapsingHeaders();
  demoBullets();
  demoText();
  demoImages();
  demoCombo();
  demoSelectables();
  demoTextInput();
  demoTabs();
  demoPloting();
  demoColor();
  demoDragAndSlderFlags();
  demoRange();
  demoDataTypes();
  demoMultiComponent();
  demoVerticalSlider();
  demoDragAndDrop();
  demoQueryingItem();
  demoQueryingWindow();

  // Demonstrate BeginDisabled/EndDisabled using a checkbox located at the bottom of the section (which is a bit odd:
  // logically we'd have this checkbox at the top of the section, but we don't want this feature to steal that space)
  if (disable_all.value) {
    imgui.endDisabled();
  }

  // IMGUI_DEMO_MARKER("Widgets/Disable Block");
  if (imgui.treeNode("Disable block")) {
    imgui.checkbox("Disable entire section above", disable_all.buffer);
    imgui.sameLine();
    helpMarker("Demonstrate using BeginDisabled()/EndDisabled() across this section.");
    imgui.treePop();
  }

  // IMGUI_DEMO_MARKER("Widgets/Text Filter");
  // if (imgui.treeNode("Text Filter"))
  // {
  //     // Helper class to easy setup a text filter.
  //     // You may want to implement a more feature-full filtering scheme in your own application.
  //     helpMarker("Not a widget per-se, but ImGuiTextFilter is a helper to perform simple filtering on text strings.");
  //     static ImGuiTextFilter filter;
  //     imgui.text("Filter usage:\n"
  //         "  \"\"         display all lines\n"
  //         "  \"xxx\"      display lines containing \"xxx\"\n"
  //         "  \"xxx,yyy\"  display lines containing \"xxx\" or \"yyy\"\n"
  //         "  \"-xxx\"     hide lines containing \"xxx\"");
  //     filter.Draw();
  //     const char* lines[] = { "aaa1.c", "bbb1.c", "ccc1.c", "aaa2.cpp", "bbb2.cpp", "ccc2.cpp", "abc.h", "hello, world" };
  //     for (let i = 0; i < IM_ARRAYSIZE(lines); i++)
  //         if (filter.PassFilter(lines[i]))
  //             imgui.bulletText("%s", lines[i]);
  //     imgui.treePop();
  // }

  imgui.popItemWidth();
}

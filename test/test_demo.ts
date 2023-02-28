import * as imgui from "../mod.ts";
import {
  Bool,
  Double,
  Float,
  ImGuiCol,
  ImGuiCond,
  ImGuiDir,
  ImGuiHoveredFlagBits,
  ImGuiKey,
  ImGuiSliderFlagBits,
  ImGuiTreeNodeFlagBits,
  ImVec2,
  ImVec4,
  Int32,
} from "../mod.ts";

// Helper to display a little (?) mark which shows a tooltip when hovered.
// In your own code you may want to display an actual icon if you are using a merged icon fonts (see docs/FONTS.md)

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

/**
 * The Checkbox for that is inside the "Disabled" section at the bottom
 */
const disable_all = false;

enum Element {
  Fire,
  Earth,
  Air,
  Water,
  COUNT,
}
const status = {
  basic: {
    clicked: 0,
    check: new Bool(true),
    e: 0,
    counter: 0,
    combo: {
      items: [
        "AAAA",
        "BBBB",
        "CCCC",
        "DDDD",
        "EEEE",
        "FFFF",
        "GGGG",
        "HHHH",
        "IIIIIII",
        "JJJJ",
        "KKKKKKK",
      ],
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
  },
  tree: {
    base_flags: Int32.of(
      ImGuiTreeNodeFlagBits.OpenOnArrow |
        ImGuiTreeNodeFlagBits.OpenOnDoubleClick |
        ImGuiTreeNodeFlagBits.SpanAvailWidth,
    ),
    align_label_with_current_x_position: Bool.of(false),
    test_drag_and_drop: Bool.of(false),
    selection_mask: 1 << 2,
    node_clicked: -1,
  },
};

export function showDemoWindowWidgets() {
  // Most "big" widgets share a common width settings by default. See 'Demo->Layout->Widgets Width' for details.
  // e.g. Use 2/3 of the space for widgets and 1/3 for labels (right align)
  //ImGui::PushItemWidth(-ImGui::GetWindowWidth() * 0.35f);
  // e.g. Leave a fixed amount of width for labels (by passing a negative value), the rest goes to widgets.
  imgui.pushItemWidth(imgui.getFontSize() * -12);

  if (!imgui.collapsingHeader("Widgets")) {
    return;
  }
  if (disable_all) {
    imgui.beginDisabled();
  }

  if (imgui.treeNode("Basic")) {
    const basic = status.basic;
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
      imgui.pushStyleColor(
        ImGuiCol.Button,
        imgui.createHSVColor(i / 7.0, 0.6, 0.6),
      );
      imgui.pushStyleColor(
        ImGuiCol.ButtonHovered,
        imgui.createHSVColor(i / 7.0, 0.7, 0.7),
      );
      imgui.pushStyleColor(
        ImGuiCol.ButtonActive,
        imgui.createHSVColor(i / 7.0, 0.8, 0.8),
      );
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
      'Using the simplified one-liner Combo API here.\nRefer to the "Combo" section below for an explanation of how to use the more flexible and general BeginCombo/EndCombo API.',
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
        "You can use the ImGuiInputTextFlags_CallbackResize facility if you need to wire InputText() " +
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

    imgui.dragInt(
      "drag int 0..100",
      drag.i2.buffer,
      1,
      0,
      100,
      "%d%%",
      ImGuiSliderFlagBits.AlwaysClamp,
    );

    imgui.dragFloat("drag float", drag.f1.buffer, 0.005);
    imgui.dragFloat(
      "drag small float",
      drag.f2.buffer,
      0.0001,
      0.0,
      0.0,
      "%.06 ns",
    );

    const slider = basic.slider;
    imgui.sliderInt("slider int", slider.i1.buffer, -1, 3);
    imgui.sameLine();
    helpMarker("CTRL+click to input value.");

    imgui.sliderFloat(
      "slider float",
      slider.f1.buffer,
      0.0,
      1.0,
      "ratio = %.3f",
    );
    imgui.sliderFloat(
      "slider float (log)",
      slider.f2.buffer,
      -10.0,
      10.0,
      "%.4f",
      ImGuiSliderFlagBits.Logarithmic,
    );

    imgui.sliderAngle("slider angle", slider.angle.buffer);

    // Using the format string to display a name instead of an integer.
    // Here we completely omit '%d' from the format string, so it'll only display a name.
    // This technique can also be used with DragInt().
    const elem_name =
      (slider.elem.value >= 0 && slider.elem.value < Element.COUNT)
        ? slider.elems_names[slider.elem.value]
        : "Unknown";
    imgui.sliderInt(
      "slider enum",
      slider.elem.buffer,
      0,
      Element.COUNT - 1,
      elem_name,
    );
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
      const items = [
        "Apple",
        "Banana",
        "Cherry",
        "Kiwi",
        "Mango",
        "Orange",
        "Pineapple",
        "Strawberry",
        "Watermelon",
      ];
      const item_current = Int32.of(1);
      imgui.listBox("listbox", item_current.buffer, items, items.length, 4);
      imgui.sameLine();
      helpMarker(
        'Using the simplified one-liner ListBox API here.\nRefer to the "List boxes" section below for an explanation of how to use the more flexible and general BeginListBox/EndListBox API.',
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
      if (imgui.isItemHovered(ImGuiHoveredFlagBits.DelayNormal)) { // Delay best used on items that highlight on hover, so this not a great example!
        imgui.setTooltip("I am a tooltip with a delay.");
      }

      imgui.sameLine();
      helpMarker(
        "Tooltip are created by using the IsItemHovered() function over any kind of item.",
      );
    }

    imgui.treePop();
  }

  if (imgui.treeNode("Trees")) {
    if (imgui.treeNode("Basic trees")) {
      for (let i = 0; i < 5; i++) {
        // Use SetNextItemOpen() so set the default state of a node to be open. We could
        // also use TreeNodeEx() with the ImGuiTreeNodeFlags_DefaultOpen flag to achieve the same thing!
        if (i == 0) {
          imgui.setNextItemOpen(true, ImGuiCond.Once);
        }

        if (imgui.treeNode(`Child ${i}`)) {
          imgui.text("blah blah");
          imgui.sameLine();
          if (imgui.smallButton("button")) {}
          imgui.treePop();
        }
      }
      imgui.treePop();
    }

    const tree = status.tree;
    if (imgui.treeNode("Advanced, with Selectable nodes")) {
      helpMarker(
        "This is a more typical looking tree with selectable nodes.\n" +
          "Click to select, CTRL+Click to toggle, click on arrows or double-click to open.",
      );
      imgui.checkboxFlags(
        "ImGuiTreeNodeFlags_OpenOnArrow",
        tree.base_flags.buffer,
        ImGuiTreeNodeFlagBits.OpenOnArrow,
      );
      imgui.checkboxFlags(
        "ImGuiTreeNodeFlags_OpenOnDoubleClick",
        tree.base_flags.buffer,
        ImGuiTreeNodeFlagBits.OpenOnDoubleClick,
      );
      imgui.checkboxFlags(
        "ImGuiTreeNodeFlags_SpanAvailWidth",
        tree.base_flags.buffer,
        ImGuiTreeNodeFlagBits.SpanAvailWidth,
      );
      imgui.sameLine();
      helpMarker(
        "Extend hit area to all available width instead of allowing more items to be laid out after the node.",
      );
      imgui.checkboxFlags(
        "ImGuiTreeNodeFlags_SpanFullWidth",
        tree.base_flags.buffer,
        ImGuiTreeNodeFlagBits.SpanFullWidth,
      );
      imgui.checkbox(
        "Align label with current X position",
        tree.align_label_with_current_x_position.buffer,
      );
      imgui.checkbox(
        "Test tree node as drag source",
        tree.test_drag_and_drop.buffer,
      );
      imgui.text("Hello!");
      if (tree.align_label_with_current_x_position.value) {
        imgui.unindent(imgui.getTreeNodeToLabelSpacing());
      }

      // 'selection_mask' is dumb representation of what may be user-side selection state.
      //  You may retain selection state inside or outside your objects in whatever format you see fit.
      // 'node_clicked' is temporary storage of what node we have clicked to process selection at the end
      /// of the loop. May be a pointer to your own node type, etc.
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
            tree.node_clicked = i;
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
          node_flags |= ImGuiTreeNodeFlagBits.Leaf |
            ImGuiTreeNodeFlagBits.NoTreePushOnOpen; // ImGuiTreeNodeFlags_Bullet
          imgui.treeNodeEx(`Selectable Leaf ${i}`, node_flags);
          if (imgui.isItemClicked() && !imgui.isItemToggledOpen()) {
            tree.node_clicked = i;
          }
          if (tree.test_drag_and_drop && imgui.beginDragDropSource()) {
            imgui.setDragDropPayload("_TREENODE", null, 0);
            imgui.text("This is a drag and drop source");
            imgui.endDragDropSource();
          }
        }
      }
      if (tree.node_clicked != -1) {
        // Update selection state
        // (process outside of tree loop to avoid visual inconsistencies during the clicking frame)
        if (imgui.isKeyPressed(ImGuiKey.LeftCtrl)) {
          tree.selection_mask ^= 1 << tree.node_clicked; // CTRL+click to toggle
        } //if (!(selection_mask & (1 << node_clicked))) // Depending on selection behavior you want, may want to preserve selection when clicking on item that is part of the selection
        else {
          tree.selection_mask = 1 << tree.node_clicked; // Click to single-select
        }
      }
      if (tree.align_label_with_current_x_position.value) {
        imgui.indent(imgui.getTreeNodeToLabelSpacing());
      }
      imgui.treePop();
    }
    imgui.treePop();
  }

  // IMGUI_DEMO_MARKER("Widgets/Collapsing Headers");
  // if (imgui.treeNode("Collapsing Headers"))
  // {
  //     static bool closable_group = true;
  //     imgui.checkbox("Show 2nd header", &closable_group);
  //     if (imgui.collapsingHeader("Header", ImGuiTreeNodeFlags_None))
  //     {
  //         imgui.text("IsItemHovered: %d", imgui.isItemHovered());
  //         for (int i = 0; i < 5; i++)
  //             imgui.text("Some content %d", i);
  //     }
  //     if (imgui.collapsingHeader("Header with a close button", &closable_group))
  //     {
  //         imgui.text("IsItemHovered: %d", imgui.isItemHovered());
  //         for (int i = 0; i < 5; i++)
  //             imgui.text("More content %d", i);
  //     }
  //     /*
  //     if (imgui.collapsingHeader("Header with a bullet", ImGuiTreeNodeFlags_Bullet))
  //         imgui.text("IsItemHovered: %d", imgui.isItemHovered());
  //     */
  //     imgui.treePop();
  // }

  // IMGUI_DEMO_MARKER("Widgets/Bullets");
  // if (imgui.treeNode("Bullets"))
  // {
  //     imgui.bulletText("Bullet point 1");
  //     imgui.bulletText("Bullet point 2\nOn multiple lines");
  //     if (imgui.treeNode("Tree node"))
  //     {
  //         imgui.bulletText("Another bullet point");
  //         imgui.treePop();
  //     }
  //     imgui.bullet(); imgui.text("Bullet point 3 (two calls)");
  //     imgui.bullet(); imgui.smallButton("Button");
  //     imgui.treePop();
  // }

  // IMGUI_DEMO_MARKER("Widgets/Text");
  // if (imgui.treeNode("Text"))
  // {
  //     IMGUI_DEMO_MARKER("Widgets/Text/Colored Text");
  //     if (imgui.treeNode("Colorful Text"))
  //     {
  //         // Using shortcut. You can use PushStyleColor()/PopStyleColor() for more flexibility.
  //         imgui.textColored(ImVec4(1.0, 0.0, 1.0, 1.0f), "Pink");
  //         imgui.textColored(ImVec4(1.0, 1.0, 0.0, 1.0f), "Yellow");
  //         imgui.textDisabled("Disabled");
  //         imgui.sameLine(); helpMarker("The TextDisabled color is stored in ImGuiStyle.");
  //         imgui.treePop();
  //     }

  //     IMGUI_DEMO_MARKER("Widgets/Text/Word Wrapping");
  //     if (imgui.treeNode("Word Wrapping"))
  //     {
  //         // Using shortcut. You can use PushTextWrapPos()/PopTextWrapPos() for more flexibility.
  //         imgui.textWrapped(
  //             "This text should automatically wrap on the edge of the window. The current implementation "
  //             "for text wrapping follows simple rules suitable for English and possibly other languages.");
  //         imgui.spacing();

  //         static float wrap_width = 200.0;
  //         imgui.sliderFloat("Wrap width", &wrap_width, -20, 600, "%.0f");

  //         ImDrawList* draw_list = imgui.getWindowDrawList();
  //         for (int n = 0; n < 2; n++)
  //         {
  //             imgui.text("Test paragraph %d:", n);
  //             ImVec2 pos = imgui.getCursorScreenPos();
  //             ImVec2 marker_min = ImVec2(pos.x + wrap_width, pos.y);
  //             ImVec2 marker_max = ImVec2(pos.x + wrap_width + 10, pos.y + imgui.getTextLineHeight());
  //             imgui.pushTextWrapPos(imgui.getCursorPos().x + wrap_width);
  //             if (n == 0)
  //                 imgui.text("The lazy dog is a good dog. This paragraph should fit within %.0 pixels. Testing a 1 character word. The quick brown fox jumps over the lazy dog.", wrap_width);
  //             else
  //                 imgui.text("aaaaaaaa bbbbbbbb, c cccccccc,dddddddd. d eeeeeeee   ffffffff. gggggggg!hhhhhhhh");

  //             // Draw actual text bounding box, following by marker of our expected limit (should not overlap!)
  //             draw_list->AddRect(imgui.getItemRectMin(), imgui.getItemRectMax(), IM_COL32(255, 255, 0, 255));
  //             draw_list->AddRectFilled(marker_min, marker_max, IM_COL32(255, 0, 255, 255));
  //             imgui.popTextWrapPos();
  //         }

  //         imgui.treePop();
  //     }

  //     IMGUI_DEMO_MARKER("Widgets/Text/UTF-8 Text");
  //     if (imgui.treeNode("UTF-8 Text"))
  //     {
  //         // UTF-8 test with Japanese characters
  //         // (Needs a suitable font? Try "Google Noto" or "Arial Unicode". See docs/FONTS.md for details.)
  //         // - From C++11 you can use the u8"my text" syntax to encode literal strings as UTF-8
  //         // - For earlier compiler, you may be able to encode your sources as UTF-8 (e.g. in Visual Studio, you
  //         //   can save your source files as 'UTF-8 without signature').
  //         // - FOR THIS DEMO FILE ONLY, BECAUSE WE WANT TO SUPPORT OLD COMPILERS, WE ARE *NOT* INCLUDING RAW UTF-8
  //         //   CHARACTERS IN THIS SOURCE FILE. Instead we are encoding a few strings with hexadecimal constants.
  //         //   Don't do this in your application! Please use u8"text in any language" in your application!
  //         // Note that characters values are preserved even by InputText() if the font cannot be displayed,
  //         // so you can safely copy & paste garbled characters into another application.
  //         imgui.textWrapped(
  //             "CJK text will only appear if the font was loaded with the appropriate CJK character ranges. "
  //             "Call io.Fonts->AddFontFromFileTTF() manually to load extra character ranges. "
  //             "Read docs/FONTS.md for details.");
  //         imgui.text("Hiragana: \xe3\x81\x8b\xe3\x81\x8d\xe3\x81\x8f\xe3\x81\x91\xe3\x81\x93 (kakikukeko)"); // Normally we would use u8"blah blah" with the proper characters directly in the string.
  //         imgui.text("Kanjis: \xe6\x97\xa5\xe6\x9c\xac\xe8\xaa\x9e (nihongo)");
  //         static char buf[32] = "\xe6\x97\xa5\xe6\x9c\xac\xe8\xaa\x9e";
  //         //static char buf[32] = u8"NIHONGO"; // <- this is how you would write it with C++11, using real kanjis
  //         imgui.inputText("UTF-8 input", buf, IM_ARRAYSIZE(buf));
  //         imgui.treePop();
  //     }
  //     imgui.treePop();
  // }

  // IMGUI_DEMO_MARKER("Widgets/Images");
  // if (imgui.treeNode("Images"))
  // {
  //     ImGuiIO& io = imgui.getIO();
  //     imgui.textWrapped(
  //         "Below we are displaying the font texture (which is the only texture we have access to in this demo). "
  //         "Use the 'ImTextureID' type as storage to pass pointers or identifier to your own texture data. "
  //         "Hover the texture for a zoomed view!");

  //     // Below we are displaying the font texture because it is the only texture we have access to inside the demo!
  //     // Remember that ImTextureID is just storage for whatever you want it to be. It is essentially a value that
  //     // will be passed to the rendering backend via the ImDrawCmd structure.
  //     // If you use one of the default imgui_impl_XXXX.cpp rendering backend, they all have comments at the top
  //     // of their respective source file to specify what they expect to be stored in ImTextureID, for example:
  //     // - The imgui_impl_dx11.cpp renderer expect a 'ID3D11ShaderResourceView*' pointer
  //     // - The imgui_impl_opengl3.cpp renderer expect a GLuint OpenGL texture identifier, etc.
  //     // More:
  //     // - If you decided that ImTextureID = MyEngineTexture*, then you can pass your MyEngineTexture* pointers
  //     //   to imgui.image(), and gather width/height through your own functions, etc.
  //     // - You can use ShowMetricsWindow() to inspect the draw data that are being passed to your renderer,
  //     //   it will help you debug issues if you are confused about it.
  //     // - Consider using the lower-level ImDrawList::addImage() API, via imgui.getWindowDrawList()->AddImage().
  //     // - Read https://github.com/ocornut/imgui/blob/master/docs/FAQ.md
  //     // - Read https://github.com/ocornut/imgui/wiki/Image-Loading-and-Displaying-Examples
  //     ImTextureID my_tex_id = io.Fonts->TexID;
  //     float my_tex_w = (float)io.Fonts->TexWidth;
  //     float my_tex_h = (float)io.Fonts->TexHeight;
  //     {
  //         imgui.text("%.0fx%.0f", my_tex_w, my_tex_h);
  //         ImVec2 pos = imgui.getCursorScreenPos();
  //         ImVec2 uv_min = ImVec2(0.0, 0.0f);                 // Top-left
  //         ImVec2 uv_max = ImVec2(1.0, 1.0f);                 // Lower-right
  //         ImVec4 tint_col = ImVec4(1.0, 1.0, 1.0, 1.0f);   // No tint
  //         ImVec4 border_col = ImVec4(1.0, 1.0, 1.0, 0.5f); // 50% opaque white
  //         imgui.image(my_tex_id, ImVec2(my_tex_w, my_tex_h), uv_min, uv_max, tint_col, border_col);
  //         if (imgui.isItemHovered())
  //         {
  //             imgui.beginTooltip();
  //             float region_sz = 32.0;
  //             float region_x = io.MousePos.x - pos.x - region_sz * 0.5;
  //             float region_y = io.MousePos.y - pos.y - region_sz * 0.5;
  //             float zoom = 4.0;
  //             if (region_x < 0.0f) { region_x = 0.0; }
  //             else if (region_x > my_tex_w - region_sz) { region_x = my_tex_w - region_sz; }
  //             if (region_y < 0.0f) { region_y = 0.0; }
  //             else if (region_y > my_tex_h - region_sz) { region_y = my_tex_h - region_sz; }
  //             imgui.text("Min: (%.2, %.2f)", region_x, region_y);
  //             imgui.text("Max: (%.2, %.2f)", region_x + region_sz, region_y + region_sz);
  //             ImVec2 uv0 = ImVec2((region_x) / my_tex_w, (region_y) / my_tex_h);
  //             ImVec2 uv1 = ImVec2((region_x + region_sz) / my_tex_w, (region_y + region_sz) / my_tex_h);
  //             imgui.image(my_tex_id, ImVec2(region_sz * zoom, region_sz * zoom), uv0, uv1, tint_col, border_col);
  //             imgui.endTooltip();
  //         }
  //     }

  //     IMGUI_DEMO_MARKER("Widgets/Images/Textured buttons");
  //     imgui.textWrapped("And now some textured buttons..");
  //     static int pressed_count = 0;
  //     for (int i = 0; i < 8; i++)
  //     {
  //         // UV coordinates are often (0.0, 0.0f) and (1.0, 1.0f) to display an entire textures.
  //         // Here are trying to display only a 32x32 pixels area of the texture, hence the UV computation.
  //         // Read about UV coordinates here: https://github.com/ocornut/imgui/wiki/Image-Loading-and-Displaying-Examples
  //         imgui.pushID(i);
  //         if (i > 0)
  //             imgui.pushStyleVar(ImGuiStyleVar_FramePadding, ImVec2(i - 1.0, i - 1.0f));
  //         ImVec2 size = ImVec2(32.0, 32.0f);                         // Size of the image we want to make visible
  //         ImVec2 uv0 = ImVec2(0.0, 0.0f);                            // UV coordinates for lower-left
  //         ImVec2 uv1 = ImVec2(32.0 / my_tex_w, 32.0 / my_tex_h);    // UV coordinates for (32,32) in our texture
  //         ImVec4 bg_col = ImVec4(0.0, 0.0, 0.0, 1.0f);             // Black background
  //         ImVec4 tint_col = ImVec4(1.0, 1.0, 1.0, 1.0f);           // No tint
  //         if (imgui.imageButton("", my_tex_id, size, uv0, uv1, bg_col, tint_col))
  //             pressed_count += 1;
  //         if (i > 0)
  //             imgui.popStyleVar();
  //         imgui.popID();
  //         imgui.sameLine();
  //     }
  //     imgui.newLine();
  //     imgui.text("Pressed %d times.", pressed_count);
  //     imgui.treePop();
  // }

  // IMGUI_DEMO_MARKER("Widgets/Combo");
  // if (imgui.treeNode("Combo"))
  // {
  //     // Combo Boxes are also called "Dropdown" in other systems
  //     // Expose flags as checkbox for the demo
  //     static ImGuiComboFlags flags = 0;
  //     imgui.checkboxFlags("ImGuiComboFlags_PopupAlignLeft", &flags, ImGuiComboFlags_PopupAlignLeft);
  //     imgui.sameLine(); helpMarker("Only makes a difference if the popup is larger than the combo");
  //     if (imgui.checkboxFlags("ImGuiComboFlags_NoArrowButton", &flags, ImGuiComboFlags_NoArrowButton))
  //         flags &= ~ImGuiComboFlags_NoPreview;     // Clear the other flag, as we cannot combine both
  //     if (imgui.checkboxFlags("ImGuiComboFlags_NoPreview", &flags, ImGuiComboFlags_NoPreview))
  //         flags &= ~ImGuiComboFlags_NoArrowButton; // Clear the other flag, as we cannot combine both

  //     // Using the generic BeginCombo() API, you have full control over how to display the combo contents.
  //     // (your selection data could be an index, a pointer to the object, an id for the object, a flag intrusively
  //     // stored in the object itself, etc.)
  //     const char* items[] = { "AAAA", "BBBB", "CCCC", "DDDD", "EEEE", "FFFF", "GGGG", "HHHH", "IIII", "JJJJ", "KKKK", "LLLLLLL", "MMMM", "OOOOOOO" };
  //     static int item_current_idx = 0; // Here we store our selection data as an index.
  //     const char* combo_preview_value = items[item_current_idx];  // Pass in the preview value visible before opening the combo (it could be anything)
  //     if (imgui.beginCombo("combo 1", combo_preview_value, flags))
  //     {
  //         for (int n = 0; n < IM_ARRAYSIZE(items); n++)
  //         {
  //             const bool is_selected = (item_current_idx == n);
  //             if (imgui.selectable(items[n], is_selected))
  //                 item_current_idx = n;

  //             // Set the initial focus when opening the combo (scrolling + keyboard navigation focus)
  //             if (is_selected)
  //                 imgui.setItemDefaultFocus();
  //         }
  //         imgui.endCombo();
  //     }

  //     // Simplified one-liner Combo() API, using values packed in a single constant string
  //     // This is a convenience for when the selection set is small and known at compile-time.
  //     static int item_current_2 = 0;
  //     imgui.combo("combo 2 (one-liner)", &item_current_2, "aaaa\0bbbb\0cccc\0dddd\0eeee\0\0");

  //     // Simplified one-liner Combo() using an array of const char*
  //     // This is not very useful (may obsolete): prefer using BeginCombo()/EndCombo() for full control.
  //     static int item_current_3 = -1; // If the selection isn't within 0..count, Combo won't display a preview
  //     imgui.combo("combo 3 (array)", &item_current_3, items, IM_ARRAYSIZE(items));

  //     // Simplified one-liner Combo() using an accessor function
  //     struct Funcs { static bool ItemGetter(void* data, int n, const char** out_str) { *out_str = ((const char**)data)[n]; return true; } };
  //     static int item_current_4 = 0;
  //     imgui.combo("combo 4 (function)", &item_current_4, &Funcs::itemGetter, items, IM_ARRAYSIZE(items));

  //     imgui.treePop();
  // }

  // IMGUI_DEMO_MARKER("Widgets/List Boxes");
  // if (imgui.treeNode("List boxes"))
  // {
  //     // Using the generic BeginListBox() API, you have full control over how to display the combo contents.
  //     // (your selection data could be an index, a pointer to the object, an id for the object, a flag intrusively
  //     // stored in the object itself, etc.)
  //     const char* items[] = { "AAAA", "BBBB", "CCCC", "DDDD", "EEEE", "FFFF", "GGGG", "HHHH", "IIII", "JJJJ", "KKKK", "LLLLLLL", "MMMM", "OOOOOOO" };
  //     static int item_current_idx = 0; // Here we store our selection data as an index.
  //     if (imgui.beginListBox("listbox 1"))
  //     {
  //         for (int n = 0; n < IM_ARRAYSIZE(items); n++)
  //         {
  //             const bool is_selected = (item_current_idx == n);
  //             if (imgui.selectable(items[n], is_selected))
  //                 item_current_idx = n;

  //             // Set the initial focus when opening the combo (scrolling + keyboard navigation focus)
  //             if (is_selected)
  //                 imgui.setItemDefaultFocus();
  //         }
  //         imgui.endListBox();
  //     }

  //     // Custom size: use all width, 5 items tall
  //     imgui.text("Full-width:");
  //     if (imgui.beginListBox("##listbox 2", ImVec2(-FLT_MIN, 5 * imgui.getTextLineHeightWithSpacing())))
  //     {
  //         for (int n = 0; n < IM_ARRAYSIZE(items); n++)
  //         {
  //             const bool is_selected = (item_current_idx == n);
  //             if (imgui.selectable(items[n], is_selected))
  //                 item_current_idx = n;

  //             // Set the initial focus when opening the combo (scrolling + keyboard navigation focus)
  //             if (is_selected)
  //                 imgui.setItemDefaultFocus();
  //         }
  //         imgui.endListBox();
  //     }

  //     imgui.treePop();
  // }

  // IMGUI_DEMO_MARKER("Widgets/Selectables");
  // if (imgui.treeNode("Selectables"))
  // {
  //     // Selectable() has 2 overloads:
  //     // - The one taking "bool selected" as a read-only selection information.
  //     //   When Selectable() has been clicked it returns true and you can alter selection state accordingly.
  //     // - The one taking "bool* p_selected" as a read-write selection information (convenient in some cases)
  //     // The earlier is more flexible, as in real application your selection may be stored in many different ways
  //     // and not necessarily inside a bool value (e.g. in flags within objects, as an external list, etc).
  //     IMGUI_DEMO_MARKER("Widgets/Selectables/Basic");
  //     if (imgui.treeNode("Basic"))
  //     {
  //         static bool selection[5] = { false, true, false, false, false };
  //         imgui.selectable("1. I am selectable", &selection[0]);
  //         imgui.selectable("2. I am selectable", &selection[1]);
  //         imgui.text("(I am not selectable)");
  //         imgui.selectable("4. I am selectable", &selection[3]);
  //         if (imgui.selectable("5. I am double clickable", selection[4], ImGuiSelectableFlags_AllowDoubleClick))
  //             if (imgui.isMouseDoubleClicked(0))
  //                 selection[4] = !selection[4];
  //         imgui.treePop();
  //     }
  //     IMGUI_DEMO_MARKER("Widgets/Selectables/Single Selection");
  //     if (imgui.treeNode("Selection State: Single Selection"))
  //     {
  //         static int selected = -1;
  //         for (int n = 0; n < 5; n++)
  //         {
  //             char buf[32];
  //             sprintf(buf, "Object %d", n);
  //             if (imgui.selectable(buf, selected == n))
  //                 selected = n;
  //         }
  //         imgui.treePop();
  //     }
  //     IMGUI_DEMO_MARKER("Widgets/Selectables/Multiple Selection");
  //     if (imgui.treeNode("Selection State: Multiple Selection"))
  //     {
  //         helpMarker("Hold CTRL and click to select multiple items.");
  //         static bool selection[5] = { false, false, false, false, false };
  //         for (int n = 0; n < 5; n++)
  //         {
  //             char buf[32];
  //             sprintf(buf, "Object %d", n);
  //             if (imgui.selectable(buf, selection[n]))
  //             {
  //                 if (!imgui.getIO().KeyCtrl)    // Clear selection when CTRL is not held
  //                     memset(selection, 0, sizeof(selection));
  //                 selection[n] ^= 1;
  //             }
  //         }
  //         imgui.treePop();
  //     }
  //     IMGUI_DEMO_MARKER("Widgets/Selectables/Rendering more text into the same line");
  //     if (imgui.treeNode("Rendering more text into the same line"))
  //     {
  //         // Using the Selectable() override that takes "bool* p_selected" parameter,
  //         // this function toggle your bool value automatically.
  //         static bool selected[3] = { false, false, false };
  //         imgui.selectable("main.c",    &selected[0]); imgui.sameLine(300); imgui.text(" 2,345 bytes");
  //         imgui.selectable("Hello.cpp", &selected[1]); imgui.sameLine(300); imgui.text("12,345 bytes");
  //         imgui.selectable("Hello.h",   &selected[2]); imgui.sameLine(300); imgui.text(" 2,345 bytes");
  //         imgui.treePop();
  //     }
  //     IMGUI_DEMO_MARKER("Widgets/Selectables/In columns");
  //     if (imgui.treeNode("In columns"))
  //     {
  //         static bool selected[10] = {};

  //         if (imgui.beginTable("split1", 3, ImGuiTableFlags_Resizable | ImGuiTableFlags_NoSavedSettings | ImGuiTableFlags_Borders))
  //         {
  //             for (int i = 0; i < 10; i++)
  //             {
  //                 char label[32];
  //                 sprintf(label, "Item %d", i);
  //                 imgui.tableNextColumn();
  //                 imgui.selectable(label, &selected[i]); // FIXME-TABLE: Selection overlap
  //             }
  //             imgui.endTable();
  //         }
  //         imgui.spacing();
  //         if (imgui.beginTable("split2", 3, ImGuiTableFlags_Resizable | ImGuiTableFlags_NoSavedSettings | ImGuiTableFlags_Borders))
  //         {
  //             for (int i = 0; i < 10; i++)
  //             {
  //                 char label[32];
  //                 sprintf(label, "Item %d", i);
  //                 imgui.tableNextRow();
  //                 imgui.tableNextColumn();
  //                 imgui.selectable(label, &selected[i], ImGuiSelectableFlags_SpanAllColumns);
  //                 imgui.tableNextColumn();
  //                 imgui.text("Some other contents");
  //                 imgui.tableNextColumn();
  //                 imgui.text("123456");
  //             }
  //             imgui.endTable();
  //         }
  //         imgui.treePop();
  //     }
  //     IMGUI_DEMO_MARKER("Widgets/Selectables/Grid");
  //     if (imgui.treeNode("Grid"))
  //     {
  //         static char selected[4][4] = { { 1, 0, 0, 0 }, { 0, 1, 0, 0 }, { 0, 0, 1, 0 }, { 0, 0, 0, 1 } };

  //         // Add in a bit of silly fun...
  //         const float time = (float)imgui.getTime();
  //         const bool winning_state = memchr(selected, 0, sizeof(selected)) == NULL; // If all cells are selected...
  //         if (winning_state)
  //             imgui.pushStyleVar(ImGuiStyleVar_SelectableTextAlign, ImVec2(0.5 + 0.5 * cosf(time * 2.0f), 0.5 + 0.5 * sinf(time * 3.0f)));

  //         for (int y = 0; y < 4; y++)
  //             for (int x = 0; x < 4; x++)
  //             {
  //                 if (x > 0)
  //                     imgui.sameLine();
  //                 imgui.pushID(y * 4 + x);
  //                 if (imgui.selectable("Sailor", selected[y][x] != 0, 0, ImVec2(50, 50)))
  //                 {
  //                     // Toggle clicked cell + toggle neighbors
  //                     selected[y][x] ^= 1;
  //                     if (x > 0) { selected[y][x - 1] ^= 1; }
  //                     if (x < 3) { selected[y][x + 1] ^= 1; }
  //                     if (y > 0) { selected[y - 1][x] ^= 1; }
  //                     if (y < 3) { selected[y + 1][x] ^= 1; }
  //                 }
  //                 imgui.popID();
  //             }

  //         if (winning_state)
  //             imgui.popStyleVar();
  //         imgui.treePop();
  //     }
  //     IMGUI_DEMO_MARKER("Widgets/Selectables/Alignment");
  //     if (imgui.treeNode("Alignment"))
  //     {
  //         helpMarker(
  //             "By default, Selectables uses style.SelectableTextAlign but it can be overridden on a per-item "
  //             "basis using PushStyleVar(). You'll probably want to always keep your default situation to "
  //             "left-align otherwise it becomes difficult to layout multiple items on a same line");
  //         static bool selected[3 * 3] = { true, false, true, false, true, false, true, false, true };
  //         for (int y = 0; y < 3; y++)
  //         {
  //             for (int x = 0; x < 3; x++)
  //             {
  //                 ImVec2 alignment = ImVec2((float)x / 2.0, (float)y / 2.0f);
  //                 char name[32];
  //                 sprintf(name, "(%.1,%.1f)", alignment.x, alignment.y);
  //                 if (x > 0) imgui.sameLine();
  //                 imgui.pushStyleVar(ImGuiStyleVar_SelectableTextAlign, alignment);
  //                 imgui.selectable(name, &selected[3 * y + x], ImGuiSelectableFlags_None, ImVec2(80, 80));
  //                 imgui.popStyleVar();
  //             }
  //         }
  //         imgui.treePop();
  //     }
  //     imgui.treePop();
  // }

  // // To wire InputText() with std::string or any other custom string type,
  // // see the "Text Input > Resize Callback" section of this demo, and the misc/cpp/imgui_stdlib.h file.
  // IMGUI_DEMO_MARKER("Widgets/Text Input");
  // if (imgui.treeNode("Text Input"))
  // {
  //     IMGUI_DEMO_MARKER("Widgets/Text Input/Multi-line Text Input");
  //     if (imgui.treeNode("Multi-line Text Input"))
  //     {
  //         // Note: we are using a fixed-sized buffer for simplicity here. See ImGuiInputTextFlags_CallbackResize
  //         // and the code in misc/cpp/imgui_stdlib.h for how to setup InputText() for dynamically resizing strings.
  //         static char text[1024 * 16] =
  //             "/*\n"
  //             " The Pentium F00 bug, shorthand for F0 0 C7 C8,\n"
  //             " the hexadecimal encoding of one offending instruction,\n"
  //             " more formally, the invalid operand with locked CMPXCHG8B\n"
  //             " instruction bug, is a design flaw in the majority of\n"
  //             " Intel Pentium, Pentium MMX, and Pentium OverDrive\n"
  //             " processors (all in the P5 microarchitecture).\n"
  //             "*/\n\n"
  //             "label:\n"
  //             "\tlock cmpxchg8b eax\n";

  //         static ImGuiInputTextFlags flags = ImGuiInputTextFlags_AllowTabInput;
  //         helpMarker("You can use the ImGuiInputTextFlags_CallbackResize facility if you need to wire InputTextMultiline() to a dynamic string type. See misc/cpp/imgui_stdlib.h for an example. (This is not demonstrated in imgui_demo.cpp because we don't want to include <string> in here)");
  //         imgui.checkboxFlags("ImGuiInputTextFlags_ReadOnly", &flags, ImGuiInputTextFlags_ReadOnly);
  //         imgui.checkboxFlags("ImGuiInputTextFlags_AllowTabInput", &flags, ImGuiInputTextFlags_AllowTabInput);
  //         imgui.checkboxFlags("ImGuiInputTextFlags_CtrlEnterForNewLine", &flags, ImGuiInputTextFlags_CtrlEnterForNewLine);
  //         imgui.inputTextMultiline("##source", text, IM_ARRAYSIZE(text), ImVec2(-FLT_MIN, imgui.getTextLineHeight() * 16), flags);
  //         imgui.treePop();
  //     }

  //     IMGUI_DEMO_MARKER("Widgets/Text Input/Filtered Text Input");
  //     if (imgui.treeNode("Filtered Text Input"))
  //     {
  //         struct TextFilters
  //         {
  //             // Return 0 (pass) if the character is 'i' or 'm' or 'g' or 'u' or 'i'
  //             static int FilterImGuiLetters(ImGuiInputTextCallbackData* data)
  //             {
  //                 if (data->EventChar < 256 && strchr("imgui", (char)data->EventChar))
  //                     return 0;
  //                 return 1;
  //             }
  //         };

  //         static char buf1[64] = ""; imgui.inputText("default",     buf1, 64);
  //         static char buf2[64] = ""; imgui.inputText("decimal",     buf2, 64, ImGuiInputTextFlags_CharsDecimal);
  //         static char buf3[64] = ""; imgui.inputText("hexadecimal", buf3, 64, ImGuiInputTextFlags_CharsHexadecimal | ImGuiInputTextFlags_CharsUppercase);
  //         static char buf4[64] = ""; imgui.inputText("uppercase",   buf4, 64, ImGuiInputTextFlags_CharsUppercase);
  //         static char buf5[64] = ""; imgui.inputText("no blank",    buf5, 64, ImGuiInputTextFlags_CharsNoBlank);
  //         static char buf6[64] = ""; imgui.inputText("\"imgui\" letters", buf6, 64, ImGuiInputTextFlags_CallbackCharFilter, TextFilters::filterImGuiLetters);
  //         imgui.treePop();
  //     }

  //     IMGUI_DEMO_MARKER("Widgets/Text Input/Password input");
  //     if (imgui.treeNode("Password Input"))
  //     {
  //         static char password[64] = "password123";
  //         imgui.inputText("password", password, IM_ARRAYSIZE(password), ImGuiInputTextFlags_Password);
  //         imgui.sameLine(); helpMarker("Display all characters as '*'.\nDisable clipboard cut and copy.\nDisable logging.\n");
  //         imgui.inputTextWithHint("password (w/ hint)", "<password>", password, IM_ARRAYSIZE(password), ImGuiInputTextFlags_Password);
  //         imgui.inputText("password (clear)", password, IM_ARRAYSIZE(password));
  //         imgui.treePop();
  //     }

  //     if (imgui.treeNode("Completion, History, Edit Callbacks"))
  //     {
  //         struct Funcs
  //         {
  //             static int MyCallback(ImGuiInputTextCallbackData* data)
  //             {
  //                 if (data->EventFlag == ImGuiInputTextFlags_CallbackCompletion)
  //                 {
  //                     data->InsertChars(data->CursorPos, "..");
  //                 }
  //                 else if (data->EventFlag == ImGuiInputTextFlags_CallbackHistory)
  //                 {
  //                     if (data->EventKey == ImGuiKey_UpArrow)
  //                     {
  //                         data->DeleteChars(0, data->BufTextLen);
  //                         data->InsertChars(0, "Pressed Up!");
  //                         data->SelectAll();
  //                     }
  //                     else if (data->EventKey == ImGuiKey_DownArrow)
  //                     {
  //                         data->DeleteChars(0, data->BufTextLen);
  //                         data->InsertChars(0, "Pressed Down!");
  //                         data->SelectAll();
  //                     }
  //                 }
  //                 else if (data->EventFlag == ImGuiInputTextFlags_CallbackEdit)
  //                 {
  //                     // Toggle casing of first character
  //                     char c = data->Buf[0];
  //                     if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')) data->Buf[0] ^= 32;
  //                     data->BufDirty = true;

  //                     // Increment a counter
  //                     int* p_int = (int*)data->UserData;
  //                     *p_int = *p_int + 1;
  //                 }
  //                 return 0;
  //             }
  //         };
  //         static char buf1[64];
  //         imgui.inputText("Completion", buf1, 64, ImGuiInputTextFlags_CallbackCompletion, Funcs::myCallback);
  //         imgui.sameLine(); helpMarker("Here we append \"..\" each time Tab is pressed. See 'Examples>Console' for a more meaningful demonstration of using this callback.");

  //         static char buf2[64];
  //         imgui.inputText("History", buf2, 64, ImGuiInputTextFlags_CallbackHistory, Funcs::myCallback);
  //         imgui.sameLine(); helpMarker("Here we replace and select text each time Up/Down are pressed. See 'Examples>Console' for a more meaningful demonstration of using this callback.");

  //         static char buf3[64];
  //         static int edit_count = 0;
  //         imgui.inputText("Edit", buf3, 64, ImGuiInputTextFlags_CallbackEdit, Funcs::myCallback, (void*)&edit_count);
  //         imgui.sameLine(); helpMarker("Here we toggle the casing of the first character on every edit + count edits.");
  //         imgui.sameLine(); imgui.text("(%d)", edit_count);

  //         imgui.treePop();
  //     }

  //     IMGUI_DEMO_MARKER("Widgets/Text Input/Resize Callback");
  //     if (imgui.treeNode("Resize Callback"))
  //     {
  //         // To wire InputText() with std::string or any other custom string type,
  //         // you can use the ImGuiInputTextFlags_CallbackResize flag + create a custom imgui.inputText() wrapper
  //         // using your preferred type. See misc/cpp/imgui_stdlib.h for an implementation of this using std::string.
  //         helpMarker(
  //             "Using ImGuiInputTextFlags_CallbackResize to wire your custom string type to InputText().\n\n"
  //             "See misc/cpp/imgui_stdlib.h for an implementation of this for std::string.");
  //         struct Funcs
  //         {
  //             static int MyResizeCallback(ImGuiInputTextCallbackData* data)
  //             {
  //                 if (data->EventFlag == ImGuiInputTextFlags_CallbackResize)
  //                 {
  //                     ImVector<char>* my_str = (ImVector<char>*)data->UserData;
  //                     IM_ASSERT(my_str->begin() == data->Buf);
  //                     my_str->resize(data->BufSize); // NB: On resizing calls, generally data->BufSize == data->BufTextLen + 1
  //                     data->Buf = my_str->begin();
  //                 }
  //                 return 0;
  //             }

  //             // Note: Because imgui. is a namespace you would typically add your own function into the namespace.
  //             // For example, you code may declare a function 'imgui.inputText(const char* label, MyString* my_str)'
  //             static bool MyInputTextMultiline(const char* label, ImVector<char>* my_str, const ImVec2& size = ImVec2(0, 0), ImGuiInputTextFlags flags = 0)
  //             {
  //                 IM_ASSERT((flags & ImGuiInputTextFlags_CallbackResize) == 0);
  //                 return imgui.inputTextMultiline(label, my_str->begin(), (size_t)my_str->size(), size, flags | ImGuiInputTextFlags_CallbackResize, Funcs::myResizeCallback, (void*)my_str);
  //             }
  //         };

  //         // For this demo we are using ImVector as a string container.
  //         // Note that because we need to store a terminating zero character, our size/capacity are 1 more
  //         // than usually reported by a typical string class.
  //         static ImVector<char> my_str;
  //         if (my_str.empty())
  //             my_str.push_back(0);
  //         Funcs::myInputTextMultiline("##MyStr", &my_str, ImVec2(-FLT_MIN, imgui.getTextLineHeight() * 16));
  //         imgui.text("Data: %p\nSize: %d\nCapacity: %d", (void*)my_str.begin(), my_str.size(), my_str.capacity());
  //         imgui.treePop();
  //     }

  //     imgui.treePop();
  // }

  // // Tabs
  // IMGUI_DEMO_MARKER("Widgets/Tabs");
  // if (imgui.treeNode("Tabs"))
  // {
  //     IMGUI_DEMO_MARKER("Widgets/Tabs/Basic");
  //     if (imgui.treeNode("Basic"))
  //     {
  //         ImGuiTabBarFlags tab_bar_flags = ImGuiTabBarFlags_None;
  //         if (imgui.beginTabBar("MyTabBar", tab_bar_flags))
  //         {
  //             if (imgui.beginTabItem("Avocado"))
  //             {
  //                 imgui.text("This is the Avocado tab!\nblah blah blah blah blah");
  //                 imgui.endTabItem();
  //             }
  //             if (imgui.beginTabItem("Broccoli"))
  //             {
  //                 imgui.text("This is the Broccoli tab!\nblah blah blah blah blah");
  //                 imgui.endTabItem();
  //             }
  //             if (imgui.beginTabItem("Cucumber"))
  //             {
  //                 imgui.text("This is the Cucumber tab!\nblah blah blah blah blah");
  //                 imgui.endTabItem();
  //             }
  //             imgui.endTabBar();
  //         }
  //         imgui.separator();
  //         imgui.treePop();
  //     }

  //     IMGUI_DEMO_MARKER("Widgets/Tabs/Advanced & Close Button");
  //     if (imgui.treeNode("Advanced & Close Button"))
  //     {
  //         // Expose a couple of the available flags. In most cases you may just call BeginTabBar() with no flags (0).
  //         static ImGuiTabBarFlags tab_bar_flags = ImGuiTabBarFlags_Reorderable;
  //         imgui.checkboxFlags("ImGuiTabBarFlags_Reorderable", &tab_bar_flags, ImGuiTabBarFlags_Reorderable);
  //         imgui.checkboxFlags("ImGuiTabBarFlags_AutoSelectNewTabs", &tab_bar_flags, ImGuiTabBarFlags_AutoSelectNewTabs);
  //         imgui.checkboxFlags("ImGuiTabBarFlags_TabListPopupButton", &tab_bar_flags, ImGuiTabBarFlags_TabListPopupButton);
  //         imgui.checkboxFlags("ImGuiTabBarFlags_NoCloseWithMiddleMouseButton", &tab_bar_flags, ImGuiTabBarFlags_NoCloseWithMiddleMouseButton);
  //         if ((tab_bar_flags & ImGuiTabBarFlags_FittingPolicyMask_) == 0)
  //             tab_bar_flags |= ImGuiTabBarFlags_FittingPolicyDefault_;
  //         if (imgui.checkboxFlags("ImGuiTabBarFlags_FittingPolicyResizeDown", &tab_bar_flags, ImGuiTabBarFlags_FittingPolicyResizeDown))
  //             tab_bar_flags &= ~(ImGuiTabBarFlags_FittingPolicyMask_ ^ ImGuiTabBarFlags_FittingPolicyResizeDown);
  //         if (imgui.checkboxFlags("ImGuiTabBarFlags_FittingPolicyScroll", &tab_bar_flags, ImGuiTabBarFlags_FittingPolicyScroll))
  //             tab_bar_flags &= ~(ImGuiTabBarFlags_FittingPolicyMask_ ^ ImGuiTabBarFlags_FittingPolicyScroll);

  //         // Tab Bar
  //         const char* names[4] = { "Artichoke", "Beetroot", "Celery", "Daikon" };
  //         static bool opened[4] = { true, true, true, true }; // Persistent user state
  //         for (int n = 0; n < IM_ARRAYSIZE(opened); n++)
  //         {
  //             if (n > 0) { imgui.sameLine(); }
  //             imgui.checkbox(names[n], &opened[n]);
  //         }

  //         // Passing a bool* to BeginTabItem() is similar to passing one to Begin():
  //         // the underlying bool will be set to false when the tab is closed.
  //         if (imgui.beginTabBar("MyTabBar", tab_bar_flags))
  //         {
  //             for (int n = 0; n < IM_ARRAYSIZE(opened); n++)
  //                 if (opened[n] && imgui.beginTabItem(names[n], &opened[n], ImGuiTabItemFlags_None))
  //                 {
  //                     imgui.text("This is the %s tab!", names[n]);
  //                     if (n & 1)
  //                         imgui.text("I am an odd tab.");
  //                     imgui.endTabItem();
  //                 }
  //             imgui.endTabBar();
  //         }
  //         imgui.separator();
  //         imgui.treePop();
  //     }

  //     IMGUI_DEMO_MARKER("Widgets/Tabs/TabItemButton & Leading-Trailing flags");
  //     if (imgui.treeNode("TabItemButton & Leading/Trailing flags"))
  //     {
  //         static ImVector<int> active_tabs;
  //         static int next_tab_id = 0;
  //         if (next_tab_id == 0) // Initialize with some default tabs
  //             for (int i = 0; i < 3; i++)
  //                 active_tabs.push_back(next_tab_id++);

  //         // TabItemButton() and Leading/Trailing flags are distinct features which we will demo together.
  //         // (It is possible to submit regular tabs with Leading/Trailing flags, or TabItemButton tabs without Leading/Trailing flags...
  //         // but they tend to make more sense together)
  //         static bool show_leading_button = true;
  //         static bool show_trailing_button = true;
  //         imgui.checkbox("Show Leading TabItemButton()", &show_leading_button);
  //         imgui.checkbox("Show Trailing TabItemButton()", &show_trailing_button);

  //         // Expose some other flags which are useful to showcase how they interact with Leading/Trailing tabs
  //         static ImGuiTabBarFlags tab_bar_flags = ImGuiTabBarFlags_AutoSelectNewTabs | ImGuiTabBarFlags_Reorderable | ImGuiTabBarFlags_FittingPolicyResizeDown;
  //         imgui.checkboxFlags("ImGuiTabBarFlags_TabListPopupButton", &tab_bar_flags, ImGuiTabBarFlags_TabListPopupButton);
  //         if (imgui.checkboxFlags("ImGuiTabBarFlags_FittingPolicyResizeDown", &tab_bar_flags, ImGuiTabBarFlags_FittingPolicyResizeDown))
  //             tab_bar_flags &= ~(ImGuiTabBarFlags_FittingPolicyMask_ ^ ImGuiTabBarFlags_FittingPolicyResizeDown);
  //         if (imgui.checkboxFlags("ImGuiTabBarFlags_FittingPolicyScroll", &tab_bar_flags, ImGuiTabBarFlags_FittingPolicyScroll))
  //             tab_bar_flags &= ~(ImGuiTabBarFlags_FittingPolicyMask_ ^ ImGuiTabBarFlags_FittingPolicyScroll);

  //         if (imgui.beginTabBar("MyTabBar", tab_bar_flags))
  //         {
  //             // Demo a Leading TabItemButton(): click the "?" button to open a menu
  //             if (show_leading_button)
  //                 if (imgui.tabItemButton("?", ImGuiTabItemFlags_Leading | ImGuiTabItemFlags_NoTooltip))
  //                     imgui.openPopup("MyHelpMenu");
  //             if (imgui.beginPopup("MyHelpMenu"))
  //             {
  //                 imgui.selectable("Hello!");
  //                 imgui.endPopup();
  //             }

  //             // Demo Trailing Tabs: click the "+" button to add a new tab (in your app you may want to use a font icon instead of the "+")
  //             // Note that we submit it before the regular tabs, but because of the ImGuiTabItemFlags_Trailing flag it will always appear at the end.
  //             if (show_trailing_button)
  //                 if (imgui.tabItemButton("+", ImGuiTabItemFlags_Trailing | ImGuiTabItemFlags_NoTooltip))
  //                     active_tabs.push_back(next_tab_id++); // Add new tab

  //             // Submit our regular tabs
  //             for (int n = 0; n < active_tabs.Size; )
  //             {
  //                 bool open = true;
  //                 char name[16];
  //                 snprintf(name, IM_ARRAYSIZE(name), "%04d", active_tabs[n]);
  //                 if (imgui.beginTabItem(name, &open, ImGuiTabItemFlags_None))
  //                 {
  //                     imgui.text("This is the %s tab!", name);
  //                     imgui.endTabItem();
  //                 }

  //                 if (!open)
  //                     active_tabs.erase(active_tabs.Data + n);
  //                 else
  //                     n++;
  //             }

  //             imgui.endTabBar();
  //         }
  //         imgui.separator();
  //         imgui.treePop();
  //     }
  //     imgui.treePop();
  // }

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

  // IMGUI_DEMO_MARKER("Widgets/Color");
  // if (imgui.treeNode("Color/Picker Widgets"))
  // {
  //     static ImVec4 color = ImVec4(114.0 / 255.0, 144.0 / 255.0, 154.0 / 255.0, 200.0 / 255.0f);

  //     static bool alpha_preview = true;
  //     static bool alpha_half_preview = false;
  //     static bool drag_and_drop = true;
  //     static bool options_menu = true;
  //     static bool hdr = false;
  //     imgui.checkbox("With Alpha Preview", &alpha_preview);
  //     imgui.checkbox("With Half Alpha Preview", &alpha_half_preview);
  //     imgui.checkbox("With Drag and Drop", &drag_and_drop);
  //     imgui.checkbox("With Options Menu", &options_menu); imgui.sameLine(); helpMarker("Right-click on the individual color widget to show options.");
  //     imgui.checkbox("With HDR", &hdr); imgui.sameLine(); helpMarker("Currently all this does is to lift the 0..1 limits on dragging widgets.");
  //     ImGuiColorEditFlags misc_flags = (hdr ? ImGuiColorEditFlags_HDR : 0) | (drag_and_drop ? 0 : ImGuiColorEditFlags_NoDragDrop) | (alpha_half_preview ? ImGuiColorEditFlags_AlphaPreviewHalf : (alpha_preview ? ImGuiColorEditFlags_AlphaPreview : 0)) | (options_menu ? 0 : ImGuiColorEditFlags_NoOptions);

  //     IMGUI_DEMO_MARKER("Widgets/Color/ColorEdit");
  //     imgui.text("Color widget:");
  //     imgui.sameLine(); helpMarker(
  //         "Click on the color square to open a color picker.\n"
  //         "CTRL+click on individual component to input value.\n");
  //     imgui.colorEdit3("MyColor##1", (float*)&color, misc_flags);

  //     IMGUI_DEMO_MARKER("Widgets/Color/ColorEdit (HSV, with Alpha)");
  //     imgui.text("Color widget HSV with Alpha:");
  //     imgui.colorEdit4("MyColor##2", (float*)&color, ImGuiColorEditFlags_DisplayHSV | misc_flags);

  //     IMGUI_DEMO_MARKER("Widgets/Color/ColorEdit (float display)");
  //     imgui.text("Color widget with Float Display:");
  //     imgui.colorEdit4("MyColor##2f", (float*)&color, ImGuiColorEditFlags_Float | misc_flags);

  //     IMGUI_DEMO_MARKER("Widgets/Color/ColorButton (with Picker)");
  //     imgui.text("Color button with Picker:");
  //     imgui.sameLine(); helpMarker(
  //         "With the ImGuiColorEditFlags_NoInputs flag you can hide all the slider/text inputs.\n"
  //         "With the ImGuiColorEditFlags_NoLabel flag you can pass a non-empty label which will only "
  //         "be used for the tooltip and picker popup.");
  //     imgui.colorEdit4("MyColor##3", (float*)&color, ImGuiColorEditFlags_NoInputs | ImGuiColorEditFlags_NoLabel | misc_flags);

  //     IMGUI_DEMO_MARKER("Widgets/Color/ColorButton (with custom Picker popup)");
  //     imgui.text("Color button with Custom Picker Popup:");

  //     // Generate a default palette. The palette will persist and can be edited.
  //     static bool saved_palette_init = true;
  //     static ImVec4 saved_palette[32] = {};
  //     if (saved_palette_init)
  //     {
  //         for (int n = 0; n < IM_ARRAYSIZE(saved_palette); n++)
  //         {
  //             imgui.colorConvertHSVtoRGB(n / 31.0, 0.8, 0.8,
  //                 saved_palette[n].x, saved_palette[n].y, saved_palette[n].z);
  //             saved_palette[n].w = 1.0; // Alpha
  //         }
  //         saved_palette_init = false;
  //     }

  //     static ImVec4 backup_color;
  //     bool open_popup = imgui.colorButton("MyColor##3b", color, misc_flags);
  //     imgui.sameLine(0, imgui.getStyle().ItemInnerSpacing.x);
  //     open_popup |= imgui.button("Palette");
  //     if (open_popup)
  //     {
  //         imgui.openPopup("mypicker");
  //         backup_color = color;
  //     }
  //     if (imgui.beginPopup("mypicker"))
  //     {
  //         imgui.text("MY CUSTOM COLOR PICKER WITH AN AMAZING PALETTE!");
  //         imgui.separator();
  //         imgui.colorPicker4("##picker", (float*)&color, misc_flags | ImGuiColorEditFlags_NoSidePreview | ImGuiColorEditFlags_NoSmallPreview);
  //         imgui.sameLine();

  //         imgui.beginGroup(); // Lock X position
  //         imgui.text("Current");
  //         imgui.colorButton("##current", color, ImGuiColorEditFlags_NoPicker | ImGuiColorEditFlags_AlphaPreviewHalf, ImVec2(60, 40));
  //         imgui.text("Previous");
  //         if (imgui.colorButton("##previous", backup_color, ImGuiColorEditFlags_NoPicker | ImGuiColorEditFlags_AlphaPreviewHalf, ImVec2(60, 40)))
  //             color = backup_color;
  //         imgui.separator();
  //         imgui.text("Palette");
  //         for (int n = 0; n < IM_ARRAYSIZE(saved_palette); n++)
  //         {
  //             imgui.pushID(n);
  //             if ((n % 8) != 0)
  //                 imgui.sameLine(0.0, imgui.getStyle().ItemSpacing.y);

  //             ImGuiColorEditFlags palette_button_flags = ImGuiColorEditFlags_NoAlpha | ImGuiColorEditFlags_NoPicker | ImGuiColorEditFlags_NoTooltip;
  //             if (imgui.colorButton("##palette", saved_palette[n], palette_button_flags, ImVec2(20, 20)))
  //                 color = ImVec4(saved_palette[n].x, saved_palette[n].y, saved_palette[n].z, color.w); // Preserve alpha!

  //             // Allow user to drop colors into each palette entry. Note that ColorButton() is already a
  //             // drag source by default, unless specifying the ImGuiColorEditFlags_NoDragDrop flag.
  //             if (imgui.beginDragDropTarget())
  //             {
  //                 if (const ImGuiPayload* payload = imgui.acceptDragDropPayload(IMGUI_PAYLOAD_TYPE_COLOR_3F))
  //                     memcpy((float*)&saved_palette[n], payload->Data, sizeof(float) * 3);
  //                 if (const ImGuiPayload* payload = imgui.acceptDragDropPayload(IMGUI_PAYLOAD_TYPE_COLOR_4F))
  //                     memcpy((float*)&saved_palette[n], payload->Data, sizeof(float) * 4);
  //                 imgui.endDragDropTarget();
  //             }

  //             imgui.popID();
  //         }
  //         imgui.endGroup();
  //         imgui.endPopup();
  //     }

  //     IMGUI_DEMO_MARKER("Widgets/Color/ColorButton (simple)");
  //     imgui.text("Color button only:");
  //     static bool no_border = false;
  //     imgui.checkbox("ImGuiColorEditFlags_NoBorder", &no_border);
  //     imgui.colorButton("MyColor##3c", *(ImVec4*)&color, misc_flags | (no_border ? ImGuiColorEditFlags_NoBorder : 0), ImVec2(80, 80));

  //     IMGUI_DEMO_MARKER("Widgets/Color/ColorPicker");
  //     imgui.text("Color picker:");
  //     static bool alpha = true;
  //     static bool alpha_bar = true;
  //     static bool side_preview = true;
  //     static bool ref_color = false;
  //     static ImVec4 ref_color_v(1.0, 0.0, 1.0, 0.5f);
  //     static int display_mode = 0;
  //     static int picker_mode = 0;
  //     imgui.checkbox("With Alpha", &alpha);
  //     imgui.checkbox("With Alpha Bar", &alpha_bar);
  //     imgui.checkbox("With Side Preview", &side_preview);
  //     if (side_preview)
  //     {
  //         imgui.sameLine();
  //         imgui.checkbox("With Ref Color", &ref_color);
  //         if (ref_color)
  //         {
  //             imgui.sameLine();
  //             imgui.colorEdit4("##RefColor", &ref_color_v.x, ImGuiColorEditFlags_NoInputs | misc_flags);
  //         }
  //     }
  //     imgui.combo("Display Mode", &display_mode, "Auto/Current\0None\0RGB Only\0HSV Only\0Hex Only\0");
  //     imgui.sameLine(); helpMarker(
  //         "ColorEdit defaults to displaying RGB inputs if you don't specify a display mode, "
  //         "but the user can change it with a right-click on those inputs.\n\nColorPicker defaults to displaying RGB+HSV+Hex "
  //         "if you don't specify a display mode.\n\nYou can change the defaults using SetColorEditOptions().");
  //     imgui.sameLine(); helpMarker("When not specified explicitly (Auto/Current mode), user can right-click the picker to change mode.");
  //     ImGuiColorEditFlags flags = misc_flags;
  //     if (!alpha)            flags |= ImGuiColorEditFlags_NoAlpha;        // This is by default if you call ColorPicker3() instead of ColorPicker4()
  //     if (alpha_bar)         flags |= ImGuiColorEditFlags_AlphaBar;
  //     if (!side_preview)     flags |= ImGuiColorEditFlags_NoSidePreview;
  //     if (picker_mode == 1)  flags |= ImGuiColorEditFlags_PickerHueBar;
  //     if (picker_mode == 2)  flags |= ImGuiColorEditFlags_PickerHueWheel;
  //     if (display_mode == 1) flags |= ImGuiColorEditFlags_NoInputs;       // Disable all RGB/HSV/Hex displays
  //     if (display_mode == 2) flags |= ImGuiColorEditFlags_DisplayRGB;     // Override display mode
  //     if (display_mode == 3) flags |= ImGuiColorEditFlags_DisplayHSV;
  //     if (display_mode == 4) flags |= ImGuiColorEditFlags_DisplayHex;
  //     imgui.colorPicker4("MyColor##4", (float*)&color, flags, ref_color ? &ref_color_v.x : NULL);

  //     imgui.text("Set defaults in code:");
  //     imgui.sameLine(); helpMarker(
  //         "SetColorEditOptions() is designed to allow you to set boot-time default.\n"
  //         "We don't have Push/Pop functions because you can force options on a per-widget basis if needed,"
  //         "and the user can change non-forced ones with the options menu.\nWe don't have a getter to avoid"
  //         "encouraging you to persistently save values that aren't forward-compatible.");
  //     if (imgui.button("Default: Uint8 + HSV + Hue Bar"))
  //         imgui.setColorEditOptions(ImGuiColorEditFlags_Uint8 | ImGuiColorEditFlags_DisplayHSV | ImGuiColorEditFlags_PickerHueBar);
  //     if (imgui.button("Default: Float + HDR + Hue Wheel"))
  //         imgui.setColorEditOptions(ImGuiColorEditFlags_Float | ImGuiColorEditFlags_HDR | ImGuiColorEditFlags_PickerHueWheel);

  //     // Always both a small version of both types of pickers (to make it more visible in the demo to people who are skimming quickly through it)
  //     imgui.text("Both types:");
  //     float w = (imgui.getContentRegionAvail().x - imgui.getStyle().ItemSpacing.y) * 0.40;
  //     imgui.setNextItemWidth(w);
  //     imgui.colorPicker3("##MyColor##5", (float*)&color, ImGuiColorEditFlags_PickerHueBar | ImGuiColorEditFlags_NoSidePreview | ImGuiColorEditFlags_NoInputs | ImGuiColorEditFlags_NoAlpha);
  //     imgui.sameLine();
  //     imgui.setNextItemWidth(w);
  //     imgui.colorPicker3("##MyColor##6", (float*)&color, ImGuiColorEditFlags_PickerHueWheel | ImGuiColorEditFlags_NoSidePreview | ImGuiColorEditFlags_NoInputs | ImGuiColorEditFlags_NoAlpha);

  //     // HSV encoded support (to avoid RGB<>HSV round trips and singularities when S==0 or V==0)
  //     static ImVec4 color_hsv(0.23, 1.0, 1.0, 1.0f); // Stored as HSV!
  //     imgui.spacing();
  //     imgui.text("HSV encoded colors");
  //     imgui.sameLine(); helpMarker(
  //         "By default, colors are given to ColorEdit and ColorPicker in RGB, but ImGuiColorEditFlags_InputHSV"
  //         "allows you to store colors as HSV and pass them to ColorEdit and ColorPicker as HSV. This comes with the"
  //         "added benefit that you can manipulate hue values with the picker even when saturation or value are zero.");
  //     imgui.text("Color widget with InputHSV:");
  //     imgui.colorEdit4("HSV shown as RGB##1", (float*)&color_hsv, ImGuiColorEditFlags_DisplayRGB | ImGuiColorEditFlags_InputHSV | ImGuiColorEditFlags_Float);
  //     imgui.colorEdit4("HSV shown as HSV##1", (float*)&color_hsv, ImGuiColorEditFlags_DisplayHSV | ImGuiColorEditFlags_InputHSV | ImGuiColorEditFlags_Float);
  //     imgui.dragFloat4("Raw HSV values", (float*)&color_hsv, 0.01, 0.0, 1.0f);

  //     imgui.treePop();
  // }

  // IMGUI_DEMO_MARKER("Widgets/Drag and Slider Flags");
  // if (imgui.treeNode("Drag/Slider Flags"))
  // {
  //     // Demonstrate using advanced flags for DragXXX and SliderXXX functions. Note that the flags are the same!
  //     static ImGuiSliderFlags flags = ImGuiSliderFlags_None;
  //     imgui.checkboxFlags("ImGuiSliderFlags_AlwaysClamp", &flags, ImGuiSliderFlags_AlwaysClamp);
  //     imgui.sameLine(); helpMarker("Always clamp value to min/max bounds (if any) when input manually with CTRL+Click.");
  //     imgui.checkboxFlags("ImGuiSliderFlags_Logarithmic", &flags, ImGuiSliderFlags_Logarithmic);
  //     imgui.sameLine(); helpMarker("Enable logarithmic editing (more precision for small values).");
  //     imgui.checkboxFlags("ImGuiSliderFlags_NoRoundToFormat", &flags, ImGuiSliderFlags_NoRoundToFormat);
  //     imgui.sameLine(); helpMarker("Disable rounding underlying value to match precision of the format string (e.g. %.3 values are rounded to those 3 digits).");
  //     imgui.checkboxFlags("ImGuiSliderFlags_NoInput", &flags, ImGuiSliderFlags_NoInput);
  //     imgui.sameLine(); helpMarker("Disable CTRL+Click or Enter key allowing to input text directly into the widget.");

  //     // Drags
  //     static float drag_f = 0.5;
  //     static int drag_i = 50;
  //     imgui.text("Underlying float value: %f", drag_f);
  //     imgui.dragFloat("DragFloat (0 -> 1)", &drag_f, 0.005, 0.0, 1.0, "%.3f", flags);
  //     imgui.dragFloat("DragFloat (0 -> +inf)", &drag_f, 0.005, 0.0, FLT_MAX, "%.3f", flags);
  //     imgui.dragFloat("DragFloat (-inf -> 1)", &drag_f, 0.005, -FLT_MAX, 1.0, "%.3f", flags);
  //     imgui.dragFloat("DragFloat (-inf -> +inf)", &drag_f, 0.005, -FLT_MAX, +FLT_MAX, "%.3f", flags);
  //     imgui.dragInt("DragInt (0 -> 100)", &drag_i, 0.5, 0, 100, "%d", flags);

  //     // Sliders
  //     static float slider_f = 0.5;
  //     static int slider_i = 50;
  //     imgui.text("Underlying float value: %f", slider_f);
  //     imgui.sliderFloat("SliderFloat (0 -> 1)", &slider_f, 0.0, 1.0, "%.3f", flags);
  //     imgui.sliderInt("SliderInt (0 -> 100)", &slider_i, 0, 100, "%d", flags);

  //     imgui.treePop();
  // }

  // IMGUI_DEMO_MARKER("Widgets/Range Widgets");
  // if (imgui.treeNode("Range Widgets"))
  // {
  //     static float begin = 10, end = 90;
  //     static int begin_i = 100, end_i = 1000;
  //     imgui.dragFloatRange2("range float", &begin, &end, 0.25, 0.0, 100.0, "Min: %.1 %%", "Max: %.1 %%", ImGuiSliderFlags_AlwaysClamp);
  //     imgui.dragIntRange2("range int", &begin_i, &end_i, 5, 0, 1000, "Min: %d units", "Max: %d units");
  //     imgui.dragIntRange2("range int (no bounds)", &begin_i, &end_i, 5, 0, 0, "Min: %d units", "Max: %d units");
  //     imgui.treePop();
  // }

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
  //     imgui.dragScalar("drag float log", ImGuiDataType_Float,  &f32_v, 0.005,  &f32_zero, &f32_one, "%f", ImGuiSliderFlags_Logarithmic);
  //     imgui.dragScalar("drag double",    ImGuiDataType_Double, &f64_v, 0.0005, &f64_zero, NULL,     "%.10 grams");
  //     imgui.dragScalar("drag double log",ImGuiDataType_Double, &f64_v, 0.0005, &f64_zero, &f64_one, "0 < %.10 < 1", ImGuiSliderFlags_Logarithmic);

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
  //     imgui.sliderScalar("slider float low log", ImGuiDataType_Float,  &f32_v, &f32_zero, &f32_one,  "%.10f", ImGuiSliderFlags_Logarithmic);
  //     imgui.sliderScalar("slider float high",    ImGuiDataType_Float,  &f32_v, &f32_lo_a, &f32_hi_a, "%e");
  //     imgui.sliderScalar("slider double low",    ImGuiDataType_Double, &f64_v, &f64_zero, &f64_one,  "%.10 grams");
  //     imgui.sliderScalar("slider double low log",ImGuiDataType_Double, &f64_v, &f64_zero, &f64_one,  "%.10f", ImGuiSliderFlags_Logarithmic);
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

  // IMGUI_DEMO_MARKER("Widgets/Multi-component Widgets");
  // if (imgui.treeNode("Multi-component Widgets"))
  // {
  //     static float vec4f[4] = { 0.10, 0.20, 0.30, 0.44 };
  //     static int vec4i[4] = { 1, 5, 100, 255 };

  //     imgui.inputFloat2("input float2", vec4f);
  //     imgui.dragFloat2("drag float2", vec4, 0.01, 0.0, 1.0f);
  //     imgui.sliderFloat2("slider float2", vec4, 0.0, 1.0f);
  //     imgui.inputInt2("input int2", vec4i);
  //     imgui.dragInt2("drag int2", vec4i, 1, 0, 255);
  //     imgui.sliderInt2("slider int2", vec4i, 0, 255);
  //     imgui.spacing();

  //     imgui.inputFloat3("input float3", vec4f);
  //     imgui.dragFloat3("drag float3", vec4, 0.01, 0.0, 1.0f);
  //     imgui.sliderFloat3("slider float3", vec4, 0.0, 1.0f);
  //     imgui.inputInt3("input int3", vec4i);
  //     imgui.dragInt3("drag int3", vec4i, 1, 0, 255);
  //     imgui.sliderInt3("slider int3", vec4i, 0, 255);
  //     imgui.spacing();

  //     imgui.inputFloat4("input float4", vec4f);
  //     imgui.dragFloat4("drag float4", vec4, 0.01, 0.0, 1.0f);
  //     imgui.sliderFloat4("slider float4", vec4, 0.0, 1.0f);
  //     imgui.inputInt4("input int4", vec4i);
  //     imgui.dragInt4("drag int4", vec4i, 1, 0, 255);
  //     imgui.sliderInt4("slider int4", vec4i, 0, 255);

  //     imgui.treePop();
  // }

  // IMGUI_DEMO_MARKER("Widgets/Vertical Sliders");
  // if (imgui.treeNode("Vertical Sliders"))
  // {
  //     const float spacing = 4;
  //     imgui.pushStyleVar(ImGuiStyleVar_ItemSpacing, ImVec2(spacing, spacing));

  //     static int int_value = 0;
  //     imgui.vSliderInt("##int", ImVec2(18, 160), &int_value, 0, 5);
  //     imgui.sameLine();

  //     static float values[7] = { 0.0, 0.60, 0.35, 0.9, 0.70, 0.20, 0.0 };
  //     imgui.pushID("set1");
  //     for (int i = 0; i < 7; i++)
  //     {
  //         if (i > 0) imgui.sameLine();
  //         imgui.pushID(i);
  //         imgui.pushStyleColor(ImGuiCol_FrameBg, (ImVec4)ImColor::hSV(i / 7.0, 0.5, 0.5f));
  //         imgui.pushStyleColor(ImGuiCol_FrameBgHovered, (ImVec4)ImColor::hSV(i / 7.0, 0.6, 0.5f));
  //         imgui.pushStyleColor(ImGuiCol_FrameBgActive, (ImVec4)ImColor::hSV(i / 7.0, 0.7, 0.5f));
  //         imgui.pushStyleColor(ImGuiCol_SliderGrab, (ImVec4)ImColor::hSV(i / 7.0, 0.9, 0.9f));
  //         imgui.vSliderFloat("##v", ImVec2(18, 160), &values[i], 0.0, 1.0, "");
  //         if (imgui.isItemActive() || imgui.isItemHovered())
  //             imgui.setTooltip("%.3f", values[i]);
  //         imgui.popStyleColor(4);
  //         imgui.popID();
  //     }
  //     imgui.popID();

  //     imgui.sameLine();
  //     imgui.pushID("set2");
  //     static float values2[4] = { 0.20, 0.80, 0.40, 0.25 };
  //     const int rows = 3;
  //     const ImVec2 small_slider_size(18, (float)(int)((160.0 - (rows - 1) * spacing) / rows));
  //     for (int nx = 0; nx < 4; nx++)
  //     {
  //         if (nx > 0) imgui.sameLine();
  //         imgui.beginGroup();
  //         for (int ny = 0; ny < rows; ny++)
  //         {
  //             imgui.pushID(nx * rows + ny);
  //             imgui.vSliderFloat("##v", small_slider_size, &values2[nx], 0.0, 1.0, "");
  //             if (imgui.isItemActive() || imgui.isItemHovered())
  //                 imgui.setTooltip("%.3f", values2[nx]);
  //             imgui.popID();
  //         }
  //         imgui.endGroup();
  //     }
  //     imgui.popID();

  //     imgui.sameLine();
  //     imgui.pushID("set3");
  //     for (int i = 0; i < 4; i++)
  //     {
  //         if (i > 0) imgui.sameLine();
  //         imgui.pushID(i);
  //         imgui.pushStyleVar(ImGuiStyleVar_GrabMinSize, 40);
  //         imgui.vSliderFloat("##v", ImVec2(40, 160), &values[i], 0.0, 1.0, "%.2f\nsec");
  //         imgui.popStyleVar();
  //         imgui.popID();
  //     }
  //     imgui.popID();
  //     imgui.popStyleVar();
  //     imgui.treePop();
  // }

  // IMGUI_DEMO_MARKER("Widgets/Drag and drop");
  // if (imgui.treeNode("Drag and Drop"))
  // {
  //     IMGUI_DEMO_MARKER("Widgets/Drag and drop/Standard widgets");
  //     if (imgui.treeNode("Drag and drop in standard widgets"))
  //     {
  //         // ColorEdit widgets automatically act as drag source and drag target.
  //         // They are using standardized payload strings IMGUI_PAYLOAD_TYPE_COLOR_3 and IMGUI_PAYLOAD_TYPE_COLOR_4F
  //         // to allow your own widgets to use colors in their drag and drop interaction.
  //         // Also see 'Demo->Widgets->Color/Picker Widgets->Palette' demo.
  //         helpMarker("You can drag from the color squares.");
  //         static float col1[3] = { 1.0, 0.0, 0.2 };
  //         static float col2[4] = { 0.4, 0.7, 0.0, 0.5 };
  //         imgui.colorEdit3("color 1", col1);
  //         imgui.colorEdit4("color 2", col2);
  //         imgui.treePop();
  //     }

  //     IMGUI_DEMO_MARKER("Widgets/Drag and drop/Copy-swap items");
  //     if (imgui.treeNode("Drag and drop to copy/swap items"))
  //     {
  //         enum Mode
  //         {
  //             Mode_Copy,
  //             Mode_Move,
  //             Mode_Swap
  //         };
  //         static int mode = 0;
  //         if (imgui.radioButton("Copy", mode == Mode_Copy)) { mode = Mode_Copy; } imgui.sameLine();
  //         if (imgui.radioButton("Move", mode == Mode_Move)) { mode = Mode_Move; } imgui.sameLine();
  //         if (imgui.radioButton("Swap", mode == Mode_Swap)) { mode = Mode_Swap; }
  //         static const char* names[9] =
  //         {
  //             "Bobby", "Beatrice", "Betty",
  //             "Brianna", "Barry", "Bernard",
  //             "Bibi", "Blaine", "Bryn"
  //         };
  //         for (int n = 0; n < IM_ARRAYSIZE(names); n++)
  //         {
  //             imgui.pushID(n);
  //             if ((n % 3) != 0)
  //                 imgui.sameLine();
  //             imgui.button(names[n], ImVec2(60, 60));

  //             // Our buttons are both drag sources and drag targets here!
  //             if (imgui.beginDragDropSource(ImGuiDragDropFlags_None))
  //             {
  //                 // Set payload to carry the index of our item (could be anything)
  //                 imgui.setDragDropPayload("DND_DEMO_CELL", &n, sizeof(int));

  //                 // Display preview (could be anything, e.g. when dragging an image we could decide to display
  //                 // the filename and a small preview of the image, etc.)
  //                 if (mode == Mode_Copy) { imgui.text("Copy %s", names[n]); }
  //                 if (mode == Mode_Move) { imgui.text("Move %s", names[n]); }
  //                 if (mode == Mode_Swap) { imgui.text("Swap %s", names[n]); }
  //                 imgui.endDragDropSource();
  //             }
  //             if (imgui.beginDragDropTarget())
  //             {
  //                 if (const ImGuiPayload* payload = imgui.acceptDragDropPayload("DND_DEMO_CELL"))
  //                 {
  //                     IM_ASSERT(payload->DataSize == sizeof(int));
  //                     int payload_n = *(const int*)payload->Data;
  //                     if (mode == Mode_Copy)
  //                     {
  //                         names[n] = names[payload_n];
  //                     }
  //                     if (mode == Mode_Move)
  //                     {
  //                         names[n] = names[payload_n];
  //                         names[payload_n] = "";
  //                     }
  //                     if (mode == Mode_Swap)
  //                     {
  //                         const char* tmp = names[n];
  //                         names[n] = names[payload_n];
  //                         names[payload_n] = tmp;
  //                     }
  //                 }
  //                 imgui.endDragDropTarget();
  //             }
  //             imgui.popID();
  //         }
  //         imgui.treePop();
  //     }

  //     IMGUI_DEMO_MARKER("Widgets/Drag and Drop/Drag to reorder items (simple)");
  //     if (imgui.treeNode("Drag to reorder items (simple)"))
  //     {
  //         // Simple reordering
  //         helpMarker(
  //             "We don't use the drag and drop api at all here! "
  //             "Instead we query when the item is held but not hovered, and order items accordingly.");
  //         static const char* item_names[] = { "Item One", "Item Two", "Item Three", "Item Four", "Item Five" };
  //         for (int n = 0; n < IM_ARRAYSIZE(item_names); n++)
  //         {
  //             const char* item = item_names[n];
  //             imgui.selectable(item);

  //             if (imgui.isItemActive() && !imgui.isItemHovered())
  //             {
  //                 int n_next = n + (imgui.getMouseDragDelta(0).y < 0.f ? -1 : 1);
  //                 if (n_next >= 0 && n_next < IM_ARRAYSIZE(item_names))
  //                 {
  //                     item_names[n] = item_names[n_next];
  //                     item_names[n_next] = item;
  //                     imgui.resetMouseDragDelta();
  //                 }
  //             }
  //         }
  //         imgui.treePop();
  //     }

  //     imgui.treePop();
  // }

  // IMGUI_DEMO_MARKER("Widgets/Querying Item Status (Edited,Active,Hovered etc.)");
  // if (imgui.treeNode("Querying Item Status (Edited/Active/Hovered etc.)"))
  // {
  //     // Select an item type
  //     const char* item_names[] =
  //     {
  //         "Text", "Button", "Button (w/ repeat)", "Checkbox", "SliderFloat", "InputText", "InputTextMultiline", "InputFloat",
  //         "InputFloat3", "ColorEdit4", "Selectable", "MenuItem", "TreeNode", "TreeNode (w/ double-click)", "Combo", "ListBox"
  //     };
  //     static int item_type = 4;
  //     static bool item_disabled = false;
  //     imgui.combo("Item Type", &item_type, item_names, IM_ARRAYSIZE(item_names), IM_ARRAYSIZE(item_names));
  //     imgui.sameLine();
  //     helpMarker("Testing how various types of items are interacting with the IsItemXXX functions. Note that the bool return value of most ImGui function is generally equivalent to calling imgui.isItemHovered().");
  //     imgui.checkbox("Item Disabled",  &item_disabled);

  //     // Submit selected items so we can query their status in the code following it.
  //     bool ret = false;
  //     static bool b = false;
  //     static float col4f[4] = { 1.0, 0.5, 0.0, 1.0 };
  //     static char str[16] = {};
  //     if (item_disabled)
  //         imgui.beginDisabled(true);
  //     if (item_type == 0) { imgui.text("ITEM: Text"); }                                              // Testing text items with no identifier/interaction
  //     if (item_type == 1) { ret = imgui.button("ITEM: Button"); }                                    // Testing button
  //     if (item_type == 2) { imgui.pushButtonRepeat(true); ret = imgui.button("ITEM: Button"); imgui.popButtonRepeat(); } // Testing button (with repeater)
  //     if (item_type == 3) { ret = imgui.checkbox("ITEM: Checkbox", &b); }                            // Testing checkbox
  //     if (item_type == 4) { ret = imgui.sliderFloat("ITEM: SliderFloat", &col4f[0], 0.0, 1.0f); }   // Testing basic item
  //     if (item_type == 5) { ret = imgui.inputText("ITEM: InputText", &str[0], IM_ARRAYSIZE(str)); }  // Testing input text (which handles tabbing)
  //     if (item_type == 6) { ret = imgui.inputTextMultiline("ITEM: InputTextMultiline", &str[0], IM_ARRAYSIZE(str)); } // Testing input text (which uses a child window)
  //     if (item_type == 7) { ret = imgui.inputFloat("ITEM: InputFloat", col4, 1.0f); }               // Testing +/- buttons on scalar input
  //     if (item_type == 8) { ret = imgui.inputFloat3("ITEM: InputFloat3", col4f); }                   // Testing multi-component items (IsItemXXX flags are reported merged)
  //     if (item_type == 9) { ret = imgui.colorEdit4("ITEM: ColorEdit4", col4f); }                     // Testing multi-component items (IsItemXXX flags are reported merged)
  //     if (item_type == 10){ ret = imgui.selectable("ITEM: Selectable"); }                            // Testing selectable item
  //     if (item_type == 11){ ret = imgui.menuItem("ITEM: MenuItem"); }                                // Testing menu item (they use ImGuiButtonFlags_PressedOnRelease button policy)
  //     if (item_type == 12){ ret = imgui.treeNode("ITEM: TreeNode"); if (ret) imgui.treePop(); }     // Testing tree node
  //     if (item_type == 13){ ret = imgui.treeNodeEx("ITEM: TreeNode w/ ImGuiTreeNodeFlags_OpenOnDoubleClick", ImGuiTreeNodeFlags_OpenOnDoubleClick | ImGuiTreeNodeFlags_NoTreePushOnOpen); } // Testing tree node with ImGuiButtonFlags_PressedOnDoubleClick button policy.
  //     if (item_type == 14){ const char* items[] = { "Apple", "Banana", "Cherry", "Kiwi" }; static int current = 1; ret = imgui.combo("ITEM: Combo", &current, items, IM_ARRAYSIZE(items)); }
  //     if (item_type == 15){ const char* items[] = { "Apple", "Banana", "Cherry", "Kiwi" }; static int current = 1; ret = imgui.listBox("ITEM: ListBox", &current, items, IM_ARRAYSIZE(items), IM_ARRAYSIZE(items)); }

  //     bool hovered_delay_none = imgui.isItemHovered();
  //     bool hovered_delay_short = imgui.isItemHovered(ImGuiHoveredFlags_DelayShort);
  //     bool hovered_delay_normal = imgui.isItemHovered(ImGuiHoveredFlags_DelayNormal);

  //     // Display the values of IsItemHovered() and other common item state functions.
  //     // Note that the ImGuiHoveredFlags_XXX flags can be combined.
  //     // Because BulletText is an item itself and that would affect the output of IsItemXXX functions,
  //     // we query every state in a single call to avoid storing them and to simplify the code.
  //     imgui.bulletText(
  //         "Return value = %d\n"
  //         "IsItemFocused() = %d\n"
  //         "IsItemHovered() = %d\n"
  //         "IsItemHovered(_AllowWhenBlockedByPopup) = %d\n"
  //         "IsItemHovered(_AllowWhenBlockedByActiveItem) = %d\n"
  //         "IsItemHovered(_AllowWhenOverlapped) = %d\n"
  //         "IsItemHovered(_AllowWhenDisabled) = %d\n"
  //         "IsItemHovered(_RectOnly) = %d\n"
  //         "IsItemActive() = %d\n"
  //         "IsItemEdited() = %d\n"
  //         "IsItemActivated() = %d\n"
  //         "IsItemDeactivated() = %d\n"
  //         "IsItemDeactivatedAfterEdit() = %d\n"
  //         "IsItemVisible() = %d\n"
  //         "IsItemClicked() = %d\n"
  //         "IsItemToggledOpen() = %d\n"
  //         "GetItemRectMin() = (%.1, %.1f)\n"
  //         "GetItemRectMax() = (%.1, %.1f)\n"
  //         "GetItemRectSize() = (%.1, %.1f)",
  //         ret,
  //         imgui.isItemFocused(),
  //         imgui.isItemHovered(),
  //         imgui.isItemHovered(ImGuiHoveredFlags_AllowWhenBlockedByPopup),
  //         imgui.isItemHovered(ImGuiHoveredFlags_AllowWhenBlockedByActiveItem),
  //         imgui.isItemHovered(ImGuiHoveredFlags_AllowWhenOverlapped),
  //         imgui.isItemHovered(ImGuiHoveredFlags_AllowWhenDisabled),
  //         imgui.isItemHovered(ImGuiHoveredFlags_RectOnly),
  //         imgui.isItemActive(),
  //         imgui.isItemEdited(),
  //         imgui.isItemActivated(),
  //         imgui.isItemDeactivated(),
  //         imgui.isItemDeactivatedAfterEdit(),
  //         imgui.isItemVisible(),
  //         imgui.isItemClicked(),
  //         imgui.isItemToggledOpen(),
  //         imgui.getItemRectMin().x, imgui.getItemRectMin().y,
  //         imgui.getItemRectMax().x, imgui.getItemRectMax().y,
  //         imgui.getItemRectSize().x, imgui.getItemRectSize().y
  //     );
  //     imgui.bulletText(
  //         "w/ Hovering Delay: None = %d, Fast %d, Normal = %d", hovered_delay_none, hovered_delay_short, hovered_delay_normal);

  //     if (item_disabled)
  //         imgui.endDisabled();

  //     char buf[1] = "";
  //     imgui.inputText("unused", buf, IM_ARRAYSIZE(buf), ImGuiInputTextFlags_ReadOnly);
  //     imgui.sameLine();
  //     helpMarker("This widget is only here to be able to tab-out of the widgets above and see e.g. Deactivated() status.");

  //     imgui.treePop();
  // }

  // IMGUI_DEMO_MARKER("Widgets/Querying Window Status (Focused,Hovered etc.)");
  // if (imgui.treeNode("Querying Window Status (Focused/Hovered etc.)"))
  // {
  //     static bool embed_all_inside_a_child_window = false;
  //     imgui.checkbox("Embed everything inside a child window for testing _RootWindow flag.", &embed_all_inside_a_child_window);
  //     if (embed_all_inside_a_child_window)
  //         imgui.beginChild("outer_child", ImVec2(0, imgui.getFontSize() * 20.0f), true);

  //     // Testing IsWindowFocused() function with its various flags.
  //     imgui.bulletText(
  //         "IsWindowFocused() = %d\n"
  //         "IsWindowFocused(_ChildWindows) = %d\n"
  //         "IsWindowFocused(_ChildWindows|_NoPopupHierarchy) = %d\n"
  //         "IsWindowFocused(_ChildWindows|_DockHierarchy) = %d\n"
  //         "IsWindowFocused(_ChildWindows|_RootWindow) = %d\n"
  //         "IsWindowFocused(_ChildWindows|_RootWindow|_NoPopupHierarchy) = %d\n"
  //         "IsWindowFocused(_ChildWindows|_RootWindow|_DockHierarchy) = %d\n"
  //         "IsWindowFocused(_RootWindow) = %d\n"
  //         "IsWindowFocused(_RootWindow|_NoPopupHierarchy) = %d\n"
  //         "IsWindowFocused(_RootWindow|_DockHierarchy) = %d\n"
  //         "IsWindowFocused(_AnyWindow) = %d\n",
  //         imgui.isWindowFocused(),
  //         imgui.isWindowFocused(ImGuiFocusedFlags_ChildWindows),
  //         imgui.isWindowFocused(ImGuiFocusedFlags_ChildWindows | ImGuiFocusedFlags_NoPopupHierarchy),
  //         imgui.isWindowFocused(ImGuiFocusedFlags_ChildWindows | ImGuiFocusedFlags_DockHierarchy),
  //         imgui.isWindowFocused(ImGuiFocusedFlags_ChildWindows | ImGuiFocusedFlags_RootWindow),
  //         imgui.isWindowFocused(ImGuiFocusedFlags_ChildWindows | ImGuiFocusedFlags_RootWindow | ImGuiFocusedFlags_NoPopupHierarchy),
  //         imgui.isWindowFocused(ImGuiFocusedFlags_ChildWindows | ImGuiFocusedFlags_RootWindow | ImGuiFocusedFlags_DockHierarchy),
  //         imgui.isWindowFocused(ImGuiFocusedFlags_RootWindow),
  //         imgui.isWindowFocused(ImGuiFocusedFlags_RootWindow | ImGuiFocusedFlags_NoPopupHierarchy),
  //         imgui.isWindowFocused(ImGuiFocusedFlags_RootWindow | ImGuiFocusedFlags_DockHierarchy),
  //         imgui.isWindowFocused(ImGuiFocusedFlags_AnyWindow));

  //     // Testing IsWindowHovered() function with its various flags.
  //     imgui.bulletText(
  //         "IsWindowHovered() = %d\n"
  //         "IsWindowHovered(_AllowWhenBlockedByPopup) = %d\n"
  //         "IsWindowHovered(_AllowWhenBlockedByActiveItem) = %d\n"
  //         "IsWindowHovered(_ChildWindows) = %d\n"
  //         "IsWindowHovered(_ChildWindows|_NoPopupHierarchy) = %d\n"
  //         "IsWindowHovered(_ChildWindows|_DockHierarchy) = %d\n"
  //         "IsWindowHovered(_ChildWindows|_RootWindow) = %d\n"
  //         "IsWindowHovered(_ChildWindows|_RootWindow|_NoPopupHierarchy) = %d\n"
  //         "IsWindowHovered(_ChildWindows|_RootWindow|_DockHierarchy) = %d\n"
  //         "IsWindowHovered(_RootWindow) = %d\n"
  //         "IsWindowHovered(_RootWindow|_NoPopupHierarchy) = %d\n"
  //         "IsWindowHovered(_RootWindow|_DockHierarchy) = %d\n"
  //         "IsWindowHovered(_ChildWindows|_AllowWhenBlockedByPopup) = %d\n"
  //         "IsWindowHovered(_AnyWindow) = %d\n",
  //         imgui.isWindowHovered(),
  //         imgui.isWindowHovered(ImGuiHoveredFlags_AllowWhenBlockedByPopup),
  //         imgui.isWindowHovered(ImGuiHoveredFlags_AllowWhenBlockedByActiveItem),
  //         imgui.isWindowHovered(ImGuiHoveredFlags_ChildWindows),
  //         imgui.isWindowHovered(ImGuiHoveredFlags_ChildWindows | ImGuiHoveredFlags_NoPopupHierarchy),
  //         imgui.isWindowHovered(ImGuiHoveredFlags_ChildWindows | ImGuiHoveredFlags_DockHierarchy),
  //         imgui.isWindowHovered(ImGuiHoveredFlags_ChildWindows | ImGuiHoveredFlags_RootWindow),
  //         imgui.isWindowHovered(ImGuiHoveredFlags_ChildWindows | ImGuiHoveredFlags_RootWindow | ImGuiHoveredFlags_NoPopupHierarchy),
  //         imgui.isWindowHovered(ImGuiHoveredFlags_ChildWindows | ImGuiHoveredFlags_RootWindow | ImGuiHoveredFlags_DockHierarchy),
  //         imgui.isWindowHovered(ImGuiHoveredFlags_RootWindow),
  //         imgui.isWindowHovered(ImGuiHoveredFlags_RootWindow | ImGuiHoveredFlags_NoPopupHierarchy),
  //         imgui.isWindowHovered(ImGuiHoveredFlags_RootWindow | ImGuiHoveredFlags_DockHierarchy),
  //         imgui.isWindowHovered(ImGuiHoveredFlags_ChildWindows | ImGuiHoveredFlags_AllowWhenBlockedByPopup),
  //         imgui.isWindowHovered(ImGuiHoveredFlags_AnyWindow));

  //     imgui.beginChild("child", ImVec2(0, 50), true);
  //     imgui.text("This is another child window for testing the _ChildWindows flag.");
  //     imgui.endChild();
  //     if (embed_all_inside_a_child_window)
  //         imgui.endChild();

  //     // Calling IsItemHovered() after begin returns the hovered status of the title bar.
  //     // This is useful in particular if you want to create a context menu associated to the title bar of a window.
  //     // This will also work when docked into a Tab (the Tab replace the Title Bar and guarantee the same properties).
  //     static bool test_window = false;
  //     imgui.checkbox("Hovered/Active tests after Begin() for title bar testing", &test_window);
  //     if (test_window)
  //     {
  //         // FIXME-DOCK: This window cannot be docked within the ImGui Demo window, this will cause a feedback loop and get them stuck.
  //         // Could we fix this through an ImGuiWindowClass feature? Or an API call to tag our parent as "don't skip items"?
  //         imgui.begin("Title bar Hovered/Active tests", &test_window);
  //         if (imgui.beginPopupContextItem()) // <-- This is using IsItemHovered()
  //         {
  //             if (imgui.menuItem("Close")) { test_window = false; }
  //             imgui.endPopup();
  //         }
  //         imgui.text(
  //             "IsItemHovered() after begin = %d (== is title bar hovered)\n"
  //             "IsItemActive() after begin = %d (== is window being clicked/moved)\n",
  //             imgui.isItemHovered(), imgui.isItemActive());
  //         imgui.end();
  //     }

  //     imgui.treePop();
  // }

  // // Demonstrate BeginDisabled/EndDisabled using a checkbox located at the bottom of the section (which is a bit odd:
  // // logically we'd have this checkbox at the top of the section, but we don't want this feature to steal that space)
  // if (disable_all)
  //     imgui.endDisabled();

  // IMGUI_DEMO_MARKER("Widgets/Disable Block");
  // if (imgui.treeNode("Disable block"))
  // {
  //     imgui.checkbox("Disable entire section above", &disable_all);
  //     imgui.sameLine(); helpMarker("Demonstrate using BeginDisabled()/EndDisabled() across this section.");
  //     imgui.treePop();
  // }

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
  //     for (int i = 0; i < IM_ARRAYSIZE(lines); i++)
  //         if (filter.PassFilter(lines[i]))
  //             imgui.bulletText("%s", lines[i]);
  //     imgui.treePop();
  // }

  imgui.popItemWidth();
}

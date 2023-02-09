const $ = (cmd: string, ...args: string[]) => {
  console.log(`%c$ ${cmd} ${args.join(" ")}`, "color: #888");
  return new Deno.Command(cmd, {
    args,
    stdin: "null",
    stdout: "inherit",
    stderr: "inherit",
  }).outputSync();
};

// try {
//   Deno.removeSync("./imgui/build", { recursive: true });
// } catch (_e) {
//   // ignore
// }

const cmakeArgs = [
  "-S",
  "./imgui",
  "-B",
  "./imgui/build",
];

$("cmake", ...cmakeArgs);

$("cmake", "--build", "./imgui/build", "--config", "Release");

// const BIN_FILE = "./imgui/build/bin/imgui.dll";

// const OUT_FILE = `./build/imgui_${Deno.build.os}${
//   Deno.build.arch === "aarch64" ? "_aarch64" : ""
// }.js`;

// const encode = (Deno as any)[(Deno as any).internal]
//   .core
//   .ops.op_base64_encode;

// Deno.writeTextFileSync(
//   OUT_FILE,
//   `const BASE64 = "${
//     encode(Deno.readFileSync(BIN_FILE))
//   }";\nconst DECODED = Deno.build.os === "${Deno.build.os}" && Deno.build.arch === "${Deno.build.arch}" ? Deno[Deno.internal].core.ops.op_base64_decode(BASE64) : new Uint8Array();\nexport default DECODED;\n`,
// );

// console.log(`%cWrote ${OUT_FILE}`, "color: #888");

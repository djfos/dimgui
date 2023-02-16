import { join } from "https://deno.land/std@0.177.0/path/mod.ts";
import { getBinFileName, getOutFileName } from "./convention.ts";
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

function embed(): void {
  const binPath = "./imgui/build/bin";
  const distPath = "./imgui/dist";
  const binFile = join(binPath, getBinFileName());
  const outFile = join(distPath, getOutFileName());

  const encode = (Deno as any)[(Deno as any).internal]
    .core
    .ops.op_base64_encode;
  const encodeLib = encode(Deno.readFileSync(binFile));

  const outSource = [
    `const BASE64 = "${encodeLib}";`,
    `const DECODED = Deno.build.os === "${Deno.build.os}" && Deno.build.arch === "${Deno.build.arch}" ? Deno[Deno.internal].core.ops.op_base64_decode(BASE64) : new Uint8Array(); `,
    `export default DECODED;`,
  ];

  Deno.writeTextFileSync(outFile, outSource.join("\n"));
  console.log(`%cWrote ${outFile}`, "color: #888");
}

embed();

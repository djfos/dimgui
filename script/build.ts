import { join } from "https://deno.land/std@0.177.0/path/mod.ts";
import { getBinFileName, getOutFileName, getTemptLibraryPath } from "./convention.ts";
import { DIMGUI_VERSION } from "./version.ts";

function print(message: string) {
  console.log(`%c${message}`, "color: #888");
}

const $ = (cmd: string, ...args: string[]) => {
  print(`$ ${cmd} ${args.join(" ")}`);
  return new Deno.Command(cmd, {
    args,
    stdin: "null",
    stdout: "inherit",
    stderr: "inherit",
  }).outputSync();
};

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
  print(`Wrote ${outFile}`);
}

function removeCachedFile() {
  const filePath = getTemptLibraryPath(DIMGUI_VERSION);
  try {
    Deno.removeSync(filePath);
    print(`Remove cache file ${filePath}`);
  } catch (error) {
    if (error instanceof Deno.errors.NotFound) {
      print(`No cache file found, clear.`);
    }
  }
}

// commands
const cmakeArgs = [
  "-S",
  "./imgui",
  "-B",
  "./imgui/build",
];

$("cmake", ...cmakeArgs);
$("cmake", "--build", "./imgui/build", "--config", "Release");

embed();
removeCachedFile();

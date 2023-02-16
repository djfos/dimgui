const DECODED = Deno.build.os === "windows" && Deno.build.arch === "x86_64" ? Deno[Deno.internal].core.ops.op_base64_decode(BASE64) : new Uint8Array(); 
export default DECODED;
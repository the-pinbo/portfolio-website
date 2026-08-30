import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { computeOutDigest } from "./out-digest.mjs";

const out = new URL("../out/", import.meta.url).pathname;
const record = computeOutDigest(out);
writeFileSync(join(out, ".digest.json"), `${JSON.stringify(record, null, 2)}\n`);
console.log(record.digest);

import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { validateRuntime } from "./runtime-contract.mjs";

const expectedNode = readFileSync(new URL("../.node-version", import.meta.url), "utf8").trim();
const manifest = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));
const actualNode = process.versions.node;
const actualNpm = execFileSync("npm", ["--version"], { encoding: "utf8" }).trim();

validateRuntime({ actualNode, actualNpm, expectedNode, expectedNpm: manifest.engines.npm });
console.log(`runtime verified: Node ${actualNode}, npm ${actualNpm}`);

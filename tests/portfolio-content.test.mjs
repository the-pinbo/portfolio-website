import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const content = readFileSync(
  new URL("../brain-dump/portfolio-content.md", import.meta.url),
  "utf8",
);
const publicCopyStart = content.indexOf("## Public-facing copy");
const evidenceLedgerStart = content.indexOf("## Evidence ledger, not site copy");

assert.ok(publicCopyStart >= 0, "the public-copy marker must exist");
assert.ok(evidenceLedgerStart > publicCopyStart, "the evidence ledger must follow public copy");

const publicCopy = content.slice(publicCopyStart, evidenceLedgerStart);
const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

test("the approved public proof has stable evidence routes", () => {
  for (const source of [
    "https://github.com/inbasperu/VisionGuard",
    "https://summerofcode.withgoogle.com/programs/2024/projects/QUbIeRAM",
    "https://medium.com/openvino-toolkit/visionguard-ai-eye-care-for-computer-users-d055a574d8e9",
    "https://ieeexplore.ieee.org/document/10890318",
    "https://github.com/Posit-Foundation/soft-posit-cpp/commits/refactor-cpp-soft-posits?author=the-pinbo",
    "https://www.credly.com/badges/0caf0ab0-83e9-4614-810a-0a54ef7eb5ab",
    "https://iprsearch.ipindia.gov.in/RQStatus/PatentCertificatePDF.aspx?AppNo=MjAyMzQxMDUxOTgw&FullPath=LVBhdGVudENlcnRpZmljYXRlMzAtMTItMjAyNS5wZGY=",
    "https://www.linkedin.com/in/inbasperu/",
    "https://drive.google.com/file/d/1-LrhKrFmR9FZvuXp9MBH59vLjfCgzr6o/view",
    "https://drive.google.com/file/d/1Yd9XmOQbQr_j_XIw3krVfHL3XIJ8zHTQ/view?usp=sharing",
  ]) {
    assert.match(publicCopy, new RegExp(escapeRegExp(source)));
  }
});

test("RingCentral cases retain the approved narrative without internal detail or defensive labels", () => {
  for (const title of ["Smart Filters", "ACE io MCP server"]) {
    assert.match(publicCopy, new RegExp(title));
  }
  assert.doesNotMatch(publicCopy, /68%|42 complex|25%|16 seconds|5 seconds/);
  assert.doesNotMatch(publicCopy, /\b(?:Elasticsearch|OpenTelemetry|Arize Phoenix|Kubernetes|Flux|Apollo MCP)\b/i);
  assert.doesNotMatch(publicCopy, /\b(?:proof|verified|flagship systems|what i own|engineering loop|confidential production case)\b/i);
  assert.doesNotMatch(publicCopy, /\bproduction(?:-ready)?\b/i);
});

test("the hero uses the refined thesis and restrained resolution line", () => {
  assert.match(publicCopy, /I turn meaningful business problems into reliable software and AI systems\./);
  assert.match(publicCopy, /Evaluated\. Integrated\. Shipped\./);
  assert.doesNotMatch(publicCopy, /production-ready/i);
});

test("excluded résumé material cannot re-enter public-facing copy", () => {
  assert.doesNotMatch(publicCopy, /\bAura\b/i);
  assert.doesNotMatch(publicCopy, /\b(?:technical\s+)?skills?\b/i);
  assert.doesNotMatch(publicCopy, /media\.licdn\.com/);
  assert.match(publicCopy, /Software Development Engineer II at RingCentral/);
  assert.match(publicCopy, /B\.Tech, Electronics and Communication Engineering · 2024/);
  assert.match(publicCopy, /Determinant Studios.*NLP systems/);
});

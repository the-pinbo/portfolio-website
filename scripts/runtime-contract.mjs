import assert from "node:assert/strict";

export function validateRuntime({ actualNode, actualNpm, expectedNode, expectedNpm }) {
  assert.equal(actualNode, expectedNode, `Node runtime mismatch: expected ${expectedNode}, received ${actualNode}`);
  assert.equal(actualNpm, expectedNpm, `npm runtime mismatch: expected ${expectedNpm}, received ${actualNpm}`);
}

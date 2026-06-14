const { describe, it } = require("node:test");
const assert = require("node:assert/strict");

describe("backend smoke", () => {
  it("exports createApp factory", () => {
    const { createApp } = require("../src/app");
    assert.equal(typeof createApp, "function");
  });
});

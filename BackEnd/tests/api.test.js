const { describe, it, before } = require("node:test");
const assert = require("node:assert/strict");
const request = require("supertest");
const { createApp } = require("../src/app");

const validContactPayload = {
  name: "Jane Doe",
  email: "jane@example.com",
  company: "Acme Corp",
  message: "We need help building a lead-gen website for our team.",
};

const validGetStartedPayload = {
  name: "John Smith",
  email: "john@example.com",
  company: "",
  projectType: "web-app",
  timeline: "1-3-months",
  description: "Looking to build a customer portal with authentication.",
};

describe("GET /api/health", () => {
  const app = createApp();

  it("returns ok status", async () => {
    const response = await request(app).get("/api/health");

    assert.equal(response.status, 200);
    assert.equal(response.body.success, true);
    assert.equal(response.body.status, "ok");
    assert.ok(response.body.timestamp);
  });
});

describe("POST /api/contact", () => {
  const app = createApp();

  it("accepts valid contact submission", async () => {
    const response = await request(app)
      .post("/api/contact")
      .send(validContactPayload);

    assert.equal(response.status, 201);
    assert.equal(response.body.success, true);
    assert.match(response.body.message, /thanks for reaching out/i);
    assert.ok(response.body.data.id);
    assert.ok(response.body.data.receivedAt);
  });

  it("returns validation errors for invalid payload", async () => {
    const response = await request(app).post("/api/contact").send({
      name: "",
      email: "not-an-email",
      message: "short",
    });

    assert.equal(response.status, 400);
    assert.equal(response.body.success, false);
    assert.equal(response.body.message, "Validation failed");
    assert.ok(response.body.errors.name);
    assert.ok(response.body.errors.email);
    assert.ok(response.body.errors.message);
  });
});

describe("POST /api/get-started", () => {
  const app = createApp();

  it("accepts valid get-started submission", async () => {
    const response = await request(app)
      .post("/api/get-started")
      .send(validGetStartedPayload);

    assert.equal(response.status, 201);
    assert.equal(response.body.success, true);
    assert.match(response.body.message, /captured your details/i);
    assert.ok(response.body.data.id);
    assert.ok(response.body.data.receivedAt);
  });

  it("returns validation errors for invalid payload", async () => {
    const response = await request(app).post("/api/get-started").send({
      name: "A",
      email: "bad",
      projectType: "invalid",
      timeline: "invalid",
      description: "hi",
    });

    assert.equal(response.status, 400);
    assert.equal(response.body.success, false);
    assert.equal(response.body.message, "Validation failed");
    assert.ok(response.body.errors.email);
    assert.ok(response.body.errors.description);
  });
});

describe("rate limiting", () => {
  let app;

  before(() => {
    app = createApp({ rateLimitMax: 2, rateLimitWindowMs: 60_000 });
  });

  it("returns 429 when limit exceeded", async () => {
    const first = await request(app)
      .post("/api/contact")
      .send(validContactPayload);
    const second = await request(app)
      .post("/api/contact")
      .send(validContactPayload);
    const third = await request(app)
      .post("/api/contact")
      .send(validContactPayload);

    assert.equal(first.status, 201);
    assert.equal(second.status, 201);
    assert.equal(third.status, 429);
    assert.equal(third.body.success, false);
    assert.match(third.body.message, /too many requests/i);
  });
});

describe("schema validators", () => {
  const { parseContactInput } = require("../src/schemas/contact-schema");
  const { parseGetStartedInput } = require("../src/schemas/get-started-schema");

  it("rejects control characters in contact name", () => {
    const result = parseContactInput({
      ...validContactPayload,
      name: "Jane\u0007Doe",
    });

    assert.equal(result.success, false);
    assert.ok(result.errors.name);
  });

  it("rejects invalid project type", () => {
    const result = parseGetStartedInput({
      ...validGetStartedPayload,
      projectType: "not-valid",
    });

    assert.equal(result.success, false);
    assert.ok(result.errors.projectType);
  });
});

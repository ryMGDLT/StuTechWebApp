const express = require("express");
const { parseGetStartedInput } = require("../schemas/get-started-schema");
const { submitGetStartedLead } = require("../services/get-started-service");

const router = express.Router();

router.post("/", async (req, res, next) => {
  const parsed = parseGetStartedInput(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: parsed.errors,
    });
  }

  try {
    const result = await submitGetStartedLead(parsed.data);

    return res.status(201).json({
      success: true,
      message:
        "Thanks — we've captured your details. A team member will follow up within one business day.",
      data: {
        id: result.id,
        receivedAt: result.receivedAt,
      },
    });
  } catch (error) {
    return next(error);
  }
});

module.exports = { getStartedRouter: router };

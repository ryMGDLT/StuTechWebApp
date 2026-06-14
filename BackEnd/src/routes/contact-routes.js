const express = require("express");
const { parseContactInput } = require("../schemas/contact-schema");
const { submitContactLead } = require("../services/contact-service");

const router = express.Router();

router.post("/", async (req, res, next) => {
  const parsed = parseContactInput(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: parsed.errors,
    });
  }

  try {
    const result = await submitContactLead(parsed.data);

    return res.status(201).json({
      success: true,
      message: "Thanks for reaching out. We'll review your message and respond soon.",
      data: {
        id: result.id,
        receivedAt: result.receivedAt,
      },
    });
  } catch (error) {
    return next(error);
  }
});

module.exports = { contactRouter: router };

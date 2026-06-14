const { env } = require("../lib/env");

/**
 * @typedef {Object} GetStartedLead
 * @property {string} name
 * @property {string} email
 * @property {string} [company]
 * @property {string} projectType
 * @property {string} timeline
 * @property {string} description
 */

/**
 * @param {GetStartedLead} lead
 * @returns {Promise<{ id: string, receivedAt: string }>}
 */
async function submitGetStartedLead(lead) {
  const receivedAt = new Date().toISOString();

  if (env.CONTACT_WEBHOOK_URL) {
    const response = await fetch(env.CONTACT_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "get-started",
        ...lead,
        receivedAt,
      }),
    });

    if (!response.ok) {
      throw new Error("Webhook delivery failed");
    }
  }

  return {
    id: `get-started-${Date.now()}`,
    receivedAt,
  };
}

module.exports = { submitGetStartedLead };

const { env } = require("../lib/env");

/**
 * @typedef {Object} ContactLead
 * @property {string} name
 * @property {string} email
 * @property {string} [company]
 * @property {string} message
 */

/**
 * @param {ContactLead} lead
 * @returns {Promise<{ id: string, receivedAt: string }>}
 */
async function submitContactLead(lead) {
  const receivedAt = new Date().toISOString();

  if (env.CONTACT_WEBHOOK_URL) {
    const response = await fetch(env.CONTACT_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "contact",
        ...lead,
        receivedAt,
      }),
    });

    if (!response.ok) {
      throw new Error("Webhook delivery failed");
    }
  }

  return {
    id: `contact-${Date.now()}`,
    receivedAt,
  };
}

module.exports = { submitContactLead };

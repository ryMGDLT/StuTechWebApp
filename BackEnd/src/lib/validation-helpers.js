/**
 * @param {string} value
 * @returns {boolean}
 */
function hasControlCharacters(value) {
  for (const char of value) {
    const code = char.charCodeAt(0);
    if (code <= 0x1f || code === 0x7f) {
      return true;
    }
  }
  return false;
}

module.exports = { hasControlCharacters };

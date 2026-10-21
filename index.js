"use strict";
function capitalize(str) {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
function truncate(str, maxLen, suffix) {
  suffix = suffix !== undefined ? suffix : "...";
  if (str.length <= maxLen) return str;
  return str.substring(0, maxLen - suffix.length) + suffix;
}
module.exports = { capitalize, truncate };

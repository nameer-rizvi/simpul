const trycallback = require("./trycallback");

function decode(token) {
  const t = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");

  const a = atob(t)
    .split("")
    .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
    .join("");

  return decodeURIComponent(a);
}

function decodeJSON(token, callback) {
  return trycallback(() => JSON.parse(decode(token)), callback);
}

module.exports = { decode, decodeJSON };

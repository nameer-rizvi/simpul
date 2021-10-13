const capitalize = require("./capitalize");
const { isString, isNumber } = require("./validate");
const timelog = require("./timelog");

function logGenerator({
  message,
  ignoreStringifiedNumber,
  key,
  self,
  emoji,
  ignoreNonCriticalLogs,
}) {
  message = capitalize(message && message.toString());

  if (isString(message)) {
    if (!ignoreStringifiedNumber)
      message = message
        .split(" ")
        .map((token) =>
          isNumber(token) ? Number(token).toLocaleString() : token
        )
        .join(" ");

    if (message.charAt(message.length - 1).match(/[a-z0-9)]/i)) message += ".";
  }

  let keyPrefix = capitalize(key);

  const maxKeyLength = self
    .map(({ key }) => key)
    .sort((a, b) => b.length - a.length)[0].length;

  const dots = maxKeyLength - key.length;

  for (let i = 0; i < dots; i++) {
    keyPrefix += ".";
  }

  keyPrefix += ":";

  const full = [emoji, keyPrefix, message].filter(Boolean).join(" ");

  if (ignoreNonCriticalLogs) {
    if (key === "error" || key === "warning" || key === "at") timelog(full);
  } else timelog(full);
}

const logResolver = (customConfigs = [], options = {}) =>
  [
    { key: "at", emoji: "➡️ " },
    { key: "error", emoji: "🚨" },
    { key: "express", emoji: "⚡", ignoreStringifiedNumber: true },
    { key: "fetch", emoji: "🐶" },
    { key: "jsontxt", emoji: "♻️ " },
    { key: "mail", emoji: "📬" },
    { key: "mongo", emoji: "🌿" },
    { key: "mysql", emoji: "🐬" },
    { key: "polyfill", emoji: "🔨" },
    { key: "react", emoji: "⚛️ " },
    { key: "redis", emoji: "🔺" },
    { key: "route", emoji: "🚚" },
    { key: "scrapefrom", emoji: "👾" },
    { key: "sendgrid", emoji: "📫" },
    { key: "sw", emoji: "👷" },
    { key: "user", emoji: "👤" },
    { key: "warning", emoji: "🚧" },
    { key: "webpush", emoji: "🔔" },
    { key: "webscraper", emoji: "👾" },
    ...customConfigs,
  ].reduce(
    (reducer, config, index, self) => ({
      ...reducer,
      [config.key]: (message) =>
        logGenerator({ ...options, ...config, index, self, message }),
    }),
    {}
  );

module.exports = logResolver;

const capitalize = require("./capitalize");
const validate = require("./validate");
const timenvlog = require("./timenvlog");

// TESTER/SAMPLE:
//
// logResolver(undefined, {
//   ignoreStringifiedNumber: true,
//   ignoreKeyPrefix: true,
//   ignoreDots: true,
//   ignoreNonCriticalLogs: true,
//   flags: ["minimal"],
//   ignoreEnvironment: true,
//   ignoreTimestamp: true,
//   date: new Date("7/27/1996 1:00 PM"),
//   date_format: "M.D.Y",
//   date_option: { military: true },
// }).yen("dude it's 123123123123", { flag: "minimal" });

function logGenerator({
  log,
  ignoreStringifiedNumber,
  ignoreKeyPrefix,
  key,
  ignoreDots,
  self,
  emoji,
  ignoreNonCriticalLogs,
  isCritical,
  flags = [],
  flag = "",
  ...timenvlogOption
}) {
  log = capitalize(log?.toString?.());

  if (validate.isString(log)) {
    if (!ignoreStringifiedNumber)
      log = log
        .split(" ")
        .map((token) =>
          validate.isNumber(token) ? Number(token).toLocaleString() : token
        )
        .join(" ");

    if (log.charAt(log.length - 1).match(/[a-z0-9)]/i)) log += ".";
  }

  let keyPrefix;

  if (!ignoreKeyPrefix) {
    keyPrefix = capitalize(key).replace(/[0-9]/g, ".");
    if (!ignoreDots) {
      const maxKeyLength = self
        .map(({ key }) => key.replace(/[0-9]/g, ""))
        .sort((a, b) => b.length - a.length)[0].length;
      for (let i = 0; i < maxKeyLength - key.length; i++) keyPrefix += ".";
    }
    keyPrefix += ":";
  }

  const full = [emoji, keyPrefix, log].filter(Boolean).join(" ");

  if (ignoreNonCriticalLogs) {
    if (log instanceof Error || isCritical || flags.includes(flag))
      timenvlog(full, timenvlogOption);
  } else timenvlog(full, timenvlogOption);
}

const logResolver = (customConfigs = [], option = {}) =>
  [
    { key: "at", emoji: "➡️ " },
    { key: "aws", emoji: "☁️ " },
    { key: "bank", emoji: "🏦" },
    { key: "bot", emoji: "🤖" },
    { key: "cart", emoji: "🛒" },
    { key: "cloud", emoji: "☁️ " },
    { key: "comment", emoji: "💬" },
    { key: "console", emoji: "📟" },
    { key: "controller", emoji: "🎛️ " },
    { key: "cronjob", emoji: "⏰" },
    { key: "database", emoji: "🗄️ " },
    { key: "environment", emoji: "🌐" },
    { key: "error", emoji: "🚨" },
    { key: "express", emoji: "⚡", ignoreStringifiedNumber: true },
    { key: "fetch", emoji: "🐶" },
    { key: "firebase", emoji: "🔥" },
    { key: "google", emoji: "🇬 " },
    { key: "info", emoji: "ℹ️ " },
    { key: "jsontxt", emoji: "♻️ " },
    { key: "mail", emoji: "📬" },
    { key: "mongo", emoji: "🌿" },
    { key: "mysql", emoji: "🐬" },
    { key: "notification", emoji: "🔔" },
    { key: "ok", emoji: "🆗" },
    { key: "payload", emoji: "📦" },
    { key: "performance", emoji: "⏱️ " },
    { key: "polyfill", emoji: "🔨" },
    { key: "ratelimit", emoji: "🕒" },
    { key: "react", emoji: "⚛️ " },
    { key: "reddit", emoji: "😺" },
    { key: "redis", emoji: "🔺" },
    { key: "report", emoji: "📋" },
    { key: "request", emoji: "🚚" },
    { key: "route", emoji: "🚚" },
    { key: "saved", emoji: "💾" },
    { key: "scrapefrom", emoji: "👾" },
    { key: "search", emoji: "🔍" },
    { key: "sendgrid", emoji: "📫" },
    { key: "shop", emoji: "🛒" },
    { key: "signal", emoji: "📡" },
    { key: "stripe", emoji: "💳" },
    { key: "success", emoji: "✅" },
    { key: "sw", emoji: "👷" },
    { key: "td", emoji: "🏦" },
    { key: "trade", emoji: "💳" },
    { key: "twitter", emoji: "🐦" },
    { key: "user", emoji: "👤" },
    { key: "validation", emoji: "🛡️ " },
    { key: "warning", emoji: "⚠️ " },
    { key: "webpush", emoji: "🔔" },
    { key: "webscraper", emoji: "👾" },
    { key: "window", emoji: "🖥️ " },
    ...customConfigs,
  ].reduce((reducer, config, index, self) => {
    return {
      ...reducer,
      [config.key]: (log, option2) =>
        logGenerator({
          ...option,
          ...option2,
          ...config,
          index,
          self,
          log,
        }),
    };
  }, {});

module.exports = logResolver;

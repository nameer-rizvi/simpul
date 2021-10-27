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

  let keyPrefix = capitalize(key).replace(/[0-9]/g, ".");

  const maxKeyLength = self
    .map(({ key }) => key.replace(/[0-9]/g, "."))
    .sort((a, b) => b.length - a.length)[0].length;

  const dots = maxKeyLength - key.length;

  for (let i = 0; i < dots; i++) {
    keyPrefix += ".";
  }

  keyPrefix += ":";

  const full = [emoji, keyPrefix, message].filter(Boolean).join(" ");

  if (ignoreNonCriticalLogs) {
    const isCriticalLog =
      key.startsWith("error") ||
      key.startsWith("warning") ||
      key.startsWith("at");

    if (isCriticalLog) timelog(full);
  } else timelog(full);
}

const logResolver = (customConfigs = [], options = {}) =>
  [
    { key: "abacus", emoji: "🧮" },
    { key: "announcing", emoji: "📣" },
    { key: "antivirus", emoji: "🛡️ " },
    { key: "asserting", emoji: "🔮" },
    { key: "at", emoji: "➡️ " },
    { key: "at2", emoji: "👉" },
    { key: "atm", emoji: "🏧" },
    { key: "attached", emoji: "📎" },
    { key: "aws", emoji: "☁️ " },
    { key: "balloon", emoji: "🎈" },
    { key: "ballot", emoji: "🗳️ " },
    { key: "battery", emoji: "🔋" },
    { key: "book", emoji: "📕" },
    { key: "bookmark", emoji: "🔖" },
    { key: "books", emoji: "📚" },
    { key: "bot", emoji: "🤖", ignoreStringifiedNumber: true },
    { key: "calendar", emoji: "📅" },
    { key: "camera", emoji: "📷" },
    { key: "card", emoji: "💳" },
    { key: "cart", emoji: "🛒" },
    { key: "cd", emoji: "💽" },
    { key: "champion", emoji: "🏆" },
    { key: "champion2", emoji: "🏅" },
    { key: "champion3", emoji: "🥇" },
    { key: "charger", emoji: "🔋" },
    { key: "chart", emoji: "📈" },
    { key: "chart2", emoji: "📉" },
    { key: "chart3", emoji: "📊" },
    { key: "clipboard", emoji: "📋" },
    { key: "cloud", emoji: "☁️ " },
    { key: "comment", emoji: "💬" },
    { key: "comment2", emoji: "💭" },
    { key: "controller", emoji: "🎛️ " },
    { key: "controls", emoji: "🎛️ " },
    { key: "cronjob", emoji: "⏰" },
    { key: "cut", emoji: "✂️ " },
    { key: "database", emoji: "🗄️ " },
    { key: "date", emoji: "📅" },
    { key: "dead", emoji: "⚰️ " },
    { key: "dead2", emoji: "☠️ " },
    { key: "deleted", emoji: "🗑️ " },
    { key: "desktop", emoji: "🖥️ " },
    { key: "device", emoji: "💻" },
    { key: "directory", emoji: "📇" },
    { key: "disk", emoji: "💾" },
    { key: "document", emoji: "📁" },
    { key: "dollar", emoji: "💵" },
    { key: "drawing", emoji: "🖍️ " },
    { key: "envelope", emoji: "✉️ " },
    { key: "error", emoji: "🚨" },
    { key: "error2", emoji: "‼️ " },
    { key: "error3", emoji: "❌" },
    { key: "error4", emoji: "👎" },
    { key: "error5", emoji: "💩" },
    { key: "euro", emoji: "💶" },
    { key: "express", emoji: "⚡", ignoreStringifiedNumber: true },
    { key: "fail", emoji: "🚨" },
    { key: "fail2", emoji: "‼️ " },
    { key: "fail3", emoji: "❌" },
    { key: "fail4", emoji: "👎" },
    { key: "fail5", emoji: "💩" },
    { key: "fax", emoji: "📠" },
    { key: "fetch", emoji: "🐶" },
    { key: "filtered", emoji: "✂️ " },
    { key: "folder", emoji: "📁" },
    { key: "google", emoji: "🇬 " },
    { key: "hundy", emoji: "💯" },
    { key: "idea", emoji: "💡" },
    { key: "identifier", emoji: "🆔" },
    { key: "inbox", emoji: "📥" },
    { key: "index", emoji: "📇" },
    { key: "info", emoji: "ℹ️ " },
    { key: "jsontxt", emoji: "♻️ " },
    { key: "key", emoji: "🔑" },
    { key: "keyboard", emoji: "⌨️ " },
    { key: "killed", emoji: "⚰️ " },
    { key: "killed2", emoji: "☠️ " },
    { key: "label", emoji: "🏷️ " },
    { key: "laptop", emoji: "💻" },
    { key: "ledger", emoji: "📒" },
    { key: "letter", emoji: "✉️ " },
    { key: "linked", emoji: "🔗" },
    { key: "loading", emoji: "⌛" },
    { key: "locked", emoji: "🔒" },
    { key: "locked2", emoji: "🔐" },
    { key: "mail", emoji: "📬" },
    { key: "mail2", emoji: "✉️ " },
    { key: "math", emoji: "🧮" },
    { key: "memo", emoji: "📝" },
    { key: "mobile", emoji: "📱" },
    { key: "money", emoji: "💰" },
    { key: "money2", emoji: "💸" },
    { key: "mongo", emoji: "🌿" },
    { key: "mouse", emoji: "🖱️ " },
    { key: "mysql", emoji: "🐬" },
    { key: "new", emoji: "🆕" },
    { key: "news", emoji: "📰" },
    { key: "newspaper", emoji: "📰" },
    { key: "notebook", emoji: "📓" },
    { key: "ok", emoji: "🆗" },
    { key: "ok2", emoji: "👌" },
    { key: "outbox", emoji: "📤" },
    { key: "package", emoji: "📦" },
    { key: "pager", emoji: "📟" },
    { key: "painting", emoji: "🖌️ " },
    { key: "password", emoji: "🔑" },
    { key: "payload", emoji: "📦" },
    { key: "pending", emoji: "⌛" },
    { key: "pinned", emoji: "📌" },
    { key: "plug", emoji: "🔌" },
    { key: "polyfill", emoji: "🔨" },
    { key: "pound", emoji: "💷" },
    { key: "predict", emoji: "🔮" },
    { key: "printer", emoji: "🖨️ " },
    { key: "prohibited", emoji: "🚫" },
    { key: "protected", emoji: "🔒" },
    { key: "protected2", emoji: "🔐" },
    { key: "protection", emoji: "🛡️ " },
    { key: "purchase", emoji: "🛍️ " },
    { key: "radio", emoji: "📻" },
    { key: "ratelimit", emoji: "🕒" },
    { key: "react", emoji: "⚛️ " },
    { key: "receipt", emoji: "🧾" },
    { key: "reddit", emoji: "😺" },
    { key: "redis", emoji: "🔺" },
    { key: "removed", emoji: "✂️ " },
    { key: "request", emoji: "🚚" },
    { key: "route", emoji: "🚚" },
    { key: "saved", emoji: "💾" },
    { key: "saved2", emoji: "📎" },
    { key: "scrapefrom", emoji: "👾" },
    { key: "scroll", emoji: "📜" },
    { key: "search", emoji: "🔍" },
    { key: "sendgrid", emoji: "📫" },
    { key: "shop", emoji: "🛒" },
    { key: "shopping", emoji: "🛒" },
    { key: "signal", emoji: "📡" },
    { key: "sleeping", emoji: "💤" },
    { key: "stop", emoji: "🛑" },
    { key: "success", emoji: "✅" },
    { key: "success2", emoji: "🎉" },
    { key: "success3", emoji: "✨" },
    { key: "success4", emoji: "💫" },
    { key: "success5", emoji: "🔥" },
    { key: "success6", emoji: "👍" },
    { key: "sw", emoji: "👷" },
    { key: "tabs", emoji: "📑" },
    { key: "tag", emoji: "🏷️ " },
    { key: "telephone", emoji: "☎️ " },
    { key: "telephone2", emoji: "📞" },
    { key: "thinking", emoji: "💬" },
    { key: "thinking2", emoji: "💭" },
    { key: "thought", emoji: "💡" },
    { key: "trashed", emoji: "🗑️ " },
    { key: "tv", emoji: "📺" },
    { key: "unlocked", emoji: "🔓" },
    { key: "user", emoji: "👤" },
    { key: "user2", emoji: "🙂" },
    { key: "user3", emoji: "👼" },
    { key: "validation", emoji: "🛡️ " },
    { key: "warning", emoji: "🚧" },
    { key: "warning2", emoji: "⚠️ " },
    { key: "watching", emoji: "👀" },
    { key: "webpush", emoji: "🔔" },
    { key: "webscraper", emoji: "👾" },
    { key: "window", emoji: "🖥️ " },
    { key: "winner", emoji: "🏆" },
    { key: "winner2", emoji: "🏅" },
    { key: "winner3", emoji: "🥇" },
    { key: "writing", emoji: "✏️ " },
    { key: "writing2", emoji: "✒️ " },
    { key: "yen", emoji: "💴" },
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

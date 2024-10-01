import capitalize from "./capitalize";
import validate from "./validate";
import timenvlog from "./timenvlog";

interface LogGeneratorOptions {
  log?: any;
  ignoreStringifiedNumber?: boolean;
  ignoreKeyPrefix?: boolean;
  key?: string;
  ignoreDots?: boolean;
  self?: Array<any>;
  emoji?: string;
  ignoreNonCriticalLogs?: boolean;
  isCritical?: boolean;
  flags?: string[];
  flag?: string;
  [key: string]: any;
}

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
}: LogGeneratorOptions): void {
  log = capitalize(log?.toString?.());

  if (validate.isString(log)) {
    if (!ignoreStringifiedNumber) log = log.split(" ").map(map).join(" ");
    if (log.charAt(log.length - 1).match(/[a-z0-9)]/i)) log += ".";
  }

  let keyPrefix: string | undefined;

  if (!ignoreKeyPrefix) {
    keyPrefix = capitalize(key || "")?.replace(/[0-9]/g, ".");
    if (!ignoreDots) {
      const maxKeyLength = self
        ?.map(({ key }: { key: string }) => key.replace(/[0-9]/g, ""))
        .sort((a: string, b: string) => b.length - a.length)[0].length;
      for (let i = 0; i < (maxKeyLength || 0) - (key?.length || 0); i++)
        keyPrefix += ".";
    }
    keyPrefix += ":";
  }

  const full = [emoji, keyPrefix, log].filter(Boolean).join(" ");

  if (ignoreNonCriticalLogs) {
    if (log instanceof Error || isCritical || flags.includes(flag))
      timenvlog(full, timenvlogOption);
  } else {
    timenvlog(full, timenvlogOption);
  }
}

interface LogResolverConfig {
  key: string;
  emoji: string;
  ignoreStringifiedNumber?: boolean;
}

const logResolver = (
  customConfigs: LogResolverConfig[] = [],
  option: Partial<LogGeneratorOptions> = {},
) =>
  [
    { key: "algo", emoji: "🤖" },
    { key: "at", emoji: "➡️ " },
    { key: "aws", emoji: "☁️ " },
    { key: "bank", emoji: "🏦" },
    { key: "bot", emoji: "🤖" },
    { key: "cart", emoji: "🛒" },
    { key: "cleaner", emoji: "🧹" },
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
    { key: "strapi", emoji: "☂️ " },
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
      [config.key]: (log: string, option2: Partial<LogGeneratorOptions>) =>
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

function map(token: string | number): string | number {
  return validate.isNumber(token) ? Number(token).toLocaleString() : token;
}

export default logResolver;

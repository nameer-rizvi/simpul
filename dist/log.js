"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const capitalize_1 = __importDefault(require("./capitalize"));
const validate_1 = __importDefault(require("./validate"));
const timenvlog_1 = __importDefault(require("./timenvlog"));
function logGenerator(_a) {
    var _b, _c;
    var { log, ignoreStringifiedNumber, ignoreKeyPrefix, key, ignoreDots, self, emoji, ignoreNonCriticalLogs, isCritical, flags = [], flag = "" } = _a, timenvlogOption = __rest(_a, ["log", "ignoreStringifiedNumber", "ignoreKeyPrefix", "key", "ignoreDots", "self", "emoji", "ignoreNonCriticalLogs", "isCritical", "flags", "flag"]);
    log = (0, capitalize_1.default)((_b = log === null || log === void 0 ? void 0 : log.toString) === null || _b === void 0 ? void 0 : _b.call(log));
    if (validate_1.default.isString(log)) {
        if (!ignoreStringifiedNumber)
            log = log.split(" ").map(map).join(" ");
        if (log.charAt(log.length - 1).match(/[a-z0-9)]/i))
            log += ".";
    }
    let keyPrefix;
    if (!ignoreKeyPrefix) {
        keyPrefix = (_c = (0, capitalize_1.default)(key || "")) === null || _c === void 0 ? void 0 : _c.replace(/[0-9]/g, ".");
        if (!ignoreDots) {
            const maxKeyLength = self === null || self === void 0 ? void 0 : self.map(({ key }) => key.replace(/[0-9]/g, "")).sort((a, b) => b.length - a.length)[0].length;
            for (let i = 0; i < (maxKeyLength || 0) - ((key === null || key === void 0 ? void 0 : key.length) || 0); i++)
                keyPrefix += ".";
        }
        keyPrefix += ":";
    }
    const full = [emoji, keyPrefix, log].filter(Boolean).join(" ");
    if (ignoreNonCriticalLogs) {
        if (log instanceof Error || isCritical || flags.includes(flag))
            (0, timenvlog_1.default)(full, timenvlogOption);
    }
    else {
        (0, timenvlog_1.default)(full, timenvlogOption);
    }
}
const logResolver = (customConfigs = [], option = {}) => [
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
    return Object.assign(Object.assign({}, reducer), { [config.key]: (log, option2) => logGenerator(Object.assign(Object.assign(Object.assign(Object.assign({}, option), option2), config), { index,
            self,
            log })) });
}, {});
function map(token) {
    return validate_1.default.isNumber(token) ? Number(token).toLocaleString() : token;
}
exports.default = logResolver;

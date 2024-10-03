"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
const datestring_1 = __importDefault(require("./datestring"));
function timenvlog(log, option = {}) {
    var _a;
    let datetime;
    let environment;
    if (!validate_1.default.isString(log)) {
        log = log === null || log === void 0 ? void 0 : log.toString();
    }
    if (!option.ignoreTimestamp) {
        datetime = (0, datestring_1.default)(option.date, option.date_format, option.date_option);
    }
    if (!option.ignoreEnvironment) {
        environment = (_a = process.env.NODE_ENV) === null || _a === void 0 ? void 0 : _a.toUpperCase();
    }
    const timeenv = [datetime, environment].filter(Boolean).join(" @ ");
    if (timeenv && log) {
        console.log(`[${timeenv}] ${log}`);
    }
    else if (log) {
        console.log(log);
    }
}
exports.default = timenvlog;

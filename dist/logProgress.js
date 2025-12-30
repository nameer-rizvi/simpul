"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = __importDefault(require("./math"));
// Add functionality to track progress of a repeating process (i.e. loops).
function logProgressDecorator(total, withDatetime = true) {
    let current = 0;
    const totalString = total.toLocaleString();
    const isTTY = process.stdout.isTTY;
    return function logProgress() {
        var _a;
        if (++current > total)
            return;
        const isLast = current === total;
        let line = "";
        if (withDatetime) {
            line += new Date().toLocaleString().replace(",", "") + " - ";
        }
        line += isLast ? "⌛ Completed " : "⏳ Progress ";
        line += current.toLocaleString();
        line += "/";
        line += totalString;
        line += " (";
        line += (_a = math_1.default.percent(current, total)) !== null && _a !== void 0 ? _a : 0;
        line += "%)";
        line += isLast ? ".\n" : "...";
        if (isTTY) {
            process.stdout.clearLine(0);
            process.stdout.cursorTo(0);
        }
        process.stdout.write(line);
    };
}
exports.default = logProgressDecorator;

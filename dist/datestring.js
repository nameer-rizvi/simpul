"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
function datestring(date = "", format = "M/D/Y h:m:s p", option = {}) {
    const dateObject = validate_1.default.isDate(date) ? new Date(date) : new Date();
    const h = option.military
        ? dateObject.getHours()
        : dateObject.getHours() % 12 || 12;
    function zeroify(num) {
        return num < 10 ? "0" + num : String(num);
    }
    function mapper(key) {
        switch (key) {
            case "M":
                return zeroify(dateObject.getMonth() + 1);
            case "D":
                return zeroify(dateObject.getDate());
            case "Y":
                return String(dateObject.getFullYear());
            case "h":
                return zeroify(h);
            case "m":
                return zeroify(dateObject.getMinutes());
            case "s":
                return zeroify(dateObject.getSeconds());
            case "p":
                return dateObject.getHours() >= 12 ? "PM" : "AM";
            default:
                return key;
        }
    }
    return format.split("").map(mapper).join("");
}
exports.default = datestring;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
const math_1 = __importDefault(require("./math"));
const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});
function numberstring(number, types = []) {
    var _a;
    if (validate_1.default.isNumber(number)) {
        let string = (_a = math_1.default.num(number)) === null || _a === void 0 ? void 0 : _a.toLocaleString();
        if (!validate_1.default.isString(string))
            return;
        if (types.includes("$")) {
            string = currency.format(number);
        }
        else if (types.includes("#")) {
            string = `#${string}`;
        }
        else if (types.includes("%")) {
            string += "%";
        }
        else if (types.includes("x")) {
            string += "x";
        }
        if (types.includes("+") && number > 0) {
            string = "+" + string;
        }
        if (types.includes(".-")) {
            string = string.split(".")[0];
        }
        else if (types.includes(".+")) {
            if (!string.includes("."))
                string += ".00";
        }
        return string;
    }
}
exports.default = numberstring;

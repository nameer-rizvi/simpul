"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
const math_1 = __importDefault(require("./math"));
const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});
function numberstring(input, types = []) {
    if (!validate_1.default.isNumeric(input))
        return;
    const number = math_1.default.num(Number(input));
    let output;
    if (types.includes("$")) {
        output = currencyFormatter.format(number);
    }
    else {
        output = number.toLocaleString();
        if (types.includes("#"))
            output = `#${output}`;
        else if (types.includes("%"))
            output += "%";
        else if (types.includes("x"))
            output += "x";
    }
    if (types.includes("+") && number > 0) {
        output = `+${output}`;
    }
    if (types.includes(".-")) {
        const dot = output.indexOf(".");
        if (dot !== -1)
            output = output.slice(0, dot);
    }
    else if (types.includes(".+") && !output.includes(".")) {
        output += ".00";
    }
    return output;
}
exports.default = numberstring;

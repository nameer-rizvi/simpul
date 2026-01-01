"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
const math_1 = __importDefault(require("./math"));
function rescale(input, propName, [rangeMin, rangeMax] = [0, 100]) {
    if (!validate_1.default.isArrayNonEmpty(input))
        return;
    let min = Infinity;
    let max = -Infinity;
    for (const item of input) {
        const value = propName ? item[propName] : item;
        if (!validate_1.default.isNumber(value))
            continue;
        if (value < min)
            min = value;
        if (value > max)
            max = value;
    }
    const sourceRange = max - min;
    const targetRange = rangeMax - rangeMin;
    if (sourceRange === 0 || targetRange <= 0)
        return;
    const scale = targetRange / sourceRange;
    for (let i = 0; i < input.length; i++) {
        const raw = propName
            ? input[i][propName]
            : input[i];
        if (!validate_1.default.isNumber(raw))
            continue;
        const scaled = math_1.default.num(rangeMin + (raw - min) * scale);
        if (scaled === undefined)
            continue;
        if (propName) {
            input[i][propName] = scaled;
        }
        else {
            input[i] = scaled;
        }
    }
}
exports.default = rescale;

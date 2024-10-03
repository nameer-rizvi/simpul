"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = __importDefault(require("./math"));
function scale(array, propName, [minRange, maxRange] = [0, 100]) {
    let max = -Infinity;
    let min = Infinity;
    for (const item of array) {
        const value = propName ? item[propName] : item;
        if (typeof value === "number") {
            if (value > max)
                max = value;
            if (value < min)
                min = value;
        }
    }
    const range1 = max - min;
    const range2 = maxRange - minRange;
    if (range1 === 0 || range2 <= 0)
        return; // Prevent division by zero.
    for (let i = 0; i < array.length; i++) {
        const value = propName
            ? array[i][propName]
            : array[i];
        const scaledValue = math_1.default.num(((value - min) / range1) * range2);
        if (typeof scaledValue !== "number")
            continue;
        if (propName) {
            array[i][propName] = scaledValue;
        }
        else {
            array[i] = scaledValue;
        }
    }
}
exports.default = scale;

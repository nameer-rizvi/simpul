"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
const math_1 = __importDefault(require("./math"));
function wave(array) {
    const results = [];
    if (!validate_1.default.isArrayValid(array))
        return results;
    const range = [array[0], array[0]]; // ["low", "high"]
    const trend = [0, 0]; // ["trend", "extrema" ("maxima" or "minima")]
    for (let i = 0; i < array.length; i++) {
        const value = array[i];
        if (trend[1] === 0 && value > range[1]) {
            trend[1] = 1;
            trend[0] = 1;
        }
        else if (trend[1] === 0 && value < range[0]) {
            trend[1] = -1;
            trend[0] = -1;
        }
        if (trend[1] === 1 && value > range[1]) {
            range[1] = value;
        }
        else if (trend[1] === 1 && value < range[1]) {
            range[0] = value;
            trend[1] = 0;
        }
        if (trend[1] === -1 && value < range[0]) {
            range[0] = value;
        }
        else if (trend[1] === -1 && value > range[0]) {
            range[1] = value;
            trend[1] = 0;
        }
        const changeNum = [
            math_1.default.change.num(range[0], value) || 0,
            math_1.default.change.num(range[1], value) || 0,
        ];
        const changePerc = [
            math_1.default.change.percent(range[0], value) || 0,
            math_1.default.change.percent(range[1], value) || 0,
        ];
        const gapNum = math_1.default.change.num(range[0], range[1]) || 0;
        const gapPerc = math_1.default.change.percent(range[0], range[1]) || 0;
        results.push({
            index: i,
            value,
            range: [range[0], range[1]],
            trend: [trend[0], trend[1]],
            changeNum,
            changePerc,
            gapNum,
            gapPerc,
        });
    }
    return results;
}
exports.default = wave;

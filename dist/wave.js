"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
const math_1 = __importDefault(require("./math"));
function wave(array) {
    if (!validate_1.default.isArrayNonEmpty(array))
        return [];
    const results = new Array(array.length);
    let low = array[0];
    let high = array[0];
    let trendDir = 0;
    let extrema = 0;
    for (let i = 0; i < array.length; i++) {
        const value = array[i];
        if (extrema === 0) {
            if (value > high) {
                extrema = 1;
                trendDir = 1;
                high = value;
            }
            else if (value < low) {
                extrema = -1;
                trendDir = -1;
                low = value;
            }
        }
        else if (extrema === 1) {
            if (value > high) {
                high = value;
            }
            else if (value < high) {
                low = value;
                extrema = 0;
            }
        }
        else {
            if (value < low) {
                low = value;
            }
            else if (value > low) {
                high = value;
                extrema = 0;
            }
        }
        const changeLowNum = math_1.default.change.num(low, value) || 0;
        const changeHighNum = math_1.default.change.num(high, value) || 0;
        const changeLowPerc = math_1.default.change.percent(low, value) || 0;
        const changeHighPerc = math_1.default.change.percent(high, value) || 0;
        const gapNum = math_1.default.change.num(low, high) || 0;
        const gapPerc = math_1.default.change.percent(low, high) || 0;
        results[i] = {
            index: i,
            value,
            range: [low, high],
            trend: [trendDir, extrema],
            changeNum: [changeLowNum, changeHighNum],
            changePerc: [changeLowPerc, changeHighPerc],
            gapNum,
            gapPerc,
        };
    }
    return results;
}
exports.default = wave;

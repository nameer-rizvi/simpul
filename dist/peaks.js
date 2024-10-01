"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
const math_1 = __importDefault(require("./math"));
function peaks(array, rank = false) {
    const results = [];
    if (validate_1.default.isArray(array)) {
        for (let i = 0; i < array.length - 2; i++) {
            const a = array[i];
            const b = array[i + 1];
            const c = array[i + 2];
            if (validate_1.default.isNumber(a) &&
                validate_1.default.isNumber(b) &&
                validate_1.default.isNumber(c)) {
                let category;
                if (b > a && b >= c)
                    category = "top";
                if (b < a && b <= c)
                    category = "bottom";
                if (category) {
                    const last = results[results.length - 1];
                    let changeNum = last && math_1.default.change.num(last.value, b);
                    if (!changeNum)
                        changeNum = 0;
                    results.push({ index: i + 1, value: b, category, changeNum });
                }
            }
        }
    }
    if (rank) {
        results.sort((a, b) => b.changeNum - a.changeNum);
        for (let i = 0; i < results.length; i++)
            results[i].changeRank = i + 1;
    }
    return results;
}
exports.default = peaks;

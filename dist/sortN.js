"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
const math_1 = __importDefault(require("./math"));
const RANGE_MIN = 0;
const RANGE_MAX = 1;
function sortN(input, ...props) {
    if (!validate_1.default.isArrayNonEmpty(input)) {
        return;
    }
    const normalizedProps = [];
    for (const prop of props) {
        if (validate_1.default.isString(prop)) {
            normalizedProps.push({
                name: prop,
                weight: 1,
                reverse: false,
            });
        }
        else if (validate_1.default.isObject(prop) && validate_1.default.isString(prop.name)) {
            normalizedProps.push({
                name: prop.name,
                weight: validate_1.default.isNumber(prop.weight) ? prop.weight : 1,
                reverse: prop.reverse === true,
            });
        }
    }
    if (normalizedProps.length === 0)
        return;
    const stats = new Map();
    for (const { name } of normalizedProps) {
        let min = Infinity;
        let max = -Infinity;
        for (const item of input) {
            const value = item[name];
            if (!validate_1.default.isNumber(value))
                continue;
            if (value < min)
                min = value;
            if (value > max)
                max = value;
        }
        if (min !== Infinity && max !== -Infinity && max !== min) {
            stats.set(name, { min, max });
        }
    }
    if (stats.size === 0)
        return;
    const targetRange = RANGE_MAX - RANGE_MIN;
    for (const item of input) {
        let weightedSum = 0;
        let weightTotal = 0;
        for (const { name, weight, reverse } of normalizedProps) {
            const stat = stats.get(name);
            const raw = item[name];
            if (!stat || !validate_1.default.isNumber(raw))
                continue;
            let normalized = RANGE_MIN + ((raw - stat.min) / (stat.max - stat.min)) * targetRange;
            if (reverse)
                normalized = RANGE_MAX - normalized;
            weightedSum += normalized * weight;
            weightTotal += weight;
        }
        const score = weightTotal > 0 ? weightedSum / weightTotal : undefined;
        Object.assign(item, { score: math_1.default.num(score) });
    }
    input.sort((a, b) => {
        const scoreA = a.score;
        const scoreB = b.score;
        if (validate_1.default.isNumber(scoreA) && validate_1.default.isNumber(scoreB)) {
            return scoreB - scoreA;
        }
        else if (validate_1.default.isNumber(scoreB)) {
            return 1;
        }
        else if (validate_1.default.isNumber(scoreA)) {
            return -1;
        }
        else
            return 0;
    });
}
exports.default = sortN;

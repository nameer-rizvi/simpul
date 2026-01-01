"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
const math_1 = __importDefault(require("./math"));
function evaluateSeries(input, option = {}) {
    const deltas = [];
    const multiplier = option.multiplier || 1;
    if (validate_1.default.isArray(input)) {
        for (const i of input) {
            if (validate_1.default.isNumberValid(i))
                deltas.push(i * multiplier);
        }
    }
    const initialValue = option.initialValue || 100;
    const finalValue = deltas.reduce((r, n) => r + r * (n / 100), initialValue);
    const changeNum = math_1.default.change.num(initialValue, finalValue);
    const changePercent = math_1.default.change.percent(initialValue, finalValue);
    const changeRate = math_1.default.growthRate(initialValue, finalValue, deltas.length);
    const changeSymbol = math_1.default.change.symbol(initialValue, finalValue);
    const periods = deltas.length;
    const positives = deltas.filter((i) => i > 0).length;
    const negatives = deltas.filter((i) => i < 0).length;
    const neutrals = deltas.filter((i) => i === 0).length;
    const positive = math_1.default.percent(positives, periods);
    const negative = math_1.default.percent(negatives, periods);
    const neutral = math_1.default.percent(neutrals, periods);
    const mean = math_1.default.mean(deltas);
    const median = math_1.default.median(deltas);
    const mode = math_1.default.mode(deltas.map(Math.round));
    const max = math_1.default.num(Math.max(...deltas));
    const min = math_1.default.num(Math.min(...deltas));
    const standardDeviation = math_1.default.standardDeviation(deltas);
    const variance = math_1.default.variance(deltas);
    const slope = math_1.default.trendSlope(deltas);
    const efficiency = math_1.default.efficiency(deltas);
    const result = {
        initialValue,
        finalValue: math_1.default.num(finalValue),
        changeNum,
        changePercent,
        changeRate,
        changeSymbol,
        periods,
        positives,
        negatives,
        neutrals,
        positive,
        negative,
        neutral,
        mean,
        median,
        mode,
        max,
        min,
        standardDeviation,
        variance,
        slope,
        efficiency,
    };
    if (validate_1.default.isDate(option.startDate)) {
        const startDate = new Date(option.startDate);
        const endDate = validate_1.default.isDate(option.endDate)
            ? new Date(option.endDate)
            : new Date();
        const diff = endDate.getTime() - startDate.getTime();
        const years = Math.round(diff / (1000 * 60 * 60 * 24)) / 365;
        const annualized = math_1.default.growthRate(initialValue, finalValue, years);
        Object.assign(result, {
            startDate,
            endDate,
            years: math_1.default.num(years),
            annualized,
        });
        if (validate_1.default.isNumber(option.baselineInitialValue) &&
            validate_1.default.isNumber(option.baselineFinalValue)) {
            const baselineInitialValue = option.baselineInitialValue;
            const baselineFinalValue = option.baselineFinalValue;
            const baselineChangeNum = math_1.default.change.num(baselineInitialValue, baselineFinalValue);
            const baselineChangePercent = math_1.default.change.percent(baselineInitialValue, baselineFinalValue);
            const baselineChangeRate = math_1.default.growthRate(baselineInitialValue, baselineFinalValue, deltas.length);
            const baselineChangeAnnualized = math_1.default.growthRate(baselineInitialValue, baselineFinalValue, years);
            const baselineChangeSymbol = math_1.default.change.symbol(baselineInitialValue, baselineFinalValue);
            const baselineCompare = result.annualized > 0 && baselineChangeAnnualized > 0
                ? math_1.default.num(result.annualized / baselineChangeAnnualized)
                : result.annualized > 0
                    ? 2
                    : -1;
            Object.assign(result, {
                baselineInitialValue,
                baselineFinalValue,
                baselineChangeNum,
                baselineChangePercent,
                baselineChangeRate,
                baselineChangeAnnualized,
                baselineChangeSymbol,
                baselineCompare,
            });
        }
    }
    return result;
}
exports.default = evaluateSeries;

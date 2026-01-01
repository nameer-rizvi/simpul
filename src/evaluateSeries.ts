import { DateType } from "./date";
import { ChangeSymbolType } from "./math";
import validate from "./validate";
import math from "./math";

interface Options {
  multiplier?: number;
  initialValue?: number;
  startDate?: DateType;
  endDate?: DateType;
  baselineInitialValue?: number;
  baselineFinalValue?: number;
}

interface Result {
  initialValue: number;
  finalValue: number;
  changeNum?: number;
  changePercent?: number;
  changeRate?: number;
  changeSymbol?: ChangeSymbolType;
  periods: number;
  positives: number;
  negatives: number;
  neutrals: number;
  positive?: number;
  negative?: number;
  neutral?: number;
  mean?: number;
  median?: number;
  mode?: number;
  max?: number;
  min?: number;
  standardDeviation?: number;
  variance?: number;
  slope?: number;
  efficiency?: number;
  startDate?: Date;
  endDate?: Date;
  years?: number;
  annualized?: number;
  baselineInitialValue?: number;
  baselineFinalValue?: number;
  baselineChangeNum?: number;
  baselineChangePercent?: number;
  baselineChangeRate?: number;
  baselineChangeAnnualized?: number;
  baselineChangeSymbol?: number;
  baselineCompare?: number;
}

function evaluateSeries(input: unknown, option: Options = {}) {
  const deltas: number[] = [];

  const multiplier = option.multiplier || 1;

  if (validate.isArray(input)) {
    for (const i of input) {
      if (validate.isNumberValid(i)) deltas.push(i * multiplier);
    }
  }

  const initialValue = option.initialValue || 100;

  const finalValue = deltas.reduce((r, n) => r + r * (n / 100), initialValue);

  const changeNum = math.change.num(initialValue, finalValue);

  const changePercent = math.change.percent(initialValue, finalValue);

  const changeRate = math.growthRate(initialValue, finalValue, deltas.length);

  const changeSymbol = math.change.symbol(initialValue, finalValue);

  const periods = deltas.length;

  const positives = deltas.filter((i) => i > 0).length;

  const negatives = deltas.filter((i) => i < 0).length;

  const neutrals = deltas.filter((i) => i === 0).length;

  const positive = math.percent(positives, periods);

  const negative = math.percent(negatives, periods);

  const neutral = math.percent(neutrals, periods);

  const mean = math.mean(deltas);

  const median = math.median(deltas);

  const mode = math.mode(deltas.map(Math.round));

  const max = math.num(Math.max(...deltas));

  const min = math.num(Math.min(...deltas));

  const standardDeviation = math.standardDeviation(deltas);

  const variance = math.variance(deltas);

  const slope = math.trendSlope(deltas);

  const efficiency = math.efficiency(deltas);

  const result: Result = {
    initialValue,
    finalValue: math.num(finalValue)!,
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

  if (validate.isDate(option.startDate)) {
    const startDate = new Date(option.startDate);

    const endDate = validate.isDate(option.endDate)
      ? new Date(option.endDate)
      : new Date();

    const diff = endDate.getTime() - startDate.getTime();

    const years = Math.round(diff / (1000 * 60 * 60 * 24)) / 365;

    const annualized = math.growthRate(initialValue, finalValue, years);

    Object.assign(result, {
      startDate,
      endDate,
      years: math.num(years),
      annualized,
    });

    if (
      validate.isNumber(option.baselineInitialValue) &&
      validate.isNumber(option.baselineFinalValue)
    ) {
      const baselineInitialValue = option.baselineInitialValue;

      const baselineFinalValue = option.baselineFinalValue;

      const baselineChangeNum = math.change.num(
        baselineInitialValue,
        baselineFinalValue,
      );

      const baselineChangePercent = math.change.percent(
        baselineInitialValue,
        baselineFinalValue,
      );

      const baselineChangeRate = math.growthRate(
        baselineInitialValue,
        baselineFinalValue,
        deltas.length,
      );

      const baselineChangeAnnualized = math.growthRate(
        baselineInitialValue,
        baselineFinalValue,
        years,
      );

      const baselineChangeSymbol = math.change.symbol(
        baselineInitialValue,
        baselineFinalValue,
      );

      const baselineCompare =
        result.annualized! > 0 && baselineChangeAnnualized! > 0
          ? math.num(result.annualized! / baselineChangeAnnualized!)
          : result.annualized! > 0
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

export default evaluateSeries;

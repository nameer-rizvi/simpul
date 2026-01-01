declare function changeNum(input1: unknown, input2: unknown): number | undefined;
declare function changePercent(input1: unknown, input2: unknown): number | undefined;
export type ChangeSymbolType = [
    1 | -1 | 0,
    "up" | "down" | "neutral",
    "+" | "-" | "•",
    "↑" | "↓" | "•",
    "🟢" | "🔴" | "⚪"
];
declare function changeSymbol(input1: unknown, input2: unknown): ChangeSymbolType | undefined;
declare function discrepancy(input1: unknown, input2: unknown): number | undefined;
declare function efficiency(...args: unknown[] | [unknown[]]): number | undefined;
declare function growthRate(input1: unknown, input2: unknown, periods?: number): number | undefined;
declare function mean(...args: unknown[] | [unknown[]]): number | undefined;
declare function median(...args: unknown[] | [unknown[]]): number | undefined;
declare function mode(...args: unknown[] | [unknown[]]): number | undefined;
declare function normalize(...args: unknown[] | [unknown[]]): number[] | undefined;
declare function num(input: unknown): number | undefined;
declare function percent(input1: unknown, input2: unknown): number | undefined;
declare function standardDeviation(...args: unknown[] | [unknown[]]): number | undefined;
declare function sum(...args: unknown[] | [unknown[]]): number | undefined;
declare function trendSlope(...args: unknown[] | [unknown[]]): number | undefined;
declare function variance(...args: unknown[] | [unknown[]]): number | undefined;
declare function zscore(value: number, ...args: unknown[] | [unknown[]]): number | undefined;
declare const _default: {
    change: {
        num: typeof changeNum;
        percent: typeof changePercent;
        symbol: typeof changeSymbol;
    };
    discrepancy: typeof discrepancy;
    efficiency: typeof efficiency;
    growthRate: typeof growthRate;
    mean: typeof mean;
    median: typeof median;
    mode: typeof mode;
    normalize: typeof normalize;
    num: typeof num;
    percent: typeof percent;
    standardDeviation: typeof standardDeviation;
    sum: typeof sum;
    trendSlope: typeof trendSlope;
    variance: typeof variance;
    zscore: typeof zscore;
};
export default _default;

declare function changeNum(input1: number, input2: number): number | undefined;
declare function changePercent(input1: number, input2: number): number | undefined;
export type ChangeSymbolType = [
    1 | -1 | 0,
    "up" | "down" | "neutral",
    "+" | "-" | "•",
    "↑" | "↓" | "•",
    "🟢" | "🔴" | "⚪"
];
declare function changeSymbol(input1: number, input2: number): ChangeSymbolType | undefined;
declare function discrepancy(input1: number, input2: number): number | undefined;
declare function efficiency(...args: number[] | [number[]]): number | undefined;
declare function growthRate(input1: number, input2: number, periods?: number): number | undefined;
declare function mean(...args: number[] | [number[]]): number | undefined;
declare function median(...args: number[] | [number[]]): number | undefined;
declare function mode(...args: number[] | [number[]]): number | undefined;
declare function normalize(...args: number[] | [number[]]): number[] | undefined;
declare function num(input: number): number | undefined;
declare function percent(input1: number, input2: number): number | undefined;
declare function standarddeviation(...args: number[] | [number[]]): number | undefined;
declare function sum(...args: number[] | [number[]]): number | undefined;
declare function trendslope(...args: number[] | [number[]]): number | undefined;
declare function variance(...args: number[] | [number[]]): number | undefined;
declare function zscore(value: number, ...args: number[] | [number[]]): number | undefined;
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
    standarddeviation: typeof standarddeviation;
    sum: typeof sum;
    trendslope: typeof trendslope;
    variance: typeof variance;
    zscore: typeof zscore;
};
export default _default;

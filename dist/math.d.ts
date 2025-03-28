declare function simplify(num: number): number | undefined;
declare function changeNum(num1: number, num2: number): number | undefined;
declare function changePercent(num1: number, num2: number): number | undefined;
export type ChangeSymbolType = [
    1 | -1 | 0,
    "up" | "down" | "neutral",
    "+" | "-" | "",
    "↑" | "↓" | "•",
    "🟢" | "🔴" | "⚪"
];
declare function changeSymbol(num1: number, num2: number): ChangeSymbolType | undefined;
declare function percent(num1: number, num2: number): number | undefined;
declare function discrepancy(num1: number, num2: number): number | undefined;
declare function sum(arr: number[]): number | undefined;
declare function mean(arr: number[]): number | undefined;
declare function median(arr: number[]): number | undefined;
declare function mode(arr: number[]): number | undefined;
declare function standarddeviation(arr: number[]): number | undefined;
declare function efficiency(arr: number[]): number | undefined;
declare function rate(start: number, end: number, periods?: number): number | undefined;
declare function normalize(arr?: number[]): number[] | undefined;
declare const _default: {
    num: typeof simplify;
    change: {
        num: typeof changeNum;
        percent: typeof changePercent;
        symbol: typeof changeSymbol;
    };
    percent: typeof percent;
    discrepancy: typeof discrepancy;
    sum: typeof sum;
    mean: typeof mean;
    median: typeof median;
    mode: typeof mode;
    standarddeviation: typeof standarddeviation;
    efficiency: typeof efficiency;
    rate: typeof rate;
    normalize: typeof normalize;
};
export default _default;

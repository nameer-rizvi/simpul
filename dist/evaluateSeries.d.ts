import { DateType } from "./date";
import { ChangeSymbolType } from "./math";
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
    standarddeviation?: number;
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
declare function evaluateSeries(input?: never[], option?: Options): Result;
export default evaluateSeries;

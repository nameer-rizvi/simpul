import { DataPoint, PriceHistoryOptions, Candle } from "./pricehistorytypes";
declare function pricehistory(datas: DataPoint[] | undefined, options: PriceHistoryOptions): {
    candles: Candle[];
    curr: Candle;
    prev: Candle;
    valueCap: number | undefined;
};
export default pricehistory;

import { DataPoint, PriceHistoryOptions, Candle } from "./pricehistorytypes";
declare function pricehistory(datas: DataPoint[] | undefined, options: PriceHistoryOptions): {
    candles: Candle[];
};
export default pricehistory;
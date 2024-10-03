import { PriceHistoryOptions, Candle } from "./pricehistorytypes";
declare function pricehistoryvwap(option: PriceHistoryOptions, candle: Candle, series: Candle[], period?: number): void;
export default pricehistoryvwap;

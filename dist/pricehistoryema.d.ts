import { PriceHistoryOptions, Candle } from "./pricehistorytypes";
declare function pricehistoryema(option: PriceHistoryOptions, candle: Candle, series: Candle[]): void;
declare function ema(period: number, series: Candle[], candle: Candle, numKey?: string): void;
export { pricehistoryema, ema };

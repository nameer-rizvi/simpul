import { Candle, CandlestickProps, CandlestickPattern } from "./pricehistorytypes";
export declare function getCandlestickProps(candle: Candle | undefined, prev1: Candle | undefined, prev2: Candle | undefined): undefined | CandlestickProps;
export declare const candlestickPatterns: CandlestickPattern[];

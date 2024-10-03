import { PriceHistoryOptions, DataPoint, Candle } from "./pricehistorytypes";
declare function pricehistoryvolume(option: PriceHistoryOptions, curr: DataPoint, candle: Candle, series: Candle[], volumerate: number | undefined): void;
export default pricehistoryvolume;

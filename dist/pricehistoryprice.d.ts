import { PriceHistoryOptions, DataPoint, Candle } from "./pricehistorytypes";
declare function pricehistoryprice(option: PriceHistoryOptions, curr: DataPoint, candle: Candle, last?: Candle): void;
export default pricehistoryprice;

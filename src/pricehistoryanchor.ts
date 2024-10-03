import { PriceHistoryOptions, Candle } from "./pricehistorytypes";

function pricehistoryanchor(option: PriceHistoryOptions, candle: Candle): void {
  if (option.anchor !== true) return;
  candle.anchor0 = 0;
  candle.anchor50 = 50;
  candle.anchor100 = 100;
}

export default pricehistoryanchor;

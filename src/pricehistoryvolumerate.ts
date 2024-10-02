import { DataPoint, PriceHistoryOptions } from "./pricehistorytypes";
import math from "./math";

function pricehistoryvolumerate(
  datas: DataPoint[],
  option: PriceHistoryOptions,
): number | undefined {
  if (
    option.volumefill !== true ||
    !option.volume ||
    !option.high ||
    !option.low
  )
    return;

  let totalVolume = 0;

  let totalRange = 0;

  for (const data of datas) {
    const volume = data[option.volume];

    const high = data[option.high];

    const low = data[option.low];

    if (typeof volume !== "number") continue;

    if (typeof high !== "number") continue;

    if (typeof low !== "number") continue;

    const range = math.change.percent(low, high);

    if (typeof range !== "number") continue;

    totalVolume += volume;

    totalRange += range * 100;
  }

  if (totalVolume > 0 && totalRange > 0) {
    return math.num(totalVolume / totalRange);
  }
}

export default pricehistoryvolumerate;

import { PriceHistoryOptions, DataPoint, Candle } from "./pricehistorytypes";

function pricehistorydate(
  option: PriceHistoryOptions,
  curr: DataPoint,
  candle: Candle,
): void {
  if (!option.datetime) return;

  const date = new Date(curr[option.datetime]);

  candle.dateString = date.toLocaleString();

  candle.dateObject = date;

  if (option.date === true) {
    candle.dateYear = date.getFullYear();

    candle.dateQuarter = Math.floor((date.getMonth() + 3) / 3);

    candle.dateMonth = date.getMonth() + 1;

    candle.dateMonthName = date.toLocaleString("default", { month: "long" });

    candle.dateDate = date.getDate();

    candle.dateWeekday = date.getDay();

    candle.dateWeekdayName = date.toLocaleDateString("default", {
      weekday: "long",
    });

    candle.dateHour = date.getHours();

    candle.dateMinute = date.getMinutes();
  }
}

export default pricehistorydate;

export interface DataPoint {
  [key: string]: number | string | Date;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  datetime: number | string | Date;
}

export interface PriceHistoryOptions {
  basePrice?: number;
  open?: string;
  high?: string;
  low?: string;
  close?: string;
  volume?: string;
  datetime?: string;
  volumefill?: boolean;
  date?: boolean;
  price?: boolean;
  leverage?: boolean | number;
  obv?: boolean;
  vwap?: boolean;
  sma?: boolean;
  // rsi?: boolean;
  // ema?: boolean;
  // macd?: boolean;
  // color?: boolean;
  // trend?: boolean;
  // crossover?: boolean;
  // anchor?: boolean;
  // basePrice?: number;
  // valueCapAt?: number;
  // periods?: number[];
  // scales?: string[];
}

export interface Candle {
  dateString?: string;
  dateObject?: Date;
  dateYear?: number;
  dateQuarter?: number;
  dateMonth?: number;
  dateMonthName?: string;
  dateDate?: number;
  dateWeekday?: number;
  dateWeekdayName?: string;
  dateHour?: number;
  dateMinute?: number;
  priceOpen?: number;
  priceHigh?: number;
  priceLow?: number;
  priceClose?: number;
  priceClose2?: number;
  priceChange?: number;
  priceRange?: number;
  priceRangeDiff?: number;
  volume?: number;
  volumeFilled?: boolean;
  obv?: number;
  vwap?: number;
  vwapSignal?: number;
  vwapValue?: number;
  volumeTotal?: number;
  volumeValue?: number;
  // [key: string]: undefined | string | number | boolean | Date;
}

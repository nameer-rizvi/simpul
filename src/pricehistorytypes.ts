export interface DataPoint {
  [key: string]: number | string | Date; // Allow flexibility for any properties.
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
  // periods?: number[];
  volumefill?: boolean;
  date?: boolean;
  price?: boolean;
  leverage?: boolean | number;
  // obv?: boolean;
  // vwap?: boolean;
  // sma?: boolean;
  // rsi?: boolean;
  // ema?: boolean;
  // macd?: boolean;
  // color?: boolean;
  // trend?: boolean;
  // crossover?: boolean;
  // anchor?: boolean;
  // scales?: string[];
  // basePrice?: number;
  // valueCapAt?: number;
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
}

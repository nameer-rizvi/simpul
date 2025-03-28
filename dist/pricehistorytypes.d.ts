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
    rsi?: boolean;
    ema?: boolean;
    macd?: boolean;
    color?: boolean;
    periods?: number[];
    trend?: boolean;
    crossover?: boolean;
    candlestick?: boolean;
    anchor?: boolean;
    scales?: string[];
    valueCapAt?: number;
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
    averageGain?: number;
    averageLoss?: number;
    rsi?: number;
    ema9?: number;
    ema12?: number;
    ema26?: number;
    macd?: number;
    macdSignal?: number;
    ema9macd?: number;
    macdHist?: number;
    color?: string;
    colorsGreen?: number;
    colorsRed?: number;
    colorsGray?: number;
    colorVolumeGreen?: number;
    colorVolumeRed?: number;
    colorVolumeGray?: number;
    colorVolumeDiscrepancy?: number;
    candlestickPatterns?: string[];
    candlestickIsBullish?: number;
    candlestickIsBearish?: number;
    candlestickIsReversal?: number;
    candlestickIsContinuation?: number;
    candlestickIsIndecision?: number;
    anchor0?: number;
    anchor50?: number;
    anchor100?: number;
    volumeVwapValueDiscrepancy?: number;
    vvcvg?: number;
    [key: string]: undefined | string | number | boolean | Date | string[];
}
export interface CandlestickProps {
    bodySize: number;
    upperSize: number;
    lowerSize: number;
    isBullish: boolean;
    isBullishPrev1: boolean;
    isBullishPrev2: boolean;
    isBearish: boolean;
    isNeutral: boolean;
    isEngulfed: boolean;
    isGapUp: boolean;
    isGapDown: boolean;
    isUpper0: boolean;
    isBody0: boolean;
    isLower0: boolean;
    isUpperGreaterThanBody1: boolean;
    isUpperGreaterThanBody2: boolean;
    isUpperGreaterThanBody3: boolean;
    isUpperSmallerThanBody1: boolean;
    isUpperSmallerThanBody2: boolean;
    isUpperSmallerThanBody3: boolean;
    isLowerGreaterThanBody1: boolean;
    isLowerGreaterThanBody2: boolean;
    isLowerGreaterThanBody3: boolean;
    isLowerSmallerThanBody1: boolean;
    isLowerSmallerThanBody2: boolean;
    isLowerSmallerThanBody3: boolean;
    [key: string]: number | boolean;
}
export interface CandlestickPattern {
    name: string;
    isBullish: 0 | 1 | 2;
    isBearish: 0 | 1 | 2;
    isReversal: 0 | 1 | 2;
    isContinuation: 0 | 1 | 2;
    isIndecision: 0 | 1 | 2;
    conditions: string[];
}

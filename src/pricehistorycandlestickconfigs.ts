import { CandlestickPattern, Candle } from "./pricehistorytypes";

// https://github.com/cm45t3r/candlestick/blob/main/src/candlestick.js#L126

export const patterns: CandlestickPattern[] = [
  // Bullish Reversal Patterns
  {
    name: "hammer",
    label: "Hammer",
    isBullish: true,
    isBearish: false,
    isReversal: true,
    isContinuation: false,
    isIndecision: false,
    condition: isPlaceholder, // isHammer
  },
  {
    name: "invertedHammer",
    label: "Inverted Hammer",
    isBullish: true,
    isBearish: false,
    isReversal: true,
    isContinuation: false,
    isIndecision: false,
    condition: isPlaceholder, // isInvertedHammer
  },
  {
    name: "morningStar",
    label: "Morning Star",
    isBullish: true,
    isBearish: false,
    isReversal: true,
    isContinuation: false,
    isIndecision: false,
    condition: isPlaceholder, // isMorningStar
  },
  {
    name: "piercing",
    label: "Piercing",
    isBullish: true,
    isBearish: false,
    isReversal: true,
    isContinuation: false,
    isIndecision: false,
    condition: isPlaceholder, // isPiercingPattern
  },
  {
    name: "bullishEngulfing",
    label: "Bullish Engulfing",
    isBullish: true,
    isBearish: false,
    isReversal: true,
    isContinuation: false,
    isIndecision: false,
    condition: isPlaceholder, // isBullishEngulfing
  },
  {
    name: "threeWhiteSoldiers",
    label: "Three White Soldiers",
    isBullish: true,
    isBearish: false,
    isReversal: true,
    isContinuation: false,
    isIndecision: false,
    condition: isPlaceholder, // isThreeWhiteSoldiers
  },
  // Bearish Reversal Patterns
  {
    name: "shootingStar",
    label: "Shooting Star",
    isBullish: false,
    isBearish: true,
    isReversal: true,
    isContinuation: false,
    isIndecision: false,
    condition: isPlaceholder, // isShootingStar
  },
  {
    name: "hangingMan",
    label: "Hanging Man",
    isBullish: false,
    isBearish: true,
    isReversal: true,
    isContinuation: false,
    isIndecision: false,
    condition: isPlaceholder, // isHangingMan
  },
  {
    name: "eveningStar",
    label: "Evening Star",
    isBullish: false,
    isBearish: true,
    isReversal: true,
    isContinuation: false,
    isIndecision: false,
    condition: isPlaceholder, // isEveningStar
  },
  {
    name: "bearishEngulfing",
    label: "Bearish Engulfing",
    isBullish: false,
    isBearish: true,
    isReversal: true,
    isContinuation: false,
    isIndecision: false,
    condition: isPlaceholder, // isBearishEngulfing
  },
  {
    name: "darkCloudCover",
    label: "Dark Cloud Cover",
    isBullish: false,
    isBearish: true,
    isReversal: true,
    isContinuation: false,
    isIndecision: false,
    condition: isPlaceholder, // isDarkCloudCover
  },
  {
    name: "threeBlackCrows",
    label: "Three Black Crows",
    isBullish: false,
    isBearish: true,
    isReversal: true,
    isContinuation: false,
    isIndecision: false,
    condition: isPlaceholder, // isThreeBlackCrows
  },
  // Indecision Patterns
  {
    name: "doji",
    label: "Doji",
    isBullish: false,
    isBearish: false,
    isReversal: false,
    isContinuation: false,
    isIndecision: true,
    condition: isPlaceholder,
  },
  {
    name: "gravestoneDoji",
    label: "Gravestone Doji",
    isBullish: false,
    isBearish: false,
    isReversal: false,
    isContinuation: false,
    isIndecision: true,
    condition: isPlaceholder,
  },
  {
    name: "dragonflyDoji",
    label: "Dragonfly Doji",
    isBullish: false,
    isBearish: false,
    isReversal: false,
    isContinuation: false,
    isIndecision: true,
    condition: isPlaceholder,
  },
  {
    name: "spinningTop",
    label: "Spinning Top",
    isBullish: false,
    isBearish: false,
    isReversal: false,
    isContinuation: false,
    isIndecision: true,
    condition: isPlaceholder,
  },
  // Continuation Patterns
  {
    name: "marubozu",
    label: "Marubozu",
    isBullish: false,
    isBearish: false,
    isReversal: false,
    isContinuation: true,
    isIndecision: false,
    condition: isPlaceholder,
  },
  {
    name: "risingThreeMethods",
    label: "Rising Three Methods",
    isBullish: false,
    isBearish: false,
    isReversal: false,
    isContinuation: true,
    isIndecision: false,
    condition: isPlaceholder,
  },
  {
    name: "fallingThreeMethods",
    label: "Falling Three Methods",
    isBullish: false,
    isBearish: false,
    isReversal: false,
    isContinuation: true,
    isIndecision: false,
    condition: isPlaceholder,
  },
];

function isPlaceholder() {
  return false;
}

// function isHammer(curr: Candle): boolean {
//     const body = Math.abs(curr.priceClose - curr.priceOpen);
//     const lowerWick = curr.priceOpen > curr.priceClose
//         ? curr.priceOpen - curr.priceLow
//         : curr.priceClose - curr.priceLow;
//     const upperWick = curr.priceHigh - Math.max(curr.priceOpen, curr.priceClose);
//     return (
//         body <= (curr.priceHigh - curr.priceLow) * 0.3 &&
//         lowerWick >= body * 2 &&
//         upperWick <= body * 0.3
//     );
// }

// function isInvertedHammer(curr: Candle): boolean {
//     const body = Math.abs(curr.priceClose - curr.priceOpen);
//     const upperWick = curr.priceHigh - Math.max(curr.priceOpen, curr.priceClose);
//     const lowerWick = Math.min(curr.priceOpen, curr.priceClose) - curr.priceLow;
//     return (
//         body <= (curr.priceHigh - curr.priceLow) * 0.3 &&
//         upperWick >= body * 2 &&
//         lowerWick <= body * 0.3
//     );
// }

// function isMorningStar(curr: Candle, prev1: Candle, prev2: Candle): boolean {
//     const isFirstCandleBearish = prev2.priceClose < prev2.priceOpen;
//     const isSecondCandleSmall = Math.abs(prev1.priceClose - prev1.priceOpen) <= (prev2.priceHigh - prev2.priceLow) * 0.3;
//     const isThirdCandleBullish = curr.priceClose > curr.priceOpen;
//     const isGapBetweenFirstAndSecond = prev1.priceHigh < prev2.priceClose;
//     const isGapBetweenSecondAndThird = curr.priceOpen > prev1.priceClose;
//     return (
//         isFirstCandleBearish &&
//         isSecondCandleSmall &&
//         isThirdCandleBullish &&
//         isGapBetweenFirstAndSecond &&
//         isGapBetweenSecondAndThird
//     );
// }

// function isPiercingPattern(curr: Candle, prev1: Candle): boolean {
//     const isFirstCandleBearish = prev1.priceClose < prev1.priceOpen;
//     const isSecondCandleBullish = curr.priceClose > curr.priceOpen;
//     const closesAboveHalf = curr.priceClose > (prev1.priceOpen + prev1.priceClose) / 2;
//     const opensBelowPrevClose = curr.priceOpen < prev1.priceClose;
//     return (
//         isFirstCandleBearish &&
//         isSecondCandleBullish &&
//         closesAboveHalf &&
//         opensBelowPrevClose
//     );
// }

// function isBullishEngulfing(curr: Candle, prev1: Candle): boolean {
//     const isFirstCandleBearish = prev1.priceClose < prev1.priceOpen;
//     const isSecondCandleBullish = curr.priceClose > curr.priceOpen;
//     const engulfsBody = curr.priceOpen < prev1.priceClose && curr.priceClose > prev1.priceOpen;
//     return (
//         isFirstCandleBearish &&
//         isSecondCandleBullish &&
//         engulfsBody
//     );
// }

// function isThreeWhiteSoldiers(curr: Candle, prev1: Candle, prev2: Candle): boolean {
//     const isFirstCandleBullish = prev2.priceClose > prev2.priceOpen;
//     const isSecondCandleBullish = prev1.priceClose > prev1.priceOpen;
//     const isThirdCandleBullish = curr.priceClose > curr.priceOpen;
//     const isSecondCandleHigher = prev1.priceOpen > prev2.priceClose && prev1.priceClose > prev2.priceClose;
//     const isThirdCandleHigher = curr.priceOpen > prev1.priceClose && curr.priceClose > prev1.priceClose;
//     return (
//         isFirstCandleBullish &&
//         isSecondCandleBullish &&
//         isThirdCandleBullish &&
//         isSecondCandleHigher &&
//         isThirdCandleHigher
//     );
// }

// function isShootingStar(curr: Candle): boolean {
//     const body = Math.abs(curr.priceClose - curr.priceOpen);
//     const upperWick = curr.priceHigh - Math.max(curr.priceOpen, curr.priceClose);
//     const lowerWick = Math.min(curr.priceOpen, curr.priceClose) - curr.priceLow;
//     return (
//         body <= (curr.priceHigh - curr.priceLow) * 0.3 &&
//         upperWick >= body * 2 &&
//         lowerWick <= body * 0.3
//     );
// }

// function isHangingMan(curr: Candle): boolean {
//     const body = Math.abs(curr.priceClose - curr.priceOpen);
//     const lowerWick = curr.priceOpen > curr.priceClose
//         ? curr.priceOpen - curr.priceLow
//         : curr.priceClose - curr.priceLow;
//     const upperWick = curr.priceHigh - Math.max(curr.priceOpen, curr.priceClose);
//     return (
//         body <= (curr.priceHigh - curr.priceLow) * 0.3 &&
//         lowerWick >= body * 2 &&
//         upperWick <= body * 0.3
//     );
// }

// function isEveningStar(curr: Candle, prev1: Candle, prev2: Candle): boolean {
//     const isFirstCandleBullish = prev2.priceClose > prev2.priceOpen;
//     const isSecondCandleSmall = Math.abs(prev1.priceClose - prev1.priceOpen) <= (prev2.priceHigh - prev2.priceLow) * 0.3;
//     const isThirdCandleBearish = curr.priceClose < curr.priceOpen;
//     const isGapBetweenFirstAndSecond = prev1.priceLow > prev2.priceClose;
//     const isGapBetweenSecondAndThird = curr.priceOpen < prev1.priceClose;
//     return (
//         isFirstCandleBullish &&
//         isSecondCandleSmall &&
//         isThirdCandleBearish &&
//         isGapBetweenFirstAndSecond &&
//         isGapBetweenSecondAndThird
//     );
// }

// function isBearishEngulfing(curr: Candle, prev1: Candle): boolean {
//     const isFirstCandleBullish = prev1.priceClose > prev1.priceOpen;
//     const isSecondCandleBearish = curr.priceClose < curr.priceOpen;
//     const engulfsBody = curr.priceOpen > prev1.priceClose && curr.priceClose < prev1.priceOpen;
//     return (
//         isFirstCandleBullish &&
//         isSecondCandleBearish &&
//         engulfsBody
//     );
// }

// function isDarkCloudCover(curr: Candle, prev1: Candle): boolean {
//     const isFirstCandleBullish = prev1.priceClose > prev1.priceOpen;
//     const isSecondCandleBearish = curr.priceClose < curr.priceOpen;
//     const opensAbovePrevClose = curr.priceOpen > prev1.priceClose;
//     const closesBelowHalf = curr.priceClose < (prev1.priceOpen + prev1.priceClose) / 2;
//     return (
//         isFirstCandleBullish &&
//         isSecondCandleBearish &&
//         opensAbovePrevClose &&
//         closesBelowHalf
//     );
// }

// function isThreeBlackCrows(curr: Candle, prev1: Candle, prev2: Candle): boolean {
//     const isFirstCandleBearish = prev2.priceClose < prev2.priceOpen;
//     const isSecondCandleBearish = prev1.priceClose < prev1.priceOpen;
//     const isThirdCandleBearish = curr.priceClose < curr.priceOpen;
//     const isSecondCandleLower = prev1.priceOpen < prev2.priceClose && prev1.priceClose < prev2.priceClose;
//     const isThirdCandleLower = curr.priceOpen < prev1.priceClose && curr.priceClose < prev1.priceClose;
//     return (
//         isFirstCandleBearish &&
//         isSecondCandleBearish &&
//         isThirdCandleBearish &&
//         isSecondCandleLower &&
//         isThirdCandleLower
//     );
// }

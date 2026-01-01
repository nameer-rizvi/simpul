import validate from "./validate";
import math from "./math";

interface WaveResult {
  index: number;
  value: number;
  range: [number, number];
  trend: [-1 | 0 | 1, -1 | 0 | 1];
  changeNum: [number, number];
  changePerc: [number, number];
  gapNum: number;
  gapPerc: number;
}

function wave(array: number[]): WaveResult[] {
  if (!validate.isArrayNonEmpty(array)) return [];

  const results: WaveResult[] = new Array(array.length);

  let low = array[0];

  let high = array[0];

  let trendDir: -1 | 0 | 1 = 0;

  let extrema: -1 | 0 | 1 = 0;

  for (let i = 0; i < array.length; i++) {
    const value = array[i];

    if (extrema === 0) {
      if (value > high) {
        extrema = 1;
        trendDir = 1;
        high = value;
      } else if (value < low) {
        extrema = -1;
        trendDir = -1;
        low = value;
      }
    } else if (extrema === 1) {
      if (value > high) {
        high = value;
      } else if (value < high) {
        low = value;
        extrema = 0;
      }
    } else {
      if (value < low) {
        low = value;
      } else if (value > low) {
        high = value;
        extrema = 0;
      }
    }

    const changeLowNum = math.change.num(low, value) || 0;

    const changeHighNum = math.change.num(high, value) || 0;

    const changeLowPerc = math.change.percent(low, value) || 0;

    const changeHighPerc = math.change.percent(high, value) || 0;

    const gapNum = math.change.num(low, high) || 0;

    const gapPerc = math.change.percent(low, high) || 0;

    results[i] = {
      index: i,
      value,
      range: [low, high],
      trend: [trendDir, extrema],
      changeNum: [changeLowNum, changeHighNum],
      changePerc: [changeLowPerc, changeHighPerc],
      gapNum,
      gapPerc,
    };
  }

  return results;
}

export default wave;

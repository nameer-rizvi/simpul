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
  const results: WaveResult[] = [];

  if (!validate.isArrayValid(array)) return results;

  const range: WaveResult["range"] = [array[0], array[0]]; // ["low", "high"]

  const trend: WaveResult["trend"] = [0, 0]; // ["trend", "extrema" ("maxima" or "minima")]

  for (let i = 0; i < array.length; i++) {
    const value = array[i];

    if (trend[1] === 0 && value > range[1]) {
      trend[1] = 1;
      trend[0] = 1;
    } else if (trend[1] === 0 && value < range[0]) {
      trend[1] = -1;
      trend[0] = -1;
    }

    if (trend[1] === 1 && value > range[1]) {
      range[1] = value;
    } else if (trend[1] === 1 && value < range[1]) {
      range[0] = value;
      trend[1] = 0;
    }

    if (trend[1] === -1 && value < range[0]) {
      range[0] = value;
    } else if (trend[1] === -1 && value > range[0]) {
      range[1] = value;
      trend[1] = 0;
    }

    const changeNum: WaveResult["changeNum"] = [
      math.change.num(range[0], value) || 0,
      math.change.num(range[1], value) || 0,
    ];

    const changePerc: WaveResult["changePerc"] = [
      math.change.percent(range[0], value) || 0,
      math.change.percent(range[1], value) || 0,
    ];

    const gapNum: WaveResult["gapNum"] =
      math.change.num(range[0], range[1]) || 0;

    const gapPerc: WaveResult["gapPerc"] =
      math.change.percent(range[0], range[1]) || 0;

    results.push({
      index: i,
      value,
      range: [range[0], range[1]],
      trend: [trend[0], trend[1]],
      changeNum,
      changePerc,
      gapNum,
      gapPerc,
    });
  }

  return results;
}

export default wave;

import validate from "./validate";
import math from "./math";

interface Peak {
  index: number;
  value: number;
  category: "top" | "bottom";
  changeNum: number;
  changePercent: number;
  changeRank?: number;
}

function peaks(array: number[], rank: boolean = false): Peak[] {
  const results: Peak[] = [];

  if (!validate.isArray(array)) return results;

  for (let i = 0; i < array.length - 2; i++) {
    const a = array[i];

    const b = array[i + 1];

    const c = array[i + 2];

    if (validate.isNumber(a) && validate.isNumber(b) && validate.isNumber(c)) {
      let category: "top" | "bottom" | undefined;

      if (b > a && b >= c) category = "top";

      if (b < a && b <= c) category = "bottom";

      if (category) {
        const last = results[results.length - 1];

        let changeNum = last && math.change.num(last.value, b);

        let changePercent = last && math.change.percent(last.value, b);

        if (!changeNum) changeNum = 0;

        if (!changePercent) changePercent = 0;

        results.push({
          index: i + 1,
          value: b,
          category,
          changeNum,
          changePercent,
        });
      }
    }
  }

  if (rank) {
    results.sort((a, b) => {
      return Math.abs(b.changePercent) - Math.abs(a.changePercent);
    });

    for (let i = 0; i < results.length; i++) results[i].changeRank = i + 1;
  }

  return results;
}

export default peaks;

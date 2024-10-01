import validate from "./validate";
import math from "./math";

function keychange(
  obj: Record<string, any>,
  name: string,
  ...args: [number, number]
): void {
  if (validate.isObject(obj)) {
    Object.assign(obj, {
      [name + "ChangeNum"]: math.change.num(...args) || undefined,
      [name + "ChangePercent"]: math.change.percent(...args) || undefined,
    });
  }
}

export default keychange;

import validate from "./validate";
import math from "./math";

function keychange(
  input: Record<string, unknown>,
  name: string,
  ...args: [number, number]
): void {
  if (validate.isObject(input)) {
    Object.assign(input, {
      [name + "ChangeNum"]: math.change.num(...args),
      [name + "ChangePercent"]: math.change.percent(...args),
    });
  }
}

export default keychange;

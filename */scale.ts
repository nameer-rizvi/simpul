interface Item {
  [key: string]: number;
}

function scale<T extends Item | number>(
  array: T[],
  propName?: keyof Item,
  [minRange, maxRange]: [number, number] = [0, 100]
): void {
  let max = -Infinity;

  let min = Infinity;

  for (const item of array) {
    const value = propName ? (item as Item)[propName] : (item as number);
    if (typeof value === "number") {
      max = Math.max(max, value);
      min = Math.min(min, value);
    }
  }

  const range = max - min;

  if (range === 0) return; // Prevent division by zero.

  for (let i = 0; i < array.length; i++) {
    const value = propName
      ? (array[i] as Item)[propName]
      : (array[i] as number);

    if (typeof value === "number") {
      const scaledValue = +(
        minRange +
        ((value - min) / range) * (maxRange - minRange)
      ).toFixed(2);

      if (propName) {
        (array[i] as Item)[propName] = scaledValue;
      } else {
        array[i] = scaledValue as unknown as T;
      }
    }
  }
}

export default scale;

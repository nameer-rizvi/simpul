"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function scale(array, propName, [minRange, maxRange] = [0, 100]) {
    let max = -Infinity;
    let min = Infinity;
    for (const item of array) {
        const value = propName ? item[propName] : item;
        if (typeof value === "number") {
            max = Math.max(max, value);
            min = Math.min(min, value);
        }
    }
    const range = max - min;
    if (range === 0)
        return; // Prevent division by zero.
    for (let i = 0; i < array.length; i++) {
        const value = propName
            ? array[i][propName]
            : array[i];
        if (typeof value === "number") {
            const scaledValue = +(minRange +
                ((value - min) / range) * (maxRange - minRange)).toFixed(2);
            if (propName) {
                array[i][propName] = scaledValue;
            }
            else {
                array[i] = scaledValue;
            }
        }
    }
}
exports.default = scale;

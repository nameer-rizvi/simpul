"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
function simplify(num) {
    // Readable number.
    if (!validate_1.default.isNumber(num)) {
        return undefined;
    }
    else if (Math.abs(num) < 0.000000001) {
        return 0;
    }
    else if (Math.abs(num) < 0.000001) {
        return +num.toFixed(8);
    }
    else if (Math.abs(num) < 0.001) {
        return +num.toFixed(6);
    }
    else if (Math.abs(num) < 1) {
        return +num.toFixed(4);
    }
    else if (Math.abs(num) < 1000) {
        return +num.toFixed(2);
    }
    else {
        return +num.toFixed(0);
    }
}
function changeNum(num1, num2) {
    if (validate_1.default.isNumber(num1) && validate_1.default.isNumber(num2)) {
        return simplify(num2 - num1);
    }
}
function changePercent(num1, num2) {
    if (validate_1.default.isNumber(num1) && validate_1.default.isNumber(num2) && num1 !== 0) {
        const change = changeNum(num1, num2);
        if (change !== undefined)
            return simplify((change / num1) * 100);
    }
}
function changeSymbol(num1, num2) {
    if (validate_1.default.isNumber(num1) && validate_1.default.isNumber(num2)) {
        if (num2 > num1) {
            return [1, "up", "+", "↑", "🟢"];
        }
        else if (num2 < num1) {
            return [-1, "down", "-", "↓", "🔴"];
        }
        else if (num2 === num1) {
            return [0, "neutral", "•", "•", "⚪"];
        }
    }
}
function percent(num1, num2) {
    if (validate_1.default.isNumber(num1) && validate_1.default.isNumber(num2) && num2 !== 0) {
        return simplify((num1 / num2) * 100);
    }
}
function discrepancy(num1, num2) {
    if (validate_1.default.isNumber(num1) && validate_1.default.isNumber(num2)) {
        return simplify(Math.abs(num1 - num2));
    }
}
function sum(arr) {
    if (!validate_1.default.isArray(arr))
        return;
    const numbers = arr.filter(validate_1.default.isNumber);
    if (!numbers.length)
        return;
    let total = 0;
    for (const n of arr)
        total += n;
    return simplify(total);
}
function mean(arr) {
    const total = sum(arr);
    if (total !== undefined)
        return simplify(total / arr.length);
}
function median(arr) {
    if (!validate_1.default.isArray(arr))
        return;
    const numbers = arr.filter(validate_1.default.isNumber);
    if (!numbers.length)
        return;
    numbers.sort((a, b) => a - b);
    const mid = Math.floor(numbers.length / 2);
    const med = numbers.length % 2 ? numbers[mid] : (numbers[mid - 1] + numbers[mid]) / 2;
    return simplify(med);
}
function mode(arr) {
    if (!validate_1.default.isArray(arr))
        return;
    const numbers = arr.filter(validate_1.default.isNumber);
    if (!numbers.length)
        return;
    const frequency = {};
    for (const num of numbers)
        frequency[num] = (frequency[num] || 0) + 1;
    let res = ["", 0];
    for (const [key, value] of Object.entries(frequency)) {
        if (value > res[1])
            res = [key, value];
    }
    return simplify(+res[0]);
}
function variance(arr) {
    if (!validate_1.default.isArray(arr))
        return;
    const numbers = arr.filter(validate_1.default.isNumber);
    if (!numbers.length)
        return;
    const me = mean(numbers);
    if (me === undefined)
        return;
    let va = 0;
    for (const n of numbers)
        va += Math.pow(n - me, 2);
    return simplify(va / numbers.length);
}
function standarddeviation(arr) {
    const va = variance(arr);
    if (va !== undefined)
        return simplify(Math.sqrt(va));
}
function zscore(num, arr) {
    if (!validate_1.default.isNumber(num))
        return;
    const me = mean(arr);
    const sd = standarddeviation(arr);
    if (me === undefined || sd === undefined)
        return;
    return simplify((num - me) / sd);
}
function efficiency(arr) {
    // Journey movement from point A to point B.
    if (!validate_1.default.isArray(arr))
        return;
    const numbers = arr.filter(validate_1.default.isNumber);
    if (!numbers.length)
        return;
    const distance = changeNum(numbers[0], numbers[numbers.length - 1]);
    if (distance === undefined)
        return;
    let i = 0;
    let journey = 0;
    while (i < numbers.length) {
        const movement = changeNum(numbers[i], numbers[i + 1]);
        if (movement !== undefined)
            journey += Math.abs(movement);
        i++;
    }
    if (journey === 0)
        return;
    return simplify((Math.abs(distance) / journey) * 100);
}
function rate(start, end, periods = 1) {
    if (validate_1.default.isNumber(start) && validate_1.default.isNumber(end)) {
        return simplify((Math.pow(end / start, 1 / periods) - 1) * 100);
    }
}
function normalize(arr) {
    if (!validate_1.default.isArray(arr))
        return;
    const numbers = arr.filter(validate_1.default.isNumber);
    if (!numbers.length)
        return;
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);
    const range = simplify(max - min);
    if (range === undefined || range === 0)
        return numbers.map(() => 0);
    const numbers2 = [];
    for (const n of numbers) {
        const normalized = simplify((n - min) / range);
        if (normalized !== undefined)
            numbers2.push(normalized);
    }
    return numbers2;
}
function trendSlope(arr) {
    // Computes the slope of the linear regression line assuming x = [0, 1, ..., n-1]:
    if (!validate_1.default.isArray(arr))
        return;
    const numbers = arr.filter(validate_1.default.isNumber);
    if (!numbers.length)
        return;
    const n = arr.length;
    if (n < 2)
        return 0;
    let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0;
    for (let i = 0; i < n; i++) {
        sumX += i;
        sumY += arr[i];
        sumXY += i * arr[i];
        sumX2 += i * i;
    }
    const numerator = n * sumXY - sumX * sumY;
    const denominator = n * sumX2 - sumX * sumX;
    return denominator !== 0 ? simplify(numerator / denominator) : 0;
}
exports.default = {
    num: simplify,
    change: {
        num: changeNum,
        percent: changePercent,
        symbol: changeSymbol,
    },
    percent,
    discrepancy,
    sum,
    mean,
    median,
    mode,
    variance,
    standarddeviation,
    zscore,
    efficiency,
    rate,
    normalize,
    trendSlope,
};

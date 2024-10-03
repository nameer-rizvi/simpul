"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
function weekday(date) {
    date = validate_1.default.isDate(date) ? new Date(date) : new Date();
    return weekdays[date.getDay()];
}
function month(date) {
    date = validate_1.default.isDate(date) ? new Date(date) : new Date();
    return months[date.getMonth()];
}
function withaddeddays(add = 0, date, constant) {
    date = validate_1.default.isDate(date) ? new Date(date) : new Date();
    date.setDate(date.getDate() + add);
    return constant === "STRING" ? date.toLocaleDateString() : date;
}
function withaddedworkdays(add = 0, date, constant) {
    date = validate_1.default.isDate(date) ? new Date(date) : new Date();
    let workDaysRemaining = Math.abs(add);
    const direction = add < 0 ? -1 : 1;
    while (workDaysRemaining > 0) {
        date.setUTCDate(date.getUTCDate() + direction);
        const dayOfWeek = date.getUTCDay();
        if (dayOfWeek !== 6 && dayOfWeek !== 0)
            workDaysRemaining--; // Check if it's a weekday (Monday to Friday)
    }
    return constant === "STRING" ? date.toLocaleDateString() : date;
}
function withaddedseconds(add = 0, date, constant) {
    date = validate_1.default.isDate(date) ? new Date(date) : new Date();
    date.setSeconds(date.getSeconds() + add);
    return constant === "STRING" ? date.toLocaleDateString() : date;
}
function daystill(date) {
    return Math.abs(daystill2(date));
}
function daystill2(date) {
    date = validate_1.default.isDate(date) ? new Date(date) : new Date();
    const till = (date.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24);
    return Math.ceil(till);
}
function isday(date, option = {}) {
    if (!validate_1.default.isDate(date))
        return false;
    date = new Date(date);
    const { addYears = 0, addMonths = 0, addDays = 0 } = option;
    const newDate = new Date();
    const isYear = date.getFullYear() === newDate.getFullYear() + addYears;
    const isMonth = date.getMonth() === newDate.getMonth() + addMonths;
    const isDay = date.getDate() === newDate.getDate() + addDays;
    return isYear && isMonth && isDay;
}
function isfuture(date) {
    if (!validate_1.default.isDate(date))
        return false;
    const test = new Date(date).setHours(0, 0, 0, 0);
    const today = new Date().setHours(0, 0, 0, 0);
    return test >= today;
}
function mostrecentworkdate(date, constant) {
    date = validate_1.default.isDate(date) ? new Date(date) : new Date();
    const day = date.getDay();
    const daysAgo = day === 6 ? -1 : day === 0 ? -2 : 0;
    return withaddeddays(daysAgo, date, constant);
}
function mysql(date) {
    date = validate_1.default.isDate(date) ? new Date(date) : new Date();
    return date.toISOString().replace("T", " ").replace("Z", "");
}
exports.default = {
    weekdays,
    months,
    weekday,
    month,
    withaddeddays,
    withaddedworkdays,
    withaddedseconds,
    daystill,
    daystill2,
    isday,
    isfuture,
    mostrecentworkdate,
    mysql,
    validate: validate_1.default.isDate,
};

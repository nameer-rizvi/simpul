"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
function generalcount(count, option = {}) {
    const { lang = "en-US", upperCase } = option, rest = __rest(option, ["lang", "upperCase"]);
    if (typeof count !== "number")
        return;
    let generalized = new Intl.NumberFormat(lang, Object.assign({ maximumFractionDigits: 1, notation: "compact", compactDisplay: "short" }, rest)).format(count);
    if (generalized === "NaN" || !generalized)
        return;
    if (!upperCase)
        generalized = generalized.toLowerCase();
    return generalized;
}
exports.default = generalcount;

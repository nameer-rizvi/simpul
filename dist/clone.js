"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// shallow clone.
function clone(json) {
    if (json === null || typeof json !== "object")
        return json;
    if (Array.isArray(json))
        return [...json];
    const result = {};
    for (const key in json) {
        if (Object.prototype.hasOwnProperty.call(json, key)) {
            result[key] = clone(json[key]);
        }
    }
    return result;
}
exports.default = clone;

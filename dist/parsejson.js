"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function parsejson(json) {
    try {
        return JSON.parse(json);
    }
    catch (_a) { }
}
exports.default = parsejson;

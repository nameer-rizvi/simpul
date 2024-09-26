"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const trim_1 = __importDefault(require("./trim"));
const removePunctuation_1 = __importDefault(require("./removePunctuation"));
function trimPunctuation(dirty, delimiter) {
    const withoutPunctuation = (0, removePunctuation_1.default)(dirty);
    if (withoutPunctuation) {
        return (0, trim_1.default)(withoutPunctuation, delimiter);
    }
}
exports.default = trimPunctuation;
// RE: "\W is equivalent to [^a-zA-Z_0-9]"
//     Not using because it removes unicode characters.

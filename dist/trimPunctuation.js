"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const trim_1 = __importDefault(require("./trim"));
const removePunctuation_1 = __importDefault(require("./removePunctuation"));
function trimPunctuation(input, delimiter) {
    return (0, trim_1.default)((0, removePunctuation_1.default)(input, delimiter), delimiter);
}
exports.default = trimPunctuation;

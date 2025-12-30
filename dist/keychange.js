"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
const math_1 = __importDefault(require("./math"));
function keychange(input, name, ...args) {
    if (validate_1.default.isObject(input)) {
        Object.assign(input, {
            [name + "ChangeNum"]: math_1.default.change.num(...args),
            [name + "ChangePercent"]: math_1.default.change.percent(...args),
        });
    }
}
exports.default = keychange;

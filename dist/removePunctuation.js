"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
function removePunctuation(dirty, delimiter = "") {
    if (validate_1.default.isString(dirty)) {
        return dirty.replace(/[`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]/g, delimiter);
    }
}
exports.default = removePunctuation;

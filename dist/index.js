"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_1 = __importDefault(require("./jwt"));
const validate_1 = __importDefault(require("./validate"));
const simpul = Object.assign({ jwt: jwt_1.default }, validate_1.default);
exports.default = simpul;

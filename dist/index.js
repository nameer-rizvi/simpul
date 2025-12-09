"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const jwt_1 = __importDefault(require("./jwt"));
const support_1 = __importDefault(require("./support"));
const validate_1 = __importDefault(require("./validate"));
const simpul = Object.assign({ jwt: jwt_1.default,
    support: support_1.default }, validate_1.default);
module.exports = simpul;

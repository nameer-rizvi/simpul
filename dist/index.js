"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const jwt_1 = __importDefault(require("./jwt"));
const validate_1 = __importDefault(require("./validate"));
const simpul = Object.assign(Object.assign({}, validate_1.default), { jwt: jwt_1.default });
module.exports = simpul;

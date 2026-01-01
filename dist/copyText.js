"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("./validate"));
function copyText(input) {
    return __awaiter(this, void 0, void 0, function* () {
        if (validate_1.default.isEnvDocument && validate_1.default.isString(input)) {
            try {
                yield navigator.clipboard.writeText(input);
            }
            catch (_a) {
                const element = document.createElement("textarea");
                element.value = input;
                document.body.appendChild(element);
                element.select();
                document.execCommand("copy");
                document.body.removeChild(element);
            }
        }
    });
}
exports.default = copyText;

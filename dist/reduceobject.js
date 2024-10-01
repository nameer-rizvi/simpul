"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function reduceobject(array = []) {
    return array.reduce((r, a) => (Object.assign(Object.assign({}, r), { [a[0]]: a[1] })), {});
}
exports.default = reduceobject;

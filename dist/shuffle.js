"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = (Math.random() * (i + 1)) | 0;
        if (i !== j) {
            const tmp = array[i];
            array[i] = array[j];
            array[j] = tmp;
        }
    }
    return array;
}
exports.default = shuffle;

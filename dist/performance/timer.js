"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function timer(fn) {
    const date = new Date();
    const initialTime = date.getTime();
    fn();
    const finalTime = date.getTime();
    return finalTime - initialTime;
}
exports.default = timer;

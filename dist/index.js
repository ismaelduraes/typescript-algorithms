"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bubbleSort_1 = __importDefault(require("./sorting/bubble/bubbleSort"));
const numbers = [5, 4, 3, 2, 1];
console.log(numbers);
console.log((0, bubbleSort_1.default)(numbers));

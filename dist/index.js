"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bubble_1 = __importDefault(require("./sorting/bubble"));
const numbers = [5, 4, 3, 2, 1];
console.log(numbers);
console.log((0, bubble_1.default)(numbers));

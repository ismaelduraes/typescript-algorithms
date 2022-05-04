"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bubbleSort_1 = __importDefault(require("./bubbleSort"));
describe("test bubble sort", () => {
    it("simple reversed list", () => {
        const numbers = [5, 4, 3, 2, 1];
        const result = (0, bubbleSort_1.default)(numbers);
        expect(result).toStrictEqual([1, 2, 3, 4, 5]);
    });
    it("random unordered list", () => {
        const numbers = [40, -5, 3, 8, 21];
        const result = (0, bubbleSort_1.default)(numbers);
        expect(result).toStrictEqual([-5, 3, 8, 21, 40]);
    });
});

import bubbleSort from "./bubbleSort";

describe("test bubble sort", () => {
  it("simple reversed list", () => {
    const numbers = [5, 4, 3, 2, 1];
    const result = bubbleSort(numbers);

    expect(result).toStrictEqual([1, 2, 3, 4, 5]);
  });
  it("random unordered list", () => {
    const numbers = [40, -5, 3, 8, 21];
    const result = bubbleSort(numbers);

    expect(result).toStrictEqual([-5, 3, 8, 21, 40]);
  });
});

import insertionSort from "./insertionSort";

describe("test insertion", () => {
  it("check reverse sort", () => {
    const numbers = [5, 4, 3, 2, 1];
    expect(insertionSort(numbers)).toStrictEqual([1, 2, 3, 4, 5]);
    console.log("NUMBER:", numbers);
  });
  it("check random sort", () => {
    const numbers = [3, 2, 5, 4, 1];
    expect(insertionSort(numbers)).toStrictEqual([1, 2, 3, 4, 5]);
    console.log("NUMBER:", numbers);
  });
});

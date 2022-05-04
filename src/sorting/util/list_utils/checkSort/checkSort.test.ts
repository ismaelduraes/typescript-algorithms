import checkSort from "./checkSort";

describe("test checkSort", () => {
  it("check sorted list", () => {
    const list = [1, 2, 3, 4, 5];
    expect(checkSort(list)).toBe(true);
  });

  it("check reverse list", () => {
    const list = [5, 4, 3, 2, 1];
    expect(checkSort(list)).not.toBe(true);
  });

  it("check unordered list", () => {
    const list = [6, 1, 9, 100, 1];
    expect(checkSort(list)).not.toBe(true);
  });
});

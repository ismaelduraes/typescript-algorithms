import compare from "./compare";

describe("check compare", () => {
  it("test comparison with equal lists", () => {
    const list1 = [1, 2, 3, 4];
    const list2 = [1, 2, 3, 4];
    expect(compare(list1, list2)).toBe(true);
  });
  it("test comparison with lists of different sizes", () => {
    const list1 = [1, 2, 3, 4];
    const list2 = [1, 2, 3, 4, 5];
    expect(compare(list1, list2)).not.toBe(true);
  });
  it("test comparison with different lists of same size", () => {
    const list1 = [1, 2, 3, 4];
    const list2 = [2, 8, 1, 3];
    expect(compare(list1, list2)).not.toBe(true);
  });
});

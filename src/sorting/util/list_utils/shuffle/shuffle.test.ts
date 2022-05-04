import shuffle from "./shuffle";

describe("check shuffle", () => {
  it("check if shuffled list is different", () => {
    for (let i = 0; i < 100; i++) {
      const list = [1, 2, 3, 4, 5];
      expect(shuffle(list)).not.toEqual(list);
    }
  });
});

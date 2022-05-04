import factorialize from "./factorialize";

describe("test factorialize", () => {
  it("check factorialize result", () => {
    expect(factorialize(5)).toBe(120);
    expect(factorialize(-5)).toBe(1);
  });
});

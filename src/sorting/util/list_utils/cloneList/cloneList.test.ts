import cloneList from "./cloneList";

describe("test cloneList", () => {
  it("check list", () => {
    const initialList = [1, 2, 3, 4];
    expect(cloneList(initialList)).toStrictEqual(initialList);
  });
});

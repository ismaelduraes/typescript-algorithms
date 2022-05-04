import cloneList from "../cloneList/cloneList";
import compare from "../compare/compare";

export default function (list: number[], passes: number = 2): number[] {
  let shuffledList = cloneList(list);

  while (compare(list, shuffledList)) {
    for (let p = 0; p <= passes; p++) {
      for (let i = 0; i < shuffledList.length; i++) {
        //select 2 random indexes
        const randInitial = Math.floor(Math.random() * shuffledList.length);
        const randFinal = Math.floor(Math.random() * shuffledList.length);

        //get values at selected indexes
        const initial = shuffledList[randInitial];
        const final = shuffledList[randFinal];

        //swap their places
        shuffledList[randInitial] = final;
        shuffledList[randFinal] = initial;
      }
    }
  }

  return shuffledList;
}

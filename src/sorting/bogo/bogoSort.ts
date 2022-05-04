import checkSort from "../util/checkSort/checkSort";
import cloneList from "../util/cloneList/cloneList";
import shuffle from "../util/shuffle/shuffle";

export default function bogoSort(list: number[]): number[] {
  let tempList = cloneList(list);

  while (!checkSort(tempList)) {
    tempList = shuffle(tempList);
    console.log(tempList);
  }

  return tempList;
}

import checkSort from "../util/list_utils/checkSort/checkSort";
import cloneList from "../util/list_utils/cloneList/cloneList";
import shuffle from "../util/list_utils/shuffle/shuffle";

export default function bogoSort(list: number[]): number[] {
  let tempList = cloneList(list);

  while (!checkSort(tempList)) {
    tempList = shuffle(tempList);
  }

  return tempList;
}

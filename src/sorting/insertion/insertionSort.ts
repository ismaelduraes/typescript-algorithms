import checkSort from "../util/list_utils/checkSort/checkSort";

export default function insertionSort(list: number[]): number[] {
  //
  for (let a = 1; a < list.length; a++) {
    if (list[a] < list[a - 1]) {
      //check if current position is smaller than previous position
      //if true, swap them
      const smallest = list[a];
      const biggest = list[a - 1];
      list[a] = biggest;
      list[a - 1] = smallest;
      console.log(list, a);

      for (let b = a; b > 0; b--) {
        //repeat process for all previous items again
        if (list[b] < list[b - 1]) {
          const smallest = list[b];
          const biggest = list[b - 1];
          list[b] = biggest;
          list[b - 1] = smallest;
        }
      }
    }
  }
  return list;
}

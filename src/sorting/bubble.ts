export default function bubbleSort(list: number[]): number[] {
  let tempList = list;
  let swaps = 0;
  let isDone = false;

  do {
    for (let a = 0; a <= list.length; a++) {
      if (swaps == 0) isDone = true;
      else swaps = 0; //reset amount of swaps
      //
      for (let b = a; b <= list.length; b++) {
        const head = b;
        if (tempList[head] > tempList[head + 1]) {
          const biggest = tempList[b];
          const smallest = tempList[b + 1];
          //pull smallest 1 index back
          tempList[head] = smallest;
          //push biggest 1 index forward (this will swap their places)
          tempList[head + 1] = biggest;

          swaps += 1;
        }
      }
    }
  } while (isDone === false);

  return tempList;
}

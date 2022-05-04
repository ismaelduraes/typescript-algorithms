export default function bubbleSort(list: number[]): number[] {
  let swaps = 0;
  let isDone = false;

  do {
    for (let a = 0; a <= list.length; a++) {
      if (swaps == 0) isDone = true;
      else swaps = 0; //reset amount of swaps
      //
      for (let b = 0; b <= list.length; b++) {
        const head = b;
        if (list[head] > list[head + 1]) {
          const biggest = list[b];
          const smallest = list[b + 1];
          //pull smallest 1 index back
          list[head] = smallest;
          //push biggest 1 index forward (this will swap their places)
          list[head + 1] = biggest;

          swaps += 1;
        }
      }
    }
  } while (isDone === false);

  return list;
}

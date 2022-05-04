export default function checkSort(list: number[]): boolean {
  let isSorted = true;

  for (let i = 0; i <= list.length; i++) {
    if (list[i] > list[i + 1]) isSorted = false;
  }

  return isSorted;
}

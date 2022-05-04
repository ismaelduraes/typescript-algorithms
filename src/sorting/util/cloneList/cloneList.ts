export default function cloneList(list: number[]): number[] {
  const clonedList = [];

  for (let i = 0; i < list.length; i++) {
    clonedList.push(list[i]);
  }

  return clonedList;
}

export default function compare(arr1: number[], arr2: number[]): boolean {
  if (arr1.length !== arr2.length) return false;

  let isEqual = true;
  for (let i = 0; i <= arr1.length; i++) {
    if (arr1[i] !== arr2[i]) isEqual = false;
  }

  return isEqual;
}

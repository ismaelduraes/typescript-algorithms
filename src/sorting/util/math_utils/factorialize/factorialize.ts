export default function factorialize(num: number): number {
  let res = 1;
  for (let i = num; i > 0; i--) {
    res *= i;
  }
  return res;
}

export default function timer(fn: () => void): number {
  const date = new Date();

  const initialTime = date.getTime();
  fn();
  const finalTime = date.getTime();

  return finalTime - initialTime;
}

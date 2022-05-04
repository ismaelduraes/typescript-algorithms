export default function timer(func: () => any): string {
  const initialTime = Date.now();
  func();
  const finalTime = Date.now();

  return `${finalTime - initialTime}ms`;
}

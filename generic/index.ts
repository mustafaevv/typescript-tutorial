const arrOfNumbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrOfStrings: Array<string> = [
  "Js",
  "Ts",
  "Node Js",
  "React Js",
  "Express Js",
];

function reverse<T>(arr: T[]): T[] {
  return arr.reverse();
}

console.log(reverse(arrOfStrings));
console.log(reverse(arrOfNumbers));

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(10, 5));

function toUpperCase(str: string): string {
  return str.toUpperCase();
}

console.log(toUpperCase("hello"));

interface MyPosition {
  x: number | undefined;
  y: number | undefined;
  z?: number | undefined;
}

interface MyPositionWidthDefault extends MyPosition {
  default: string;
}

function position(): MyPosition;
function position(a: number): MyPositionWidthDefault;
function position(a: number, b: number): MyPosition;

function position(a?: number, b?: number) {
  if (!a && !b) {
    return { x: undefined, y: undefined };
  }
  if (a && b) {
    return { x: a, y: undefined, default: a.toString() };
  }
  return { x: a, y: b };
}


console.log("empty: ",position());
console.log("One param: ",position(10));
console.log("Two params: ",position(10,15));

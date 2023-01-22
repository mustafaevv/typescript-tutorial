const str: string = "Hello Typescript";
const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const float: number = 5.4;
const num: number = 1e23;
const message: string = "Hello World";
const NumArr: object[] = [
  { name: "Max" },
  { name: "Max" },
  { name: "Max" },
  { name: "Max" },
  { name: "Max" },
  { name: "Max" },
  { name: "Max" },
  { name: "Max" },
  { name: "Max" },
  { name: "Max" },
];

const NumArr1: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const words: string[] = ["Node Js", "Javascript", "PHP"];

// Tuple

const user: [string, number, boolean] = ["Max", 21, true];

// Any

let variable: any = 31;
variable = "New String";
variable = [];

// Function

function sayMyName(name: string): void {
  console.log(name);
}

sayMyName("Max");

//--------------
// Never

function throwError(message: string): never {
  throw new Error(message);
}

type Login = string;
const login: Login = "Admin";
//--------------
interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person; // 'name' | 'age'

let key: PersonKeys = "name";
key = "age";

type User = {
  _id: number;
  name: string;
  email: string;
  createdAt: Date;
};

type USerKeysNoMeta1 = Exclude<keyof User, "_id" | "createdAt">; // 'name' | 'email'
type USerKeysNoMeta2 = Pick<User, "name" | "email">;

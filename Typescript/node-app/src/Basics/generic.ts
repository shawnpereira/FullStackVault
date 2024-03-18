function identity<T>(arg: T): T {
  return arg;
}

//can also pass in interface instead of string

let output1 = identity<string>("myString");
let output2 = identity<number>(100);

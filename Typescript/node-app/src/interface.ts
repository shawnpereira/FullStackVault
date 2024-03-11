interface User {
  firstName: string;
  lastName: string;
  email: string;
  // email?:string; means email is optional
  age: number;
}

const user: User = {
  firstName: "harkirat",
  lastName: "singh",
  email: "email@gmail.com",
  age: 21,
};

console.log(user);

interface User7 {
  email: string;
  password: string;
  age: number;
  username: string;
}

type UpdatedPick = Pick<User7, "age" | "username" | "email">;

//if we ever want only few parameters from interface we should take it as per above example and import in function

function Input(New: UpdatedPick) {}

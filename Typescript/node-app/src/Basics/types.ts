//types can be used to implement class, interface cannot they are almost same
//EG
// type User1 = {
//   name: string;
//   email: string;
// };

// interface User2 {
//   name: string;
//   email: string;
// }

// function legal(user: User1) {}

//Unions //interface cant do this
type StringOrNumber = string | number;

function printId(id: StringOrNumber) {
  console.log(`ID: ${id}`);
}

printId(101); // ID: 101
printId("202"); // ID: 202

//Intersection //interface cant do this
type Employee = {
  name: string;
  startDate: Date;
};

type Manager = {
  name: string;
  department: string;
};

type TeamLead = Employee & Manager;

const teamLead: TeamLead = {
  name: "shawn",
  startDate: new Date(),
  department: "Software developer",
};
//
//Array
function maxValue(arr: number[]) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(maxValue([1, 2, 3]));
//
//
interface User4 {
  firstName: string;
  lastName: string;
  age: number;
}

function filteredUsers(users: User4[]) {
  return users.filter((x) => x.age >= 18);
}

console.log(
  filteredUsers([
    {
      firstName: "shawn",
      lastName: "asd",
      age: 22,
    },
    {
      firstName: "Raman",
      lastName: "asd",
      age: 12,
    },
  ])
);

"use strict";
//types can be used to implement class, interface cannot they are almost same
//EG
// type User1 = {
//   name: string;
//   email: string;
// };
function printId(id) {
    console.log(`ID: ${id}`);
}
printId(101); // ID: 101
printId("202"); // ID: 202
const teamLead = {
    name: "shawn",
    startDate: new Date(),
    department: "Software developer",
};
//
//Array
function maxValue(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(maxValue([1, 2, 3]));
function filteredUsers(users) {
    return users.filter((x) => x.age >= 18);
}
console.log(filteredUsers([
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
]));

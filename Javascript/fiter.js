const months = ["jan", "feb", "march", "april", "dec"];

const filterByLength = months.filter((month) => {
  return month.length >= 4;
});

const letter = months.filter((month) => {
  return month.includes("a");
});

// console.log(filterByLength);

const students = [
  {
    name: "efsd",
    age: 18,
  },
  {
    name: "pop",
    age: 21,
  },
  {
    name: "hi",
    age: 10,
  },
];

const filterAge = students.filter((item) => {
  return item.age >= 18;
});

// console.log(filterAge);

//output [ { name: 'efsd', age: 18 }, { name: 'pop', age: 21 } ]

//but if we want we can evaluate it further, so now we get only the name

const filterAgeMap = students
  .filter((item) => {
    return item.age >= 18;
  })
  .map((item) => {
    return item.name;
  });

console.log(filterAgeMap);

// output [ 'efsd', 'pop' ]

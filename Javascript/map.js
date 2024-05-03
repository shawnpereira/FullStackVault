const months = ["jan", "feb", "march", "april", "dec"];

const uppercaseMonths = months.map((month) => {
  console.log(month); //first this will print as this runs first
  return month.toUpperCase();
});

console.log(uppercaseMonths);
//then this

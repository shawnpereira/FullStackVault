//map

const input = [2, 3, 4, 5, 6];

function transform(i) {
  return i * 2;
}

const ans = input.map(transform);
console.log(ans); // Output will be: [4, 6, 8, 10, 12]

//filter
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Define a function to check if a number is even
function isEven(number) {
  return number % 2 === 0;
}

// Use the filter method to create a new array containing only even numbers
const evenNumbers = numbers.filter(isEven);

console.log(evenNumbers); // Output will be: [2, 4, 6, 8, 10]

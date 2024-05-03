const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15
// Initial Value: 0 is provided as the initial value of the accumulator.

// First Iteration: accumulator is 0, currentValue is 1. The function returns 0 + 1 = 1.

// Second Iteration: accumulator is 1, currentValue is 2. The function returns 1 + 2 = 3.

// This process continues until all elements have been processed, resulting in the sum 15.
//
////////////////////////////////////
//
const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];

const nameCounts = names.reduce((accumulator, currentValue) => {
  if (accumulator[currentValue]) {
    accumulator[currentValue]++;
  } else {
    accumulator[currentValue] = 1;
  }
  return accumulator;
}, {});

console.log(nameCounts); // Output: { Alice: 2, Bob: 1, Tiff: 1, Bruce: 1 }
// Initial Value: An empty object {} is provided as the initial value of the accumulator.

// First Iteration: accumulator is {}, currentValue is 'Alice'. The function adds Alice to the accumulator with a count of 1.

// Second Iteration: accumulator is { Alice: 1 }, currentValue is 'Bob'. The function adds Bob to the accumulator with a count of 1.

// This process continues until all names have been processed, resulting in the object { Alice: 2, Bob: 1, Tiff: 1, Bruce: 1 }.
//
////////////////////////////////////
//
const nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const flattenedArray = nestedArray.reduce((accumulator, currentValue) => {
  return accumulator.concat(currentValue);
}, []);

console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]

// Initial Value: An empty array [] is provided as the initial value of the accumulator.

// First Iteration: accumulator is [], currentValue is [1, 2]. The function returns [].concat([1, 2]) which results in [1, 2].

// Second Iteration: accumulator is [1, 2], currentValue is [3, 4]. The function returns [1, 2].concat([3, 4]) which results in [1, 2, 3, 4].

// This process continues until all sub-arrays have been processed, resulting in the flattened array [1, 2, 3, 4, 5, 6].

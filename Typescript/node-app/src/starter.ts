const x: number = 10;

console.log(x);

function sum(a: number, b: number): number {
  //it means number will be returned
  return a + b;
}

console.log(sum(2, 3));

// function delayedCall(fn: () => void) {
//   setTimeout(fn, 1000);
// }

// delayedCall(function() {
//   console.log("hi there");
// })
// 2. rootDir
// Where should the compiler look for .ts files. Good practise is for this to be the src folder
// 3. outDir
// Where should the compiler look for spit out the .js files... now we can push outDir to gitignore

enum Direction {
  Up = 1,
  Down, // becomes 2 by default
  Left, // becomes 3
  Right, // becomes 4
}

function doSomething(keyPressed: Direction) {
  // Use the keyPressed variable here
  console.log("Key pressed:", keyPressed);
}

doSomething(Direction.Up);

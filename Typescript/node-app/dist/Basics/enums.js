"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
function doSomething(keyPressed) {
    // Use the keyPressed variable here
    console.log("Key pressed:", keyPressed);
}
doSomething(Direction.Up);

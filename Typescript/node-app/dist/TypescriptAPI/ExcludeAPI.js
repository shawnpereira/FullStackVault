"use strict";
// Function that accepts only 'click' and 'mousemove' events
const handleEvent = (event) => {
    console.log(`Handling event: ${event}`);
};
handleEvent("click"); // OK
// handleEvent("scroll"); // Error: Argument of type '"scroll"' is not assignable to parameter of type 'ExcludeEvent'.

"use strict";
// Function that accepts an object with optional 'name', 'age', and 'email' properties
function updateUser9(updatedProps) {
    // hit the database to update the User9
}
// Example usage of updateUser9
updateUser9({ name: "Alice" }); // Only updating the name
updateUser9({ age: "30", email: "alice@example.com" }); // Updating age and email
updateUser9({}); // No updates, but still a valid call

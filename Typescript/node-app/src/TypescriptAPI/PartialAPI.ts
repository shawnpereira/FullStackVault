interface User9 {
  id: string;
  name: string;
  age: string;
  email: string;
  password: string;
}

// Selecting 'name', 'age', and 'email' properties from User9
type UpdateProps = Pick<User9, "name" | "age" | "email">;

// Making the selected properties optional
type UpdatePropsOptional = Partial<UpdateProps>;

// Function that accepts an object with optional 'name', 'age', and 'email' properties
function updateUser9(updatedProps: UpdatePropsOptional) {
  // hit the database to update the User9
}

// Example usage of updateUser9
updateUser9({ name: "Alice" }); // Only updating the name
updateUser9({ age: "30", email: "alice@example.com" }); // Updating age and email
updateUser9({}); // No updates, but still a valid call

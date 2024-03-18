//Map is used more than records for key value pair implementation
interface User13 {
  id: string;
  name: string;
}

// Initialize an empty Map with string keys and User values
const usersMap = new Map<string, User13>();

// Add users to the map using .set
usersMap.set("abc123", { id: "abc123", name: "John Doe" });
usersMap.set("xyz789", { id: "xyz789", name: "Jane Doe" });

// Accessing a value using .get
console.log(usersMap.get("abc123")); // Output: { id: 'abc123', name: 'John Doe' }

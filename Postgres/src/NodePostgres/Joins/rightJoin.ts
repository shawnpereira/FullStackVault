import { Client } from "pg";

// Async function to fetch addresses along with user information using a RIGHT JOIN
async function getAddressesWithUsers() {
  const client = new Client({
    connectionString:
      "postgresql://postgres:make12345sp@localhost:5432/postgres?sslmode=disable",
  });

  try {
    await client.connect(); // Ensure client connection is established
    // RIGHT JOIN is used to include all addresses, even if there's no corresponding user
    const result = await client.query(
      `
      SELECT users5.username, addresses.city, addresses.country, addresses.street, addresses.pincode
      FROM addresses
      LEFT JOIN users5 ON users5.id = addresses.user_id;
      `
    );

    console.log(result.rows); // Output all fetched rows
  } catch (error) {
    console.error("Error fetching addresses with users:", error);
  } finally {
    await client.end(); // Close the client connection
  }
}

// Example usage
getAddressesWithUsers();

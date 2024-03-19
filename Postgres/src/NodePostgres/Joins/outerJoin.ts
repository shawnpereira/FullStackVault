import { Client } from "pg";

// Async function to fetch users and their addresses using a FULL JOIN
async function getUsersWithAddresses() {
  const client = new Client({
    connectionString:
      "postgresql://postgres:make12345sp@localhost:5432/postgres?sslmode=disable",
  });

  try {
    await client.connect(); // Ensure client connection is established
    // FULL JOIN is used to include all rows from both tables, even if there's no corresponding user or address
    const result = await client.query(
      `
      SELECT users5.username, addresses.city, addresses.country, addresses.street, addresses.pincode
      FROM users5
      FULL JOIN addresses ON users5.id = addresses.user_id;
      `
    );

    console.log(result.rows); // Output all fetched rows
  } catch (error) {
    console.error("Error fetching users with addresses:", error);
  } finally {
    await client.end(); // Close the client connection
  }
}

// Example usage
getUsersWithAddresses();

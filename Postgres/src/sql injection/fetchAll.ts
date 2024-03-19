import { Client } from "pg";

// Async function to fetch all users from the addresses table
async function getAllUsers() {
  const client = new Client({
    connectionString:
      "postgresql://postgres:make12345sp@localhost:5432/postgres?sslmode=disable",
  });

  try {
    await client.connect(); // Ensure client connection is established

    const result = await client.query(
      `
      SELECT *
      FROM users5
      `
    );

    console.log(result.rows); // Output all fetched rows
  } catch (error) {
    console.error("Error fetching users:", error);
  } finally {
    await client.end(); // Close the client connection
  }
}

// Example usage
getAllUsers();

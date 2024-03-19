import { Client } from "pg";

// Async function to fetch users and their addresses using a join query
async function getUsersWithAddresses() {
  const client = new Client({
    connectionString:
      "postgresql://postgres:make12345sp@localhost:5432/postgres?sslmode=disable",
  });
  //same as inner join
  try {
    await client.connect(); // Ensure client connection is established

    const result = await client.query(
      `
      SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode
            FROM users5 u
            JOIN addresses a ON u.id = a.user_id
            
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

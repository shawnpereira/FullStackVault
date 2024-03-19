import { Client } from "pg";

// Async function to fetch users and their addresses using a join query
async function getUsersWithAddresses() {
  const client = new Client({
    connectionString:
      "postgresql://postgres:make12345sp@localhost:5432/postgres?sslmode=disable",
  });

  try {
    await client.connect(); // Ensure client connection is established
    // left join is, even if there is no entry for address of user, show me the user
    const result = await client.query(
      `
      SELECT users5.username, addresses.city, addresses.country, addresses.street, addresses.pincode
      FROM users5
      LEFT JOIN addresses ON users5.id = addresses.user_id;
            
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

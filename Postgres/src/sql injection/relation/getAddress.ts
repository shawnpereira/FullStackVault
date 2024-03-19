import { Client } from "pg";

const client = new Client({
  connectionString:
    "postgresql://postgres:make12345sp@localhost:5432/postgres?sslmode=disable",
});

async function getAddressForUser(userId: number) {
  try {
    await client.connect();
    const query = `
      SELECT city, country, street, pincode
      FROM addresses
      WHERE user_id = $1
    `;
    const values = [userId];
    const result = await client.query(query, values);
    console.log("Address details for user ID", userId, ":", result.rows);
  } catch (error) {
    console.error("Error retrieving address:", error);
  } finally {
    await client.end();
  }
}

// Example usage: Get address details for user ID 1
getAddressForUser(1);

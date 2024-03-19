import { Client } from "pg";

const client = new Client({
  connectionString:
    "postgresql://postgres:make12345sp@localhost:5432/postgres?sslmode=disable",
});

async function insertAddress() {
  try {
    await client.connect();
    const query = `
      INSERT INTO addresses (user_id, city, country, street, pincode)
      VALUES ($1, $2, $3, $4, $5)
    `;
    const values = [1, "New York", "USA", "123 Broadway St", "10001"];
    const result = await client.query(query, values);
    console.log("Address inserted successfully:", result.rowCount);
  } catch (error) {
    console.error("Error inserting address:", error);
  } finally {
    await client.end();
  }
}

insertAddress();

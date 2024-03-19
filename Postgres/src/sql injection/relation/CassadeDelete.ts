import { Client } from "pg";

const client = new Client({
  connectionString:
    "postgresql://postgres:make12345sp@localhost:5432/postgres?sslmode=disable",
});

async function deleteUserAndAddresses(userId: number) {
  try {
    await client.connect();
    // Begin a transaction to ensure both delete operations succeed or fail together
    await client.query("BEGIN");

    // Delete the user from the users5 table
    await client.query("DELETE FROM users5 WHERE id = $1", [userId]);

    // No need to delete from addresses table explicitly, as CASCADE delete is handled by the foreign key constraint

    // Commit the transaction
    await client.query("COMMIT");

    console.log("User and associated addresses deleted successfully.");
  } catch (error) {
    // Rollback the transaction if an error occurs
    await client.query("ROLLBACK");
    console.error("Error deleting user and associated addresses:", error);
  } finally {
    await client.end();
  }
}

// Example usage: Delete "userone" with user_id 1 and associated addresses
deleteUserAndAddresses(1);

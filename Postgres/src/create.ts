import { Client } from "pg";

// Async function to insert data into a table it prevents sql injection
async function insertData(username: string, email: string, password: string) {
  const client = new Client({
    connectionString:
      "postgresql://shawnpereiraswp:9OlVux0pLZBi@ep-white-silence-a58ilnw5.us-east-2.aws.neon.tech/test?sslmode=require",
  });

  try {
    await client.connect(); // Ensure client connection is established
    // Use parameterized query to prevent SQL injection
    const insertQuery =
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
    const values = [username, email, password];
    const res = await client.query(insertQuery, values);
    console.log("Insertion success:", res); // Output insertion result
  } catch (err) {
    console.error("Error during the insertion:", err);
  } finally {
    await client.end(); // Close the client connection
  }
}

// Example usage
insertData("username5", "user5@example.com", "user_password").catch(
  console.error
);

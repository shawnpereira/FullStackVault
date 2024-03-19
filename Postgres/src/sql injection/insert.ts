import { Client } from "pg";

// Async function to insert data into a table it prevents sql injection
async function insertData(username: string, email: string, password: string) {
  const client = new Client({
    connectionString:
      "postgresql://postgres:make12345sp@localhost:5432/postgres?sslmode=disable",
  });

  await client.connect(); // Ensure client connection is established

  const result = await client.query(
    `
    INSERT INTO USERS5(username, email, password)
    VALUES ($1,$2,$3)
    `,
    [username, email, password]
    // Use parameterized query to prevent SQL injection
  );
  console.log(result);
}
// Example usage
insertData("usernaasdme5", "user5@exasdample.com", "user_passasdword");

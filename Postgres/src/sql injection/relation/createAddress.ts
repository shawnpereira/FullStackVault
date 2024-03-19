import { Client } from "pg";

const client = new Client({
  connectionString:
    "postgresql://postgres:make12345sp@localhost:5432/postgres?sslmode=disable",
});
//This table relationship is with users5, FOREIGN KEY (user_id) refers to id of user from user5 table. so when the address are created the foreign key points to user id from the main table i.e user5 table
// in address table, id will be 1,2,3.. but user id i.e foreign key will be 1 that means it points to addresses of user5 mai 1 wala user
//if you do CASCADE DELETE then the entire info of user gets deleted
async function createUsersTable() {
  await client.connect();
  const result = await client.query(`
  CREATE TABLE addresses (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    city VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL,
    street VARCHAR(255) NOT NULL,
    pincode VARCHAR(20),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users5(id) ON DELETE CASCADE
);
  `);
  console.log(result);
}

createUsersTable();

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
// Async function to fetch users and their addresses using a FULL JOIN
function getUsersWithAddresses() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            connectionString: "postgresql://postgres:make12345sp@localhost:5432/postgres?sslmode=disable",
        });
        try {
            yield client.connect(); // Ensure client connection is established
            // FULL JOIN is used to include all rows from both tables, even if there's no corresponding user or address
            const result = yield client.query(`
      SELECT users5.username, addresses.city, addresses.country, addresses.street, addresses.pincode
      FROM users5
      FULL JOIN addresses ON users5.id = addresses.user_id;
      `);
            console.log(result.rows); // Output all fetched rows
        }
        catch (error) {
            console.error("Error fetching users with addresses:", error);
        }
        finally {
            yield client.end(); // Close the client connection
        }
    });
}
// Example usage
getUsersWithAddresses();

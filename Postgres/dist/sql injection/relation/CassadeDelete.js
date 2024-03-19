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
const client = new pg_1.Client({
    connectionString: "postgresql://postgres:make12345sp@localhost:5432/postgres?sslmode=disable",
});
function deleteUserAndAddresses(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            // Begin a transaction to ensure both delete operations succeed or fail together
            yield client.query("BEGIN");
            // Delete the user from the users5 table
            yield client.query("DELETE FROM users5 WHERE id = $1", [userId]);
            // No need to delete from addresses table explicitly, as CASCADE delete is handled by the foreign key constraint
            // Commit the transaction
            yield client.query("COMMIT");
            console.log("User and associated addresses deleted successfully.");
        }
        catch (error) {
            // Rollback the transaction if an error occurs
            yield client.query("ROLLBACK");
            console.error("Error deleting user and associated addresses:", error);
        }
        finally {
            yield client.end();
        }
    });
}
// Example usage: Delete "userone" with user_id 1 and associated addresses
deleteUserAndAddresses(1);

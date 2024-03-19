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
function getAddressForUser(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const query = `
      SELECT city, country, street, pincode
      FROM addresses
      WHERE user_id = $1
    `;
            const values = [userId];
            const result = yield client.query(query, values);
            console.log("Address details for user ID", userId, ":", result.rows);
        }
        catch (error) {
            console.error("Error retrieving address:", error);
        }
        finally {
            yield client.end();
        }
    });
}
// Example usage: Get address details for user ID 1
getAddressForUser(1);

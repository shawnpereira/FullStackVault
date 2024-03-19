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
function insertAddress() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const query = `
      INSERT INTO addresses (user_id, city, country, street, pincode)
      VALUES ($1, $2, $3, $4, $5)
    `;
            const values = [1, "New York", "USA", "123 Broadway St", "10001"];
            const result = yield client.query(query, values);
            console.log("Address inserted successfully:", result.rowCount);
        }
        catch (error) {
            console.error("Error inserting address:", error);
        }
        finally {
            yield client.end();
        }
    });
}
insertAddress();

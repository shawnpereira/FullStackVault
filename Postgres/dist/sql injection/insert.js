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
// Async function to insert data into a table it prevents sql injection
function insertData(username, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            connectionString: "postgresql://postgres:make12345sp@localhost:5432/postgres?sslmode=disable",
        });
        yield client.connect(); // Ensure client connection is established
        const result = yield client.query(`
    INSERT INTO USERS5(username, email, password)
    VALUES ($1,$2,$3)
    `, [username, email, password]
        // Use parameterized query to prevent SQL injection
        );
        console.log(result);
    });
}
// Example usage
insertData("usernaasdme5", "user5@exasdample.com", "user_passasdword");

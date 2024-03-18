"use strict";
const config = {
    endpoint: "<https://api.example.com>",
    apiKey: "abcdef123456",
};
// Attempting to modify the object will result in a TypeScript error
// config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property.

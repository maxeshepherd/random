
const assert = require("node:assert/strict");

const prime = require("./index");

assert.strictEqual(prime.isPrime(19), true);

assert.strictEqual(prime.isPrime(20), false);
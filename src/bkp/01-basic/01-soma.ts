/**
 * Exercise 01: Sum of Two Numbers
 * Objective: Create a function that returns the sum of two numbers
 */

function sumOfTwo(a: number, b: number): number {
  return a + b;
}

// Test Cases
console.log("=== Exercise 01: Sum of Two Numbers ===");
console.log(`sumOfTwo(5, 3) = ${sumOfTwo(5, 3)}`); // 8
console.log(`sumOfTwo(-5, 3) = ${sumOfTwo(-5, 3)}`); // -2
console.log(`sumOfTwo(0, 0) = ${sumOfTwo(0, 0)}`); // 0

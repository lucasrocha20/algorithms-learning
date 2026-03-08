/**
 * Exercise 03: Check Parity (Even or Odd)
 * Objective: Determine if a number is even or odd
 */

function isEven(number: number): boolean {
  return number % 2 === 0;
}

function checkParity(number: number): string {
  return isEven(number) ? "Even" : "Odd";
}

// Test Cases
console.log("=== Exercise 03: Check Parity ===");
console.log(`checkParity(4) = ${checkParity(4)}`); // Even
console.log(`checkParity(7) = ${checkParity(7)}`); // Odd
console.log(`checkParity(0) = ${checkParity(0)}`); // Even
console.log(`checkParity(-3) = ${checkParity(-3)}`); // Odd

/**
 * Exercise 05: Factorial
 * Objective: Calculate the factorial of a number
 * Factorial(n) = n × (n-1) × (n-2) × ... × 1
 */

// Recursive approach
function factorialRecursive(n: number): number {
  if (n < 0) throw new Error("Factorial of negative number does not exist");
  if (n === 0 || n === 1) return 1;
  return n * factorialRecursive(n - 1);
}

// Iterative approach
function factorialIterative(n: number): number {
  if (n < 0) throw new Error("Factorial of negative number does not exist");
  if (n === 0 || n === 1) return 1;

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Test Cases
console.log("=== Exercise 05: Factorial ===");
console.log(`factorialRecursive(0) = ${factorialRecursive(0)}`); // 1
console.log(`factorialRecursive(1) = ${factorialRecursive(1)}`); // 1
console.log(`factorialRecursive(5) = ${factorialRecursive(5)}`); // 120
console.log(`factorialIterative(6) = ${factorialIterative(6)}`); // 720
console.log(`factorialIterative(10) = ${factorialIterative(10)}`); // 3628800

/**
 * Exercise 02: Fibonacci Sequence
 * Objective: Return the nth number in the Fibonacci sequence
 * Sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21...
 */

function fibonacci(n: number): number {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Optimized version with memoization
function fibonacciMemoized(n: number, memo: Record<number, number> = {}): number {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  
  memo[n] = fibonacciMemoized(n - 1, memo) + fibonacciMemoized(n - 2, memo);
  return memo[n];
}

// Test Cases
console.log("=== Exercise 02: Fibonacci Sequence ===");
console.log(`fibonacci(0) = ${fibonacci(0)}`); // 0
console.log(`fibonacci(1) = ${fibonacci(1)}`); // 1
console.log(`fibonacci(5) = ${fibonacci(5)}`); // 5
console.log(`fibonacciMemoized(10) = ${fibonacciMemoized(10)}`); // 55

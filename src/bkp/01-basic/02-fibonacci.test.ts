/**
 * Unit Tests: Fibonacci Sequence
 */

import { test } from "../../test-framework";

function fibonacci(n: number): number {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciMemoized(
  n: number,
  memo: Record<number, number> = {}
): number {
  if (n in memo) return memo[n];
  if (n <= 1) return n;

  memo[n] = fibonacciMemoized(n - 1, memo) + fibonacciMemoized(n - 2, memo);
  return memo[n];
}

test.describe("Fibonacci Sequence", () => {
  test.it("should return 0 for n=0", () => {
    test.Assert.equal(fibonacci(0), 0);
  });

  test.it("should return 1 for n=1", () => {
    test.Assert.equal(fibonacci(1), 1);
  });

  test.it("should return 1 for n=2", () => {
    test.Assert.equal(fibonacci(2), 1);
  });

  test.it("should return 5 for n=5", () => {
    test.Assert.equal(fibonacci(5), 5);
  });

  test.it("should return 8 for n=6", () => {
    test.Assert.equal(fibonacci(6), 8);
  });

  test.it("should return 55 for n=10", () => {
    test.Assert.equal(fibonacci(10), 55);
  });

  test.it("memoized version should return 89 for n=11", () => {
    test.Assert.equal(fibonacciMemoized(11), 89);
  });

  test.it("memoized version should be very fast for large numbers", () => {
    const result = fibonacciMemoized(30);
    test.Assert.equal(result, 832040);
  });
});

test.run();

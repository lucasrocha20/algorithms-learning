/**
 * Unit Tests: Factorial
 */

import { test } from "../../test-framework";

function factorialRecursive(n: number): number {
  if (n < 0) throw new Error("Factorial of negative number does not exist");
  if (n === 0 || n === 1) return 1;
  return n * factorialRecursive(n - 1);
}

function factorialIterative(n: number): number {
  if (n < 0) throw new Error("Factorial of negative number does not exist");
  if (n === 0 || n === 1) return 1;

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

test.describe("Factorial", () => {
  test.describe("Recursive Factorial", () => {
    test.it("should return 1 for 0!", () => {
      test.Assert.equal(factorialRecursive(0), 1);
    });

    test.it("should return 1 for 1!", () => {
      test.Assert.equal(factorialRecursive(1), 1);
    });

    test.it("should return 2 for 2!", () => {
      test.Assert.equal(factorialRecursive(2), 2);
    });

    test.it("should return 6 for 3!", () => {
      test.Assert.equal(factorialRecursive(3), 6);
    });

    test.it("should return 120 for 5!", () => {
      test.Assert.equal(factorialRecursive(5), 120);
    });

    test.it("should throw error for negative numbers", () => {
      test.Assert.throws(() => factorialRecursive(-5));
    });
  });

  test.describe("Iterative Factorial", () => {
    test.it("should return 1 for 0!", () => {
      test.Assert.equal(factorialIterative(0), 1);
    });

    test.it("should return 6 for 3!", () => {
      test.Assert.equal(factorialIterative(3), 6);
    });

    test.it("should return 720 for 6!", () => {
      test.Assert.equal(factorialIterative(6), 720);
    });

    test.it("should return 3628800 for 10!", () => {
      test.Assert.equal(factorialIterative(10), 3628800);
    });

    test.it("should throw error for negative numbers", () => {
      test.Assert.throws(() => factorialIterative(-1));
    });
  });

  test.describe("Comparison between recursive and iterative", () => {
    test.it("both versions should return same result", () => {
      for (let i = 0; i <= 10; i++) {
        test.Assert.equal(
          factorialRecursive(i),
          factorialIterative(i),
          `Factorial of ${i} should be equal`
        );
      }
    });
  });
});

test.run();

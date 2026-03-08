/**
 * Unit Tests: Check Parity
 */

import { test } from "../../test-framework";

function isEven(number: number): boolean {
  return number % 2 === 0;
}

function checkParity(number: number): string {
  return isEven(number) ? "Even" : "Odd";
}

test.describe("Check Parity", () => {
  test.describe("isEven Function", () => {
    test.it("should return true for positive even numbers", () => {
      test.Assert.true(isEven(4));
      test.Assert.true(isEven(10));
      test.Assert.true(isEven(100));
    });

    test.it("should return false for positive odd numbers", () => {
      test.Assert.false(isEven(3));
      test.Assert.false(isEven(7));
      test.Assert.false(isEven(99));
    });

    test.it("should return true for zero", () => {
      test.Assert.true(isEven(0));
    });

    test.it("should work with negative numbers", () => {
      test.Assert.true(isEven(-4));
      test.Assert.false(isEven(-3));
    });
  });

  test.describe("checkParity Function", () => {
    test.it("should return 'Even' for even numbers", () => {
      test.Assert.equal(checkParity(4), "Even");
      test.Assert.equal(checkParity(20), "Even");
    });

    test.it("should return 'Odd' for odd numbers", () => {
      test.Assert.equal(checkParity(7), "Odd");
      test.Assert.equal(checkParity(-3), "Odd");
    });

    test.it("should return 'Even' for zero", () => {
      test.Assert.equal(checkParity(0), "Even");
    });
  });
});

test.run();

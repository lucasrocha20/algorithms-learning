/**
 * Unit Tests: Sum of Two Numbers
 */

import { test } from "../../test-framework";

function sumOfTwo(a: number, b: number): number {
  return a + b;
}

test.describe("Sum of Two Numbers", () => {
  test.it("should add two positive numbers", () => {
    const result = sumOfTwo(5, 3);
    test.Assert.equal(result, 8, "5 + 3 should be 8");
  });

  test.it("should add negative numbers", () => {
    const result = sumOfTwo(-5, 3);
    test.Assert.equal(result, -2, "-5 + 3 should be -2");
  });

  test.it("should add two negative numbers", () => {
    const result = sumOfTwo(-5, -3);
    test.Assert.equal(result, -8, "-5 + -3 should be -8");
  });

  test.it("should return 0 when both are 0", () => {
    const result = sumOfTwo(0, 0);
    test.Assert.equal(result, 0, "0 + 0 should be 0");
  });

  test.it("should add decimals", () => {
    const result = sumOfTwo(2.5, 3.5);
    test.Assert.equal(result, 6, "2.5 + 3.5 should be 6");
  });
});

test.run();

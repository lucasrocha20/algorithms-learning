/**
 * Unit Tests: Linear Search
 */

import { test } from "../../test-framework";

function linearSearch(array: number[], target: number): number {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}

test.describe("Linear Search", () => {
  test.it("should find element at the beginning of array", () => {
    const arr = [10, 20, 30, 40, 50];
    test.Assert.equal(linearSearch(arr, 10), 0);
  });

  test.it("should find element in the middle of array", () => {
    const arr = [10, 20, 30, 40, 50];
    test.Assert.equal(linearSearch(arr, 30), 2);
  });

  test.it("should find element at the end of array", () => {
    const arr = [10, 20, 30, 40, 50];
    test.Assert.equal(linearSearch(arr, 50), 4);
  });

  test.it("should return -1 when element does not exist", () => {
    const arr = [10, 20, 30, 40, 50];
    test.Assert.equal(linearSearch(arr, 25), -1);
  });

  test.it("should return -1 for empty array", () => {
    const arr: number[] = [];
    test.Assert.equal(linearSearch(arr, 10), -1);
  });

  test.it("should find first duplicate element", () => {
    const arr = [1, 2, 3, 2, 4];
    test.Assert.equal(linearSearch(arr, 2), 1);
  });

  test.it("should work with negative numbers", () => {
    const arr = [-10, -5, 0, 5, 10];
    test.Assert.equal(linearSearch(arr, -5), 1);
  });

  test.it("should find zero in an array", () => {
    const arr = [-1, 0, 1];
    test.Assert.equal(linearSearch(arr, 0), 1);
  });
});

test.run();

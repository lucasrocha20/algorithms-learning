/**
 * Unit Tests: Find Maximum and Minimum
 */

import { test } from "../../test-framework";

function findMaximum(array: number[]): number {
  if (array.length === 0) throw new Error("Array is empty");

  let maximum = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > maximum) {
      maximum = array[i];
    }
  }
  return maximum;
}

function findMinimum(array: number[]): number {
  if (array.length === 0) throw new Error("Array is empty");

  let minimum = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < minimum) {
      minimum = array[i];
    }
  }
  return minimum;
}

test.describe("Maximum and Minimum", () => {
  test.describe("Find Maximum", () => {
    test.it("should find maximum in array with positive numbers", () => {
      const arr = [45, 23, 89, 12, 67];
      test.Assert.equal(findMaximum(arr), 89);
    });

    test.it("should find maximum in array with negative numbers", () => {
      const arr = [-45, -23, -89, -12];
      test.Assert.equal(findMaximum(arr), -12);
    });

    test.it("should find maximum in mixed array", () => {
      const arr = [-10, 5, 20, -30, 15];
      test.Assert.equal(findMaximum(arr), 20);
    });

    test.it("should return element when array has only one", () => {
      test.Assert.equal(findMaximum([42]), 42);
    });

    test.it("should throw error for empty array", () => {
      test.Assert.throws(() => findMaximum([]));
    });

    test.it("should find maximum with duplicates", () => {
      const arr = [3, 5, 5, 2];
      test.Assert.equal(findMaximum(arr), 5);
    });
  });

  test.describe("Find Minimum", () => {
    test.it("should find minimum in array with positive numbers", () => {
      const arr = [45, 23, 89, 12, 67];
      test.Assert.equal(findMinimum(arr), 12);
    });

    test.it("should find minimum in array with negative numbers", () => {
      const arr = [-45, -23, -89, -12];
      test.Assert.equal(findMinimum(arr), -89);
    });

    test.it("should find minimum in mixed array", () => {
      const arr = [-10, 5, 20, -30, 15];
      test.Assert.equal(findMinimum(arr), -30);
    });

    test.it("should return element when array has only one", () => {
      test.Assert.equal(findMinimum([42]), 42);
    });

    test.it("should throw error for empty array", () => {
      test.Assert.throws(() => findMinimum([]));
    });
  });

  test.describe("Edge Cases", () => {
    test.it("maximum and minimum are equal when one element", () => {
      test.Assert.equal(findMaximum([7]), findMinimum([7]));
    });

    test.it("maximum and minimum with equal numbers", () => {
      const arr = [5, 5, 5, 5];
      test.Assert.equal(findMaximum(arr), 5);
      test.Assert.equal(findMinimum(arr), 5);
    });
  });
});

test.run();

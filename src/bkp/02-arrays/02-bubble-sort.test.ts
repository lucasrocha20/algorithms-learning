/**
 * Unit Tests: Bubble Sort
 */

import { test } from "../../test-framework";

function bubbleSort(array: number[]): number[] {
  const arr = [...array];
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

test.describe("Bubble Sort", () => {
  test.it("should sort unsorted array", () => {
    const arr = [64, 34, 25, 12, 22];
    const expected = [12, 22, 25, 34, 64];
    test.Assert.deepEqual(bubbleSort(arr), expected);
  });

  test.it("should sort array in reverse order", () => {
    const arr = [5, 4, 3, 2, 1];
    const expected = [1, 2, 3, 4, 5];
    test.Assert.deepEqual(bubbleSort(arr), expected);
  });

  test.it("should keep already sorted array", () => {
    const arr = [1, 2, 3, 4, 5];
    test.Assert.deepEqual(bubbleSort(arr), arr);
  });

  test.it("should sort array with negative numbers", () => {
    const arr = [3, -1, 4, -5, 2];
    const expected = [-5, -1, 2, 3, 4];
    test.Assert.deepEqual(bubbleSort(arr), expected);
  });

  test.it("should return empty array without errors", () => {
    test.Assert.deepEqual(bubbleSort([]), []);
  });

  test.it("should sort array with one element", () => {
    test.Assert.deepEqual(bubbleSort([42]), [42]);
  });

  test.it("should sort array with duplicates", () => {
    const arr = [3, 1, 3, 2, 1];
    const expected = [1, 1, 2, 3, 3];
    test.Assert.deepEqual(bubbleSort(arr), expected);
  });

  test.it("should not modify the original array", () => {
    const arr = [5, 2, 8, 1];
    const original = [...arr];
    bubbleSort(arr);
    test.Assert.deepEqual(arr, original);
  });

  test.it("should sort array with decimal numbers", () => {
    const arr = [3.5, 1.2, 2.8];
    const expected = [1.2, 2.8, 3.5];
    test.Assert.deepEqual(bubbleSort(arr), expected);
  });
});

test.run();

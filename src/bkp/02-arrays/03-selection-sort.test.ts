/**
 * Unit Tests: Selection Sort
 */

import { test } from "../../test-framework";

function selectionSort(array: number[]): number[] {
  const arr = [...array];
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

test.describe("Selection Sort", () => {
  test.it("should sort unsorted array", () => {
    const arr = [64, 34, 25, 12, 22];
    const expected = [12, 22, 25, 34, 64];
    test.Assert.deepEqual(selectionSort(arr), expected);
  });

  test.it("should sort array in reverse order", () => {
    const arr = [5, 4, 3, 2, 1];
    const expected = [1, 2, 3, 4, 5];
    test.Assert.deepEqual(selectionSort(arr), expected);
  });

  test.it("should keep already sorted array", () => {
    const arr = [1, 2, 3, 4, 5];
    test.Assert.deepEqual(selectionSort(arr), arr);
  });

  test.it("should sort array with negative numbers", () => {
    const arr = [3, -1, 4, -5, 2];
    const expected = [-5, -1, 2, 3, 4];
    test.Assert.deepEqual(selectionSort(arr), expected);
  });

  test.it("should return empty array without errors", () => {
    test.Assert.deepEqual(selectionSort([]), []);
  });

  test.it("should sort array with one element", () => {
    test.Assert.deepEqual(selectionSort([42]), [42]);
  });

  test.it("should sort array with duplicates", () => {
    const arr = [3, 1, 3, 2, 1];
    const expected = [1, 1, 2, 3, 3];
    test.Assert.deepEqual(selectionSort(arr), expected);
  });

  test.it("should not modify the original array", () => {
    const arr = [5, 2, 8, 1];
    const original = [...arr];
    selectionSort(arr);
    test.Assert.deepEqual(arr, original);
  });
});

test.run();

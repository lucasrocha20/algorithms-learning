/**
 * Exercise 02: Find Maximum and Minimum
 * Objective: Find the largest and smallest element in an array
 */

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

function findMaximumAndMinimum(
  array: number[]
): { maximum: number; minimum: number } {
  return {
    maximum: findMaximum(array),
    minimum: findMinimum(array),
  };
}

// Test Cases
console.log("=== Exercise 02: Maximum and Minimum ===");
const arr = [45, 23, 89, 12, 67, 34, 90, 11];
console.log(`Array: [${arr}]`);
console.log(`Maximum: ${findMaximum(arr)}`); // 90
console.log(`Minimum: ${findMinimum(arr)}`); // 11

const result = findMaximumAndMinimum(arr);
console.log(`\nMaximum and Minimum: ${JSON.stringify(result)}`);

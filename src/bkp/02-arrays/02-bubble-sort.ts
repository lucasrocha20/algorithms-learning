/**
 * Exercise 03: Bubble Sort
 * Objective: Sort an array using the Bubble Sort algorithm
 */

function bubbleSort(array: number[]): number[] {
  const arr = [...array]; // Create a copy to avoid modifying the original
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

// Test Cases
console.log("=== Exercise 03: Bubble Sort ===");
const arr1 = [64, 34, 25, 12, 22, 11, 90];
console.log(`Original array: [${arr1}]`);
console.log(`Sorted array: [${bubbleSort(arr1)}]`);

const arr2 = [5, 2, 8, 1, 9];
console.log(`\nOriginal array: [${arr2}]`);
console.log(`Sorted array: [${bubbleSort(arr2)}]`);

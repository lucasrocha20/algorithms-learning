/**
 * Exercise 04: Selection Sort
 * Objective: Sort an array using the Selection Sort algorithm
 */

function selectionSort(array: number[]): number[] {
  const arr = [...array]; // Create a copy to avoid modifying the original
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap elements
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

// Test Cases
console.log("=== Exercise 04: Selection Sort ===");
const arr1 = [64, 34, 25, 12, 22, 11, 90];
console.log(`Original array: [${arr1}]`);
console.log(`Sorted array: [${selectionSort(arr1)}]`);

const arr2 = [5, 2, 8, 1, 9, 3];
console.log(`\nOriginal array: [${arr2}]`);
console.log(`Sorted array: [${selectionSort(arr2)}]`);

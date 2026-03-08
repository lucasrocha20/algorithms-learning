/**
 * Exercise 01: Linear Search
 * Objective: Find an element in an array
 */

function linearSearch(array: number[], target: number): number {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1; // Not found
}

// Test Cases
console.log("=== Exercise 01: Linear Search ===");
const arr = [10, 20, 30, 40, 50];
console.log(`Search for 30 in [${arr}] = ${linearSearch(arr, 30)}`); // 2
console.log(`Search for 25 in [${arr}] = ${linearSearch(arr, 25)}`); // -1
console.log(`Search for 10 in [${arr}] = ${linearSearch(arr, 10)}`); // 0

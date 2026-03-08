/**
 * Exercise 04: Reverse String
 * Objective: Reverse a given string
 */

function reverseString(str: string): string {
  return str.split("").reverse().join("");
}

// Alternative implementation without built-in methods
function reverseStringManual(str: string): string {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

// Test Cases
console.log("=== Exercise 04: Reverse String ===");
console.log(`reverseString("hello") = ${reverseString("hello")}`); // olleh
console.log(`reverseString("typescript") = ${reverseString("typescript")}`); // tpircstepyt
console.log(`reverseStringManual("world") = ${reverseStringManual("world")}`); // dlrow

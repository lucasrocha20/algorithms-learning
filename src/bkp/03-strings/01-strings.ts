/**
 * Exercise 01: String Operations
 * Objective: Palindrome check, count vowels, and anagram validation
 */

function isPalindrome(str: string): boolean {
  const processed = str
    .toLowerCase()
    .replace(/\s/g, "")
    .replace(/[^a-z0-9]/g, "");
  
  return processed === processed.split("").reverse().join("");
}

/**
 * Exercise 02: Count Vowels
 * Objective: Count the number of vowels in a string
 */

function countVowels(str: string): number {
  const vowels = str.match(/[aeiou]/gi);
  return vowels ? vowels.length : 0;
}

/**
 * Exercise 03: Check Anagrams
 * Objective: Verify if two strings are anagrams
 */

function areAnagrams(str1: string, str2: string): boolean {
  const normalize = (s: string) =>
    s
      .toLowerCase()
      .replace(/\s/g, "")
      .split("")
      .sort()
      .join("");

  return normalize(str1) === normalize(str2);
}

// Test Cases
console.log("=== Exercise 01: Palindrome Check ===");
console.log(`"racecar" is palindrome? ${isPalindrome("racecar")}`); // true
console.log(`"hello" is palindrome? ${isPalindrome("hello")}`); // false
console.log(`"A man, a plan, a canal: Panama" is palindrome? ${isPalindrome("A man, a plan, a canal: Panama")}`); // true

console.log("\n=== Exercise 02: Count Vowels ===");
console.log(`Vowels in "hello world" = ${countVowels("hello world")}`); // 3
console.log(`Vowels in "typescript" = ${countVowels("typescript")}`); // 1
console.log(`Vowels in "algorithm" = ${countVowels("algorithm")}`); // 3

console.log("\n=== Exercise 03: Check Anagrams ===");
console.log(`"listen" and "silent" are anagrams? ${areAnagrams("listen", "silent")}`); // true
console.log(`"hello" and "world" are anagrams? ${areAnagrams("hello", "world")}`); // false

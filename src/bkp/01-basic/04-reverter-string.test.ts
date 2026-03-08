/**
 * Unit Tests: Reverse String
 */

import { test } from "../../test-framework";

function reverseString(str: string): string {
  return str.split("").reverse().join("");
}

function reverseStringManual(str: string): string {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

test.describe("Reverse String", () => {
  test.describe("split/reverse/join Method", () => {
    test.it("should reverse simple strings", () => {
      test.Assert.equal(reverseString("hello"), "olleh");
      test.Assert.equal(reverseString("typescript"), "tpircstepyt");
    });

    test.it("should reverse strings with special characters", () => {
      test.Assert.equal(reverseString("hello!"), "!olleh");
      test.Assert.equal(reverseString("123!@#"), "#@!321");
    });

    test.it("should return empty for empty string", () => {
      test.Assert.equal(reverseString(""), "");
    });

    test.it("should return same letter for single character", () => {
      test.Assert.equal(reverseString("a"), "a");
    });

    test.it("should reverse strings with spaces", () => {
      test.Assert.equal(reverseString("hello world"), "dlrow olleh");
    });
  });

  test.describe("Manual Loop Method", () => {
    test.it("should reverse simple strings manually", () => {
      test.Assert.equal(reverseStringManual("hello"), "olleh");
      test.Assert.equal(reverseStringManual("test"), "tset");
    });

    test.it("should have same result as split method", () => {
      const str = "algorithm";
      test.Assert.equal(
        reverseStringManual(str),
        reverseString(str)
      );
    });

    test.it("should return empty for empty string", () => {
      test.Assert.equal(reverseStringManual(""), "");
    });
  });
});

test.run();

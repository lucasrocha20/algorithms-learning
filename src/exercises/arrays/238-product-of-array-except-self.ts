// https://leetcode.com/problems/product-of-array-except-self/
// pattern: Prefix and Postfix products

function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const result = new Array(n).fill(1);

  // 1️⃣ Prefix pass (left to right)
  let prefix = 1;
  for (let i = 0; i < n; i++) {
    result[i] = Object.is(prefix, -0) ? 0 : prefix;
    prefix *= nums[i];
    prefix = Object.is(prefix, -0) ? 0 : prefix;
  }

  // 2️⃣ Postfix pass (right to left)
  let postfix = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= postfix;
    result[i] = Object.is(result[i], -0) ? 0 : result[i];

    postfix *= nums[i];
    postfix = Object.is(postfix, -0) ? 0 : postfix;
  }

  return result;
}

export default productExceptSelf;

// BIG O(n) time complexity
// BIG O(1) space complexity (excluding the output array)
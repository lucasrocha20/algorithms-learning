// https://leetcode.com/problems/maximum-subarray/
// pattern: Kadane's algorithm

function maxSubArray(nums: number[]): number {
    let maxSum = nums[0];
    let currentSum = nums[0];

    for(let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], nums[i] + currentSum);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
};

export default maxSubArray;

// BIG O(n) time complexity
// BIG O(1) space complexity
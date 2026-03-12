// https://leetcode.com/problems/container-with-most-water/description/

function maxArea(height: number[]): number {
    let left = 0;
    let right = height.length - 1;
    let result = 0;

    while (left < right) {
        const area = (right - left) * Math.min(height[left], height[right]);
        result = Math.max(area, result);

        if(height[left] < height[right]) {
            left += 1;
        } else {
            right -= 1;
        }
    }

    console.log('result', result)

    return result;
};

export default maxArea;

// BIG O(n) time complexity
// BIG O(1) space complexity
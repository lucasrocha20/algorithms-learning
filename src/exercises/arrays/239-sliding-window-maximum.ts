// Pattern Double-ended queue

function maxSlidingWindow(nums: number[], k: number): number[] {
    const result: number[] = [];
    const deque: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }

        deque.push(i);

        if (i >= k - 1) {
            result.push(nums[deque[0]]);

            if (deque[0] === i - k + 1) {
                deque.shift();
            }
        }
    }

    return result;
}

maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3);

export default maxSlidingWindow;
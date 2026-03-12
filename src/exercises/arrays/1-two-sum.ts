// pattern: Hash Table

function twoSum(nums: number[], target: number): number[] {
    const pars = new Map();
    for(let i: number = 0; i < nums.length; i++) {
        const current = nums[i];

        const x = target - current;
        const mapValue = pars.get(x)
      
        if(!isNaN(mapValue)) {
          return [mapValue, i]
        }
        pars.set(current, i);
    }
    return [];
};

// BIG O(n) time complexity
// BIG O(n) space complexity

export default twoSum;
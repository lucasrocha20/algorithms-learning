function maxProfit(prices: number[]): number {
    let minValue = 0;
    let maxProfit = 0;
    for(let i = 0; i < prices.length; i++) {
      if(i === 0) minValue = prices[i];
      if(prices[i] < minValue) {
        minValue = prices[i]
      }
      const profit = prices[i] - minValue;
      if(maxProfit < profit) {
        maxProfit = profit;
      }
    }

    return maxProfit;
};

export default maxProfit;

// BIG O(n) time complexity
// BIG O(1) space complexity
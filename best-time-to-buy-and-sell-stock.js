/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = prices => {
  if (!prices) {
    return 0;
  }

  let profit = 0;
  let min = prices[0];

  for (let i = 1; i < prices.length; i++) {
    profit = Math.max(profit, prices[i] - min);
    min = Math.min(min, prices[i]);
  }

  return profit;
};



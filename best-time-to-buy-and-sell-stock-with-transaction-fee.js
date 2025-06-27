/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
const maxProfit = (prices, fee) => {
  
  
  let cash = 0;
  let hold = -prices[0];

  for (let price of prices) {
    
    cash = Math.max(cash, hold + price - fee);
    
    hold = Math.max(hold, cash - price);
  }

  return cash;
};

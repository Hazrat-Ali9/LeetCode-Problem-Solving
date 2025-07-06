/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = prices => {
  let sold = 0;
  let hold = Number.MIN_SAFE_INTEGER;
  let rest = 0;

  for (let price of prices) {
    let preSold = sold;

    sold = hold + price;
    hold = Math.max(hold, rest - price);
    rest = Math.max(rest, preSold);
  }

  return Math.max(sold, rest);
};



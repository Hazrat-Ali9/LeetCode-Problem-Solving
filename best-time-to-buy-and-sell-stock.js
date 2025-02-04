/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var ans = 0, mn = prices[0];
    for(let i=0; i<prices.length; i++){
        mn = Math.min(mn, prices[i]);
        ans = Math.max(ans, prices[i]-mn);
    }
    return ans;
};
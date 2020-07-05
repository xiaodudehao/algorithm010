/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let sum = 0;
    for(let i = 1; i < prices.length; i++){
        sum += Math.max(prices[i] - prices[i-1], 0);
    }
    return sum
};
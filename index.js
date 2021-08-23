/*
Say you have an array prices for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

Example 1:

Input: [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
             Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Example 2:

Input: [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
             Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
             engaging multiple transactions at the same time. You must sell before buying again.
Example 3:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.

Constraints:

1 <= prices.length <= 3 * 10 ^ 4
0 <= prices[i] <= 10 ^ 4

 Note:
  Desired time complexity is O(n), space complexity O(1)

 Note: your comments, in addition to your code are also evaluated
*/


/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  // initialization of total profit
  let profitTotal = 0;

  // assume the first array member is the smallest value
  let lowestPrice = prices[0];

  // iteration to compare prices
  for (let i = 1; i < prices.length; i++) {
    //make the i-th array member the current price
    let price = prices[i];

    // if the current price is less than the smallest price,
    // then the smallest price is the current price
    if (price < lowestPrice) lowestPrice = price;

    // profit is the current price minus the smallest price
    let profit = price - lowestPrice;

    // if the profit is more than 0,
    // then the stock is sold and
    // the smallest price is the current price
    if (profit > 0) {
      lowestPrice = price;
    }

    // amount of profit added
    profitTotal += profit;
  }
  // return the amount of profit
  return profitTotal;
};
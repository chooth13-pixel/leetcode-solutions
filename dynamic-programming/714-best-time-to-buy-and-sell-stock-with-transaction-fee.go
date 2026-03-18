// Dynamic Programming 
// Title: 714. Best Time to Buy and Sell Stock with Transaction Fee 
// Problem Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/description/?envType=study-plan-v2&envId=dynamic-programming
// Difficulty: Medium
// Time O(n) Space O(1)

func maxProfit(prices []int, fee int) int {
	profit, start := 0, -prices[0]-fee
	for i := 1; i < len(prices); i++ {
		start = maxInt(start, profit-prices[i]-fee)
		profit = maxInt(profit, start+prices[i])
	}
	return profit
}

func maxInt(a, b int) int {
	if a > b {
		return a
	}
	return b
}

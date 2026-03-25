// Monotonic Stack
// Title: Q1. Final Prices With a Special Discount in a Shop 
// Problem Link: https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/description/?envType=problem-list-v2&envId=dsa-linear-shoal-monotonic-stack 
// Difficulty: Easy
// Time O(n^2) Space O(n)

func finalPrices(prices []int) []int {
	for i := 0; i < len(prices); i++ {
		for j := i + 1; j < len(prices); j++ {
			if prices[i] >= prices[j] {
				prices[i] -= prices[j]
				break
			}
		}
	}
	return prices
}

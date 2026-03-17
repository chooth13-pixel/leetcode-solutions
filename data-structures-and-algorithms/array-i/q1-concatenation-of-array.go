// Array I 
// Title: Q1. Concatenation of Array
// Problem Link: https://leetcode.com/problems/concatenation-of-array/?envType=problem-list-v2&envId=dsa-linear-shoal-array-i
// Difficulty: Easy 
// Time O(n) Space O(1)

func getConcatenation(nums []int) []int {
	return slices.Concat(nums, nums)
}

// Array II 
// Title: Q1. Set Mismatch 
// Problem Link: https://leetcode.com/problems/set-mismatch/description/?envType=problem-list-v2&envId=dsa-linear-shoal-array-ii 
// Difficulty: Easy 
// Time O(n) Space O(n)

func findErrorNums(nums []int) []int {
	out := []int{0, 0}
	counts := make([]int, len(nums))
	for _, num := range nums {
		counts[num-1]++
		if counts[num-1] == 2 {
			out[0] = num
		}
	}
	out[1] = slices.Index(counts, 0) + 1
	return out
}

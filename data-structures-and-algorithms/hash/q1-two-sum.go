// Hash 
// Title: Q1. Two Sum 
// Problem Link: https://leetcode.com/problems/two-sum/description/?envType=problem-list-v2&envId=dsa-association-slope-hash
// Difficulty: Easy 
// Time O(n) Space O(n)

func twoSum(nums []int, target int) []int {
	prevHash := make(map[int]int)
	for i, n := range nums {
		diff := target - n
		if j, ok := prevHash[diff]; ok {
			return []int{j, i}
		}
		prevHash[n] = i
	}
	return nil
}

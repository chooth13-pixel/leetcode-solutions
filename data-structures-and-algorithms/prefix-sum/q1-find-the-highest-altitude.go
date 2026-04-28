// Prefix Sum 
// Title: Q1. Find the Highest Altitude
// Problem Link: https://leetcode.com/problems/find-the-highest-altitude/description/?envType=problem-list-v2&envId=dsa-association-slope-prefix-sum
// Difficulty: Easy
// Time O(n) Space O(1) 

func largestAltitude(gain []int) int {
	curr, maxAlt := 0, 0
	for _, g := range gain {
		curr += g
		maxAlt = max(curr, maxAlt)
	}
	return maxAlt
}

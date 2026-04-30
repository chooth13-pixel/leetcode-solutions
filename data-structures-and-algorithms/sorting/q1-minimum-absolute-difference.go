// Sorting 
// Title: Q1. Minimum Absolute Difference 
// Problem Link: https://leetcode.com/problems/minimum-absolute-difference/description/?envType=problem-list-v2&envId=dsa-sorting-plateau-sorting
// Difficulty: Easy
// Time O(n x log(n)) Space O(n)

func minimumAbsDifference(arr []int) [][]int {
	slices.Sort(arr)
	minDiff := arr[1] - arr[0]
	for i := 1; i < len(arr); i++ {
		minDiff = min(minDiff, arr[i]-arr[i-1])
	}
	pairs := [][]int{}
	for i := 1; i < len(arr); i++ {
		if arr[i]-arr[i-1] == minDiff {
			pairs = append(pairs, []int{arr[i-1], arr[i]})
		}
	}
	return pairs
}

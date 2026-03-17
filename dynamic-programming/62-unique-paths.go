// Dynamic Programming 
// Title: 62. Unique Paths
// Problem Link: https://leetcode.com/problems/unique-paths/description/?envType=study-plan-v2&envId=dynamic-programming
// Difficulty: Medium
// Time O(n x m) Space O(m)

func uniquePaths(m int, n int) int {
	prev := make([]int, n)
	for i := range n {
		prev[i] = 1
	}
	for range m - 1 {
		curr := make([]int, n)
		curr[0] = 1
		for i := 1; i < n; i++ {
			curr[i] = curr[i-1] + prev[i]
		}
		prev = curr
	}
	return prev[len(prev)-1]
}

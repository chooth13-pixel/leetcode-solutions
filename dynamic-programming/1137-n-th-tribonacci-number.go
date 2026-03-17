// Dynamic Programming 
// Title: 1137. N-th Tribonacci Number
// Problem Link: https://leetcode.com/problems/n-th-tribonacci-number/description/?envType=study-plan-v2&envId=dynamic-programming
// Difficulty: Medium
// Time O(n) Space O(1)

func tribonacci(n int) int {
	dp := []int{0, 1, 1}
	if n < 3 {
		return dp[n]
	}
	for i := 3; i <= n; i++ {
		dp = []int{dp[1], dp[2], dp[0] + dp[1] + dp[2]}
	}
	return dp[2]
}

// Dynamic Programming 
// Title: 509. Fibonacci Number 
// Problem Link: https://leetcode.com/problems/fibonacci-number/description/?envType=study-plan-v2&envId=dynamic-programming 
// Difficulty: Easy
// Time O(n) Space O(1)

func fib(n int) int {
	if n == 0 {
		return 0
	}
	dp := [2]int{0, 1}
	for i := 1; i < n; i++ {
		result := dp[0] + dp[1]
		dp[0] = dp[1]
		dp[1] = result
	}

	return dp[1]
}

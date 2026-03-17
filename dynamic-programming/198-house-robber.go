// Dynamic Programming 
// Title: 198. House Robber
// Problem Link: https://leetcode.com/problems/house-robber/description/?envType=study-plan-v2&envId=dynamic-programming
// Difficulty: Medium
// Time O(n) Space O(1)

func rob(nums []int) int {
	dp := []int{0, nums[0]}
	for i := 1; i < len(nums); i++ {
		dp = []int{dp[1], int(math.Max(float64(dp[0]+nums[i]), float64(dp[1])))}
	}
	return dp[1]
}

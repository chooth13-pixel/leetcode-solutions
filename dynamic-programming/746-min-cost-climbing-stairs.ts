// Dynamic Programming 
// Title: 746. Min Cost Climbing Stairs 
// Problem Link: https://leetcode.com/problems/min-cost-climbing-stairs/description/?envType=study-plan-v2&envId=dynamic-programming 
// Difficulty: Easy
// Time O(n) Space O(1)

function minCostClimbingStairs(cost: number[]): number {
    const dp = [0, Math.min(cost[0], cost[1])]
    for (let i = 2; i < cost.length; i++) {
        const result = Math.min(dp[0] + cost[i - 1], dp[1] + cost[i])
        dp[0] = dp[1]
        dp[1] = result
    }
    return dp[1]
};

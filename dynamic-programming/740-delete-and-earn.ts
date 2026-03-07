// Dynamic Programming 
// 740. Delete and Earn 
// Problem Link: https://leetcode.com/problems/delete-and-earn/description/?envType=study-plan-v2&envId=dynamic-programming 
// Difficulty: Medium
// Time O(n) Space O(n)

function deleteAndEarn(nums: number[]): number {
    const maxNum = Math.max(...nums)
    const sumTable = new Array(maxNum + 1).fill(0)
    for (const n of nums) {
        sumTable[n] += n
    }
    const dp = [0, 0]
    for (const sum of sumTable) {
        const max = Math.max(dp[0] + sum, dp[1])
        dp[0] = dp[1]
        dp[1] = max
    }
    return dp[1]
};

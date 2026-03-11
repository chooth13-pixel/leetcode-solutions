// Dynamic Programming 
// Title: 377. Combination Sum IV
// Problem Link: https://leetcode.com/problems/combination-sum-iv/description/?envType=study-plan-v2&envId=dynamic-programming
// Difficulty: Medium
// Time O(n x m) Space O(n) where n is the target and m is the nums array

function combinationSum4(nums: number[], target: number): number {
    let dp = new Array(target + 1).fill(0)
    dp[0] = 1

    for (let j = 1; j <= target; j++) {
        for (let i = 0; i < nums.length; i++) {
            if (j >= nums[i]) {
                dp[j] += dp[j - nums[i]]
            }
        }
    }

    return dp[dp.length - 1]
};

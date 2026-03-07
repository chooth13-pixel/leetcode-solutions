// Dynamic Programming 
// Title: 96. Unique Binary Search Trees
// Problem Link: https://leetcode.com/problems/unique-binary-search-trees/description/?envType=study-plan-v2&envId=dynamic-programming
// Difficulty: Medium
// Time O(n²) Space O(n)

function numTrees(n: number): number {
    const dp = new Array(n + 1).fill(0)
    dp[0] = 1
    dp[1] = 1
    for (let i = 2; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            dp[i] += dp[j] * dp[i - j - 1]
        }
    }
    return dp[n]
};

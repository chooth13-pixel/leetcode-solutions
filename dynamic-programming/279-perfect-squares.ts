// Dynamic Programming 
// Title: 279. Perfect Squares
// Problem Link: https://leetcode.com/problems/perfect-squares/?envType=study-plan-v2&envId=dynamic-programming
// Difficulty: Medium
// Time O(n^2) Space O(n)

function numSquares(n: number): number {
    if (Math.sqrt(n) % 1 === 0) return 1
    const dp = new Array(n + 1).fill(0)
    for (let i = 1; i <= n; i++) {
        let min = Infinity
        for (let j = 1; j * j <= i; j++) {
            min = Math.min(min, dp[i - j * j] + 1)
        }
        dp[i] = min
    }
    return dp[n]
};

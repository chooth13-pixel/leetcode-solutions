// Dynamic Programming 
// Title: 2466. Count Ways To Build Good Strings
// Problem Link: https://leetcode.com/problems/count-ways-to-build-good-strings/description/?envType=study-plan-v2&envId=dynamic-programming 
// Difficulty: Medium
// Time O(n) Space O(n)

function countGoodStrings(low: number, high: number, zero: number, one: number): number {
    let total = 0
    const dp = new Array(high + 1).fill(0)
    dp[0] = 1

    for (let i = 1; i <= high; i++) {
        if (i >= zero) {
            dp[i] += dp[i - zero]
        }
        if (i >= one) {
            dp[i] += dp[i - one]
        }
        dp[i] %= (1e9 + 7)
        if (i >= low) {
            total += dp[i]
            total %= (1e9 + 7)
        }
    }
    return total
};

// Dynamic Programming 
// Title: 516. Longest Palindromic Subsequence
// Problem Link: https://leetcode.com/problems/longest-palindromic-subsequence/description/?envType=study-plan-v2&envId=dynamic-programming 
// Difficulty: Medium
// Time O(n^2) Space O(n)

function longestPalindromeSubseq(s: string): number {
    let prev = new Array(s.length + 1).fill(0)
    let curr = new Array(s.length + 1)
    curr[0] = 0

    for (const c of s) {
        for (let i = 1; i < curr.length; i++) {
            if (c === s[s.length - i] && curr[i - 1] === prev[i] && prev[i] === prev[i - 1]) {
                curr[i] = prev[i] + 1
            } else {
                curr[i] = Math.max(curr[i - 1], prev[i])
            }
        }
        prev = curr
        curr = new Array(s.length + 1)
        curr[0] = 0
    }

    return prev[prev.length - 1]
};

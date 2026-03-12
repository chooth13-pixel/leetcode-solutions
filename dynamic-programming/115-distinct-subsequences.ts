// Dynamic Programming 
// Title: 115. Distinct Subsequences 
// Problem Link: https://leetcode.com/problems/distinct-subsequences/description/?envType=study-plan-v2&envId=dynamic-programming 
// Difficulty: Hard
// Time O(n x m) Space O(m), where n = s length, m = t length

function numDistinct(s: string, t: string): number {
    let prev = new Array(t.length + 1).fill(0)
    prev[0] = 1
    let curr = new Array(t.length + 1)

    for (let i = 0; i < s.length; i++) {
        curr[0] = 1
        for (let j = 0; j < t.length; j++) {
            if (s[i] === t[j]) {
                curr[j + 1] = prev[j] + prev[j + 1]
            } else {
                curr[j + 1] = prev[j + 1]
            }
        }
        prev = curr
        curr = new Array(t.length + 1)
    }

    return prev[prev.length - 1]
};

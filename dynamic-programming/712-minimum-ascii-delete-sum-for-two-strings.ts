// Dynamic Programming 
// Title: 712. Minimum ASCII Delete Sum for Two Strings 
// Problem Link: https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/description/?envType=study-plan-v2&envId=dynamic-programming 
// Difficulty: Medium
// Time O(n x m) Space O(m), where n = s1 length, m = s2 length 

function minimumDeleteSum(s1: string, s2: string): number {
    if (s1.length < s2.length) {
        [s1, s2] = [s2, s1];
    }
    let total = 0;
    for (let i = 0; i < s1.length; i++) total += s1.charCodeAt(i);
    for (let i = 0; i < s2.length; i++) total += s2.charCodeAt(i);

    let prev = new Uint32Array(s2.length + 1).fill(0);
    let curr = new Uint32Array(s2.length + 1).fill(0);

    for (let i = 0; i < s1.length; i++) {
        for (let j = 0; j < s2.length; j++) {
            if (s1[i] === s2[j]) {
                curr[j + 1] = prev[j] + s2.charCodeAt(j)
            } else {
                curr[j + 1] = Math.max(curr[j], prev[j + 1])
            }
        }
        prev = curr
        curr = new Uint32Array(s2.length + 1).fill(0)
    }

    return total - 2 * prev[prev.length - 1];
};

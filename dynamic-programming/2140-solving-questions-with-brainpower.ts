// Dynamic Programming 
// Title: 2140. Solving Questions With Brainpower 
// Problem Link: https://leetcode.com/problems/solving-questions-with-brainpower/description/?envType=study-plan-v2&envId=dynamic-programming
// Difficulty: Medium
// Time O(n) Space O(n)

function mostPoints(questions: number[][]): number {
    const dp = new Array(questions.length).fill(0);
    dp[questions.length - 1] = questions[questions.length - 1][0];
    for (let i = questions.length - 2; i >= 0; i--) {
        const j = i + questions[i][1] + 1;
        dp[i] = questions[i][0]
        if (j < questions.length) {
            dp[i] += dp[j]
        }
        dp[i] = Math.max(dp[i], dp[i + 1]);
    }
    return dp[0];
};

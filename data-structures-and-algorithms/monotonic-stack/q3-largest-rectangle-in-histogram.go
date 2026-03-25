// Monotonic Stack 
// Title: Q3. Largest Rectangle in Histogram
// Problem Link: https://leetcode.com/problems/largest-rectangle-in-histogram/description/?envType=problem-list-v2&envId=dsa-linear-shoal-monotonic-stack
// Difficulty: Hard 
// Time O(n) Space O(n)

func largestRectangleArea(heights []int) int {
	maxA := 0
	stack := []int{}
	for i, h := range heights {
		for len(stack) > 0 && heights[stack[len(stack)-1]] >= h {
			pop := stack[len(stack)-1]
			stack = stack[:len(stack)-1]
			if len(stack) > 0 {
				maxA = max(maxA, heights[pop]*(i-1-stack[len(stack)-1]))
			} else {
				maxA = max(maxA, heights[pop]*i)
			}
		}
		if len(stack) == 0 || heights[stack[len(stack)-1]] < h {
			stack = append(stack, i)
		}
	}
	for i := len(stack) - 1; i > 0; i-- {
		maxA = max(maxA, heights[stack[i]]*(len(heights)-stack[i-1]-1))
	}
	maxA = max(maxA, heights[stack[0]]*len(heights))
	return maxA
}

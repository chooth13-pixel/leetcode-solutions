// Stack 
// Title: Q2. Daily Temperatures 
// Problem Link: https://leetcode.com/problems/daily-temperatures/description/?envType=problem-list-v2&envId=dsa-linear-shoal-monotonic-stack 
// Difficulty: Medium
// Time O(n^2) Space O(n)

type temp struct{ idx, temp int }

func dailyTemperatures(temperatures []int) []int {
	stack := []temp{temp{len(temperatures) - 1, temperatures[len(temperatures)-1]}}
	temperatures[len(temperatures)-1] = 0
	for i := len(temperatures) - 2; i >= 0; i-- {
		for j := len(stack) - 1; j >= 0; j-- {
			if temperatures[i] >= stack[len(stack)-1].temp {
				stack = stack[:len(stack)-1]
			}
		}
		stack = append(stack, temp{i, temperatures[i]})
		if len(stack) == 1 {
			temperatures[i] = 0
		} else {
			temperatures[i] = stack[len(stack)-2].idx - i
		}
	}
	return temperatures
}

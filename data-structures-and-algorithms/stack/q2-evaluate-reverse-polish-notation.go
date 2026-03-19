// Stack 
// Title: Q2. Evaluate Reverse Polish Notation 
// Problem Link: https://leetcode.com/problems/evaluate-reverse-polish-notation/description/?envType=problem-list-v2&envId=dsa-linear-shoal-stack 
// Difficulty: Medium
// Time O(n) Space O(n)

var ops = map[string]bool{"+": true, "-": true, "*": true, "/": true}

func evalRPN(tokens []string) int {
	nums := []int{}
	var left, right int
	for _, token := range tokens {
		if !ops[token] {
			num, _ := strconv.Atoi(token)
			nums = append(nums, num)
			continue
		}
		right = nums[len(nums)-1]
		left = nums[len(nums)-2]
		var calc int
		switch token {
		case "+":
			calc = left + right
		case "-":
			calc = left - right
		case "*":
			calc = left * right
		case "/":
			calc = left / right
		}
		nums = nums[:len(nums)-1]
		nums[len(nums)-1] = calc
	}
	return nums[0]
}


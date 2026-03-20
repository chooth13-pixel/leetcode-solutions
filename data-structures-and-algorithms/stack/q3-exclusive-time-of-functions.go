// Stack 
// Title: Q3. Exclusive Time of Functions 
// Problem Link: https://leetcode.com/problems/exclusive-time-of-functions/description/?envType=problem-list-v2&envId=dsa-linear-shoal-stack 
// Difficulty: Medium
// Time O(n) Space O(n)

func exclusiveTime(n int, logs []string) []int {
	totals := make([]int, n)
	callStack := []int{}
	current := 0
	for _, log := range logs {
		data := strings.Split(log, ":")
		id, _ := strconv.Atoi(string(data[0]))
		time, _ := strconv.Atoi(string(data[2]))
		state := data[1]
		switch state {
		case "start":
			if len(callStack) > 0 {
				parent := callStack[len(callStack)-1]
				totals[parent] += time - current
			}
			current = time
			callStack = append(callStack, id)
		case "end":
			id = callStack[len(callStack)-1]
			callStack = callStack[:len(callStack)-1]
			totals[id] += time - current + 1
			current = time + 1
		}

	}
	return totals
}

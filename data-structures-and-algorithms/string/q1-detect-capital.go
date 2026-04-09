// String 
// Title: Q1. Detect Capital 
// Problem Link: https://leetcode.com/problems/detect-capital/description/?envType=problem-list-v2&envId=dsa-sequence-valley-string 
// Difficulty: Easy 
// Time O(n) Space O(1)

func detectCapitalUse(word string) bool {
	if len(word) == 1 {
		return true
	}
	isFirstCap := strings.ToUpper(string(word[0])) == string(string(word[0]))
	isSecondCap := strings.ToUpper(string(word[1])) == string(string(word[1]))
	if !isFirstCap && isSecondCap {
		return false
	}
	for i := 2; i < len(word); i++ {
		if isSecondCap && strings.ToLower(string(word[i])) == string(word[i]) || !isSecondCap && strings.ToUpper(string(word[i])) == string(word[i]) {
			return false
		}
	}
	return true
}

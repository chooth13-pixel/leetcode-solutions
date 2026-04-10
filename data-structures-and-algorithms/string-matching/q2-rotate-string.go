// String Matching 
// Title: Q2. Rotate String 
// Problem Link: https://leetcode.com/problems/rotate-string/description/?envType=problem-list-v2&envId=dsa-sequence-valley-string-matching 
// Difficulty: Easy 
// Time O(n) Space O(n)

func rotateString(s string, goal string) bool {
    if len(s) != len(goal){
        return false
    }
    text := s + s
    return strings.Contains(text, goal)
}

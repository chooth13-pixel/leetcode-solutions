// Dynamic Programming 
// Title: 5. Longest Palindromic Substring 
// Problem Link: https://leetcode.com/problems/longest-palindromic-substring/description/?envType=study-plan-v2&envId=dynamic-programming 
// Difficulty: Medium
// Time O(n^2) Space O(n)

func longestPalindrome(s string) string {
	longest := string(s[0])
	left, right := 0, 1
	for left >= 0 && right < len(s) {
		if s[left] == s[right] {
			if len(s[left:right+1]) > len(longest) {
				longest = s[left : right+1]
			}
			if left > 0 {
				left--
				right++
				continue
			}
		}
		if (right-left)%2 > 0 {
			right = (left+right)/2 + 1
			left = right - 1
			right++
		} else {
			right = (left+right)/2 + 1
			left = right - 1
		}
	}
	return longest
}

func maxInt(a, b int) int {
	if a > b {
		return a
	}
	return b
}

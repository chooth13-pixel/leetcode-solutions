// Prefix Sum 
// Title: Q2. Make Sum Divisible by P
// Problem Link: https://leetcode.com/problems/make-sum-divisible-by-p/description/?envType=problem-list-v2&envId=dsa-association-slope-prefix-sum
// Difficulty: Medium 
// Time O(n) Space O(n) 

func minSubarray(nums []int, p int) int {
        // great explanation by Techdose @ https://www.youtube.com/watch?v=zxMGWPOdrEM

	sum, prefix, minLen := 0, 0, len(nums)
	for _, n := range nums {
		sum += n
	}
	targetMod := sum % p
	if targetMod == 0 {
		return 0
	}

	hash := make(map[int]int)
	hash[0] = -1
	for i, n := range nums {
		prefix = (prefix + n) % p
		if prevIdx, isExist := hash[(prefix-targetMod+p)%p]; isExist {
			minLen = min(minLen, i-prevIdx)
		}
		hash[prefix] = i
	}
	if minLen == len(nums) {
		return -1
	}
	return minLen
}

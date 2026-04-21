// Hash 
// Title: Q3. First Missing Positive
// Problem Link: https://leetcode.com/problems/first-missing-positive/description/?envType=problem-list-v2&envId=dsa-association-slope-hash
// Difficulty: Hard 
// Time O(n) Space O(1)

func firstMissingPositive(nums []int) int {
	for i := range len(nums) {
		for nums[i] > 0 && nums[i] <= len(nums) && nums[nums[i]-1] != nums[i] {
			nums[i], nums[nums[i]-1] = nums[nums[i]-1], nums[i]
		}
	}
	for i := range len(nums) {
		if nums[i] != i+1 {
			return i + 1
		}
	}
	return len(nums) + 1
}

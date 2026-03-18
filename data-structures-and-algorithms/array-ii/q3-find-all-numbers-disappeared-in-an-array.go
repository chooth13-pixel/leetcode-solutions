// Array II 
// Title: Q3. Find All Numbers Disappeared in an Array 
// Problem Link: https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/?envType=problem-list-v2&envId=dsa-linear-shoal-array-ii 
// Difficulty: Easy 
// Time O(n) Space O(n)

func findDisappearedNumbers(nums []int) []int {
	existArr := make([]bool, len(nums))
	for _, num := range nums {
		if num-1 < len(nums) {
			existArr[num-1] = true
		}
	}
	missingArr := []int{}
	for i, exist := range existArr {
		if !exist {
			missingArr = append(missingArr, i+1)
		}
	}
	return missingArr
}

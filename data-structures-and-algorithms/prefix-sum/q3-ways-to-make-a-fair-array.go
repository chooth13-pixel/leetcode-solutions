// Prefix Sum 
// Title: Q3. Ways to Make a Fair Array 
// Problem Link: https://leetcode.com/problems/ways-to-make-a-fair-array/description/?envType=problem-list-v2&envId=dsa-association-slope-prefix-sum
// Difficulty: Medium 
// Time O(n) Space O(1) 

func waysToMakeFair(nums []int) int {
	ways := 0
	sum, oddSum, evenSum := 0, 0, 0
	for i, n := range nums {
		sum += n
		if i%2 == 0 {
			oddSum += n
		} else {
			evenSum += n
		}
	}
	oddPrefix, evenPrefix := 0, 0
	for i, n := range nums {
		if i%2 == 0 {
			oddSuffix := evenSum - evenPrefix
			evenSuffix := oddSum - n - oddPrefix
			newOddSum := oddPrefix + oddSuffix
			newEvenSum := evenPrefix + evenSuffix
			if newOddSum == newEvenSum {
				ways++
			}
			oddPrefix += n
		} else {
			oddSuffix := evenSum - n - evenPrefix
			evenSuffix := oddSum - oddPrefix
			newOddSum := oddPrefix + oddSuffix
			newEvenSum := evenPrefix + evenSuffix
			if newOddSum == newEvenSum {
				ways++
			}
			evenPrefix += n
		}
	}
	return ways
}

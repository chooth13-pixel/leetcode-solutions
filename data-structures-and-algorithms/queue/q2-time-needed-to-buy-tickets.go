// Queue 
// Title: Q2. Time Needed to Buy Tickets 
// Problem Link: https://leetcode.com/problems/time-needed-to-buy-tickets/?envType=problem-list-v2&envId=dsa-sequence-valley-queue 
// Difficulty: Easy 
// Time O(n) Space O(1)

func timeRequiredToBuy(tickets []int, k int) int {
	total := 0
	for i, cnt := range tickets {
		if i <= k {
			total += min(tickets[k], cnt)
		} else {
			total += min(tickets[k]-1, cnt)
		}
	}
	return total
}

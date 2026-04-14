// Linked List 
// Title: Q3. Reverse Linked List 
// Problem Link: https://leetcode.com/problems/reverse-linked-list/description/?envType=problem-list-v2&envId=dsa-association-slope-linked-list 
// Difficulty: Easy
// Time O(n) Space O(n)

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func reverseList(head *ListNode) *ListNode {
	if head == nil {
		return head
	}
	tail := &ListNode{Val: head.Val}
	curr := head
	for curr.Next != nil {
		reversed := ListNode{Val: curr.Next.Val, Next: tail}
		tail = &reversed
		curr = curr.Next
	}
	return tail
}

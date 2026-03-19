// Dynamic Programming 
// Title: 124. Binary Tree Maximum Path Sum 
// Problem Link: https://leetcode.com/problems/binary-tree-maximum-path-sum/description/?envType=study-plan-v2&envId=dynamic-programming 
// Difficulty: Hard
// Time O(n) Space O(1)

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

var max int

func maxPathSum(node *TreeNode) int {
	max = math.MinInt
	dfs(node)
	return max
}

func dfs(node *TreeNode) int {
	if node == nil {
		return 0
	}
	left := maxInt(0, dfs(node.Left))
	right := maxInt(0, dfs(node.Right))
	max = maxInt(max, left+right+node.Val)
	return maxInt(node.Val, node.Val+maxInt(left, right))
}

func maxInt(a, b int) int {
	if a > b {
		return a
	}
	return b
}

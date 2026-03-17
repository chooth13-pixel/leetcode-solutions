// Comprehensive Data Operations Simulation  
// Title: 
// Problem Link: 
// Difficulty: Medium 
// Time O(n) Space O(n)

type SubrectangleQueries struct {
	rectangle [][]int
}

func Constructor(rectangle [][]int) SubrectangleQueries {
	obj := SubrectangleQueries{rectangle: rectangle}
	return obj
}

func (this *SubrectangleQueries) UpdateSubrectangle(row1 int, col1 int, row2 int, col2 int, newValue int) {
	for r := row1; r <= row2; r++ {
		for c := col1; c <= col2; c++ {
            this.rectangle[r][c] = newValue
		}
	}
}

func (this *SubrectangleQueries) GetValue(row int, col int) int {
	return this.rectangle[row][col]
}

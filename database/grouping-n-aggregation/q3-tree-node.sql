// Filtering & Aggregation 
// Title: Q3. Tree Node 
// Problem Link: https://leetcode.com/problems/tree-node/description/?envType=problem-list-v2&envId=db-db3-grouping-aggregation 
// Difficulty: Medium

select 
id,
case 
    when p_id is null then 'Root'
    when id in (select p_id from Tree) then 'Inner'
    else 'Leaf'
end type
from Tree

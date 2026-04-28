// Title: 1667. Fix Names in a Table 
// Problem Link: https://leetcode.com/problems/fix-names-in-a-table/description/?envType=study-plan-v2&envId=top-sql-50
// Difficulty: Easy

select
user_id,
concat(
    upper(left(name, 1)),
    lower(SUBSTRING(name, 2))
) name
from Users
order by user_id

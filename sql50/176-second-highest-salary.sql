// Title: 176. Second Highest Salary 
// Problem Link: https://leetcode.com/problems/second-highest-salary/description/?envType=study-plan-v2&envId=top-sql-50
// Difficulty: Medium

select (
    select 
    distinct salary
    from Employee
    order by salary desc
    limit 1, 1
) SecondHighestSalary

// SQL II
// Title: Q2. Department Highest Salary
// Problem Link: https://leetcode.com/problems/department-highest-salary/description/?envType=problem-list-v2&envId=db-db5-sql-ii 
// Difficulty: Medium

with Highest as (
    select
    max(salary) salary,
    d.name name,
    d.id id
    from
    Employee e
    inner join Department d
    on e.departmentId = d.id
    group by departmentId
)

select 
h.name Department,
e.name Employee,
h.salary Salary
from Employee e 
inner join Highest h
on e.departmentId = h.id
and e.salary = h.salary

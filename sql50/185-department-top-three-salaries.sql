// Title: 185. Department Top Three Salaries 
// Problem Link: https://leetcode.com/problems/department-top-three-salaries/description/?envType=study-plan-v2&envId=top-sql-50
// Difficulty: Hard 

with t1 as (
    select
    d.name Department,
    e.name Employee,
    salary Salary,
    dense_rank() over (
        partition by departmentId
        order by salary desc
    ) dr
    from Employee e
    join Department d
    on e.departmentId = d.id
)

select 
Department,
Employee,
Salary
from t1
where dr <= 3

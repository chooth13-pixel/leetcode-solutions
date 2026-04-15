// Title: 1204. Last Person to Fit in the Bus
// Problem Link: https://leetcode.com/problems/last-person-to-fit-in-the-bus/description/?envType=study-plan-v2&envId=top-sql-50
// Difficulty: Medium

with t1 as (
    select
    person_name,
    sum(weight) over (order by turn) total
    from Queue
)

select 
person_name
from t1
where total <= 1000
order by total desc
limit 1

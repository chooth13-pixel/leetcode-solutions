// SQL II
// Title: Q4. Human Traffic of Stadium 
// Problem Link: https://leetcode.com/problems/human-traffic-of-stadium/description/?envType=problem-list-v2&envId=db-db5-sql-ii 
// Difficulty: Hard

with t1 as (
    select
    *,
    id - row_number() over ( order by id ) ranking
    from Stadium
    where people >= 100
),
t2 as (
    select 
    ranking
    from t1
    group by ranking
    having count(*) >= 3
)

select
id,
visit_date,
people
from t1
join t2
on t1.ranking = t2.ranking

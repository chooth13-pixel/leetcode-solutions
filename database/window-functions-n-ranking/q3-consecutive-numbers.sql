// Window Functions & Ranking 
// Title: Q3. Consecutive Numbers 
// Problem Link: https://leetcode.com/problems/consecutive-numbers/description/?envType=problem-list-v2&envId=db-db4-window-functions-ranking 
// Difficulty: Medium 

select 
distinct num as ConsecutiveNums
from (
    select 
    id,
    num,
    (num + id) - CAST(DENSE_RANK() OVER (
        PARTITION BY num 
        ORDER BY id
    ) AS SIGNED) AS myrank
    from
    Logs
    ) dt1
group by myrank, num
having count(*) >= 3

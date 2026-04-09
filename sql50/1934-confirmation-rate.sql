// Title: 1934. Confirmation Rate 
// Problem Link: https://leetcode.com/problems/confirmation-rate/description/?envType=study-plan-v2&envId=top-sql-50 
// Difficulty: Medium

select
s.user_id,
round(count(if(action='confirmed', 1, null))/count(*), 2) confirmation_rate
from Signups s
left join Confirmations c
on s.user_id = c.user_id
group by user_id

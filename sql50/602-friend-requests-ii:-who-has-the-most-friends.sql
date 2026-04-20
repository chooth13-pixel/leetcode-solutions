// Title: 602. Friend Requests II: Who Has the Most Friends 
// Problem Link: https://leetcode.com/problems/friend-requests-ii-who-has-the-most-friends/description/?envType=study-plan-v2&envId=top-sql-50 
// Difficulty: Medium

select 
requester_id id,
count(*) num
from (
    select
    requester_id
    from RequestAccepted
    union all
    select
    accepter_id
    from RequestAccepted
) t1
group by requester_id
order by count(*) desc
limit 1

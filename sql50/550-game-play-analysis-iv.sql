// Title: 550. Game Play Analysis IV 
// Problem Link: https://leetcode.com/problems/game-play-analysis-iv/description/?envType=study-plan-v2&envId=top-sql-50 
// Difficulty: Medium

with t1 as (
    select 
    COUNT(DISTINCT player_id) totalPlayers
    from Activity
), t2 as (
    select
    player_id,
    min(event_date) initialDate
    from Activity
    group by player_id
), t3 as (
    select
    COUNT(DISTINCT t2.player_id) returnPlayers
    from t2
    join Activity a
    on t2.player_id = a.player_id
    and t2.initialDate = date_sub(a.event_date, interval 1 day)
)

select 
round(returnPlayers/totalPlayers, 2) fraction
from t1
join t3

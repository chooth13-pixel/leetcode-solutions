// Title: 197. Rising Temperature 
// Problem Link: https://leetcode.com/problems/rising-temperature/description/?envType=study-plan-v2&envId=top-sql-50 
// Difficulty: Easy

select
w1.id
from Weather w1
join Weather w2
on w1.recordDate = DATE_ADD(w2.recordDate, INTERVAL 1 DAY)
and w1.temperature > w2.temperature

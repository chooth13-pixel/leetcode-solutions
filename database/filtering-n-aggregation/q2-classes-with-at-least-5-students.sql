// Filtering & Aggregation 
// Title: Q2. Classes With at Least 5 Students 
// Problem Link: https://leetcode.com/problems/classes-with-at-least-5-students/description/?envType=problem-list-v2&envId=db-db2-filtering-aggregation 
// Difficulty: Easy

select class 
from courses
group by class 
having count(*) >= 5

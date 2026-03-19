// SQL I 
// Title: Q2. Employees Earning More Than Their Managers 
// Problem Link: https://leetcode.com/problems/employees-earning-more-than-their-managers/description/?envType=problem-list-v2&envId=db-db1-sql-i 
// Difficulty: Easy 

select e2.name as Employee 
from employee e1 
join employee e2 
on e1.id = e2.managerid 
where e2.salary>e1.salary;

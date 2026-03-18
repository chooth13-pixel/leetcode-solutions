// SQL I 
// Title: Q1. Combine Two Tables 
// Problem Link: https://leetcode.com/problems/combine-two-tables/?envType=problem-list-v2&envId=db-db1-sql-i 
// Difficulty: Easy 

select firstName, lastName, city, state 
from Person p 
left join Address a 
on p.personId = a.personId;

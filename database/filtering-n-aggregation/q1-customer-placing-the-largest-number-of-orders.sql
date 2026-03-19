// Filtering & Aggregation 
// Title: Q1. Customer Placing the Largest Number of Orders 
// Problem Link: https://leetcode.com/problems/customer-placing-the-largest-number-of-orders/description/?envType=problem-list-v2&envId=db-db2-filtering-aggregation
// Difficulty: Easy 

select customer_number
from Orders
group by customer_number
order by count(*) desc
limit 1

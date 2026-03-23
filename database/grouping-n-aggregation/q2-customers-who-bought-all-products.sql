// Filtering & Aggregation 
// Title: Q2. Customers Who Bought All Products
// Problem Link: https://leetcode.com/problems/customers-who-bought-all-products/description/?envType=problem-list-v2&envId=db-db3-grouping-aggregation
// Difficulty: Medium

select c.customer_id
from Customer c
group by c.customer_id
having COUNT(distinct c.product_key) = (select COUNT(*) from Product)

// SQL II
// Title: Q3. Product Sales Analysis III 
// Problem Link: https://leetcode.com/problems/product-sales-analysis-iii/description/?envType=problem-list-v2&envId=db-db5-sql-ii 
// Difficulty: Medium

with FirstYearTable as (
    select
    product_id,
    min(year) first_year
    from Sales
    group by product_id
)

select
s.product_id,
first_year,
quantity,
price
from Sales s
inner join FirstYearTable f
on s.product_id = f.product_id
and s.year = f.first_year

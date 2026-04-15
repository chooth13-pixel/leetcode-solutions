// Title: 1164. Product Price at a Given Date 
// Problem Link: https://leetcode.com/problems/product-price-at-a-given-date/description/?envType=study-plan-v2&envId=top-sql-50
// Difficulty: Medium

with t1 as (
    select
    product_id
    from Products p1
    group by product_id
), t2 as (
    select 
    product_id,
    max(change_date) change_date
    from Products
    where change_date <= Date('2019-08-16')
    group by product_id
), t3 as (
    select
    t2.product_id,
    new_price
    from t2
    join Products p
    on t2.product_id = p.product_id
    and t2.change_date = p.change_date
)

select
t1.product_id,
if(new_price is null, 10, new_price) price
from t1
left join t3
on t1.product_id = t3.product_id

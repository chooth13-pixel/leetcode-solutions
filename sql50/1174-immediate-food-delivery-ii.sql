// Title: 1174. Immediate Food Delivery II 
// Problem Link: https://leetcode.com/problems/immediate-food-delivery-ii/description/?envType=study-plan-v2&envId=top-sql-50 
// Difficulty: Medium

with t1 as (
    select 
    min(order_date) order_date,
    min(customer_pref_delivery_date) customer_pref_delivery_date
    from Delivery
    group by customer_id
)
select
round(count(if(order_date = customer_pref_delivery_date, 1, null)) / count(*) * 100, 2) immediate_percentage
from t1

// Title: 1193. Monthly Transactions I
// Problem Link: https://leetcode.com/problems/monthly-transactions-i/description/?envType=study-plan-v2&envId=top-sql-50 
// Difficulty: Medium

select
CONCAT_WS('-', YEAR(trans_date), LPAD(MONTH(trans_date), 2, '0')) month,
country,
count(*) trans_count,
count(if(state='approved', 1, null)) approved_count,
sum(amount) trans_total_amount,
sum(if(state='approved', amount, 0)) approved_total_amount
from Transactions
group by country, EXTRACT(YEAR_MONTH FROM trans_date)

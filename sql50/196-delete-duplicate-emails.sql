// Title: 196. Delete Duplicate Emails
// Problem Link: https://leetcode.com/problems/delete-duplicate-emails/description/?envType=study-plan-v2&envId=top-sql-50
// Difficulty: Easy

with t1 as (
    select min(id) id
    from Person
    group by email
)

delete from Person
where id not in (select id from t1)

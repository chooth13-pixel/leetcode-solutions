// Title: 1527. Patients With a Condition 
// Problem Link: https://leetcode.com/problems/patients-with-a-condition/description/?envType=study-plan-v2&envId=top-sql-50 
// Difficulty: Easy

select
*
from Patients
where conditions like 'DIAB1%'
|| conditions like '% DIAB1%'

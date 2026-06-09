@signup
Feature: User Signup and create account 

Scenario: user provide details to signup  

Given user is on the signup page 
When user give name and email 
When user provide account information details 
Then user should see the account created banner 
Then user delete the account should back to home page 



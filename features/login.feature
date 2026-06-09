@login
Feature:Login with valid and invalid credential

Background:
Given user is on the login page


Scenario:Login with valid credential

When user gives valid credential
Then user should see the profile name 
When user click the logout and back to the login page

Scenario:Login with invalid credential 

When user gives invalid credential
Then user should see the error msg 
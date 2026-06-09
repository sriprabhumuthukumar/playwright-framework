@contact
Feature: Contact us feedback submit

Scenario: User submit the feedback

Given user is on the contact us page 
When user provide the submit details 
Then user see the success msg 
When user click the home button 

@payment
Feature:payment and download invoice 

Scenario:User pay and invoice download

Given user is on the payment page 
When user give the card details and place payment 
When user download the invoice and click the order 
Then user should see the payment done url
@product
Feature: Product page functionality

Background:
When user click products button 

@buyer
Scenario:User views all products

Then user should see all product details
Then user should see the discount 

Scenario:User order the product and add to cart

When user select the product
When user select the quantity of the product 
When user give review to the product
Then user should see the cart page
            
Scenario:User product in the cart    

When select the product by search
Then searched product should be visible










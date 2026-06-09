 import { Given,Then,When } from "@cucumber/cucumber";
 import validation from "../utils/validation.js";
 import config from "../config/config.js";

 
 Given('user is on the signup page',async function () {
           await this.signup.open()
         });
       

         When('user give name and email',async function () {
           await this.signup.signupSubmit(this.user)
         });
       

         When('user provide account information details',async function () {
          await validation.text(this.signup.getPageTitle(), 'Enter Account Information')
          await this.signup.personalDetails(this.user) 
         });
       
   
       
         Then('user should see the account created banner',async function () {
           await validation.text(this.signup.getAccountBanner(), 'Account Created!')     
           await this.signup.continue()
         });
       
  
       
         Then('user delete the account should back to home page',async function () {
           await this.signup.delete()
           await validation.text(this.signup.getDeleteBanner(), 'Account Deleted!')   
           await this.signup.deleteAccount()
           await validation.url(this.page,`${config.base_url}`)
         });
       
 
       



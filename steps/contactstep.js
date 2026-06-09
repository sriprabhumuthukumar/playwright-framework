 import { Given,When,Then } from "@cucumber/cucumber";
 import validation from "../utils/validation.js";
import config from "../config/config.js";

        Given('user is on the contact us page',async function () {
          await this.contact.open()
         });
       

       
         When('user provide the submit details',async function () {
          await validation.visible(this.contact.verifyContactPageLoaded())
          await this.contact.submitDetails(this.user)  
         });

       
         Then('user see the success msg',async function () {
           await validation.text(this.contact.verifySuccessMessage(),'Success! Your details have been submitted successfully.')
         });
       

       
         When('user click the home button',async function () {
          await this.contact.clickHomeButton()
          await validation.url(this.page,`${config.base_url}`)
         });
       
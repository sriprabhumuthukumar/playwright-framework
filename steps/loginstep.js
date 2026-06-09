import { Given,When,Then } from "@cucumber/cucumber";
import Validation from '../utils/validation.js'
import config from "../config/config.js";
import logger from "../utils/logger.js";



Given('user is on the login page',async function () {
           await this.login.open()
           
         });

       
         When('user gives valid credential',async function () {
            console.log("CURRENT URL:", this.page.url());
          await this.login.loginSubmit()
         });
       
  
       
         Then('user should see the profile name',async function () {
         await Validation.text(this.login.verifyUsername(), this.user.userName)
         });

       
         When('user click the logout and back to the login page',async function () {
         await this.login.logout()
         await Validation.url(this.page, `${config.base_url}login`)
         });
       

         When('user gives invalid credential', async function () {
         await this.login.invalidLoginSubmit(this.user)
         })

         Then('user should see the error msg', async function () {
            await Validation.text(this.login.errorMsg(),'Your email or password is incorrect!')
            logger.info('Invalid login error message verified');
         })  
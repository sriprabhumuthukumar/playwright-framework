import { Given,When,Then } from "@cucumber/cucumber";
import validation from "../utils/validation.js";
import config from '../config/config.js' 

   Given('user is on the payment page',async function () {
         await this.payment.open()
         });
       
         When('user give the card details and place payment',async function () {
          await this.payment.cardDetails(this.pay)
         });
       
         When('user download the invoice and click the order',async function () {
          await this.payment.downloadInvoice()
          
         });
       
         Then('user should see the payment done url',async function () {
          await validation.url(this.page,`${config.base_url}payment_done/0`)
          await this.payment.order()
         });
       
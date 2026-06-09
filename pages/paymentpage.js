
import Basepage from "./basepage.js";
import fs from "fs";
import config from '../config/config.js'
import { expect } from "playwright/test";
import logger from "../utils/logger.js";

export default class Paymentpage extends Basepage{
    constructor(page){
        super(page)

       this.cardName = this.page.locator('[data-qa="name-on-card"]') 
       this.cardNum = this.page.locator('[data-qa="card-number"]')
       this.cardCvc = this.page.locator('[data-qa="cvc"]')
       this.cardMonth = this.page.locator('[data-qa="expiry-month"]') 
       this.cardYear = this.page.locator('[data-qa="expiry-year"]') 
       this.submitCardDetails = this.page.locator('[data-qa="pay-button"]') 
       this.downloadInvoiceBtn = this.page.locator('.btn.btn-default.check_out')
       this.orderBtn = this.page.locator('[data-qa="continue-button"]')
    }

    async open(){
        await this.navigate(`${config.base_url}payment`)
    }

    async cardDetails(user){
        logger.info('Adding payment Details')
        await this.fill(this.cardName, user.cardName)
        await this.fill(this.cardNum, user.cardNum)
        await this.fill(this.cardCvc, user.cardCvc)
        await this.fill(this.cardMonth, user.cardMonth)
        await this.fill(this.cardYear, user.cardYear)
        await this.click(this.submitCardDetails)
        logger.info('Payment Details added Successfully')
    }

    async downloadInvoice() {
  const downloadPromise = this.page.waitForEvent('download');

  await this.downloadInvoiceBtn.click();

  const download = await downloadPromise;

  const filePath = `downloads/${download.suggestedFilename()}`;

  await download.saveAs(filePath);

  expect(fs.existsSync(filePath)).toBeTruthy();
  logger.info('Invoice Downloaded')
}

async order(){
    await this.click(this.orderBtn)
    logger.info('Order Completed Successfully')
}


}
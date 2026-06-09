import { expect } from "@playwright/test";
import Basepage from "./basepage.js";
import config from "../config/config.js";
import logger from "../utils/logger.js";

export default class Contactpage extends Basepage {
    constructor(page) {
        super(page);

        this.contactBanner = page.getByRole('heading', { name: 'Get In Touch' });

        this.contactName = page.locator('[data-qa="name"]');
        this.contactEmail = page.locator('[data-qa="email"]');
        this.contactSubject = page.locator('[data-qa="subject"]');
        this.contactMessage = page.locator('[data-qa="message"]');

        this.uploadImgBtn = page.locator('input[name="upload_file"]');
        this.submitBtn = page.locator('[data-qa="submit-button"]');

        this.successMsg = page.locator('.status.alert.alert-success');
        this.homeBtn = page.locator('.fa.fa-angle-double-left');
    }

    async open() {
        await this.navigate(`${config.base_url}contact_us`);
    }

    verifyContactPageLoaded() {
        return this.contactBanner
    }

    async submitDetails(user) {
        logger.info('Submit Contact Us Details')
        await this.fill(this.contactName, user.firstName);
        await this.fill(this.contactEmail, user.signupEmail);
        await this.fill(this.contactSubject, user.R_review);
        await this.fill(this.contactMessage, user.R_review);

        await this.uploadImgBtn.setInputFiles('results/ss/upload.png');
        this.submitBtn.click()

        
        const [dialog] = await Promise.all([
            this.page.waitForEvent('dialog'),
            
        ]);

        console.log('Alert Message:', dialog.message());

        await dialog.accept();
    }

     verifySuccessMessage() {
        return this.successMsg
    }

    async clickHomeButton() {
        await this.click(this.homeBtn);
        logger.info('Return back to Home page')
    }
}
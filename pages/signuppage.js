import Basepage from "./basepage.js";
import config from "../config/config.js";
import logger from "../utils/logger.js";

export default class Singuppage extends Basepage {
    constructor(page){
        super(page)

        this.signupNameBtn = this.page.locator('[data-qa="signup-name"]')
        this.signupEmailBtn = this.page.locator('[data-qa="signup-email"]')
        this.signupBtn = this.page.locator('[data-qa="signup-button"]')
        // validate 
        this.pageTitleBanner = this.page.locator('h2.title.text-center',{hasText:'Enter Account Information'})
       
        this.genderBtn = this.page.locator('#id_gender1')
        this.passwordBtn = this.page.locator('[data-qa="password"]')
        this.daysBtn = this.page.locator('[data-qa="days"]')
        this.monthsBtn = this.page.locator('[data-qa="months"]')
        this.yearsBtn = this.page.locator('[data-qa="years"]')
        this.newsletterBtn = this.page.locator('#newsletter')
        this.optinBtn = this.page.locator('#optin')
        this.firstnameBtn = this.page.locator('[data-qa="first_name"]')
        this.lastnameBtn = this.page.locator('[data-qa="last_name"]')
        this.companyBtn = this.page.locator('[data-qa="company"]')
        this.address1Btn = this.page.locator('[data-qa="address"]')
        this.address2Btn = this.page.locator('[data-qa="address2"]')
        this.countryBtn = this.page.locator('[data-qa="country" ]')
        this.stateBtn = this.page.locator('[data-qa="state" ]')
        this.cityBtn = this.page.locator('[data-qa="city"]')
        this.zipcodeBtn = this.page.locator('[data-qa="zipcode"]')
        this.mobileBtn = this.page.locator('[data-qa="mobile_number"]')
        this.createAccountBtn = this.page.locator('[data-qa="create-account"]')

        //validate 
        this.accountBannerBtn = this.page.locator('.title.text-center')
    

        this.continueBtn = this.page.locator('[data-qa="continue-button"]')
        this.deleteBtn = this.page.locator('a[href="/delete_account"]')

        //validate
        this.deleteAccountBanner = this.page.locator('[data-qa="account-deleted"]')

        this.deleteaccountBtn = this.page.locator('[data-qa="continue-button"]')
    }

    async open(){
        await this.navigate(`${config.base_url}login`)
    }

    async signupSubmit(user){
        logger.info('Submitting signup details');
        await this.fill(this.signupNameBtn, user.signupName)
        await this.fill(this.signupEmailBtn, user.signupEmail)
        await this.click(this.signupBtn)
        logger.info('Signup details submitted');
    }

    getPageTitle(){
        return this.pageTitleBanner
    }


    async personalDetails(user){
        logger.info('Personal details page Initialted')
        await this.click(this.genderBtn)
        await this.fill(this.passwordBtn, user.signupPassword)
        await this.dropdown(this.daysBtn, user.days)
        await this.dropdown(this.monthsBtn, user.months)
        await this.dropdown(this.yearsBtn, user.years)
        await this.click(this.newsletterBtn)
        await this.click(this.optinBtn)
        await this.fill(this.firstnameBtn, user.firstName)
        await this.fill(this.lastnameBtn, user.lastName)
        await this.fill(this.companyBtn, user.company)
        await this.fill(this.address1Btn, user.address1)
        await this.fill(this.address2Btn, user.address2)
        await this.dropdown(this.countryBtn, user.country)
        await this.fill(this.stateBtn, user.state)
        await this.fill(this.cityBtn, user.city)
        await this.fill(this.zipcodeBtn, user.zipcode)
        await this.fill(this.mobileBtn, user.mobile)
        await this.click(this.createAccountBtn)
        logger.info('Personal details Added')
    }

    getAccountBanner(){
        return this.accountBannerBtn
    }

    async continue(){
        logger.info('Account Created')
        await this.click(this.continueBtn)
    }

    async delete(){
        await this.click(this.deleteBtn)
    }

    getDeleteBanner (){
        return this.deleteAccountBanner
    } 

    async deleteAccount(){
        await this.click(this.deleteaccountBtn)
        logger.info('Account Deleted')
    }

}
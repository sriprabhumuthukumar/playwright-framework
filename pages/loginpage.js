import Basepage from "./basepage.js";
import config from '../config/config.js'
import logger from "../utils/logger.js";

export default class Loginpage extends Basepage{

    constructor(page){
        super(page)

        this.loginEmailBtn = this.page.locator('[data-qa="login-email"]')
        this.loginPasswordBtn = this.page.locator('[data-qa="login-password"]')
        this.submitBtn = this.page.locator('[data-qa="login-button"]')
        this.errorBtn = this.page.locator('p[style="color: red;"]')
        // validate
        this.userNameBanner = this.page.locator('a b')
        this.logoutBtn = this.page.locator('a[href="/logout"]')
    }

    async open(){
        await this.navigate(`${config.base_url}login`)
    }

    async loginSubmit(){
        logger.info('Starting login process');
        await this.fill(this.loginEmailBtn, process.env.LOGIN_EMAIL)
        await this.fill(this.loginPasswordBtn, process.env.LOGIN_PASSWORD)
        await this.click(this.submitBtn)
        logger.info('Login submitted successfully');
    }

     verifyUsername (){
        return this.userNameBanner
        
    }

    

    errorMsg(){
        return this.errorBtn
    }

    async logout(){
        await this.click(this.logoutBtn)
        logger.info('User logged out successfully');
    }

    async invalidLoginSubmit(user){
     logger.info('Attempting login with invalid credentials');
        await this.fill(this.loginEmailBtn, user.invalidEmail)
        await this.fill(this.loginPasswordBtn, user.invalidPassword)
        await this.click(this.submitBtn)
        logger.info('Invalid login error message displayed successfully');
    }

}
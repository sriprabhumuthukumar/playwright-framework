import { chromium } from "playwright";
import config from "../config/config.js";

async function gloabalLogin() {

    const browser = await chromium.launch({headless:config.headless})

    const page = await browser.newPage()

    await page.goto('https://automationexercise.com/login')
    await page.fill('[data-qa="login-email"]',process.env.LOGIN_EMAIL)
    await page.fill('[data-qa="login-password"]', process.env.LOGIN_PASSWORD)
    await page.click('[data-qa="login-button"]')
    await page.waitForLoadState('networkidle')

    await page.context().storageState({
        path:'auth/auth.json'
    })

    console.log('Authentication state saved')

    await browser.close()

}

export default gloabalLogin()
import { chromium } from "playwright";
import config from "../config/config.js";

async function createStorageState(user) {

    const browser = await chromium.launch({
        headless: config.headless
    });

    try {

        const page = await browser.newPage();

        await page.goto("https://automationexercise.com/login");

        await page.fill(
            '[data-qa="login-email"]',
            user.email
        );

        await page.fill(
            '[data-qa="login-password"]',
            user.password
        );

        await page.click(
            '[data-qa="login-button"]'
        );

        await page.waitForLoadState("networkidle");

        await page.context().storageState({
            path: `auth/${user.file}`
        });

        console.log(
            `Storage state created: ${user.file}`
        );

    } finally {

        await browser.close();
    }
}

async function globalLogin() {

    const users = [
        {
            role: "buyer",
            email: process.env.BUYER_EMAIL,
            password: process.env.BUYER_PASSWORD,
            file: "buyer.json"
        },
        {
            role: "seller",
            email: process.env.SELLER_EMAIL,
            password: process.env.SELLER_PASSWORD,
            file: "seller.json"
        }
    ];

    for (const user of users) {

        console.log(
            `Creating auth for ${user.role}`
        );

        await createStorageState(user);
    }

    console.log(
        "All storage states generated successfully"
    );
}

export default globalLogin();
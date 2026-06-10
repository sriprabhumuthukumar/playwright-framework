import {
    Before,After,BeforeAll,AfterAll,Status,setDefaultTimeout} from "@cucumber/cucumber";

import launchBrowser from "../utils/browserfactory.js";
import { getStorageState } from "../utils/authmanagaer.js";
import Loginpage from "../pages/loginpage.js";
import Singuppage from "../pages/signuppage.js";
import Productpage from "../pages/productpage.js";
import Cartpage from "../pages/cartpage.js";
import Paymentpage from "../pages/paymentpage.js";
import Contactpage from "../pages/contactpage.js";
import fs from 'fs'
import paymentData from "../data/payment.js";
import userData from "../data/userdata.js";
import * as allure from "allure-js-commons";
import config from "../config/config.js";
import logger from "../utils/logger.js";

let browser;

setDefaultTimeout(config.timeout);

BeforeAll(async function () {
    logger.info(
    `Launching ${config.browser_name} browser`);
    logger.info(
  `Worker ${process.pid} launching ${config.browser_name}`);
    browser = await launchBrowser(
        config.browser_name,
        config.headless
    )

    logger.info("Browser launched");
});

Before(async function (scenario) {
    const tags = scenario.pickle.tags.map(
    tag => tag.name
);

console.log("Scenario Tags:", tags);

    logger.info(`Starting Scenario: ${scenario.pickle.name}`);

    this.browser = browser;

    const isLoginFeature = scenario.pickle.tags.some(
        tag =>
            tag.name === "@login" ||
            tag.name === "@signup"
    );

    if (isLoginFeature) {
        this.context = await this.browser.newContext();
    } else {

        const storageState = getStorageState(tags)
        logger.info(`using storage state: ${storageState}`)
        
        this.context = await this.browser.newContext({
            storageState
        });
    }

    logger.info("Creating page");

    this.page = await this.context.newPage();

    logger.info("Page created");

    this.page.setDefaultTimeout(config.timeout);
    this.page.setDefaultNavigationTimeout(config.timeout);

    await this.page.goto(config.base_url);

    // Page Objects
    this.login = new Loginpage(this.page);
    this.signup = new Singuppage(this.page);
    this.product = new Productpage(this.page);
    this.cart = new Cartpage(this.page);
    this.payment = new Paymentpage(this.page);
    this.contact = new Contactpage(this.page);

    // Test Data
    this.user = userData;
    this.pay = paymentData;
});

After(async function (scenario) {

     if (scenario.result.status === "FAILED") {
    const screenshot = await this.page.screenshot();

    fs.mkdirSync("reports/screenshots", { recursive: true });

    const fileName = `reports/screenshots/${Date.now()}.png`;

    fs.writeFileSync(fileName, screenshot);

     await allure.attachment(
    "Failure Screenshot",
    screenshot,
    "image/png"
  );
  }

    try {

        if (
            scenario.result?.status === Status.FAILED &&
            this.page
        ) {
            logger.error(
                `Failed Scenario: ${scenario.pickle.name}`
            );

            await this.page.screenshot({
                path: `results/ss/${scenario.pickle.name}.png`,
                fullPage: true
            });
        }

        logger.info(
            `Completed Scenario: ${scenario.pickle.name}`
        );

    } finally {

        if (this.page) {
            await this.page.close();
        }

        if (this.context) {
            await this.context.close();
        }
    }
});

AfterAll(async function () {

    logger.info("Closing browser");

    if (browser) {
        await browser.close();
    }

    logger.info("Browser closed");
});
import { expect } from "playwright/test";
import logger from "./logger.js";

class Validation{
    async text(locator,expectedText){
        logger.info(`Validating text: ${expectedText}`)
        await expect(locator).toHaveText(expectedText);
    }

    async visible(locator){
        logger.info('Validating element visiblility')
        await expect(locator).toBeVisible();
    }

    async url(page,expectedUrl){
        logger.info(`validating url: ${expectedUrl}`)
        await expect(page).toHaveURL(expectedUrl)
    }


   
 }

 export default new Validation()
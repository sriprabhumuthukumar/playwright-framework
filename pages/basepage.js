import logger from "../utils/logger.js";
export default class Basepage {
    constructor(page){
        this.page=page;
    }

    async click(locator){
        await locator.waitFor({state:'visible'});
        await locator.click()
    }

    async navigate(url){
        await this.page.goto(url)
        logger.info(`Navigating to ${url}`);
    }

    async fill(locator,value){
    await locator.waitFor({state:'visible'})
    await locator.fill(value)
    }

    async clear(locator){
    await locator.waitFor({state:'visible'})
    await locator.fill('')
    }

    async getText(locator){
        return await locator.textContent()
    }

    async uploadfile(locator,filelocation){
    await locator.waitFor({state:'visible'})
    await locator.setInputFiles(filelocation)
    logger.info('File upload succcessfully')
    }

    async screenshot(filename){
    await this.page.screenshot({path:`reports/${filename}.png`,
    fullPage:true
    })
    logger.info('Screenshot captured')
    }

    async dropdown(locator,value){
    await locator.waitFor({state:'visible'})
    await locator.selectOption(value.toString())
    }

}
import { chromium, firefox, webkit } from "playwright";

export default async function launchBrowser(browserName,headless) {
    
    switch(browserName.toLowerCase()){
        case "webkit":
        return await webkit.launch({headless})

        case "firefox":
        return await firefox.launch({headless})

        case "chromiun":
        default:
        return await chromium.launch({headless})
    }
    
}
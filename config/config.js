import './env.js'

const config ={
    browser_name : process.env.BROWSER || 
                   process.env.Browser_name,
    base_url : process.env.Base_url,
    headless : process.env.Headless === 'true',
    timeout : Number(process.env.Timeout)
}

export default config


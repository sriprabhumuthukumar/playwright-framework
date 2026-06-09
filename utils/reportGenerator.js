import reporter from "cucumber-html-reporter";

reporter.generate({
    theme: "bootstrap",
    jsonFile: "reports/report.json",
    output: "reports/cucumber-report.html",
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
        "Browser": process.env.BROWSER || process.env.Browser_name,
        "Platform": process.platform,
        "Executed": "Local"
    }
});
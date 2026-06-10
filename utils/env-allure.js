import fs from "fs";

fs.mkdirSync("allure-results", { recursive: true });

fs.writeFileSync(
  "allure-results/environment.properties",
  `Browser=${process.env.BROWSER || "chromium"}
Environment=QA
Framework=Playwright + Cucumber
Tested= SR7`
);
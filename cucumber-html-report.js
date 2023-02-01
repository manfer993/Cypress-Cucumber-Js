const report = require("multiple-cucumber-html-reporter");
report.generate({
  jsonDir: "json-logs", // ** Path of .json file **//
  reportPath: "./cucumber-reports/cucumber-htmlreport.html",
  metadata: {
    browser: {
      name: "chrome",
      version: "109.0",
    },
    device: "Local test machine",
    platform: {
      name: "osx",
      version: "Monterey",
    },
  },
  reportName: "PoC report",
  customData: {
    title: "Run Info",
    data: [
      {label: 'Project', value: 'Cypress Cucumber PoC'},
      {label: 'Environment', value: 'QA Automation'}
    ],
  },
});

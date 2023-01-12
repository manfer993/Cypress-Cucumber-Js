# Cypress with JavaScript and Cucumber to automating E2E tests cases

## Description

In this project, automated tests are carried out on the web application <https://www.saucedemo.com/> using Cypress(12.3.0) and Allure report.

* The project contemplates two test scenarios:

      1. Login test.
      2. Inventory test.

### Prerequisites

[Node.js](https://nodejs.org/en/ "Node.js") minimum in its verse 16 is necessary to be able to run the project. Version 18.13.0 was used during the implementation of the project.

### Scripts

The neccesary scripts to run the tests are in the `cypress/package.json` folder.

* The scripts are:

  * `npm test`: Run the project by using Cypress interface without @skip tagged test cases.
  * `npm run cypress:runner`: Run the project by using Cypress interface in Chrome browser.
  * `npm run cypress:execution`: Run the project in a headless mode.
  * `npm run cypress:execution-tags`:  Run the project in a headless mode. The tag must be modified to the desired one.
  * `npm run cypress:execution-allure`: Run the project in a headless mode by using Allure Framework as the reporter.

### Setup

      1.Download/clone the project. 
      2.Run command npm install.
      3.Run one of the indicated scripts.

## Notes

* Cypress version `12.3.0` .
* Cucumber was used to write the tests in conjunction with the Page Object Model design pattern.
* Tests are located inside the `cypress/e2e` folder.
* The `cypress/fixtures` folder contains data used throughout the framework.
* The neccesary scripts to run the tests are in the `cypress/package.json` folder.
  
## Resources

* [Node.js](https://nodejs.org/en/ "Node.js")
* [Cypress Documentation](https://docs.cypress.io/guides/overview/why-cypress "Cypress Documentation")
* [Cucumber Documentation](https://cucumber.io/ "Cucumber Documentation")
* [Allure Documentation](https://docs.qameta.io/allure/ "Allure Documentation")

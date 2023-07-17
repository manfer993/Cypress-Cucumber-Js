import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "@pages/loginPage";
import { crossPage } from "@pages/crossPage";

Given("The browser is at the SwagLabs platform page", () => {
  crossPage.visitRootPage();
});

When("A user enters username {string}", (username) => {
  loginPage.typeUserName(username);
});

When("A user enters password {string}", (password) => {
  loginPage.typePassword(password);
});

When(
  "A user enters username {string} and password {string}",
  (username, password) => {
    loginPage.submitLogin(username, password);
  },
);

When("A user provides incorrect credentials", (table) => {
  table.hashes().forEach((row) => {
    cy.log(row.username);
    cy.log(row.password);
    loginPage.submitLogin(row.username, row.password);
  });
});

When("A user clicks on the login button", () => {
  loginPage.clickLoginBtn();
});

Then("The url will contain the inventory subdirectory", () => {
  crossPage.getUrl().should("contains", "/inventory.html");
});

Then("The error message {string} is displayed", (errorMessage) => {
  loginPage.getErrorMessage().should("have.text", errorMessage);
});

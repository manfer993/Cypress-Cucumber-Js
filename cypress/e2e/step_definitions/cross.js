import { When } from "@badeball/cypress-cucumber-preprocessor";
import { crossPage } from "@pages/crossPage";

When("The platform page has {string} title", (pageTitle) => {
    crossPage.getPageTitle().should("have.text", pageTitle);
});
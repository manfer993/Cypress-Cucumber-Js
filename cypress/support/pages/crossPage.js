import crossLocators from "../locators/crossLocators";

class CrossPage {
    #elements = {
        pageTitle: () => cy.get(crossLocators.pageTitle)
    };

    getPageTitle() {
        return this.#elements.pageTitle();
    }

    getUrl() {
        return cy.url();
    }

    visitRootPage() {
        cy.visit("/");
    }

    visitPage(path) {
        cy.visit(`/${path}`);
    }
}

export const crossPage = new CrossPage();
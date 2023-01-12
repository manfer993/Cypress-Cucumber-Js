import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { inventoryPage } from '@pages/inventoryPage';

When("A user clicks in add {string} to the shopping cart", (productName) => {
    const name = productName.toLowerCase().replaceAll(' ', '-');
    inventoryPage.clickAddToCartProduct(name);
});

When("A user clicks in remove {string} to the shopping cart", (productName) => {
    const name = productName.toLowerCase().replaceAll(' ', '-');
    inventoryPage.clickRemoveProduct(name);
});

Then("The shopping cart badget is {string}", (badge) => {
    inventoryPage.getShoppingCartBadget().should("have.text", badge);
});
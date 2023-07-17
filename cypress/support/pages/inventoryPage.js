import inventoryLocators from "../locators/inventoryLocators.js";

class InventoryPage {
  #elements = {
    cartBadgeSpan: () => cy.get(inventoryLocators.cartBadgeSpan),
    addToCartButton: (productName) =>
      cy.get(inventoryLocators.addToCartButton(productName)),
    removeToCartButton: (productName) =>
      cy.get(inventoryLocators.removeToCartButton(productName)),
  };

  clickAddToCartProduct(productName) {
    this.#elements.addToCartButton(productName).prev();
    this.#elements.addToCartButton(productName).click();
  }

  clickRemoveProduct(productName) {
    this.#elements.removeToCartButton(productName).click();
  }

  getShoppingCartBadget() {
    return this.#elements.cartBadgeSpan();
  }
}

export const inventoryPage = new InventoryPage();

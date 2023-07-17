module.exports = {
  cartBadgeSpan: ".shopping_cart_badge",
  addToCartButton: (elementName) => `[data-test="add-to-cart-${elementName}"]`,
  removeToCartButton: (elementName) => `[data-test="remove-${elementName}"]`,
};

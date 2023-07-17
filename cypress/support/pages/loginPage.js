import loginLocators from "../locators/loginLocators.js";

class LoginPage {
  #elements = {
    usernameInput: () => cy.get(loginLocators.userNameInput),
    passwordInput: () => cy.get(loginLocators.passwordInput),
    loginBtn: () => cy.get(loginLocators.loginButton),
    errorMessage: () => cy.get(loginLocators.errorMessage),
  };

  typeUserName(username) {
    this.#elements.usernameInput().type(username);
  }

  typePassword(password) {
    this.#elements.passwordInput().type(password);
  }

  clickLoginBtn() {
    this.#elements.loginBtn().click();
  }

  submitLogin(username, password) {
    this.typeUserName(username);
    this.typePassword(password);
  }

  getErrorMessage() {
    return this.#elements.errorMessage();
  }
}

export const loginPage = new LoginPage();

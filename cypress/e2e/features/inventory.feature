Feature: Inventory page

    Feature inventory page will work depending on the inventory of elements

    Background:
        Given The browser is at the SwagLabs platform page
        And A user enters username "standard_user" and password "secret_sauce"
        And A user clicks on the login button
        When The url will contain the inventory subdirectory
        And The platform page has "Products" title

    Scenario: Add a products to cart
        And A user clicks in add "Sauce Labs Backpack" to the shopping cart
        Then The shopping cart badget is "1"

    Scenario: Add and remove products to cart
        And A user clicks in add "Sauce Labs Backpack" to the shopping cart
        And A user clicks in add "Sauce Labs Onesie" to the shopping cart
        Then The shopping cart badget is "2"
        When A user clicks in remove "Sauce Labs Backpack" to the shopping cart
        Then The shopping cart badget is "1"
Feature: Login Test Cases

    Feature Login page will work depending on the user credentials.

    Background:
        Given The browser is at the SwagLabs platform page

    Scenario: Success Login
        When A user enters username "standard_user" and password "secret_sauce"
        And A user clicks on the login button
        Then The url will contain the inventory subdirectory

    Scenario: Blocked Login
        When A user enters username "locked_out_user" and password "secret_sauce"
        And A user clicks on the login button
        Then The error message "Epic sadface: Sorry, this user has been locked out." is displayed

    Scenario: Incorrect Username Login
        When A user provides incorrect credentials
            | username | password     |
            | testName | secret_sauce |
        And A user clicks on the login button
        Then The error message "Epic sadface: Username and password do not match any user in this service" is displayed

    Scenario: Login with blank Username
        When A user enters password "secret123"
        And A user clicks on the login button
        Then The error message "Epic sadface: Username is required" is displayed

    Scenario: Login with blank Password
        When A user enters username "standard_user"
        And A user clicks on the login button
        Then The error message "Epic sadface: Password is required" is displayed

    Scenario: Login with empty credentials
        When A user clicks on the login button
        Then The error message "Epic sadface: Username is required" is displayed

    Scenario: Incorrect Password Login
        When A user provides incorrect credentials
            | username      | password     |
            | standard_user | testPassword |
        And A user clicks on the login button
        Then The error message "Epic sadface: Username and password do not match any user in this service" is displayed
Feature: Landing Page

    The Landing page is the first one the user will interact with. It is vibrant and welcomes the user to use our app, incinting them to create an account or login.

  Scenario: As a not logged in user, I want to see a welcome message and buttons to create an account and to login.
    Given I am on the landing page and i'm not logged in.
    Then I should see a welcome message and buttons to create an account and to login.
  
  Scenario: As a brand new user, I want to access the register modal to create an account.
    Given I am on the landing page and i'm not logged in.
    When I click on the register button.
    Then I should access the register modal.

  Scenario: As a user that has an account but is logged out, I want to access the login modal.
    Given I am on the landing page and i'm not logged in.
    When I click on the register button.
    Then I should access the login modal.

  Scenario: As a user that has an account and is logged, I should be redirected to my home page.
    Given I am on the landing page and I've been previously logged in in this device.
    Then I should be redirected to my homepage.

  Scenario: As a user that that uses accessibility tools, I should be able to navigate to the register modal.
    Given I am on the landing page and i'm not logged in.
    When I press the tab button until I find the register button and press enter on it.
    Then I should access the register modal.
  
  Scenario: As a user that that uses accessibility tools, I should be able to navigate to the login modal.
    Given I am on the landing page and i'm not logged in.
    When I press the tab button until I find the login button and press enter on it.
    Then I should access the register modal.

  Scenario: As a user that that uses accessibility tools, the landing page must support my needs.
    Given I am on the landing page and i'm not logged in.
    When The page passes the lighthouse accessibility audit.
    Then I should be able to browse the website without problem.
  
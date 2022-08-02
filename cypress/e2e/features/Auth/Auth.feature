Feature: Auth

    Everything related to authentication. Login, logout, registration, and reset password.

# LOGIN
  Scenario: As a not logged in user, I want to login.

    Given I have the login modal open.
    When I fill in the login form with my credentials and I press the login button.
    Then I should be logged in and be redirected to my home page.

  Scenario: As an user that that uses accessibility tools, I want to login.
    Given I have the login modal open.
    When I fill in the login form with my credentials navigating with my keyboard and I press the login button navigating with my keyboard.
    Then I should be logged in and be redirected to my home page.

  Scenario: As a not logged in user, I want to login, but I don't input my email and password.

    Given I have the login modal open.
    When I don't input either my email or password.
    Then the login button should be disabled.

  Scenario: As a not logged in user, I want to login, but I input an invalid email or password.

    Given I have the login modal open.
    When I input either an invalid email or password.
    Then the login button should be disabled.
    And I should see an error message under the invalid input field.

  Scenario: As a not logged in user, I want to login, but I input wrong credentials.

    Given I have the login modal open.
    When I input either an email that isn't registered or a password that is incorrect for that email.
    Then the login button should be disabled.
    And I should see a toast error explaining what happend.
    And the email and password fields should be reset.

  Scenario: As a not logged in user, I want to close the login modal.

    Given I have the login modal open.
    When click the close icon.
    Then the login modal should disappear.

  Scenario: As an user that that uses accessibility tools, I want to close the login modal.

    Given I have the login modal open.
    When click the close icon navigating with my keyboard.
    Then the login modal should disappear.

  Scenario: As an user that that uses accessibility tools, the login modal must support my needs.
    Given I have the login modal open.
    When The page passes the lighthouse accessibility audit.
    Then I should be able to browse the modal without problem.

# RESET PASSWORD
  Scenario: As a not logged in user, I want to change my password.

    Given I have the login modal open.
    When I click the Forgot Password link.
    And I fill in the the reset form with a valid email and I press the send button.
    Then I should see a success message telling me to go to my email inbox to reset my password.

  Scenario: As an user that that uses accessibility tools, I want to change my password.

    Given I have the login modal open.
    When I click the Forgot Password link navigating with my keyboard.
    And I fill in the the reset form with a valid email navigating with my keyboard and I press the send button navigating with my keyboard.
    Then I should see a success message telling me to go to my email inbox to reset my password.

  Scenario: As a not logged in user, I want to change my password, but I don't enter an email to the form.

    Given I have the login modal open.
    When I click the Forgot Password link.
    And I don't input my email.
    Then the send button should be disabled.

  Scenario: As a not logged in user, I want to change my password, but I enter an invalidly formatted email to the form.

    Given I have the login modal open.
    When I click the Forgot Password link.
    And I fill in the form with an invalid email.
    Then the send button should be disabled.
    And I should see an error message under the invalid input field.

  Scenario: As a not logged in user, I want to change my password, but I enter an email that doesn't have an account associated with it.

    Given I have the login modal open.
    When I click the Forgot Password link.
    And I fill in the the reset form with a email that doesn't have an account associated with it and I press the send button.
    Then I should see a toast error explaining what happend.
    And the email field should be reset.

  Scenario: As a not logged in user, I want to close the reset modal.

    Given I have the login modal open.
    When I click the Forgot Password link.
    And I click the close icon.
    Then the reset modal should disappear.

  Scenario: As an user that that uses accessibility tools, I want to close the reset modal.

    Given I have the login modal open.
    When I click the Forgot Password link navigating with my keyboard.
    And I click the close icon navigating with my keyboard.
    Then The reset modal should disappear.

  Scenario: As an user that that uses accessibility tools, the reset modal must support my needs.
    Given I have the login modal open.
    When I click the Forgot Password link navigating with my keyboard.
    When The page passes the lighthouse accessibility audit.
    Then I should be able to browse the modal without problem.

# REGISTER
  Scenario: As a not registered user, I want to register.

    Given I have the register modal open.
    When I fill in the register form with correct information and I press the register button.
    Then my account should be created and I should be logged in and be redirected to my home page.
  
  Scenario: As an user that that uses accessibility tools, I want to register.

    Given I have the register modal open.
    When I fill in the register form with correct information navigating with my keyboard and I press the register button navigating with my keyboard.
    Then my account should be created and I should be logged in and be redirected to my home page.

  Scenario: As a not registered user, I want to create an account, but I don't input my email, password or confirm password.

    Given I have the register modal open.
    When I don't input either my email, password or confirm password.
    Then the register button should be disabled.

  Scenario: As a not registered user, I want to create an account, but I input an invalid email, password or confirm password.

    Given I have the register modal open.
    When I input either an invalid email, password or confirm password.
    Then the register button should be disabled.
    And I should see an error message under the invalid input field.

  Scenario: As a not registered user, I want to create an account, but I input an email already used.

    Given I have the register modal open.
    When I input an email already used.
    Then the register button should be disabled.
    And I should see a toast error explaining what happend.
    And the email, password and confirm password fields should be reset.

  Scenario: As a not registered user, I want to close the register modal.

    Given I have the register modal open.
    When click the close icon.
    Then the register modal should disappear.

  Scenario: As an user that that uses accessibility tools, I want to close the register modal.

    Given I have the register modal open.
    When click the close icon navigating with my keyboard.
    Then the register modal should disappear.


  Scenario: As an user that that uses accessibility tools, the register modal must support my needs.
    Given I have the register modal open.
    When The page passes the lighthouse accessibility audit.
    Then I should be able to browse the modal without problem.
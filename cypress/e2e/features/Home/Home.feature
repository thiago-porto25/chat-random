Feature: Home Page

    The Home page is the place to start chats. It is minimalist and leads you to the button to start a new chat.

  Scenario: As logged in user, I want to see a logout.
    Given I am on the Home page and I'm logged in.
    When I click the 3 dots, and click the logout button.
    Then I should be logged out.
 
  Scenario: As logged in user, I want to start a new chat.
    Given I am on the Home page and I'm logged in.
    When I click the Chat now button.
    Then I should go to chat page.

  Scenario: As logged in user, I want to chat with a bot if there's no one to chat at the moment.
    Given I am on the Home page, I'm logged in and there's no one to chat.
    When I click the Chat now button.
    Then I should be see a message explaining that there's no one to chat and that I can chat with a bot.
    When I click the Try with bot button.
    Then I should go to chat page.

  Scenario: As an user that that uses accessibility tools, the home page must support my needs.
    Given I am on the Home page and I'm logged in.
    When The page passes the lighthouse accessibility audit.
    Then I should be able to browse the website without problem.
  

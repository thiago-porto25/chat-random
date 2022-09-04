Feature: Chat Page

    The Chat page is the place to chat. It is minimalist and lets you send and receive realtime messages to/from another person.

  Scenario: As a user not in a chat and logged in, I want to be redirected to Home page if I go to Chat page.
    Given I'm logged in and not in a chat.
    When I enter the chat page.
    Then I should be redirected to the home page.

  Scenario: As a user in a chat, I want to see a see the page's content.
    Given I am on the Chat page, I'm logged in and in a chat.
    Then I should see its content.
 
  Scenario: As a user in a chat, I want to send a message.
    Given I am on the Chat page, I'm logged in and in a chat.
    When I input a message and press the send button.
    Then I should see the message in the chat body.

  Scenario: As a user in a chat with accessibility needs, I want to send a message.
    Given I am on the Chat page, I'm logged in and in a chat.
    When I input a message and press enter.
    Then I should see the message in the chat body.

  Scenario: As a user in a chat, I want to leave the chat.
    Given I am on the Chat page, I'm logged in and in a chat.
    When I click the leave button.
    Then I should be redirected to the home page.
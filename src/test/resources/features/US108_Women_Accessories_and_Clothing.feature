@test11
Feature: US1008_user_should_buy_dresses

  Scenario: TC01_User_should_have_account
    Given user is on the globalTrader webpage
    And user clicks on the women clothing and accessories
    When user click on tassel dresses
    When user click on dresses
    When user click on buy now button
    When user enter username
    When user enters password
    When user click on login button
    Then verify the message

  Scenario: TC02_User_should_be_able_to_select_size_and_colour
    Given user is on the globalTrader webpage
    And user clicks on the women clothing and accessories
    When user click on tassel dresses
    When user click on dresses
    When user click on size
    When user click on colour

  Scenario: TC01_User_should_be_able_to_add_to_cart
    Given user is on the globalTrader webpage
    And user clicks on the women clothing and accessories
    When user click on tassel dresses
    When user click on dresses
    When user click on buy now button
    When user enter username
    When user enters password
    When user click on login button
    When user click on cart button
    Then verify buy now option


  Scenario: TC01_User_should_not_be_able_to_buy_dresses
    Given user is on the globalTrader webpage
    And user clicks on the women clothing and accessories
    When user click on tassel dresses
    When user click on dresses
    When user click on buy now button
    Then verify sign in message
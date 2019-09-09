Feature: Free CRM Login Feature
#Without example keyword
#Scenario: Free CRM Login Test Scenario
#
#Given User is already on LoginPage
#When tile of loginPage is FreeCRM
#Then User enters "alimuzzaman408" and "Zerin1994"
#Then user click on login btn
#Then user is on homepage
#Then close the browser

#With Example keyword
Scenario Outline: Free CRM Login Test Scenario

Given User is already on LoginPage
When tile of loginPage is FreeCRM
Then User enters "<username>" and "<password>"
Then user click on login btn
Then user is on homepage
Then close the browser

Examples:
      | username         | password |
      | alimuzzaman408   |Zerin1994 |
      |   Tom            | Test1    |
      |   Jhon           | Test2    |







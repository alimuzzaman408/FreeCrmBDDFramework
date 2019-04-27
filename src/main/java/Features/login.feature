Feature: Free CRM Login Feature
#Without example keyword
#Scenario: Free CRM Login Test Scenario
#
#Given User is already on LoginPage
#When tile of loginPage is FreeCRM
#Then User enters "shapanusa" and "Zerin1994"
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
      | username | password |
      | shapanusa|Zerin1994 |
      |Tom       | Test1    |
      |Jhon      |Test2     |






#Scenario: User is able to create a new contact
#Given user is on homepage
#When user move over on contact link
#Then user click on new contactlink
#Then user enters contact deatails firstname and lastname
#Then click on save btn
#Then verify new contact created
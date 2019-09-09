Feature: Deal data creation

Scenario: User is able to create a new deal
Given User is already on LoginPage
When tile of loginPage is FreeCRM
Then User enters username and password
|alimuzzaman408|Zerin1994|
Then user click on login btn
Then user is on homepage
Then user click on new deallink
Then user enters deal deatails 
| Testdeal  | 1000   | 50    |  10 |
Then close the browser
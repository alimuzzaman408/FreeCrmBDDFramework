Feature: Free CRM create contacts


Scenario Outline: User is able to create a new contact
Given User is already on LoginPage
When tile of loginPage is FreeCRM
Then User enters "<username>" and "<password>"
Then user click on login btn
Then user is on homepage
Then user click on new contactlink
Then user enters contact deatails "<firstname>" and "<lastname>" and "<position>"
Then click on save btn
Examples:

|username |password |firstname|lastname|position|
|shapanusa|Zerin1994|Zerin    |alam    |qalead  |
|Shapanusa|Zerin1994|Mohammad |Ali     |chairman|





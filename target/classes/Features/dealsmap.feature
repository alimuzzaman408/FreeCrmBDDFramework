Feature: Deal data creation 

Scenario: User is able to create a new deal 
	Given User is already on LoginPage 
	When tile of loginPage is FreeCRM 
	Then User enters username and password 
		|username|password|
		|alimuzzaman408|Zerin1994|
		
		
	Then user click on login btn 
	Then user is on homepage 
	Then user click on new deallink 
	
	Then user enters deal deatails 
		|title|amount|probability|comission|
		| Testdeal1  | 1000   | 50    |  10 |
		| Testdeal2  | 2000   | 60    |  20 |
		| Testdeal3  | 3000   | 70    |  30 |
		
	Then close the browser
Feature: SearchFlights 
This functionality is used to search the flights

@SanityTests 
Scenario: Title check 
	Given Launch the website 
	When Get the title 
	Then validate the title 

@SanityTests @Regression @Twitter
Scenario: Round trip check 
	Given Launch the website 
	When provide Origin "Hyderabad" and destination "New Delhi" 
	And give departure date "29/01/2020" and arrival date "30/01/2020" 
	Then Search should be successful 

@Twitter 
Scenario: Login to twitter 
	When User Privided the username and password 
		|gowthampage@gmail.com|10je1a0415|
	Then validate if user is logged in 

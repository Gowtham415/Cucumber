Feature: SearchFlights

Scenario: Title check

Given Launch Chrome browser
And Launch the website
When Get the title
Then validate the title

Scenario: Round trip check

Given Launch Chrome browser
And Launch the website
When provide Origin "Hyderabad" and destination "New Delhi"
And give departure date "29/01/2020" and arrival date "30/01/2020"
Then Search should be successful


	
	
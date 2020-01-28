$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/WorkSpace/Selenium/cucumber/src/main/java/features/searchflights.feature");
formatter.feature({
  "line": 1,
  "name": "SearchFlights",
  "description": "",
  "id": "searchflights",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Title check",
  "description": "",
  "id": "searchflights;title-check",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Launch the website",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Get the title",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "validate the title",
  "keyword": "Then "
});
formatter.match({
  "location": "searhFlights_stepDefinition.launchChromeBrowser()"
});
formatter.result({
  "duration": 4754764200,
  "status": "passed"
});
formatter.match({
  "location": "searhFlights_stepDefinition.launchSite()"
});
formatter.result({
  "duration": 5819637500,
  "status": "passed"
});
formatter.match({
  "location": "searhFlights_stepDefinition.getTitleofSite()"
});
formatter.result({
  "duration": 66392800,
  "status": "passed"
});
formatter.match({
  "location": "searhFlights_stepDefinition.validateTitle()"
});
formatter.result({
  "duration": 178908800,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Round trip check",
  "description": "",
  "id": "searchflights;round-trip-check",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Launch the website",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "provide Origin \"Hyderabad\" and destination \"New Delhi\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "give departure date \"29/01/2020\" and arrival date \"30/01/2020\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Search should be successful",
  "keyword": "Then "
});
formatter.match({
  "location": "searhFlights_stepDefinition.launchChromeBrowser()"
});
formatter.result({
  "duration": 3424237100,
  "status": "passed"
});
formatter.match({
  "location": "searhFlights_stepDefinition.launchSite()"
});
formatter.result({
  "duration": 6525565200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hyderabad",
      "offset": 16
    },
    {
      "val": "New Delhi",
      "offset": 44
    }
  ],
  "location": "searhFlights_stepDefinition.enter_Origin_and_destination(String,String)"
});
formatter.result({
  "duration": 1648579000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "29/01/2020",
      "offset": 21
    },
    {
      "val": "30/01/2020",
      "offset": 51
    }
  ],
  "location": "searhFlights_stepDefinition.setDepartureAndArrivalDate(String,String)"
});
formatter.result({
  "duration": 4640327100,
  "status": "passed"
});
formatter.match({
  "location": "searhFlights_stepDefinition.validationOfRoundTrip()"
});
formatter.result({
  "duration": 193522400,
  "status": "passed"
});
});
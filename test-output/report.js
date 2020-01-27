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
  "name": "Search for roundtrip flights",
  "description": "",
  "id": "searchflights;search-for-roundtrip-flights",
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
  "duration": 4768122700,
  "status": "passed"
});
formatter.match({
  "location": "searhFlights_stepDefinition.launchSite()"
});
formatter.result({
  "duration": 6994101200,
  "status": "passed"
});
formatter.match({
  "location": "searhFlights_stepDefinition.getTitleofSite()"
});
formatter.result({
  "duration": 34290100,
  "status": "passed"
});
formatter.match({
  "location": "searhFlights_stepDefinition.validateTitle()"
});
formatter.result({
  "duration": 1407100,
  "status": "passed"
});
});
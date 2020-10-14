$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("searchflights.feature");
formatter.feature({
  "line": 1,
  "name": "SearchFlights",
  "description": "This functionality is used to search the flights",
  "id": "searchflights",
  "keyword": "Feature"
});
formatter.before({
  "duration": 12215671500,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Title check",
  "description": "",
  "id": "searchflights;title-check",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@SanityTests"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Launch the website",
  "keyword": "Given "
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
  "location": "StepDefinitionClass.launchSite()"
});
formatter.result({
  "duration": 7802693700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionClass.getTitleofSite()"
});
formatter.result({
  "duration": 12374400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionClass.validateTitle()"
});
formatter.result({
  "duration": 3454500,
  "status": "passed"
});
formatter.after({
  "duration": 321525500,
  "status": "passed"
});
formatter.before({
  "duration": 9626526600,
  "status": "passed"
});
formatter.before({
  "duration": 1473139700,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Round trip check",
  "description": "",
  "id": "searchflights;round-trip-check",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@SanityTests"
    },
    {
      "line": 10,
      "name": "@Regression"
    },
    {
      "line": 10,
      "name": "@Twitter"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "Launch the website",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "provide Origin \"Hyderabad\" and destination \"New Delhi\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "give departure date \"29/01/2020\" and arrival date \"30/01/2020\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Search should be successful",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.launchSite()"
});
formatter.result({
  "duration": 6694813500,
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
  "location": "StepDefinitionClass.enter_Origin_and_destination(String,String)"
});
formatter.result({
  "duration": 1910326100,
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
  "location": "StepDefinitionClass.setDepartureAndArrivalDate(String,String)"
});
formatter.result({
  "duration": 1061742500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionClass.validationOfRoundTrip()"
});
formatter.result({
  "duration": 44300,
  "status": "passed"
});
formatter.after({
  "duration": 223769900,
  "status": "passed"
});
formatter.before({
  "duration": 9482061700,
  "status": "passed"
});
formatter.before({
  "duration": 929220600,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Login to twitter",
  "description": "",
  "id": "searchflights;login-to-twitter",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@Twitter"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User Privided the username and password",
  "rows": [
    {
      "cells": [
        "gowthampage@gmail.com",
        "10je1a0415"
      ],
      "line": 20
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "validate if user is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.login_to_twitter(DataTable)"
});
formatter.result({
  "duration": 3138372600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionClass.validate_twitter_login()"
});
formatter.result({
  "duration": 2374184700,
  "status": "passed"
});
formatter.after({
  "duration": 4103895100,
  "status": "passed"
});
});
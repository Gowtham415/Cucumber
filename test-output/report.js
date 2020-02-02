$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("searchflights.feature");
formatter.feature({
  "line": 1,
  "name": "SearchFlights",
  "description": "Description: To search the hotels/Flights in th expedia webSite",
  "id": "searchflights",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4542430799,
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
  "location": "searhFlights_stepDefinition.launchSite()"
});
formatter.result({
  "duration": 22049888699,
  "status": "passed"
});
formatter.match({
  "location": "searhFlights_stepDefinition.getTitleofSite()"
});
formatter.result({
  "duration": 6739201,
  "status": "passed"
});
formatter.match({
  "location": "searhFlights_stepDefinition.validateTitle()"
});
formatter.result({
  "duration": 1538799,
  "status": "passed"
});
formatter.after({
  "duration": 222039299,
  "status": "passed"
});
formatter.before({
  "duration": 3440561700,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Login to twitter",
  "description": "",
  "id": "searchflights;login-to-twitter",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@SanityTests"
    },
    {
      "line": 16,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Launch twitter",
  "keyword": "Given "
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
  "location": "searhFlights_stepDefinition.launch_twitter()"
});
formatter.result({
  "duration": 811705900,
  "status": "passed"
});
formatter.match({
  "location": "searhFlights_stepDefinition.login_to_twitter(DataTable)"
});
formatter.result({
  "duration": 2540559300,
  "status": "passed"
});
formatter.match({
  "location": "searhFlights_stepDefinition.validate_twitter_login()"
});
formatter.result({
  "duration": 1751642400,
  "status": "passed"
});
formatter.after({
  "duration": 2080633700,
  "status": "passed"
});
});
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("searchflights.feature");
formatter.feature({
  "line": 1,
  "name": "SearchFlights",
  "description": "",
  "id": "searchflights",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4821447300,
  "status": "passed"
});
formatter.before({
  "duration": 857568099,
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
      "name": "@Twitter"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User Privided the username and password",
  "rows": [
    {
      "cells": [
        "gowthampage@gmail.com",
        "10je1a0415"
      ],
      "line": 19
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "validate if user is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "searhFlights_stepDefinition.login_to_twitter(DataTable)"
});
formatter.result({
  "duration": 3173016701,
  "status": "passed"
});
formatter.match({
  "location": "searhFlights_stepDefinition.validate_twitter_login()"
});
formatter.result({
  "duration": 1407201199,
  "status": "passed"
});
formatter.after({
  "duration": 2116279901,
  "status": "passed"
});
});
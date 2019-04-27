$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Eclipse Java/JavaWorkSpace/FreecrmBDDFramework/src/main/java/Features/contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM create contacts",
  "description": "",
  "id": "free-crm-create-contacts",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User is able to create a new contact",
  "description": "",
  "id": "free-crm-create-contacts;user-is-able-to-create-a-new-contact",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is already on LoginPage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "tile of loginPage is FreeCRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click on login btn",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user click on new contactlink",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact deatails \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "click on save btn",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "free-crm-create-contacts;user-is-able-to-create-a-new-contact;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ],
      "line": 16,
      "id": "free-crm-create-contacts;user-is-able-to-create-a-new-contact;;1"
    },
    {
      "cells": [
        "shapanusa",
        "Zerin1994",
        "Zerin",
        "alam",
        "qalead"
      ],
      "line": 17,
      "id": "free-crm-create-contacts;user-is-able-to-create-a-new-contact;;2"
    },
    {
      "cells": [
        "Shapanusa",
        "Zerin1994",
        "Mohammad",
        "Ali",
        "chairman"
      ],
      "line": 18,
      "id": "free-crm-create-contacts;user-is-able-to-create-a-new-contact;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "User is able to create a new contact",
  "description": "",
  "id": "free-crm-create-contacts;user-is-able-to-create-a-new-contact;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is already on LoginPage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "tile of loginPage is FreeCRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters \"shapanusa\" and \"Zerin1994\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click on login btn",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user click on new contactlink",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact deatails \"Zerin\" and \"alam\" and \"qalead\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "click on save btn",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.User_is_already_on_LoginPage()"
});
formatter.result({
  "duration": 7244727491,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.tile_of_loginPage_is_FreeCRM()"
});
formatter.result({
  "duration": 77577028,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shapanusa",
      "offset": 13
    },
    {
      "val": "Zerin1994",
      "offset": 29
    }
  ],
  "location": "LoginStepDefination.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 886509440,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_login_btn()"
});
formatter.result({
  "duration": 1860470825,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_homepage()"
});
formatter.result({
  "duration": 9871923,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_new_contactlink()"
});
formatter.result({
  "duration": 1488838761,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Zerin",
      "offset": 30
    },
    {
      "val": "alam",
      "offset": 42
    },
    {
      "val": "qalead",
      "offset": 53
    }
  ],
  "location": "LoginStepDefination.user_enters_contact_deatails_and_and(String,String,String)"
});
formatter.result({
  "duration": 412480917,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.click_on_save_btn()"
});
formatter.result({
  "duration": 870911074,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 702410571,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User is able to create a new contact",
  "description": "",
  "id": "free-crm-create-contacts;user-is-able-to-create-a-new-contact;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is already on LoginPage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "tile of loginPage is FreeCRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters \"Shapanusa\" and \"Zerin1994\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click on login btn",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user click on new contactlink",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact deatails \"Mohammad\" and \"Ali\" and \"chairman\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "click on save btn",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.User_is_already_on_LoginPage()"
});
formatter.result({
  "duration": 5339633518,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.tile_of_loginPage_is_FreeCRM()"
});
formatter.result({
  "duration": 8316620,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shapanusa",
      "offset": 13
    },
    {
      "val": "Zerin1994",
      "offset": 29
    }
  ],
  "location": "LoginStepDefination.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 843831170,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_login_btn()"
});
formatter.result({
  "duration": 2430056662,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_homepage()"
});
formatter.result({
  "duration": 9961299,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_new_contactlink()"
});
formatter.result({
  "duration": 992773846,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mohammad",
      "offset": 30
    },
    {
      "val": "Ali",
      "offset": 45
    },
    {
      "val": "chairman",
      "offset": 55
    }
  ],
  "location": "LoginStepDefination.user_enters_contact_deatails_and_and(String,String,String)"
});
formatter.result({
  "duration": 442194616,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.click_on_save_btn()"
});
formatter.result({
  "duration": 836735872,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 707128226,
  "status": "passed"
});
});
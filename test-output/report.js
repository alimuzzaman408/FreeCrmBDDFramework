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
formatter.examples({
  "line": 13,
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
      "line": 15,
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
      "line": 16,
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
      "line": 17,
      "id": "free-crm-create-contacts;user-is-able-to-create-a-new-contact;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
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
formatter.match({
  "location": "LoginStepDefination.User_is_already_on_LoginPage()"
});
formatter.result({
  "duration": 6696995446,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.tile_of_loginPage_is_FreeCRM()"
});
formatter.result({
  "duration": 71772328,
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
  "duration": 734516025,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_login_btn()"
});
formatter.result({
  "duration": 2394491222,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_homepage()"
});
formatter.result({
  "duration": 12094764,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_new_contactlink()"
});
formatter.result({
  "duration": 1081974812,
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
  "duration": 403738801,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.click_on_save_btn()"
});
formatter.result({
  "duration": 796977913,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
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
formatter.match({
  "location": "LoginStepDefination.User_is_already_on_LoginPage()"
});
formatter.result({
  "duration": 7093463619,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.tile_of_loginPage_is_FreeCRM()"
});
formatter.result({
  "duration": 10866599,
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
  "duration": 341831555,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_login_btn()"
});
formatter.result({
  "duration": 2050256366,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_homepage()"
});
formatter.result({
  "duration": 6132695,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_new_contactlink()"
});
formatter.result({
  "duration": 1725534435,
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
  "duration": 426628749,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.click_on_save_btn()"
});
formatter.result({
  "duration": 829125702,
  "status": "passed"
});
});
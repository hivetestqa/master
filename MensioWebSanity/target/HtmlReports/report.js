$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/1login.feature");
formatter.feature({
  "name": "Check the login feature of Mensio Web Application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@login"
    },
    {
      "name": "@BrandedContent"
    },
    {
      "name": "@AdIntelligence"
    },
    {
      "name": "@NBCU"
    },
    {
      "name": "@CrossPlatform"
    },
    {
      "name": "@TelevisionByBrand"
    },
    {
      "name": "@TelevisionByTeam"
    },
    {
      "name": "@TeamAsBrand"
    },
    {
      "name": "@Streaming"
    },
    {
      "name": "@Theatrical"
    },
    {
      "name": "@ecpm"
    },
    {
      "name": "@Social"
    },
    {
      "name": "@CreativeExplorer"
    },
    {
      "name": "@TelevisionByTeam"
    }
  ]
});
formatter.scenario({
  "name": "To verify that user is able to login using valid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@login"
    },
    {
      "name": "@BrandedContent"
    },
    {
      "name": "@AdIntelligence"
    },
    {
      "name": "@NBCU"
    },
    {
      "name": "@CrossPlatform"
    },
    {
      "name": "@TelevisionByBrand"
    },
    {
      "name": "@TelevisionByTeam"
    },
    {
      "name": "@TeamAsBrand"
    },
    {
      "name": "@Streaming"
    },
    {
      "name": "@Theatrical"
    },
    {
      "name": "@ecpm"
    },
    {
      "name": "@Social"
    },
    {
      "name": "@CreativeExplorer"
    },
    {
      "name": "@TelevisionByTeam"
    }
  ]
});
formatter.step({
  "name": "user is on the login screen",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.login.user_is_on_the_login_screen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter email and password",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.login.user_enter_email_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.login.user_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to home screen",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.login.user_is_navigated_to_home_screen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.login.take_screenshot()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/3TelevisionByBrand.feature");
formatter.feature({
  "name": "Check all the charts are loading properly in TelevisionByBrand",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@BrandedContent"
    },
    {
      "name": "@TelevisionByBrand"
    }
  ]
});
formatter.scenario({
  "name": "Verify that Summary Metrics chart is loading properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@BrandedContent"
    },
    {
      "name": "@TelevisionByBrand"
    }
  ]
});
formatter.step({
  "name": "user click on Television by Brand card",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.TelevisionByBrand.user_click_on_Television_by_Brand_card()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Summary Metrics sidemenu icon",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.TelevisionByBrand.user_click_on_Summary_Metrics_sidemenu_icon()"
});

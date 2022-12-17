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
      "name": "@NBCU"
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
      "name": "@NBCU"
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
formatter.uri("file:src/test/resources/Features/2homescreen.feature");
formatter.feature({
  "name": "Check all items visibility on home screen",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.scenario({
  "name": "Verify all the Branded Content Cards are visible",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@brandedcontent"
    }
  ]
});
formatter.step({
  "name": "Television by Brand card is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Home.Television_by_Brand_card_is_visible()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Television by Team card is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Home.Television_by_Team_card_is_visible()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Television Team as Brands Card is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Home.Television_Team_as_Brands_Card_is_visible()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Streaming Originals Card is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Home.streaming_Originals_Card_is_visible()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Theatrical Releases Card is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Home.theatrical_Releases_Card_is_visible()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Social Card is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Home.social_Card_is_visible()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify all the Ad Intelligence Cards are visible",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@adintelligence"
    }
  ]
});
formatter.step({
  "name": "Creative Explorer Card is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Home.creative_Explorer_Card_is_visible()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "National TV Ad Intelligence Card is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Home.national_TV_Ad_Intelligence_Card_is_visible()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Cross-Platform Ad-Intelligence Card is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Home.cross_Platform_Ad_Intelligence_Card_is_visible()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "National TV eCPM Card is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Home.national_TV_eCPM_Card_is_visible()"
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
      "name": "@Sanity"
    },
    {
      "name": "@TelevisionByBrand"
    },
    {
      "name": "@SummaryMetrics"
    },
    {
      "name": "@Dry"
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
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user directs to the Summary Metrics chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.TelevisionByBrand.user_directs_to_the_Summary_Metrics_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "chart gets loaded and Number of Programs is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.TelevisionByBrand.chart_gets_loaded_and_Number_of_Programs_is_visible()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of the Summary Metrics chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.TelevisionByBrand.take_screenshot_of_the_Summary_Metrics_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that Share of Voice chart is loading properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Sanity"
    },
    {
      "name": "@TelevisionByBrand"
    },
    {
      "name": "@ShareOfVoice"
    },
    {
      "name": "@Dry"
    }
  ]
});
formatter.step({
  "name": "user click on Share of Voice sidemenu option",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.TelevisionByBrand.user_click_on_Share_of_Voice_sidemenu_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "chart gets loaded and EMV data is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.TelevisionByBrand.chart_gets_loaded_and_EMV_data_is_visible()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of the Share of Voice chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.TelevisionByBrand.take_screenshot_of_the_Share_of_Voice_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that Exposure Trends chart is loading properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Sanity"
    },
    {
      "name": "@TelevisionByBrand"
    },
    {
      "name": "@ExposureTrends"
    },
    {
      "name": "@Dry"
    }
  ]
});
formatter.step({
  "name": "user click on Exposure Trends sidemenu option",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.TelevisionByBrand.user_click_on_Exposure_Trends_sidemenu_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "chart gets loaded and EMV is visible",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.TelevisionByBrand.chart_gets_loaded_and_EMV_is_visible()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of the Exposure Trends charts",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.TelevisionByBrand.take_screenshot_of_the_Exposure_Trends_charts()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that Visual Exposure - By Brand chart is loading properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Sanity"
    },
    {
      "name": "@VisualExposure"
    },
    {
      "name": "@ByBrand"
    }
  ]
});
formatter.step({
  "name": "user click on By Brand sidemenu option",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.TelevisionByBrand.user_click_on_By_Brand_sidemenu_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "By Brand data gets loaded and table is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.TelevisionByBrand.By_Brand_data_gets_loaded_and_table_is_visible()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of By brand chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.TelevisionByBrand.take_screenshot_of_By_brand_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that Visual Exposure By Brand Asset Type chart is loading properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Sanity"
    },
    {
      "name": "@VisualExposure"
    },
    {
      "name": "@ByBrand\u0026AssetType"
    }
  ]
});
formatter.step({
  "name": "user click on By Brand Asset Type sidemenu option",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.TelevisionByBrand.user_click_on_By_Brand_Asset_Type_sidemenu_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "By Brand Asset Type data gets loaded and table is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.TelevisionByBrand.By_Brand_Asset_Type_data_gets_loaded_and_table_is_visible()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of By Brand Asset type chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.TelevisionByBrand.take_screenshot_of_By_Brand_Asset_type_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that Visual Exposure - By Program chart is loading properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Sanity"
    },
    {
      "name": "@ByProgram"
    },
    {
      "name": "@VisualExposure"
    }
  ]
});
formatter.step({
  "name": "user click on By Program sidemenu option",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.TelevisionByBrand.user_click_on_By_Program_sidemenu_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Submit after choosing program and episode",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.TelevisionByBrand.user_click_on_Submit_after_choosing_program_and_episode()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "By Program data gets loaded and table is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.TelevisionByBrand.By_Program_data_gets_loaded_and_table_is_visible()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of byprogram chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.TelevisionByBrand.take_screenshot_of_byprogram_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that Verbal Exposure - By Brand chart is loading properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Sanity"
    },
    {
      "name": "@VerbalExposure"
    },
    {
      "name": "@VerbalByBrand"
    }
  ]
});
formatter.step({
  "name": "user click on Verbal Exposure By Brand sidemenu option",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.TelevisionByBrand.user_click_on_Verbal_Exposure_By_Brand_sidemenu_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verbal Exposure by program data gets loaded and table in visible",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.TelevisionByBrand.Verbal_Exposure_by_program_data_gets_loaded_and_table_in_visible()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of Verbal Exposure by Brand chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.TelevisionByBrand.take_screenshot_of_Verbal_Exposure_by_Brand_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/4TelevisionByTeam.feature");
formatter.feature({
  "name": "Check all charts are loading properly in TelevisionByTeam",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.scenario({
  "name": "Verify that By Brand and team chart is loading properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Sanity"
    },
    {
      "name": "@TelevisionByTeam"
    },
    {
      "name": "@VisualExposure"
    },
    {
      "name": "@ByBrandandTeam"
    }
  ]
});
formatter.step({
  "name": "user click on Television by team card",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.TelevisionByTeam.user_click_on_Television_by_team_card()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to By Brand and team chart",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.TelevisionByTeam.user_navigate_to_By_Brand_and_team_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of By Brand and team chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.TelevisionByTeam.take_screenshot_of_By_Brand_and_team_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that By Brand Team Asset Type chart is loading properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Sanity"
    },
    {
      "name": "@TelevisionByTeam"
    },
    {
      "name": "@VisualExposure"
    },
    {
      "name": "@ByBrandandTeamAsset"
    }
  ]
});
formatter.step({
  "name": "user click on By Brand team asset type side menu option",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.TelevisionByTeam.user_click_on_By_Brand_team_asset_type_side_menu_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "By Brand team asset type chart get loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.TelevisionByTeam.By_Brand_team_asset_type_chart_get_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of By brand team asset type chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.TelevisionByTeam.take_screenshot_of_By_brand_team_asset_type_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that Verbal By Brand and Team chart is loading properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Sanity"
    },
    {
      "name": "@TelevisionByTeam"
    },
    {
      "name": "@VerbalExposure"
    },
    {
      "name": "@VerbalByBrandandTeam"
    }
  ]
});
formatter.step({
  "name": "user click on By Brand and Team sidemenu option",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.TelevisionByTeam.user_click_on_By_Brand_and_Team_sidemenu_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "By Brand and Team chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.TelevisionByTeam.By_Brand_and_Team_chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of Verbal By Brand and Team chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.TelevisionByTeam.take_screenshot_of_Verbal_By_Brand_and_Team_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/5TelevisionTeamasBrand.feature");
formatter.feature({
  "name": "Check all charts are loading properly in Television - Team as Brand",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.scenario({
  "name": "Verify that Team Summary Beta chart is loading properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Sanity"
    },
    {
      "name": "@TeamAsBrand"
    },
    {
      "name": "@TeamSummaryBeta"
    }
  ]
});
formatter.step({
  "name": "user click on Television Team as Brands card",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.TeamAsBrand.user_click_on_Television_Team_as_Brands_card()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigated to Television Team as Brand screen",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.TeamAsBrand.user_navigated_to_Television_Team_as_Brand_screen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Team Summary Beta chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.TeamAsBrand.Team_Summary_Beta_chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of Team Summary Beta",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.TeamAsBrand.take_screenshot_of_Team_Summary_Beta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Team Value Mix chart is loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.TeamAsBrand.Team_Value_Mix_chart_is_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of Team Value Mix chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.TeamAsBrand.take_screenshot_of_Team_Value_Mix_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that League Summary Beta chart is loading properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Sanity"
    },
    {
      "name": "@TeamAsBrand"
    },
    {
      "name": "@LeagueSummaryBeta"
    }
  ]
});
formatter.step({
  "name": "user click on League Summary Beta Sidemenu option",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.TeamAsBrand.user_click_on_League_Summary_Beta_Sidemenu_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "League Summary Beta chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.TeamAsBrand.League_Summary_Beta_chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of League Summary Beta",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.TeamAsBrand.take_screenshot_of_League_Summary_Beta()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that Team Deep Dive Chart is loading properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Sanity"
    },
    {
      "name": "@TeamAsBrand"
    },
    {
      "name": "@LeagueSummaryBeta"
    }
  ]
});
formatter.step({
  "name": "user click on Team Deep Dive sidemenu option",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.TeamAsBrand.user_click_on_Team_Deep_Dive_sidemenu_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Team Deep Dive chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.TeamAsBrand.Team_Deep_Dive_chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of Team Deep Dive Chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.TeamAsBrand.take_screenshot_of_Team_Deep_Dive_Chart()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/6Streaming.feature");
formatter.feature({
  "name": "Check all charts are loading properly in Streaming Originals",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.scenario({
  "name": "Verify that charts in Streaming Summary Insights are loading properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Sanity"
    },
    {
      "name": "@Streaming"
    },
    {
      "name": "@SummaryInsights"
    }
  ]
});
formatter.step({
  "name": "user click on Streaming Originals card",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.StreamingOriginals.user_click_on_Streaming_Originals_card()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigated to Streaming Originals screen",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.StreamingOriginals.user_navigated_to_Streaming_Originals_screen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Brand level insights chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.StreamingOriginals.Brand_level_insights_chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of Brand Level Insights chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.StreamingOriginals.take_screenshot_of_Brand_Level_Insights_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Relative Exposure Summary chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.StreamingOriginals.Relative_Exposure_Summary_chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of Relative Exposure Summary chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.StreamingOriginals.take_screenshot_of_Relative_Exposure_Summary_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that charts in Streaming Brand Deep Dive are loading properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Sanity"
    },
    {
      "name": "@Streaming"
    },
    {
      "name": "@STRMBrandDeepDive"
    }
  ]
});
formatter.step({
  "name": "user click on Brand Deep Dive sidemenu option",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.StreamingOriginals.user_click_on_Brand_Deep_Dive_sidemenu_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Brand Deep Dive chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.StreamingOriginals.Brand_Deep_Dive_chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of Brand Deep Dive chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.StreamingOriginals.take_screenshot_of_Brand_Deep_Dive_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that charts in Platform-Wide Insight are loading properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Sanity"
    },
    {
      "name": "@Streaming"
    },
    {
      "name": "@PlatformWideInsight"
    }
  ]
});
formatter.step({
  "name": "user click on Platform Wide Insight sidemenu option",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.StreamingOriginals.user_click_on_Platform_Wide_Insight_sidemenu_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Platform Incidence chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.StreamingOriginals.Platform_Incidence_chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of Platform Incidence chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.StreamingOriginals.take_screenshot_of_Platform_Incidence_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Distribution of Segmentation by Platform chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.StreamingOriginals.Distribution_of_Segmentation_by_Platform_chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of Distribution of Segmentation by Platform chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.StreamingOriginals.take_screenshot_of_Distribution_of_Segmentation_by_Platform_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Production Company Insight chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.StreamingOriginals.Production_Company_Insight_chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of Production Company Insight chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.StreamingOriginals.take_screenshot_of_Production_Company_Insight_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/7TheatricalReleases.feature");
formatter.feature({
  "name": "Check all charts are loading properly in Theatrical Releases",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.scenario({
  "name": "Verify that charts in Summary Insights are loading properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Sanity"
    },
    {
      "name": "@TheatricalReleases"
    },
    {
      "name": "@TRSummaryInsights"
    }
  ]
});
formatter.step({
  "name": "user click on Theatrical Releases card",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.Theatrical.user_click_on_Theatrical_Releases_card()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigated to Theatrical Releases screen",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Theatrical.user_navigated_to_Theatrical_Releases_screen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Theatrical Brand Level Insights chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Theatrical.Theatrical_Brand_Level_Insights_chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of Theatrical Brand Level Insights chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.Theatrical.take_screenshot_of_Theatrical_Brand_Level_Insights_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "TH Relative Exposure Summary chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Theatrical.TH_Relative_Exposure_Summary_chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of TH Relative Exposure Summary chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.Theatrical.take_screenshot_of_TH_Relative_Exposure_Summary_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that charts in Brand Deep Dive are loading properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Sanity"
    },
    {
      "name": "@TheatricalReleases"
    },
    {
      "name": "@THBrandDeepDive"
    }
  ]
});
formatter.step({
  "name": "user click on TH Brand Deep Dive sidemenu option",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.Theatrical.user_click_on_TH_Brand_Deep_Dive_sidemenu_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "TH Brand Summary chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Theatrical.TH_Brand_Summary_chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of TH Brand Summary chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.Theatrical.take_screenshot_of_TH_Brand_Summary_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that charts in Theatrical Insights are loading properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Sanity"
    },
    {
      "name": "@TheatricalReleases"
    },
    {
      "name": "@TheatricalInsights"
    }
  ]
});
formatter.step({
  "name": "user click on Theatrical Insights sidemenu option",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.Theatrical.user_click_on_Theatrical_Insights_sidemenu_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Genre Incidence chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Theatrical.Genre_Incidence_chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of Genre Incidence chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.Theatrical.take_screenshot_of_Genre_Incidence_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Distribution of Segmentation by Genre Chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Theatrical.Distribution_of_Segmentation_by_Genre_Chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of Distribution of Segmentation by Genre chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.Theatrical.take_screenshot_of_Distribution_of_Segmentation_by_Genre_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Production Company Insights chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Theatrical.Production_Company_Insights_chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of Production Company Insights",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.Theatrical.take_screenshot_of_Production_Company_Insights()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/8Social.feature");
formatter.feature({
  "name": "Check all charts are loading properly in Social",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.scenario({
  "name": "Verify that charts in Social Summary Insights are loading properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Sanity"
    },
    {
      "name": "@Social"
    },
    {
      "name": "@SocialSummaryInsights"
    }
  ]
});
formatter.step({
  "name": "user click on Social Card",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.Social.user_click_on_Social_Card()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to Social Screen",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Social.user_navigates_to_Social_Screen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Social Brand Level Insights chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Social.Social_Brand_Level_Insights_chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of Social Brand Level Insights chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.Social.take_screenshot_of_Social_Brand_Level_Insights_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Sponsorship Trends chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Social.Sponsorship_Trends_chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of Sponsorship Trends chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.Social.take_screenshot_of_Sponsorship_Trends_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Social Relative Exposure Summary chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Social.Social_Relative_Exposure_Summary_chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of Social Relative Exposure Summary chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.Social.take_screenshot_of_Social_Relative_Exposure_Summary_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that charts in Social Brand Deep Dive are loading properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Sanity"
    },
    {
      "name": "@Social"
    },
    {
      "name": "@SocialBrandDeepDive"
    }
  ]
});
formatter.step({
  "name": "user click on Social Brand Deep Dive sidemenu option",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.Social.user_click_on_Social_Brand_Deep_Dive_sidemenu_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Social Brand Deep Dive Chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Social.Social_Brand_Deep_Dive_Chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of Brand Deep Dive Chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.Social.take_screenshot_of_Brand_Deep_Dive_Chart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that charts in Social Platform Wide Insights are loading properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Sanity"
    },
    {
      "name": "@Social"
    },
    {
      "name": "@SocialPlatformWideInsights"
    }
  ]
});
formatter.step({
  "name": "user click on Social Platform Wide Insights sidemenu option",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.Social.user_click_on_Social_Platform_Wide_Insights_sidemenu_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Social Platform Wide Insights chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Social.Social_Platform_Wide_Insights_chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of Social Platform Wide Insights chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.Social.take_screenshot_of_Social_Platform_Wide_Insights_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/90NationalTVAdIntelligence.feature");
formatter.feature({
  "name": "Check all the charts are loading properly in National TV Ad Intelligence Chart",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.scenario({
  "name": "Verify that National TV Ad Intelligence Summary Metrics chart is loading properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Sanity"
    },
    {
      "name": "@AdIntelligence"
    },
    {
      "name": "@NationalTV"
    },
    {
      "name": "@NationalTVSummaryMetrics"
    }
  ]
});
formatter.step({
  "name": "user click on National TV Ad Intelligence card",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.NationalTVAdIntelligence.user_click_on_National_TV_Ad_Intelligence_card()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to National TV Ad Intelligence screen",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NationalTVAdIntelligence.user_navigates_to_National_TV_Ad_Intelligence_screen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Share of voice by brand chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NationalTVAdIntelligence.Share_of_voice_by_brand_chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of Share of voice by brand chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.NationalTVAdIntelligence.take_screenshot_of_Share_of_voice_by_brand_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Share of TV Estimated Spend by Network",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NationalTVAdIntelligence.Share_of_TV_Estimated_Spend_by_Network()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of Share of TV Estimated Spend by Network chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.NationalTVAdIntelligence.take_screenshot_of_Share_of_TV_Estimated_Spend_by_Network_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Share of TV Estimated Spend by Program chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NationalTVAdIntelligence.Share_of_TV_Estimated_Spend_by_Program_chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of TV Estimated Spend by Program chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.NationalTVAdIntelligence.take_screenshot_of_TV_Estimated_Spend_by_Program_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that National TV Ad Intelligence Delivery Trends chart is loading properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Sanity"
    },
    {
      "name": "@AdIntelligence"
    },
    {
      "name": "@NationalTV"
    },
    {
      "name": "@NationalTVDeliveryTrends"
    }
  ]
});
formatter.step({
  "name": "user click on National TV Ad Intelligence Delivery Trends sidemenu option",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.NationalTVAdIntelligence.user_click_on_National_TV_Ad_Intelligence_Delivery_Trends_sidemenu_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Overall Delivery Trends chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NationalTVAdIntelligence.Overall_Delivery_Trends_chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of Overall delivery trends chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.NationalTVAdIntelligence.take_screenshot_of_Overall_delivery_trends_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Brand Delivery by Network chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NationalTVAdIntelligence.Brand_Delivery_by_Network_chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of NationalTV Ad Intelligence Brand Delivery by Network chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.NationalTVAdIntelligence.take_screenshot_of_NationalTV_Ad_Intelligence_Brand_Delivery_by_Network_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that National TV Ad Intelligence Mix Benchmarks chart is loading properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Sanity"
    },
    {
      "name": "@AdIntelligence"
    },
    {
      "name": "@NationalTV"
    },
    {
      "name": "@NationalTVMixBenchmarks"
    }
  ]
});
formatter.step({
  "name": "user click on Mix Benchmarks sidemenu option",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.NationalTVAdIntelligence.user_click_on_Mix_Benchmarks_sidemenu_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Distribution by TV Estimated Spend by Network Type chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NationalTVAdIntelligence.Distribution_by_TV_Estimated_Spend_by_Network_Type_chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of TV Estimated Spend by Network Type chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.NationalTVAdIntelligence.take_screenshot_of_TV_Estimated_Spend_by_Network_Type_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/91CrossPlatformAdIntelligence.feature");
formatter.feature({
  "name": "Check all the charts are loading properly in Cross Platform Ad Intelligence Chart",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.scenario({
  "name": "Verify that Cross Platform Share of Voice by Brand chart is loading properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Sanity"
    },
    {
      "name": "@AdIntelligence"
    },
    {
      "name": "@CrossPlatform"
    },
    {
      "name": "@CrossShareOfVoiceByBrand"
    }
  ]
});
formatter.step({
  "name": "user click on Cross Platform Ad Intelligence Card",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.user_click_on_Cross_Platform_Ad_Intelligence_Card()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to Cross Platform Ad Intelligence Screen",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.user_navigates_to_Cross_Platform_Ad_Intelligence_Screen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Share of Voice by Brand chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.Share_of_Voice_by_Brand_chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of Share of Voice by Brand chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.take_screenshot_of_Share_of_Voice_by_Brand_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Share of Voice by Brand Owner",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.user_click_on_Share_of_Voice_by_Brand_Owner()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Share of Voice by Brand Owner chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.Share_of_Voice_by_Brand_Owner_chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of Share of Voice by Brand Owner chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.take_screenshot_of_Share_of_Voice_by_Brand_Owner_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that Cross Platform Indexed Spend by Channel chart is loading is properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Sanity"
    },
    {
      "name": "@AdIntelligence"
    },
    {
      "name": "@CrossPlatform"
    },
    {
      "name": "@CrossIndexedbyChannel"
    }
  ]
});
formatter.step({
  "name": "user scroll down to Indexed Spend by Channel section",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.user_scroll_down_to_Indexed_Spend_by_Channel_section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Indexed Spend by Channel chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.Indexed_Spend_by_Channel_chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of Indexed Spend by Channel chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.take_screenshot_of_Indexed_Spend_by_Channel_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Indexed Spend by Brand Owner",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.user_click_on_Indexed_Spend_by_Brand_Owner()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Indexed Spend by Brand Owner chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.Indexed_Spend_by_Brand_Owner_chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of Indexed Spend by Brand Owner chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.take_screenshot_of_Indexed_Spend_by_Brand_Owner_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that Cross Platform Indexed Spend Matrix by Channel chart is loading properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Sanity"
    },
    {
      "name": "@AdIntelligence"
    },
    {
      "name": "@CrossPlatform"
    },
    {
      "name": "@CrossIndexedSpendMatrixbyChannel"
    }
  ]
});
formatter.step({
  "name": "user scroll down to Indexed Spend Matrix by Channel section",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.user_scroll_down_to_Indexed_Spend_Matrix_by_Channel_section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Indexed Spend Matrix by Channel chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.Indexed_Spend_Matrix_by_Channel_chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of Indexed Spend Matrix by Channel chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.take_screenshot_of_Indexed_Spend_Matrix_by_Channel_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Indexed Spend Matrix by Brand Owner",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.user_click_on_Indexed_Spend_Matrix_by_Brand_Owner()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Indexed Spend Matrix by Brand Owner chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.Indexed_Spend_Matrix_by_Brand_Owner_chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of Indexed Spend Matrix by Brand Onwer chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.take_screenshot_of_Indexed_Spend_Matrix_by_Brand_Onwer_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that Cross Platform Commercial Mix chart is loading properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Sanity"
    },
    {
      "name": "@AdIntelligence"
    },
    {
      "name": "@CrossPlatform"
    },
    {
      "name": "@CrossCommercialMix"
    }
  ]
});
formatter.step({
  "name": "user click on Commercial Mix sidemenu option",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.user_click_on_Commercial_Mix_sidemenu_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Distribution of Estimated Spend by CrossPlatform Ad Format chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.Distribution_of_Estimated_Spend_by_CrossPlatform_Ad_Format_chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of Distribution of Estimated Spend by CrossPlatform Ad Format chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.take_screenshot_of_Distribution_of_Estimated_Spend_by_CrossPlatform_Ad_Format_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Distribution of Estimated Spend by CrossPlatform Ad Format Brand Owner",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.user_click_on_Distribution_of_Estimated_Spend_by_CrossPlatform_Ad_Format_Brand_Owner()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Distribution of Estimated Spend by CrossPlatform Ad Format Brand Owner chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.Distribution_of_Estimated_Spend_by_CrossPlatform_Ad_Format_Brand_Owner_chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of Distribution of Estimated Spend by CrossPlatform Ad Format Brand Owner chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.take_screenshot_of_Distribution_of_Estimated_Spend_by_CrossPlatform_Ad_Format_Brand_Owner_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that Cross Platform Delivery Trend Charts are loading properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Sanity"
    },
    {
      "name": "@AdIntelligence"
    },
    {
      "name": "@CrossPlatform"
    },
    {
      "name": "@CrossDeliveryTrends"
    }
  ]
});
formatter.step({
  "name": "user click on Cross Delivery Trends sidemenu option",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.user_click_on_Cross_Delivery_Trends_sidemenu_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Indexed Delivery Trends by Media Channel chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.Indexed_Delivery_Trends_by_Media_Channel_chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of Indexed Delivery Trends by Media Channel chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.take_screenshot_of_Indexed_Delivery_Trends_by_Media_Channel_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Indexed Delivery Trends by Media Channel Brand Owner",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.user_click_on_Indexed_Delivery_Trends_by_Media_Channel_Brand_Owner()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Indexed Delivery Trends by Media Channel Brand Owner chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.Indexed_Delivery_Trends_by_Media_Channel_Brand_Owner_chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of Indexed Delivery Trends by Media Channel Brand Owner chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.take_screenshot_of_Indexed_Delivery_Trends_by_Media_Channel_Brand_Owner_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user scroll down to Cross Share of Daily TV Spend chart",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.user_scroll_down_to_Cross_Share_of_Daily_TV_Spend_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Cross Share of Daily TV Spend chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.Cross_Share_of_Daily_TV_Spend_chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of Cross Share of Daily TV Spend chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.take_screenshot_of_Cross_Share_of_Daily_TV_Spend_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Daily TV Spend Brand Owner",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.user_click_on_Daily_TV_Spend_Brand_Owner()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Daily TV Spend Brand Owner chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.Daily_TV_Spend_Brand_Owner_chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of Daily TV Spend Brand Owner chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.take_screenshot_of_Daily_TV_Spend_Brand_Owner_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user scroll down to Cross Segment Delivery Trends chart",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.user_scroll_down_to_Cross_Segment_Delivery_Trends_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Cross Segment Delivery Trends chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.Cross_Segment_Delivery_Trends_chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of Cross Segment Delivery Trends chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.take_screenshot_of_Cross_Segment_Delivery_Trends_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Cross Segment Delivery Trends Brand Owner",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.user_click_on_Cross_Segment_Delivery_Trends_Brand_Owner()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Cross Segment Delivery Trends Brand Owner chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.Cross_Segment_Delivery_Trends_Brand_Owner_chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of Cross Segment Delivery Trends Brand Owner chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.take_screenshot_of_Cross_Segment_Delivery_Trends_Brand_Owner_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/92NationalTVECPM.feature");
formatter.feature({
  "name": "Check all the charts are loading properly in National TV ecpm Chart",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.scenario({
  "name": "Verify that all charts in National TV eCPM market benchmark are loading properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Sanity"
    },
    {
      "name": "@AdIntelligence"
    },
    {
      "name": "@ecpm"
    },
    {
      "name": "@marketbenchmark"
    }
  ]
});
formatter.step({
  "name": "user click on National TV eCPM card",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.eCPM.user_click_on_National_TV_eCPM_card()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigated to National TV eCPM screen",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.eCPM.user_navigated_to_National_TV_eCPM_screen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eCPM by Network Type chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.eCPM.eCPM_by_Network_Type_chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user take screenshot of eCPM by Network Type chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.eCPM.user_take_screenshot_of_eCPM_by_Network_Type_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "scroll to eCPM Trends by Network Type",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.eCPM.scroll_to_eCPM_Trends_by_Network_Type()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eCPM Trends by Network Type chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.eCPM.eCPM_Trends_by_Network_Type_chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of eCPM Trends by Network Type",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.eCPM.take_screenshot_of_eCPM_Trends_by_Network_Type()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "scroll to eCPM YoY Trends by Network Type",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.eCPM.scroll_to_eCPM_YoY_Trends_by_Network_Type()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eCPM YoY Trends by Network Type chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.eCPM.eCPM_YoY_Trends_by_Network_Type_chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of eCPM YoY Trends by Network Type chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.eCPM.take_screenshot_of_eCPM_YoY_Trends_by_Network_Type_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "scroll to eCPM Percentage Change by Network Type",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.eCPM.scroll_to_eCPM_Percentage_Change_by_Network_Type()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eCPM Percentage Change by Network Type chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.eCPM.eCPM_Percentage_Change_by_Network_Type_chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of eCPM Percentage Change by Network Type chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.eCPM.take_screenshot_of_eCPM_Percentage_Change_by_Network_Type_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that all charts in National TV eCPM Network Benchmark are loading properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Sanity"
    },
    {
      "name": "@AdIntelligence"
    },
    {
      "name": "@eCPM"
    },
    {
      "name": "@NetworkBenchmark"
    }
  ]
});
formatter.step({
  "name": "user click on Network Benchmark sidemenu option",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.eCPM.user_click_on_Network_Benchmark_sidemenu_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eCPM by Network chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.eCPM.eCPM_by_Network_chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of eCPM by Network",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.eCPM.take_screenshot_of_eCPM_by_Network()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "scroll down to eCPM by Network and Daypart",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.eCPM.scroll_down_to_eCPM_by_Network_and_Daypart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eCPM by Network and Daypart chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.eCPM.eCPM_by_Network_and_Daypart_chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of eCPM by Network and Daypart chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.eCPM.take_screenshot_of_eCPM_by_Network_and_Daypart_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "scroll down to eCPM by Network and Genre",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.eCPM.scroll_down_to_eCPM_by_Network_and_Genre()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eCPM by Network and Genre chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.eCPM.eCPM_by_Network_and_Genre_chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of eCPM by Network and Genre chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.eCPM.take_screenshot_of_eCPM_by_Network_and_Genre_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that all charts in National TV eCPM Audience Benchmark are loading properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Sanity"
    },
    {
      "name": "@AdIntelligence"
    },
    {
      "name": "@eCPM"
    },
    {
      "name": "@AudienceBenchmark"
    }
  ]
});
formatter.step({
  "name": "user click on Audience Benchmark sidemenu option",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.eCPM.user_click_on_Audience_Benchmark_sidemenu_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Network eCPM vs Audience Index chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.eCPM.Network_eCPM_vs_Audience_Index_chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of Network eCPM vs Audience Index chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.eCPM.take_screenshot_of_Network_eCPM_vs_Audience_Index_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "scroll down to eCPM by Network and Audience",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.eCPM.scroll_down_to_eCPM_by_Network_and_Audience()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eCPM by Network and Audience chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.eCPM.eCPM_by_Network_and_Audience_chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of eCPM by Network and Audience chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.eCPM.take_screenshot_of_eCPM_by_Network_and_Audience_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that all charts in National TV eCPM Audience Efficiency are loading properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Sanity"
    },
    {
      "name": "@AdIntelligence"
    },
    {
      "name": "@eCPM"
    },
    {
      "name": "@AudienceEfficiency"
    }
  ]
});
formatter.step({
  "name": "user click on Audience Efficiency sidemenu option",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.eCPM.user_click_on_Audience_Efficiency_sidemenu_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Audience Index by Network chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.eCPM.Audience_Index_by_Network_chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of Audience Index by Network chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.eCPM.take_screenshot_of_Audience_Index_by_Network_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/93CreativeExplorer.feature");
formatter.feature({
  "name": "Check all the creatives are loading properly in Creative Explorer",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@CR"
    }
  ]
});
formatter.scenario({
  "name": "Verify that Creative Explorer is loading properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@CR"
    },
    {
      "name": "@CreativeExplorer"
    }
  ]
});
formatter.step({
  "name": "user click on Creative Explorer button on home screen",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.Step.user_click_on_Creative_Explorer_button_on_home_screen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "discover creatives screen gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Step.discover_creatives_screen_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on a Creative from the list",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Step.user_click_on_a_Creative_from_the_list()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the video is played",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Step.the_video_is_played()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user takes screenshot",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.Step.user_takes_screenshot()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/94NBCU.feature");
formatter.feature({
  "name": "Check all the charts in NBCU Custom Module",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@NBCU"
    }
  ]
});
formatter.scenario({
  "name": "Verify that NBCU Card is clickable and loads properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@NBCU"
    },
    {
      "name": "@NBCU"
    }
  ]
});
formatter.step({
  "name": "user click on NBCU card",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.NBCU.user_click_on_NBCU_card()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that NBCU Summary metrics charts loads properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@NBCU"
    }
  ]
});
formatter.step({
  "name": "Summary Reporting chart1",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NBCU.Summary_Reporting_chart1()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of the NBCU_Summary Metrics chart1",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.NBCU.take_screenshot_of_the_NBCU_Summary_Metrics_chart1()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Summary Reporting chart2",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NBCU.Summary_Reporting_chart2()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of the NBCU_Summary Metrics chart2",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.NBCU.take_screenshot_of_the_NBCU_Summary_Metrics_chart2()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that NBCU Visual Exposure By Brand chart loads properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@NBCU"
    }
  ]
});
formatter.step({
  "name": "user choose brand",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NBCU.user_choose_brand()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user choose date",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NBCU.user_choose_date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "NBCU Visual By Brand Chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NBCU.NBCU_Visual_By_Brand_Chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of NBCU Visual By Brand chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.NBCU.take_screenshot_of_NBCU_Visual_By_Brand_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that NBCU Visual Exposure By Brand \u0026 Asset Type chart loads properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@NBCU"
    }
  ]
});
formatter.step({
  "name": "user click on By Brand and Asset type side menu option",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.NBCU.user_click_on_By_Brand_and_Asset_type_side_menu_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user choose Brand in By Brand and Asset type",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NBCU.user_choose_Brand_in_By_Brand_and_Asset_type()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user choose Date in By Brand and Asset type",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NBCU.user_choose_Date_in_By_Brand_and_Asset_type()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NBCU.user_click_on_Submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "By Brand and Asset type chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NBCU.By_Brand_and_Asset_type_chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of By Brand and Asset type chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.NBCU.take_screenshot_of_By_Brand_and_Asset_type_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that NBCU Visual Exposure By Program chart loads properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@NBCU"
    }
  ]
});
formatter.step({
  "name": "user click on NBCU Visual By Program sidemenu option",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.NBCU.user_click_on_NBCU_Visual_By_Program_sidemenu_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user choose date range for By Program",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NBCU.user_choose_date_range_for_By_Program()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user choose program and episode for By Program",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NBCU.user_choose_program_and_episode_for_By_Program()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on NBCU By Program Submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NBCU.user_click_on_NBCU_By_Program_Submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Visual By Program chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NBCU.Visual_By_Program_chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of NBCU Visual By Program chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.NBCU.take_screenshot_of_NBCU_Visual_By_Program_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that NBCU Visual Exposure By Program \u0026 Asset Type chart loads properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@NBCU"
    }
  ]
});
formatter.step({
  "name": "user click on NBCU Visual By Program and Asset type chart",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.NBCU.user_click_on_NBCU_Visual_By_Program_and_Asset_type_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user choose date range for By Program and Asset type",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NBCU.user_choose_date_range_for_By_Program_and_Asset_type()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user choose program and episode for By Program and Asset type chart",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NBCU.user_choose_program_and_episode_for_By_Program_and_Asset_type_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on By Program and Asset Submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NBCU.user_click_on_By_Program_and_Asset_Submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "NBCU By Program and Asset Type Chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NBCU.NBCU_By_Program_and_Asset_Type_Chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of NBCU By Program and Asset type chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.NBCU.take_screenshot_of_NBCU_By_Program_and_Asset_type_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that NBCU Visual Exposure By Occurrence chart loads properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@NBCU"
    }
  ]
});
formatter.step({
  "name": "user click on NBCU Visual By Occurrence sidemenu option",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.NBCU.user_click_on_NBCU_Visual_By_Occurrence_sidemenu_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user choose Brand for Visual By Occurrence",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NBCU.user_choose_Brand_for_Visual_By_Occurrence()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user choose date range for Visual By Occurrence",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NBCU.user_choose_date_range_for_Visual_By_Occurrence()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user choose program and episode for Visual By Occurrence",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NBCU.user_choose_program_and_episode_for_Visual_By_Occurrence()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Submit button for Visual By Occurrence",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NBCU.user_click_on_Submit_button_for_Visual_By_Occurrence()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "NBCU Visual By Occurrence chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NBCU.NBCU_Visual_By_Occurrence_chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of NBCU Visual By Occurrence chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.NBCU.take_screenshot_of_NBCU_Visual_By_Occurrence_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that NBCU Verbal Exposure By Brand chart loads properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@NBCU"
    }
  ]
});
formatter.step({
  "name": "NBCU Verbal bybrand chart",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.NBCU.NBCU_Verbal_bybrand_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of the NBCU Verbal bybrand chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.NBCU.take_screenshot_of_the_NBCU_Verbal_bybrand_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that NBCU Verbal Exposure By Program chart loads properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@NBCU"
    }
  ]
});
formatter.step({
  "name": "NBCU Verbal byprogram chart",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.NBCU.NBCU_Verbal_byprogram_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of the NBCU Verbal byprogram chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.NBCU.take_screenshot_of_the_NBCU_Verbal_byprogram_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that NBCU Verbal Exposure By Occurrence chart loads properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@NBCU"
    }
  ]
});
formatter.step({
  "name": "NBCU verbal occurrence chart",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NBCU.NBCU_verbal_occurrence_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of the NBCU verbal occurrence chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.NBCU.take_screenshot_of_the_NBCU_verbal_occurrence_chart()"
});
formatter.result({
  "status": "passed"
});
});
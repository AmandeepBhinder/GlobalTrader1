$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US101_AgentSellerwithValidCredentials.feature");
formatter.feature({
  "name": "US101 The system should allow Agent Seller registration with valid credentials",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@seller"
    }
  ]
});
formatter.scenarioOutline({
  "name": "TC01 The system should allow Agent Seller registration",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user select to Agent Seller page",
  "keyword": "When "
});
formatter.step({
  "name": "user enters company name \"\u003ccompanyname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enters company Mobile \"\u003ccompanymobile\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enter company address \"\u003ccompanyaddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enters the fullname \"\u003cfullname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enters the email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enter Sub Domain \"\u003csubdomain\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enter Mobile Number \"\u003cmobilenumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user select to country",
  "keyword": "When "
});
formatter.step({
  "name": "user enter to state \"\u003cstate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enter to city \"\u003ccity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enter to postal code \"\u003cpostalcode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Select to categories",
  "keyword": "When "
});
formatter.step({
  "name": "Enter to password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Click to Registration Button",
  "keyword": "And "
});
formatter.step({
  "name": "Verify to registration data",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "companyname",
        "companymobile",
        "companyaddress",
        "fullname",
        "email",
        "subdomain",
        "mobilenumber",
        "state",
        "city",
        "postalcode",
        "password"
      ]
    },
    {
      "cells": [
        "CoTrader",
        "8571112233",
        "12 New St.",
        "John Brown",
        "abc@gmail.com",
        "trader",
        "8571112233",
        "TX",
        "Austin",
        "01213",
        "123456"
      ]
    }
  ]
});
formatter.background({
  "name": "User is on the Global Trader page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user is on the Global Trader page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.AgentSellerStepDefinition.user_is_on_the_Global_Trader_page()"
});
formatter.result({
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class stepdefinitions.AgentSellerStepDefinition\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\r\n\t... 33 more\r\nCaused by: java.lang.NullPointerException\r\n\tat utilities.Driver.getDriver(Driver.java:27)\r\n\tat pages.AgentSellerPage.\u003cinit\u003e(AgentSellerPage.java:10)\r\n\tat stepdefinitions.AgentSellerStepDefinition.\u003cinit\u003e(AgentSellerStepDefinition.java:13)\r\n\t... 38 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user is on click Seller Join Now",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AgentSellerStepDefinition.user_is_on_click_Seller_Join_Now()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "TC01 The system should allow Agent Seller registration",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@seller"
    }
  ]
});
formatter.step({
  "name": "user select to Agent Seller page",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.AgentSellerStepDefinition.user_select_to_Agent_Seller_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters company name \"CoTrader\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.AgentSellerStepDefinition.user_enters_company_name(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters company Mobile \"8571112233\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AgentSellerStepDefinition.user_enters_company_Mobile(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter company address \"12 New St.\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AgentSellerStepDefinition.user_enter_company_address(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters the fullname \"John Brown\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.AgentSellerStepDefinition.user_enters_the_fullname(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters the email \"abc@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AgentSellerStepDefinition.user_enters_the_email(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter Sub Domain \"trader\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AgentSellerStepDefinition.user_enter_Sub_Domain(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter Mobile Number \"8571112233\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AgentSellerStepDefinition.user_enter_Mobile_Number(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user select to country",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.AgentSellerStepDefinition.user_select_to_country()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter to state \"TX\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AgentSellerStepDefinition.user_enter_to_state(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter to city \"Austin\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AgentSellerStepDefinition.user_enter_to_city(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter to postal code \"01213\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AgentSellerStepDefinition.user_enter_to_postal_code(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Select to categories",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.AgentSellerStepDefinition.select_to_categories()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter to password \"123456\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AgentSellerStepDefinition.enter_to_password(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click to Registration Button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AgentSellerStepDefinition.click_to_Registration_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify to registration data",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.AgentSellerStepDefinition.verify_to_registration_data()"
});
formatter.result({
  "status": "skipped"
});
});
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US108_Women_Accessories_and_Clothing.feature");
formatter.feature({
  "name": "US1008_user_should_buy_dresses",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@test11"
    }
  ]
});
formatter.scenario({
  "name": "TC01_User_should_have_account",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test11"
    }
  ]
});
formatter.step({
  "name": "user is on the globalTrader webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.GlobalTraderStepDefinitions.user_is_on_the_webpage()"
});
formatter.result({
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class stepdefinitions.GlobalTraderStepDefinitions\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\r\n\t... 33 more\r\nCaused by: java.lang.NullPointerException\r\n\tat utilities.Driver.getDriver(Driver.java:29)\r\n\tat pages.GlobalTraderPage.\u003cinit\u003e(GlobalTraderPage.java:10)\r\n\tat stepdefinitions.GlobalTraderStepDefinitions.\u003cinit\u003e(GlobalTraderStepDefinitions.java:12)\r\n\t... 38 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks on the women clothing and accessories",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GlobalTraderStepDefinitions.user_clicks_on_the_women_clothing_and_accessories()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on tassel dresses",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.GlobalTraderStepDefinitions.user_click_on_tassel_dresses()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on dresses",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.GlobalTraderStepDefinitions.user_click_on_dresses()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on buy now button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.GlobalTraderStepDefinitions.user_click_on_buy_now_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter username",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.GlobalTraderStepDefinitions.user_enter_username()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters password",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.GlobalTraderStepDefinitions.user_enters_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on login button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.GlobalTraderStepDefinitions.user_click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify the message",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.GlobalTraderStepDefinitions.verify_the_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "TC02_User_should_be_able_to_select_size_and_colour",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test11"
    }
  ]
});
formatter.step({
  "name": "user is on the globalTrader webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.GlobalTraderStepDefinitions.user_is_on_the_webpage()"
});
formatter.result({
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class stepdefinitions.GlobalTraderStepDefinitions\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\r\n\t... 33 more\r\nCaused by: java.lang.NullPointerException\r\n\tat utilities.Driver.getDriver(Driver.java:29)\r\n\tat pages.GlobalTraderPage.\u003cinit\u003e(GlobalTraderPage.java:10)\r\n\tat stepdefinitions.GlobalTraderStepDefinitions.\u003cinit\u003e(GlobalTraderStepDefinitions.java:12)\r\n\t... 38 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks on the women clothing and accessories",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GlobalTraderStepDefinitions.user_clicks_on_the_women_clothing_and_accessories()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on tassel dresses",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.GlobalTraderStepDefinitions.user_click_on_tassel_dresses()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on dresses",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.GlobalTraderStepDefinitions.user_click_on_dresses()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on size",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.GlobalTraderStepDefinitions.user_click_on_size()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on colour",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.GlobalTraderStepDefinitions.user_click_on_colour()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "TC01_User_should_be_able_to_add_to_cart",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test11"
    }
  ]
});
formatter.step({
  "name": "user is on the globalTrader webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.GlobalTraderStepDefinitions.user_is_on_the_webpage()"
});
formatter.result({
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class stepdefinitions.GlobalTraderStepDefinitions\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\r\n\t... 33 more\r\nCaused by: java.lang.NullPointerException\r\n\tat utilities.Driver.getDriver(Driver.java:29)\r\n\tat pages.GlobalTraderPage.\u003cinit\u003e(GlobalTraderPage.java:10)\r\n\tat stepdefinitions.GlobalTraderStepDefinitions.\u003cinit\u003e(GlobalTraderStepDefinitions.java:12)\r\n\t... 38 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks on the women clothing and accessories",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GlobalTraderStepDefinitions.user_clicks_on_the_women_clothing_and_accessories()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on tassel dresses",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.GlobalTraderStepDefinitions.user_click_on_tassel_dresses()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on dresses",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.GlobalTraderStepDefinitions.user_click_on_dresses()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on buy now button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.GlobalTraderStepDefinitions.user_click_on_buy_now_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter username",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.GlobalTraderStepDefinitions.user_enter_username()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters password",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.GlobalTraderStepDefinitions.user_enters_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on login button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.GlobalTraderStepDefinitions.user_click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on cart button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.GlobalTraderStepDefinitions.user_click_on_cart_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify buy now option",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.GlobalTraderStepDefinitions.verify_buy_now_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "TC01_User_should_not_be_able_to_buy_dresses",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test11"
    }
  ]
});
formatter.step({
  "name": "user is on the globalTrader webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.GlobalTraderStepDefinitions.user_is_on_the_webpage()"
});
formatter.result({
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class stepdefinitions.GlobalTraderStepDefinitions\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\r\n\t... 33 more\r\nCaused by: java.lang.NullPointerException\r\n\tat utilities.Driver.getDriver(Driver.java:29)\r\n\tat pages.GlobalTraderPage.\u003cinit\u003e(GlobalTraderPage.java:10)\r\n\tat stepdefinitions.GlobalTraderStepDefinitions.\u003cinit\u003e(GlobalTraderStepDefinitions.java:12)\r\n\t... 38 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks on the women clothing and accessories",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GlobalTraderStepDefinitions.user_clicks_on_the_women_clothing_and_accessories()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on tassel dresses",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.GlobalTraderStepDefinitions.user_click_on_tassel_dresses()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on dresses",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.GlobalTraderStepDefinitions.user_click_on_dresses()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on buy now button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.GlobalTraderStepDefinitions.user_click_on_buy_now_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify sign in message",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.GlobalTraderStepDefinitions.verify_sign_in_message()"
});
formatter.result({
  "status": "skipped"
});
});
package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pages.GlobalTraderPage;
import utilities.ConfigReader;
import utilities.Driver;

public class GlobalTraderStepDefinitions {

        GlobalTraderPage globalTraderPage = new GlobalTraderPage();

        @Given("user is on the globalTrader webpage")
        public void user_is_on_the_webpage() {
            Driver.getDriver().get(ConfigReader.getProperty("global_trader_url"));
        }

        @Given("user clicks on the women clothing and accessories")
        public void user_clicks_on_the_women_clothing_and_accessories() {
            globalTraderPage.womenClothingAndAccessories.click();
        }


        @When("user click on buy now button")
        public void user_click_on_buy_now_button() {
            globalTraderPage.buyNow.click();
        }

        @When("user enter username")
        public void user_enter_username() {
            globalTraderPage.email.sendKeys("amanbhinder635@gmail.com");
        }

        @When("user enters password")
        public void user_enters_password() {
            globalTraderPage.password.sendKeys("Amandeep@0060");

        }

        @Then("verify the message")
        public void verify_the_message() {
            globalTraderPage.message.isDisplayed();
        }

        @When("user click on tassel dresses")
        public void user_click_on_tassel_dresses() {
            globalTraderPage.tasselDresses.click();

        }

        @When("user click on dresses")
        public void user_click_on_dresses() {
            globalTraderPage.dress.click();
            ;
        }

        @When("user click on login button")
        public void user_click_on_login_button() {
            globalTraderPage.loginButton.click();

        }

        @When("user click on size")
        public void user_click_on_size() {
            globalTraderPage.size.click();
        }

        @When("user click on colour")
        public void user_click_on_colour() {
            globalTraderPage.colour.click();
        }

        @When("user click on Add to cart")
        public void user_click_on_Add_to_cart() {
            globalTraderPage.addToCart.click();
        }

        @Then("verify the buy now option")
        public void verify_the_buy_now_option() {
            globalTraderPage.buyNowOption.isDisplayed();
        }

        @When("user click on cart button")
        public void user_click_on_cart_button() {
            globalTraderPage.cartButton.click();
        }

        @Then("verify buy now option")
        public void verify_buy_now_option() {
            globalTraderPage.buyNowOption1.isDisplayed();

        }
        @Then("verify sign in message")
        public void verify_sign_in_message() {
            globalTraderPage.signInMessage.isDisplayed();
        }
    }


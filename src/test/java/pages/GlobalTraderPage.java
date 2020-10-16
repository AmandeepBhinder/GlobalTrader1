package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class GlobalTraderPage {

        public  GlobalTraderPage(){ PageFactory.initElements(Driver.getDriver(),this);
        }
        @FindBy(xpath = "(//span[@class='icon_widh'])[2]")
        public WebElement womenClothingAndAccessories;
        @FindBy(linkText ="Tassels Dresses")
        public WebElement tasselDresses;
        @FindBy(className = "img-box")
        public WebElement dress;
        @FindBy(id = "cart")
        public WebElement buyNow;
        @FindBy(id = "email")
        public WebElement email;
        @FindBy(id = "password")
        public WebElement password;
        @FindBy(xpath = "//button[@name='submit']")
        public WebElement loginButton;
        @FindBy(linkText = "Buy Now")
        public WebElement buyNowButton;
        @FindBy(xpath = "//i[@class='fa fa-shopping-cart fa-2x")
        public WebElement cart;
        @FindBy(linkText = "Welcome Amandeep Kaur")
        public WebElement message;
        @FindBy(tagName = "a")
        public WebElement size;
        @FindBy(xpath = "//img[@title='Black']")
        public WebElement colour;
        @FindBy(xpath ="//input[@type='submit']")
        public WebElement addToCart;
        @FindBy(xpath = "//a[@class='btn btn-warning']")
        public WebElement buyNowOption;
        @FindBy(xpath = "//span[@class='badge fix_badge']")
        public WebElement cartButton;
        @FindBy(xpath = "//a[@class='btn btn-warning']")
        public WebElement buyNowOption1;
        @FindBy(tagName = "h3")
        public WebElement signInMessage;
    }


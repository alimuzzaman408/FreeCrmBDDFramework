package stepDefination;

import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

//Data table with maps---Parameterization of test cases
public class DealstepwithMapDefination {
	WebDriver driver;

	@Given("^User is already on LoginPage$")
	public void User_is_already_on_LoginPage() {
		System.setProperty("webdriver.chrome.driver", "C:\\gecko&chrome driver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();

		driver.get("https://classic.crmpro.com/index.html");
	}

	@When("^tile of loginPage is FreeCRM$")
	public void tile_of_loginPage_is_FreeCRM() {
		String title = driver.getTitle();
		System.out.println("LoginPage title is:: " + title);
		Assert.assertEquals("CRMPRO - CRM software for customer relationship management, sales, and support.", title);

	}

	@Then("^User enters username and password$")
	public void user_enters_username_and_password(DataTable credentials) {
		for (Map<String, String> data : credentials.asMaps(String.class, String.class)) {
			driver.findElement(By.name("username")).sendKeys(data.get("username"));
			driver.findElement(By.name("password")).sendKeys(data.get("password"));
		}
	}

	@Then("^user click on login btn$")
	public void user_click_on_login_btn() {
		WebElement loginBtn = driver.findElement(By.xpath("//input[@type='submit']"));
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click();", loginBtn);

	}

	@Then("^user is on homepage$")
	public void user_is_on_homepage() {

		String title = driver.getTitle();
		System.out.println("HomePage title is:: " + title);
		Assert.assertEquals("CRMPRO", title);

	}

	@Then("^user click on new deallink$")
	public void user_click_on_new_deallink() {
		driver.switchTo().frame("mainpanel");
		WebElement dealsLink = driver.findElement(By.xpath("//a[contains(text(),'Deals')]"));
		Actions action = new Actions(driver);
		action.moveToElement(dealsLink).build().perform();
		driver.findElement(By.xpath("//a[contains(text(),'New Deal')]")).click();

	}

	@Then("^user enters deal deatails$")
	public void user_enters_contact_deatails_and_and(DataTable dealdata) {
		for (Map<String, String> data : dealdata.asMaps(String.class, String.class)) {
			driver.findElement(By.id("title")).sendKeys(data.get("title"));
			driver.findElement(By.id("amount")).sendKeys(data.get("amount"));
			driver.findElement(By.id("probability")).sendKeys(data.get("probability"));
			driver.findElement(By.id("commission")).sendKeys(data.get("comission"));
			driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click();

			//move to new deal page
			WebElement dealsLink = driver.findElement(By.xpath("//a[contains(text(),'Deals')]"));
			Actions action = new Actions(driver);
			action.moveToElement(dealsLink).build().perform();
			driver.findElement(By.xpath("//a[contains(text(),'New Deal')]")).click();
		}

	}

	@Then("^close the browser$")
	public void close_the_browser() {
		driver.quit();

	}

}

//package stepDefination;
//
//import org.openqa.selenium.By;
//import org.openqa.selenium.JavascriptExecutor;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.WebElement;
//import org.openqa.selenium.chrome.ChromeDriver;
//import org.openqa.selenium.interactions.Actions;
//
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;
//import junit.framework.Assert;
//
//public class LoginStepDefination {
//
//	WebDriver driver;
//
//	@Given("^User is already on LoginPage$")
//	public void User_is_already_on_LoginPage(){
//		System.setProperty("webdriver.chrome.driver", "C:\\gecko&chrome driver\\chromedriver.exe");
//		driver=new ChromeDriver();
//		driver.get("https://classic.crmpro.com/index.html");
//	}
//
//	@When("^tile of loginPage is FreeCRM$")
//	public void tile_of_loginPage_is_FreeCRM(){
//		String title=driver.getTitle();
//		System.out.println("LoginPage title is:: "+title);
//		Assert.assertEquals("CRMPRO - CRM software for customer relationship management, sales, and support.", title);
//
//
//	}
//
//	@Then("^User enters \"(.*)\" and \"(.*)\"$")
//	public void user_enters_username_and_password(String username,String password){
//		driver.findElement(By.name("username")).sendKeys(username);
//		driver.findElement(By.name("password")).sendKeys(password);
//
//
//	}
//
//	@Then("^user click on login btn$")
//	public void user_click_on_login_btn(){
//		WebElement loginBtn=driver.findElement(By.xpath("//input[@type='submit']"));
//		JavascriptExecutor js = (JavascriptExecutor)driver;
//		js.executeScript("arguments[0].click();", loginBtn);
//		//js.executeScript("arguments[0].click();", loginBtn);
//
//
//	}
//
//	@Then("^user is on homepage$")
//	public void user_is_on_homepage(){
//
//		String title=driver.getTitle();
//		System.out.println("HomePage title is:: "+title);
//		Assert.assertEquals("CRMPRO", title);
//
//	}
//	@Then("^user click on new contactlink$")
//	public void user_click_on_new_contactlink(){
//		driver.switchTo().frame("mainpanel");
//		WebElement contactsLink = driver.findElement(By.xpath("//a[contains(text(),'Contacts')]"));
//		Actions action = new Actions(driver);
//		action.moveToElement(contactsLink).build().perform();
//		driver.findElement(By.xpath("//a[contains(text(),'New Contact')]")).click();
//
//
//
//	}
//
//	@Then("^user enters contact deatails \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
//	public void user_enters_contact_deatails_and_and(String firstname, String lastname, String position) {
//		driver.findElement(By.id("first_name")).sendKeys(firstname);
//		driver.findElement(By.id("surname")).sendKeys(lastname);
//		driver.findElement(By.id("company_position")).sendKeys(position);
//
//
//	}
//
//	@Then("^click on save btn$")
//	public void click_on_save_btn() {
//		driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click();
//
//	}
//
//
//	@Then("^close the browser$")
//	public void close_the_browser(){
//		driver.quit();
//
//	}
//
//
//
//}

// package stepDefination;
//
// import java.util.List;
//
// import org.openqa.selenium.By;
// import org.openqa.selenium.JavascriptExecutor;
// import org.openqa.selenium.WebDriver;
// import org.openqa.selenium.WebElement;
// import org.openqa.selenium.chrome.ChromeDriver;
// import org.openqa.selenium.interactions.Actions;
//
// import cucumber.api.DataTable;
// import cucumber.api.java.en.Given;
// import cucumber.api.java.en.Then;
// import cucumber.api.java.en.When;
// import junit.framework.Assert;
//
// public class DealStepDefination {
//
//
// WebDriver driver;
//
// @Given("^User is already on LoginPage$")
// public void User_is_already_on_LoginPage(){
// System.setProperty("webdriver.chrome.driver", "C:\\gecko&chrome
// driver\\chromedriver.exe");
// driver=new ChromeDriver();
// driver.get("https://classic.crmpro.com/index.html");
// }
//
// @When("^tile of loginPage is FreeCRM$")
// public void tile_of_loginPage_is_FreeCRM(){
// String title=driver.getTitle();
// System.out.println("LoginPage title is:: "+title);
// Assert.assertEquals("CRMPRO - CRM software for customer relationship
// management, sales, and support.", title);
//
//
// }
//
// @Then("^User enters username and password$")
// public void user_enters_username_and_password(DataTable credentials){
// List<List<String>> data=credentials.raw();
// driver.findElement(By.name("username")).sendKeys(data.get(0).get(0));
// driver.findElement(By.name("password")).sendKeys(data.get(0).get(1));
//
//
// }
//
// @Then("^user click on login btn$")
// public void user_click_on_login_btn(){
// WebElement loginBtn=driver.findElement(By.xpath("//input[@type='submit']"));
// JavascriptExecutor js = (JavascriptExecutor)driver;
// js.executeScript("arguments[0].click();", loginBtn);
//
//
// }
//
// @Then("^user is on homepage$")
// public void user_is_on_homepage(){
//
// String title=driver.getTitle();
// System.out.println("HomePage title is:: "+title);
// Assert.assertEquals("CRMPRO", title);
//
// }
// @Then("^user click on new deallink$")
// public void user_click_on_new_deallink(){
// driver.switchTo().frame("mainpanel");
// WebElement contactsLink =
// driver.findElement(By.xpath("//a[contains(text(),'Deals')]"));
// Actions action = new Actions(driver);
// action.moveToElement(contactsLink).build().perform();
// driver.findElement(By.xpath("//a[contains(text(),'New Deal')]")).click();
//
//
//
// }
//
// @Then("^user enters deal deatails$")
// public void user_enters_contact_deatails_and_and(DataTable dealdata) {
// List<List<String>>dealvalue=dealdata.raw();
// driver.findElement(By.id("title")).sendKeys(dealvalue.get(0).get(0));
// driver.findElement(By.id("amount")).sendKeys(dealvalue.get(0).get(1));
// driver.findElement(By.id("probability")).sendKeys(dealvalue.get(0).get(2));
// driver.findElement(By.id("commission")).sendKeys(dealvalue.get(0).get(3));
// driver.findElement(By.xpath("//input[@type='submit' and
// @value='Save']")).click();
//
// }
//
//
//
// @Then("^close the browser$")
// public void close_the_browser(){
// driver.quit();
//
// }
//
//
//
//
// }

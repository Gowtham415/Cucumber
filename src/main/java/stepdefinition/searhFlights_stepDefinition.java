package stepdefinition;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class searhFlights_stepDefinition {
	
	protected WebDriver driver;
	protected WebDriverWait driverWait;
	public String baseURL ="https://www.expedia.co.in/";
	public Actions action;
	public JavascriptExecutor jsExec;
	String title;
	
	@Given("^Launch Chrome browser$")
	public void launchChromeBrowser() {
		System.setProperty("webdriver.chrome.driver", "D:\\Softwares\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
	}
	
	@Given("^Launch the website$")
	public void launchSite() {
		driver.get(baseURL);
	}
	
	@When("^Get the title$")
	public void getTitleofSite() {
		title = driver.getTitle();
		System.out.println(title);
	}
	@Then("^validate the title$")
	public void validateTitle() {
		Assert.assertEquals("Expedia Travel: Vacations, Cheap Flights, Airline Tickets & Airfares", title);
	}
	

}

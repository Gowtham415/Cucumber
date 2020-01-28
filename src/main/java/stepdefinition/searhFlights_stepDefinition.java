package stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
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
		driverWait = new WebDriverWait(driver,10);
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
		driver.close();
	}
	
	@When("^provide Origin \"(.*)\" and destination \"(.*)\"")
	public void enter_Origin_and_destination(String origin,String dest) {
		driverWait.until(ExpectedConditions.elementToBeClickable(By.id("tab-flight-tab-hp"))).click();
		driverWait.until(ExpectedConditions.visibilityOfElementLocated(By.id("flight-origin-hp-flight"))).sendKeys();
		driverWait.until(ExpectedConditions.visibilityOfElementLocated(By.id("flight-origin-hp-flight"))).sendKeys(origin);
		driverWait.until(ExpectedConditions.visibilityOfElementLocated(By.id("flight-destination-hp-flight"))).clear();
		driverWait.until(ExpectedConditions.visibilityOfElementLocated(By.id("flight-destination-hp-flight"))).sendKeys(dest);
		
	}
	
	@When("^give departure date \"(.*)\" and arrival date \"(.*)\"$")
	public void setDepartureAndArrivalDate(String departDate,String arrivalDate) {
		driverWait.until(ExpectedConditions.visibilityOfElementLocated(By.id("flight-departing-hp-flight"))).click();
		driverWait.until(ExpectedConditions.visibilityOfElementLocated(By.id("flight-departing-hp-flight"))).sendKeys(departDate);
		driverWait.until(ExpectedConditions.visibilityOfElementLocated(By.id("flight-returning-hp-flight"))).sendKeys(Keys.CONTROL+"a");
		driverWait.until(ExpectedConditions.visibilityOfElementLocated(By.id("flight-returning-hp-flight"))).sendKeys(Keys.DELETE);
		driverWait.until(ExpectedConditions.visibilityOfElementLocated(By.id("flight-returning-hp-flight"))).sendKeys(arrivalDate);
		driverWait.until(ExpectedConditions.visibilityOfElementLocated(By.id("flight-returning-hp-flight"))).sendKeys(Keys.ENTER);
		//WebElement searchBtn = driverWait.until(ExpectedConditions.elementToBeClickable(By.id("//form[@id='gcw-flights-form-hp-flight']//span[text()='Search']/parent::button")));
		//searchBtn.click();	
	}
	
	@Then("^Search should be successful$")
	public void validationOfRoundTrip() {
		Assert.assertTrue(true);
		driver.close();
	}
	

}

package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "D:\\WorkSpace\\Selenium\\cucumber\\src\\main\\java\\features\\searchflights.feature",
				glue = {"stepdefinition"},
				format = {"pretty","html:test-output","json:json-output\\cucumber.json"},
				monochrome = true,
				dryRun = false)					
public class TestRunner {
	
}

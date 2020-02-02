package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "D:\\WorkSpace\\Selenium\\cucumber\\src\\main\\java\\features\\", 
				glue = {"stepdefinition"}, 
				format = { "pretty", "html:test-output","json:json-output\\cucumber.json" },
				monochrome = true, 
				dryRun = false,
				tags = { "@SanityTests,@Regression" })
public class TestRunner {

}

// ~@Sanitytests to ignore any tag
// tags={"@Sanity,@Regression"} - to run all the tests which have Sanity OR Regression tests
//tags={"@Sanity,@Regression"} - to run all the tests which have both Sanity AND Regression tests
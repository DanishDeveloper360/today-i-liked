package __groupId__.runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@RunWith(Cucumber.class)
@CucumberOptions(monochrome = true, features = "src/test/features", plugin = {
			"json: cucumber_output/cucumber.json" }, glue = "src/test/java/__groupId__/step_definitions", tags = { "@TestingPage", "@functional" })
public class TestingFunctionalRunner extends AbstractTestNGCucumberTests {
}

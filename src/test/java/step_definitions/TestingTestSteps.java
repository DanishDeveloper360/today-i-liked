package __groupId__.step_definitions;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.testng.Assert;

import Browsers.Browser;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;
import pages.Page;
import support.CommonFunctions;
import support.TestProperties;

public class TestingTestSteps {
	private WebDriver driver = Browser.getBrowserInstance();
	private Page page = new Page();

	@Given("^<setup step>$")
	public void <setupStep>() {
    {
        assertTrue( true );
    }
}

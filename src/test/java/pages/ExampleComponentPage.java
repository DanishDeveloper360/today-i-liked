package __groupId__.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.testng.Assert;

import support.CommonFunctions;

public class ExampleComponentPage {
	private final WebDriver driver;
	
	public ExampleComponentPage(WebDriver driver) {
		this.driver = driver;
	}

	@FindBy(how = How.ID, using = "<element-id>")
	public WebElement <exampleElement>;

	public void <someActivity>() {
		CommonFunctions.waitForElementClickable(driver, <exampleElement>);
		<exampleElement>.<action>();
	}
    
}

package Runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;



@RunWith(Cucumber.class)
@CucumberOptions(
	features="C:/Eclipse Java/JavaWorkSpace/FreecrmBDDFramework/sr"
			+ "c/main/java/Features/contacts.feature",//Path of the feature file.
			
	glue={"stepDefination"},//Path of the step definition file
	
	monochrome=true,//display the console output in a proper readable format
	
	format={"pretty","html:test-output","junit:junit_xml/cucumber.xml"},//to generate different type report
	
	strict=true,//check if any step is not defined in the step definition file
	
	dryRun=false//is check mapping is proper between feature file and step definition file.
		
		)
public class TestRunner {

}

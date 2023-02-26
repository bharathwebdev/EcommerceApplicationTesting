# EcommerceApplicationTesting

<h1>E-commerce Application Test Cases using Selenium WebDriver and Mocha Testing Framework</h1>
This is a test suite for testing the E-commerce Application using Selenium WebDriver and Mocha Testing Framework.

<h2>Requirements</h2>
<ol>
<li>Node.js</li>
<li>Selenium WebDriver</li>
<li>Mocha Testing Framework</li>
</ol>

<h2>Installation</h2>
<ol>
<li>Clone the repository</li>
<h6>bash</h6>
Clone the repository
bash
<p>
https://github.com/username/repo-name.git</p>
<li>Install the dependencies</li>
<p>npm install</p>
<li>Install the Selenium WebDriver and ChromeDriver</li>
<p>npm install selenium-webdriver chromedriver --save-dev</p>
</ol>
<h2>How to Run the Tests</h2>
<ol>
<li>Navigate to the project directory in the terminal</li>
<p>cd project-directory</p>
<li>Run the tests</li>
<p>npm test</p>
<li>Run the tests in mocha </li>
<p>npx mocha --no-timeouts 'Tests/*.js'</p>
</ol>
<h2>Test Cases</h2>
<p>General Test Cases</p>
<ol>
<li>Should load the homepage of the application successfully</li>
<ul>
<li>Verifies if the page title matches with the expected title</li>
<li>Verifies if certain text is present on the page</li>
<li>Verifies if the website logo is visible on the page</li>
</ul>

</ol>
<p>Product Buy Flow Test Cases</p>
<ol>
<li>Opened browser and searched for the product</li>
<ul>
<li>Verifies if the product search was successful</li>
<li>Clicks on the desired product</li>
<li>Switches to the new window</li>
<li>Clicks on the 'Buy Now' button</li>
</ul>
</ol>
<p>User Registration Test Cases</p>
<ol>
<li>Test User Registration</li>
<ul>
<li>Test User Registration</li>
<li>Clicks on the 'Create Account' button</li>
<li>Enters the user details</li>
<li>Clicks on the 'Continue' button</li>
</ul>
</ol>
<h1>Conclusion</h1>
<p>These test cases are designed to test the E-commerce Application using Selenium WebDriver and Mocha Testing Framework. These tests can be run locally and integrated into a Continuous Integration/Continuous Deployment pipeline for automated testing.</p>











require("chromedriver");
const { Builder, By, Key } = require("selenium-webdriver");
const assert = require("assert");

describe("General Test Cases for Ecommerce Application", async function () {
  let driver = new Builder().forBrowser("chrome").build();

  it("Should load the homepage of the application successfully", async function () {
    // Navigate to the website homepage
    await driver.get("https://www.amazon.in/");

    // Verify that the page title is correct
    const pageTitle = await driver.getTitle();
    assert.equal(
      pageTitle,
      "Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in"
    );

    // Verify that the page content is correct
    const pageContent = await driver.findElement(By.tagName("body")).getText();
    assert.ok(pageContent.includes("Upgrade your home | Amazon Brands & more"));
    assert.ok(
      pageContent.includes(
        "Under ₹599 | Popular home & kitchen picks on a budget from local shops"
      )
    );

    // Verify that the website logo is visible on the page
    const logoImage = await driver.findElement(By.id("nav-logo-sprites"));
    const isDisplayed = await logoImage.isDisplayed();
    assert.ok(isDisplayed);
  });

  it("Opened browser searched the product", async function () {
    // navigate to our application

    const pageTitle = await driver.getTitle();

    console.log(pageTitle);

    //   await driver.quit();
    const searchBox = await driver
      .findElement(By.id("twotabsearchtextbox"))
      .sendKeys("Airpods", Key.RETURN);

    //   Click on the product link
    const productLink = await driver
      .findElement(
        By.xpath("//span[contains(text(),'Apple AirPods (2nd Generation)')]")
      )
      .click();

    // next;
    const pwid = await driver.getWindowHandle();
    const cwid = await driver.getAllWindowHandles();


    for (const windowId of cwid) {
      if (pwid !== windowId) {
        await driver.switchTo().window(windowId);
      }
    }

    const productbuy = await driver.findElement(
      By.xpath("//input[@id='buy-now-button']")
    );
    await productbuy.click();

    // await driver.sleep(2000);

    //  await driver.quit();
  });

  it("testUserRegistration", async function () {
    // await driver.sleep(2000);
    const createAccountButton = await driver.findElement(
      By.id("createAccountSubmit")
    );
    await createAccountButton.click();

    const nameInput = await driver.findElement(By.id("ap_customer_name"));
    await nameInput.sendKeys("Bharath");

    const phInput = await driver.findElement(By.id("ap_phone_number"));
    await phInput.sendKeys("0123456789");

    // const emailInput = await driver.findElement(By.id("ap_email"));
    // await emailInput.sendKeys("bharath@example.com");

    const passwordInput = await driver.findElement(By.id("ap_password"));
    await passwordInput.sendKeys("mypassword");

    const registerButton = await driver.findElement(By.id("continue"));
    await registerButton.click();
  });

  after(async function () {
    // Quit the WebDriver instance
    await driver.quit();
  });
});

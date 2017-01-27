load("pages/myhomepage.js");
//load("pages/mystructure.js");

beforeTest(function () {
	var browser = System.getProperty("browser");
	console.log(browser);
	var driver = createDriver("http://www.infobeans.com", "1866x1000", browser);
	session.put("driver", driver);
});

test("Test on a Desktop for homepage navigation to automationpage", function() {

	var browser = System.getProperty("browser");
	console.log(browser);
	var driver = session.get("driver");
	var homePage = new homepage(driver);
	homePage.toggleButton.click();
	var automationPage = new automationpage(driver);
	automationPage.menuAutomation.click();
	checkLayout(driver, "specs/auto.gspec", "desktop");

});

test("Test on a Desktop for homepage", function() {

	var driver = session.get("driver");
	checkLayout(driver, "specs/check_header.gspec", "desktop");

});

test("Test on a Desktop for homepage navigation to storage page", function() {

	var driver = session.get("driver");
	var homePage = new homepage(driver);
	homePage.toggleButton.click();
	var storagePage = new storagepage(driver);
	storagePage.menuStorage.click();
	checkLayout(driver, "specs/storage.gspec", "desktop");

});

test("Test on a Desktop for homepage navigation to media page", function() {

	var driver = session.get("driver");
	var homePage = new homepage(driver);
	homePage.toggleButton.click();
	var mediaPage = new mediapage(driver);
	mediaPage.menuMedia.click();
	checkLayout(driver,"specs/media.gspec", "desktop");

});
test("Test on a Desktop for homepage navigation to service page", function() {
	
	var driver = session.get("driver");
	var homePage = new homepage(driver);
	homePage.toggleButton.click();
	var servicePage = new servicepage(driver);
	servicePage.menuService.click();
	checkLayout(driver,"specs/service.gspec", "desktop");
	
});

afterTest(function () {
	var driver = session.get("driver");
	driver.quit();
});
	

load("pages/myhomepage.js");


beforeTest(function () {
	var browser = System.getProperty("browser");
	
	var driver = createDriver("http://www.infobeans.com", "1866x1000", browser);
	
	session.put("driver", driver);
 });

this.devices = {
  mobile: {
    deviceName: "mobile",
    size: "960x540"
  },
  desktop: {
    deviceName: "desktop",
    size: "1866x1000"
  }
};

forAll(devices, function (device) {
  test("Test on a Desktop for homepage navigation to automationpage on ${deviceName}", function (device){
  	var browser = System.getProperty("browser");
	
	var driver = session.get("driver", device.size);
	var homePage = new homepage(driver);
	homePage.toggleButton.click();
	var automationPage = new automationpage(driver);
	automationPage.menuAutomation.click();
	checkLayout(driver, "specs/auto.gspec", "all");
    
  });
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
test("Test on a Desktop for homepage navigation to ecomm page" , function() {

	var driver = session.get("driver");
	var homePage = new homepage(driver);
	homePage.toggleButton.click();
	var ecommPage = new ecommpage(driver);
	ecommPage.menuEcomm.click();
	checkLayout(driver,"specs/ecomm.gspec", "desktop");
});
test("Test on a Desktop for homepage navigation to applynow page", function() {

	var driver = session.get("driver");
	var homePage = new homepage(driver);
	homePage.toggleButton.click();
	var applynowPage = new applynowpage(driver);
	applynowPage.menuApply.click();
	applynowPage.firstname.typeText("Anujita");
	applynowPage.lastname.typeText("Sinha");
	applynowPage.email.typeText("anujita022@gmail.com");
	applynowPage.phone.typeText("1234567890");
	applynowPage.applybutton.click();
	
});
afterTest(function () {
	var driver = session.get("driver");
	driver.quit();
});
	

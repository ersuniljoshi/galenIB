var devices = {
  tablet: {
    deviceName: "tablet",
    size: "960x540"
  },
  desktop: {
    deviceName: "desktop",
    size: "1866x1000"
  }
};

var browsers = {
  firefox: {
    browserName: "firefox"
  },
  chrome: {
    browserName: "chrome"
  }
};

// run test for all devices and browsers
forAll(devices, function () {
  forAll(browsers, function () {
    test("Test on ${browserName} on ${deviceName}", function (device, browser) {
    var driver = createDriver("http://www.infobeans.com", device.size, browser.browserName);

    // Checking layout on the page
    checkLayout(driver, "Tests/homepage.gspec", device.deviceName);

    // Quiting the browser
    driver.quit();
    });
  }); 
});

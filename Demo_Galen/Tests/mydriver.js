importClass(org.openqa.selenium.firefox.FirefoxDriver);
importClass(org.openqa.selenium.firefox.FirefoxProfile);
importClass(com.galenframework.utils.GalenUtils);
importClass(com.galenframework.browser.SeleniumBrowser);
importClass(com.galenframework.browser.SeleniumGridBrowserFactory);
importClass(com.galenframework.browser.SeleniumBrowserFactory);
importClass(org.openqa.selenium.Platform);
importClass(org.openqa.selenium.chrome.ChromeDriver);

var platform;
var browser;
var driver;
var mode = args[0].toLowerCase();
var browserName = args[1].toLowerCase();
var version = args[2];
switch (args[3].toLowerCase()) {
    case 'linux': platform = Platform.LINUX;
        break;
    case 'windows': platform = Platform.WINDOWS;
        break;
    default: platform = Platform.LINUX;
}
if (mode == 'grid') {
    driver = new SeleniumGridBrowserFactory("http://localhost:4444/wd/hub").withBrowser(browserName).withBrowserVersion(version).withPlatform(platform);
    browser = driver.openBrowser();
} else {
    driver = new SeleniumBrowserFactory(browserName);
    browser = driver.openBrowser();
}

browser;


load("specs/locator.gspec");
this.automationpage = $page("automationpage", {
	menuAutomation: "auto_menu"
});
var automationPage = new automationpage(driver);
automationPage.menuAutomation.click();

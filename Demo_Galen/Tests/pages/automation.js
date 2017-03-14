this.automationpage = $page("automationpage", {
	menuAutomation: " #menu-item-1942>a"
});
var automationPage = new automationpage(driver);
automationPage.menuAutomation.click();
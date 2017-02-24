load("specs/locator.gspec");
this.servicepage = $page("servicepage", {
	menuService: "service_menu"
});
var servicePage = new servicepage(driver);
servicePage.menuService.click();

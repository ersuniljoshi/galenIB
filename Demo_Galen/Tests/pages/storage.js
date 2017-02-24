load("specs/locator.gspec");
this.storagepage = $page("storagepage", {
	menuStorage: "storage_menu"
});
var storagePage = new storagepage(driver);
storagePage.menuStorage.click();

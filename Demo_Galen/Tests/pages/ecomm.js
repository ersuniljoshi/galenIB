load("specs/locator.gspec");
this.ecommpage = $page("ecommpage" , {
	menuEcomm: "ecom_menu"
});
var ecommPage = new ecommpage(driver);
ecommPage.menuEcomm.click();

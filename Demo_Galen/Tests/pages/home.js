this.homepage = $page("homepage", {
	toggleButton: "id: toggle" ,
	// menuApply: "#menu-item-1750>a" ,
});
var homePage = new homepage(driver);
homePage.toggleButton.click();
// homePage.menuApply.click();



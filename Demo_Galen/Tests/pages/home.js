this.homepage = $page("homepage", {
	toggleButton: "id: toggle" ,
});
var homePage = new homepage(driver);
homePage.toggleButton.click();
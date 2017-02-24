load("specs/locator.gspec");
this.mediapage = $page("mediapage", {
	menuMedia: "media_menu"
});
var mediaPage = new mediapage(driver);
mediaPage.menuMedia.click();

this.homepage = $page("homepage", {
	toggleButton: "id: toggle"

});

this.automationpage = $page("automationpage", {
	menuAutomation: " #menu-item-1942>a"
});
this.storagepage = $page("storagepage", {
	menuStorage: " #menu-item-3266>a"
});
this.mediapage = $page("mediapage", {
	menuMedia: "#menu-item-3264>a"
});
this.servicepage = $page("servicepage", {
	menuService: "#menu-item-3750>a"
});
this.ecommpage = $page("ecommpage" , {
	menuEcomm: "#menu-item-3263>a"
});
this.applynowpage = $page("applynowpage",{
	menuApply: "#menu-item-1750>a" ,
	firstname: "xpath: .//input[@id='Ffirstname']" ,
	lastname: "xpath: .//input[@id='Flastname']" ,
	email: "xpath: .//*[@id='wpcf7-f2120-p40-o1']/form/ul/li[3]/span/input" ,
	phone: "xpath: .//*[@id='wpcf7-f2120-p40-o1']/form/ul/li[4]/span/input" ,
	applybutton: "xpath: .//*[@id='submit-wrap']/input[1]"
});
// this.softwarepage = $page("softwarepage", {
// 	menuSoftware: "#menu-item-1936>a"
// });

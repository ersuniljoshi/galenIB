this.applynowpage = $page("applynowpage",{
  menuApply: "#menu-item-4065>a" ,
	firstname: "xpath: .//input[@id='Ffirstname']" ,
	lastname: "xpath: .//input[@id='Flastname']" ,
	email: "xpath: .//*[@id='wpcf7-f2120-p40-o1']/form/ul/li[3]/span/input" ,
	phone: "xpath: .//*[@id='wpcf7-f2120-p40-o1']/form/ul/li[4]/span/input" ,
	applybutton: "xpath: .//*[@id='submit-wrap']/input[1]" ,
});
var applynowPage = new applynowpage(driver);
applynowPage.menuApply.click();
applynowPage.firstname.typeText("Anujita");
applynowPage.lastname.typeText("Sinha");
applynowPage.email.typeText("anujita022@gmail.com");
applynowPage.phone.typeText("1234567890");
applynowPage.applybutton.click();

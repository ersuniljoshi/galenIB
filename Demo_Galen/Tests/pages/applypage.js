load("specs/locator.gspec");
this.applynowpage = $page("applynowpage",{
  menuApply: "apply_menu" ,
	firstname: "xpath: apply_fn" ,
	lastname: "xpath: apply_sn" ,
	email: "xpath: apply_email" ,
	phone: "xpath: apply_ph" ,
	applybutton: "xpath: apply_btn" ,
});
var applynowPage = new applynowpage(driver);
applynowPage.menuApply.click();
applynowPage.firstname.typeText("Abc");
applynowPage.lastname.typeText("efg");
applynowPage.email.typeText("abc@gmail.com");
applynowPage.phone.typeText("1234567890");
applynowPage.applybutton.click();

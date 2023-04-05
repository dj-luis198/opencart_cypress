export class HomePage{

    constructor(){
       this.myAccountDropDown='a[title="My Account"]';
       this.registerText='Register'
    }


clickMyAccount (){
    cy.gClick(this.myAccountDropDown);
}

clickRegister(){
    cy.cClick(this.registerText);
}

}
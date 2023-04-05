export class HomePage {

    constructor() {
        this.myAccountDropDown = 'a[title="My Account"]';
        this.registerText = 'Register';
        this.loginText = 'Login';
    }


    clickMyAccount() {
        cy.gClick(this.myAccountDropDown);
    }

    clickRegister() {
        cy.cClick(this.registerText);
    }

    clickLogin() {
        cy.cClick(this.loginText);
    }

}
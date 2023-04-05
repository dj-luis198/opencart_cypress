export class LoginPage{
    constructor(){
        this.emailImput='#input-email';
        this.passwordImput='#input-password';
        this.loginButton='[value="Login"]';
        this.loginAlertMessage = 'div[class*="alert"]';
    }

    returnLoginAlert(){
        return cy.get(this.loginAlertMessage);
    }

    returnLastBreadcrumb() {
        return cy.lastBreadcrumb();
    }

    typeEmail(text){
        cy.gType(this.emailImput,text);
    }

    typePassword(text){
        cy.gType(this.passwordImput,text);
    }

    clickLogin(){
        cy.gClick(this.loginButton);
    }
}
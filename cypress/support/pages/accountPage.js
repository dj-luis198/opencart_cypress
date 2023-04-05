export class AccountPage{
    constructor(){
        this.logo='#logo';
    }

    returnLogo(){
        return cy.get(this.logo);
    }
}
export class HomePage {

    constructor() {
        this.myAccountDropDown = 'a[title="My Account"]';
        this.registerText = 'Register';
        this.loginText = 'Login';
        this.searchImput = '[name="search"]';
        this.productGrid = 'div[class*="product-layout"]';
        this.emptyMessage = 'Your shopping cart is empty!';
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

    searchProduct(product) {
        cy.gType(this.searchImput, product);
        this.pressEnter();
    }

    returnResultSearch(positive) {
        if (positive === true)
            return cy.get(this.productGrid);
        else
            return cy.contains(this.emptyMessage);
    }

    pressEnter() {
        cy.gEnter(this.searchImput);
    }

}
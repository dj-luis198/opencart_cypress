export class RegisterPage {

    constructor() {
        this.firstNameInput = '#input-firstname';
        this.lastNameInput = '#input-lastname';
        this.emailInput = '#input-email';
        this.telephoneInput = '#input-telephone';
        this.passwordInput = '#input-password';
        this.confirmPassInput = '#input-confirm';
        this.newsletterRadio = 'input[type="radio"][name="newsletter"]';
        this.privacyPolicyCheckBox = 'input[type="checkbox"]';
        this.continueButoon = 'input[type="submit"]';
        this.privPolAlertMessage = 'div[class*="alert"]';
    }

    returnLastBreadcrumb() {
        return cy.lastBreadcrumb();
    }

    typeFirstName(text) {
        cy.gType(this.firstNameInput, text);
    }

    typeLastName(text) {
        cy.gType(this.lastNameInput, text);
    }

    typeEmail(text) {
        cy.gType(this.emailInput, text);
    }

    typeTelephone(text) {
        cy.gType(this.telephoneInput, text);
    }

    typePassword(text) {
        cy.gType(this.passwordInput, text);
    }

    typeConfirmPassword(text) {
        cy.gType(this.confirmPassInput, text);
    }

    checkNewsletter(option) {
        if (option === "Yes") {
            cy.gCheck(this.newsletterRadio, "1");
        }
        else cy.gCheck(this.newsletterRadio, "0");
    }

    checkPrivacyPolicy() {
        cy.gCheck(this.privacyPolicyCheckBox, "1");
    }

    clickContinue() {
        cy.gClick(this.continueButoon);
    }

    returnFirstNameAlertMsg() {
        return cy.gSiblings(this.firstNameInput);
    }

    returnLastNameAlertMsg() {
        return cy.gSiblings(this.lastNameInput);
    }

    returnEmailAlertMsg() {
        return cy.gSiblings(this.emailInput);
    }

    returnTelephoneAlertMsg() {
        return cy.gSiblings(this.telephoneInput);
    }

    returnPasswordAlertMsg() {
        return cy.gSiblings(this.passwordInput);
    }

    returnConfirmPasAlertMsg() {
        return cy.gSiblings(this.confirmPassInput);
    }

    returnPrivPolAlert() {
        return cy.get(this.privPolAlertMessage);
    }

    returnEmailImput() {
        return cy.get(this.emailInput);
    }


}
export class SuccessAccountPage{

    constructor(){
        this.messageP='Congratulations! Your new account has been successfully created!';
    }

    returnMessage(){
        return cy.contains('Congratulations! Your new account has been successfully created!');
    }
}
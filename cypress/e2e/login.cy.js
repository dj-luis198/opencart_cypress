import { HomePage } from "../support/pages/homePage";
import { LoginPage } from "../support/pages/loginPage";
import { AccountPage } from "../support/pages/accountPage";

describe('login', () => {
    const homePage = new HomePage();
    const loginPage = new LoginPage();
    const accountPage= new AccountPage();
    let login,dataMsg;

    before(() => {
        cy.fixture('loginData').then(data => {
            login = data;
        })
        cy.fixture('msg').then(data => {
            dataMsg = data;
          });
    })

    beforeEach(() => {
        cy.visit('/');
        homePage.clickMyAccount();
        homePage.clickLogin();
        loginPage.returnLastBreadcrumb().invoke('text').then(res=>{
            expect(res).is.eql(dataMsg.msg_ex.login);
        })
    })
    it('Validar inicio de sesion con datos validos', () => {
        loginPage.typeEmail(login.user_ex.email);
        loginPage.typePassword(login.user_ex.password);
        loginPage.clickLogin();
        accountPage.returnLogo().invoke('text').then(res=>{
            expect(res).is.eql(dataMsg.msg_ex.logo);
        })
    })

    it('Intentar inicio de sesion con email invalido', () => {
        loginPage.typeEmail(login.user_f_email.email);
        loginPage.typePassword(login.user_f_email.password);
        loginPage.clickLogin();
        loginPage.returnLoginAlert().invoke('text').then(res=>{
            expect(res).is.eql(dataMsg.msg_fail.loginAlertError);
        })
    })

    it('Intentar inicio de sesion con password invalido', () => {
        loginPage.typeEmail(login.user_f_pass.email);
        loginPage.typePassword(login.user_f_pass.password);
        loginPage.clickLogin();
        loginPage.returnLoginAlert().invoke('text').then(res=>{
            expect(res).is.eql(dataMsg.msg_fail.loginAlertError);
        })
    })
})
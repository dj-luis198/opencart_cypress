import { HomePage } from "../support/pages/homePage";
import { RegisterPage } from "../support/pages/registerPage";
import { SuccessAccountPage } from "../support/pages/successAccountPage";

const { faker } = require('@faker-js/faker');

describe('Registro', () => {
  const homePage = new HomePage();
  const registerPage = new RegisterPage();
  const successAccountPage = new SuccessAccountPage();

  let firstName, lastName, email, password, telephone, newsletter, dataMsg;;

  before("", () => {
    cy.fixture('msg').then(data => {
      dataMsg = data;
    });
  })

  beforeEach("", () => {
    firstName = faker.name.firstName();
    lastName = faker.name.lastName();
    email = faker.internet.email();
    password = faker.internet.password();
    telephone = faker.phone.number();
    newsletter = faker.helpers.arrayElement(['Yes', 'No']);

    cy.visit('/');
    homePage.clickMyAccount();
    homePage.clickRegister();
    registerPage.returnLastBreadcrumb().invoke('text').then((text) => {
      expect(text).is.eql(dataMsg.msg_ex.register);
    })
  })

  it('Validar registro con datos validos', () => {
    registerPage.typeFirstName(firstName);
    registerPage.typeLastName(lastName);
    registerPage.typeEmail(email);
    registerPage.typePassword(password);
    registerPage.typeConfirmPassword(password);
    registerPage.typeTelephone(telephone);
    registerPage.checkNewsletter(newsletter);
    registerPage.checkPrivacyPolicy();
    registerPage.clickContinue();
    successAccountPage.returnMessage().invoke('text').then(res => {
      expect(res).is.eql(dataMsg.msg_ex.success);
    });
  })

  it('Intentar registrarse con todos loscampos vacios', () => {
    registerPage.clickContinue();
    registerPage.returnPrivPolAlert().invoke('text').then(res => {
      expect(res).is.eql(dataMsg.msg_fail.privacyPolicyError)
    })
    registerPage.returnFirstNameAlertMsg().invoke('text').then(res => {
      expect(res).is.eql(dataMsg.msg_fail.firstNameError);
    })
    registerPage.returnLastNameAlertMsg().invoke('text').then(res => {
      expect(res).is.eql(dataMsg.msg_fail.lastNameError);
    })
    registerPage.returnEmailAlertMsg().invoke('text').then(res => {
      expect(res).is.eql(dataMsg.msg_fail.emailError);
    })
    registerPage.returnTelephoneAlertMsg().invoke('text').then(res => {
      expect(res).is.eql(dataMsg.msg_fail.telephoneError);
    })
    registerPage.returnPasswordAlertMsg().invoke('text').then(res => {
      expect(res).is.eql(dataMsg.msg_fail.passwordError);
    })
  })

  it('Intentar registrarse con password invalido', () => {
    let passFail=faker.random.numeric(3);

    registerPage.typeFirstName(firstName);
    registerPage.typeLastName(lastName);
    registerPage.typeEmail(email);
    registerPage.typePassword(passFail);
    registerPage.typeConfirmPassword(passFail);
    registerPage.typeTelephone(telephone);
    registerPage.checkNewsletter(newsletter);
    registerPage.checkPrivacyPolicy();
    registerPage.clickContinue();
    registerPage.returnPasswordAlertMsg().invoke('text').then(res => {
      expect(res).is.eql(dataMsg.msg_fail.passwordError);
    })
  })

  it('Intentar registrarse con confirmacion de password invalido', () => {
    registerPage.typeFirstName(firstName);
    registerPage.typeLastName(lastName);
    registerPage.typeEmail(email);
    registerPage.typePassword(password);
    registerPage.typeConfirmPassword(`${password+1}`);
    registerPage.typeTelephone(telephone);
    registerPage.checkNewsletter(newsletter);
    registerPage.checkPrivacyPolicy();
    registerPage.clickContinue();
    registerPage.returnConfirmPasAlertMsg().invoke('text').then(res => {
      expect(res).is.eql(dataMsg.msg_fail.pasconfirmError);
    })
  })

  it('Intentar registrarse con email invalido', () => {
    registerPage.typeFirstName(firstName);
    registerPage.typeLastName(lastName);
    registerPage.typeEmail(lastName);
    registerPage.typePassword(password);
    registerPage.typeConfirmPassword(password);
    registerPage.typeTelephone(telephone);
    registerPage.checkNewsletter(newsletter);
    registerPage.checkPrivacyPolicy();
    registerPage.clickContinue();
    registerPage.returnEmailImput().invoke('prop','validationMessage').then(res=>{
      expect(res).is.eql(`Incluye un signo "@" en la dirección de correo electrónico. La dirección "${lastName}" no incluye el signo "@".`);
    });
  })
})
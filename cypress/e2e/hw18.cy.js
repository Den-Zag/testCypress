import MainPageSteps from '../support/steps/MainPageSteps';

describe(`HW 18.1. Cypress inquiries`, () => {
  beforeEach(() => {
    cy.fixture('user').as('userData');
    cy.visit("/");
    cy.get(".hero-descriptor_btn").click();
  });

  it(`Checking Name`, () => {
    MainPageSteps.RegistrationFormNameEmpty(),
    MainPageSteps.RegistrationFormNameTwoLetters(),
    MainPageSteps.RegistrationFormName20Letters(),
    MainPageSteps.RegistrationFormNameOneLetter(),
    MainPageSteps.RegistrationFormName21Letters(),
    MainPageSteps.RegistrationFormNameIsNotValidWithSpace(),
    MainPageSteps.RegistrationFormNameIsNotValidWithSpace(),
    MainPageSteps.RegistrationFormNameIsNotValidWithSpecialCharacters(),
    MainPageSteps.RegistrationFormNameIsValid()
  });

  it(`Checking Last Name`, () => {
    MainPageSteps.RegistrationFormLastNameEmpty(),
    MainPageSteps.RegistrationFormLastNameTwoLetters(),
    MainPageSteps.RegistrationFormLastName20Letters(),
    MainPageSteps.RegistrationFormLastNameOneLetter(),
    MainPageSteps.RegistrationFormLastName21Letters(),
    MainPageSteps.RegistrationFormLastNameIsNotValidWithSpace(),
    MainPageSteps.RegistrationFormLastNameIsNotValidWithSpace(),
    MainPageSteps.RegistrationFormLastNameIsNotValidWithSpecialCharacters(),
    MainPageSteps.RegistrationFormLastNameIsValid()
  });

  it(`Checking Email`, () => {
    MainPageSteps.RegistrationFormEmailValidationError()
    MainPageSteps.RegistrationFormEmailIsValid()
  })
  
  it(`Checking Password`, () => {
    MainPageSteps.RegistrationFormPasswordValidationError()
    MainPageSteps.RegistrationFormPasswordIsValid()
  }) 

  it(`Checking Re Password`, () => {
    MainPageSteps.RegistrationFormRePasswordValidationError()
    MainPageSteps.RegistrationFormRePasswordIsValid()
  }) 

  it(`Checking Button "Register`, () => {
    MainPageSteps.RegistrationFormRegisterBtn()
  }) 

  it('Create a new account', function() {
    const user = this.userData.user1
    MainPageSteps.CreateNewAccount(user.firstName, user.lastName, user.email, user.password)
    cy.url().should("include", "/panel/garage")
  })
});

describe(`HW 18.1.2 Cypress inquiries - Login`, () => {
  beforeEach(() => {
    cy.fixture('user').as('userData');
  })
  it("Login", function () {
    const user = this.userData.user1
    cy.login(user.email, user.password)
  })
})

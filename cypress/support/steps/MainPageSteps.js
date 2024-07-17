import mainePage from '../pages/MainPage';

const MainPageSteps = {
  CheckingButtonTagsInHeader() {
    mainePage.getAboutHeaderBtn().firstFocus();
    mainePage.getContactsHeaderBtn().clickElement();
    mainePage.getGuestLogInHeaderBtn()
    mainePage.getSignInHeaderBtn().clickElement();
  },
  CheckingLinksInFooter() {
    mainePage.getFacebookSelector().isVisible()
    mainePage.getTelegramSelector().isVisible(); 
    mainePage.getYoutubeSelector();
    mainePage.getInstagramSelector().isVisible(); 
    mainePage.getLinkedinSelector().isVisible(); 
    mainePage.getIthillelLogoSelector().isVisible();
    mainePage.getMailtoMailSelector().isVisible(); 
  },

  // Registrierungsformular - Name
  RegistrationFormNameEmpty() {
    mainePage.getRegistrationFormName().firstFocus().borderColor()
    mainePage.getRegistrationFormName().removeFocus()
    mainePage.getRegistrationFormName().borderColorErrore()
    mainePage.getRegistrationFormValidationError().chekingText('Name required')
  },
  RegistrationFormNameTwoLetters() {
    mainePage.getRegistrationFormName().enterValue('dE').borderColor()
    mainePage.getRegistrationFormValidationError().checkElementAbsence()
  },
  RegistrationFormName20Letters() {
    mainePage.getRegistrationFormName().enterValue('Teeeeeeeeeeeeeeeeeee').borderColor()
    mainePage.getRegistrationFormValidationError().checkElementAbsence()
  },
  RegistrationFormNameOneLetter() {
    mainePage.getRegistrationFormName().enterValue('T').borderColorErrore()
    mainePage.getRegistrationFormName().borderColorErrore()
    mainePage.getRegistrationFormValidationError().chekingText('Name has to be from 2 to 20 characters long')
  },
  RegistrationFormName21Letters() {
    mainePage.getRegistrationFormName().enterValue('Teeeeeeeeeeeeeeeeeeea').borderColorErrore()
    mainePage.getRegistrationFormValidationError().chekingText('Name has to be from 2 to 20 characters long')
  },
  RegistrationFormNameIsNotValidWithSpace() {
    mainePage.getRegistrationFormName().enterValue('De ').borderColorErrore()
    mainePage.getRegistrationFormValidationError().chekingText('Name is invalid')
  },
  RegistrationFormNameIsNotValidWithNumber() {
    mainePage.getRegistrationFormName().enterValue('Te1').borderColorErrore()
    mainePage.getRegistrationFormValidationError().chekingText('Name is invalid')
  },
  RegistrationFormNameIsNotValidWithSpecialCharacters() {
    mainePage.getRegistrationFormName().enterValue('J@').borderColorErrore()
    mainePage.getRegistrationFormValidationError().chekingText('Name is invalid')
  },
  RegistrationFormNameIsValid() {
    mainePage.getRegistrationFormName().borderColorErrore()
    mainePage.getRegistrationFormName().enterValue('Denys').borderColor()
    mainePage.getRegistrationFormValidationError().checkElementAbsence()
  },
  // Registrierungsformular - Last name
  RegistrationFormLastNameEmpty() {
    mainePage.getRegistrationFormLastName().firstFocus().borderColor()
    mainePage.getRegistrationFormLastName().removeFocus()
    mainePage.getRegistrationFormLastName().borderColorErrore()
    mainePage.getRegistrationFormValidationError().chekingText('Last name required')
  },
  RegistrationFormLastNameTwoLetters() {
    mainePage.getRegistrationFormLastName().enterValue('dE').borderColor()
    mainePage.getRegistrationFormValidationError().checkElementAbsence()
  },
  RegistrationFormLastName20Letters() {
    mainePage.getRegistrationFormLastName().enterValue('Teeeeeeeeeeeeeeeeeee').borderColor()
    mainePage.getRegistrationFormValidationError().checkElementAbsence()
  },
  RegistrationFormLastNameOneLetter() {
    mainePage.getRegistrationFormLastName().enterValue('T').borderColorErrore()
    mainePage.getRegistrationFormLastName().borderColorErrore()
    mainePage.getRegistrationFormValidationError().chekingText('Last name has to be from 2 to 20 characters long')
  },
  RegistrationFormLastName21Letters() {
    mainePage.getRegistrationFormLastName().enterValue('Teeeeeeeeeeeeeeeeeeea').borderColorErrore()
    mainePage.getRegistrationFormValidationError().chekingText('Last name has to be from 2 to 20 characters long')
  },
  RegistrationFormLastNameIsNotValidWithSpace() {
    mainePage.getRegistrationFormLastName().enterValue('De ').borderColorErrore()
    mainePage.getRegistrationFormValidationError().chekingText('Last name is invalid')
  },
  RegistrationFormLastNameIsNotValidWithNumber() {
    mainePage.getRegistrationFormLastName().enterValue('Te1').borderColorErrore()
    mainePage.getRegistrationFormValidationError().chekingText('Last name is invalid')
  },
  RegistrationFormLastNameIsNotValidWithSpecialCharacters() {
    mainePage.getRegistrationFormLastName().enterValue('J@').borderColorErrore()
    mainePage.getRegistrationFormValidationError().chekingText('Last name is invalid')
  },
  RegistrationFormLastNameIsValid() {
    mainePage.getRegistrationFormLastName().borderColorErrore()
    mainePage.getRegistrationFormLastName().enterValue('Zagrebelnyi').borderColor()
    mainePage.getRegistrationFormValidationError().checkElementAbsence()
  },
  // Registrierungsformular - Email
  RegistrationFormEmailValidationError() {
    mainePage.getRegistrationFormEmail().firstFocus().borderColor()
    mainePage.getRegistrationFormEmail().removeFocus()
    mainePage.getRegistrationFormEmail().borderColorErrore()
    mainePage.getRegistrationFormValidationError().chekingText('Email required')
    mainePage.getRegistrationFormEmail().enterValue('denzagrebelnyigmail.com').borderColorErrore()
    mainePage.getRegistrationFormValidationError().chekingText('Email is incorrect')
    mainePage.getRegistrationFormEmail().enterValue('denzagrebelnyi@gmailcom').borderColorErrore()
    mainePage.getRegistrationFormValidationError().chekingText('Email is incorrect')
    mainePage.getRegistrationFormEmail().enterValue('denzagrebelnyi@.com').borderColorErrore()
    mainePage.getRegistrationFormValidationError().chekingText('Email is incorrect')
    mainePage.getRegistrationFormEmail().enterValue('@gmail.com').borderColorErrore()
    mainePage.getRegistrationFormValidationError().chekingText('Email is incorrect')
    mainePage.getRegistrationFormEmail().enterValue('denzagrebelnyi@gmail.').borderColorErrore()
    mainePage.getRegistrationFormValidationError().chekingText('Email is incorrect')
  },
  RegistrationFormEmailIsValid() {
    mainePage.getRegistrationFormEmail().enterValue('denzagrebelnyi@gmail.com').borderColor()
    mainePage.getRegistrationFormValidationError().checkElementAbsence()
  },
  // Registrierungsformular - Password 
  RegistrationFormPasswordValidationError() {
    mainePage.getRegistrationFormPassword().firstFocus().borderColor()
    mainePage.getRegistrationFormPassword().removeFocus()
    mainePage.getRegistrationFormPassword().borderColorErrore()
    mainePage.getRegistrationFormValidationError().chekingText('Password required')
// mainePage.validatePasswordInputAll(mainePage.getRegistrationFormPassword()) --- ????
    mainePage.validatePasswordInput(mainePage.getRegistrationFormPassword().enterValue('test@de1'))
    mainePage.validatePasswordInput(mainePage.getRegistrationFormPassword().enterValue('Test@Denghndbsvgldy'))
    mainePage.validatePasswordInput(mainePage.getRegistrationFormPassword().enterValue('TEST@DE1GHJHKJLKKBHV'))
    mainePage.validatePasswordInput(mainePage.getRegistrationFormPassword().enterValue('Tet@De1'))
    mainePage.validatePasswordInput(mainePage.getRegistrationFormPassword().enterValue('Test@De1vHc3vB4h'))
  },
  RegistrationFormPasswordIsValid() {
    mainePage.getRegistrationFormPassword().enterValue('Test@De1').borderColor
    mainePage.getRegistrationFormValidationError().checkElementAbsence()
    mainePage.getRegistrationFormPassword().enterValue('Test3De1vHc3vB4').borderColor
    mainePage.getRegistrationFormValidationError().checkElementAbsence()
  },
  // Registrierungsformular - Password 
  RegistrationFormRePasswordValidationError(){
    mainePage.getRegistrationFormRePassword().firstFocus().borderColor()
    mainePage.getRegistrationFormRePassword().removeFocus()
    mainePage.getRegistrationFormRePassword().borderColorErrore()
    mainePage.getRegistrationFormValidationError().chekingText('Re-enter password required')
    // mainePage.validatePasswordInputAll(mainePage.getRegistrationFormRePassword()) --- ????
    mainePage.validatePasswordInput(mainePage.getRegistrationFormRePassword().enterValue('test@de1'))
    mainePage.validatePasswordInput(mainePage.getRegistrationFormRePassword().enterValue('Test@Denghndbsvgldy'))
    mainePage.validatePasswordInput(mainePage.getRegistrationFormRePassword().enterValue('TEST@DE1GHJHKJLKKBHV'))
    mainePage.validatePasswordInput(mainePage.getRegistrationFormRePassword().enterValue('Tet@De1'))
    mainePage.validatePasswordInput(mainePage.getRegistrationFormRePassword().enterValue('Test@De1vHc3vB4h'))
    mainePage.getRegistrationFormPassword().enterValue('Test@De1j3b').borderColor
    mainePage.getRegistrationFormRePassword().enterValue('Test@De1j3a').borderColor
    mainePage.getRegistrationFormValidationError().chekingText('Passwords do not match')
    mainePage.getRegistrationFormRePassword().borderColorErrore()
  },
  RegistrationFormRePasswordIsValid() {
    mainePage.getRegistrationFormPassword().enterValue('Test@De1j3b').borderColor
    mainePage.getRegistrationFormRePassword().enterValue('Test@De1j3b').borderColor
    mainePage.getRegistrationFormValidationError().checkElementAbsence()
  },
  // Registrierungsformular - Password 
  RegistrationFormRegisterBtn() {
    mainePage.getRegistrationFormRegisterBtn().isVisible()
    mainePage.getRegistrationFormRegisterBtn().verifyIsDisabled()
    mainePage.getRegistrationFormName().enterValue('Test')
    mainePage.getRegistrationFormRegisterBtn().verifyIsDisabled()
    mainePage.getRegistrationFormLastName().enterValue('Test')
    mainePage.getRegistrationFormRegisterBtn().verifyIsDisabled()
    mainePage.getRegistrationFormEmail().enterValue('Test@gmail.com')
    mainePage.getRegistrationFormRegisterBtn().verifyIsDisabled()
    mainePage.getRegistrationFormPassword().enterValue('Test@De1j3b')
    mainePage.getRegistrationFormRegisterBtn().verifyIsDisabled()
    mainePage.getRegistrationFormRePassword().enterValue('Test@De1j3b')
    mainePage.getRegistrationFormRegisterBtn().verifyIsNotDisabled()
    mainePage.getRegistrationFormRegisterBtn().clickElement()
    mainePage.getRegistrationFormValidationErrorAfterClickingOnfRegister().chekingText('User already exists')
  },
  CreateNewAccount(name, lastName, mail, password) {
    mainePage.getRegistrationFormName().enterValue(name)
    mainePage.getRegistrationFormLastName().enterValue(lastName)
    mainePage.getRegistrationFormEmail().enterValue(mail)
    mainePage.getRegistrationFormPassword().enterValue(password)
    mainePage.getRegistrationFormRePassword().enterValue(password)
    mainePage.getRegistrationFormRegisterBtn().clickElement()
  }
};

export default MainPageSteps;

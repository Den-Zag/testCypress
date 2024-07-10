import mainePage from '../pages/MainPage';

const MainPageSteps = {
  CheckingButtonTagsInHeader() {
    mainePage.getAboutHeaderBtn().clickElement();
    mainePage.getContactsHeaderBtn().clickElement();
    mainePage.getGuestLogInHeaderBtn()
    mainePage.getSignInHeaderBtnn().clickElement();
  },
  CheckingLinksInFooter() {
    mainePage.getFacebookSelector().isVisible(); 
    mainePage.getTelegramSelector().isVisible(); 
    mainePage.getYoutubeSelector().isVisible(); 
    mainePage.getInstagramSelector().isVisible(); 
    mainePage.getLinkedinSelector().isVisible(); 
    mainePage.getIthillelLogoSelector().isVisible();
    mainePage.getMailtoMailSelector().isVisible(); 
  },
};

export default MainPageSteps;

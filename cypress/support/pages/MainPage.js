import { CommonElement } from '../utils/elements';

class MainPage {
  aboutHeaderBtn = '[appscrollto="aboutSection"]';
  contactsHeaderBtn = '[appscrollto="contactsSection"]';
  guestLogInHeaderBtn = '.header_right > .header-link';
  signInHeaderBtn = '.header_right > .btn';
  facebookSelector = '.socials_icon.icon.icon-facebook';
  facebookLink = 'https://www.facebook.com/Hillel.IT.School';
  telegramSelector = '.socials_icon.icon.icon-telegram';
  telegramLink = 'https://t.me/ithillel_kyiv';
  youtubeSelector = '.socials_icon.icon.icon-youtube';
  youtubeLink = 'https://www.youtube.com/user/HillelITSchool?sub_confirmation=1';
  instagramSelector = '.socials_icon.icon.icon-instagram';
  instagramLink = 'https://www.instagram.com/hillel_itschool/';
  linkedinSelector = '.socials_icon.icon.icon-linkedin';
  linkedinLink = 'https://www.linkedin.com/school/ithillel/';
  ithillelLogoSelector = '.contacts_link.display-4';
  ithillelLogoLink = 'https://ithillel.ua';
  mailtoSelector = '.contacts_link.h4';
  mailtoMail = 'mailto:developer@ithillel.ua';

  getAboutHeaderBtn() {
    return new CommonElement(this.aboutHeaderBtn);
  }
  getContactsHeaderBtn() {
    return new CommonElement(this.contactsHeaderBtn);
  }
  getGuestLogInHeaderBtn() {
    return new CommonElement(this.guestLogInHeaderBtn);
  }
  getSignInHeaderBtnn() {
    return new CommonElement(this.signInHeaderBtn);
  }
  getFacebookSelector() {
    return new CommonElement(this.facebookSelector);
  }
  getFacebookLink() {
    return new CommonElement(this.facebookLink);
  }
  getTelegramSelector() {
    return new CommonElement(this.telegramSelector);
  }
  getTelegramLink() {
    return new CommonElement(this.telegramLink);
  }
  getYoutubeSelector() {
    return this.youtubeSelector;
  }
  getYoutubeLink() {
    return new CommonElement(this.youtubeLink);
  }
  getInstagramSelector() {
    return new CommonElement(this.instagramSelector);
  }
  getInstagramLink() {
    return new CommonElement(this.instagramLink);
  }
  getLinkedinSelector() {
    return new CommonElement(this.linkedinSelector);
  }
  getLinkedinLink() {
    return new CommonElement(this.linkedinLink);
  }
  getIthillelLogoSelector() {
    return new CommonElement(this.ithillelLogoSelector);
  }
  getIthillelLogoLink() {
    return new CommonElement(this.ithillelLogoLink);
  }
  getMailtoMailSelector() {
    return new CommonElement(this.mailtoSelector);
  }
  getMailtoMail() {
    return new CommonElement(this.mailtoMail);
  }
}

const mainePage = new MainPage();
export default mainePage;

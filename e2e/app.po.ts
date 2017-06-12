import { browser, element, by } from 'protractor';

export class GigyaPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('gig-root h1')).getText();
  }
}

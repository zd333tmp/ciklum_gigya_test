import { GigyaPage } from './app.po';

describe('gigya App', () => {
  let page: GigyaPage;

  beforeEach(() => {
    page = new GigyaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('gig works!');
  });
});

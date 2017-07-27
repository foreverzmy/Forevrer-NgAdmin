import { AngularAdminPage } from './app.po';

describe('angular-admin App', () => {
  let page: AngularAdminPage;

  beforeEach(() => {
    page = new AngularAdminPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

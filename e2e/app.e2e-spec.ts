import { DdAngularPage } from './app.po';

describe('dd-angular App', () => {
  let page: DdAngularPage;

  beforeEach(() => {
    page = new DdAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

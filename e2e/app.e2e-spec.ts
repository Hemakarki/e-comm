import { EsparesPage } from './app.po';

describe('espares App', () => {
  let page: EsparesPage;

  beforeEach(() => {
    page = new EsparesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

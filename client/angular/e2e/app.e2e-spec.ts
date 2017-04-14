import { OlxPage } from './app.po';

describe('olx App', () => {
  let page: OlxPage;

  beforeEach(() => {
    page = new OlxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

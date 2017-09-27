import { TuxBoardPage } from './app.po';

describe('ez-board App', () => {
  let page: TuxBoardPage;

  beforeEach(() => {
    page = new TuxBoardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

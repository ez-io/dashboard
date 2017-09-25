import { TuxBoardPage } from './app.po';

describe('tux-board App', () => {
  let page: TuxBoardPage;

  beforeEach(() => {
    page = new TuxBoardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

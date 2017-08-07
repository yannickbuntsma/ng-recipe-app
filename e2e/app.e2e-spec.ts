import { NgRecipeAppPage } from './app.po';

describe('ng-recipe-app App', () => {
  let page: NgRecipeAppPage;

  beforeEach(() => {
    page = new NgRecipeAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

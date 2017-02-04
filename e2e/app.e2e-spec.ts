import { Angular2QueryBuilderPage } from './app.po';

describe('angular2-query-builder App', function() {
  let page: Angular2QueryBuilderPage;

  beforeEach(() => {
    page = new Angular2QueryBuilderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

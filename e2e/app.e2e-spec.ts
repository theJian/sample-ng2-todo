import { SampleNg2TodoPage } from './app.po';

describe('sample-ng2-todo App', function() {
  let page: SampleNg2TodoPage;

  beforeEach(() => {
    page = new SampleNg2TodoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

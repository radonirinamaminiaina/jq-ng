import { FullcalendarNgJqPage } from './app.po';

describe('fullcalendar-ng-jq App', function() {
  let page: FullcalendarNgJqPage;

  beforeEach(() => {
    page = new FullcalendarNgJqPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

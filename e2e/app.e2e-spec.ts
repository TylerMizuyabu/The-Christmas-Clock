import { HolidayCountdownPage } from './app.po';

describe('holiday-countdown App', function() {
  let page: HolidayCountdownPage;

  beforeEach(() => {
    page = new HolidayCountdownPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

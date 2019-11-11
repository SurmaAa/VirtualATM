import Puppeteer from 'puppeteer';
import languageEn from './language/languageEN';
import languagePl from './language/languagePL';
import initialState from './state/initialState';

let page;
let browser;
let language;

/*
  MAKE SURE DEV SERVER WITH APP IS RUNNING
  If you want to test polish language, edit line in scenario 0
*/

beforeAll(async () => {
  browser = await Puppeteer.launch({ headless: false });
  page = await browser.newPage();
});

describe('Scenario 0 - set language', () => {

  it('should load page', async () => {
    //provide proper url if you are running on other server
    await page.goto('localhost:3000/');
  });

  it('should go to language screen', async () => {
    await page.waitFor(1000);
    await page.$$eval('[data-test="button-column"]', el => el[5].click());
  });

  it('should set language to english/polish', async () => {
    // el[0] is English, el[1] is Polish
    const lang = 0;
    language = lang ? languagePl : languageEn;
    await page.$$eval('[data-test="button-column"]', (el, lang) => el[lang].click(), lang);
  });

  it('make sure screen language is ok', async () => {
    await page.waitFor(1000);
    const mainText = await page.$eval('[data-test="main-text"]', el => el.textContent);
    const secondaryText = await page.$$eval('[data-test="secondary-text"]', el => el.map(e => e.textContent));
    const descriptionForButtons = await page.$$eval('[data-test="btn-desc-text"]', el => el.map(e => e.textContent));

    expect(mainText).toBe(language.LANGUAGE);
    expect(secondaryText[0]).toBe(language.LANGUAGE_SCREEN_DESC);
    expect(descriptionForButtons[0]).toBe(language.ENGLISH);
    expect(descriptionForButtons[1]).toBe(language.POLISH);
    expect(descriptionForButtons[2]).toBe('');
    expect(descriptionForButtons[3]).toBe('');
    expect(descriptionForButtons[4]).toBe('');
    expect(descriptionForButtons[5]).toBe('');
    expect(descriptionForButtons[6]).toBe('');
    expect(descriptionForButtons[7]).toBe(language.BACK);
  });

  it('should go back to default screen', async () => {
    await page.waitFor(1000);
    await page.$$eval('[data-test="button-column"]', el => el[7].click());
  });

});

describe('Scenario 1 - check balance', () => {

  it('make sure screen language is ok', async () => {
    await page.waitFor(1000);
    const mainText = await page.$eval('[data-test="main-text"]', el => el.textContent);
    const descriptionForButtons = await page.$$eval('[data-test="btn-desc-text"]', el => el.map(e => e.textContent));

    expect(mainText).toBe(language.ATM);
    expect(descriptionForButtons[0]).toBe(language.WITHDRAWAL);
    expect(descriptionForButtons[1]).toBe(language.DEPOSIT);
    expect(descriptionForButtons[2]).toBe(language.BALANCE);
    expect(descriptionForButtons[3]).toBe(language.BLIK_TRANSACTION);
    expect(descriptionForButtons[4]).toBe(language.HACK);
    expect(descriptionForButtons[5]).toBe(language.LANGUAGE);
    expect(descriptionForButtons[6]).toBe(language.HELP);
    expect(descriptionForButtons[7]).toBe(language.BACK);
  });

  it('make sure keyboard language is ok', async () => {
    await page.waitFor(1000);
    const confirmBtn = await page.$eval('[data-test="button-keyboard-confirm"]', el => el.textContent);
    const cancelBtn = await page.$eval('[data-test="button-keyboard-cancel"]', el => el.textContent);
    const clearBtn = await page.$eval('[data-test="button-keyboard-clear"]', el => el.textContent);

    expect(confirmBtn).toBe(language.CONFIRM);
    expect(cancelBtn).toBe(language.CANCEL);
    expect(clearBtn).toBe(language.CLEAR);
  });

  it('should go to balance screen', async () => {
    await page.waitFor(1000);
    await page.$$eval('[data-test="button-column"]', el => el[2].click());
  });

  it('make sure screen language is ok', async () => {
    await page.waitFor(1000);
    const mainText = await page.$eval('[data-test="main-text"]', el => el.textContent);
    const descriptionForButtons = await page.$$eval('[data-test="btn-desc-text"]', el => el.map(e => e.textContent));

    expect(mainText).toBe(language.BALANCE);
    expect(descriptionForButtons[0]).toBe('');
    expect(descriptionForButtons[1]).toBe('');
    expect(descriptionForButtons[2]).toBe('');
    expect(descriptionForButtons[3]).toBe('');
    expect(descriptionForButtons[4]).toBe('');
    expect(descriptionForButtons[5]).toBe('');
    expect(descriptionForButtons[6]).toBe('');
    expect(descriptionForButtons[7]).toBe(language.BACK);
  });

  it('should get balance and balance should be 2315', async () => {
    await page.waitFor(1000);

    let balance = await page.$eval('[data-test="secondary-text"]', el => el.textContent);
    balance = parseFloat(balance.replace(language.BALANCE_SCREEN_DESC, '').replace(language.PLN, ''));

    expect(balance).toBe(initialState.balance);
  });

  it('should go back to default screen', async () => {
    await page.waitFor(1000);
    await page.$$eval('[data-test="button-column"]', el => el[7].click());
  });

});

describe('Scenario 2 - withdrawal by user input', () => {

  it('should go to withdraw screen', async () => {
    await page.waitFor(1000);
    await page.$$eval('[data-test="button-column"]', el => el[0].click());
  });

  it('make sure screen language is ok', async () => {
    await page.waitFor(1000);
    const mainText = await page.$eval('[data-test="main-text"]', el => el.textContent);
    const secondaryText = await page.$$eval('[data-test="secondary-text"]', el => el.map(e => e.textContent));
    const descriptionForButtons = await page.$$eval('[data-test="btn-desc-text"]', el => el.map(e => e.textContent));

    expect(mainText).toBe(language.WITHDRAWAL);
    expect(secondaryText[0]).toBe(language.WITHDRAWAL_SCREEN_DESC);
    expect(descriptionForButtons[0]).toBe(language['20']);
    expect(descriptionForButtons[1]).toBe(language['50']);
    expect(descriptionForButtons[2]).toBe(language['100']);
    expect(descriptionForButtons[3]).toBe(language['200']);
    expect(descriptionForButtons[4]).toBe(language['500']);
    expect(descriptionForButtons[5]).toBe(language.CUSTOM_AMOUNT);
    expect(descriptionForButtons[6]).toBe('');
    expect(descriptionForButtons[7]).toBe(language.BACK);
  });

  it('should choose custom amount option and go to confirmation screen', async () => {
    await page.waitFor(1000);
    await page.$$eval('[data-test="button-column"]', el => el[5].click());
  });

  it('make sure screen language is ok', async () => {
    await page.waitFor(1000);
    const mainText = await page.$eval('[data-test="main-text"]', el => el.textContent);
    const secondaryText = await page.$$eval('[data-test="secondary-text"]', el => el.map(e => e.textContent));
    const descriptionForButtons = await page.$$eval('[data-test="btn-desc-text"]', el => el.map(e => e.textContent));

    expect(mainText).toBe(language.WITHDRAWAL);
    expect(secondaryText[0]).toBe(language.PROVIDE_AMOUNT);
    expect(descriptionForButtons[0]).toBe(language.CONFIRM);
    expect(descriptionForButtons[1]).toBe('');
    expect(descriptionForButtons[2]).toBe('');
    expect(descriptionForButtons[3]).toBe('');
    expect(descriptionForButtons[4]).toBe(language.CANCEL);
    expect(descriptionForButtons[5]).toBe('');
    expect(descriptionForButtons[6]).toBe('');
    expect(descriptionForButtons[7]).toBe(language.BACK);
  });

  it('should provide value 315 to user input', async () => {
    await page.waitFor(1000);
    await page.click('[data-test="button-keyboard-3"]');
    await page.waitFor(100);
    await page.click('[data-test="button-keyboard-1"]');
    await page.waitFor(100);
    await page.click('[data-test="button-keyboard-5"]');
    await page.waitFor(100);

    let fakeInputValue = await page.$$eval('[data-test="secondary-text"]', el => el[1].textContent);
    fakeInputValue = parseFloat(fakeInputValue.replace(language.PLN, ''));

    expect(fakeInputValue).toBe(315);
  });

  it('should confirm and go to balance screen', async () => {
    await page.waitFor(1000);
    await page.$$eval('[data-test="button-column"]', el => el[0].click());
  });

  it('current balance should be 2000', async () => {
    await page.waitFor(1000);

    let balance = await page.$$eval('[data-test="secondary-text"]', el => el[1].textContent);
    balance = parseFloat(balance.replace(language.BALANCE_SCREEN_DESC, '').replace(language.PLN, ''));

    expect(balance).toBe(2000);
  });

  it('should have succesful message', async () => {
    await page.waitFor(1000);

    const msg = await page.$$eval('[data-test="secondary-text"]', el => el[0].textContent);

    expect(msg).toBe(language.SUCCESS);
  });

  it('should go back to default screen', async () => {
    await page.waitFor(1000);
    await page.$$eval('[data-test="button-column"]', el => el[7].click());
  });

});

describe('Scenario 3 - withdrawal by defined buttons', () => {

  it('should go to withdraw screen', async () => {
    await page.waitFor(1000);
    await page.$$eval('[data-test="button-column"]', el => el[0].click());
  });

  it('should choose 100 PLN option and go to confirmation screen', async () => {
    await page.waitFor(1000);
    await page.$$eval('[data-test="button-column"]', el => el[2].click());
  });

  it('should confirm and go to balance screen', async () => {
    await page.waitFor(1000);
    await page.$$eval('[data-test="button-column"]', el => el[0].click());
  });

  it('current balance should be 1900', async () => {
    await page.waitFor(1000);

    let balance = await page.$$eval('[data-test="secondary-text"]', el => el[1].textContent);
    balance = parseFloat(balance.replace(language.BALANCE_SCREEN_DESC, '').replace(language.PLN, ''));

    expect(balance).toBe(1900);
  });

  it('should have succesful message', async () => {
    await page.waitFor(1000);

    const msg = await page.$$eval('[data-test="secondary-text"]', el => el[0].textContent);

    expect(msg).toBe(language.SUCCESS);
  });

  it('should go back to default screen', async () => {
    await page.waitFor(1000);
    await page.$$eval('[data-test="button-column"]', el => el[7].click());
  });

});

describe('Scenario 4 - withdrawal by user input but using keyboard confirmation/clear keys', () => {

  it('should go to withdraw screen', async () => {
    await page.waitFor(1000);
    await page.$$eval('[data-test="button-column"]', el => el[0].click());
  });

  it('should choose custom amount option and go to confirmation screen', async () => {
    await page.waitFor(1000);
    await page.$$eval('[data-test="button-column"]', el => el[5].click());
  });

  it('should provide value 315 to user input', async () => {
    await page.waitFor(1000);
    await page.click('[data-test="button-keyboard-3"]');
    await page.waitFor(100);
    await page.click('[data-test="button-keyboard-1"]');
    await page.waitFor(100);
    await page.click('[data-test="button-keyboard-5"]');
    await page.waitFor(100);

    let fakeInputValue = await page.$$eval('[data-test="secondary-text"]', el => el[1].textContent);
    fakeInputValue = parseFloat(fakeInputValue.replace(language.PLN, ''));

    expect(fakeInputValue).toBe(315);
  });

  it('should clear value', async () => {
    await page.waitFor(1000);
    await page.click('[data-test="button-keyboard-clear"]');

    const fakeInputValue = await page.$$eval('[data-test="secondary-text"]', el => el[1].textContent);

    expect(fakeInputValue).toBe('0.00 PLN');
  });

  it('should provide value 400 to user input', async () => {
    await page.waitFor(1000);
    await page.click('[data-test="button-keyboard-4"]');
    await page.waitFor(100);
    await page.click('[data-test="button-keyboard-0"]');
    await page.waitFor(100);
    await page.click('[data-test="button-keyboard-0"]');
    await page.waitFor(100);

    let fakeInputValue = await page.$$eval('[data-test="secondary-text"]', el => el[1].textContent);
    fakeInputValue = parseFloat(fakeInputValue.replace(language.PLN, ''));

    expect(fakeInputValue).toBe(400);
  });

  it('should confirm and go to balance screen', async () => {
    await page.waitFor(1000);
    await page.click('[data-test="button-keyboard-confirm"]');
    await page.waitFor(100);
  });

  it('current balance should be 1500', async () => {
    await page.waitFor(1000);

    let balance = await page.$$eval('[data-test="secondary-text"]', el => el[1].textContent);
    balance = parseFloat(balance.replace(language.BALANCE_SCREEN_DESC, '').replace(language.PLN, ''));

    expect(balance).toBe(1500);
  });

  it('should have succesful message', async () => {
    await page.waitFor(1000);

    const msg = await page.$$eval('[data-test="secondary-text"]', el => el[0].textContent);

    expect(msg).toBe(language.SUCCESS);
  });

  it('should go back to default screen', async () => {
    await page.waitFor(1000);
    await page.$$eval('[data-test="button-column"]', el => el[7].click());
  });

});

describe('Scenario 5 - deposit by user input but using keyboard confirmation/clear keys', () => {

  it('should go to deposit screen', async () => {
    await page.waitFor(1000);
    await page.$$eval('[data-test="button-column"]', el => el[1].click());
  });

  it('make sure screen language is ok', async () => {
    await page.waitFor(1000);
    const mainText = await page.$eval('[data-test="main-text"]', el => el.textContent);
    const secondaryText = await page.$$eval('[data-test="secondary-text"]', el => el.map(e => e.textContent));
    const descriptionForButtons = await page.$$eval('[data-test="btn-desc-text"]', el => el.map(e => e.textContent));

    expect(mainText).toBe(language.DEPOSIT);
    expect(secondaryText[0]).toBe(language.DEPOSIT_SCREEN_DESC);
    expect(descriptionForButtons[0]).toBe(language['20']);
    expect(descriptionForButtons[1]).toBe(language['50']);
    expect(descriptionForButtons[2]).toBe(language['100']);
    expect(descriptionForButtons[3]).toBe(language['200']);
    expect(descriptionForButtons[4]).toBe(language['500']);
    expect(descriptionForButtons[5]).toBe(language.CUSTOM_AMOUNT);
    expect(descriptionForButtons[6]).toBe('');
    expect(descriptionForButtons[7]).toBe(language.BACK);
  });

  it('should choose custom amount option and go to confirmation screen', async () => {
    await page.waitFor(1000);
    await page.$$eval('[data-test="button-column"]', el => el[5].click());
  });

  it('make sure screen language is ok', async () => {
    await page.waitFor(1000);
    const mainText = await page.$eval('[data-test="main-text"]', el => el.textContent);
    const secondaryText = await page.$$eval('[data-test="secondary-text"]', el => el.map(e => e.textContent));
    const descriptionForButtons = await page.$$eval('[data-test="btn-desc-text"]', el => el.map(e => e.textContent));

    expect(mainText).toBe(language.DEPOSIT);
    expect(secondaryText[0]).toBe(language.PROVIDE_AMOUNT);
    expect(descriptionForButtons[0]).toBe(language.CONFIRM);
    expect(descriptionForButtons[1]).toBe('');
    expect(descriptionForButtons[2]).toBe('');
    expect(descriptionForButtons[3]).toBe('');
    expect(descriptionForButtons[4]).toBe(language.CANCEL);
    expect(descriptionForButtons[5]).toBe('');
    expect(descriptionForButtons[6]).toBe('');
    expect(descriptionForButtons[7]).toBe(language.BACK);
  });

  it('should provide value 315 to user input', async () => {
    await page.waitFor(1000);
    await page.click('[data-test="button-keyboard-1"]');
    await page.waitFor(100);
    await page.click('[data-test="button-keyboard-2"]');
    await page.waitFor(100);
    await page.click('[data-test="button-keyboard-3"]');
    await page.waitFor(100);
    await page.click('[data-test="button-keyboard-4"]');
    await page.waitFor(100);
    await page.click('[data-test="button-keyboard-5"]');
    await page.waitFor(100);
    await page.click('[data-test="button-keyboard-6"]');
    await page.waitFor(100);
    await page.click('[data-test="button-keyboard-7"]');
    await page.waitFor(100);
    await page.click('[data-test="button-keyboard-8"]');
    await page.waitFor(100);
    await page.click('[data-test="button-keyboard-9"]');
    await page.waitFor(100);

    let fakeInputValue = await page.$$eval('[data-test="secondary-text"]', el => el[1].textContent);
    fakeInputValue = parseFloat(fakeInputValue.replace(language.PLN, ''));

    expect(fakeInputValue).toBe(123456789);
  });

  it('should clear value', async () => {
    await page.waitFor(1000);
    await page.click('[data-test="button-keyboard-clear"]');
    await page.waitFor(100);

    const fakeInputValue = await page.$$eval('[data-test="secondary-text"]', el => el[1].textContent);

    expect(fakeInputValue).toBe('0.00 PLN');
  });

  it('should provide value 500 to user input', async () => {
    await page.waitFor(1000);
    await page.click('[data-test="button-keyboard-5"]');
    await page.waitFor(100);
    await page.click('[data-test="button-keyboard-0"]');
    await page.waitFor(100);
    await page.click('[data-test="button-keyboard-0"]');
    await page.waitFor(100);

    let fakeInputValue = await page.$$eval('[data-test="secondary-text"]', el => el[1].textContent);
    fakeInputValue = parseFloat(fakeInputValue.replace(language.PLN, ''));

    expect(fakeInputValue).toBe(500);
  });

  it('should confirm and go to balance screen', async () => {
    await page.waitFor(1000);
    await page.click('[data-test="button-keyboard-confirm"]');
  });

  it('current balance should be 2000', async () => {
    await page.waitFor(1000);

    let balance = await page.$$eval('[data-test="secondary-text"]', el => el[1].textContent);
    balance = parseFloat(balance.replace(language.BALANCE_SCREEN_DESC, '').replace(language.PLN, ''));

    expect(balance).toBe(2000);
  });

  it('should have succesful message', async () => {
    await page.waitFor(1000);

    const msg = await page.$$eval('[data-test="secondary-text"]', el => el[0].textContent);

    expect(msg).toBe(language.SUCCESS);
  });

  it('should go back to default screen', async () => {
    await page.waitFor(1000);
    await page.$$eval('[data-test="button-column"]', el => el[7].click());
  });

});

describe('Scenario 6 - deposit by user input', () => {

  it('should go to deposit screen', async () => {
    await page.waitFor(1000);
    await page.$$eval('[data-test="button-column"]', el => el[1].click());
  });

  it('should choose custom amount option and go to confirmation screen', async () => {
    await page.waitFor(1000);
    await page.$$eval('[data-test="button-column"]', el => el[5].click());
  });

  it('should provide value 300 to user input', async () => {
    await page.waitFor(1000);
    await page.click('[data-test="button-keyboard-3"]');
    await page.waitFor(100);
    await page.click('[data-test="button-keyboard-0"]');
    await page.waitFor(100);
    await page.click('[data-test="button-keyboard-0"]');
    await page.waitFor(100);

    let fakeInputValue = await page.$$eval('[data-test="secondary-text"]', el => el[1].textContent);
    fakeInputValue = parseFloat(fakeInputValue.replace(language.PLN, ''));

    expect(fakeInputValue).toBe(300);
  });

  it('should confirm and go to balance screen', async () => {
    await page.waitFor(1000);
    await page.$$eval('[data-test="button-column"]', el => el[0].click());
  });

  it('current balance should be 2300', async () => {
    await page.waitFor(1000);

    let balance = await page.$$eval('[data-test="secondary-text"]', el => el[1].textContent);
    balance = parseFloat(balance.replace(language.BALANCE_SCREEN_DESC, '').replace(language.PLN, ''));

    expect(balance).toBe(2300);
  });

  it('should have succesful message', async () => {
    await page.waitFor(1000);

    const msg = await page.$$eval('[data-test="secondary-text"]', el => el[0].textContent);

    expect(msg).toBe(language.SUCCESS);
  });

  it('should go back to default screen', async () => {
    await page.waitFor(1000);
    await page.$$eval('[data-test="button-column"]', el => el[7].click());
  });

});


describe('Scenario 7 - deposit by defined buttons', () => {

  it('should go to deposit screen', async () => {
    await page.waitFor(1000);
    await page.$$eval('[data-test="button-column"]', el => el[1].click());
  });

  it('should choose 200 PLN option and go to confirmation screen', async () => {
    await page.waitFor(1000);
    await page.$$eval('[data-test="button-column"]', el => el[3].click());
  });

  it('should confirm and go to balance screen', async () => {
    await page.waitFor(1000);
    await page.$$eval('[data-test="button-column"]', el => el[0].click());
  });

  it('current balance should be 1900', async () => {
    await page.waitFor(1000);

    let balance = await page.$$eval('[data-test="secondary-text"]', el => el[1].textContent);
    balance = parseFloat(balance.replace(language.BALANCE_SCREEN_DESC, '').replace(language.PLN, ''));

    expect(balance).toBe(2500);
  });

  it('should have succesful message', async () => {
    await page.waitFor(1000);

    const msg = await page.$$eval('[data-test="secondary-text"]', el => el[0].textContent);

    expect(msg).toBe(language.SUCCESS);
  });

  it('should go back to default screen', async () => {
    await page.waitFor(1000);
    await page.$$eval('[data-test="button-column"]', el => el[7].click());
  });

});

describe('Scenario 8 - withdrawal should fail because balance is too few', () => {

  it('should go to withdraw screen', async () => {
    await page.waitFor(1000);
    await page.$$eval('[data-test="button-column"]', el => el[0].click());
  });

  it('should choose custom amount option and go to confirmation screen', async () => {
    await page.waitFor(1000);
    await page.$$eval('[data-test="button-column"]', el => el[5].click());
  });

  it('should provide value 999999 to user input', async () => {
    await page.waitFor(1000);
    await page.click('[data-test="button-keyboard-9"]');
    await page.waitFor(100);
    await page.click('[data-test="button-keyboard-9"]');
    await page.waitFor(100);
    await page.click('[data-test="button-keyboard-9"]');
    await page.waitFor(100);
    await page.click('[data-test="button-keyboard-9"]');
    await page.waitFor(100);
    await page.click('[data-test="button-keyboard-9"]');
    await page.waitFor(100);
    await page.click('[data-test="button-keyboard-9"]');
    await page.waitFor(100);

    let fakeInputValue = await page.$$eval('[data-test="secondary-text"]', el => el[1].textContent);
    fakeInputValue = parseFloat(fakeInputValue.replace(language.PLN, ''));

    expect(fakeInputValue).toBe(999999);
  });

  it('should confirm and go to balance screen', async () => {
    await page.waitFor(1000);
    await page.$$eval('[data-test="button-column"]', el => el[0].click());
  });

  it('current balance should be 2500', async () => {
    await page.waitFor(1000);

    let balance = await page.$$eval('[data-test="secondary-text"]', el => el[1].textContent);
    balance = parseFloat(balance.replace(language.BALANCE_SCREEN_DESC, '').replace(language.PLN, ''));

    expect(balance).toBe(2500);
  });

  it('should have succesful message', async () => {
    await page.waitFor(1000);

    const msg = await page.$$eval('[data-test="secondary-text"]', el => el[0].textContent);

    expect(msg).toBe(language.TRANSACTION_FAIL_TOO_FEW_FUNDS);
  });

  it('should go back to default screen', async () => {
    await page.waitFor(1000);
    await page.$$eval('[data-test="button-column"]', el => el[7].click());
  });

});

describe('Scenario 9 - withdrawal should fail because miminal transaction amount is 1 PLN', () => {

  it('should go to withdraw screen', async () => {
    await page.waitFor(1000);
    await page.$$eval('[data-test="button-column"]', el => el[0].click());
  });

  it('should choose custom amount option and go to confirmation screen', async () => {
    await page.waitFor(1000);
    await page.$$eval('[data-test="button-column"]', el => el[5].click());
  });

  it('should not provide value to user input', async () => {
    await page.waitFor(1000);

    let fakeInputValue = await page.$$eval('[data-test="secondary-text"]', el => el[1].textContent);

    expect(fakeInputValue).toBe('0.00 PLN');
  });

  it('should confirm and go to balance screen', async () => {
    await page.waitFor(1000);
    await page.$$eval('[data-test="button-column"]', el => el[0].click());
  });

  it('current balance should be 2500', async () => {
    await page.waitFor(1000);

    let balance = await page.$$eval('[data-test="secondary-text"]', el => el[1].textContent);
    balance = parseFloat(balance.replace(language.BALANCE_SCREEN_DESC, '').replace(language.PLN, ''));

    expect(balance).toBe(2500);
  });

  it('should have succesful message', async () => {
    await page.waitFor(1000);

    const msg = await page.$$eval('[data-test="secondary-text"]', el => el[0].textContent);

    expect(msg).toBe(language.TRANSACTION_FAIL_MINIMAL_AMOUNT);
  });

  it('should go back to default screen', async () => {
    await page.waitFor(1000);
    await page.$$eval('[data-test="button-column"]', el => el[7].click());
  });

});

describe('Scenario 10 - deposit should fail because miminal transaction amount is 1 PLN', () => {

  it('should go to deposit screen', async () => {
    await page.waitFor(1000);
    await page.$$eval('[data-test="button-column"]', el => el[1].click());
  });

  it('should choose custom amount option and go to confirmation screen', async () => {
    await page.waitFor(1000);
    await page.$$eval('[data-test="button-column"]', el => el[5].click());
  });

  it('should not provide value to user input', async () => {
    await page.waitFor(1000);

    let fakeInputValue = await page.$$eval('[data-test="secondary-text"]', el => el[1].textContent);

    expect(fakeInputValue).toBe('0.00 PLN');
  });

  it('should confirm and go to balance screen', async () => {
    await page.waitFor(1000);
    await page.$$eval('[data-test="button-column"]', el => el[0].click());
  });

  it('current balance should be 2500', async () => {
    await page.waitFor(1000);

    let balance = await page.$$eval('[data-test="secondary-text"]', el => el[1].textContent);
    balance = parseFloat(balance.replace(language.BALANCE_SCREEN_DESC, '').replace(language.PLN, ''));

    expect(balance).toBe(2500);
  });

  it('should have succesful message', async () => {
    await page.waitFor(1000);

    const msg = await page.$$eval('[data-test="secondary-text"]', el => el[0].textContent);

    expect(msg).toBe(language.TRANSACTION_FAIL_MINIMAL_AMOUNT);
  });

  it('should go back to default screen', async () => {
    await page.waitFor(1000);
    await page.$$eval('[data-test="button-column"]', el => el[7].click());
  });

});

describe('Scenario 11 - go to help screen', () => {

  it('should go to help screen', async () => {
    await page.waitFor(1000);
    await page.$$eval('[data-test="button-column"]', el => el[6].click());
  });

  it('make sure screen language is ok', async () => {
    await page.waitFor(1000);
    const mainText = await page.$eval('[data-test="main-text"]', el => el.textContent);
    const secondaryText = await page.$$eval('[data-test="secondary-text"]', el => el.map(e => e.textContent));
    const descriptionForButtons = await page.$$eval('[data-test="btn-desc-text"]', el => el.map(e => e.textContent));

    expect(mainText).toBe(language.HELP);
    expect(secondaryText[0]).toBe(language.CONTACT);
    expect(secondaryText[1]).toBe(language.CONTACT_EMAIL);
    expect(secondaryText[2]).toBe(language.CONTACT_PHONE);
    expect(descriptionForButtons[0]).toBe('');
    expect(descriptionForButtons[1]).toBe('');
    expect(descriptionForButtons[2]).toBe('');
    expect(descriptionForButtons[3]).toBe('');
    expect(descriptionForButtons[4]).toBe('');
    expect(descriptionForButtons[5]).toBe('');
    expect(descriptionForButtons[6]).toBe('');
    expect(descriptionForButtons[7]).toBe(language.BACK);
  });

  it('should go back to default screen', async () => {
    await page.waitFor(1000);
    await page.$$eval('[data-test="button-column"]', el => el[7].click());
  });

});



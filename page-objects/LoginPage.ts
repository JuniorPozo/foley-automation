import { type Browser, type BrowserContext, expect, type Locator, type Page } from '@playwright/test'

export class LoginPage {
  
  readonly page: Page;
  readonly browser: Browser;
  readonly browserContext: BrowserContext;
  readonly usernameTextBox: Locator;
  readonly passwordTextBox: Locator;
  readonly LoginButton: Locator;
  readonly successToast: Locator;
  readonly borrowingBox: Locator;
  readonly investmentsBox: Locator;
  readonly businessSupportBox: Locator;
  readonly searchLocationTextBox: Locator;
  readonly branchBoxesCount: Locator;
  readonly noResultsAlert: Locator;
  readonly checkingAccountsButton: Locator;
  readonly checkingAccountsButton2: Locator;
  readonly selectCheckingMoreDetailsButton: Locator;
  readonly simplyRightCheckingMoreDetailsButton: Locator;
  readonly essentialCheckingMoreDetailsButton: Locator;
  readonly simplyRightCheckingOpenAccountLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameTextBox = page.locator('input[name="username"]');
    this.passwordTextBox = page.locator('input[name="password"]');
    this.LoginButton = page.locator('button[type="submit"]').last();
    this.successToast = page.locator('div[class*="Toast_success"]');
    this.simplyRightCheckingMoreDetailsButton = page.locator('a[class*="btn-round"][href*="simply-right-checking"]');
    this.essentialCheckingMoreDetailsButton = page.locator('a[class*="btn-round"][href*="essential-checking"]');
    this.simplyRightCheckingOpenAccountLink = page.locator('a[class*="openlink"][href*="SimplyRightChecking"]');
  }

  /**
   * @param url
   * Go to Webpage
  */
  async home(url: string) {
    await this.page.goto(url);
  }

  /**
   * @param username 
   * @param password
   * Type username and password, then click Log in button
   */
  async doLogin(username: string, password: string) {
    await this.usernameTextBox.clear();
    await this.usernameTextBox.fill(username);
    await this.passwordTextBox.clear();
    await this.passwordTextBox.fill(password);
    await this.LoginButton.click();
    await expect(this.successToast).toBeTruthy();
  }

  /**
   * Click the “Select” button for “Everyday Banking”
  */
  /*async clickSelectButtonForEverydayBanking() {
    await this.everydayBankingSelectButton.click({force: true});
  }*/

  /**
   * Search for a valid location using zipcode.   
   * @param zipCode - string input
   * 4 Boxes and Hazlet city should be displayed
  */
  /*async searchForValidLocation(zipCode: string) {
    await this.searchLocationTextBox.fill(zipCode);
    await this.page.keyboard.press('Enter');
    await expect(this.branchBoxesCount).toHaveCount(4);
    await expect(this.page.getByText('Hazlet')).toBeTruthy();
  }*/

  /**
   * Click the “Open account” link for “Simply Right® Checking”
   * Validate URL contains the url that is in the assertion
  */
  /*async clickSimplyRightCheckingOpenAccount() {
    const [newWindow] = await Promise.all([
      this.page.waitForEvent('popup'),
      await this.simplyRightCheckingOpenAccountLink.click(),
    ]);
    await expect(newWindow.url()).toContain(
      'https://secureopen.santanderbank.com/apps/servlet/SmartForm.html?formCode=sbnadao&product=SimplyRightChecking'
    );
  }*/
}

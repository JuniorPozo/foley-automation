import { type Browser, type BrowserContext, expect, type Locator, type Page } from '@playwright/test'

export class CheckoutPage {
  
  readonly page: Page;
  readonly browser: Browser;
  readonly browserContext: BrowserContext;
  readonly checkoutOption: Locator;
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
    this.checkoutOption = page.locator('a[data-testid="nav-link-checkout"]');
  }

}

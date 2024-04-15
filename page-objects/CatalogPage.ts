import { type Browser, type BrowserContext, expect, type Locator, type Page } from '@playwright/test'

export class CatalogPage {
  
  readonly page: Page;
  readonly browser: Browser;
  readonly browserContext: BrowserContext;
  readonly catalogOption: Locator;
  readonly enterSkuTextbox: Locator;
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
    this.catalogOption = page.locator('a[data-testid="nav-link-catalog"]');
    this.enterSkuTextbox = page.locator('input[placeholder="Enter Sku or Keyword"]');
  }

  async clickCatalogOption() {
    await this.catalogOption.click();
    expect(this.enterSkuTextbox).toBeTruthy();
  }

}

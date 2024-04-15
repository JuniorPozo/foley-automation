import { test } from '@playwright/test';
import { LoginPage } from '../../page-objects/LoginPage';
import { CatalogPage } from '../../page-objects/CatalogPage';
import { qa } from '../../test-data/qa.json';
import { stg } from '../../test-data/stg.json';
import { prod } from '../../test-data/prod.json';

test.describe.parallel('Catalog Scenarios', () => {
  let loginPage: LoginPage;
  let catalogPage: CatalogPage;
  let testData: any;
  
  //Before All Tests
  test.beforeAll(async ({ browser }) => {
    process.env.ENV === 'QA' ? testData = qa: process.env.ENV === 'STG' ? testData = stg : testData = prod
  })
  
  //Before Each Test
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    catalogPage = new CatalogPage(page);
  });

  test('Validate Catalog Option is displaying SKU textbox', async ({ page }) => {
    await test.step('Go to application', async () => {
      await loginPage.home('');
    })
    await test.step('Fill username and password, then click Log in button', async () => {
      await loginPage.doLogin(testData.login.username, testData.login.password);
    })
    await test.step('Click Catalog option', async () => {
      await catalogPage.clickCatalogOption();
    })
    
  });

});

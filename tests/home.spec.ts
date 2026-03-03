import { test, expect } from '../fixtures/fixtures';
import { HomePage } from '../page-objects/HomePage';

/**
 * Test: Succesfully open application Homepage.
 */
test('Open Scryfall Home Page', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await expect(page.getByRole('heading', { name: 'Scryfall is a powerful Magic: The Gathering card search' })).toBeVisible();
});

/**
 * Test: Searching for a card by name yields expected results.
 */
test('Search for a card by name', async ({ page, searchData}) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await homePage.search(searchData.cardName);
  await expect(page.getByText(searchData.cardName)).toBeVisible();
});

/**
 * Test: Searching for a set by set code yields expected results.
 */
test('Search for a set by set code', async ({ page, searchData}) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await homePage.search(searchData.setCode);
  await expect(page.locator('h1')).toContainText(searchData.setCode.substring(4));
});

/**
 * Test: Searching for a collection of cards by complex criteria yields expected results.
 */
test('Search for a group of cards with complex syntax', async ({ page, searchData}) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await homePage.search(searchData.complexSearch);
  await expect(page.locator('#main')).toContainText(
    'where the card types include “creature” and (the colors is U or the colors is R or the colors is RU) and the mana cost is greater than {5}'
  );
});

/**
 * Test: Confirm that all 7-up collage links function and link out as expected.
 */
test('Validate all 7-up collage cards link out correctly', async ({page}) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  let cardNameP;
  for(let i = 0; i < homePage.sevenUpCollage.length; i++){
    cardNameP = await homePage.sevenUpCollage[i].getAttribute('title').then(result => result?.toString());
    await homePage.sevenUpCollage[i].click({position: {x: 0, y: 0}});
    await expect(page.getByRole('img', { name: cardNameP })).toBeVisible();
    await homePage.goto();
  }
});

/**
 * Test: Confirm that all main homepage links function and link out as expected.
 */
test('Validate all homepage links', async ({page}) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await homePage.AdvSearchButton.click();
  await expect(page).toHaveURL(/advanced/);

  await homePage.goto();
  await homePage.syntaxButton.click();
  await expect(page).toHaveURL(/docs\/syntax/);

  await homePage.goto();
  await homePage.allSetsButton.click();
  await expect(page).toHaveURL(/sets/);

  await homePage.goto();
  await homePage.randomButton.click();
  await expect(page.getByRole('link', {name: 'One random card'})).toBeVisible();
});

/**
 * Test: Confirm that all footer links function and link out as expected.
 */
test('Validate all footer links', async ({page}) => {
  const homePage = new HomePage(page);
   
  //#region Cards Column
  await homePage.goto();
  await homePage.footerAdvSearch.click();
  await expect(page).toHaveURL(/advanced/);
  
  await homePage.goto();
  await homePage.footerSyntax.click();
  await expect(page).toHaveURL(/docs\/syntax/);

  await homePage.goto();
  await homePage.footerAllSets.click();
  await expect(page).toHaveURL(/sets/);

  await homePage.goto();
  await homePage.footerRandom.click();
  await expect(page.getByRole('link', {name: 'One random card'})).toBeVisible();
  //#endregion
  //#region Scryfall Column
  await homePage.goto();
  await homePage.sAndDBots.click();
  await expect(page).toHaveURL(/bots/);

  await homePage.goto();
  await homePage.FAQs.click();
  await expect(page).toHaveURL(/docs\/faqs/);

  await homePage.goto();
  await homePage.blog.click();
  await expect(page).toHaveURL(/blog/);

  await homePage.goto();
  await homePage.tagger.click();
  await expect(page).toHaveURL(/tagger.scryfall/);

  await homePage.goto();
  await homePage.mTGWiki.click();
  await expect(page).toHaveURL(/mtg.wiki/);

  await homePage.goto();
  await homePage.artGame.click();
  await expect(page).toHaveURL(/artgame.scryfall/);
  //#endregion
  //#region Account Column
  await homePage.goto();
  await homePage.yourAccount.click();
  await expect(page).toHaveURL(/signin/);

  await homePage.goto();
  await homePage.register.click();
  await expect(page).toHaveURL(/register/);

  await homePage.goto();
  await homePage.tos.click();
  await expect(page).toHaveURL(/docs\/terms/);

  await homePage.goto();
  await homePage.contact.click();
  await expect(page).toHaveURL(/contact/);

  await homePage.goto();
  await homePage.privacy.click();
  await expect(page).toHaveURL(/docs\/privacy/);
  //#endregion
  //#region Developers Column
  await homePage.goto();
  await homePage.apiDocumentation.click();
  await expect(page).toHaveURL(/docs\/api/);

  await homePage.goto();
  await homePage.cardObjects.click();
  await expect(page).toHaveURL(/docs\/api\/cards/);

  await homePage.goto();
  await homePage.cardImagery.click();
  await expect(page).toHaveURL(/docs\/api\/images/);

  await homePage.goto();
  await homePage.bulkData.click();
  await expect(page).toHaveURL(/docs\/api\/bulk-data/);

  await homePage.goto();
  await homePage.apiChangeLog.click();
  await expect(page).toHaveURL(/blog\/category\/api/);
  //#endregion
  //#region More Column
  await homePage.goto();
  await homePage.donate.click();
  await expect(page).toHaveURL(/donate/);

  await homePage.goto();
  await homePage.patreon.click();
  await expect(page).toHaveURL(/patreon.com\/scryfall/);

  await homePage.goto();
  await homePage.bluesky.click();
  await expect(page).toHaveURL(/bsky.app\/profile\/scryfall/);

  await homePage.goto();
  await homePage.github.click();
  await expect(page).toHaveURL(/github.com\/scryfall/);
  //#endregion
});

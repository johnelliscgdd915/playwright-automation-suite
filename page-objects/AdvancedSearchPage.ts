// page-objects/AdvancedSearchPage.ts
import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object for the Advanced Search screen of Scryfall.
 * Encapsulates all element selectors and relevant actions.
 */
export class AdvancedSearchPage {
  readonly page: Page;

  readonly cardSearch: Locator;
  readonly textSearch: Locator;
  readonly textAddSymbol: Locator;
  readonly typeSearch: Locator;
  readonly allowPartialTypeCheck: Locator;

  readonly colorCheckW: Locator;
  readonly colorCheckU: Locator;
  readonly colorCheckB: Locator;
  readonly colorCheckR: Locator;
  readonly colorCheckG: Locator;
  readonly colorCheckC: Locator;
  readonly colorsDrop: Locator;


  readonly cmdrCIW: Locator;
  readonly cmdrCIU: Locator;
  readonly cmdrCIB: Locator;
  readonly cmdrCIR: Locator;
  readonly cmdrCIG: Locator;
  readonly cmdrCIC: Locator;

  readonly manaSearch: Locator;
  readonly manaAddSymbolDrop: Locator;

  readonly statsTypeDrop: Locator;
  readonly statsCompareDrop: Locator;
  readonly statsValInput: Locator;

  readonly gamesPaper: Locator;
  readonly gamesArena: Locator;
  readonly gamesMTGO: Locator;

  readonly formatsLegalityDrop: Locator;
  readonly formatSelectorDrop: Locator;

  readonly setNameInput: Locator;
  readonly blockNameInput: Locator;

  readonly rarityCCheck: Locator;
  readonly rarityUCheck: Locator;
  readonly rarityRCheck: Locator;
  readonly rarityMRCheck: Locator;

  readonly criteriaSearch: Locator;
  readonly partialCriteriaCheck: Locator;

  readonly currencyDropDown: Locator;
  readonly currencyCompDrop: Locator;
  readonly pricesValInput: Locator;

  readonly artistSearch: Locator;
  readonly flavorSearch: Locator;
  readonly loreSearch: Locator;
  readonly languageDrop: Locator;

  readonly prefDisplayDrop: Locator;
  readonly prefSortDrop: Locator;
  readonly detailPrefDrop: Locator;
  readonly prefShowPrintsCheck: Locator;
  readonly includeExtraCheck: Locator;

  readonly searchButton: Locator;
  


  /**
   * Initializes locators for homepage elements.
   * @param page - Playwright page instance
   */
  constructor(page: Page) {
    this.page = page;

    this.cardSearch = page.getByRole('textbox', { name: 'Card Name' });
    this.textSearch = page.getByRole('textbox', { name: 'Text', exact: true });
    this.textAddSymbol = page.locator('select').first();
    this.typeSearch =  page.getByRole('textbox', { name: 'Enter a type or choose from' });
    this.allowPartialTypeCheck =  page.getByRole('checkbox', { name: 'Allow partial type matches' })

    this.colorCheckW = page.getByRole('group').filter({ hasText: 'Card colors {W} White {U}' }).getByLabel('{W} White');
    this.colorCheckU = page.getByRole('group').filter({ hasText: 'Card colors {W} White {U}' }).getByLabel('{U} Blue');
    this.colorCheckB = page.getByRole('group').filter({ hasText: 'Card colors {W} White {U}' }).getByLabel('{B} Black');
    this.colorCheckR = page.getByRole('group').filter({ hasText: 'Card colors {W} White {U}' }).getByLabel('{R} Red');
    this.colorCheckG = page.getByRole('group').filter({ hasText: 'Card colors {W} White {U}' }).getByLabel('{G} Green');
    this.colorCheckC = page.getByRole('group').filter({ hasText: 'Card colors {W} White {U}' }).getByLabel('{C} Colorless');
    this.colorsDrop = page.getByLabel('Color Comparison');

    this.cmdrCIW = page.getByRole('group', { name: 'Commander colors' }).getByLabel('{W} White');
    this.cmdrCIU = page.getByRole('group', { name: 'Commander colors' }).getByLabel('{U} Blue');
    this.cmdrCIB = page.getByRole('group', { name: 'Commander colors' }).getByLabel('{B} Black');
    this.cmdrCIR = page.getByRole('group', { name: 'Commander colors' }).getByLabel('{R} Red');
    this.cmdrCIG = page.getByRole('group', { name: 'Commander colors' }).getByLabel('{G} Green');
    this.cmdrCIC = page.getByRole('group', { name: 'Commander colors' }).getByLabel('{C} Colorless');

    this.manaSearch = page.getByRole('textbox', { name: 'Mana Cost' });
    this.manaAddSymbolDrop = page.locator('select').nth(3);
    this.statsTypeDrop = page.getByLabel('Stats');
    this.statsCompareDrop = page.getByLabel('Stat 1 requirement');
    this.statsValInput =  page.getByRole('spinbutton', { name: 'Stat 1 value' });

    this.gamesPaper = page.getByRole('checkbox', { name: 'Paper' });
    this.gamesArena = page.getByRole('checkbox', { name: 'Arena' });
    this.gamesMTGO = page.getByRole('checkbox', { name: 'Magic Online' });

    this.formatsLegalityDrop = page.getByLabel('Format Status');
    this.formatSelectorDrop = page.getByLabel('Format 1');

    this.setNameInput = page.getByRole('textbox', { name: 'Enter a set name' });
    this.blockNameInput = page.getByRole('textbox', { name: 'Enter a block name' });

    this.rarityCCheck = page.getByRole('checkbox', { name: 'Common', exact: true });
    this.rarityUCheck = page.getByRole('checkbox', { name: 'Uncommon' });
    this.rarityRCheck = page.getByRole('checkbox', { name: 'Rare', exact: true });
    this.rarityMRCheck = page.getByRole('checkbox', { name: 'Mythic Rare' });
    
    this.criteriaSearch = page.getByRole('textbox', { name: 'Enter a criterion' });
    this.partialCriteriaCheck = page.getByRole('checkbox', { name: 'Allow partial criteria matches' });
    
    this.currencyDropDown = page.getByLabel('Currency 1', { exact: true });
    this.currencyCompDrop = page.getByLabel('Currency 1 requirement');
    this.pricesValInput = page.getByRole('spinbutton', { name: 'Currency 1 value' });
    
    this.artistSearch = page.getByRole('textbox', { name: 'Artist' });
    this.flavorSearch = page.getByRole('textbox', { name: 'Flavor Text' });
    this.loreSearch = page.getByRole('textbox', { name: 'Lore Finder™' });
    this.languageDrop = page.getByLabel('Language');

    this.prefDisplayDrop = page.getByLabel('Display');
    this.prefSortDrop = page.getByLabel('Sort');
    this.detailPrefDrop = page.getByLabel('Prefer');
    this.prefShowPrintsCheck = page.getByRole('checkbox', { name: 'Show all card prints' });
    this.includeExtraCheck = page.getByRole('checkbox', { name: 'Include extra cards' });
    
    this.searchButton = page.getByRole('button', { name: 'Search with these options' });

  }

  /**
   * Navigates to the Advanced Search page.
   */
  async goto(): Promise<void> {
    await this.page.goto('./advanced');
  }

  /**
   * Executes search via 'Search with these options' button snapped to the bottom of the Adv Search page. 
   * Will utilize all selected options and input text.
   */
  async search(): Promise<void> {
    await this.searchButton.click();
  }

  /**
   * Fills the Card Name field with desired text.
   * @param searchText - Any words in the desired card(s) name
   */
  async fillCardName(searchText: string): Promise<void> {
    await this.cardSearch.fill(searchText);
  }

  /**
   * Fills the Text field with desired text.
   * @param searchText - Text that should appear in the card(s) rules box
   */
  async fillTextField(searchText: string): Promise<void> {
    await this.textSearch.fill(searchText);
  }

  /**
   * Fills and sets the Type Line field with desired text.
   * @param searchText - Should be any legally recognized card type, supertype, or subtype
   */
  async fillTypeLine(searchText: string): Promise<void> {
    await this.typeSearch.fill(searchText);
    await this.page.keyboard.press('Enter');
  }

  /**
   * Searches string paramter for specific letters that correspond to colors in the Magic TCG.
   * Checks all boxes that match to valid letters in the 'Colors' section of search options.
   * @param colorsToCheck - string of letters, expects 'WUBRGC'. Order, spacing, and case do not matter.
   */
  async colorSelector(colorsToCheck: string): Promise<void> {
    if(colorsToCheck.includes('W'))
      await this.colorCheckW.check();
    if(colorsToCheck.includes('U'))
      await this.colorCheckU.check();
    if(colorsToCheck.includes('B'))
      await this.colorCheckB.check();
    if(colorsToCheck.includes('R'))
      await this.colorCheckR.check();
    if(colorsToCheck.includes('G'))
      await this.colorCheckG.check();
    if(colorsToCheck.includes('C'))
      await this.colorCheckC.check();
  }

  /**
   * Searches string paramter for specific letters that correspond to colors in the Magic TCG.
   * Checks all boxes that match to valid letters in the 'Commander' section of search options.
   * @param colorsToCheck - string of letters, expects 'WUBRGC'. Order, spacing, and case do not matter.
   */
  async cmdrCISelector(colorsToCheck: string): Promise<void> {
    if(colorsToCheck.includes('W'))
      await this.cmdrCIW.check();
    if(colorsToCheck.includes('U'))
      await this.cmdrCIU.check();
    if(colorsToCheck.includes('B'))
      await this.cmdrCIB.check();
    if(colorsToCheck.includes('R'))
      await this.cmdrCIR.check();
    if(colorsToCheck.includes('G'))
      await this.cmdrCIG.check();
    if(colorsToCheck.includes('C'))
      await this.cmdrCIC.check();
  }
}
// page-objects/SyntaxPage.ts
import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object for the Syntax Guide page of Scryfall.
 * Encapsulates all element selectors and relevant actions.
 */
export class SyntaxPage {
    readonly page: Page;
    readonly exName: string;
    readonly exSearch: Locator;

    readonly colors;
    readonly types;
    readonly oracle;
    readonly mana;
    readonly stats;
    readonly faces;
    readonly spells;
    readonly extras;
    readonly tagger;
    readonly rarity;
    readonly sets;
    readonly cubes;
    readonly legality;
    readonly prices;
    readonly flavor;
    readonly frame;
    readonly promos;
    readonly year;
    readonly reprints;
    readonly languages;
    readonly shortcuts;
    readonly negating;
    readonly regex;
    readonly exact;
    readonly usingOr;
    readonly nesting;
    readonly display;

    readonly refKeywords;
/**
   * Initializes locators for Syntax Page elements.
   * @param page - Playwright page instance
   */
  constructor(page: Page) {
    this.page = page;

    this.exName = 'id<=esper t:instant';
    this.exSearch = page.getByRole('link', { name: this.exName });
    
    // #region Utilizes key value pair objects to store a link locator and associated keyword
    // - locator: references captured link locator
    // - tagName: string used to validate link out destination
    this.colors ={ locator: page.getByRole('link', { name: 'Colors and Color Identity' }), tagName: "#colors"};
    this.types ={ locator: page.getByRole('link', { name: 'Card Types' }), tagName: "#types"};
    this.oracle ={ locator: page.getByRole('link', { name: 'Card Text' }), tagName: "#oracle"};
    this.mana ={ locator: page.getByRole('link', { name: 'Mana Costs' }), tagName: "#mana"};
    this.stats ={ locator: page.getByRole('link', { name: 'Power/Toughness/Loyalty' }), tagName: "#stats"};
    this.faces ={ locator: page.getByRole('link', { name: 'Multi-faced Cards' }), tagName: "#faces"};
    this.spells ={ locator: page.getByRole('link', { name: 'Spells/Permanents/Effects' }), tagName: "#spells"};
    this.extras ={ locator: page.getByRole('link', { name: 'Extra and Funny Cards' }), tagName: "#extras"};
    this.tagger ={ locator: page.getByRole('link', { name: 'Tagger Tags' }), tagName: "#tagger"};
    this.rarity ={ locator: page.getByRole('link', { name: 'Rarity', exact: true }), tagName: "#rarity"};
    this.sets ={ locator: page.getByRole('link', { name: 'Sets/Blocks' }), tagName: "#sets"};
    this.cubes ={ locator: page.getByRole('link', { name: 'Cubes' }), tagName: "#cubes"};
    this.legality ={ locator: page.getByRole('link', { name: 'Format Legality' }), tagName: "#legality"};
    this.prices ={ locator: page.getByRole('link', { name: 'USD/EUR/TIX Prices' }), tagName: "#prices"};
    this.flavor ={ locator: page.getByRole('link', { name: 'Artist/Flavor/Watermark' }), tagName: "#flavor"};
    this.frame ={ locator: page.getByRole('link', { name: 'Border/Frame/Foil/Resolution' }), tagName: "#frame"};
    this.promos ={ locator: page.getByRole('link', { name: 'Games, Promos, & Spotlights' }), tagName: "#promos"};
    this.year ={ locator: page.getByRole('link', { name: 'Year', exact: true }), tagName: "#year"};
    this.reprints ={ locator: page.getByRole('link', { name: 'Reprints', exact: true }), tagName: "#reprints"};
    this.languages ={ locator: page.getByRole('link', { name: 'Languages' }), tagName: "#languages"};
    this.shortcuts ={ locator: page.getByRole('link', { name: 'Shortcuts and Nicknames' }), tagName: "#shortcuts"};
    this.negating ={ locator: page.getByRole('link', { name: 'Negating Conditions' }), tagName: "#negating"};
    this.regex ={ locator: page.getByRole('link', { name: 'Regular Expressions', exact: true }), tagName: "#regex"};
    this.exact ={ locator: page.getByRole('link', { name: 'Exact Names' }), tagName: "#exact"};
    this.usingOr ={ locator: page.getByRole('link', { name: 'Using OR' }), tagName: "#or"};
    this.nesting ={ locator: page.getByRole('link', { name: 'Nesting Conditions' }), tagName: "#nesting"};
    this.display ={ locator: page.getByRole('link', { name: 'Display Keywords' }), tagName: "#display"};
    // #endregion

    this.refKeywords = [
      this.colors, 
      this.types, 
      this.oracle, 
      this.mana, 
      this.stats, 
      this.faces, 
      this.spells, 
      this.extras, 
      this.tagger, 
      this.rarity,
      this.sets,
      this.cubes,
      this.legality,
      this.prices,
      this.flavor,
      this.frame,
      this.promos,
      this.year,
      this.reprints,
      this.languages,
      this.shortcuts,
      this.negating,
      this.regex,
      this.exact,
      this.usingOr,
      this.nesting,
      this.display
    ];
  }

  /**
   * Navigates to Syntax Guide page.
   */
  async goto(): Promise<void> {
    await this.page.goto('./docs/syntax');
  }

  /**
   * Loops through and verifies all links stored in refKeywords[] for expected function and results.
   */
  async verifyRefLinks(): Promise<void>{
    let keyName: String = "";
    for(let i = 0; i < this.refKeywords.length; i++){
      keyName = this.refKeywords[i].tagName;
      await this.refKeywords[i].locator.click();
      await expect(this.page).toHaveURL('./docs/syntax' + keyName);
    }
  }
}
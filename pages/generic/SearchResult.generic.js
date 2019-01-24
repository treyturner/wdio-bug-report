class SearchResult {
  constructor(index, selector, parent = undefined) {
    this.index = index;
    this.selector = selector;
    this.parent = parent;
  }

  /**
   * VIA ARRAY
   */
  get containerViaArray() {
    if (typeof this.parent !== 'undefined') {
      return this.parent.$$(this.selector)[this.index];
    } else {
      return $$(this.selector)[this.index];
    }
  }
  get titleViaArray() { return this.containerViaArray.$(".result__a"); }
  get snippitViaArray() { return this.containerViaArray.$(".result__snippet"); }
  get urlViaArray() { return this.containerViaArray.$(".result__url"); }
  get iconViaArray() { return this.containerViaArray.$(".result__icon img"); }

  /**
   * VIA CSS
   */
  get containerViaCss() {
    if (typeof this.parent !== 'undefined') {
      return this.parent.$(`${this.selector}:nth-of-type(${this.index+1})`);
    } else {
      return $(`${this.selector}:nth-of-type(${this.index+1})`);
    }
  }
  get titleViaCss() { return this.containerViaCss.$(".result__a"); }
  get snippitViaCss() { return this.containerViaCss.$(".result__snippet"); }
  get urlViaCss() { return this.containerViaCss.$(".result__url"); }
  get iconViaCss() { return this.containerViaCss.$(".result__icon img"); }
}

module.exports = SearchResult;
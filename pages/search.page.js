const SearchResult = require('./generic/SearchResult.generic');

class Search {
  get input() { return $('#search_form_input_homepage'); }
  get submit() { return $('#search_button_homepage'); }
  get resultsSection() { return $('#links'); }
  results(index) { return new SearchResult(index, ".results_links_deep", this.resultsSection); }
}

module.exports = new Search();
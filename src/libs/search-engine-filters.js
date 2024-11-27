class SearchFilterBuilder {
  static instance = null;

  constructor() {
    this.page = 1;
    this.perPage = 10;
    this.searchItems = [];
    this.searchTerm = "";
    this.sortBy = "ID";
    this.sortIn = "ASC";
  }

  static getInstance() {
    if (!SearchFilterBuilder.instance) {
      SearchFilterBuilder.instance = new SearchFilterBuilder();
    }
    return SearchFilterBuilder.instance;
  }

  setPage(entry) {
    this.page = entry;
    return this;
  }

  setPerPage(entry) {
    this.perPage = entry;
    return this;
  }

  setSearchItems(item) {
    if (this.searchItems.includes(item)) {
      this.searchItems = this.searchItems.filter((f) => f !== item);
    } else {
      this.searchItems = [...this.searchItems, item];
    }
    return this;
  }

  addToSearchItems(item) {
    if (!this.searchItems.includes(item)) {
      this.searchItems = [...this.searchItems, item];
    }
    return this;
  }

  removeFromSearchItems(item) {
    this.searchItems = this.searchItems.filter((f) => f !== item);
    return this;
  }

  setSearchTerm(term) {
    this.searchTerm = term;
    return this;
  }

  setSortBy(sort) {
    this.sortBy = sort;
    return this;
  }

  setSortIn(sort) {
    this.sortIn = sort;
    return this;
  }

  reset() {
    this.page = 1;
    this.perPage = 10;
    this.searchItems = [];
    this.searchTerm = "";
    this.sortBy = "ID";
    this.sortIn = "ASC";
    return this;
  }

  build() {
    return {
      page: this.page,
      perPage: this.perPage,
      searchItems: this.searchItems,
      searchTerm: this.searchTerm,
      sortBy: this.sortBy,
      sortIn: this.sortIn,
    };
  }
}

export default SearchFilterBuilder;

import AbstractObserver from "../utils/abstract-observer.js";
import { FiltersNames, SortType } from "../const";

export default class Moveis extends AbstractObserver {
  constructor() {
    super();
    this._tickets = [];
    this._filters = [
      FiltersNames.NON_TRANSFER,
      FiltersNames.ONE_TRANSFER,
      FiltersNames.TWO_TRANSFER,
    ];
    this._sortType = SortType.PRICE;
  }

  setTickets(tickets) {
    this._tickets = tickets.slice();
  }

  getTickets() {
    return this._tickets;
  }

  setFilters(filters) {
    this._filters = filters.slice();
  }

  getFilters() {
    return this._filters;
  }

  setSortType(sortType) {
    this._sortType = sortType;
  }

  getSortType() {
    return this._sortType;
  }
}

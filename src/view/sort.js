import AbstractView from "./abstract";
import { SortType } from "../const";

const createSortTemplate = (sortType) => `
<ul class="sort-tabs">
<li class="sort-tabs__item">
  <button
    class="sort-tabs__button ${sortType === SortType.PRICE ? "sort-tabs__button--active" : ""}"
    name=${SortType.PRICE}
    type="button"
  >
    Самый дешевый
  </button>
</li>
<li class="sort-tabs__item">
  <button
    class="sort-tabs__button ${sortType === SortType.SPEED ? "sort-tabs__button--active" : ""}"
    type="button"
    name=${SortType.SPEED}
  >
    Самый быстрый
  </button>
</li>
</ul>
`;

export default class SortView extends AbstractView {
  constructor(sortType) {
    super();
    this._sortType = sortType;
    this._clickHandler = this._clickHandler.bind(this);
  }

  getTemplate() {
    return createSortTemplate(this._sortType);
  }

  _clickHandler(evt) {
    evt.preventDefault();
    this._callback.sortTabClick(evt);
  }

  setClickHandler(callback) {
    this._callback.sortTabClick = callback;
    this.getElement().addEventListener("click", this._clickHandler);
  }
}

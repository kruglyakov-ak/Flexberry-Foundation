import {createElement} from "../utils"

const createSortTemplate = () => (`
  <ul class="sort-tabs">
    <li class="sort-tabs__item">
      <button class="sort-tabs__button sort-tabs__button--active" type="button">
        Самый дешевый
      </button>
    </li>
    <li class="sort-tabs__item">
      <button class="sort-tabs__button" type="button">
        Самый быстрый
      </button>
    </li>
    <li class="sort-tabs__item">
      <button class="sort-tabs__button" type="button">
        Оптимальный
      </button>
    </li>
  </ul>
`);

export default class SortView {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createSortTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}

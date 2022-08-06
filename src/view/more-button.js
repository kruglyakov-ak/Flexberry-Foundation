import {createElement} from "../utils"

const createMoreButtonTemplate = () => (`
  <button type="button" class="more-button">
    Показать еще 5 билетов!
  </button>
`);

export default class MoreButtonView {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createMoreButtonTemplate();
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

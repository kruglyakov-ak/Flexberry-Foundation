import {createElement} from "../utils"

const createOffersTemplate = () => `<section class="offers"></section>`;

export default class OffersView {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createOffersTemplate();
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

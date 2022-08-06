import {createElement} from "../utils"

const createTicketsListTemplate = () => `<div class="tickets-list"></div>`;

export default class TicketsListView {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createTicketsListTemplate(this.ticket);
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

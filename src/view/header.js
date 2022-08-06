import {createElement} from "../utils"

const createHeaderTemplate = () => (`
  <header class="header">
  <a class="header__logo-link" href="#">
  <img
    class="header__logo"
    src="./img/Logo.svg"
    alt="logo"
    width="82"
    height="89"
  />
  </a>
  </header>
`);

export default class HeaderView {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createHeaderTemplate();
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


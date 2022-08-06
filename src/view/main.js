import {createElement} from "../utils"

const createMainTemplate = () => `
  <main class="main">
    <h1 class="main__title visually-hidden">Aviasales поиск авиаилетов</h1>
  </main>
`;

export default class MainView {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createMainTemplate();
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

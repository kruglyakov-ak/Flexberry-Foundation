import AbstractView from "./abstract";

const createMoreButtonTemplate = () => `
  <button type="button" class="more-button">
    Показать еще 5 билетов!
  </button>
`;

export default class MoreButtonView extends AbstractView {
  constructor() {
    super();
    this._clickHandler = this._clickHandler.bind(this);
  }

  getTemplate() {
    return createMoreButtonTemplate();
  }

  _clickHandler(evt) {
    evt.preventDefault();
    this._callback.click();
  }

  setClickHandler(callback) {
    this._callback.click = callback;
    this.getElement().addEventListener("click", this._clickHandler);
  }
}

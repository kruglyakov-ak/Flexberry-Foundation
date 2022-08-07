import AbstractView from "./abstract";

const createMoreButtonTemplate = () => (`
  <button type="button" class="more-button">
    Показать еще 5 билетов!
  </button>
`);

export default class MoreButtonView extends AbstractView {
  getTemplate() {
    return createMoreButtonTemplate();
  }
}

import AbstractView from "./abstract";

const createOffersTemplate = () => `<section class="offers"></section>`;

export default class OffersView extends AbstractView {
  getTemplate() {
    return createOffersTemplate();
  }
}

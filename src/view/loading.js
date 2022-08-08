import AbstractView from "./abstract.js";

const createLoadingTemplate = () =>
  `<div class="tickets-list">
    <h2>Loading...</h2>
  </div>`;

export default class Loading extends AbstractView {
  getTemplate() {
    return createLoadingTemplate();
  }
}

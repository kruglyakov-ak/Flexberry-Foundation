import AbstractView from "./abstract";

const createTicketsListTemplate = () => `<div class="tickets-list"></div>`;

export default class TicketsListView extends AbstractView {
  getTemplate() {
    return createTicketsListTemplate(this.ticket);
  }
}

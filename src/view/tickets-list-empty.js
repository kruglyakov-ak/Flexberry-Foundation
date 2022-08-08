import AbstractView from "./abstract";

const createTicketsListEmptyTemplate = () => `<div class="tickets-list"><h2>Список билетов пуст</h2><p>Возможно вы забыли включить локальный сервер "npm run server"</p></div>`;

export default class TicketsListView extends AbstractView {
  getTemplate() {
    return createTicketsListEmptyTemplate(this.ticket);
  }
}

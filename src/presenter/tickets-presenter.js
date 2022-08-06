import FiltersView from "../view/filters";
import MoreButtonView from "../view/more-button";
import OffersView from "../view/offers";
import SortView from "../view/sort";
import TicketView from "../view/ticket";
import TicketsListView from "../view/tickets-list";
import { render } from "../utils";

export default class TicketsPresenter {
  constructor(tickets) {
    this.tickets = tickets;
  }
  offersComponent = new OffersView();
  ticketsListComponent = new TicketsListView();

  init = (ticketsContainer) => {
    this.ticketsContainer = ticketsContainer;

    render(new FiltersView(), this.ticketsContainer);
    render(this.offersComponent, this.ticketsContainer);
    render(new SortView(), this.offersComponent.getElement());

    render(this.ticketsListComponent, this.offersComponent.getElement());

    this.tickets.forEach((ticket) =>
      render(new TicketView(ticket), this.ticketsListComponent.getElement())
    );

    render(new MoreButtonView(), this.ticketsListComponent.getElement());
  };
}

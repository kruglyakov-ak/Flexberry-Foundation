import FiltersView from "../view/filters";
import MoreButtonView from "../view/more-button";
import OffersView from "../view/offers";
import SortView from "../view/sort";
import TicketView from "../view/ticket";
import TicketsListView from "../view/tickets-list";
import { render } from "../utils";

const TICKETS_COUNT_PER_STEP = 5;

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

    this.tickets
      .slice(0, TICKETS_COUNT_PER_STEP)
      .forEach((ticket) =>
        render(new TicketView(ticket), this.ticketsListComponent.getElement())
      );

    if (this.tickets.length > TICKETS_COUNT_PER_STEP) {
      let renderTemplateTicketsCount = TICKETS_COUNT_PER_STEP;

      render(new MoreButtonView(), this.offersComponent.getElement());

      const moreButtonElement = document.querySelector(".more-button");

      moreButtonElement.addEventListener("click", (evt) => {
        evt.preventDefault();

        this.tickets
        .slice(renderTemplateTicketsCount, renderTemplateTicketsCount + TICKETS_COUNT_PER_STEP)
        .forEach((ticket) =>
          render(new TicketView(ticket), this.ticketsListComponent.getElement())
        );

        renderTemplateTicketsCount += TICKETS_COUNT_PER_STEP;

        if (renderTemplateTicketsCount >= this.tickets.length) {
          moreButtonElement.remove();
        }
      });
    }
  };
}

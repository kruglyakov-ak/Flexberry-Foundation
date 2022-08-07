import FiltersView from "../view/filters";
import MoreButtonView from "../view/more-button";
import OffersView from "../view/offers";
import SortView from "../view/sort";
import TicketView from "../view/ticket";
import TicketsListView from "../view/tickets-list";
import { render } from "../utils";

const TICKETS_COUNT_PER_STEP = 5;

export default class TicketsPresenter {
  constructor(tickets, filters) {
    this._tickets = tickets;
    this._filters = filters;
    this._renderedTicketsCount = TICKETS_COUNT_PER_STEP;

    this._offersComponent = new OffersView();
    this._ticketsListComponent = new TicketsListView();
    this._filtersComponent = null;
    this._moreButtonComponent = null;

    this._handleFiltersChange = this._handleFiltersChange.bind(this);
    this._handleMoreButtonClick = this._handleMoreButtonClick.bind(this);
  }

  init = (ticketsContainer) => {
    this._ticketsContainer = ticketsContainer;

    this._renderFilters();
    render(this._offersComponent, this._ticketsContainer);
    render(new SortView(), this._offersComponent.getElement());

    render(this._ticketsListComponent, this._offersComponent.getElement());

    this._tickets
      .slice(0, TICKETS_COUNT_PER_STEP)
      .forEach((ticket) =>
        render(new TicketView(ticket), this._ticketsListComponent.getElement())
      );

    if (this._tickets.length > TICKETS_COUNT_PER_STEP) {
      this._renderMoreButton();
    }
  };

  _handleFiltersChange(evt) {
    console.log(evt.target);
  }

  _renderFilters() {
    if (this._filtersComponent !== null) {
      this._filtersComponent = null;
    }

    this._filtersComponent = new FiltersView(this._filters);
    render(this._filtersComponent, this._ticketsContainer);
    this._filtersComponent.setChangeHandler();
  }

  _handleMoreButtonClick() {
    const ticketsCount = this._tickets.length;
    const increasedRenderedTicketsCount = Math.min(
      ticketsCount,
      this._renderedTicketsCount + TICKETS_COUNT_PER_STEP
    );

    this._tickets
      .slice(this._renderedTicketsCount, increasedRenderedTicketsCount)
      .forEach((ticket) => {
        render(new TicketView(ticket), this._ticketsListComponent.getElement());
      });

    this._renderedTicketsCount = increasedRenderedTicketsCount;

    if (this._renderedTicketsCount >= ticketsCount) {
      remove(this._moreButtonComponent);
    }
  }

  _renderMoreButton() {
    if (this._moreButtonComponent !== null) {
      this._moreButtonComponent = null;
    }

    this._moreButtonComponent = new MoreButtonView();

    render(this._moreButtonComponent, this._offersComponent.getElement());

    this._moreButtonComponent.setClickHandler(this._handleMoreButtonClick);
  }
}

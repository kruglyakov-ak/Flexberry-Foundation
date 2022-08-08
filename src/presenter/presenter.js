import FiltersView from "../view/filters";
import MoreButtonView from "../view/more-button";
import OffersView from "../view/offers";
import SortView from "../view/sort";
import TicketView from "../view/ticket";
import TicketsListView from "../view/tickets-list";
import { render, remove } from "../utils/render";
import { filterTickets, sortTickets } from "../utils/common";
import { TICKETS_COUNT_PER_STEP, RenderPosition } from "../const";

export default class Presenter {
  constructor(tickets, filters, sortType) {
    this._tickets = tickets;
    this._filters = filters;
    this._sortType = sortType;
    this._renderedTicketsCount = TICKETS_COUNT_PER_STEP;

    this._filtersComponent = null;
    this._offersComponent = null;
    this._sortComponent = null;
    this._ticketsListComponent = null;
    this._moreButtonComponent = null;
  }

  init = (ticketsContainer) => {
    this._ticketsContainer = ticketsContainer;

    this._renderFiltersComponent();
    this._renderOffersComponent();
  };

  _handleFiltersChange = (evt) => {
    if (this._filters.includes(evt.target.name)) {
      const index = this._filters.findIndex(
        (filter) => filter === evt.target.name
      );
      this._filters.splice(index, 1);
    } else {
      this._filters.push(evt.target.name);
    }
    remove(this._offersComponent);
    this._renderOffersComponent();
  };

  _renderFiltersComponent() {
    this._filtersComponent = new FiltersView(this._filters);
    render(this._filtersComponent, this._ticketsContainer);
    this._filtersComponent.setChangeHandler(this._handleFiltersChange);
  }

  _renderOffersComponent() {
    if (this._offersComponent !== null) {
      this._offersComponent = null;
    }

    this._offersComponent = new OffersView();
    render(this._offersComponent, this._ticketsContainer);
    this._renderSortComponent();
    this._renderTiketsListComponent();

    if (this._tickets.length > TICKETS_COUNT_PER_STEP) {
      this._renderMoreButtonComponent();
    }
  }

  _handleSortTabClick = (evt) => {
    this._sortType = evt.target.name;
    remove(this._offersComponent);
    this._renderOffersComponent();
  };

  _renderSortComponent() {
    if (this._sortComponent !== null) {
      this._sortComponent = null;
    }

    this._sortComponent = new SortView(this._sortType);
    render(
      this._sortComponent,
      this._offersComponent.getElement(),
      RenderPosition.AFTERBEGIN
    );
    this._sortComponent.setClickHandler(this._handleSortTabClick);
  }

  _renderTiketsListComponent() {
    this._ticketsListComponent = new TicketsListView();
    render(this._ticketsListComponent, this._offersComponent.getElement());
    sortTickets(filterTickets(this._tickets, this._filters), this._sortType)
      .slice(0, TICKETS_COUNT_PER_STEP)
      .forEach((ticket) =>
        render(new TicketView(ticket), this._ticketsListComponent.getElement())
      );
  }

  _handleMoreButtonClick = () => {
    const ticketsCount = this._tickets.length;
    const increasedRenderedTicketsCount = Math.min(
      ticketsCount,
      this._renderedTicketsCount + TICKETS_COUNT_PER_STEP
    );

    sortTickets(filterTickets(this._tickets, this._filters), this._sortType)
      .slice(this._renderedTicketsCount, increasedRenderedTicketsCount)
      .forEach((ticket) => {
        render(new TicketView(ticket), this._ticketsListComponent.getElement());
      });

    this._renderedTicketsCount = increasedRenderedTicketsCount;

    if (this._renderedTicketsCount >= ticketsCount) {
      remove(this._moreButtonComponent);
    }
  };

  _renderMoreButtonComponent() {
    this._moreButtonComponent = new MoreButtonView();
    render(this._moreButtonComponent, this._offersComponent.getElement());
    this._moreButtonComponent.setClickHandler(this._handleMoreButtonClick);
  }
}

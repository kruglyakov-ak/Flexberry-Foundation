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
  constructor(model) {
    this._model = model;
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

  _getTickets() {
    return sortTickets(
      filterTickets(this._model.getTickets(), this._model.getFilters()),
      this._model.getSortType()
    );
  }

  _handleFiltersChange = (evt) => {
    const filters = this._model.getFilters();
    if (filters.includes(evt.target.name)) {
      const index = filters.findIndex((filter) => filter === evt.target.name);
      filters.splice(index, 1);
    } else {
      filters.push(evt.target.name);
    }

    this._model.setFilters(filters);
    remove(this._offersComponent);
    this._renderOffersComponent();
  };

  _renderFiltersComponent() {
    this._filtersComponent = new FiltersView(this._model.getFilters());
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

    if (this._getTickets().length > TICKETS_COUNT_PER_STEP) {
      this._renderMoreButtonComponent();
    }
  }

  _handleSortTabClick = (evt) => {
    this._model.setSortType(evt.target.name);
    remove(this._offersComponent);
    this._renderOffersComponent();
  };

  _renderSortComponent() {
    if (this._sortComponent !== null) {
      this._sortComponent = null;
    }

    this._sortComponent = new SortView(this._model.getSortType());
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
    this._getTickets()
      .slice(0, TICKETS_COUNT_PER_STEP)
      .forEach((ticket) =>
        render(new TicketView(ticket), this._ticketsListComponent.getElement())
      );
  }

  _handleMoreButtonClick = () => {
    const ticketsCount = this._getTickets().length;
    const increasedRenderedTicketsCount = Math.min(
      ticketsCount,
      this._renderedTicketsCount + TICKETS_COUNT_PER_STEP
    );

    this._getTickets()
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

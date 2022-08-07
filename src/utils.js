import { RenderPosition, FiltersNames, SortType } from "./const";
import Abstract from "./view/abstract";

const createElement = (template) => {
  const newElement = document.createElement("div");
  newElement.innerHTML = template;

  return newElement.firstElementChild;
};

const render = (component, container, place = RenderPosition.BEFOREEND) => {
  const element = component.getElement();

  switch (place) {
    case RenderPosition.BEFOREBEGIN:
      container.before(element);
      break;
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
    case RenderPosition.AFTEREND:
      container.after(element);
      break;
  }
};

const remove = (component) => {
  if (component === null) {
    return;
  }

  if (!(component instanceof Abstract)) {
    throw new Error("Can remove only components");
  }

  component.getElement().remove();
  component.removeElement();
};

const convertFilterToNumber = (filter) => {
  switch (filter) {
    case FiltersNames.NON_TRANSFER:
      return 0;
    case FiltersNames.ONE_TRANSFER:
      return 1;
    case FiltersNames.TWO_TRANSFER:
      return 2;
    case FiltersNames.THREE_TRANSFER:
      return 3;
  }
};

const filterTickets = (tickets, filters) => {
  if (filters.includes(FiltersNames.ALL) || filters.length === 0) {
    return tickets;
  }
  const convertedFilters = filters.map((filter) =>
    convertFilterToNumber(filter)
  );

  return tickets.filter(
    (ticket) =>
      convertedFilters.some(
        (filter) => ticket.segments[0].stops.length === filter
      ) &&
      convertedFilters.some(
        (filter) => ticket.segments[1].stops.length === filter
      )
  );
};

const sortTickets = (tickets, sortType) => {
  switch (sortType) {
    case SortType.PRICE:
      return tickets.sort((prev, next) => prev.price - next.price);
    case SortType.SPEED:
      return tickets.sort((prev, next) => {
        const prevDuration =
          prev.segments[0].duration + prev.segments[1].duration;
        const nextDuration =
          next.segments[0].duration + next.segments[1].duration;

        return prevDuration - nextDuration;
      });
  }
};

const convertTransfer = (stopsLength) => {
  switch (stopsLength) {
    case 0:
      return "Без пересадок";
    case 1:
      return "1 пересадка";
    default:
      return `${stopsLength} пересадки`;
  }
};

const humanizeDuration = (duration) => {
  const hours = Math.floor(duration / 60);
  const minutes = duration - hours * 60;

  return `${hours}ч ${minutes}м`;
};

export {
  RenderPosition,
  createElement,
  render,
  filterTickets,
  remove,
  sortTickets,
  convertTransfer,
  humanizeDuration,
};

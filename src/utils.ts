import { FilterNames, SortTabNames } from "./const";
import { Ticket } from "./types/ticket";

const convertTransfer = (stopsLength: number) => {
  switch (stopsLength) {
    case 0:
      return "Без пересадок";
    case 1:
      return "1 пересадка";
    default:
      return `${stopsLength} пересадки`;
  }
};

const humanizeDuration = (duration: number) => {
  const hours = Math.floor(duration / 60);
  const minutes = duration - hours * 60;

  return `${hours}ч ${minutes}м`;
};

const sortData = (data: Ticket[], sortType: SortTabNames) => {
  switch (sortType) {
    case SortTabNames.Cost:
      return data.sort((prev, next) => prev.price - next.price);
    case SortTabNames.Speed:
      return data.sort((prev, next) => {
        const prevDuration =
          prev.segments[0].duration + prev.segments[1].duration;
        const nextDuration =
          next.segments[0].duration + next.segments[1].duration;

        return prevDuration - nextDuration;
      });
  }
};

const convertFilterToNumber = (filter: FilterNames) => {
  switch (filter) {
    case FilterNames.NonTransfer:
      return 0;
    case FilterNames.Transfer1:
      return 1;
    case FilterNames.Transfer2:
      return 2;
    case FilterNames.Transfer3:
      return 3;
  }
};

const filterData = (data: Ticket[], filters: FilterNames[]) => {
  if (filters.includes(FilterNames.All) || filters.length === 0) {
    return data;
  }
  const convertedFilters = filters.map((item) => convertFilterToNumber(item));

  return data.filter(
    (item) =>
      convertedFilters.some(
        (filter) => item.segments[0].stops.length === filter
      ) &&
      convertedFilters.some(
        (filter) => item.segments[1].stops.length === filter
      )
  );
};

export { convertTransfer, humanizeDuration, sortData, filterData };

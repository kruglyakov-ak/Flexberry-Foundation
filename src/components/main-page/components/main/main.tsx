import {
  useState,
  ChangeEvent,
  SyntheticEvent,
  useEffect,
  useCallback,
} from "react";
import { FilterNames, SortTabNames } from "../../../../const";
import { mockResponse } from "../../../../mocks/tickets";
import { Ticket } from "../../../../types/ticket";
import { filterData, sortData } from "../../../../utils";
import Filters from "./components/filters/filters";
import Offers from "./components/offers/offers";
import "./style.css";

function Main() {
  const [filters, setFilters] = useState<FilterNames[]>([
    FilterNames.NonTransfer,
    FilterNames.Transfer1,
    FilterNames.Transfer2,
  ]);
  const [sortType, setSortType] = useState<SortTabNames>(SortTabNames.Cost);
  const [tickets] = useState<Ticket[]>(mockResponse.tickets);
  const [filteredTickets, setFilteredTickets] = useState(
    filterData(tickets, filters)
  );
  const [sortedTickets, setSortedTickets] = useState(
    sortData(filteredTickets, sortType)
  );

  useEffect(() => {
    setFilteredTickets(filterData(tickets, filters));
  }, [filters, tickets]);

  useEffect(() => {
    setSortedTickets(sortData(filteredTickets, sortType));
  }, [filteredTickets, sortType]);

  const filterCheckboxChangeHandler = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      if (filters.includes(target.id as FilterNames)) {
        const index = filters.findIndex((item) => item === target.id);
        filters.splice(index, 1);
        setFilters(filters.slice());
        return;
      }
      setFilters(filters.concat(target.id as FilterNames));
    },
    [filters]
  );

  const sortButtonClickHandler = ({
    currentTarget,
  }: SyntheticEvent<HTMLButtonElement>) => {
    setSortType(currentTarget.name as SortTabNames);
  };

  return (
    <main className="main">
      <h1 className="main__title visually-hidden">
        Aviasales поиск авиаилетов
      </h1>

      <Filters
        filters={filters}
        handleFilterCheckboxChange={filterCheckboxChangeHandler}
      />

      <Offers
        tickets={sortedTickets}
        sortType={sortType}
        handleSortButtonClick={sortButtonClickHandler}
      />
    </main>
  );
}

export default Main;

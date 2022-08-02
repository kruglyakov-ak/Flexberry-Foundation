import { useState, ChangeEvent, SyntheticEvent, useEffect } from "react";
import { FilterNames, SortTabNames } from "../../../../const";
import { mockResponse } from "../../../../mocks/tickets";
import { Ticket } from "../../../../types/ticket";
import { filterData, sortData } from "../../../../utils";
import Filters from "./components/filters/filters";
import Offers from "./components/offers/offers";
import "./style.css";

function Main() {
  const [tickets] = useState<Ticket[]>(mockResponse.tickets);
  const [filters, setFilters] = useState<FilterNames[]>([
    FilterNames.NonTransfer,
    FilterNames.Transfer1,
    FilterNames.Transfer2,
  ]);
  const [sortType, setSortType] = useState<SortTabNames>(SortTabNames.Cost);
  const [filteredTickets, setFilteredTickets] = useState(
    sortData(filterData(tickets, filters), sortType).splice(0, 5)
  );
  const [showCount, setShowCount] = useState(5);
  const [isMoreButtonShow, setIsMoreButtonShow] = useState(true);

  useEffect(() => {
    setFilteredTickets(
      sortData(filterData(tickets, filters), sortType).splice(0, showCount)
    );

    if (filterData(tickets, filters).length - showCount <= 0) {
      setIsMoreButtonShow(false);
    }
  }, [filters, showCount, sortType, tickets]);

  const filterCheckboxChangeHandler = ({
    target,
  }: ChangeEvent<HTMLInputElement>) => {
    if (filters.includes(target.id as FilterNames)) {
      const index = filters.findIndex((item) => item === target.id);
      filters.splice(index, 1);
      setFilters(filters.slice());
      return;
    }
    setFilters(filters.concat(target.id as FilterNames));
  };

  const sortButtonClickHandler = ({
    currentTarget,
  }: SyntheticEvent<HTMLButtonElement>) => {
    setSortType(currentTarget.name as SortTabNames);
  };

  const moreButtonClickHandler = () => {
    setShowCount(showCount + 5);
    console.log(showCount);
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
        tickets={filteredTickets}
        sortType={sortType}
        handleSortButtonClick={sortButtonClickHandler}
        isMoreButtonShow={isMoreButtonShow}
        handleMoreButtonClick={moreButtonClickHandler}
      />
    </main>
  );
}

export default Main;

import { useState, ChangeEvent, SyntheticEvent } from "react";
import { FilterNames, SortTabNames } from "../../../../const";
import { mockResponse } from "../../../../mocks/tickets";
import Filters from "./components/filters/filters";
import Offers from "./components/offers/offers";
import "./style.css";

function Main() {
  const [filters] = useState<FilterNames[]>([
    FilterNames.NonTransfer,
    FilterNames.Transfer1,
    FilterNames.Transfer2,
  ]);

  const [sortType, setSortType] = useState<SortTabNames>(SortTabNames.Cost);

  const filterCheckboxChangeHandler = ({
    target,
  }: ChangeEvent<HTMLInputElement>) => {
    if (filters.includes(target.id as FilterNames)) {
      const index = filters.findIndex((item) => item === target.id);
      filters.splice(index, index + 1);
      return;
    }
    filters.push(target.id as FilterNames);
  };

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
        tickets={mockResponse.tickets}
        sortType={sortType}
        handleSortButtonClick={sortButtonClickHandler}
      />
    </main>
  );
}

export default Main;

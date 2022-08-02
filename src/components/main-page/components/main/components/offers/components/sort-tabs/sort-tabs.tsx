import "./style.css";
import { SyntheticEvent } from "react";
import { SortTabNames } from "../../../../../../../../const";

type SortTabsProps = {
  sortType: SortTabNames;
  handleSortButtonClick: ({
    currentTarget,
  }: SyntheticEvent<HTMLButtonElement>) => void;
};

function SortTabs({ sortType, handleSortButtonClick }: SortTabsProps) {
  return (
    <ul className="sort-tabs">
      <li className="sort-tabs__item">
        <button
          className={`sort-tabs__button ${
            sortType === SortTabNames.Cost ? "sort-tabs__button--active" : ""
          }`}
          name={SortTabNames.Cost}
          type="button"
          onClick={handleSortButtonClick}
        >
          Самый дешевый
        </button>
      </li>
      <li className="sort-tabs__item">
        <button
          className={`sort-tabs__button ${
            sortType === SortTabNames.Speed ? "sort-tabs__button--active" : ""
          }`}
          type="button"
          name={SortTabNames.Speed}
          onClick={handleSortButtonClick}
        >
          Самый быстрый
        </button>
      </li>
    </ul>
  );
}

export default SortTabs;

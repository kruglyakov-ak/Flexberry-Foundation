import { ChangeEvent } from "react";
import { FilterNames } from "../../../../../../const";
import "./style.css";

type FiltersProps = {
  filters: FilterNames[];
  handleFilterCheckboxChange: ({
    target,
  }: ChangeEvent<HTMLInputElement>) => void;
};

function Filters({ filters, handleFilterCheckboxChange }: FiltersProps) {
  return (
    <aside className="filters">
      <h2 className="filters__title">Количество пересадок</h2>

      <label>
        <div className="filters__item">
          <input
            type="checkbox"
            id={FilterNames.All}
            name={FilterNames.All}
            defaultChecked={filters.includes(FilterNames.All)}
            onChange={handleFilterCheckboxChange}
          />
          <span className="checkmark"></span>
          Все
        </div>
      </label>

      <label>
        <div className="filters__item">
          <input
            type="checkbox"
            id={FilterNames.NonTransfer}
            name={FilterNames.NonTransfer}
            defaultChecked={filters.includes(FilterNames.NonTransfer)}
            onChange={handleFilterCheckboxChange}
          />
          <span className="checkmark"></span>
          Без пересадок
        </div>
      </label>

      <label>
        <div className="filters__item">
          <input
            type="checkbox"
            id={FilterNames.Transfer1}
            name={FilterNames.Transfer1}
            defaultChecked={filters.includes(FilterNames.Transfer1)}
            onChange={handleFilterCheckboxChange}
          />
          <span className="checkmark"></span>1 пересадка
        </div>
      </label>

      <label>
        <div className="filters__item">
          <input
            type="checkbox"
            id={FilterNames.Transfer2}
            name={FilterNames.Transfer2}
            defaultChecked={filters.includes(FilterNames.Transfer2)}
            onChange={handleFilterCheckboxChange}
          />
          <span className="checkmark"></span>2 пересадки
        </div>
      </label>

      <label>
        <div className="filters__item">
          <input
            type="checkbox"
            id={FilterNames.Transfer3}
            name={FilterNames.Transfer3}
            defaultChecked={filters.includes(FilterNames.Transfer3)}
            onChange={handleFilterCheckboxChange}
          />
          <span className="checkmark"></span>3 пересадки
        </div>
      </label>
    </aside>
  );
}

export default Filters;

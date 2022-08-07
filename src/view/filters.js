import AbstractView from "./abstract";
import { FiltersNames } from "../const";

const createFiltersTemplate = (filters) => `
  <aside class="filters">
    <h2 class="filters__title">Количество пересадок</h2>

    <label>
      <div class="filters__item">
        <input
        type="checkbox"
        name=${FiltersNames.ALL}
        ${filters.includes(FiltersNames.ALL) ? 'checked' : ''}
      />
        <span class="checkmark"></span>
        Все
      </div>
    </label>

    <label>
      <div class="filters__item">
        <input
        type="checkbox"
        name=${FiltersNames.NON_TRANSFER}
        ${filters.includes(FiltersNames.NON_TRANSFER) ? 'checked' : ''}
      />
        <span class="checkmark"></span>
        Без пересадок
      </div>
    </label>

    <label>
      <div class="filters__item">
        <input
        type="checkbox"
        name=${FiltersNames.ONE_TRANSFER}
        ${filters.includes(FiltersNames.ONE_TRANSFER) ? 'checked' : ''}
      />
        <span class="checkmark"></span>1 пересадка
      </div>
    </label>

    <label>
      <div class="filters__item">
        <input
        type="checkbox"
        name=${FiltersNames.TWO_TRANSFER}
        ${filters.includes(FiltersNames.TWO_TRANSFER) ? 'checked' : ''}
      />
        <span class="checkmark"></span>2 пересадки
      </div>
    </label>

    <label>
      <div class="filters__item">
        <input
        type="checkbox"
        name=${FiltersNames.THREE_TRANSFER}
        ${filters.includes(FiltersNames.THREE_TRANSFER) ? 'checked' : ''}
      />
        <span class="checkmark"></span>3 пересадки
      </div>
    </label>
  </aside>
`;

export default class FiltersView extends AbstractView {
  constructor(filters) {
    super();
    this._filters = filters;
    this._changeHandler = this._changeHandler.bind(this);
  }

  getTemplate() {
    return createFiltersTemplate(this._filters);
  }

  _changeHandler(evt) {
    this._callback.change(evt);
  }

  setChangeHandler(callback) {
    this._callback.change = callback;
    this.getElement().addEventListener("change", this._changeHandler);
  }
}

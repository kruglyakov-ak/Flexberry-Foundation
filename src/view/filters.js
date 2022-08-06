const createFiltersTemplate = () => (`
  <aside class="filters">
    <h2 class="filters__title">Количество пересадок</h2>

    <label>
      <div class="filters__item">
        <input type="checkbox" id="all" name="all" />
        <span class="checkmark"></span>
        Все
      </div>
    </label>

    <label>
      <div class="filters__item">
        <input type="checkbox" id="non-transfer" name="non-transfer" checked />
        <span class="checkmark"></span>
        Без пересадок
      </div>
    </label>

    <label>
      <div class="filters__item">
        <input type="checkbox" id="1-transfer" name="1-transfer" checked />
        <span class="checkmark"></span>1 пересадка
      </div>
    </label>

    <label>
      <div class="filters__item">
        <input type="checkbox" id="2-transfer" name="2-transfer" checked />
        <span class="checkmark"></span>2 пересадки
      </div>
    </label>

    <label>
      <div class="filters__item">
        <input type="checkbox" id="3-transfer" name="3-transfer" />
        <span class="checkmark"></span>3 пересадки
      </div>
    </label>
  </aside>
`);

export { createFiltersTemplate };

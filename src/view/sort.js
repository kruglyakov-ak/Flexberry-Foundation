const createSortTemplate = () => (`
  <ul class="sort-tabs">
    <li class="sort-tabs__item">
      <button class="sort-tabs__button sort-tabs__button--active" type="button">
        Самый дешевый
      </button>
    </li>
    <li class="sort-tabs__item">
      <button class="sort-tabs__button" type="button">
        Самый быстрый
      </button>
    </li>
    <li class="sort-tabs__item">
      <button class="sort-tabs__button" type="button">
        Оптимальный
      </button>
    </li>
  </ul>
`);

export { createSortTemplate };

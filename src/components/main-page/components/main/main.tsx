import { useState, ChangeEvent } from "react";
import { FilterNames } from "../../../../const";
import Filters from "./components/filters/filters";
import "./style.css";

function Main() {
  const [filters] = useState<FilterNames[]>([
    FilterNames.NonTransfer,
    FilterNames.Transfer1,
    FilterNames.Transfer2,
  ]);

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

  return (
    <main className="main">
      <h1 className="main__title visually-hidden">
        Aviasales поиск авиаилетов
      </h1>

      <Filters
        filters={filters}
        handleFilterCheckboxChange={filterCheckboxChangeHandler}
      />

      <section className="offers">
        <ul className="sort-tabs">
          <li className="sort-tabs__item">
            <button
              className="sort-tabs__button sort-tabs__button--active"
              type="button"
            >
              Самый дешевый
            </button>
          </li>
          <li className="sort-tabs__item">
            <button className="sort-tabs__button" type="button">
              Самый быстрый
            </button>
          </li>
          <li className="sort-tabs__item">
            <button className="sort-tabs__button" type="button">
              Оптимальный
            </button>
          </li>
        </ul>

        <article className="ticket">
          <div className="ticket-header">
            <p className="ticket-header__price">13 400 Р</p>
            <img
              className="ticket-header__aircompany-logo"
              src="http://pics.avs.io/110/36/S7.png"
              alt="airline logo"
              width="110"
              height="36"
            />
          </div>

          <div className="ticket-body">
            <div className="route">
              <div className="column">
                <div className="column__title">MOW – HKT</div>
                <div className="column__content">10:45 – 08:00</div>
              </div>

              <div className="column">
                <div className="column__title">В пути</div>
                <div className="column__content">21ч 15м</div>
              </div>

              <div className="column">
                <div className="column__title">2 пересадки</div>
                <div className="column__content">HKG, JNB</div>
              </div>
            </div>

            <div className="route">
              <div className="column">
                <div className="column__title">MOW – HKT</div>
                <div className="column__content">11:20 – 00:50</div>
              </div>

              <div className="column">
                <div className="column__title">В пути</div>
                <div className="column__content">13ч 30м</div>
              </div>

              <div className="column">
                <div className="column__title">1 пересадка</div>
                <div className="column__content">HKG</div>
              </div>
            </div>
          </div>
        </article>

        <article className="ticket">
          <div className="ticket-header">
            <p className="ticket-header__price">13 400 Р</p>
            <img
              className="ticket-header__aircompany-logo"
              src="http://pics.avs.io/110/36/S7.png"
              alt="airline logo"
              width="110"
              height="36"
            />
          </div>

          <div className="ticket-body">
            <div className="route">
              <div className="column">
                <div className="column__title">MOW – HKT</div>
                <div className="column__content">10:45 – 08:00</div>
              </div>

              <div className="column">
                <div className="column__title">В пути</div>
                <div className="column__content">21ч 15м</div>
              </div>

              <div className="column">
                <div className="column__title">2 пересадки</div>
                <div className="column__content">HKG, JNB</div>
              </div>
            </div>

            <div className="route">
              <div className="column">
                <div className="column__title">MOW – HKT</div>
                <div className="column__content">11:20 – 00:50</div>
              </div>

              <div className="column">
                <div className="column__title">В пути</div>
                <div className="column__content">13ч 30м</div>
              </div>

              <div className="column">
                <div className="column__title">1 пересадка</div>
                <div className="column__content">HKG</div>
              </div>
            </div>
          </div>
        </article>

        <article className="ticket">
          <div className="ticket-header">
            <p className="ticket-header__price">13 400 Р</p>
            <img
              className="ticket-header__aircompany-logo"
              src="http://pics.avs.io/110/36/S7.png"
              alt="airline logo"
              width="110"
              height="36"
            />
          </div>

          <div className="ticket-body">
            <div className="route">
              <div className="column">
                <div className="column__title">MOW – HKT</div>
                <div className="column__content">10:45 – 08:00</div>
              </div>

              <div className="column">
                <div className="column__title">В пути</div>
                <div className="column__content">21ч 15м</div>
              </div>

              <div className="column">
                <div className="column__title">2 пересадки</div>
                <div className="column__content">HKG, JNB</div>
              </div>
            </div>

            <div className="route">
              <div className="column">
                <div className="column__title">MOW – HKT</div>
                <div className="column__content">11:20 – 00:50</div>
              </div>

              <div className="column">
                <div className="column__title">В пути</div>
                <div className="column__content">13ч 30м</div>
              </div>

              <div className="column">
                <div className="column__title">1 пересадка</div>
                <div className="column__content">HKG</div>
              </div>
            </div>
          </div>
        </article>

        <article className="ticket">
          <div className="ticket-header">
            <p className="ticket-header__price">13 400 Р</p>
            <img
              className="ticket-header__aircompany-logo"
              src="http://pics.avs.io/110/36/S7.png"
              alt="airline logo"
              width="110"
              height="36"
            />
          </div>

          <div className="ticket-body">
            <div className="route">
              <div className="column">
                <div className="column__title">MOW – HKT</div>
                <div className="column__content">10:45 – 08:00</div>
              </div>

              <div className="column">
                <div className="column__title">В пути</div>
                <div className="column__content">21ч 15м</div>
              </div>

              <div className="column">
                <div className="column__title">2 пересадки</div>
                <div className="column__content">HKG, JNB</div>
              </div>
            </div>

            <div className="route">
              <div className="column">
                <div className="column__title">MOW – HKT</div>
                <div className="column__content">11:20 – 00:50</div>
              </div>

              <div className="column">
                <div className="column__title">В пути</div>
                <div className="column__content">13ч 30м</div>
              </div>

              <div className="column">
                <div className="column__title">1 пересадка</div>
                <div className="column__content">HKG</div>
              </div>
            </div>
          </div>
        </article>

        <article className="ticket">
          <div className="ticket-header">
            <p className="ticket-header__price">13 400 Р</p>
            <img
              className="ticket-header__aircompany-logo"
              src="http://pics.avs.io/110/36/S7.png"
              alt="airline logo"
              width="110"
              height="36"
            />
          </div>

          <div className="ticket-body">
            <div className="route">
              <div className="column">
                <div className="column__title">MOW – HKT</div>
                <div className="column__content">10:45 – 08:00</div>
              </div>

              <div className="column">
                <div className="column__title">В пути</div>
                <div className="column__content">21ч 15м</div>
              </div>

              <div className="column">
                <div className="column__title">2 пересадки</div>
                <div className="column__content">HKG, JNB</div>
              </div>
            </div>

            <div className="route">
              <div className="column">
                <div className="column__title">MOW – HKT</div>
                <div className="column__content">11:20 – 00:50</div>
              </div>

              <div className="column">
                <div className="column__title">В пути</div>
                <div className="column__content">13ч 30м</div>
              </div>

              <div className="column">
                <div className="column__title">1 пересадка</div>
                <div className="column__content">HKG</div>
              </div>
            </div>
          </div>
        </article>

        <button type="button" className="more-button">
          Показать еще 5 билетов!
        </button>
      </section>
    </main>
  );
}

export default Main;

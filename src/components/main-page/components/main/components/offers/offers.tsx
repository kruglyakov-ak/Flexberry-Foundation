import "./style.css";
import SortTabs from "./components/sort-tabs/sort-tabs";
import { SyntheticEvent } from "react";
import { SortTabNames } from "../../../../../../const";

type OffersProps = {
  sortType: SortTabNames;
  handleSortButtonClick: ({
    currentTarget,
  }: SyntheticEvent<HTMLButtonElement>) => void;
};

function Offers({ sortType, handleSortButtonClick }: OffersProps) {
  return (
    <section className="offers">
      <h2 className="offers__title visually-hidden">Билеты Aviasales</h2>
      <SortTabs
        sortType={sortType}
        handleSortButtonClick={handleSortButtonClick}
      />

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
  );
}

export default Offers;

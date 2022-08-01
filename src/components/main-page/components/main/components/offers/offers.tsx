import "./style.css";
import SortTabs from "./components/sort-tabs/sort-tabs";
import { SyntheticEvent } from "react";
import { SortTabNames } from "../../../../../../const";
import Offer from "./components/ticket/ticket";
import { Ticket } from "../../../../../../types/ticket";

type OffersProps = {
  tickets: Ticket[];
  sortType: SortTabNames;
  handleSortButtonClick: ({
    currentTarget,
  }: SyntheticEvent<HTMLButtonElement>) => void;
};

function Offers({ tickets, sortType, handleSortButtonClick }: OffersProps) {
  return (
    <section className="offers">
      <h2 className="offers__title visually-hidden">Билеты Aviasales</h2>
      <SortTabs
        sortType={sortType}
        handleSortButtonClick={handleSortButtonClick}
      />

      {tickets.splice(0, 4).map((item, i) => (
        <Offer key={i} ticket={item} />
      ))}

      <button type="button" className="more-button">
        Показать еще 5 билетов!
      </button>
    </section>
  );
}

export default Offers;

import "./style.css";
import SortTabs from "./components/sort-tabs/sort-tabs";
import { SyntheticEvent } from "react";
import { SortTabNames } from "../../../../../../const";
import Offer from "./components/ticket/ticket";
import { Ticket } from "../../../../../../types/ticket";
import MoreButton from "./components/more-button/more-button";

type OffersProps = {
  tickets: Ticket[];
  sortType: SortTabNames;
  handleSortButtonClick: ({
    currentTarget,
  }: SyntheticEvent<HTMLButtonElement>) => void;
  isMoreButtonShow: boolean;
  handleMoreButtonClick: () => void;
};

function Offers({
  tickets,
  sortType,
  handleSortButtonClick,
  isMoreButtonShow,
  handleMoreButtonClick,
}: OffersProps) {
  return (
    <section className="offers">
      <h2 className="offers__title visually-hidden">Билеты Aviasales</h2>
      <SortTabs
        sortType={sortType}
        handleSortButtonClick={handleSortButtonClick}
      />

      {tickets.map((item, i) => (
        <Offer key={i} ticket={item} />
      ))}

      {isMoreButtonShow && (
        <MoreButton handleMoreButtonClick={handleMoreButtonClick} />
      )}
    </section>
  );
}

export default Offers;

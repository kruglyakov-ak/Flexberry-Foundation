import { Ticket } from "../../../../../../../../types/ticket";
import Segment from "./components/segment/segment";
import "./style.css";

type TicketProps = {
  ticket: Ticket;
};
function TicketComponent({ ticket }: TicketProps) {
  return (
    <article className="ticket">
      <div className="ticket-header">
        <p className="ticket-header__price">{ticket.price} Р</p>
        <img
          className="ticket-header__aircompany-logo"
          src={`http://pics.avs.io/110/36/${ticket.carrier}.png`}
          alt="airline logo"
          width="110"
          height="36"
        />
      </div>

      <div className="ticket-body">
        {ticket.segments.map((item, i) => <Segment key={i} segment={item}/>)}
      </div>
    </article>
  );
}

export default TicketComponent;

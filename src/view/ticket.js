import AbstractView from "./abstract";
import { humanizeDuration, convertTransfer } from "../utils/common";
import dayjs from "dayjs";

const createTicketTemplate = (ticket) => `
  <article class="ticket">
    <div class="ticket-header">
      <p class="ticket-header__price">${ticket.price} Р</p>
      <img
        class="ticket-header__aircompany-logo"
        src="http://pics.avs.io/110/36/${ticket.carrier}.png"
        alt="airline logo"
        width="110"
        height="36"
      />
    </div>

    <div class="ticket-body">
      <div class="route">
        <div class="column">
          <div class="column__title">
            ${ticket.segments[0].origin} – ${ticket.segments[0].destination}
          </div>
          <div class="column__content">
          ${dayjs(ticket.segments[0].date).format("hh:mm")} –
          ${dayjs(ticket.segments[0].date)
            .add(ticket.segments[0].duration, "m")
            .format("hh:mm")}
          </div>
        </div>

        <div class="column">
          <div class="column__title">В пути</div>
          <div class="column__content">${humanizeDuration(
            ticket.segments[0].duration
          )}</div>
        </div>

        <div class="column">
          <div class="column__title">${convertTransfer(
            ticket.segments[0].stops.length
          )}</div>
          <div class="column__content">${ticket.segments[0].stops.join(
            ", "
          )}</div>
        </div>
      </div>


    <div class="ticket-body">
    <div class="route">
      <div class="column">
        <div class="column__title">
          ${ticket.segments[1].origin} – ${ticket.segments[1].destination}
        </div>
        <div class="column__content">
        ${dayjs(ticket.segments[1].date).format("hh:mm")} –
        ${dayjs(ticket.segments[1].date)
          .add(ticket.segments[1].duration, "m")
          .format("hh:mm")}
        </div>
      </div>

      <div class="column">
        <div class="column__title">В пути</div>
        <div class="column__content">${humanizeDuration(
          ticket.segments[1].duration
        )}</div>
      </div>

      <div class="column">
        <div class="column__title">${convertTransfer(
          ticket.segments[1].stops.length
        )}</div>
        <div class="column__content">${ticket.segments[1].stops.join(
          ", "
        )}</div>
      </div>
    </div>

      </div>
    </div>
  </article>
`;

export default class TicketView extends AbstractView {
  constructor(ticket) {
    super();
    this.ticket = ticket;
  }

  getTemplate() {
    return createTicketTemplate(this.ticket);
  }
}

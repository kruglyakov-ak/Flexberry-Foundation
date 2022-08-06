const createTicketTemplate = () => (`
  <article class="ticket">
    <div class="ticket-header">
      <p class="ticket-header__price">13 400 Р</p>
      <img
        class="ticket-header__aircompany-logo"
        src="http://pics.avs.io/110/36/S7.png"
        alt="airline logo"
        width="110"
        height="36"
      />
    </div>

    <div class="ticket-body">
      <div class="route">
        <div class="column">
          <div class="column__title">MOW – HKT</div>
          <div class="column__content">10:45 – 08:00</div>
        </div>

        <div class="column">
          <div class="column__title">В пути</div>
          <div class="column__content">21ч 15м</div>
        </div>

        <div class="column">
          <div class="column__title">2 пересадки</div>
          <div class="column__content">HKG, JNB</div>
        </div>
      </div>

      <div class="route">
        <div class="column">
          <div class="column__title">MOW – HKT</div>
          <div class="column__content">11:20 – 00:50</div>
        </div>

        <div class="column">
          <div class="column__title">В пути</div>
          <div class="column__content">13ч 30м</div>
        </div>

        <div class="column">
          <div class="column__title">1 пересадка</div>
          <div class="column__content">HKG</div>
        </div>
      </div>
    </div>
  </article>
`);

export { createTicketTemplate };

import AbstractView from "./abstract";

const createHeaderTemplate = () => (`
  <header class="header">
  <a class="header__logo-link" href="#">
  <img
    class="header__logo"
    src="./img/Logo.svg"
    alt="logo"
    width="82"
    height="89"
  />
  </a>
  </header>
`);

export default class HeaderView extends AbstractView {
  getTemplate() {
    return createHeaderTemplate();
  }
}


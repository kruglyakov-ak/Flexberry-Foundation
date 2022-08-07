import AbstractView from "./abstract";

const createMainTemplate = () => `
  <main class="main">
    <h1 class="main__title visually-hidden">Aviasales поиск авиаилетов</h1>
  </main>
`;

export default class MainView extends AbstractView {
  getTemplate() {
    return createMainTemplate();
  }
}

import Presenter from "./presenter/presenter";
import Model from "./model/model";
import HeaderView from "./view/header";
import MainView from "./view/main";
import Api from "./api";
import { render } from "./utils/render";
import { END_POINT } from "./const";

const model = new Model();
const api = new Api(END_POINT);

const bodyElement = document.querySelector("body");

render(new HeaderView(), bodyElement);
render(new MainView(), bodyElement);

const mainElement = bodyElement.querySelector(".main");
const presenter = new Presenter(model, mainElement);

presenter.init();

api
  .getTickets()
  .then((tickets) => {
    model.setTickets(tickets);
    model.setIsTicketsLoaded(true);
    presenter.init();
  })
  .catch(() => {
    model.setIsTicketsLoaded(true);
    model.setTickets([]);
    presenter.init();
  });

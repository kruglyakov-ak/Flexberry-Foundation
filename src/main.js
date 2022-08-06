import {createHeaderTemplate} from './view/header';
import {createMainTemplate} from './view/main';
import {createFiltersTemplate} from './view/filters';
import {createOffersTemplate} from './view/offers';
import {createSortTemplate} from './view/sort';
import {createTicketTemplate} from './view/ticket';
import {createMoreButtonTemplate} from './view/more-button';

const TICKETS_COUNT = 5;

const render = (container, template, place) => {
    container.insertAdjacentHTML(place, template);
}

const bodyElement = document.querySelector('body');

render(bodyElement, createHeaderTemplate(), 'beforeend');
render(bodyElement, createMainTemplate(), 'beforeend');

const mainElement = document.querySelector('.main');

render(mainElement, createFiltersTemplate(), 'beforeend');
render(mainElement, createOffersTemplate(), 'beforeend');

const offersSectionElement = document.querySelector('.offers');

render(offersSectionElement, createSortTemplate(), 'beforeend');

for (let i = 0; i < TICKETS_COUNT; i++) {
  render(offersSectionElement, createTicketTemplate(), 'beforeend');
}

render(offersSectionElement, createMoreButtonTemplate(), 'beforeend');


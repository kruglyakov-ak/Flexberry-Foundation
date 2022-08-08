import Abstract from "../view/abstract";
import { RenderPosition } from "../const";

const createElement = (template) => {
  const newElement = document.createElement("div");
  newElement.innerHTML = template;

  return newElement.firstElementChild;
};

const render = (component, container, place = RenderPosition.BEFOREEND) => {
  const element = component.getElement();

  switch (place) {
    case RenderPosition.BEFOREBEGIN:
      container.before(element);
      break;
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
    case RenderPosition.AFTEREND:
      container.after(element);
      break;
  }
};

const remove = (component) => {
  if (component === null) {
    return;
  }

  if (!(component instanceof Abstract)) {
    throw new Error("Can remove only components");
  }

  component.getElement().remove();
  component.removeElement();
};

export { createElement, render, remove };

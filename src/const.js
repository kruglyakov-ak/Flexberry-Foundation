const RenderPosition = {
  BEFOREBEGIN: "beforebegin",
  AFTERBEGIN: "afterbegin",
  BEFOREEND: "beforeend",
  AFTEREND: "afterend",
};

const TICKETS_COUNT_PER_STEP = 5;

const FiltersNames = {
  ALL: "all",
  NON_TRANSFER: "non-transfer",
  ONE_TRANSFER: "one_transfer",
  TWO_TRANSFER: "two_transfer",
  THREE_TRANSFER: "three_transfer",
};

const SortType = {
  SPEED: "speed",
  PRICE: "price",
};

const END_POINT = " http://localhost:3004";

export {
  RenderPosition,
  FiltersNames,
  SortType,
  TICKETS_COUNT_PER_STEP,
  END_POINT,
};

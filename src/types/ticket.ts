type Segment = {
  origin: string;
  destination: string;
  date: string;
  stops: string[];
  duration: number;
};

type Ticket = {
  price: number;
  carrier: string;
  segments: Segment[];
};

export type { Ticket, Segment };

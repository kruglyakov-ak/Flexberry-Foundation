import Presenter from "./presenter/presenter";
import Model from "./model/model";
import HeaderView from "./view/header";
import MainView from "./view/main";
import { render } from "./utils/render";

const tickets = [
  {
    price: 15529,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T09:59:00.000Z",
        stops: ["HKG"],
        duration: 1072,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T07:10:00.000Z",
        stops: ["HKG"],
        duration: 1190,
      },
    ],
  },
  {
    price: 42564,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T09:37:00.000Z",
        stops: ["SIN"],
        duration: 702,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T03:53:00.000Z",
        stops: ["IST", "SHA"],
        duration: 1008,
      },
    ],
  },
  {
    price: 72842,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T12:01:00.000Z",
        stops: ["HKG", "SHA"],
        duration: 1217,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T04:25:00.000Z",
        stops: [],
        duration: 1702,
      },
    ],
  },
  {
    price: 45781,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T15:30:00.000Z",
        stops: [],
        duration: 1421,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T05:27:00.000Z",
        stops: [],
        duration: 1670,
      },
    ],
  },
  {
    price: 98845,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T00:58:00.000Z",
        stops: ["SIN", "BKK"],
        duration: 716,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T23:44:00.000Z",
        stops: ["IST"],
        duration: 1844,
      },
    ],
  },
  {
    price: 71003,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T23:39:00.000Z",
        stops: [],
        duration: 1732,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T06:57:00.000Z",
        stops: ["DXB"],
        duration: 1977,
      },
    ],
  },
  {
    price: 96980,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T04:49:00.000Z",
        stops: ["DXB"],
        duration: 1401,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T00:02:00.000Z",
        stops: [],
        duration: 1944,
      },
    ],
  },
  {
    price: 84499,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T21:29:00.000Z",
        stops: ["SHA", "AUH"],
        duration: 1534,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T14:11:00.000Z",
        stops: ["HKG"],
        duration: 1225,
      },
    ],
  },
  {
    price: 30918,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T22:38:00.000Z",
        stops: ["HKG", "SIN"],
        duration: 669,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T13:23:00.000Z",
        stops: ["BKK"],
        duration: 1567,
      },
    ],
  },
  {
    price: 29501,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T14:38:00.000Z",
        stops: ["AUH"],
        duration: 847,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T13:18:00.000Z",
        stops: ["DXB", "AUH", "KUL"],
        duration: 832,
      },
    ],
  },
  {
    price: 79696,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T17:27:00.000Z",
        stops: ["HKG", "SHA", "IST"],
        duration: 1674,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T03:13:00.000Z",
        stops: ["BKK", "AUH"],
        duration: 1450,
      },
    ],
  },
  {
    price: 18553,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T01:41:00.000Z",
        stops: ["SHA", "HKG"],
        duration: 652,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T14:31:00.000Z",
        stops: [],
        duration: 1524,
      },
    ],
  },
  {
    price: 79545,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T15:44:00.000Z",
        stops: [],
        duration: 1603,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T10:37:00.000Z",
        stops: ["BKK"],
        duration: 829,
      },
    ],
  },
  {
    price: 46483,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T15:15:00.000Z",
        stops: ["AUH", "SIN"],
        duration: 1934,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T09:53:00.000Z",
        stops: ["KUL"],
        duration: 1038,
      },
    ],
  },
  {
    price: 66235,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T16:19:00.000Z",
        stops: ["SHA", "BKK"],
        duration: 1653,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T01:49:00.000Z",
        stops: ["KUL"],
        duration: 1993,
      },
    ],
  },
  {
    price: 69072,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T14:19:00.000Z",
        stops: ["BKK"],
        duration: 687,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T21:01:00.000Z",
        stops: ["KUL"],
        duration: 850,
      },
    ],
  },
  {
    price: 56200,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T04:30:00.000Z",
        stops: [],
        duration: 1701,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T01:26:00.000Z",
        stops: ["BKK"],
        duration: 1852,
      },
    ],
  },
  {
    price: 91644,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T13:49:00.000Z",
        stops: ["DXB"],
        duration: 832,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T22:10:00.000Z",
        stops: ["HKG", "KUL"],
        duration: 1310,
      },
    ],
  },
  {
    price: 69056,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T06:57:00.000Z",
        stops: [],
        duration: 913,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T16:26:00.000Z",
        stops: ["SIN"],
        duration: 1303,
      },
    ],
  },
  {
    price: 80021,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T00:31:00.000Z",
        stops: [],
        duration: 790,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T11:08:00.000Z",
        stops: ["SHA", "KUL", "HKG"],
        duration: 1078,
      },
    ],
  },
  {
    price: 69984,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T16:50:00.000Z",
        stops: ["SIN", "DXB", "KUL"],
        duration: 1377,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T22:06:00.000Z",
        stops: [],
        duration: 1432,
      },
    ],
  },
  {
    price: 65139,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T23:03:00.000Z",
        stops: ["SIN", "KUL"],
        duration: 1243,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T04:47:00.000Z",
        stops: ["SIN"],
        duration: 1343,
      },
    ],
  },
  {
    price: 43280,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T09:30:00.000Z",
        stops: ["SHA", "DXB", "SIN"],
        duration: 1876,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T14:49:00.000Z",
        stops: [],
        duration: 841,
      },
    ],
  },
  {
    price: 52951,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T21:43:00.000Z",
        stops: ["HKG"],
        duration: 914,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T16:34:00.000Z",
        stops: ["SIN"],
        duration: 875,
      },
    ],
  },
  {
    price: 89383,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T03:48:00.000Z",
        stops: ["IST", "AUH"],
        duration: 1630,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T01:23:00.000Z",
        stops: ["KUL", "IST"],
        duration: 1694,
      },
    ],
  },
  {
    price: 42283,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T06:37:00.000Z",
        stops: ["BKK", "DXB", "KUL"],
        duration: 1826,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T14:25:00.000Z",
        stops: ["AUH", "SIN", "SHA"],
        duration: 700,
      },
    ],
  },
  {
    price: 67145,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T11:50:00.000Z",
        stops: ["AUH"],
        duration: 1920,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T09:24:00.000Z",
        stops: [],
        duration: 1223,
      },
    ],
  },
  {
    price: 64073,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T09:59:00.000Z",
        stops: ["AUH", "HKG"],
        duration: 1147,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T14:26:00.000Z",
        stops: ["IST", "SHA", "DXB"],
        duration: 1650,
      },
    ],
  },
  {
    price: 66976,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T12:37:00.000Z",
        stops: [],
        duration: 1002,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T11:32:00.000Z",
        stops: [],
        duration: 1135,
      },
    ],
  },
  {
    price: 74509,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T04:00:00.000Z",
        stops: [],
        duration: 1487,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T05:24:00.000Z",
        stops: ["BKK", "DXB"],
        duration: 1946,
      },
    ],
  },
  {
    price: 64772,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T12:53:00.000Z",
        stops: ["DXB", "AUH", "IST"],
        duration: 1824,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T14:06:00.000Z",
        stops: ["AUH", "SHA"],
        duration: 1041,
      },
    ],
  },
  {
    price: 41692,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T22:40:00.000Z",
        stops: ["KUL", "HKG", "IST"],
        duration: 985,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T13:01:00.000Z",
        stops: ["DXB", "IST", "AUH"],
        duration: 1376,
      },
    ],
  },
  {
    price: 72593,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T10:05:00.000Z",
        stops: ["HKG", "AUH", "IST"],
        duration: 672,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T13:19:00.000Z",
        stops: ["DXB", "HKG"],
        duration: 1338,
      },
    ],
  },
  {
    price: 31351,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T15:58:00.000Z",
        stops: ["HKG", "DXB"],
        duration: 1076,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T12:56:00.000Z",
        stops: ["DXB"],
        duration: 1814,
      },
    ],
  },
  {
    price: 40941,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T07:52:00.000Z",
        stops: ["SHA", "DXB"],
        duration: 843,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T08:30:00.000Z",
        stops: [],
        duration: 1907,
      },
    ],
  },
  {
    price: 56721,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T03:47:00.000Z",
        stops: ["KUL", "DXB"],
        duration: 746,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T02:21:00.000Z",
        stops: [],
        duration: 1427,
      },
    ],
  },
  {
    price: 80353,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T10:15:00.000Z",
        stops: ["BKK", "IST", "SIN"],
        duration: 1683,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T02:18:00.000Z",
        stops: ["SIN", "SHA", "AUH"],
        duration: 1965,
      },
    ],
  },
  {
    price: 72018,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T04:03:00.000Z",
        stops: [],
        duration: 1468,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T03:29:00.000Z",
        stops: [],
        duration: 1235,
      },
    ],
  },
  {
    price: 44774,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T09:17:00.000Z",
        stops: [],
        duration: 812,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T12:46:00.000Z",
        stops: [],
        duration: 1294,
      },
    ],
  },
  {
    price: 49660,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T16:01:00.000Z",
        stops: [],
        duration: 909,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T08:20:00.000Z",
        stops: [],
        duration: 1223,
      },
    ],
  },
  {
    price: 31660,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T05:25:00.000Z",
        stops: ["HKG", "IST"],
        duration: 1945,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T03:20:00.000Z",
        stops: [],
        duration: 1785,
      },
    ],
  },
  {
    price: 97287,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T02:04:00.000Z",
        stops: ["DXB"],
        duration: 1193,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T12:38:00.000Z",
        stops: ["AUH", "BKK", "SHA"],
        duration: 1219,
      },
    ],
  },
  {
    price: 37600,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T13:52:00.000Z",
        stops: ["IST", "SHA", "AUH"],
        duration: 1676,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T01:49:00.000Z",
        stops: ["DXB", "SIN"],
        duration: 1070,
      },
    ],
  },
  {
    price: 56881,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T02:15:00.000Z",
        stops: ["BKK", "KUL", "HKG"],
        duration: 1814,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T17:06:00.000Z",
        stops: [],
        duration: 1447,
      },
    ],
  },
  {
    price: 42280,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T17:54:00.000Z",
        stops: ["HKG"],
        duration: 893,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T21:04:00.000Z",
        stops: ["KUL"],
        duration: 1547,
      },
    ],
  },
  {
    price: 64031,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T22:28:00.000Z",
        stops: ["BKK"],
        duration: 1553,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T15:49:00.000Z",
        stops: ["SIN"],
        duration: 973,
      },
    ],
  },
  {
    price: 51800,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T02:54:00.000Z",
        stops: ["AUH", "BKK"],
        duration: 963,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T06:47:00.000Z",
        stops: [],
        duration: 1826,
      },
    ],
  },
  {
    price: 31958,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T02:00:00.000Z",
        stops: ["SIN", "SHA", "KUL"],
        duration: 1990,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T17:17:00.000Z",
        stops: ["BKK"],
        duration: 1344,
      },
    ],
  },
  {
    price: 42515,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T07:05:00.000Z",
        stops: [],
        duration: 1697,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T07:25:00.000Z",
        stops: ["KUL", "AUH", "BKK"],
        duration: 713,
      },
    ],
  },
  {
    price: 87865,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T06:16:00.000Z",
        stops: ["HKG", "IST", "SHA"],
        duration: 1978,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T01:12:00.000Z",
        stops: [],
        duration: 1595,
      },
    ],
  },
  {
    price: 27295,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T15:25:00.000Z",
        stops: ["HKG", "BKK"],
        duration: 1347,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T02:15:00.000Z",
        stops: ["IST"],
        duration: 1701,
      },
    ],
  },
  {
    price: 33487,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T22:27:00.000Z",
        stops: ["AUH"],
        duration: 950,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T09:35:00.000Z",
        stops: ["BKK"],
        duration: 676,
      },
    ],
  },
  {
    price: 97768,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T03:05:00.000Z",
        stops: ["IST", "DXB", "BKK"],
        duration: 602,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T10:06:00.000Z",
        stops: ["DXB", "SIN"],
        duration: 1983,
      },
    ],
  },
  {
    price: 45489,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T22:53:00.000Z",
        stops: [],
        duration: 1295,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T07:54:00.000Z",
        stops: ["SHA"],
        duration: 1293,
      },
    ],
  },
  {
    price: 68219,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T14:59:00.000Z",
        stops: ["AUH", "SIN"],
        duration: 1753,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T23:49:00.000Z",
        stops: ["BKK", "IST"],
        duration: 1381,
      },
    ],
  },
  {
    price: 53185,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T10:38:00.000Z",
        stops: ["SHA", "IST", "AUH"],
        duration: 1555,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T21:46:00.000Z",
        stops: ["BKK"],
        duration: 1261,
      },
    ],
  },
  {
    price: 92004,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T22:19:00.000Z",
        stops: ["BKK", "KUL"],
        duration: 737,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T03:26:00.000Z",
        stops: ["IST", "KUL", "DXB"],
        duration: 906,
      },
    ],
  },
  {
    price: 50498,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T07:16:00.000Z",
        stops: ["SIN"],
        duration: 1756,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T05:27:00.000Z",
        stops: ["DXB"],
        duration: 1247,
      },
    ],
  },
  {
    price: 45260,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T11:56:00.000Z",
        stops: [],
        duration: 1713,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T04:52:00.000Z",
        stops: [],
        duration: 647,
      },
    ],
  },
  {
    price: 78895,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T07:44:00.000Z",
        stops: ["BKK"],
        duration: 1764,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T21:51:00.000Z",
        stops: ["DXB"],
        duration: 1946,
      },
    ],
  },
  {
    price: 91638,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T02:30:00.000Z",
        stops: ["HKG", "AUH", "DXB"],
        duration: 1327,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T06:55:00.000Z",
        stops: [],
        duration: 1725,
      },
    ],
  },
  {
    price: 38026,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T11:57:00.000Z",
        stops: [],
        duration: 1056,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T23:29:00.000Z",
        stops: ["SHA"],
        duration: 1666,
      },
    ],
  },
  {
    price: 24569,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T21:40:00.000Z",
        stops: ["SIN", "IST", "DXB"],
        duration: 1252,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T22:11:00.000Z",
        stops: ["AUH", "KUL", "DXB"],
        duration: 841,
      },
    ],
  },
  {
    price: 15147,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T16:42:00.000Z",
        stops: [],
        duration: 754,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T05:48:00.000Z",
        stops: ["IST"],
        duration: 1831,
      },
    ],
  },
  {
    price: 52720,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T02:34:00.000Z",
        stops: ["BKK", "IST"],
        duration: 915,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T22:43:00.000Z",
        stops: ["HKG", "AUH"],
        duration: 1384,
      },
    ],
  },
  {
    price: 42930,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T00:21:00.000Z",
        stops: ["AUH", "HKG"],
        duration: 1517,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T22:10:00.000Z",
        stops: [],
        duration: 708,
      },
    ],
  },
  {
    price: 61479,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T22:20:00.000Z",
        stops: ["HKG"],
        duration: 1490,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T13:06:00.000Z",
        stops: ["AUH"],
        duration: 1793,
      },
    ],
  },
  {
    price: 89301,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T00:23:00.000Z",
        stops: ["DXB"],
        duration: 1707,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T23:28:00.000Z",
        stops: ["KUL", "DXB"],
        duration: 1800,
      },
    ],
  },
  {
    price: 63087,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T03:19:00.000Z",
        stops: ["HKG", "SHA", "AUH"],
        duration: 1818,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T02:39:00.000Z",
        stops: [],
        duration: 1997,
      },
    ],
  },
  {
    price: 75662,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T02:47:00.000Z",
        stops: [],
        duration: 1105,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T23:48:00.000Z",
        stops: ["SHA", "IST", "AUH"],
        duration: 1414,
      },
    ],
  },
  {
    price: 18379,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T09:31:00.000Z",
        stops: [],
        duration: 1016,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T17:59:00.000Z",
        stops: ["SHA", "AUH"],
        duration: 1186,
      },
    ],
  },
  {
    price: 21094,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T17:48:00.000Z",
        stops: ["SHA", "DXB", "HKG"],
        duration: 1894,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T07:23:00.000Z",
        stops: ["DXB", "SIN"],
        duration: 682,
      },
    ],
  },
  {
    price: 47432,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T22:26:00.000Z",
        stops: ["DXB", "SIN"],
        duration: 923,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T09:58:00.000Z",
        stops: ["AUH"],
        duration: 784,
      },
    ],
  },
  {
    price: 83558,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T01:56:00.000Z",
        stops: ["SIN"],
        duration: 1483,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T14:33:00.000Z",
        stops: [],
        duration: 678,
      },
    ],
  },
  {
    price: 23340,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T13:09:00.000Z",
        stops: ["SIN", "DXB"],
        duration: 643,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T22:11:00.000Z",
        stops: ["DXB", "KUL", "IST"],
        duration: 910,
      },
    ],
  },
  {
    price: 22247,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T05:46:00.000Z",
        stops: ["IST"],
        duration: 928,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T22:56:00.000Z",
        stops: ["IST", "DXB", "AUH"],
        duration: 1247,
      },
    ],
  },
  {
    price: 64116,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T14:04:00.000Z",
        stops: [],
        duration: 1071,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T22:07:00.000Z",
        stops: ["SIN", "IST"],
        duration: 1877,
      },
    ],
  },
  {
    price: 15675,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T01:15:00.000Z",
        stops: ["IST", "AUH", "KUL"],
        duration: 1603,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T00:14:00.000Z",
        stops: ["SHA", "HKG", "KUL"],
        duration: 1317,
      },
    ],
  },
  {
    price: 25052,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T11:17:00.000Z",
        stops: ["SIN"],
        duration: 1806,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T05:21:00.000Z",
        stops: ["DXB"],
        duration: 1917,
      },
    ],
  },
  {
    price: 64717,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T11:49:00.000Z",
        stops: ["DXB", "SHA", "HKG"],
        duration: 1573,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T16:19:00.000Z",
        stops: ["SHA", "BKK"],
        duration: 1802,
      },
    ],
  },
  {
    price: 79794,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T07:12:00.000Z",
        stops: ["DXB"],
        duration: 1356,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T02:16:00.000Z",
        stops: ["SIN", "HKG"],
        duration: 1724,
      },
    ],
  },
  {
    price: 92845,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T08:07:00.000Z",
        stops: ["IST", "SHA", "KUL"],
        duration: 1009,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T13:25:00.000Z",
        stops: ["DXB"],
        duration: 681,
      },
    ],
  },
  {
    price: 29345,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T08:47:00.000Z",
        stops: [],
        duration: 1195,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T05:51:00.000Z",
        stops: ["SIN", "IST", "DXB"],
        duration: 1769,
      },
    ],
  },
  {
    price: 34166,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T00:45:00.000Z",
        stops: ["SHA", "BKK", "AUH"],
        duration: 771,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T08:22:00.000Z",
        stops: ["DXB", "HKG", "IST"],
        duration: 1113,
      },
    ],
  },
  {
    price: 99981,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T13:07:00.000Z",
        stops: ["SIN", "AUH", "IST"],
        duration: 1794,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T05:18:00.000Z",
        stops: ["SHA", "SIN", "BKK"],
        duration: 1951,
      },
    ],
  },
  {
    price: 96563,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T04:18:00.000Z",
        stops: ["HKG"],
        duration: 1270,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T22:12:00.000Z",
        stops: ["BKK", "SHA"],
        duration: 1002,
      },
    ],
  },
  {
    price: 39816,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T00:09:00.000Z",
        stops: ["SIN", "DXB"],
        duration: 1454,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T14:45:00.000Z",
        stops: ["BKK", "IST", "HKG"],
        duration: 1219,
      },
    ],
  },
  {
    price: 52006,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T22:50:00.000Z",
        stops: ["AUH", "BKK", "IST"],
        duration: 1199,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T05:56:00.000Z",
        stops: [],
        duration: 1477,
      },
    ],
  },
  {
    price: 99753,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T16:49:00.000Z",
        stops: [],
        duration: 1099,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T11:15:00.000Z",
        stops: ["AUH", "BKK"],
        duration: 1820,
      },
    ],
  },
  {
    price: 89052,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T08:38:00.000Z",
        stops: ["SIN"],
        duration: 1102,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T21:04:00.000Z",
        stops: [],
        duration: 773,
      },
    ],
  },
  {
    price: 57691,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T15:17:00.000Z",
        stops: ["KUL"],
        duration: 1751,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T10:58:00.000Z",
        stops: ["SIN"],
        duration: 1455,
      },
    ],
  },
  {
    price: 15977,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T11:36:00.000Z",
        stops: ["DXB", "BKK", "AUH"],
        duration: 1033,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T03:14:00.000Z",
        stops: ["IST"],
        duration: 845,
      },
    ],
  },
  {
    price: 30264,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T11:40:00.000Z",
        stops: ["BKK"],
        duration: 1922,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T14:03:00.000Z",
        stops: ["IST", "SHA", "BKK"],
        duration: 1162,
      },
    ],
  },
  {
    price: 95786,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T01:54:00.000Z",
        stops: [],
        duration: 1382,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T03:30:00.000Z",
        stops: ["AUH", "KUL"],
        duration: 1262,
      },
    ],
  },
  {
    price: 56215,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T13:30:00.000Z",
        stops: ["SHA", "KUL", "HKG"],
        duration: 1301,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T15:18:00.000Z",
        stops: ["DXB", "SHA"],
        duration: 865,
      },
    ],
  },
  {
    price: 59954,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T09:27:00.000Z",
        stops: ["SHA", "HKG"],
        duration: 1999,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T21:53:00.000Z",
        stops: ["DXB", "KUL"],
        duration: 915,
      },
    ],
  },
  {
    price: 79815,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T10:31:00.000Z",
        stops: ["KUL", "SHA"],
        duration: 925,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T03:49:00.000Z",
        stops: ["BKK"],
        duration: 1357,
      },
    ],
  },
  {
    price: 40563,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T04:04:00.000Z",
        stops: [],
        duration: 1264,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T02:02:00.000Z",
        stops: ["DXB", "BKK", "AUH"],
        duration: 602,
      },
    ],
  },
  {
    price: 92757,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T00:23:00.000Z",
        stops: ["BKK", "SHA", "DXB"],
        duration: 1217,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T11:31:00.000Z",
        stops: ["DXB"],
        duration: 657,
      },
    ],
  },
  {
    price: 36329,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T10:26:00.000Z",
        stops: ["BKK", "HKG", "DXB"],
        duration: 1605,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T14:53:00.000Z",
        stops: ["AUH"],
        duration: 956,
      },
    ],
  },
  {
    price: 42508,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T09:01:00.000Z",
        stops: ["AUH", "KUL"],
        duration: 978,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T21:20:00.000Z",
        stops: ["AUH", "SHA"],
        duration: 1101,
      },
    ],
  },
  {
    price: 99391,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T22:22:00.000Z",
        stops: ["KUL"],
        duration: 1954,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T10:37:00.000Z",
        stops: ["AUH"],
        duration: 1444,
      },
    ],
  },
  {
    price: 89196,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T17:52:00.000Z",
        stops: ["BKK"],
        duration: 1668,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T06:18:00.000Z",
        stops: ["AUH"],
        duration: 1499,
      },
    ],
  },
  {
    price: 30225,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T11:50:00.000Z",
        stops: [],
        duration: 735,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T09:15:00.000Z",
        stops: ["KUL"],
        duration: 927,
      },
    ],
  },
  {
    price: 42968,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T22:14:00.000Z",
        stops: ["IST"],
        duration: 916,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T23:33:00.000Z",
        stops: ["AUH", "IST", "KUL"],
        duration: 1293,
      },
    ],
  },
  {
    price: 16892,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T01:10:00.000Z",
        stops: ["DXB", "SHA"],
        duration: 1937,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T21:57:00.000Z",
        stops: [],
        duration: 1781,
      },
    ],
  },
  {
    price: 49433,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T01:22:00.000Z",
        stops: [],
        duration: 805,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T06:19:00.000Z",
        stops: ["IST"],
        duration: 799,
      },
    ],
  },
  {
    price: 52273,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T10:48:00.000Z",
        stops: ["KUL", "HKG"],
        duration: 823,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T09:49:00.000Z",
        stops: [],
        duration: 1958,
      },
    ],
  },
  {
    price: 99087,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T05:49:00.000Z",
        stops: ["SIN", "BKK"],
        duration: 1651,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T01:12:00.000Z",
        stops: ["SIN", "KUL"],
        duration: 975,
      },
    ],
  },
  {
    price: 56545,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T15:04:00.000Z",
        stops: ["AUH", "KUL"],
        duration: 1198,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T11:22:00.000Z",
        stops: ["KUL", "IST"],
        duration: 1476,
      },
    ],
  },
  {
    price: 32398,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T01:42:00.000Z",
        stops: [],
        duration: 1547,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T06:07:00.000Z",
        stops: [],
        duration: 1671,
      },
    ],
  },
  {
    price: 37388,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T05:36:00.000Z",
        stops: [],
        duration: 1429,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T10:39:00.000Z",
        stops: ["BKK", "IST"],
        duration: 651,
      },
    ],
  },
  {
    price: 46538,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T05:51:00.000Z",
        stops: [],
        duration: 1135,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T02:35:00.000Z",
        stops: ["KUL"],
        duration: 1950,
      },
    ],
  },
  {
    price: 87563,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T04:16:00.000Z",
        stops: [],
        duration: 1659,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T00:15:00.000Z",
        stops: ["SIN"],
        duration: 1694,
      },
    ],
  },
  {
    price: 22823,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T15:37:00.000Z",
        stops: ["IST", "BKK"],
        duration: 836,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T06:45:00.000Z",
        stops: ["SHA", "KUL"],
        duration: 834,
      },
    ],
  },
  {
    price: 43865,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T05:02:00.000Z",
        stops: [],
        duration: 1062,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T13:36:00.000Z",
        stops: ["AUH", "SHA", "IST"],
        duration: 1818,
      },
    ],
  },
  {
    price: 57172,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T21:51:00.000Z",
        stops: ["KUL", "SHA", "SIN"],
        duration: 667,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T21:50:00.000Z",
        stops: ["BKK"],
        duration: 862,
      },
    ],
  },
  {
    price: 57740,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T23:42:00.000Z",
        stops: ["SIN", "HKG", "DXB"],
        duration: 827,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T23:51:00.000Z",
        stops: [],
        duration: 1801,
      },
    ],
  },
  {
    price: 77965,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T21:20:00.000Z",
        stops: ["KUL", "SIN"],
        duration: 1584,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T03:42:00.000Z",
        stops: ["IST", "AUH", "KUL"],
        duration: 1710,
      },
    ],
  },
  {
    price: 43038,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T09:37:00.000Z",
        stops: ["DXB", "SIN", "SHA"],
        duration: 949,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T09:32:00.000Z",
        stops: ["HKG", "AUH", "BKK"],
        duration: 1909,
      },
    ],
  },
  {
    price: 69968,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T03:48:00.000Z",
        stops: ["IST"],
        duration: 957,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T08:54:00.000Z",
        stops: [],
        duration: 1635,
      },
    ],
  },
  {
    price: 82978,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T17:36:00.000Z",
        stops: ["IST"],
        duration: 1127,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T05:47:00.000Z",
        stops: ["DXB", "HKG"],
        duration: 1519,
      },
    ],
  },
  {
    price: 94641,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T16:05:00.000Z",
        stops: ["BKK", "SHA", "SIN"],
        duration: 1312,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T03:17:00.000Z",
        stops: ["SIN", "BKK", "DXB"],
        duration: 757,
      },
    ],
  },
  {
    price: 91190,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T01:51:00.000Z",
        stops: ["HKG", "BKK"],
        duration: 1484,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T05:53:00.000Z",
        stops: ["AUH"],
        duration: 1543,
      },
    ],
  },
  {
    price: 74542,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T08:52:00.000Z",
        stops: [],
        duration: 1261,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T16:04:00.000Z",
        stops: [],
        duration: 1402,
      },
    ],
  },
  {
    price: 36497,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T23:06:00.000Z",
        stops: ["SIN", "SHA", "HKG"],
        duration: 1749,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T14:05:00.000Z",
        stops: [],
        duration: 615,
      },
    ],
  },
  {
    price: 96027,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T06:46:00.000Z",
        stops: ["IST", "KUL", "HKG"],
        duration: 1338,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T07:02:00.000Z",
        stops: ["IST", "SIN", "AUH"],
        duration: 1438,
      },
    ],
  },
  {
    price: 61484,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T10:39:00.000Z",
        stops: ["SHA"],
        duration: 1955,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T21:33:00.000Z",
        stops: ["BKK", "SIN", "AUH"],
        duration: 1215,
      },
    ],
  },
  {
    price: 29000,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T22:06:00.000Z",
        stops: ["AUH", "DXB"],
        duration: 1776,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T04:40:00.000Z",
        stops: [],
        duration: 1117,
      },
    ],
  },
  {
    price: 54391,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T21:38:00.000Z",
        stops: ["DXB"],
        duration: 1702,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T04:24:00.000Z",
        stops: ["KUL"],
        duration: 907,
      },
    ],
  },
  {
    price: 21033,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T22:09:00.000Z",
        stops: ["BKK"],
        duration: 1939,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T02:02:00.000Z",
        stops: ["IST"],
        duration: 1625,
      },
    ],
  },
  {
    price: 97729,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T15:22:00.000Z",
        stops: ["HKG"],
        duration: 635,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T12:32:00.000Z",
        stops: ["SHA"],
        duration: 1719,
      },
    ],
  },
  {
    price: 26927,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T17:29:00.000Z",
        stops: ["KUL", "BKK"],
        duration: 1471,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T03:38:00.000Z",
        stops: [],
        duration: 1085,
      },
    ],
  },
  {
    price: 89058,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T17:32:00.000Z",
        stops: [],
        duration: 606,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T11:29:00.000Z",
        stops: ["DXB", "IST"],
        duration: 1090,
      },
    ],
  },
  {
    price: 30213,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T00:37:00.000Z",
        stops: ["BKK"],
        duration: 852,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T03:54:00.000Z",
        stops: ["SHA"],
        duration: 1508,
      },
    ],
  },
  {
    price: 54362,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T11:53:00.000Z",
        stops: ["SIN", "KUL", "DXB"],
        duration: 992,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T21:08:00.000Z",
        stops: ["KUL", "AUH", "BKK"],
        duration: 1475,
      },
    ],
  },
  {
    price: 48956,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T17:01:00.000Z",
        stops: ["HKG", "SIN", "AUH"],
        duration: 1928,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T04:53:00.000Z",
        stops: ["KUL"],
        duration: 1464,
      },
    ],
  },
  {
    price: 83373,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T00:35:00.000Z",
        stops: ["BKK"],
        duration: 730,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T23:59:00.000Z",
        stops: [],
        duration: 1373,
      },
    ],
  },
  {
    price: 72210,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T15:01:00.000Z",
        stops: ["AUH", "SHA", "HKG"],
        duration: 1822,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T08:34:00.000Z",
        stops: ["SHA"],
        duration: 631,
      },
    ],
  },
  {
    price: 68282,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T01:13:00.000Z",
        stops: ["AUH", "DXB"],
        duration: 613,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T21:08:00.000Z",
        stops: ["KUL", "DXB", "AUH"],
        duration: 1341,
      },
    ],
  },
  {
    price: 42175,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T09:45:00.000Z",
        stops: ["SIN", "BKK"],
        duration: 1552,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T00:18:00.000Z",
        stops: [],
        duration: 1693,
      },
    ],
  },
  {
    price: 75581,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T14:51:00.000Z",
        stops: ["KUL"],
        duration: 1645,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T15:23:00.000Z",
        stops: ["IST", "KUL", "DXB"],
        duration: 1694,
      },
    ],
  },
  {
    price: 24080,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T15:26:00.000Z",
        stops: ["SIN", "BKK"],
        duration: 1088,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T17:54:00.000Z",
        stops: ["SHA", "AUH"],
        duration: 955,
      },
    ],
  },
  {
    price: 55092,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T02:10:00.000Z",
        stops: ["IST"],
        duration: 1274,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T03:16:00.000Z",
        stops: [],
        duration: 809,
      },
    ],
  },
  {
    price: 66040,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T06:08:00.000Z",
        stops: ["SIN", "AUH", "HKG"],
        duration: 673,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T04:18:00.000Z",
        stops: ["SHA", "SIN", "HKG"],
        duration: 1567,
      },
    ],
  },
  {
    price: 84908,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T08:07:00.000Z",
        stops: ["AUH", "SHA"],
        duration: 747,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T15:10:00.000Z",
        stops: ["BKK"],
        duration: 1940,
      },
    ],
  },
  {
    price: 39912,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T00:55:00.000Z",
        stops: [],
        duration: 1280,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T13:49:00.000Z",
        stops: ["HKG", "SHA"],
        duration: 1096,
      },
    ],
  },
  {
    price: 67029,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T14:57:00.000Z",
        stops: ["SIN", "HKG", "BKK"],
        duration: 1046,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T10:36:00.000Z",
        stops: [],
        duration: 1980,
      },
    ],
  },
  {
    price: 53972,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T11:12:00.000Z",
        stops: ["SIN", "IST", "AUH"],
        duration: 1992,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T10:34:00.000Z",
        stops: ["SHA", "DXB", "SIN"],
        duration: 1932,
      },
    ],
  },
  {
    price: 84459,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T16:08:00.000Z",
        stops: ["KUL", "IST", "HKG"],
        duration: 1805,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T23:45:00.000Z",
        stops: ["DXB"],
        duration: 1966,
      },
    ],
  },
  {
    price: 61733,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T03:23:00.000Z",
        stops: [],
        duration: 928,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T01:29:00.000Z",
        stops: ["SHA", "KUL", "AUH"],
        duration: 1179,
      },
    ],
  },
  {
    price: 59470,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T09:17:00.000Z",
        stops: ["SHA", "AUH"],
        duration: 641,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T13:05:00.000Z",
        stops: ["BKK", "KUL"],
        duration: 1961,
      },
    ],
  },
  {
    price: 31862,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T09:17:00.000Z",
        stops: ["SIN", "BKK", "AUH"],
        duration: 1509,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T03:55:00.000Z",
        stops: ["BKK"],
        duration: 1929,
      },
    ],
  },
  {
    price: 23490,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T12:34:00.000Z",
        stops: [],
        duration: 1099,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T07:46:00.000Z",
        stops: ["BKK", "SHA", "AUH"],
        duration: 1236,
      },
    ],
  },
  {
    price: 43010,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T17:13:00.000Z",
        stops: ["BKK", "DXB"],
        duration: 1723,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T12:30:00.000Z",
        stops: ["HKG"],
        duration: 1953,
      },
    ],
  },
  {
    price: 30334,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T17:16:00.000Z",
        stops: [],
        duration: 926,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T08:16:00.000Z",
        stops: ["AUH"],
        duration: 1913,
      },
    ],
  },
  {
    price: 98625,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T14:39:00.000Z",
        stops: ["KUL", "HKG"],
        duration: 1555,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T07:30:00.000Z",
        stops: ["SHA", "BKK", "HKG"],
        duration: 1589,
      },
    ],
  },
  {
    price: 33974,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T05:24:00.000Z",
        stops: [],
        duration: 1179,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T16:27:00.000Z",
        stops: [],
        duration: 1421,
      },
    ],
  },
  {
    price: 57129,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T09:24:00.000Z",
        stops: ["IST"],
        duration: 1951,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T17:02:00.000Z",
        stops: ["HKG"],
        duration: 1342,
      },
    ],
  },
  {
    price: 63586,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T14:40:00.000Z",
        stops: ["HKG", "IST", "KUL"],
        duration: 1782,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T16:48:00.000Z",
        stops: ["IST", "BKK", "HKG"],
        duration: 1271,
      },
    ],
  },
  {
    price: 73390,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T05:18:00.000Z",
        stops: ["AUH", "IST"],
        duration: 1266,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T04:28:00.000Z",
        stops: [],
        duration: 1795,
      },
    ],
  },
  {
    price: 82158,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T21:53:00.000Z",
        stops: ["BKK", "AUH", "IST"],
        duration: 1726,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T12:42:00.000Z",
        stops: [],
        duration: 827,
      },
    ],
  },
  {
    price: 46736,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T06:39:00.000Z",
        stops: [],
        duration: 750,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T00:39:00.000Z",
        stops: ["KUL", "HKG", "IST"],
        duration: 1347,
      },
    ],
  },
  {
    price: 45280,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T23:26:00.000Z",
        stops: [],
        duration: 1368,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T10:48:00.000Z",
        stops: ["HKG"],
        duration: 1627,
      },
    ],
  },
  {
    price: 78767,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T14:00:00.000Z",
        stops: ["SIN", "SHA"],
        duration: 1948,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T03:55:00.000Z",
        stops: ["IST", "DXB", "SHA"],
        duration: 1096,
      },
    ],
  },
  {
    price: 85289,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T02:21:00.000Z",
        stops: [],
        duration: 1653,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T06:04:00.000Z",
        stops: [],
        duration: 673,
      },
    ],
  },
  {
    price: 89262,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T16:11:00.000Z",
        stops: ["DXB", "HKG"],
        duration: 1597,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T02:16:00.000Z",
        stops: ["IST", "SHA", "DXB"],
        duration: 1921,
      },
    ],
  },
  {
    price: 55739,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T04:58:00.000Z",
        stops: [],
        duration: 1030,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T08:12:00.000Z",
        stops: ["IST", "SIN"],
        duration: 1798,
      },
    ],
  },
  {
    price: 37079,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T02:17:00.000Z",
        stops: ["SIN"],
        duration: 1304,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T03:14:00.000Z",
        stops: [],
        duration: 1982,
      },
    ],
  },
  {
    price: 47681,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T04:19:00.000Z",
        stops: [],
        duration: 1709,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T13:06:00.000Z",
        stops: ["SIN", "IST", "SHA"],
        duration: 1291,
      },
    ],
  },
  {
    price: 97285,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T01:30:00.000Z",
        stops: ["AUH", "SIN"],
        duration: 740,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T07:58:00.000Z",
        stops: ["SIN", "AUH", "KUL"],
        duration: 741,
      },
    ],
  },
  {
    price: 74538,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T06:40:00.000Z",
        stops: ["SIN"],
        duration: 1725,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T04:18:00.000Z",
        stops: ["IST"],
        duration: 1384,
      },
    ],
  },
  {
    price: 15600,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T09:14:00.000Z",
        stops: [],
        duration: 1007,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T05:47:00.000Z",
        stops: ["KUL", "SIN", "IST"],
        duration: 1173,
      },
    ],
  },
  {
    price: 33030,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T03:16:00.000Z",
        stops: [],
        duration: 1052,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T21:45:00.000Z",
        stops: ["IST", "HKG", "DXB"],
        duration: 861,
      },
    ],
  },
  {
    price: 61070,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T06:08:00.000Z",
        stops: ["SIN", "DXB"],
        duration: 1888,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T08:40:00.000Z",
        stops: ["DXB"],
        duration: 705,
      },
    ],
  },
  {
    price: 24073,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T02:26:00.000Z",
        stops: ["KUL", "IST", "SHA"],
        duration: 812,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T22:22:00.000Z",
        stops: ["SIN"],
        duration: 1761,
      },
    ],
  },
  {
    price: 70989,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T11:00:00.000Z",
        stops: ["IST", "AUH"],
        duration: 1130,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T16:53:00.000Z",
        stops: ["SIN", "SHA"],
        duration: 1912,
      },
    ],
  },
  {
    price: 89713,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T03:09:00.000Z",
        stops: ["SIN"],
        duration: 807,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T07:57:00.000Z",
        stops: [],
        duration: 1874,
      },
    ],
  },
  {
    price: 60804,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T05:45:00.000Z",
        stops: [],
        duration: 971,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T02:56:00.000Z",
        stops: ["DXB", "AUH", "SHA"],
        duration: 1402,
      },
    ],
  },
  {
    price: 47341,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T03:33:00.000Z",
        stops: [],
        duration: 695,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T02:13:00.000Z",
        stops: ["DXB"],
        duration: 1691,
      },
    ],
  },
  {
    price: 68473,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T00:43:00.000Z",
        stops: ["DXB", "SHA"],
        duration: 1503,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T14:19:00.000Z",
        stops: [],
        duration: 963,
      },
    ],
  },
  {
    price: 69945,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T11:15:00.000Z",
        stops: ["DXB", "BKK", "KUL"],
        duration: 1352,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T06:45:00.000Z",
        stops: ["SIN"],
        duration: 1272,
      },
    ],
  },
  {
    price: 98383,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T00:05:00.000Z",
        stops: ["DXB"],
        duration: 951,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T12:36:00.000Z",
        stops: ["SHA", "DXB", "KUL"],
        duration: 1449,
      },
    ],
  },
  {
    price: 55426,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T15:44:00.000Z",
        stops: [],
        duration: 614,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T02:06:00.000Z",
        stops: ["BKK"],
        duration: 633,
      },
    ],
  },
  {
    price: 49132,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T15:36:00.000Z",
        stops: ["DXB", "SIN"],
        duration: 834,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T07:45:00.000Z",
        stops: ["SHA"],
        duration: 1489,
      },
    ],
  },
  {
    price: 69006,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T08:48:00.000Z",
        stops: ["KUL"],
        duration: 1309,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T01:50:00.000Z",
        stops: ["BKK"],
        duration: 1005,
      },
    ],
  },
  {
    price: 21778,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T10:22:00.000Z",
        stops: ["HKG"],
        duration: 1024,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T17:08:00.000Z",
        stops: ["SIN", "AUH"],
        duration: 1903,
      },
    ],
  },
  {
    price: 48453,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T03:48:00.000Z",
        stops: [],
        duration: 972,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T02:51:00.000Z",
        stops: ["SHA", "SIN", "AUH"],
        duration: 1357,
      },
    ],
  },
  {
    price: 68556,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T00:56:00.000Z",
        stops: ["SIN"],
        duration: 1765,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T09:40:00.000Z",
        stops: [],
        duration: 1875,
      },
    ],
  },
  {
    price: 54469,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T17:04:00.000Z",
        stops: ["KUL"],
        duration: 1233,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T13:25:00.000Z",
        stops: [],
        duration: 1842,
      },
    ],
  },
  {
    price: 75158,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T03:44:00.000Z",
        stops: ["SIN", "HKG"],
        duration: 1418,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T22:14:00.000Z",
        stops: ["HKG"],
        duration: 1601,
      },
    ],
  },
  {
    price: 18706,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T15:03:00.000Z",
        stops: ["AUH", "SIN", "IST"],
        duration: 1566,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T13:36:00.000Z",
        stops: [],
        duration: 803,
      },
    ],
  },
  {
    price: 53825,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T02:40:00.000Z",
        stops: ["DXB", "SIN"],
        duration: 838,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T13:04:00.000Z",
        stops: [],
        duration: 1197,
      },
    ],
  },
  {
    price: 56052,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T09:48:00.000Z",
        stops: ["SIN", "DXB", "KUL"],
        duration: 1210,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T13:34:00.000Z",
        stops: ["IST", "SHA", "KUL"],
        duration: 762,
      },
    ],
  },
  {
    price: 26728,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T17:52:00.000Z",
        stops: ["SIN"],
        duration: 1633,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T11:18:00.000Z",
        stops: ["BKK", "DXB", "SIN"],
        duration: 829,
      },
    ],
  },
  {
    price: 96031,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T05:21:00.000Z",
        stops: ["BKK", "DXB", "KUL"],
        duration: 895,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T16:55:00.000Z",
        stops: ["BKK", "KUL", "SHA"],
        duration: 1929,
      },
    ],
  },
  {
    price: 77900,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T05:59:00.000Z",
        stops: ["IST", "BKK", "DXB"],
        duration: 807,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T06:30:00.000Z",
        stops: ["AUH", "KUL"],
        duration: 1732,
      },
    ],
  },
  {
    price: 71577,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T03:51:00.000Z",
        stops: [],
        duration: 1449,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T12:14:00.000Z",
        stops: [],
        duration: 1134,
      },
    ],
  },
  {
    price: 91479,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T00:58:00.000Z",
        stops: [],
        duration: 1182,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T15:33:00.000Z",
        stops: ["IST", "AUH"],
        duration: 1840,
      },
    ],
  },
  {
    price: 49841,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T09:01:00.000Z",
        stops: ["BKK", "KUL", "IST"],
        duration: 1847,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T06:52:00.000Z",
        stops: ["DXB", "IST", "BKK"],
        duration: 720,
      },
    ],
  },
  {
    price: 93804,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T23:25:00.000Z",
        stops: ["AUH"],
        duration: 1688,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T16:27:00.000Z",
        stops: ["BKK"],
        duration: 767,
      },
    ],
  },
  {
    price: 48683,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T02:17:00.000Z",
        stops: ["AUH", "SHA"],
        duration: 1966,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T00:06:00.000Z",
        stops: ["IST"],
        duration: 1748,
      },
    ],
  },
  {
    price: 88363,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T16:26:00.000Z",
        stops: ["IST", "BKK"],
        duration: 1380,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T22:02:00.000Z",
        stops: ["BKK", "KUL"],
        duration: 1379,
      },
    ],
  },
  {
    price: 78756,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T21:42:00.000Z",
        stops: [],
        duration: 943,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T05:16:00.000Z",
        stops: ["HKG", "SHA", "IST"],
        duration: 1918,
      },
    ],
  },
  {
    price: 89357,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T16:22:00.000Z",
        stops: ["AUH", "HKG"],
        duration: 1474,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T17:14:00.000Z",
        stops: ["DXB", "SHA", "AUH"],
        duration: 1264,
      },
    ],
  },
  {
    price: 32338,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T15:10:00.000Z",
        stops: ["AUH"],
        duration: 1843,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T02:15:00.000Z",
        stops: [],
        duration: 1177,
      },
    ],
  },
  {
    price: 27894,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T10:28:00.000Z",
        stops: [],
        duration: 1447,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T01:45:00.000Z",
        stops: ["KUL"],
        duration: 1853,
      },
    ],
  },
  {
    price: 81510,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T11:54:00.000Z",
        stops: [],
        duration: 1531,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T14:26:00.000Z",
        stops: ["BKK", "SIN", "AUH"],
        duration: 1128,
      },
    ],
  },
  {
    price: 70705,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T03:30:00.000Z",
        stops: ["KUL", "DXB"],
        duration: 1927,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T15:54:00.000Z",
        stops: [],
        duration: 657,
      },
    ],
  },
  {
    price: 66013,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T06:43:00.000Z",
        stops: ["BKK"],
        duration: 1201,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T08:58:00.000Z",
        stops: ["SHA", "KUL"],
        duration: 1461,
      },
    ],
  },
  {
    price: 58964,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T08:46:00.000Z",
        stops: [],
        duration: 823,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T23:39:00.000Z",
        stops: ["IST", "DXB", "BKK"],
        duration: 1946,
      },
    ],
  },
  {
    price: 33671,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T21:37:00.000Z",
        stops: ["KUL", "AUH"],
        duration: 1535,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T12:40:00.000Z",
        stops: ["KUL", "AUH"],
        duration: 1194,
      },
    ],
  },
  {
    price: 71250,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T13:07:00.000Z",
        stops: ["SIN", "SHA", "HKG"],
        duration: 1426,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T23:01:00.000Z",
        stops: ["DXB", "AUH", "SHA"],
        duration: 734,
      },
    ],
  },
  {
    price: 23526,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T05:36:00.000Z",
        stops: ["BKK", "IST"],
        duration: 1271,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T07:06:00.000Z",
        stops: ["DXB", "BKK", "KUL"],
        duration: 1645,
      },
    ],
  },
  {
    price: 93181,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T13:45:00.000Z",
        stops: ["SIN", "KUL"],
        duration: 946,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T17:28:00.000Z",
        stops: [],
        duration: 1529,
      },
    ],
  },
  {
    price: 72900,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T14:49:00.000Z",
        stops: ["HKG"],
        duration: 1133,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T00:12:00.000Z",
        stops: ["SHA", "IST", "SIN"],
        duration: 799,
      },
    ],
  },
  {
    price: 17170,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T22:25:00.000Z",
        stops: [],
        duration: 1956,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T23:04:00.000Z",
        stops: ["SIN", "AUH"],
        duration: 931,
      },
    ],
  },
  {
    price: 92375,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T01:50:00.000Z",
        stops: ["SHA", "DXB"],
        duration: 1200,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T10:40:00.000Z",
        stops: ["HKG", "BKK"],
        duration: 1033,
      },
    ],
  },
  {
    price: 53531,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T11:19:00.000Z",
        stops: ["BKK"],
        duration: 1906,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T15:24:00.000Z",
        stops: ["SHA", "IST", "AUH"],
        duration: 741,
      },
    ],
  },
  {
    price: 62424,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T00:12:00.000Z",
        stops: [],
        duration: 1632,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T06:28:00.000Z",
        stops: ["AUH"],
        duration: 1219,
      },
    ],
  },
  {
    price: 20218,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T04:20:00.000Z",
        stops: ["HKG", "DXB"],
        duration: 1847,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T21:42:00.000Z",
        stops: ["AUH", "IST", "BKK"],
        duration: 1687,
      },
    ],
  },
  {
    price: 22731,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T06:05:00.000Z",
        stops: [],
        duration: 1795,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T04:23:00.000Z",
        stops: ["BKK", "KUL"],
        duration: 1540,
      },
    ],
  },
  {
    price: 44567,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T22:47:00.000Z",
        stops: [],
        duration: 1798,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T21:31:00.000Z",
        stops: [],
        duration: 1641,
      },
    ],
  },
  {
    price: 34907,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T01:11:00.000Z",
        stops: ["SIN", "HKG"],
        duration: 736,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T10:50:00.000Z",
        stops: [],
        duration: 1861,
      },
    ],
  },
  {
    price: 80348,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T21:54:00.000Z",
        stops: ["SHA", "IST"],
        duration: 905,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T01:04:00.000Z",
        stops: [],
        duration: 1115,
      },
    ],
  },
  {
    price: 99856,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T00:35:00.000Z",
        stops: ["KUL", "IST"],
        duration: 1894,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T00:44:00.000Z",
        stops: ["HKG", "IST", "DXB"],
        duration: 1788,
      },
    ],
  },
  {
    price: 90687,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T21:40:00.000Z",
        stops: [],
        duration: 1556,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T03:15:00.000Z",
        stops: ["SHA", "DXB"],
        duration: 1898,
      },
    ],
  },
  {
    price: 39553,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T15:32:00.000Z",
        stops: ["AUH"],
        duration: 1869,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T00:34:00.000Z",
        stops: ["SIN", "SHA", "BKK"],
        duration: 1983,
      },
    ],
  },
  {
    price: 83495,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T00:36:00.000Z",
        stops: ["IST"],
        duration: 1402,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T23:08:00.000Z",
        stops: ["SIN"],
        duration: 1558,
      },
    ],
  },
  {
    price: 78854,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T06:05:00.000Z",
        stops: [],
        duration: 1578,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T07:01:00.000Z",
        stops: [],
        duration: 1351,
      },
    ],
  },
  {
    price: 62797,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T04:43:00.000Z",
        stops: [],
        duration: 1458,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T00:36:00.000Z",
        stops: [],
        duration: 1247,
      },
    ],
  },
  {
    price: 33658,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T15:03:00.000Z",
        stops: ["KUL"],
        duration: 1811,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T21:00:00.000Z",
        stops: ["IST", "KUL", "SIN"],
        duration: 1988,
      },
    ],
  },
  {
    price: 17024,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T03:03:00.000Z",
        stops: ["SHA", "KUL"],
        duration: 751,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T00:16:00.000Z",
        stops: ["SIN"],
        duration: 1355,
      },
    ],
  },
  {
    price: 31047,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T10:24:00.000Z",
        stops: ["IST", "SHA", "AUH"],
        duration: 1351,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T23:57:00.000Z",
        stops: ["DXB", "IST"],
        duration: 1864,
      },
    ],
  },
  {
    price: 73915,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T14:18:00.000Z",
        stops: ["SIN"],
        duration: 1039,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T23:52:00.000Z",
        stops: ["KUL", "BKK", "SIN"],
        duration: 760,
      },
    ],
  },
  {
    price: 40492,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T23:12:00.000Z",
        stops: ["HKG", "KUL", "DXB"],
        duration: 1397,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T01:47:00.000Z",
        stops: ["SHA", "DXB"],
        duration: 1312,
      },
    ],
  },
  {
    price: 30471,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T23:31:00.000Z",
        stops: ["SIN", "AUH"],
        duration: 1601,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T01:41:00.000Z",
        stops: ["BKK", "IST"],
        duration: 873,
      },
    ],
  },
  {
    price: 96502,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T15:50:00.000Z",
        stops: [],
        duration: 1882,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T22:07:00.000Z",
        stops: [],
        duration: 1913,
      },
    ],
  },
  {
    price: 61334,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T11:50:00.000Z",
        stops: ["IST", "AUH", "DXB"],
        duration: 1646,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T01:08:00.000Z",
        stops: [],
        duration: 1957,
      },
    ],
  },
  {
    price: 56751,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T21:45:00.000Z",
        stops: ["KUL", "BKK"],
        duration: 1351,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T23:07:00.000Z",
        stops: ["KUL"],
        duration: 651,
      },
    ],
  },
  {
    price: 84917,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T23:30:00.000Z",
        stops: ["BKK", "KUL"],
        duration: 815,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T14:24:00.000Z",
        stops: ["AUH", "BKK", "HKG"],
        duration: 1384,
      },
    ],
  },
  {
    price: 97658,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T15:40:00.000Z",
        stops: ["HKG"],
        duration: 1702,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T22:04:00.000Z",
        stops: ["SIN", "BKK"],
        duration: 1720,
      },
    ],
  },
  {
    price: 51002,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T07:10:00.000Z",
        stops: ["BKK", "HKG"],
        duration: 1245,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T11:55:00.000Z",
        stops: [],
        duration: 852,
      },
    ],
  },
  {
    price: 80294,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T04:59:00.000Z",
        stops: [],
        duration: 1147,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T23:41:00.000Z",
        stops: ["AUH", "KUL"],
        duration: 1163,
      },
    ],
  },
  {
    price: 45152,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T03:16:00.000Z",
        stops: ["SHA", "IST"],
        duration: 764,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T07:34:00.000Z",
        stops: ["DXB"],
        duration: 1671,
      },
    ],
  },
  {
    price: 49745,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T21:21:00.000Z",
        stops: [],
        duration: 1368,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T02:10:00.000Z",
        stops: ["HKG", "KUL", "SHA"],
        duration: 1417,
      },
    ],
  },
  {
    price: 16321,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T06:20:00.000Z",
        stops: ["HKG"],
        duration: 1400,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T08:07:00.000Z",
        stops: ["HKG", "IST", "AUH"],
        duration: 1154,
      },
    ],
  },
  {
    price: 87487,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T23:18:00.000Z",
        stops: ["HKG"],
        duration: 1115,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T03:40:00.000Z",
        stops: ["KUL", "IST"],
        duration: 1883,
      },
    ],
  },
  {
    price: 24248,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T22:04:00.000Z",
        stops: ["BKK"],
        duration: 1182,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T16:20:00.000Z",
        stops: ["HKG", "SHA"],
        duration: 818,
      },
    ],
  },
  {
    price: 94988,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T09:10:00.000Z",
        stops: [],
        duration: 961,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T15:19:00.000Z",
        stops: ["IST", "SIN"],
        duration: 1038,
      },
    ],
  },
  {
    price: 33398,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T09:00:00.000Z",
        stops: ["KUL"],
        duration: 1893,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T04:35:00.000Z",
        stops: ["BKK"],
        duration: 1157,
      },
    ],
  },
  {
    price: 87769,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T01:23:00.000Z",
        stops: ["SHA"],
        duration: 1773,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T00:01:00.000Z",
        stops: ["SHA"],
        duration: 969,
      },
    ],
  },
  {
    price: 52336,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T02:05:00.000Z",
        stops: [],
        duration: 907,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T00:42:00.000Z",
        stops: [],
        duration: 704,
      },
    ],
  },
  {
    price: 76422,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T02:59:00.000Z",
        stops: [],
        duration: 749,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T06:42:00.000Z",
        stops: [],
        duration: 1843,
      },
    ],
  },
  {
    price: 61799,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T14:07:00.000Z",
        stops: [],
        duration: 1766,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T04:33:00.000Z",
        stops: ["BKK", "KUL", "DXB"],
        duration: 1603,
      },
    ],
  },
  {
    price: 45235,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T13:03:00.000Z",
        stops: ["SHA", "BKK", "KUL"],
        duration: 1741,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T11:47:00.000Z",
        stops: ["BKK", "SHA"],
        duration: 671,
      },
    ],
  },
  {
    price: 41743,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T15:53:00.000Z",
        stops: ["SHA"],
        duration: 1332,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T13:23:00.000Z",
        stops: ["AUH"],
        duration: 1054,
      },
    ],
  },
  {
    price: 64346,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T22:33:00.000Z",
        stops: ["IST", "AUH"],
        duration: 649,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T07:35:00.000Z",
        stops: ["BKK"],
        duration: 1143,
      },
    ],
  },
  {
    price: 35692,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T16:23:00.000Z",
        stops: ["HKG", "AUH"],
        duration: 1763,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T11:36:00.000Z",
        stops: [],
        duration: 1457,
      },
    ],
  },
  {
    price: 60328,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T08:09:00.000Z",
        stops: [],
        duration: 1371,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T17:05:00.000Z",
        stops: ["IST", "SIN"],
        duration: 895,
      },
    ],
  },
  {
    price: 17254,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T16:55:00.000Z",
        stops: ["HKG", "AUH"],
        duration: 1067,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T17:15:00.000Z",
        stops: ["SIN", "AUH", "HKG"],
        duration: 1622,
      },
    ],
  },
  {
    price: 59529,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T02:56:00.000Z",
        stops: ["KUL", "DXB"],
        duration: 1896,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T05:27:00.000Z",
        stops: ["DXB", "KUL"],
        duration: 1206,
      },
    ],
  },
  {
    price: 83366,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T11:35:00.000Z",
        stops: ["IST", "SHA", "AUH"],
        duration: 1336,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T07:33:00.000Z",
        stops: ["AUH", "HKG", "SIN"],
        duration: 1313,
      },
    ],
  },
  {
    price: 94276,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T06:09:00.000Z",
        stops: ["HKG", "AUH"],
        duration: 771,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T07:41:00.000Z",
        stops: ["IST", "KUL"],
        duration: 951,
      },
    ],
  },
  {
    price: 33666,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T14:11:00.000Z",
        stops: ["AUH"],
        duration: 1996,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T04:59:00.000Z",
        stops: ["IST", "BKK"],
        duration: 1239,
      },
    ],
  },
  {
    price: 40541,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T14:25:00.000Z",
        stops: ["SIN"],
        duration: 1951,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T05:54:00.000Z",
        stops: ["AUH"],
        duration: 1189,
      },
    ],
  },
  {
    price: 98197,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T08:05:00.000Z",
        stops: ["SIN", "SHA"],
        duration: 941,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T02:25:00.000Z",
        stops: ["BKK", "AUH", "SIN"],
        duration: 1958,
      },
    ],
  },
  {
    price: 31150,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T09:35:00.000Z",
        stops: ["BKK"],
        duration: 1056,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T10:38:00.000Z",
        stops: ["BKK", "DXB", "SHA"],
        duration: 1650,
      },
    ],
  },
  {
    price: 65298,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T04:14:00.000Z",
        stops: ["KUL", "SHA"],
        duration: 688,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T14:18:00.000Z",
        stops: [],
        duration: 1017,
      },
    ],
  },
  {
    price: 22172,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T00:29:00.000Z",
        stops: ["KUL", "SIN"],
        duration: 870,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T10:49:00.000Z",
        stops: ["HKG"],
        duration: 743,
      },
    ],
  },
  {
    price: 47679,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T16:36:00.000Z",
        stops: ["HKG"],
        duration: 1926,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T14:19:00.000Z",
        stops: [],
        duration: 1419,
      },
    ],
  },
  {
    price: 71434,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T04:42:00.000Z",
        stops: ["IST"],
        duration: 1821,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T21:35:00.000Z",
        stops: ["IST", "AUH", "HKG"],
        duration: 1651,
      },
    ],
  },
  {
    price: 43093,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T15:39:00.000Z",
        stops: [],
        duration: 1453,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T04:18:00.000Z",
        stops: [],
        duration: 624,
      },
    ],
  },
  {
    price: 73634,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T15:43:00.000Z",
        stops: [],
        duration: 1082,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T21:03:00.000Z",
        stops: ["DXB", "IST", "AUH"],
        duration: 1282,
      },
    ],
  },
  {
    price: 54819,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T06:49:00.000Z",
        stops: [],
        duration: 1066,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T01:24:00.000Z",
        stops: ["IST"],
        duration: 948,
      },
    ],
  },
  {
    price: 89866,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T15:12:00.000Z",
        stops: ["DXB", "KUL"],
        duration: 1971,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T15:58:00.000Z",
        stops: ["KUL", "SIN"],
        duration: 1165,
      },
    ],
  },
  {
    price: 77005,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T07:37:00.000Z",
        stops: [],
        duration: 887,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T12:28:00.000Z",
        stops: ["AUH", "DXB", "KUL"],
        duration: 882,
      },
    ],
  },
  {
    price: 53869,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T11:22:00.000Z",
        stops: [],
        duration: 1372,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T07:32:00.000Z",
        stops: ["SHA"],
        duration: 1341,
      },
    ],
  },
  {
    price: 53457,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T23:24:00.000Z",
        stops: ["SIN"],
        duration: 1072,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T14:13:00.000Z",
        stops: [],
        duration: 1184,
      },
    ],
  },
  {
    price: 15080,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T02:25:00.000Z",
        stops: [],
        duration: 1842,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T12:30:00.000Z",
        stops: ["BKK", "SHA", "DXB"],
        duration: 1066,
      },
    ],
  },
  {
    price: 69156,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T07:56:00.000Z",
        stops: [],
        duration: 606,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T06:23:00.000Z",
        stops: ["HKG", "BKK"],
        duration: 702,
      },
    ],
  },
  {
    price: 72800,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T12:42:00.000Z",
        stops: ["SHA", "KUL", "SIN"],
        duration: 1359,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T23:40:00.000Z",
        stops: ["BKK", "KUL"],
        duration: 1267,
      },
    ],
  },
  {
    price: 34311,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T06:05:00.000Z",
        stops: ["BKK", "KUL", "DXB"],
        duration: 1979,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T02:24:00.000Z",
        stops: [],
        duration: 1378,
      },
    ],
  },
  {
    price: 66583,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T01:47:00.000Z",
        stops: ["HKG", "BKK"],
        duration: 1678,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T22:47:00.000Z",
        stops: [],
        duration: 1216,
      },
    ],
  },
  {
    price: 81007,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T09:17:00.000Z",
        stops: [],
        duration: 1904,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T06:26:00.000Z",
        stops: ["AUH"],
        duration: 1097,
      },
    ],
  },
  {
    price: 26080,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T08:58:00.000Z",
        stops: ["HKG", "DXB", "AUH"],
        duration: 895,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T00:15:00.000Z",
        stops: [],
        duration: 1675,
      },
    ],
  },
  {
    price: 27578,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T06:37:00.000Z",
        stops: ["SHA", "SIN", "HKG"],
        duration: 1520,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T22:36:00.000Z",
        stops: ["BKK"],
        duration: 1090,
      },
    ],
  },
  {
    price: 26335,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T16:12:00.000Z",
        stops: ["IST", "BKK", "SHA"],
        duration: 1784,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T13:13:00.000Z",
        stops: [],
        duration: 1034,
      },
    ],
  },
  {
    price: 76822,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T01:22:00.000Z",
        stops: [],
        duration: 880,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T01:24:00.000Z",
        stops: ["SIN", "KUL"],
        duration: 1243,
      },
    ],
  },
  {
    price: 40783,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T00:11:00.000Z",
        stops: ["SHA"],
        duration: 619,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T15:47:00.000Z",
        stops: [],
        duration: 925,
      },
    ],
  },
  {
    price: 26065,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T09:05:00.000Z",
        stops: ["IST", "KUL"],
        duration: 1918,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T05:07:00.000Z",
        stops: ["BKK", "HKG"],
        duration: 749,
      },
    ],
  },
  {
    price: 67059,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T10:31:00.000Z",
        stops: ["BKK"],
        duration: 731,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T11:47:00.000Z",
        stops: [],
        duration: 1948,
      },
    ],
  },
  {
    price: 23218,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T22:30:00.000Z",
        stops: ["DXB"],
        duration: 1459,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T05:47:00.000Z",
        stops: ["KUL", "SHA"],
        duration: 1492,
      },
    ],
  },
  {
    price: 25227,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T00:50:00.000Z",
        stops: ["KUL", "AUH"],
        duration: 669,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T15:50:00.000Z",
        stops: ["SIN"],
        duration: 1909,
      },
    ],
  },
  {
    price: 91088,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T06:58:00.000Z",
        stops: ["AUH", "IST", "SIN"],
        duration: 1705,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T16:43:00.000Z",
        stops: ["SIN", "IST"],
        duration: 702,
      },
    ],
  },
  {
    price: 23808,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T02:40:00.000Z",
        stops: ["KUL"],
        duration: 1400,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T14:48:00.000Z",
        stops: [],
        duration: 877,
      },
    ],
  },
  {
    price: 97253,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T11:39:00.000Z",
        stops: ["AUH", "SHA", "KUL"],
        duration: 1349,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T06:33:00.000Z",
        stops: ["KUL"],
        duration: 1913,
      },
    ],
  },
  {
    price: 43801,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T22:32:00.000Z",
        stops: ["IST", "AUH"],
        duration: 1508,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T12:50:00.000Z",
        stops: ["BKK", "HKG"],
        duration: 1877,
      },
    ],
  },
  {
    price: 50706,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T22:05:00.000Z",
        stops: ["DXB", "KUL"],
        duration: 1316,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T04:59:00.000Z",
        stops: [],
        duration: 1923,
      },
    ],
  },
  {
    price: 96305,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T11:17:00.000Z",
        stops: ["SIN", "BKK", "SHA"],
        duration: 1938,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T13:47:00.000Z",
        stops: [],
        duration: 1976,
      },
    ],
  },
  {
    price: 96205,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T01:33:00.000Z",
        stops: ["SHA", "AUH", "HKG"],
        duration: 1476,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T22:41:00.000Z",
        stops: [],
        duration: 1908,
      },
    ],
  },
  {
    price: 35245,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T12:23:00.000Z",
        stops: ["KUL", "SIN"],
        duration: 857,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T06:05:00.000Z",
        stops: [],
        duration: 697,
      },
    ],
  },
  {
    price: 35634,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T22:25:00.000Z",
        stops: ["KUL", "HKG", "SIN"],
        duration: 1460,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T09:44:00.000Z",
        stops: ["HKG"],
        duration: 1584,
      },
    ],
  },
  {
    price: 47336,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T23:55:00.000Z",
        stops: ["AUH", "SIN", "KUL"],
        duration: 1897,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T07:14:00.000Z",
        stops: ["DXB", "KUL"],
        duration: 1460,
      },
    ],
  },
  {
    price: 32606,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T15:46:00.000Z",
        stops: [],
        duration: 1533,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T15:50:00.000Z",
        stops: [],
        duration: 1829,
      },
    ],
  },
  {
    price: 79685,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T12:08:00.000Z",
        stops: ["BKK"],
        duration: 991,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T15:20:00.000Z",
        stops: ["DXB", "SIN"],
        duration: 697,
      },
    ],
  },
  {
    price: 39905,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T05:55:00.000Z",
        stops: ["KUL"],
        duration: 804,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T05:34:00.000Z",
        stops: ["AUH", "BKK"],
        duration: 905,
      },
    ],
  },
  {
    price: 65719,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T07:48:00.000Z",
        stops: ["KUL", "BKK"],
        duration: 1951,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T17:10:00.000Z",
        stops: ["SHA", "KUL", "SIN"],
        duration: 1853,
      },
    ],
  },
  {
    price: 86000,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T22:14:00.000Z",
        stops: ["SIN", "BKK"],
        duration: 1703,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T23:26:00.000Z",
        stops: ["SHA", "DXB"],
        duration: 901,
      },
    ],
  },
  {
    price: 59473,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T21:05:00.000Z",
        stops: [],
        duration: 1744,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T08:25:00.000Z",
        stops: ["BKK", "DXB", "SHA"],
        duration: 1063,
      },
    ],
  },
  {
    price: 66089,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T14:52:00.000Z",
        stops: ["DXB", "IST"],
        duration: 686,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T05:25:00.000Z",
        stops: ["AUH", "BKK"],
        duration: 1423,
      },
    ],
  },
  {
    price: 44998,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T09:43:00.000Z",
        stops: ["AUH", "DXB"],
        duration: 1011,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T05:01:00.000Z",
        stops: ["DXB"],
        duration: 1018,
      },
    ],
  },
  {
    price: 69470,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T17:16:00.000Z",
        stops: [],
        duration: 890,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T06:28:00.000Z",
        stops: ["SHA"],
        duration: 1576,
      },
    ],
  },
  {
    price: 73877,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T23:15:00.000Z",
        stops: [],
        duration: 1628,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T13:44:00.000Z",
        stops: [],
        duration: 963,
      },
    ],
  },
  {
    price: 52651,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T08:51:00.000Z",
        stops: ["DXB", "SIN"],
        duration: 1439,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T15:04:00.000Z",
        stops: [],
        duration: 1929,
      },
    ],
  },
  {
    price: 27826,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T03:11:00.000Z",
        stops: ["SIN", "DXB"],
        duration: 1193,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T21:27:00.000Z",
        stops: ["IST", "BKK"],
        duration: 1841,
      },
    ],
  },
  {
    price: 66947,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T09:13:00.000Z",
        stops: ["DXB"],
        duration: 1720,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T23:42:00.000Z",
        stops: ["KUL", "SHA", "AUH"],
        duration: 1417,
      },
    ],
  },
  {
    price: 40423,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T02:01:00.000Z",
        stops: ["AUH"],
        duration: 1628,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T10:57:00.000Z",
        stops: ["SHA", "HKG", "IST"],
        duration: 1738,
      },
    ],
  },
  {
    price: 76180,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T11:15:00.000Z",
        stops: ["KUL", "DXB"],
        duration: 1367,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T02:41:00.000Z",
        stops: ["BKK", "SHA", "DXB"],
        duration: 923,
      },
    ],
  },
  {
    price: 45922,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T09:10:00.000Z",
        stops: ["DXB", "AUH"],
        duration: 1587,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T00:45:00.000Z",
        stops: ["IST", "SIN", "BKK"],
        duration: 1340,
      },
    ],
  },
  {
    price: 56830,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T21:08:00.000Z",
        stops: ["IST", "KUL"],
        duration: 1654,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T23:20:00.000Z",
        stops: [],
        duration: 997,
      },
    ],
  },
  {
    price: 31645,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T11:03:00.000Z",
        stops: ["SIN"],
        duration: 1322,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T07:21:00.000Z",
        stops: ["AUH", "SHA", "SIN"],
        duration: 1012,
      },
    ],
  },
  {
    price: 75012,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T12:10:00.000Z",
        stops: ["SIN"],
        duration: 1864,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T01:14:00.000Z",
        stops: [],
        duration: 1637,
      },
    ],
  },
  {
    price: 73332,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T04:20:00.000Z",
        stops: ["BKK", "SHA"],
        duration: 1437,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T04:49:00.000Z",
        stops: [],
        duration: 757,
      },
    ],
  },
  {
    price: 90669,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T07:43:00.000Z",
        stops: ["BKK"],
        duration: 1153,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T13:53:00.000Z",
        stops: ["KUL", "DXB"],
        duration: 1604,
      },
    ],
  },
  {
    price: 69268,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T21:44:00.000Z",
        stops: ["AUH"],
        duration: 1001,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T10:29:00.000Z",
        stops: ["BKK", "DXB"],
        duration: 1406,
      },
    ],
  },
  {
    price: 42241,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T13:41:00.000Z",
        stops: [],
        duration: 1148,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T07:42:00.000Z",
        stops: ["HKG", "DXB"],
        duration: 1806,
      },
    ],
  },
  {
    price: 57781,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T11:31:00.000Z",
        stops: [],
        duration: 1655,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T00:28:00.000Z",
        stops: ["SIN"],
        duration: 625,
      },
    ],
  },
  {
    price: 63723,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T11:35:00.000Z",
        stops: [],
        duration: 1597,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T00:45:00.000Z",
        stops: [],
        duration: 813,
      },
    ],
  },
  {
    price: 91871,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T03:46:00.000Z",
        stops: [],
        duration: 857,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T03:36:00.000Z",
        stops: ["BKK", "KUL", "AUH"],
        duration: 772,
      },
    ],
  },
  {
    price: 52041,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T07:12:00.000Z",
        stops: ["AUH", "BKK", "SIN"],
        duration: 1414,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T02:58:00.000Z",
        stops: [],
        duration: 1346,
      },
    ],
  },
  {
    price: 65429,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T03:27:00.000Z",
        stops: ["SHA", "BKK"],
        duration: 619,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T11:45:00.000Z",
        stops: ["SIN", "IST", "SHA"],
        duration: 1316,
      },
    ],
  },
  {
    price: 71953,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T13:20:00.000Z",
        stops: ["IST", "SHA"],
        duration: 928,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T12:32:00.000Z",
        stops: ["HKG"],
        duration: 996,
      },
    ],
  },
  {
    price: 40404,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T22:34:00.000Z",
        stops: ["KUL"],
        duration: 772,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T10:01:00.000Z",
        stops: ["AUH", "BKK", "HKG"],
        duration: 1658,
      },
    ],
  },
  {
    price: 81777,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T03:10:00.000Z",
        stops: ["HKG", "SHA", "AUH"],
        duration: 1807,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T14:54:00.000Z",
        stops: ["SIN", "DXB", "IST"],
        duration: 970,
      },
    ],
  },
  {
    price: 93538,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T21:03:00.000Z",
        stops: [],
        duration: 1485,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T12:43:00.000Z",
        stops: ["SIN"],
        duration: 1850,
      },
    ],
  },
  {
    price: 93325,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T03:00:00.000Z",
        stops: ["DXB", "BKK", "AUH"],
        duration: 1830,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T10:40:00.000Z",
        stops: ["AUH", "HKG", "IST"],
        duration: 1682,
      },
    ],
  },
  {
    price: 21545,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T23:30:00.000Z",
        stops: ["HKG"],
        duration: 648,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T16:48:00.000Z",
        stops: ["HKG", "DXB", "SIN"],
        duration: 603,
      },
    ],
  },
  {
    price: 85218,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T17:04:00.000Z",
        stops: ["KUL", "AUH", "SIN"],
        duration: 745,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T02:03:00.000Z",
        stops: ["AUH"],
        duration: 1149,
      },
    ],
  },
  {
    price: 26197,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T09:21:00.000Z",
        stops: ["KUL", "HKG", "AUH"],
        duration: 1805,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T08:12:00.000Z",
        stops: ["BKK", "HKG"],
        duration: 1066,
      },
    ],
  },
  {
    price: 92148,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T00:56:00.000Z",
        stops: [],
        duration: 1242,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T23:26:00.000Z",
        stops: [],
        duration: 615,
      },
    ],
  },
  {
    price: 78925,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T17:42:00.000Z",
        stops: [],
        duration: 1843,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T14:05:00.000Z",
        stops: ["AUH"],
        duration: 711,
      },
    ],
  },
  {
    price: 63821,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T00:06:00.000Z",
        stops: ["AUH", "IST", "BKK"],
        duration: 1604,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T10:31:00.000Z",
        stops: ["IST"],
        duration: 645,
      },
    ],
  },
  {
    price: 25695,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T11:40:00.000Z",
        stops: ["AUH", "HKG"],
        duration: 1664,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T06:34:00.000Z",
        stops: [],
        duration: 1640,
      },
    ],
  },
  {
    price: 38292,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T17:14:00.000Z",
        stops: ["AUH"],
        duration: 1541,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T01:22:00.000Z",
        stops: ["DXB"],
        duration: 932,
      },
    ],
  },
  {
    price: 55444,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T17:13:00.000Z",
        stops: ["SHA", "IST", "AUH"],
        duration: 1852,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T16:17:00.000Z",
        stops: ["IST"],
        duration: 1054,
      },
    ],
  },
  {
    price: 21737,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T03:40:00.000Z",
        stops: ["KUL"],
        duration: 1867,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T03:03:00.000Z",
        stops: [],
        duration: 1685,
      },
    ],
  },
  {
    price: 63674,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T17:14:00.000Z",
        stops: ["SIN"],
        duration: 931,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T15:33:00.000Z",
        stops: ["KUL", "SHA"],
        duration: 1219,
      },
    ],
  },
  {
    price: 28556,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T07:45:00.000Z",
        stops: ["KUL", "SHA"],
        duration: 1526,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T16:32:00.000Z",
        stops: ["SIN", "KUL"],
        duration: 932,
      },
    ],
  },
  {
    price: 47971,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T02:31:00.000Z",
        stops: [],
        duration: 1986,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T15:48:00.000Z",
        stops: ["SHA"],
        duration: 1424,
      },
    ],
  },
  {
    price: 30408,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T08:42:00.000Z",
        stops: [],
        duration: 1529,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T13:56:00.000Z",
        stops: [],
        duration: 1667,
      },
    ],
  },
  {
    price: 22371,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T23:02:00.000Z",
        stops: ["SHA", "IST", "BKK"],
        duration: 1767,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T05:54:00.000Z",
        stops: ["DXB", "KUL", "AUH"],
        duration: 1777,
      },
    ],
  },
  {
    price: 76833,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T17:04:00.000Z",
        stops: ["IST", "SHA", "KUL"],
        duration: 1688,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T09:46:00.000Z",
        stops: ["IST"],
        duration: 1230,
      },
    ],
  },
  {
    price: 81515,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T01:58:00.000Z",
        stops: ["HKG", "BKK"],
        duration: 1371,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T09:01:00.000Z",
        stops: [],
        duration: 1840,
      },
    ],
  },
  {
    price: 17499,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T22:44:00.000Z",
        stops: ["DXB", "AUH", "KUL"],
        duration: 1088,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T16:49:00.000Z",
        stops: ["HKG"],
        duration: 744,
      },
    ],
  },
  {
    price: 38451,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T07:52:00.000Z",
        stops: ["DXB"],
        duration: 1151,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T13:50:00.000Z",
        stops: [],
        duration: 1276,
      },
    ],
  },
  {
    price: 83799,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T11:08:00.000Z",
        stops: ["IST", "BKK", "KUL"],
        duration: 1353,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T07:44:00.000Z",
        stops: ["SHA"],
        duration: 1007,
      },
    ],
  },
  {
    price: 78803,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T06:38:00.000Z",
        stops: ["KUL"],
        duration: 657,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T22:38:00.000Z",
        stops: ["SHA", "BKK", "AUH"],
        duration: 1978,
      },
    ],
  },
  {
    price: 68255,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T02:08:00.000Z",
        stops: ["DXB"],
        duration: 1251,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T08:30:00.000Z",
        stops: ["SIN", "AUH", "SHA"],
        duration: 1178,
      },
    ],
  },
  {
    price: 68153,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T07:52:00.000Z",
        stops: ["IST", "HKG", "SIN"],
        duration: 779,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T08:10:00.000Z",
        stops: ["DXB", "AUH", "HKG"],
        duration: 1637,
      },
    ],
  },
  {
    price: 40057,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T12:49:00.000Z",
        stops: ["KUL"],
        duration: 1454,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T05:01:00.000Z",
        stops: ["IST"],
        duration: 1056,
      },
    ],
  },
  {
    price: 51908,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T05:45:00.000Z",
        stops: [],
        duration: 1862,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T12:11:00.000Z",
        stops: [],
        duration: 940,
      },
    ],
  },
  {
    price: 61125,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T09:59:00.000Z",
        stops: ["SIN"],
        duration: 1977,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T05:58:00.000Z",
        stops: ["SHA", "AUH"],
        duration: 1413,
      },
    ],
  },
  {
    price: 91279,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T07:02:00.000Z",
        stops: [],
        duration: 663,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T07:01:00.000Z",
        stops: ["IST", "SHA"],
        duration: 1683,
      },
    ],
  },
  {
    price: 23324,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T14:42:00.000Z",
        stops: ["DXB"],
        duration: 644,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T17:39:00.000Z",
        stops: ["SHA", "DXB", "IST"],
        duration: 1291,
      },
    ],
  },
  {
    price: 35134,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T03:14:00.000Z",
        stops: [],
        duration: 1615,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T14:35:00.000Z",
        stops: [],
        duration: 1296,
      },
    ],
  },
  {
    price: 51086,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T09:31:00.000Z",
        stops: ["SIN", "KUL"],
        duration: 750,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T05:39:00.000Z",
        stops: ["DXB"],
        duration: 841,
      },
    ],
  },
  {
    price: 32474,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T04:23:00.000Z",
        stops: ["BKK", "HKG", "IST"],
        duration: 1709,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T14:37:00.000Z",
        stops: ["KUL", "DXB"],
        duration: 809,
      },
    ],
  },
  {
    price: 30869,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T21:07:00.000Z",
        stops: ["SHA"],
        duration: 1966,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T03:13:00.000Z",
        stops: ["DXB", "AUH"],
        duration: 1962,
      },
    ],
  },
  {
    price: 88639,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T16:29:00.000Z",
        stops: ["SHA", "IST", "HKG"],
        duration: 1206,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T23:30:00.000Z",
        stops: ["KUL"],
        duration: 1040,
      },
    ],
  },
  {
    price: 38278,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T17:05:00.000Z",
        stops: [],
        duration: 1362,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T21:33:00.000Z",
        stops: ["BKK", "KUL", "AUH"],
        duration: 1914,
      },
    ],
  },
  {
    price: 22094,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T17:31:00.000Z",
        stops: ["HKG", "IST"],
        duration: 987,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T10:02:00.000Z",
        stops: ["DXB"],
        duration: 1617,
      },
    ],
  },
  {
    price: 77539,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T03:47:00.000Z",
        stops: ["SHA", "SIN", "AUH"],
        duration: 1430,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T13:24:00.000Z",
        stops: [],
        duration: 890,
      },
    ],
  },
  {
    price: 80474,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T11:14:00.000Z",
        stops: ["BKK", "AUH", "DXB"],
        duration: 1993,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T16:27:00.000Z",
        stops: ["AUH", "DXB"],
        duration: 645,
      },
    ],
  },
  {
    price: 99519,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T04:04:00.000Z",
        stops: ["DXB", "SHA"],
        duration: 1488,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T00:26:00.000Z",
        stops: [],
        duration: 665,
      },
    ],
  },
  {
    price: 63343,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T15:25:00.000Z",
        stops: ["AUH", "SIN"],
        duration: 1584,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T09:32:00.000Z",
        stops: ["KUL"],
        duration: 1387,
      },
    ],
  },
  {
    price: 16365,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T07:19:00.000Z",
        stops: [],
        duration: 992,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T10:58:00.000Z",
        stops: [],
        duration: 1159,
      },
    ],
  },
  {
    price: 93199,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T10:46:00.000Z",
        stops: [],
        duration: 1839,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T05:08:00.000Z",
        stops: ["IST", "AUH", "BKK"],
        duration: 1432,
      },
    ],
  },
  {
    price: 24364,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T04:08:00.000Z",
        stops: ["SHA"],
        duration: 1427,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T22:05:00.000Z",
        stops: [],
        duration: 1259,
      },
    ],
  },
  {
    price: 72209,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T23:08:00.000Z",
        stops: ["AUH"],
        duration: 1539,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T22:21:00.000Z",
        stops: [],
        duration: 1890,
      },
    ],
  },
  {
    price: 19624,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T10:17:00.000Z",
        stops: ["SHA", "HKG"],
        duration: 1215,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T09:40:00.000Z",
        stops: ["AUH", "HKG", "IST"],
        duration: 1844,
      },
    ],
  },
  {
    price: 43563,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T10:41:00.000Z",
        stops: [],
        duration: 1438,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T21:00:00.000Z",
        stops: ["DXB", "AUH"],
        duration: 1880,
      },
    ],
  },
  {
    price: 93707,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T03:03:00.000Z",
        stops: ["IST", "BKK"],
        duration: 963,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T04:38:00.000Z",
        stops: ["BKK", "AUH"],
        duration: 1034,
      },
    ],
  },
  {
    price: 15267,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T21:46:00.000Z",
        stops: ["KUL"],
        duration: 1255,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T09:40:00.000Z",
        stops: ["BKK", "SIN"],
        duration: 800,
      },
    ],
  },
  {
    price: 61967,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T23:05:00.000Z",
        stops: ["IST", "SHA", "BKK"],
        duration: 1274,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T16:41:00.000Z",
        stops: ["SIN"],
        duration: 1041,
      },
    ],
  },
  {
    price: 76537,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T14:10:00.000Z",
        stops: [],
        duration: 1916,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T14:31:00.000Z",
        stops: ["AUH", "HKG"],
        duration: 1879,
      },
    ],
  },
  {
    price: 37092,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T04:39:00.000Z",
        stops: ["AUH"],
        duration: 1178,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T07:24:00.000Z",
        stops: ["BKK"],
        duration: 1847,
      },
    ],
  },
  {
    price: 40299,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T10:54:00.000Z",
        stops: ["BKK"],
        duration: 1672,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T10:34:00.000Z",
        stops: [],
        duration: 1252,
      },
    ],
  },
  {
    price: 51114,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T09:56:00.000Z",
        stops: [],
        duration: 919,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T06:52:00.000Z",
        stops: [],
        duration: 810,
      },
    ],
  },
  {
    price: 15729,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T22:09:00.000Z",
        stops: ["SIN", "HKG", "KUL"],
        duration: 1286,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T21:14:00.000Z",
        stops: [],
        duration: 892,
      },
    ],
  },
  {
    price: 54773,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T17:47:00.000Z",
        stops: ["BKK"],
        duration: 1390,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T06:27:00.000Z",
        stops: ["DXB"],
        duration: 1458,
      },
    ],
  },
  {
    price: 89380,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T22:10:00.000Z",
        stops: ["DXB", "KUL", "SHA"],
        duration: 1207,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T03:41:00.000Z",
        stops: ["KUL"],
        duration: 1440,
      },
    ],
  },
  {
    price: 95858,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T03:55:00.000Z",
        stops: ["IST"],
        duration: 903,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T12:46:00.000Z",
        stops: ["HKG"],
        duration: 1830,
      },
    ],
  },
  {
    price: 59107,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T09:28:00.000Z",
        stops: ["BKK"],
        duration: 1914,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T10:24:00.000Z",
        stops: ["DXB", "AUH"],
        duration: 1695,
      },
    ],
  },
  {
    price: 66238,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T07:09:00.000Z",
        stops: [],
        duration: 1559,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T01:46:00.000Z",
        stops: ["SIN", "AUH", "DXB"],
        duration: 720,
      },
    ],
  },
  {
    price: 74515,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T01:54:00.000Z",
        stops: ["KUL"],
        duration: 601,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T04:26:00.000Z",
        stops: [],
        duration: 1444,
      },
    ],
  },
  {
    price: 47674,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T02:47:00.000Z",
        stops: ["IST", "SHA", "DXB"],
        duration: 868,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T10:39:00.000Z",
        stops: ["BKK", "KUL"],
        duration: 1105,
      },
    ],
  },
  {
    price: 28994,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T16:15:00.000Z",
        stops: [],
        duration: 788,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T17:22:00.000Z",
        stops: ["IST", "SIN", "SHA"],
        duration: 1074,
      },
    ],
  },
  {
    price: 95119,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T13:55:00.000Z",
        stops: ["BKK", "HKG", "SHA"],
        duration: 1823,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T17:03:00.000Z",
        stops: ["KUL", "IST", "DXB"],
        duration: 1895,
      },
    ],
  },
  {
    price: 94125,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T05:02:00.000Z",
        stops: ["DXB"],
        duration: 1644,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T04:37:00.000Z",
        stops: ["HKG"],
        duration: 1066,
      },
    ],
  },
  {
    price: 68925,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T04:45:00.000Z",
        stops: [],
        duration: 1783,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T03:22:00.000Z",
        stops: ["HKG", "BKK"],
        duration: 1598,
      },
    ],
  },
  {
    price: 60008,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T04:56:00.000Z",
        stops: [],
        duration: 1663,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T17:37:00.000Z",
        stops: ["BKK", "SIN", "KUL"],
        duration: 829,
      },
    ],
  },
  {
    price: 52603,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T16:21:00.000Z",
        stops: ["IST", "HKG", "DXB"],
        duration: 816,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T06:00:00.000Z",
        stops: ["SHA"],
        duration: 786,
      },
    ],
  },
  {
    price: 25001,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T03:10:00.000Z",
        stops: ["IST"],
        duration: 1629,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T03:01:00.000Z",
        stops: ["SHA", "AUH"],
        duration: 1157,
      },
    ],
  },
  {
    price: 19553,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T17:17:00.000Z",
        stops: [],
        duration: 940,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T02:41:00.000Z",
        stops: ["BKK"],
        duration: 1596,
      },
    ],
  },
  {
    price: 96819,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T16:51:00.000Z",
        stops: ["HKG", "SIN", "IST"],
        duration: 894,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T17:15:00.000Z",
        stops: ["AUH"],
        duration: 1535,
      },
    ],
  },
  {
    price: 43609,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T02:10:00.000Z",
        stops: [],
        duration: 1571,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T14:55:00.000Z",
        stops: [],
        duration: 1278,
      },
    ],
  },
  {
    price: 83610,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T00:09:00.000Z",
        stops: ["KUL"],
        duration: 1355,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T14:36:00.000Z",
        stops: ["BKK", "HKG"],
        duration: 1069,
      },
    ],
  },
  {
    price: 83238,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T22:29:00.000Z",
        stops: [],
        duration: 706,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T23:29:00.000Z",
        stops: ["AUH", "BKK"],
        duration: 1412,
      },
    ],
  },
  {
    price: 80456,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T05:20:00.000Z",
        stops: [],
        duration: 1694,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T00:24:00.000Z",
        stops: ["SHA", "KUL"],
        duration: 1400,
      },
    ],
  },
  {
    price: 17747,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T02:04:00.000Z",
        stops: ["DXB", "AUH", "SIN"],
        duration: 1698,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T22:13:00.000Z",
        stops: ["HKG", "SIN"],
        duration: 1592,
      },
    ],
  },
  {
    price: 73851,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T21:31:00.000Z",
        stops: ["SHA"],
        duration: 765,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T22:23:00.000Z",
        stops: ["SIN", "SHA", "IST"],
        duration: 1154,
      },
    ],
  },
  {
    price: 67505,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T03:34:00.000Z",
        stops: ["HKG", "SHA", "BKK"],
        duration: 1094,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T07:42:00.000Z",
        stops: ["DXB", "KUL"],
        duration: 1436,
      },
    ],
  },
  {
    price: 62995,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T00:28:00.000Z",
        stops: ["SHA", "SIN"],
        duration: 652,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T05:36:00.000Z",
        stops: [],
        duration: 1843,
      },
    ],
  },
  {
    price: 60763,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T13:08:00.000Z",
        stops: ["HKG", "AUH"],
        duration: 1524,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T04:44:00.000Z",
        stops: ["BKK", "HKG", "DXB"],
        duration: 848,
      },
    ],
  },
  {
    price: 45039,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T04:53:00.000Z",
        stops: [],
        duration: 1134,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T15:27:00.000Z",
        stops: ["HKG", "KUL"],
        duration: 1602,
      },
    ],
  },
  {
    price: 17842,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T13:34:00.000Z",
        stops: [],
        duration: 1080,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T22:03:00.000Z",
        stops: ["DXB"],
        duration: 880,
      },
    ],
  },
  {
    price: 64739,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T22:10:00.000Z",
        stops: ["SHA"],
        duration: 845,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T10:46:00.000Z",
        stops: [],
        duration: 1611,
      },
    ],
  },
  {
    price: 76702,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T01:25:00.000Z",
        stops: ["IST"],
        duration: 1909,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T04:12:00.000Z",
        stops: ["HKG"],
        duration: 1264,
      },
    ],
  },
  {
    price: 63704,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T09:41:00.000Z",
        stops: ["BKK", "SHA", "AUH"],
        duration: 1854,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T06:05:00.000Z",
        stops: ["SIN", "DXB"],
        duration: 1137,
      },
    ],
  },
  {
    price: 24962,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T04:11:00.000Z",
        stops: ["BKK"],
        duration: 1628,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T23:32:00.000Z",
        stops: [],
        duration: 832,
      },
    ],
  },
  {
    price: 21815,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T07:40:00.000Z",
        stops: ["AUH", "SIN"],
        duration: 1151,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T17:37:00.000Z",
        stops: [],
        duration: 1961,
      },
    ],
  },
  {
    price: 25147,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T06:43:00.000Z",
        stops: ["HKG", "KUL"],
        duration: 836,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T11:35:00.000Z",
        stops: ["SHA", "AUH"],
        duration: 1233,
      },
    ],
  },
  {
    price: 55729,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T01:34:00.000Z",
        stops: ["SHA", "AUH", "DXB"],
        duration: 1195,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T01:47:00.000Z",
        stops: [],
        duration: 1837,
      },
    ],
  },
  {
    price: 56097,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-21T21:01:00.000Z",
        stops: [],
        duration: 1438,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T06:47:00.000Z",
        stops: ["HKG"],
        duration: 896,
      },
    ],
  },
  {
    price: 33795,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T14:46:00.000Z",
        stops: ["KUL", "SIN"],
        duration: 1659,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T04:15:00.000Z",
        stops: [],
        duration: 974,
      },
    ],
  },
  {
    price: 21432,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T01:56:00.000Z",
        stops: ["AUH"],
        duration: 1806,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-10T22:51:00.000Z",
        stops: ["KUL"],
        duration: 1678,
      },
    ],
  },
  {
    price: 55548,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-10-22T10:05:00.000Z",
        stops: [],
        duration: 1077,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-11-11T16:15:00.000Z",
        stops: ["AUH"],
        duration: 1890,
      },
    ],
  },
];

const model = new Model();
model.setTickets(tickets);
const presenter = new Presenter(model);

const bodyElement = document.querySelector("body");

render(new HeaderView(), bodyElement);
render(new MainView(), bodyElement);

const mainElement = bodyElement.querySelector(".main");

presenter.init(mainElement);

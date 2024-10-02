const simpul = require("../dist").default;
// console.log(simpul);

const series = [
  {
    datetime: 1715299200000,
    open: 41.15,
    high: 42.24,
    low: 40.515,
    close: 41.03,
    volume: 47048406,
  },
  {
    datetime: 1715558400000,
    open: 41.6,
    high: 42.07,
    low: 41.075,
    close: 41.27,
    volume: 30565381,
  },
  {
    datetime: 1715644800000,
    open: 41.18,
    high: 43.4385,
    low: 41.05,
    close: 43.21,
    volume: 41581512,
  },
  {
    datetime: 1715731200000,
    open: 44.67,
    high: 47.07,
    low: 43.99,
    close: 47,
    volume: 58063527,
  },
  {
    datetime: 1715817600000,
    open: 46.96,
    high: 48.0301,
    low: 46.21,
    close: 46.26,
    volume: 46325512,
  },
  {
    datetime: 1715904000000,
    open: 47.015,
    high: 47.38,
    low: 44.33,
    close: 45.4,
    volume: 40965762,
  },
  {
    datetime: 1716163200000,
    open: 45.96,
    high: 49.3,
    low: 45.81,
    close: 48.25,
    volume: 55103238,
  },
  {
    datetime: 1716249600000,
    open: 46.55,
    high: 48.19,
    low: 46.41,
    close: 47.98,
    volume: 36437199,
  },
  {
    datetime: 1716336000000,
    open: 49.25,
    high: 50,
    low: 48.1,
    close: 49.38,
    volume: 55487832,
  },
  {
    datetime: 1716422400000,
    open: 53.15,
    high: 53.2,
    low: 47.55,
    close: 48.81,
    volume: 81175938,
  },
  {
    datetime: 1716508800000,
    open: 50.02,
    high: 52.072,
    low: 49.35,
    close: 51.44,
    volume: 48477367,
  },
  {
    datetime: 1716854400000,
    open: 53.34,
    high: 54.89,
    low: 51.75,
    close: 54.04,
    volume: 50658367,
  },
  {
    datetime: 1716940800000,
    open: 51.15,
    high: 51.92,
    low: 50.65,
    close: 50.98,
    volume: 42965602,
  },
  {
    datetime: 1717027200000,
    open: 50.84,
    high: 51.34,
    low: 48.98,
    close: 50,
    volume: 38609191,
  },
  {
    datetime: 1717113600000,
    open: 50.3,
    high: 50.72,
    low: 44.38,
    close: 48.59,
    volume: 72522594,
  },
  {
    datetime: 1717372800000,
    open: 50.81,
    high: 50.93,
    low: 46.1201,
    close: 48.59,
    volume: 53127301,
  },
  {
    datetime: 1717459200000,
    open: 48.46,
    high: 48.65,
    low: 46.43,
    close: 47.59,
    volume: 46692539,
  },
  {
    datetime: 1717545600000,
    open: 50.03,
    high: 53.87,
    low: 49.565,
    close: 53.52,
    volume: 66560148,
  },
  {
    datetime: 1717632000000,
    open: 53.79,
    high: 53.79,
    low: 51.23,
    close: 52.51,
    volume: 43947641,
  },
  {
    datetime: 1717718400000,
    open: 52.228,
    high: 52.9,
    low: 50.81,
    close: 51.87,
    volume: 50248680,
  },
  {
    datetime: 1717977600000,
    open: 50.52,
    high: 54.58,
    low: 50.4203,
    close: 53.95,
    volume: 43860887,
  },
  {
    datetime: 1718064000000,
    open: 53.38,
    high: 54.48,
    low: 51.7,
    close: 54.17,
    volume: 37695738,
  },
  {
    datetime: 1718150400000,
    open: 57.245,
    high: 59.45,
    low: 56.81,
    close: 58.72,
    volume: 73759289,
  },
  {
    datetime: 1718236800000,
    open: 60.07,
    high: 61.49,
    low: 58.3,
    close: 60.86,
    volume: 45660672,
  },
  {
    datetime: 1718323200000,
    open: 58.95,
    high: 60.5499,
    low: 58.35,
    close: 60.1,
    volume: 39111980,
  },
  {
    datetime: 1718582400000,
    open: 61,
    high: 63.15,
    low: 58.95,
    close: 62.67,
    volume: 54196461,
  },
  {
    datetime: 1718668800000,
    open: 63.42,
    high: 66.19,
    low: 63.1,
    close: 65.24,
    volume: 47069129,
  },
  {
    datetime: 1718841600000,
    open: 65.52,
    high: 65.8255,
    low: 58.79,
    close: 60.02,
    volume: 60852930,
  },
  {
    datetime: 1718928000000,
    open: 58.42,
    high: 60.18,
    low: 56.03,
    close: 58.2,
    volume: 50355102,
  },
  {
    datetime: 1719187200000,
    open: 56.45,
    high: 57.49,
    low: 53.03,
    close: 53.22,
    volume: 54326352,
  },
  {
    datetime: 1719273600000,
    open: 54.23,
    high: 55.45,
    low: 52.35,
    close: 55.3,
    volume: 44272488,
  },
  {
    datetime: 1719360000000,
    open: 55.16,
    high: 56.22,
    low: 52.85,
    close: 54.78,
    volume: 41093441,
  },
  {
    datetime: 1719446400000,
    open: 54.33,
    high: 55.58,
    low: 52.82,
    close: 53.8,
    volume: 35417039,
  },
  {
    datetime: 1719532800000,
    open: 54.87,
    high: 58.581,
    low: 54.085,
    close: 55.36,
    volume: 55584641,
  },
  {
    datetime: 1719792000000,
    open: 55.36,
    high: 55.55,
    low: 52.25,
    close: 55.36,
    volume: 43334969,
  },
  {
    datetime: 1719878400000,
    open: 54.36,
    high: 57.75,
    low: 54.28,
    close: 57.6,
    volume: 45011672,
  },
  {
    datetime: 1719964800000,
    open: 58.1,
    high: 61.515,
    low: 57.18,
    close: 60.39,
    volume: 40242699,
  },
  {
    datetime: 1720137600000,
    open: 61.862,
    high: 62.38,
    low: 59.79,
    close: 60.81,
    volume: 38395406,
  },
  {
    datetime: 1720396800000,
    open: 62.26,
    high: 64.5,
    low: 62.2,
    close: 64.31,
    volume: 42861609,
  },
  {
    datetime: 1720483200000,
    open: 65.13,
    high: 66.145,
    low: 62.42,
    close: 64.25,
    volume: 41946648,
  },
  {
    datetime: 1720569600000,
    open: 65.89,
    high: 69,
    low: 65.0128,
    close: 68.59,
    volume: 48280848,
  },
  {
    datetime: 1720656000000,
    open: 70.01,
    high: 70.08,
    low: 61.22,
    close: 61.99,
    volume: 75368531,
  },
  {
    datetime: 1720742400000,
    open: 62.84,
    high: 67.3,
    low: 61.65,
    close: 63.94,
    volume: 51046398,
  },
  {
    datetime: 1721001600000,
    open: 64.945,
    high: 66.76,
    low: 63.0501,
    close: 64.14,
    volume: 48228688,
  },
  {
    datetime: 1721088000000,
    open: 65.02,
    high: 65.59,
    low: 62.23,
    close: 65.3,
    volume: 39846359,
  },
  {
    datetime: 1721174400000,
    open: 58.6,
    high: 59.3,
    low: 51.2223,
    close: 51.55,
    volume: 99429844,
  },
  {
    datetime: 1721260800000,
    open: 54.16,
    high: 54.17,
    low: 49.12,
    close: 51.66,
    volume: 94172562,
  },
  {
    datetime: 1721347200000,
    open: 51.78,
    high: 52.37,
    low: 46.75,
    close: 47,
    volume: 75969055,
  },
  {
    datetime: 1721606400000,
    open: 50.05,
    high: 52.95,
    low: 48.8124,
    close: 52.93,
    volume: 73675297,
  },
  {
    datetime: 1721692800000,
    open: 50.5,
    high: 52.0721,
    low: 50,
    close: 50.53,
    volume: 50181648,
  },
  {
    datetime: 1721779200000,
    open: 48.43,
    high: 48.79,
    low: 42.25,
    close: 42.9,
    volume: 90534805,
  },
  {
    datetime: 1721865600000,
    open: 41.51,
    high: 43.7,
    low: 37.39,
    close: 39.78,
    volume: 143325906,
  },
  {
    datetime: 1721952000000,
    open: 42.24,
    high: 43,
    low: 40.71,
    close: 41.92,
    volume: 82759211,
  },
  {
    datetime: 1722211200000,
    open: 43.365,
    high: 45,
    low: 41.26,
    close: 41.81,
    volume: 80788359,
  },
  {
    datetime: 1722297600000,
    open: 42.38,
    high: 42.67,
    low: 36.7801,
    close: 37.24,
    volume: 108596000,
  },
  {
    datetime: 1722384000000,
    open: 42.3,
    high: 44.76,
    low: 41.42,
    close: 44.39,
    volume: 96880492,
  },
  {
    datetime: 1722470400000,
    open: 42.05,
    high: 43.42,
    low: 33.42,
    close: 35,
    volume: 163864406,
  },
  {
    datetime: 1722556800000,
    open: 30.56,
    high: 31.59,
    low: 28.14,
    close: 29.34,
    volume: 198233906,
  },
  {
    datetime: 1722816000000,
    open: 23.52,
    high: 30.15,
    low: 23.5,
    close: 27.89,
    volume: 220042203,
  },
  {
    datetime: 1722902400000,
    open: 28.6,
    high: 30.8,
    low: 27.17,
    close: 28.58,
    volume: 137309500,
  },
  {
    datetime: 1722988800000,
    open: 31.32,
    high: 31.94,
    low: 25.94,
    close: 26.22,
    volume: 146256500,
  },
  {
    datetime: 1723075200000,
    open: 28.57,
    high: 31.595,
    low: 26.87,
    close: 31.46,
    volume: 149988609,
  },
  {
    datetime: 1723161600000,
    open: 30.71,
    high: 31.79,
    low: 29.58,
    close: 31.01,
    volume: 96949820,
  },
  {
    datetime: 1723420800000,
    open: 31.105,
    high: 32.59,
    low: 30.23,
    close: 31.41,
    volume: 89135109,
  },
  {
    datetime: 1723507200000,
    open: 32.66,
    high: 35.43,
    low: 32.185,
    close: 35.28,
    volume: 103380000,
  },
  {
    datetime: 1723593600000,
    open: 36.18,
    high: 36.64,
    low: 33.27,
    close: 35.05,
    volume: 112421602,
  },
  {
    datetime: 1723680000000,
    open: 37.35,
    high: 40.47,
    low: 36.86,
    close: 39.92,
    volume: 107522703,
  },
  {
    datetime: 1723766400000,
    open: 38.79,
    high: 40.2301,
    low: 38.07,
    close: 39.73,
    volume: 82364594,
  },
  {
    datetime: 1724025600000,
    open: 39.28,
    high: 41.75,
    low: 37.89,
    close: 41.6,
    volume: 77684156,
  },
  {
    datetime: 1724112000000,
    open: 41.05,
    high: 41.92,
    low: 39.1,
    close: 40.09,
    volume: 83644562,
  },
  {
    datetime: 1724198400000,
    open: 40.75,
    high: 42.36,
    low: 40.33,
    close: 41.73,
    volume: 83611469,
  },
  {
    datetime: 1724284800000,
    open: 42.51,
    high: 42.88,
    low: 37.11,
    close: 37.51,
    volume: 107889906,
  },
  {
    datetime: 1724371200000,
    open: 39.16,
    high: 41.21,
    low: 38.593,
    close: 40.4,
    volume: 87128062,
  },
  {
    datetime: 1724630400000,
    open: 39.75,
    high: 40.29,
    low: 36.91,
    close: 37.37,
    volume: 86602953,
  },
  {
    datetime: 1724716800000,
    open: 36.51,
    high: 38.9699,
    low: 35.52,
    close: 38.49,
    volume: 74033312,
  },
  {
    datetime: 1724803200000,
    open: 38.09,
    high: 38.86,
    low: 35.2905,
    close: 36.6,
    volume: 101998492,
  },
  {
    datetime: 1724889600000,
    open: 37.06,
    high: 38.93,
    low: 35.625,
    close: 36.19,
    volume: 97333242,
  },
  {
    datetime: 1724976000000,
    open: 38.68,
    high: 39.22,
    low: 37.06,
    close: 38.79,
    volume: 85280844,
  },
  {
    datetime: 1725321600000,
    open: 36.8,
    high: 36.8091,
    low: 29.4,
    close: 30.07,
    volume: 139418000,
  },
  {
    datetime: 1725408000000,
    open: 29.07,
    high: 31.69,
    low: 28.73,
    close: 30.3,
    volume: 108759906,
  },
  {
    datetime: 1725494400000,
    open: 29.05,
    high: 31.2002,
    low: 28.83,
    close: 29.75,
    volume: 100075906,
  },
  {
    datetime: 1725580800000,
    open: 29.11,
    high: 29.17,
    low: 25.5,
    close: 25.96,
    volume: 156147594,
  },
  {
    datetime: 1725840000000,
    open: 27.18,
    high: 27.7291,
    low: 26.15,
    close: 27.43,
    volume: 84474547,
  },
  {
    datetime: 1725926400000,
    open: 27.54,
    high: 28.39,
    low: 26.24,
    close: 28.35,
    volume: 81557453,
  },
  {
    datetime: 1726012800000,
    open: 28.89,
    high: 32.42,
    low: 27.08,
    close: 32.22,
    volume: 143140891,
  },
  {
    datetime: 1726099200000,
    open: 31.75,
    high: 32.69,
    low: 30.35,
    close: 31.81,
    volume: 99273289,
  },
  {
    datetime: 1726185600000,
    open: 32.52,
    high: 33.72,
    low: 32.36,
    close: 33.43,
    volume: 78147289,
  },
  {
    datetime: 1726444800000,
    open: 32.03,
    high: 32.64,
    low: 30.835,
    close: 32.16,
    volume: 79670078,
  },
  {
    datetime: 1726531200000,
    open: 33.31,
    high: 33.56,
    low: 31.36,
    close: 32.16,
    volume: 86913742,
  },
  {
    datetime: 1726617600000,
    open: 32.54,
    high: 34,
    low: 31.05,
    close: 31.14,
    volume: 113735508,
  },
  {
    datetime: 1726704000000,
    open: 34.68,
    high: 36.439,
    low: 33.88,
    close: 35.12,
    volume: 123984305,
  },
  {
    datetime: 1726790400000,
    open: 34.05,
    high: 34.4,
    low: 32.0401,
    close: 33.55,
    volume: 108589602,
  },
  {
    datetime: 1727049600000,
    open: 33.97,
    high: 34.38,
    low: 33.185,
    close: 33.92,
    volume: 59731609,
  },
  {
    datetime: 1727136000000,
    open: 34.84,
    high: 35.7,
    low: 33.58,
    close: 35.07,
    volume: 83369641,
  },
  {
    datetime: 1727222400000,
    open: 34.71,
    high: 36.46,
    low: 34.65,
    close: 35.74,
    volume: 73587508,
  },
  {
    datetime: 1727308800000,
    open: 40.2,
    high: 40.51,
    low: 36.71,
    close: 39.65,
    volume: 138171812,
  },
  {
    datetime: 1727395200000,
    open: 40,
    high: 40.01,
    low: 37.105,
    close: 37.66,
    volume: 85253523,
  },
  {
    datetime: 1727654400000,
    open: 36.25,
    high: 37.41,
    low: 35.0521,
    close: 36.68,
    volume: 74673961,
  },
  {
    datetime: 1727740800000,
    open: 36.59,
    high: 36.99,
    low: 32.745,
    close: 33.83,
    volume: 124928305,
  },
  {
    datetime: 1727827200000,
    open: 33.845,
    high: 34.38,
    low: 33.5,
    close: 33.8199,
    volume: 2718565,
  },
];
console.log(
  simpul.pricehistory(series, { volumefill: true, price: true, leverage: 2 }),
);

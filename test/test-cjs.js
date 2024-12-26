const simpul = require("../dist");
// console.log(simpul);

const timeseries = [
  {
    datetime: 1730851200000,
    open: 69441.6861932368,
    high: 76480.6540397814,
    low: 68913.9590189924,
    close: 76231.6115592825,
    volume: 0,
  },
  {
    datetime: 1730937600000,
    open: 76225.2760574596,
    high: 76951.8625976105,
    low: 74487.8562617765,
    close: 76618.0842914182,
    volume: 0,
  },
  {
    datetime: 1731024000000,
    open: 76612.8976511981,
    high: 77276.4999887487,
    low: 75554.3638123307,
    close: 76783.8569705439,
    volume: 0,
  },
  {
    datetime: 1731110400000,
    open: 76775.4871844444,
    high: 76821.2009729538,
    low: 75778.2157838795,
    close: 76329.7378443811,
    volume: 0,
  },
  {
    datetime: 1731196800000,
    open: 76329.8525544444,
    high: 81074.3359508147,
    low: 76270.6112347018,
    close: 79002.0776430006,
    volume: 0,
  },
  {
    datetime: 1731283200000,
    open: 79001.6433477027,
    high: 87491.2782106544,
    low: 78553.0562531795,
    close: 87115.4529775291,
    volume: 0,
  },
  {
    datetime: 1731369600000,
    open: 87105.4975834254,
    high: 89995.1211954152,
    low: 85156.7446657152,
    close: 89524.7882855463,
    volume: 0,
  },
  {
    datetime: 1731456000000,
    open: 89530.2873169176,
    high: 93445.2711611311,
    low: 86270.3472644691,
    close: 89801.055973685,
    volume: 0,
  },
  {
    datetime: 1731542400000,
    open: 89800.5536999442,
    high: 91772.5651176681,
    low: 87563.024094962,
    close: 87565.3966948591,
    volume: 0,
  },
  {
    datetime: 1731628800000,
    open: 87568.3113495589,
    high: 91486.9102759462,
    low: 86705.9353759732,
    close: 91486.6453511068,
    volume: 0,
  },
  {
    datetime: 1731715200000,
    open: 91487.2313486963,
    high: 91881.4220979535,
    low: 90117.2477340773,
    close: 90798.757448995,
    volume: 0,
  },
  {
    datetime: 1731801600000,
    open: 90798.6699920427,
    high: 91427.8784036318,
    low: 89432.4055382215,
    close: 89636.0508775402,
    volume: 0,
  },
  {
    datetime: 1731888000000,
    open: 89636.1669018107,
    high: 92593.7642034397,
    low: 88743.494668383,
    close: 91574.4543667591,
    volume: 0,
  },
  {
    datetime: 1731974400000,
    open: 91573.4523052289,
    high: 94038.9724523198,
    low: 90323.299322405,
    close: 92607.1976780333,
    volume: 0,
  },
  {
    datetime: 1732060800000,
    open: 92601.4749646813,
    high: 94962.8132806562,
    low: 91516.578346755,
    close: 94378.5549437,
    volume: 0,
  },
  {
    datetime: 1732147200000,
    open: 94376.9870274216,
    high: 99027.6371380821,
    low: 93884.9983246309,
    close: 98333.9519708271,
    volume: 0,
  },
  {
    datetime: 1732233600000,
    open: 98326.3122537641,
    high: 99767.9901827564,
    low: 97228.9925102344,
    close: 99290.6744423264,
    volume: 0,
  },
  {
    datetime: 1732320000000,
    open: 99291.82991342,
    high: 99488.5257072902,
    low: 97255.9004668602,
    close: 97828.1279157422,
    volume: 0,
  },
  {
    datetime: 1732406400000,
    open: 97828.1326418172,
    high: 98656.8431458581,
    low: 95794.8153389831,
    close: 96883.8123851188,
    volume: 0,
  },
  {
    datetime: 1732492800000,
    open: 96883.9230017027,
    high: 98965.901143719,
    low: 94491.0452643836,
    close: 94855.6753301489,
    volume: 0,
  },
  {
    datetime: 1732579200000,
    open: 94858.8031880145,
    high: 95133.7195617523,
    low: 90754.5096132501,
    close: 90982.0804724609,
    volume: 0,
  },
  {
    datetime: 1732665600000,
    open: 90980.9647781797,
    high: 97365.6124480537,
    low: 90783.718996713,
    close: 96626.4286443697,
    volume: 0,
  },
  {
    datetime: 1732752000000,
    open: 96624.712567147,
    high: 96712.451068925,
    low: 94687.9461731537,
    close: 94824.8507274708,
    volume: 0,
  },
  {
    datetime: 1732838400000,
    open: 94824.5288468562,
    high: 98728.6386954591,
    low: 94824.5288468562,
    close: 97416.0446820428,
    volume: 0,
  },
  {
    datetime: 1732924800000,
    open: 97416.2425039469,
    high: 97556.5264874237,
    low: 96152.2864275519,
    close: 97030.2529698795,
    volume: 0,
  },
  {
    datetime: 1733011200000,
    open: 97029.9494473977,
    high: 97567.4510970653,
    low: 95767.5189793752,
    close: 97136.8755680008,
    volume: 0,
  },
  {
    datetime: 1733097600000,
    open: 97136.8515816063,
    high: 98187.0115671393,
    low: 94490.7955304558,
    close: 95672.8489260514,
    volume: 0,
  },
  {
    datetime: 1733184000000,
    open: 95674.6170416553,
    high: 96280.624848604,
    low: 93609.3759321226,
    close: 95674.363109194,
    volume: 0,
  },
  {
    datetime: 1733270400000,
    open: 95672.4699561545,
    high: 99219.2959322356,
    low: 94679.3120559094,
    close: 98972.0909811477,
    volume: 0,
  },
  {
    datetime: 1733356800000,
    open: 98975.2831446959,
    high: 103852.709050345,
    low: 97657.7275708981,
    close: 99137.3404555062,
    volume: 0,
  },
  {
    datetime: 1733443200000,
    open: 99137.0324867884,
    high: 102085.369727266,
    low: 92251.212903117,
    close: 101581.16105918,
    volume: 0,
  },
  {
    datetime: 1733529600000,
    open: 101581.884352982,
    high: 101615.13442306,
    low: 99096.2940196077,
    close: 100381.92651989,
    volume: 0,
  },
  {
    datetime: 1733616000000,
    open: 100382.038179131,
    high: 100529.840023357,
    low: 98766.9950674342,
    close: 99864.0035171826,
    volume: 0,
  },
  {
    datetime: 1733702400000,
    open: 99864.0324960517,
    high: 101399.246970334,
    low: 96127.6835781746,
    close: 96187.3168098634,
    volume: 0,
  },
  {
    datetime: 1733788800000,
    open: 96189.2719911041,
    high: 98278.075886935,
    low: 94334.1804218605,
    close: 96504.6820495224,
    volume: 0,
  },
  {
    datetime: 1733875200000,
    open: 96505.5352849444,
    high: 101794.969431437,
    low: 95746.7792013678,
    close: 101432.838341337,
    volume: 0,
  },
  {
    datetime: 1733961600000,
    open: 101427.159370555,
    high: 102554.453398098,
    low: 99334.6234501523,
    close: 99959.7218558629,
    volume: 0,
  },
  {
    datetime: 1734048000000,
    open: 99969.9598160169,
    high: 101908.951943557,
    low: 99245.5617924073,
    close: 101708.5554104,
    volume: 0,
  },
  {
    datetime: 1734134400000,
    open: 101709.320854025,
    high: 102639.517247279,
    low: 100623.895518302,
    close: 100728.445470106,
    volume: 0,
  },
  {
    datetime: 1734220800000,
    open: 100729.223378689,
    high: 103382.674852158,
    low: 100729.223378689,
    close: 103114.256814592,
    volume: 0,
  },
  {
    datetime: 1734307200000,
    open: 103114.572376968,
    high: 107812.036712919,
    low: 102623.047622902,
    close: 105883.45390022,
    volume: 0,
  },
  {
    datetime: 1734393600000,
    open: 105877.37165861,
    high: 108308.552251127,
    low: 105519.767099194,
    close: 106734.512455154,
    volume: 0,
  },
  {
    datetime: 1734480000000,
    open: 106734.06814586,
    high: 106784.504531522,
    low: 100231.066196196,
    close: 100636.004692168,
    volume: 0,
  },
  {
    datetime: 1734566400000,
    open: 100647.941125542,
    high: 102733.548988637,
    low: 95585.2240752497,
    close: 96274.273340042,
    volume: 0,
  },
  {
    datetime: 1734652800000,
    open: 96273.2489086174,
    high: 98295.0156447752,
    low: 92174.6048864309,
    close: 96377.741245281,
    volume: 0,
  },
  {
    datetime: 1734739200000,
    open: 96375.9373423656,
    high: 99492.944657117,
    low: 95397.1653349602,
    close: 97413.439196844,
    volume: 0,
  },
  {
    datetime: 1734825600000,
    open: 97413.4934183041,
    high: 97522.7004891722,
    low: 94338.960378283,
    close: 95491.9474072501,
    volume: 0,
  },
  {
    datetime: 1734912000000,
    open: 95491.9894965071,
    high: 96398.8299775263,
    low: 92402.7649689501,
    close: 93032.9108396839,
    volume: 0,
  },
  {
    datetime: 1734998400000,
    open: 93028.8064664251,
    high: 99419.252719655,
    low: 93026.0638439989,
    close: 97242.3472372796,
    volume: 0,
  },
  {
    datetime: 1735084800000,
    open: 97238.7108143914,
    high: 99243.6447024716,
    low: 97223.8351939865,
    close: 98129.2925771717,
    volume: 0,
  },
];

simpul
  .pricehistory(timeseries, { candlestick: true })
  .candles.forEach((c) =>
    console.log({ date: c.dateString, patterns: c.patterns }),
  );

// TODO: rating

/*
 *
 * --> DATA / PROCESSING
 *
 */

// const pricehistory = simpul.pricehistory(data.series, {
//   volumefill: true,
//   basePrice: data.basePrice,
//   ...option,
//   ...(option.rating === true
//     ? {
//         sma: true,
//         color: true,
//         periods: [...new Set([...(option.periods || []), 5, 10, 20, 50])],
//         scales: [
//           ...new Set([...(option.scales || []), "sma20Signal", "sma50Signal"]),
//         ],
//       }
//     : {}),
// });

/*
 *
 * --> DATA / SERIES / RATING
 *
 */

// if (option.rating === true) {
//   for (let i = 0; i < data.series.length; i++) {
//     const values = [
//       data.series[i].sma5ColorVolumeGreen,
//       data.series[i].sma10ColorsGreen,
//     ];
//     const signal = ["year10", "year20", "year50"].includes(timeframe)
//       ? data.series[i].sma20SignalScale
//       : data.series[i].sma50SignalScale;
//     values.push(signal);
//     data.series[i].rating = values.filter(simpul.isNumber);
//     data.series[i].rating = simpul.math.mean(data.series[i].rating);
//     if (data.series[i].rating > data.series[i - 1]?.rating) {
//       data.series[i].ratingTrend = "up";
//     } else if (data.series[i].rating < data.series[i - 1]?.rating) {
//       data.series[i].ratingTrend = "down";
//     }
//   }
// }

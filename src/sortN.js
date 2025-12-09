// dynamic inputs:
// sortN("prop1", { name: "prop1", reverse: true }) {}

// function applySort(rows) {
//   const smas = rows.map((i) => {
//     return simpul.stringnumber(i.sma.split(" ")[1]);
//   });
//   const changes = rows.map((i) => {
//     return Math.abs(simpul.stringnumber(i.sma.split(" ")[2]));
//   });
//   const smaMin = Math.min(...smas);
//   const smaMax = Math.max(...smas);
//   const chaMin = Math.min(...changes);
//   const chaMax = Math.max(...changes);
//   return rows.sort((a, b) => {
//     const smaA = simpul.stringnumber(a.sma.split(" ")[1]);
//     const smaB = simpul.stringnumber(b.sma.split(" ")[1]);
//     const chaA = Math.abs(simpul.stringnumber(a.sma.split(" ")[2]));
//     const chaB = Math.abs(simpul.stringnumber(b.sma.split(" ")[2]));
//     const normSmaA = (smaA - smaMin) / (smaMax - smaMin);
//     const normSmaB = (smaB - smaMin) / (smaMax - smaMin);
//     const normChaA = (chaA - chaMin) / (chaMax - chaMin);
//     const normChaB = (chaB - chaMin) / (chaMax - chaMin);
//     const scoreA = simpul.math.mean([normSmaA, normChaA]);
//     const scoreB = simpul.math.mean([normSmaB, normChaB]);
//     return scoreB - scoreA;
//   });
// }

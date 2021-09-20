// const pattern = [2, 4, 6, 7];

// const next = 20;

// const use = "median"; // ** "median" ** || "mean" || "mode"

// for (let i = 1; i < next + 1; i++) {
//   let moves = [];

//   for (let j = pattern.length - 1; j >= 0; j--) {
//     for (let k = j - 1; k >= 0; k--) {
//       moves.push({
//         index_diff: Math.abs(j - k),
//         value_diff: pattern[j] - pattern[k],
//       });
//     }
//   }

//   moves = moves.reduce((a, m) => {
//     let pattern_value = pattern[pattern.length - m.index_diff];
//     let prediction = pattern_value + m.value_diff;
//     return [...a, prediction];
//   }, []);

//   let nextValue = parseFloat(math[use](moves).toFixed(2));

//   pattern.push(nextValue);
// }

// console.log(pattern);

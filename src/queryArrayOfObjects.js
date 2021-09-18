// const option = {
//   filter: {
//     stocktwits_trending_score: {
//       exists: true,
//     },
//     country: {
//       match: "USA",
//     },
//     // tier: {
//     //   match: "pink no information",
//     // },
//     price: {
//       min: 0.0001,
//     },
//     vol: {
//       min: 1000,
//     },
//   },
//   sort: {
//     secondary: "stocktwits_trending_score",
//     primary: "vol_approx_value",
//     reverse: true,
//   },
// };

// function queryArrayObjects(array, option) {
//   if (option) {
//   } else return array;
//   // try {
//   //   const rows = jsontxt.read({ filename: "json_stocktwits_091620210942" });
//   //   const filteredRows = [];
//   //   const filterKeys = Object.keys(option.filter);
//   //   for (let i = 0; i < rows.length; i++) {
//   //     let row = rows[i];
//   //     row.vol_approx_value = row.vol && row.price && row.vol * row.price;
//   //     let condition;
//   //     if (!filterKeys.length) {
//   //       let primarySort = option.sort && option.sort.primary;
//   //       condition = primarySort ? Boolean(row[primarySort]) : true;
//   //     } else {
//   //       for (let j = 0; j < filterKeys.length; j++) {
//   //         let filterKey = filterKeys[j];
//   //         let filterSetting = option.filter[filterKey];
//   //         let filterSettingKeys = Object.keys(filterSetting);
//   //         for (let k = 0; k < filterSettingKeys.length; k++) {
//   //           if (condition !== false) {
//   //             let filterSettingKey = filterSettingKeys[k];
//   //             let rowValue = row[filterKey];
//   //             let filterSettingValue = filterSetting[filterSettingKey];
//   //             if (filterSettingKey === "exists") {
//   //               condition =
//   //                 typeof rowValue === "number" ||
//   //                 typeof rowValue === "boolean" ||
//   //                 Boolean(rowValue);
//   //             } else if (filterSettingKey === "match") {
//   //               condition =
//   //                 typeof rowValue === "string" &&
//   //                 rowValue.toLowerCase() === filterSettingValue.toLowerCase();
//   //             } else if (filterSettingKey === "min") {
//   //               condition =
//   //                 typeof rowValue === "number" &&
//   //                 rowValue >= filterSettingValue;
//   //             } else if (filterSettingKey === "max") {
//   //               condition =
//   //                 typeof rowValue === "number" &&
//   //                 rowValue <= filterSettingValue;
//   //             }
//   //           }
//   //         }
//   //       }
//   //     }
//   //     if (condition === true) filteredRows.push(row);
//   //   }
//   //   if (option.sort) {
//   //     const { primary, secondary, reverse } = option.sort;
//   //     if (primary)
//   //       filteredRows.sort(
//   //         (a, b) => a[primary] - b[primary] || a[secondary] - b[secondary]
//   //       );
//   //     if (reverse) filteredRows.reverse();
//   //   }
//   //   console.log({
//   //     results: filteredRows.slice(0, 5),
//   //     total: filteredRows.length,
//   //   });
//   // } catch (error) {
//   //   console.error("\n\n" + error.toString() + "\n\n");
//   // }
// }

// module.exports = queryArrayObjects;

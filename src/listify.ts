import validate from "./validate";

function listify(input: any, delimiter = ","): string[] {
  if (validate.isString(input)) {
    return input
      .split(delimiter)
      .map((i) => i.trim())
      .filter(Boolean);
  }

  return [];
}

export default listify;

// function parseList(...values) {
//   const list = [];

//   for (const value of values) {
//     if (typeof value === "string") {
//       list.push(...value.split(","));
//     } else if (Array.isArray(value)) {
//       list.push(...value);
//     }
//   }

//   return list;
// }

// module.exports = parseList;

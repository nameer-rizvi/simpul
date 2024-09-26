function decode(jwt: string): string {
  return "";
}

export default { decode };

// function decode(jwt) {
//   if (typeof jwt !== "string") return;

//   try {
//     const token = jwt.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
//     const decodedString = atob(token)
//       .split("")
//       .map((c) => `%${("00" + c.charCodeAt(0).toString(16)).slice(-2)}`)
//       .join("");

//     return decodeURIComponent(decodedString);
//   } catch {
//     return;
//   }
// }

// function decodeJSON(jwt) {
//   try {
//     return JSON.parse(decode(jwt));
//   } catch {
//     return;
//   }
// }

// module.exports = { decode, decodeJSON };

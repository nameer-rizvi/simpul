function decode(jwt: string): string | undefined {
  if (typeof jwt !== "string") return;

  const token = jwt.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");

  const decodedSplit = atob(token).split("");

  const decodedJoined = decodedSplit
    .map((c) => `%${("00" + c.charCodeAt(0).toString(16)).slice(-2)}`)
    .join("");

  const decoded = decodeURIComponent(decodedJoined);

  return decoded;
}

function decodeJSON(jwt: string): any {
  try {
    return JSON.parse(decode(jwt) || "");
  } catch {
    return;
  }
}

export default { decode, decodeJSON };

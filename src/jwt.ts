function decode(jwt: string): string | undefined {
  if (typeof jwt !== "string") return;

  try {
    const token = jwt.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");

    const decodedString = atob(token);

    const decodedArray = Array.from(decodedString).map((c) => {
      return `%${("00" + c.charCodeAt(0).toString(16)).slice(-2)}`;
    });

    const decoded = decodeURIComponent(decodedArray.join(""));

    return decoded;
  } catch {
    return;
  }
}

function decodeJSON(jwt: string): unknown {
  const decoded = decode(jwt);

  if (!decoded) return;

  try {
    return JSON.parse(decoded);
  } catch {
    return;
  }
}

export default { decode, decodeJSON };

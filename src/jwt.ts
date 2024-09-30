function decode(jwt: string): string | undefined {
  if (typeof jwt !== "string") return;

  try {
    const token = jwt.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");

    const array = Array.from(atob(token)).map((c) => {
      return `%${("00" + c.charCodeAt(0).toString(16)).slice(-2)}`;
    });

    return decodeURIComponent(array.join(""));
  } catch {
    return;
  }
}

function decodeJSON(jwt: string): any {
  const decoded = decode(jwt);

  if (!decoded) return;

  try {
    return JSON.parse(decoded);
  } catch {
    return;
  }
}

export default { decode, decodeJSON };

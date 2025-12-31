type AsyncCallback<T> = (error: Error | null, result?: T) => void;

async function tryAsync<T>(
  f: () => Promise<T>,
  c?: AsyncCallback<T>,
): Promise<T | undefined> {
  try {
    const r = await f();
    if (c) c(null, r);
    return r;
  } catch (e) {
    if (c) c(e as Error); // Ensure `e` is treated as an Error
    return;
  }
}

export default tryAsync;

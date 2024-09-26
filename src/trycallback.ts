type Callback<T> = (error: Error | null, result?: T) => void;

function trycallback<T>(f: () => T, c?: Callback<T>): T | undefined {
  try {
    const r = f();
    if (c) c(null, r);
    return r;
  } catch (e) {
    if (c) c(e as Error); // Ensure `e` is treated as an Error
    return;
  }
}

export default trycallback;

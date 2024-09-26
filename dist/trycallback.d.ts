type Callback<T> = (error: Error | null, result?: T) => void;
declare function trycallback<T>(f: () => T, c?: Callback<T>): T | undefined;
export default trycallback;

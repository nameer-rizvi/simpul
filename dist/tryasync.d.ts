type AsyncCallback<T> = (error: Error | null, result?: T) => void;
declare function tryasync<T>(f: () => Promise<T>, c?: AsyncCallback<T>): Promise<T | undefined>;
export default tryasync;

type AsyncCallback<T> = (error: Error | null, result?: T) => void;
declare function tryAsync<T>(f: () => Promise<T>, c?: AsyncCallback<T>): Promise<T | undefined>;
export default tryAsync;

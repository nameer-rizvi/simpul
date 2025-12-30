declare function removeNullValues<T extends Record<string, any>>(input?: T): Partial<T>;
export default removeNullValues;

declare function removeNullValues<T extends Record<string, any>>(object?: T): Partial<T>;
export default removeNullValues;

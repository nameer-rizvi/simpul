type ObjectType = Record<string, any>;
declare function rescale<T extends number | ObjectType>(input: T[], propName?: keyof ObjectType, [rangeMin, rangeMax]?: [number, number]): void;
export default rescale;

type NumericObject = Record<string, number>;
declare function rescale<T extends number | NumericObject>(input: T[], propName?: keyof NumericObject, [rangeMin, rangeMax]?: [number, number]): void;
export default rescale;

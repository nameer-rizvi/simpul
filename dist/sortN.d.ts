type NumericRecord = Record<string, unknown>;
interface SortProp<T> {
    name: keyof T;
    weight?: number;
    reverse?: boolean;
}
declare function sortN<T extends NumericRecord>(input: T[], ...props: (keyof T | SortProp<T>)[]): void;
export default sortN;

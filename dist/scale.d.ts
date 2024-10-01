interface Item {
    [key: string]: number;
}
declare function scale<T extends Item | number>(array: T[], propName?: keyof Item, [minRange, maxRange]?: [number, number]): void;
export default scale;

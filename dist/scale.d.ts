interface Item {
    [key: string]: any;
}
declare function scale<T extends Item | number>(array: T[], propName?: keyof Item, [minRange, maxRange]?: [number, number]): void;
export default scale;

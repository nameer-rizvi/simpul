declare function removeArrayItems<T>(input: T[] | undefined, finder: (item: T, index: number) => boolean, replaceWith?: T): {
    removed: T[];
    replaced: T[];
};
export default removeArrayItems;

declare function removeArrayItems<T>(array: T[] | undefined, finder: (item: T, index: number) => boolean, replaceWith?: T | undefined): {
    removed: T[];
    replaced: T[];
};
export default removeArrayItems;

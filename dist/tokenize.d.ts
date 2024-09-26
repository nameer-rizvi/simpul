declare function tokenize(string: string): {
    tokens: string[];
    set: string[];
    count: Record<string, number>;
};
export default tokenize;

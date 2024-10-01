declare function tokenize(string: string): {
    tokens: string[];
    set: string[];
    tokensCount: number;
    setCount: number;
    count: Record<string, number>;
};
export default tokenize;

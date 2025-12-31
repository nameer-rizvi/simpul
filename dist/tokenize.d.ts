declare function tokenize(input: string, asLowerCase: boolean): {
    tokens: string[];
    set: string[];
    tokensCount: number;
    setCount: number;
    count: Record<string, number>;
};
export default tokenize;

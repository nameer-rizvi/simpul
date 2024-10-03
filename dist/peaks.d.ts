interface Peak {
    index: number;
    value: number;
    category: "top" | "bottom";
    changeNum: number;
    changeRank?: number;
}
declare function peaks(array: number[], rank?: boolean): Peak[];
export default peaks;

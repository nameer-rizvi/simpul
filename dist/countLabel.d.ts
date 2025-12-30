declare function countLabel(input: number, plural: string, asFullCount: boolean): {
    full: string;
    number: string;
    label: string;
};
export default countLabel;

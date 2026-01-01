declare function countLabel(input: unknown, singular: unknown, asFullCount?: boolean): {
    full: string;
    number: string;
    label: string;
};
export default countLabel;

type NumberStringType = "$" | "#" | "%" | "x" | "+" | ".-" | ".+";
declare function numberString(input: string | number, types?: readonly NumberStringType[]): string | undefined;
export default numberString;

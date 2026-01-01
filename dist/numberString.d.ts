type NumberStringType = "$" | "#" | "%" | "x" | "+" | ".-" | ".+";
declare function numberString(input: unknown, types?: readonly NumberStringType[]): string | undefined;
export default numberString;

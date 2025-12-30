type NumberStringType = "$" | "#" | "%" | "x" | "+" | ".-" | ".+";
declare function numberstring(input: string | number, types?: readonly NumberStringType[]): string | undefined;
export default numberstring;

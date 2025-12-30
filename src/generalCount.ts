import validate from "./validate";

function generalCount(
  input: number,
  option: { lang?: string; upperCase?: boolean; [key: string]: any } = {},
): string | undefined {
  if (validate.isNumber(input)) {
    const { lang = "en-US", upperCase, ...rest } = option;

    const formatted = new Intl.NumberFormat(lang, {
      maximumFractionDigits: 1,
      notation: "compact",
      compactDisplay: "short",
      ...rest,
    }).format(input);

    if (!formatted || formatted === "NaN") return;

    return upperCase ? formatted.toUpperCase() : formatted.toLowerCase();
  }
}

export default generalCount;

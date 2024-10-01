function generalcount(
  count: number,
  option: { lang?: string; upperCase?: boolean; [key: string]: any } = {},
): string | undefined {
  const { lang = "en-US", upperCase, ...rest } = option;

  if (typeof count !== "number") return;

  let generalized = new Intl.NumberFormat(lang, {
    maximumFractionDigits: 1,
    notation: "compact",
    compactDisplay: "short",
    ...rest,
  }).format(count);

  if (generalized === "NaN" || !generalized) return;

  if (!upperCase) generalized = generalized.toLowerCase();

  return generalized;
}

export default generalcount;

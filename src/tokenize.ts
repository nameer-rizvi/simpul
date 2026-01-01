import validate from "./validate";

function tokenize(
  input: unknown,
  asLowerCase: boolean,
): {
  tokens: string[];
  set: string[];
  tokensCount: number;
  setCount: number;
  count: Record<string, number>;
} {
  if (!validate.isString(input)) {
    return {
      tokens: [],
      set: [],
      tokensCount: 0,
      setCount: 0,
      count: {},
    };
  }

  const cleaned = input
    .normalize("NFKC")
    .replace(/[^\p{L}\p{N}\p{Emoji_Presentation}\s'-]+/gu, " ")
    .replace(/\s+/g, " ")
    .trim();

  const tokens =
    cleaned.length > 0
      ? asLowerCase
        ? cleaned.toLowerCase().split(" ")
        : cleaned.split(" ")
      : [];

  const set = Array.from(new Set(tokens));

  const count: Record<string, number> = {};

  for (const token of tokens) count[token] = (count[token] || 0) + 1;

  return {
    tokens,
    set,
    tokensCount: tokens.length,
    setCount: set.length,
    count,
  };
}

export default tokenize;

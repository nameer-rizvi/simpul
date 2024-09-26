import trimPunctuation from "./trimPunctuation";

function tokenize(string: string): {
  tokens: string[];
  set: string[];
  count: Record<string, number>;
} {
  let tokens: string[] = [];

  const trimmed = trimPunctuation(string);

  if (trimmed) tokens = trimmed.split(" ").filter(Boolean);

  const set: string[] = [...new Set(tokens)];

  const count: Record<string, number> = {};

  for (const token of tokens) {
    count[token] = (count[token] || 0) + 1;
  }

  return { tokens, set, count };
}

export default tokenize;

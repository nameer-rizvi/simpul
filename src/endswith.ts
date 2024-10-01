interface Punctuation {
  period: boolean;
  question: boolean;
  exclamation: boolean;
  comma: boolean;
  colon: boolean;
  semicolon: boolean;
  dash: boolean;
  hyphen: boolean;
  bracket: boolean;
  brace: boolean;
  parenthesis: boolean;
  apostrophe: boolean;
  quotation: boolean;
  ellipsis: boolean;
  sentence?: boolean;
  incomplete1?: boolean;
  incomplete2?: boolean;
  incomplete3?: boolean;
}

function endswith(string: string = ""): Punctuation {
  string = string.trim();

  const lastChar = string[string.length - 1];

  const punctuation: Punctuation = {
    period: lastChar === ".",
    question: lastChar === "?",
    exclamation: lastChar === "!",
    comma: lastChar === ",",
    colon: lastChar === ":",
    semicolon: lastChar === ";",
    dash: lastChar === "-",
    hyphen: lastChar === "—" || lastChar === "-",
    bracket: lastChar === "]",
    brace: lastChar === "}",
    parenthesis: lastChar === ")",
    apostrophe: lastChar === "'", // Fixed typo
    quotation: lastChar === '"',
    ellipsis: string.endsWith("...") || string.endsWith("…"),
  };

  punctuation.sentence =
    punctuation.period ||
    punctuation.question ||
    punctuation.exclamation ||
    punctuation.ellipsis;

  punctuation.incomplete1 =
    punctuation.comma || punctuation.colon || punctuation.semicolon;

  punctuation.incomplete2 = punctuation.dash || punctuation.hyphen;

  punctuation.incomplete3 =
    punctuation.bracket ||
    punctuation.brace ||
    punctuation.parenthesis ||
    punctuation.apostrophe ||
    punctuation.quotation;

  return punctuation;
}

export default endswith;

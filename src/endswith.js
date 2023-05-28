function endswith(string = "") {
  string = string.trim();

  const period = string.endsWith(".");

  const question = string.endsWith("?");

  const exclamation = string.endsWith("!");

  const comma = string.endsWith(",");

  const colon = string.endsWith(":");

  const semicolon = string.endsWith(";");

  const dash = string.endsWith("-");

  const hyphen = string.endsWith("—");

  const bracket = string.endsWith("]");

  const brace = string.endsWith("}");

  const parenthesis = string.endsWith(")");

  const apostraphe = string.endsWith("'");

  const quotation = string.endsWith('"');

  const ellipsis = string.endsWith("...") || string.endsWith("…");

  const sentence = period || question || exclamation;

  const incomplete1 = comma || colon || semicolon;

  const incomplete2 = dash || hyphen;

  const incomplete3 =
    bracket || brace || parenthesis || apostraphe || quotation;

  return {
    period,
    question,
    exclamation,
    comma,
    colon,
    semicolon,
    dash,
    hyphen,
    bracket,
    brace,
    parenthesis,
    apostraphe,
    quotation,
    ellipsis,
    sentence,
    incomplete1,
    incomplete2,
    incomplete3,
  };
}

module.exports = endswith;

function endsWithPunctuation(string = "") {
  string = string && string.trim();

  if (string) {
    const punctuations = [".", "?", "!"];

    for (let i = 0; i < punctuations.length; i++) {
      if (string.endsWith(punctuations[i])) return true;
    }
  }

  return false;
}

module.exports = endsWithPunctuation;

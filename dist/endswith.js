"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function endswith(string = "") {
    string = string.trim();
    const lastChar = string[string.length - 1];
    const punctuation = {
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
exports.default = endswith;

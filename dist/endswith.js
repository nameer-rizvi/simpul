"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function endswith(input = "") {
    const string = input.trim();
    const last = string[string.length - 1];
    const punctuation = {
        period: last === ".",
        question: last === "?",
        exclamation: last === "!",
        comma: last === ",",
        colon: last === ":",
        semicolon: last === ";",
        dash: last === "-",
        hyphen: last === "-" || last === "—",
        bracket: last === "]",
        brace: last === "}",
        parenthesis: last === ")",
        apostrophe: last === "'",
        quotation: last === '"',
        ellipsis: string.endsWith("...") || string.endsWith("…"),
    };
    punctuation.isSentence =
        punctuation.period ||
            punctuation.question ||
            punctuation.exclamation ||
            punctuation.ellipsis;
    punctuation.isIncomplete = false;
    punctuation.isIncomplete1 =
        punctuation.comma || punctuation.colon || punctuation.semicolon;
    punctuation.isIncomplete2 = punctuation.dash || punctuation.hyphen;
    punctuation.isIncomplete3 =
        punctuation.bracket ||
            punctuation.brace ||
            punctuation.parenthesis ||
            punctuation.apostrophe ||
            punctuation.quotation;
    punctuation.isIncomplete =
        punctuation.isIncomplete1 ||
            punctuation.isIncomplete2 ||
            punctuation.isIncomplete3;
    return punctuation;
}
exports.default = endswith;

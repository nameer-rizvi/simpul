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
    isSentence?: boolean;
    isIncomplete?: boolean;
    isIncomplete1?: boolean;
    isIncomplete2?: boolean;
    isIncomplete3?: boolean;
}
declare function endswith(input?: string): Punctuation;
export default endswith;

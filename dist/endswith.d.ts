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
declare function endswith(string?: string): Punctuation;
export default endswith;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stringTest = {
    emoji: "❤️🚨⚡🐬➡️🔨🔺🚚📫👷🚧", // sequence of emojis including multi-codepoint ones
    punctuation: `\`~!@#$%^&*()-_=+[{]}\\|;",<.>/?Ω≈ç√∫˜µ≤≥÷æ…¬˚∆˙©ƒ∂ßåœ∑´®†¥¨ˆøπ“‘«≠–ºª•¶§∞¢£™¡`,
    htmlEntities: "&amp; &lt; &gt; &Agrave; &sect;", // common HTML entities
    accented: "Café naïve façade coöperate", // accents and diacritics
    mixedScripts: "Hello مرحبا こんにちは Привет", // Latin + Arabic + Japanese + Cyrillic
    whitespace: " \t\n\r  Multiple   spaces \n\t", // spaces, tabs, newlines
    hyphensAndApostrophes: "It's a test-case with hyphens and apostrophes", // hyphenated and apostrophe words
    numericStrings: "123 45.67 -89 $1,234.56", // numbers as strings
    specialSymbols: "© ™ ∑ ∆ Ω ∞ ≈ ≠ ≤ ≥", // math and copyright symbols
};
exports.default = stringTest;
// Sources for testing Unicode, emojis, punctuation, and HTML entities:
// - https://en.wikipedia.org/wiki/List_of_Unicode_characters
// - https://dev.w3.org/html5/html-author/charref

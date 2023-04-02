export function fromCamelCaseToWords(word: string): string {
    return word.replace(/([A-Z])/g, " $1");
}
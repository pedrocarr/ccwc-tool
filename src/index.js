console.time('start')
export function countBytes(data) {
    const byteLength = Buffer.byteLength(data);
    return byteLength
}

export function countLines(data) {
    const fileContentLines = data.split('\n').length;
    return fileContentLines
}

export function countWords(data) {
    const words = data.split(/\s+/);
    const nonEmptyWords = words.filter(word => word.length > 0);
    const wordCount = nonEmptyWords.length;
    return wordCount
}

export function countCharacters(data) {
    const fileCharacters = data.split('').length
    return fileCharacters
}
console.timeEnd('start')





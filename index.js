import fs from 'fs';


export function countBytes(fileName) {
  try {
    const fileContent = fs.readFileSync(fileName);

    const byteLength = Buffer.byteLength(fileContent, 'utf8');

    console.log(byteLength, fileName)
  } catch (error) {
    console.error(`Not an valid file. ${error.message}`);
    return -1;
  }
}

export function countLines(fileName) {
  try {
    const fileContent = fs.readFileSync(fileName, "utf-8");

    const fileContentLines = fileContent.split('\n').length;

    console.log(fileContentLines, fileName)
  } catch (error) {
    console.error(`Not an valid file, ${error.message}`);
    return -1;
  }
}

export function countCharacters(fileName) {
  try {
    const fileContent = fs.readFileSync(fileName, "utf-8");

     // Split the content into words using a regular expression
    const words = fileContent.split(/\s+/);

    // Filter out empty strings (resulting from multiple spaces)
    const nonEmptyWords = words.filter(word => word.length > 0);

    const wordCount = nonEmptyWords.length;

    console.log(wordCount, fileName)
  } catch (error) {
    console.error(`Not an valid file, ${error.message}`);
    return -1;
  }
}



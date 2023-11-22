#!/usr/bin/env node
import { countBytes, countCharacters, countLines, countWords } from './index.js'
import fs from 'fs'
const args = process.argv.slice(2);


if (args.length === 0 ) {
  console.log('Usage: ccwc -c|-l|-w|-m [fileName]');
  process.exit(0);
}

if (args.length > 2) {
  console.error('Not a valid command! Usage: ccwc -c|-l|-w|-m [fileName]');
  process.exit(1);
}

let command = args[0];

let fileName = args[1];

const commandOptions = ['-c', '-l', '-w', '-m']

try {
  if (command === commandOptions[0]) {
    if(!fileName) {
      const fileContent = fs.readFileSync(0, 'utf-8');
      console.log(`${countBytes(fileContent)}`)
      process.exit(0);
    }
    const fileContent = fs.readFileSync(fileName, 'utf-8');
    console.log(`${countBytes(fileContent)} ${fileName}`);
    process.exit(0);
  }
  if (command === commandOptions[1]) {
    if(!fileName) {
      const fileContent = fs.readFileSync(0, 'utf-8');
      console.log(`${countLines(fileContent)}`)
      process.exit(0);
    }
    const fileContent = fs.readFileSync(fileName, 'utf-8');
    console.log(`${countLines(fileContent)} ${fileName}`);
    process.exit(0);
  }
  if (command === commandOptions[2]) {
    if(!fileName) {
      const fileContent = fs.readFileSync(0, 'utf-8');
      console.log(`${countWords(fileContent)}`)
      process.exit(0);
    }
    const fileContent = fs.readFileSync(fileName, 'utf-8');
    console.log(`${countWords(fileContent)} ${fileName}`);
    process.exit(0);
  }
  if (command === commandOptions[3]) {
    if(!fileName) {
      const fileContent = fs.readFileSync(0, 'utf-8');
      console.log(`${countCharacters(fileContent)}`)
      process.exit(0);
    }
    const fileContent = fs.readFileSync(fileName, 'utf-8');
    console.log(`${countCharacters(fileContent)} ${fileName}`);
    process.exit(0);
  }
  if (!command.includes(commandOptions)) {
    fileName = args[0];
    if (args.length > 1) {
      console.error("Not a valid command! Usage: ccwc -c|-l|-w|-m [fileName]");
      process.exit(1);
    }
    const fileContent = fs.readFileSync(fileName, 'utf-8');
    console.log(`${countLines(fileContent)} ${countWords(fileContent)} ${countBytes(fileContent)} ${fileName}`)
  }
} catch (err) {
  console.error("Not a valid command! Usage: ccwc -c|-l|-w|-m [fileName]");
  process.exit(1);
}

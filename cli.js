#!/usr/bin/env node

import { countBytes, countLines, countCharacters } from './index.js'
const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('Usage: ccwc <command> [options]');
  process.exit(1);
}

const command = args[0];

const fileName = args[1];

switch (command) {
  case '-c':
    countBytes(fileName);
    break;
  case '-l':
    countLines(fileName);
    break;
  case '-w':
    countCharacters(fileName);
    break;
  default:
    console.log('Unknown command. Available commands: -c, -l');
    break;
}

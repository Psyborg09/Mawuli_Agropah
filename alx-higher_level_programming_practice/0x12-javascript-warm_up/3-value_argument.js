#!/usr/bin/node

const argCount = process.argv.length;

if (argCount - 2 === 0) {
  console.log('No argument');
} else if (argCount - 2 === 1) {
  console.log(process.argv[2]);
}

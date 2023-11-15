#!/usr/bin/node

if (process.argv.length - 2 === 0) {
  console.log('No argument');
} else if (process.argv.length - 2 === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
/* process.argv.length gives us the length of the arguments and the "-2" there takes away the first two arguments which
  * are the pathname and the program name */

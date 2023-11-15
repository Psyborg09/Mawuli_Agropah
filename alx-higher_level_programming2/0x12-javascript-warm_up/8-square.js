#!/usr/bin/node

const firstArg = parseInt(process.argv[2]);

if (isNaN(firstArg)) {
  console.log('Missing size');
} else {
  for (let i = 0; i < firstArg; i++) {
    for (let j = 0; j < firstArg; j++) {
      process.stdout.write('X');
    }
    console.log('');
  }
}

/*
 * In JavaScript, you can use process.stdout.write to print without
 * adding a newline character
 * This will print the specified text to the console without moving to a new line.
 * Keep in mind that subsequent output will appear on the same line unless
 * you explicitly add newline characters or use other formatting.
 *  */

#!/usr/bin/node

if (process.argv.length - 2 === 0) {
  console.log('Not a number');
} else if (isNaN(parseInt(process.argv[2]))) {
  console.log('Not a number');
} else {
  console.log(`My number: ${parseInt(process.argv[2])}`);
}

/*
 * parseInt is a JavaScript function that parses a string and returns an integer.
 * It takes two parameters: the string to be converted, and
 * an optional parameter called radix, which represents
 * the base of the numeral system.
 * It assumes base 10 if you pass in only one argument.
 * it basically converts string to integer. If you pass in "54",
 * it will return 54 which is now an int.
 * It's important to note that if the string cannot be converted
 * to a number, parseInt will return NaN (Not a Number).
 *
 *
 * isNaN is a JavaScript function that stands for "is Not a Number."
 * It returns true if the provided value is not a number; otherwise, it returns false.
 * This function can be used to check whether a given value
 * can be successfully converted to a number.
 *
 * isNaN checks if a value is NaN, so it's commonly used with parseInt or parseFloat
 * when dealing with user input or other situations where
 * you might encounter non-numeric values. */

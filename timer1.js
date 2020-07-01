// Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

/*
Example usage:

node timer1.js 10 3 5 15 9 

This will make it beep at:

3 seconds
5 seconds
9 seconds
10 seconds
15 seconds
*/


// no numbers are provided

// no negative numbers, skip negative numbers

// if arg is NaN, skip over

const args = process.argv.slice(2);
let delay = 0;
for (let arg of args) {
  arg = parseInt(arg, 10);
 if (!isNaN(arg) && arg >= 0 && args.length > 0) {
  delay = (arg*1000);
  setTimeout(() => {
    console.log("BEEP", arg);
    process.stdout.write('\x07'); // this doenst make a sound!
  }, delay);
 } 
}
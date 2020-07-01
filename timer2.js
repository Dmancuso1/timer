


// TIMER 2.

// receives a set of numbers (for timer duration in second) ahead of time via process.argv and listens for user inputs (from 1 - 9) and set timers "on demand".

/*------------------*/

// 1) The user can press b and it should beep right away
// 2) The user can input any number from 1 to 9 and it should
// a) immediately output "setting timer for x seconds...", and
// b) beep after that number of seconds has passed
// 3) The user can use ctrl + c to exit the program, at which point the program should say "Thanks for using me, ciao!" before terminating

/*------------------*/

const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

const args = process.argv.slice(2);
let delay = 0;

for (let arg of args) {
  arg = parseInt(arg, 10);
  if (!isNaN(arg) && arg >= 0 && args.length > 0) {
    delay = (arg * 1000);
    setTimeout(() => {
      console.log("BEEP", arg);
      process.stdout.write('\x07'); // this doenst make a sound!
    }, delay);
  }
}

stdin.on('data', (key) => {
  if (key === '\u0003') { // key is the CB func. that waits for the condition.
    console.log("Ciao for now!");
    process.exit();
  }
  if (key  === '\x62') {
    console.log(`"BEEP", 'b' was pressed!"`);
  }
  if (key >= '\x31' && key <= '\x39') {
    console.log(`Setting timer for ${key}`);
    setTimeout(() => {
      console.log(`BEEP! ${key} seconds has passed`);
      process.stdout.write('\x07'); // this doenst make a sound!
    }, key * 1000);
  }
});
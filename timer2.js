const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');
console.clear();

//const args = process.argv.slice(2);

const time = ['1','2','3','4','5','6','7','8','9'];

stdin.on('data', (typeKey) => {

  if (typeKey === 'b') {                                // => Press "b"
    process.stdout.write('\x07');

  } else if (time.includes(typeKey)) {                // => Any number starts to count
    console.log(`Setting timer for ${typeKey} seconds...`);
    setTimeout(()=> {
      process.stdout.write('\x07');
    },typeKey * 1000);

  } else if (typeKey === '\u0003') {                // => End message
    console.log("Thanks for using me, ciao!");
    process.exit();

  } else {
    console.log('Try typing a number from 1 to 9 to set a timer. Press "b" to listen a beep. Press ctrl + c to exit the program');
  }
});
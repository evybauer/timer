const args = process.argv.slice(2);

for (let eachTime of args) {
  const newTime =  Number(eachTime);
  if (Number.isNaN(newTime)) {
    continue;
  } else {
    const beep = () => {
      process.stdout.write('\x07');
    };
    setTimeout(beep, newTime * 1000);
  }
}

//node timer1.js 10 3 5 15 9




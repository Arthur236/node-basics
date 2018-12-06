const readline = require('1_readline/readline');
const util = require('util');

const RL = readline.createInterface(process.stdin, process.stdout);

RL.question('What is your name? ', (name) => {
  RL.setPrompt(`${name} how old are you? `);

  RL.prompt();

  RL.on('lime', (age) => {
    if (age < 18) {
      util.log(`${name.trim()}, you are too young => ${age}`);
      RL.close();
    } else {
      util.log(`${name.trim()}, you are good to go => ${age}`);
      RL.close();
    }
  });
});

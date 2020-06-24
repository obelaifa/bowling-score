/*

 main

 @author: Oliver Belaifa, 2020

*/

'use strict';

const readline = require('readline');
const util = require('util');

const Game = require('./Game');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

// Prepare readline.question for promisification
rl.question[util.promisify.custom] = (question) => {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
};

const question = util.promisify(rl.question);

const run = async () => {
  console.clear();
  
  const game = new Game();

  while (!game.done()) {
    game.print();
    const availablePins = game.getAvailablePins();
    const answer = await question(`\nPlease enter the number of pins knocked down (0 - ${availablePins}): `);
    console.clear();
    if (answer == 'q') {
      break;
    }
    const pinCount = parseInt(answer);
    if (pinCount >= 0 && pinCount <= game.getAvailablePins()) {
      game.knockDownPins(pinCount);
    }
  }
  game.print();
  console.log("\nThe game is over\n")
  rl.close();
}

run();
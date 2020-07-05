/*

 Game

 @author: Oliver Belaifa, 2020

*/

'use strict';

const Frame = require('./Frame');

class Game {
  #frames = [new Frame()];
  #frameIndex = 0;
  #maxFrameIndex;

  constructor(maxFrameCount = 10) {
    this.#maxFrameIndex = maxFrameCount - 1;
  }

  getAvailablePins() {
    return this.#frames[this.#frameIndex].getAvailablePins();
  }

  done() {
    return this.#frameIndex === this.#maxFrameIndex && this.#frames[this.#maxFrameIndex].done();
  }

  knockDownPins(pinCount) {
    // add bonus to the relevant frames
    for (let i = 0; i <= this.#frameIndex; ++i) {
      if (!this.#frames[i].bonusDone()) {
        this.#frames[i].addBonus(pinCount);
      } 
    }

    // knock down pins in the current frame
    this.#frames[this.#frameIndex].knockDownPins(pinCount);
    // if the frame is closed and if it's not the last frame then add a new frame
    if (this.#frames[this.#frameIndex].rollsDone() && this.#frameIndex < this.#maxFrameIndex) {
      ++this.#frameIndex;
      this.#frames.push(new Frame(this.#frameIndex === this.#maxFrameIndex));
    }
  }
  
  print() {
    // creates an objects for printing the frames using console.table
    const displayObj = this.#frames.reduce((acc, cur, i) => {
      const obj = { rolls: [] };
      const knockedDownPins = cur.getKnockedDownPins();
      if (knockedDownPins[0] !== undefined) {
        obj.rolls.push(knockedDownPins[0] === 10 ? 'X' : knockedDownPins[0]);
      }

      if (i !== this.#maxFrameIndex) {
        if (knockedDownPins[1] !== undefined) {
          obj.rolls.push(knockedDownPins[0] + knockedDownPins[1] === 10 ? '/' : knockedDownPins[1]);
        }
      } else {
        for (let j = 1; j <= 2; ++j) {
          if (knockedDownPins[j] !== undefined) {
            if (knockedDownPins[j] === 10) {
              obj.rolls.push('X');
            } else {
              if (knockedDownPins[j - 1] === 10 || (j === 2 && knockedDownPins[j - 2] + knockedDownPins[j - 1] === 10)) {
                obj.rolls.push(knockedDownPins[j]);
              } else {
                obj.rolls.push(knockedDownPins[j - 1] + knockedDownPins[j] === 10 ? '/' : knockedDownPins[j]);
              }
            }
          }
        }        
      }

      obj.score = cur.getScore();
      acc.score += cur.getScore();

      acc.frames[`Frame ${i + 1}`] = obj;

      return acc;
    }, 
    { 
      score: 0, 
      frames: {},
    });
    
    console.log("  Bowling Score Calculator");
    console.table(displayObj.frames);
    console.log('Total score: ', displayObj.score);
  }
}

module.exports = Game;
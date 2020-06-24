/*

 Frame

 @author: Oliver Belaifa, 2020

*/

'use strict';

class Frame {
  #pins = 10;  // available pins
  #rolls = 2;  // available rolls
  #bonus = 0;  // bonus rolls
  #score = 0;  // score of the frame
  #knockedDownPins = [];
  #lastFrame;

  constructor(lastFrame) {
    this.#lastFrame = lastFrame;
  } 

  getScore() {
    return this.#score;
  }

  getKnockedDownPins() {
    return this.#knockedDownPins;
  }
  
  getAvailablePins() {
    return this.#pins;
  }

  rollsDone() {
    return this.#rolls == 0;
  }

  bonusDone() {
    return this.#bonus == 0;
  }

  done() {
    return this.rollsDone() && this.bonusDone();
  }

  knockDownPins(pinCount) {
    this.#pins -= pinCount;
    this.#knockedDownPins.push(pinCount);
    this.#score += pinCount;
    this.#rolls--;

    if (this.#lastFrame) {
      // special handling of the last frame
      if (this.#pins == 0 && this.#knockedDownPins.length < 3) {
        this.#pins = 10;
        if (this.#rolls + this.#knockedDownPins.length == 2) {
          ++this.#rolls;
        }
      }
    } else {
      if (this.#pins == 0) {
        // in case of a strike bonus rolls is set to 2
        // in case of a spare bonus rolls is set to 1
        this.#bonus = this.#rolls + 1;
        this.#rolls = 0;
      }
    }
  }

  addBonus(pinCount) {
    this.#score += pinCount;
    this.#bonus--;
  }
}

module.exports = Frame;
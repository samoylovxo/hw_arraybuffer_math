/* eslint-disable linebreak-style */
// import Character from './Character';

export default class MathChar {
  constructor(distanceAttack) {
    this.distanceAttack = distanceAttack;
  }

  /**
   * @param {boolean} stoned
   */
  set setStoned(stoned) {
    this.stoned = stoned;
  }

  get getStoned() {
    return this.stoned;
  }

  /**
   * @param {number} attack
   */
  set setAttack(attack) {
    const oneCage = 10;
    this.attack = attack - (attack / 100) * (this.distanceAttack * oneCage) + 10;
  }

  get getAttack() {
    if (this.getStoned) {
      this.attack -= Math.log2(this.distanceAttack) * 5;
    }

    if (this.attack <= 0) {
      this.attack = 0;
    }

    return Math.floor(this.attack);
  }
}

// const mathChar = new MathChar(2);
// mathChar.setStoned = true;
// mathChar.setAttack = 100;
// console.log(mathChar);
// console.log(mathChar.getAttack);

// class Daemon extends MathChar {
//   constructor(distanceAttack) {
//     super(distanceAttack);
//   }
// }

// class Magician extends MathChar {
//   constructor(distanceAttack) {
//     super(distanceAttack);
//   }
// }

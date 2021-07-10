/* eslint-disable linebreak-style */

import MathChar from './MathChar';

export default class Daemon extends MathChar {
  constructor(distanceAttack) {
    super(distanceAttack);
    this.attack = 10;
    this.defence = 40;
  }
}

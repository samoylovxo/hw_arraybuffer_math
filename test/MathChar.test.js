/* eslint-disable linebreak-style */
import MathChar from '../src/js/MathChar';
import Daemon from '../src/js/Daemon';
import Magician from '../src/js/Magician';

test('MathChar stoned = true, distanceAttack = 2', () => {
  const mathChar = new MathChar(2);
  mathChar.setStoned = true;
  mathChar.setAttack = 100;

  expect(mathChar.getAttack).toBe(85);
});

test('MathChar stoned = false, distanceAttack = 4', () => {
  const mathChar = new MathChar(4);
  mathChar.setStoned = false;
  mathChar.setAttack = 100;

  expect(mathChar.getAttack).toBe(70);
});

test('MathChar. Check on <0 attack', () => {
  const mathChar = new MathChar(20);
  mathChar.setStoned = true;
  mathChar.setAttack = 10;

  expect(mathChar.getAttack).toBe(0);
});

test('Daemon stoned = true, distanceAttack = 2', () => {
  const daemon = new Daemon(2);
  daemon.setStoned = true;
  daemon.setAttack = 100;

  expect(daemon.getAttack).toBe(85);
});

test('Daemon stoned = false, distanceAttack = 4', () => {
  const daemon = new Daemon(4);
  daemon.setStoned = false;
  daemon.setAttack = 100;

  expect(daemon.getAttack).toBe(70);
});

test('Daemon. Check on <0 attack', () => {
  const daemon = new Daemon(20);
  daemon.setStoned = true;
  daemon.setAttack = 10;

  expect(daemon.getAttack).toBe(0);
});

test('Magician stoned = true, distanceAttack = 2', () => {
  const magician = new Magician(2);
  magician.setStoned = true;
  magician.setAttack = 100;

  expect(magician.getAttack).toBe(85);
});

test('Magician stoned = false, distanceAttack = 4', () => {
  const magician = new Magician(4);
  magician.setStoned = false;
  magician.setAttack = 100;

  expect(magician.getAttack).toBe(70);
});

test('Magician. Check on <0 attack', () => {
  const magician = new Magician(20);
  magician.setStoned = true;
  magician.setAttack = 10;

  expect(magician.getAttack).toBe(0);
});

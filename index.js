let game = require('./game.js');
let weapon = require('./weapon.js');
let enemy = require('./enemy');
let szoveg = require('./szoveg.js');

let life = 100;

const main = () => {
  let name = game.getName();
  game.welcome(name);
  console.log('\n');

  let chosenWep = game.choseYourWeapon(weapon.shadowmourne, 'minDamage', 'maxDamage',
    weapon.recruitShortsword, weapon.pencil);
  let daenemy = game.randomEnemy(enemy.murloc, enemy.orc, enemy.troll);

  console.log('\n');
  console.log(szoveg.kezdes, daenemy['name'], szoveg.kezdes2);
  console.log('\n');

  console.log(daenemy);
  life = game.fight(daenemy, 'damage', 'health', 'name', life, chosenWep, 'minDamage', 'maxDamage');

  console.log('\n');
  console.log(szoveg.elsoGyozelem);
  console.log('\n');

  if (life > 0) {
    console.log('----------------------------------------------------------');
    console.log('----------------------------------------------------------');
    daenemy = enemy.hydra;
    console.log(daenemy);
    life = game.hydraFight(daenemy, 'damage', 'health', 'name', life, chosenWep, 'minDamage', 'maxDamage');
  }

  console.log('\n');
  console.log(szoveg.masodikGyozelem);
  console.log('\n');

  if (life > 0) {
    console.log('----------------------------------------------------------');
    console.log('----------------------------------------------------------');
    daenemy = enemy.thanos;
    console.log(daenemy);
    life = game.thanosFight(daenemy, 'damage', 'health', 'name', life, chosenWep, 'minDamage', 'maxDamage');
  }
  console.log('\n');
  console.log(szoveg.vegsoGyozelem);
  console.log('\n');
};

main();

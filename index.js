let game = require('./game.js');
let weapon = require('./weapon.js');

let life = 100;

const main = () => {
  /* let name = game.getName();
  game.welcome(name); */ let name = 'xy';
  let chosenWep = game.choseYourWeapon(name, weapon.shadowmourne, 'minDamage', 'maxDamage',
    weapon.recruitShortsword, weapon.pencil);
  game.firstEncounter(chosenWep, 'minDamage');
  console.log(chosenWep);
};

main();
